__d(
  "WAWebBweMLModelManager",
  [
    "WALogger",
    "WAWebABProps",
    "WAWebBweModelHashes",
    "WAWebBweModelPathProvider",
    "WAWebIDBFSStorageBackend",
    "WAWebMLModelCacheManager",
    "WAWebMLModelFetcher",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c,
      d,
      m,
      p = "WAWebBweMLModelManager",
      _ = "ml_model_download_skip_hash_check",
      f = { inited: !1, cacheManager: null };
    async function g(t) {
      if (!f.inited)
        try {
          var n = o("WAWebBweModelPathProvider").getCacheManager();
          if (n != null && n.isReady()) {
            ((f.cacheManager = n), (f.inited = !0));
            return;
          }
          var r = o("WAWebIDBFSStorageBackend").createIDBFSStorageBackend();
          (r.initialize(t),
            (f.cacheManager = o(
              "WAWebMLModelCacheManager",
            ).createMLModelCacheManager(r)),
            o("WAWebBweModelPathProvider").setCacheManager(f.cacheManager),
            (f.inited = !0),
            await y());
        } catch (t) {
          o("WALogger").ERROR(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "",
                "/setupMLModelStorage: Failed to initialize: ",
                "",
              ])),
            p,
            t instanceof Error ? t.message : String(t),
          );
        }
    }
    async function h(e) {
      var t = [],
        n = [],
        r = f.cacheManager,
        a = [];
      for (var i of e) {
        if (r != null && r.isReady()) {
          var l = r.getModelFilePath(
            o("WAWebBweModelHashes").BWE_MODEL_NAME,
            i,
          );
          if (l != null) {
            t.push(i);
            continue;
          }
        }
        a.push(i);
      }
      if (a.length === 0) return { successful: t, failed: n };
      var c = a.map(function (e) {
          return { name: o("WAWebBweModelHashes").BWE_MODEL_NAME, version: e };
        }),
        d = await o("WAWebMLModelFetcher").fetchMLModelsFromNetwork(
          c,
          { bytecodeVersion: [] },
          {
            hashCheckDeterminer: o("WAWebBweModelHashes")
              .determineHashCheckMethod,
            shouldSkipHashCheck: C(),
          },
        ),
        m = [],
        _ = [],
        g = async function (n) {
          (t.push(n.version),
            r != null &&
              r.isReady() &&
              m.push(
                r.storeModel(n.modelName, n.version, n.data).then(function (e) {
                  e.success || _.push(n.version);
                }),
              ));
        };
      for (var h of d.successful) await g(h);
      (await Promise.all(m),
        _.length > 0 &&
          o("WALogger").WARN(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "",
                "/fetchBweModels: Failed to cache ",
                " models: versions ",
                "",
              ])),
            p,
            _.length,
            _.join(", "),
          ));
      var y = [];
      for (var b of d.failed) {
        var v,
          S,
          R,
          L,
          E,
          k =
            (v =
              (S = (R = b.error) == null ? void 0 : R.reason) != null
                ? S
                : (L = b.error) == null
                  ? void 0
                  : L.type) != null
              ? v
              : "unknown";
        if (
          (n.push({
            version: (E = b.request.version) != null ? E : 0,
            error: k,
          }),
          y.length < 3)
        ) {
          var I;
          y.push(
            "v" + ((I = b.request.version) != null ? I : "unknown") + ": " + k,
          );
        }
      }
      return (
        n.length > 0 &&
          o("WALogger").ERROR(
            u ||
              (u = babelHelpers.taggedTemplateLiteralLoose([
                "",
                "/fetchBweModels: Failed to fetch ",
                " models => ",
                "",
              ])),
            p,
            n.length,
            y.join("; "),
          ),
        { successful: t, failed: n }
      );
    }
    async function y() {
      var e = f.cacheManager;
      if (!(e == null || !e.isReady())) {
        var t = e.listAllModels();
        if (t.success) {
          var n = new Set(v()),
            r = [];
          for (var a of t.value)
            a.modelName === o("WAWebBweModelHashes").BWE_MODEL_NAME &&
              (n.has(a.version) ||
                r.push({
                  modelName: o("WAWebBweModelHashes").BWE_MODEL_NAME,
                  version: a.version,
                }));
          r.length > 0 &&
            (o("WALogger").LOG(
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
                  "",
                  "/cleanupStaleModels: Removing ",
                  " stale models: ",
                  "",
                ])),
              p,
              r.length,
              r
                .map(function (e) {
                  return e.version;
                })
                .join(", "),
            ),
            await e.deleteMultipleModels(r));
        }
      }
    }
    function C() {
      var e = o("WAWebABProps").getABPropConfigValue(_);
      return e != null ? e : !0;
    }
    function b() {
      var e;
      return (e = o("WAWebABProps").getABPropConfigValue(
        "enable_ml_bwe_model_download",
      )) != null
        ? e
        : !1;
    }
    function v() {
      var e = new Set(),
        t = [
          "wavoip_ml_bwe_plc_model_download_versions",
          "wavoip_ml_bwe_undershoot_model_download_versions",
          "wavoip_ml_bwe_tr_model_download_versions",
          "wavoip_ml_bwe_cong_model_download_versions",
          "wavoip_ml_bwe_hd_target_model_download_versions",
          "wavoip_ml_media_vmos_model_download_versions",
          "wavoip_ml_media_vsr_model_download_versions",
          "wavoip_ml_media_automos_model_download_versions",
          "wavoip_ml_media_ns_model_download_versions",
          "wavoip_ml_bwe_rl_model_download_versions",
          "wavoip_ml_bwe_gc_undershoot_model_download_versions",
          "wavoip_ml_bwe_gc_hd_target_model_download_versions",
          "wavoip_ml_temp_model_download_versions",
          "wavoip_ml_transport_download_versions",
          "wavoip_ml_nadl_model_download_versions",
        ];
      for (var n of t) {
        var r = o("WAWebABProps").getABPropConfigValue(n);
        if (!(r == null || typeof r != "string")) {
          var a = r.trim();
          if (a !== "") {
            var i = a.split(",");
            for (var l of i) {
              var s = l.trim();
              if (s !== "") {
                var u = parseInt(s, 10);
                !isNaN(u) && u > 0 && e.add(u);
              }
            }
          }
        }
      }
      var c = Array.from(e);
      return c;
    }
    async function S() {
      if (!b()) return null;
      var e = v();
      o("WALogger").LOG(
        d ||
          (d = babelHelpers.taggedTemplateLiteralLoose([
            "",
            "/downloadBweModels: Downloading ",
            " model versions: ",
            "",
          ])),
        p,
        e.length,
        e.join(", "),
      );
      var t = await h(e);
      return (
        o("WALogger").LOG(
          m ||
            (m = babelHelpers.taggedTemplateLiteralLoose([
              "",
              "/downloadBweModels: Download complete - success: ",
              ", failed: ",
              "",
            ])),
          p,
          t.successful.length,
          t.failed.length,
        ),
        t
      );
    }
    async function R(e) {
      (await g(e), await S());
    }
    l.initBweMLModelsForCall = R;
  },
  98,
);
