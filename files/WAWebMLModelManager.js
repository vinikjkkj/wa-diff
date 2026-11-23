__d(
  "WAWebMLModelManager",
  [
    "WALogger",
    "WAWebABProps",
    "WAWebIDBFSStorageBackend",
    "WAWebMLModelCacheManager",
    "WAWebMLModelFetcher",
    "WAWebMLModelHashes",
    "WAWebMLModelNamespaces",
    "WAWebMLModelPathProvider",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c,
      d,
      m = "WAWebMLModelManager",
      p = "ml_model_download_skip_hash_check",
      _ = { inited: !1, cacheManager: null };
    async function f(t) {
      if (!_.inited)
        try {
          var n = o("WAWebMLModelPathProvider").getCacheManager();
          if (n != null && n.isReady()) {
            ((_.cacheManager = n), (_.inited = !0));
            return;
          }
          var r = o("WAWebIDBFSStorageBackend").createIDBFSStorageBackend();
          (r.initialize(t),
            (_.cacheManager = o(
              "WAWebMLModelCacheManager",
            ).createMLModelCacheManager(r)),
            o("WAWebMLModelPathProvider").setCacheManager(_.cacheManager),
            (_.inited = !0),
            await h());
        } catch (t) {
          o("WALogger").ERROR(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "",
                "/setupMLModelStorage: Failed to initialize: ",
                "",
              ])),
            m,
            t instanceof Error ? t.message : String(t),
          );
        }
    }
    async function g(e, t) {
      var n = [],
        r = [],
        a = _.cacheManager,
        i = [];
      for (var l of e) {
        if (a != null && a.isReady()) {
          var c = a.getModelFilePath(l.modelName, l.version);
          if (c != null) {
            n.push(l);
            continue;
          }
        }
        i.push(l);
      }
      if (i.length === 0) return { successful: n, failed: r };
      var d = i.map(function (e) {
          return { name: e.modelName, version: e.version };
        }),
        p = await o("WAWebMLModelFetcher").fetchMLModelsFromNetwork(
          d,
          { bytecodeVersion: [] },
          { hashCheckDeterminer: t, shouldSkipHashCheck: y() },
        ),
        f = [],
        g = [],
        h = async function (t) {
          (n.push({ modelName: t.modelName, version: t.version }),
            a != null &&
              a.isReady() &&
              f.push(
                a.storeModel(t.modelName, t.version, t.data).then(function (e) {
                  e.success || g.push(t.modelName + " v" + t.version);
                }),
              ));
        };
      for (var C of p.successful) await h(C);
      (await Promise.all(f),
        g.length > 0 &&
          o("WALogger").WARN(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "",
                "/fetchModels: Failed to cache ",
                " models: ",
                "",
              ])),
            m,
            g.length,
            g.join(", "),
          ));
      var b = [];
      for (var v of p.failed) {
        var S,
          R,
          L,
          E,
          k,
          I,
          T =
            (S =
              (R = (L = v.error) == null ? void 0 : L.reason) != null
                ? R
                : (E = v.error) == null
                  ? void 0
                  : E.type) != null
              ? S
              : "unknown",
          D = (k = v.request.name) != null ? k : "unknown";
        if (
          (r.push({
            modelName: D,
            version: (I = v.request.version) != null ? I : 0,
            error: T,
          }),
          b.length < 3)
        ) {
          var x;
          b.push(
            D +
              " v" +
              ((x = v.request.version) != null ? x : "unknown") +
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
                "/fetchModels: Failed to fetch ",
                " models => ",
                "",
              ])),
            m,
            r.length,
            b.join("; "),
          ),
        { successful: n, failed: r }
      );
    }
    async function h() {
      var e = _.cacheManager;
      if (!(e == null || !e.isReady())) {
        var t = e.listAllModels();
        if (t.success) {
          var n = v();
          n.set(o("WAWebMLModelHashes").LEGACY_MODEL_NAMESPACE, new Set(C()));
          var r = [];
          for (var a of t.value) {
            var i = n.get(a.modelName);
            i != null &&
              (i.has(a.version) ||
                r.push({ modelName: a.modelName, version: a.version }));
          }
          r.length > 0 &&
            (o("WALogger").LOG(
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
                  "",
                  "/cleanupStaleModels: Removing ",
                  " stale models",
                ])),
              m,
              r.length,
            ),
            await e.deleteMultipleModels(r));
        }
      }
    }
    function y() {
      var e = o("WAWebABProps").getABPropConfigValue(p);
      return e != null ? e : !0;
    }
    function C() {
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
      for (var n of t) b(e, o("WAWebABProps").getABPropConfigValue(n));
      var r = Array.from(e);
      return r;
    }
    function b(e, t) {
      if (t != null) {
        var n = t.trim();
        if (n !== "") {
          var r = n.split(",");
          for (var o of r) {
            var a = o.trim();
            if (a !== "") {
              var i = parseInt(a, 10);
              !isNaN(i) && i > 0 && e.add(i);
            }
          }
        }
      }
    }
    function v() {
      var e = new Map();
      for (var t of o("WAWebMLModelNamespaces").PER_TYPE_NAMESPACE_ABPROPS) {
        var n,
          r = t.abProps,
          a = t.namespace,
          i = (n = e.get(a)) != null ? n : new Set();
        for (var l of r) b(i, o("WAWebABProps").getABPropConfigValue(l));
        e.set(a, i);
      }
      return e;
    }
    async function S() {
      var e = C(),
        t = await g(
          e.map(function (e) {
            return {
              modelName: o("WAWebMLModelHashes").LEGACY_MODEL_NAMESPACE,
              version: e,
            };
          }),
          o("WAWebMLModelHashes").determineHashCheckMethod,
        ),
        n = await R();
      return (
        o("WALogger").LOG(
          d ||
            (d = babelHelpers.taggedTemplateLiteralLoose([
              "",
              "/downloadModels: ",
              " ok, ",
              " failed",
            ])),
          m,
          t.successful.length + n.successful.length,
          t.failed.length + n.failed.length,
        ),
        t
      );
    }
    async function R() {
      var e = [];
      for (var t of v()) {
        var n = t[0],
          r = t[1];
        for (var o of r) e.push({ modelName: n, version: o });
      }
      return e.length === 0 ? { successful: [], failed: [] } : g(e, L);
    }
    function L(e, t, n) {
      return t
        ? n != null && n !== ""
          ? { type: "use-md5", md5Hash: n }
          : { type: "skip" }
        : {
            type: "error",
            reason:
              "SHA-256 hash not available for per-type namespace model version " +
              e +
              " and hash check is required",
          };
    }
    async function E(e) {
      (await f(e), await S());
    }
    l.initMLModelsForCall = E;
  },
  98,
);
