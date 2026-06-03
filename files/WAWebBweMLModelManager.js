__d(
  "WAWebBweMLModelManager",
  [
    "Promise",
    "WALogger",
    "WAWebABProps",
    "WAWebBweModelHashes",
    "WAWebBweModelPathProvider",
    "WAWebIDBFSStorageBackend",
    "WAWebMLModelCacheManager",
    "WAWebMLModelFetcher",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c,
      d,
      m,
      p,
      _ = "WAWebBweMLModelManager",
      f = "ml_model_download_skip_hash_check",
      g = { inited: !1, cacheManager: null };
    function h(e) {
      return y.apply(this, arguments);
    }
    function y() {
      return (
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          if (!g.inited)
            try {
              var n = o("WAWebBweModelPathProvider").getCacheManager();
              if (n != null && n.isReady()) {
                ((g.cacheManager = n), (g.inited = !0));
                return;
              }
              var r = o("WAWebIDBFSStorageBackend").createIDBFSStorageBackend();
              (r.initialize(t),
                (g.cacheManager = o(
                  "WAWebMLModelCacheManager",
                ).createMLModelCacheManager(r)),
                o("WAWebBweModelPathProvider").setCacheManager(g.cacheManager),
                (g.inited = !0),
                yield v());
            } catch (t) {
              o("WALogger").ERROR(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "",
                    "/setupMLModelStorage: Failed to initialize: ",
                    "",
                  ])),
                _,
                t instanceof Error ? t.message : String(t),
              );
            }
        })),
        y.apply(this, arguments)
      );
    }
    function C(e) {
      return b.apply(this, arguments);
    }
    function b() {
      return (
        (b = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = [],
            r = [],
            a = g.cacheManager,
            i = [];
          for (var l of e) {
            if (a != null && a.isReady()) {
              var c = a.getModelFilePath(
                o("WAWebBweModelHashes").BWE_MODEL_NAME,
                l,
              );
              if (c != null) {
                t.push(l);
                continue;
              }
            }
            i.push(l);
          }
          if (i.length === 0) return { successful: t, failed: r };
          var d = i.map(function (e) {
              return {
                name: o("WAWebBweModelHashes").BWE_MODEL_NAME,
                version: e,
              };
            }),
            m = yield o("WAWebMLModelFetcher").fetchMLModelsFromNetwork(
              d,
              { bytecodeVersion: [] },
              {
                hashCheckDeterminer: o("WAWebBweModelHashes")
                  .determineHashCheckMethod,
                shouldSkipHashCheck: R(),
              },
            ),
            f = [],
            h = [],
            y = function* (n) {
              (t.push(n.version),
                a != null &&
                  a.isReady() &&
                  f.push(
                    a
                      .storeModel(n.modelName, n.version, n.data)
                      .then(function (e) {
                        e.success || h.push(n.version);
                      }),
                  ));
            };
          for (var C of m.successful) yield* y(C);
          (yield (p || (p = n("Promise"))).all(f),
            h.length > 0 &&
              o("WALogger").WARN(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "",
                    "/fetchBweModels: Failed to cache ",
                    " models: versions ",
                    "",
                  ])),
                _,
                h.length,
                h.join(", "),
              ));
          var b = [];
          for (var v of m.failed) {
            var S,
              L,
              E,
              k,
              I,
              T =
                (S =
                  (L = (E = v.error) == null ? void 0 : E.reason) != null
                    ? L
                    : (k = v.error) == null
                      ? void 0
                      : k.type) != null
                  ? S
                  : "unknown";
            if (
              (r.push({
                version: (I = v.request.version) != null ? I : 0,
                error: T,
              }),
              b.length < 3)
            ) {
              var D;
              b.push(
                "v" +
                  ((D = v.request.version) != null ? D : "unknown") +
                  ": " +
                  T,
              );
            }
          }
          return (
            r.length > 0 &&
              o("WALogger").ERROR(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "",
                    "/fetchBweModels: Failed to fetch ",
                    " models => ",
                    "",
                  ])),
                _,
                r.length,
                b.join("; "),
              ),
            { successful: t, failed: r }
          );
        })),
        b.apply(this, arguments)
      );
    }
    function v() {
      return S.apply(this, arguments);
    }
    function S() {
      return (
        (S = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = g.cacheManager;
          if (!(e == null || !e.isReady())) {
            var t = e.listAllModels();
            if (t.success) {
              var n = new Set(E()),
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
                  _,
                  r.length,
                  r
                    .map(function (e) {
                      return e.version;
                    })
                    .join(", "),
                ),
                yield e.deleteMultipleModels(r));
            }
          }
        })),
        S.apply(this, arguments)
      );
    }
    function R() {
      var e = o("WAWebABProps").getABPropConfigValue(f);
      return e != null ? e : !0;
    }
    function L() {
      var e;
      return (e = o("WAWebABProps").getABPropConfigValue(
        "enable_ml_bwe_model_download",
      )) != null
        ? e
        : !1;
    }
    function E() {
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
    function k() {
      return I.apply(this, arguments);
    }
    function I() {
      return (
        (I = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          if (!L()) return null;
          var e = E();
          o("WALogger").LOG(
            d ||
              (d = babelHelpers.taggedTemplateLiteralLoose([
                "",
                "/downloadBweModels: Downloading ",
                " model versions: ",
                "",
              ])),
            _,
            e.length,
            e.join(", "),
          );
          var t = yield C(e);
          return (
            o("WALogger").LOG(
              m ||
                (m = babelHelpers.taggedTemplateLiteralLoose([
                  "",
                  "/downloadBweModels: Download complete - success: ",
                  ", failed: ",
                  "",
                ])),
              _,
              t.successful.length,
              t.failed.length,
            ),
            t
          );
        })),
        I.apply(this, arguments)
      );
    }
    function T(e) {
      return D.apply(this, arguments);
    }
    function D() {
      return (
        (D = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          (yield h(e), yield k());
        })),
        D.apply(this, arguments)
      );
    }
    l.initBweMLModelsForCall = T;
  },
  98,
);
