__d(
  "WAWebMLModelManager",
  [
    "Promise",
    "WALogger",
    "WAWebABProps",
    "WAWebIDBFSStorageBackend",
    "WAWebMLModelCacheManager",
    "WAWebMLModelFetcher",
    "WAWebMLModelHashes",
    "WAWebMLModelNamespaces",
    "WAWebMLModelPathProvider",
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
      p = "WAWebMLModelManager",
      _ = "ml_model_download_skip_hash_check",
      f = { inited: !1, cacheManager: null };
    function g(e) {
      return h.apply(this, arguments);
    }
    function h() {
      return (
        (h = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          if (!f.inited)
            try {
              var n = o("WAWebMLModelPathProvider").getCacheManager();
              if (n != null && n.isReady()) {
                ((f.cacheManager = n), (f.inited = !0));
                return;
              }
              var r = o("WAWebIDBFSStorageBackend").createIDBFSStorageBackend();
              (r.initialize(t),
                (f.cacheManager = o(
                  "WAWebMLModelCacheManager",
                ).createMLModelCacheManager(r)),
                o("WAWebMLModelPathProvider").setCacheManager(f.cacheManager),
                (f.inited = !0),
                yield b());
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
        })),
        h.apply(this, arguments)
      );
    }
    function y(e, t) {
      return C.apply(this, arguments);
    }
    function C() {
      return (
        (C = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var r = [],
            a = [],
            i = f.cacheManager,
            l = [];
          for (var c of e) {
            if (i != null && i.isReady()) {
              var d = i.getModelFilePath(c.modelName, c.version);
              if (d != null) {
                r.push(c);
                continue;
              }
            }
            l.push(c);
          }
          if (l.length === 0) return { successful: r, failed: a };
          var _ = l.map(function (e) {
              return { name: e.modelName, version: e.version };
            }),
            g = yield o("WAWebMLModelFetcher").fetchMLModelsFromNetwork(
              _,
              { bytecodeVersion: [] },
              { hashCheckDeterminer: t, shouldSkipHashCheck: S() },
            ),
            h = [],
            y = [],
            C = function* (t) {
              (r.push({ modelName: t.modelName, version: t.version }),
                i != null &&
                  i.isReady() &&
                  h.push(
                    i
                      .storeModel(t.modelName, t.version, t.data)
                      .then(function (e) {
                        e.success || y.push(t.modelName + " v" + t.version);
                      }),
                  ));
            };
          for (var b of g.successful) yield* C(b);
          (yield (m || (m = n("Promise"))).all(h),
            y.length > 0 &&
              o("WALogger").WARN(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "",
                    "/fetchModels: Failed to cache ",
                    " models: ",
                    "",
                  ])),
                p,
                y.length,
                y.join(", "),
              ));
          var v = [];
          for (var R of g.failed) {
            var L,
              E,
              k,
              I,
              T,
              D,
              x =
                (L =
                  (E = (k = R.error) == null ? void 0 : k.reason) != null
                    ? E
                    : (I = R.error) == null
                      ? void 0
                      : I.type) != null
                  ? L
                  : "unknown",
              $ = (T = R.request.name) != null ? T : "unknown";
            if (
              (a.push({
                modelName: $,
                version: (D = R.request.version) != null ? D : 0,
                error: x,
              }),
              v.length < 3)
            ) {
              var P;
              v.push(
                $ +
                  " v" +
                  ((P = R.request.version) != null ? P : "unknown") +
                  ": " +
                  x,
              );
            }
          }
          return (
            a.length > 0 &&
              o("WALogger").ERROR(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "",
                    "/fetchModels: Failed to fetch ",
                    " models => ",
                    "",
                  ])),
                p,
                a.length,
                v.join("; "),
              ),
            { successful: r, failed: a }
          );
        })),
        C.apply(this, arguments)
      );
    }
    function b() {
      return v.apply(this, arguments);
    }
    function v() {
      return (
        (v = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = f.cacheManager;
          if (!(e == null || !e.isReady())) {
            var t = e.listAllModels();
            if (t.success) {
              var n = E();
              n.set(
                o("WAWebMLModelHashes").LEGACY_MODEL_NAMESPACE,
                new Set(R()),
              );
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
                  p,
                  r.length,
                ),
                yield e.deleteMultipleModels(r));
            }
          }
        })),
        v.apply(this, arguments)
      );
    }
    function S() {
      var e = o("WAWebABProps").getABPropConfigValue(_);
      return e != null ? e : !0;
    }
    function R() {
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
      for (var n of t) L(e, o("WAWebABProps").getABPropConfigValue(n));
      var r = Array.from(e);
      return r;
    }
    function L(e, t) {
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
    function E() {
      var e = new Map();
      for (var t of o("WAWebMLModelNamespaces").PER_TYPE_NAMESPACE_ABPROPS) {
        var n,
          r = t.abProps,
          a = t.namespace,
          i = (n = e.get(a)) != null ? n : new Set();
        for (var l of r) L(i, o("WAWebABProps").getABPropConfigValue(l));
        e.set(a, i);
      }
      return e;
    }
    function k() {
      return I.apply(this, arguments);
    }
    function I() {
      return (
        (I = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = R(),
            t = yield y(
              e.map(function (e) {
                return {
                  modelName: o("WAWebMLModelHashes").LEGACY_MODEL_NAMESPACE,
                  version: e,
                };
              }),
              o("WAWebMLModelHashes").determineHashCheckMethod,
            ),
            n = yield T();
          return (
            o("WALogger").LOG(
              d ||
                (d = babelHelpers.taggedTemplateLiteralLoose([
                  "",
                  "/downloadModels: ",
                  " ok, ",
                  " failed",
                ])),
              p,
              t.successful.length + n.successful.length,
              t.failed.length + n.failed.length,
            ),
            t
          );
        })),
        I.apply(this, arguments)
      );
    }
    function T() {
      return D.apply(this, arguments);
    }
    function D() {
      return (
        (D = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = [];
          for (var t of E()) {
            var n = t[0],
              r = t[1];
            for (var o of r) e.push({ modelName: n, version: o });
          }
          return e.length === 0 ? { successful: [], failed: [] } : y(e, x);
        })),
        D.apply(this, arguments)
      );
    }
    function x(e, t, n) {
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
    function $(e) {
      return P.apply(this, arguments);
    }
    function P() {
      return (
        (P = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          (yield g(e), yield k());
        })),
        P.apply(this, arguments)
      );
    }
    l.initMLModelsForCall = $;
  },
  98,
);
