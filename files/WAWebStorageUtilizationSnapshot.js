__d(
  "WAWebStorageUtilizationSnapshot",
  [
    "Promise",
    "WALogger",
    "WAStorageEstimator",
    "WAWebEnvironment",
    "WAWebEstimateIndexeddbUsageApi",
    "WAWebFeatureDetectionDetermineIncognito",
    "WAWebLocalStorage",
    "WAWebStorageErrorHandlingUtils",
    "asyncToGeneratorRuntime",
    "sumBy",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m,
      p,
      _,
      f,
      g = 1073741824;
    function h() {
      return y.apply(this, arguments);
    }
    function y() {
      return (
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          try {
            var e = yield (f || (f = n("Promise"))).all([
                v(),
                R(),
                E(),
                r("WAWebFeatureDetectionDetermineIncognito")(),
              ]),
              t = e[0],
              a = e[1],
              i = e[2],
              l = e[3];
            return {
              estimate: t,
              indexedDB: a == null ? void 0 : a.indexedDB,
              cache: a == null ? void 0 : a.cache,
              localStorage: i,
              isIncognito: l,
              isWindows: r("WAWebEnvironment").isWindows,
              didReload: o(
                "WAWebStorageErrorHandlingUtils",
              ).didReloadAppForStorageRecovery(),
            };
          } catch (e) {
            return (
              o("WALogger").WARN(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "[memory-snapshot] Error collecting storage utilization: ",
                    "",
                  ])),
                e,
              ),
              null
            );
          }
        })),
        y.apply(this, arguments)
      );
    }
    function C() {
      return b.apply(this, arguments);
    }
    function b() {
      return (
        (b = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          try {
            var e = yield h();
            if (!e)
              return (
                o("WALogger").WARN(
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
                      "[memory-snapshot] Failed to collect storage snapshot",
                    ])),
                ),
                null
              );
            var t = k(e);
            return (
              o("WALogger").LOG(
                d ||
                  (d = babelHelpers.taggedTemplateLiteralLoose([
                    "[memory-snapshot] Collected storage snapshot: ",
                    "",
                  ])),
                t,
              ),
              t
            );
          } catch (e) {
            return (
              o("WALogger").WARN(
                m ||
                  (m = babelHelpers.taggedTemplateLiteralLoose([
                    "[memory-snapshot] collect+format snapshot err: ",
                    "",
                  ])),
                e,
              ),
              null
            );
          }
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
          try {
            var e,
              t,
              n,
              r,
              a = yield o("WAStorageEstimator").estimateStorage();
            if (!a.success) return null;
            var i = a.value;
            if (!i) return null;
            var l = i.quota,
              s = i.usage,
              u = i.usageDetails,
              c = {
                quota: l,
                usage: s,
                caches: (e = u == null ? void 0 : u.caches) != null ? e : null,
                indexedDB:
                  (t = u == null ? void 0 : u.indexedDB) != null ? t : null,
                localStorage:
                  (n = u == null ? void 0 : u.localStorage) != null ? n : null,
                serviceWorkerRegistrations:
                  (r = u == null ? void 0 : u.serviceWorkerRegistrations) !=
                  null
                    ? r
                    : null,
              };
            return c;
          } catch (e) {
            return (
              o("WALogger").WARN(
                p ||
                  (p = babelHelpers.taggedTemplateLiteralLoose([
                    "[memory-snapshot] Error estimating storage: ",
                    "",
                  ])),
                e,
              ),
              null
            );
          }
        })),
        S.apply(this, arguments)
      );
    }
    function R() {
      return L.apply(this, arguments);
    }
    function L() {
      return (
        (L = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          try {
            var e = yield o(
                "WAWebEstimateIndexeddbUsageApi",
              ).getEstimatedIndexedDbUsage({
                printTables: !1,
                sampleRate: 1,
                forceWebCacheBreakdown: !0,
              }),
              t = e.stats;
            if (!t) return null;
            var n = r("sumBy")(t.debugEstimations, function (e) {
                return e.size;
              }),
              a = t.debugEstimations.map(function (e) {
                return [e.name, e.size];
              });
            return {
              indexedDB: { totalSize: n, breakdown: a || [] },
              cache: {
                totalSize: t.webCache,
                breakdown: t.webCacheBreakdown || [],
              },
            };
          } catch (e) {
            return (
              o("WALogger").WARN(
                _ ||
                  (_ = babelHelpers.taggedTemplateLiteralLoose([
                    "[memory-snapshot] Error collecting database and cache info: ",
                    "",
                  ])),
                e,
              ),
              null
            );
          }
        })),
        L.apply(this, arguments)
      );
    }
    function E() {
      try {
        if (r("WAWebLocalStorage") == null) return null;
        var t = JSON.stringify(r("WAWebLocalStorage")).length;
        return { totalSize: t };
      } catch (t) {
        return (
          o("WALogger").WARN(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[memory-snapshot] Error collecting localStorage info: ",
                "",
              ])),
            t,
          ),
          null
        );
      }
    }
    function k(e) {
      try {
        var t,
          n,
          r,
          a,
          i,
          l = e.cache,
          u = e.didReload,
          c = e.estimate,
          d = e.indexedDB,
          m = e.isIncognito,
          p = e.isWindows,
          _ = e.localStorage,
          f =
            (t = c == null ? void 0 : c.indexedDB) != null
              ? t
              : d == null
                ? void 0
                : d.totalSize,
          g =
            (n = c == null ? void 0 : c.localStorage) != null
              ? n
              : _ == null
                ? void 0
                : _.totalSize,
          h =
            (r = c == null ? void 0 : c.caches) != null
              ? r
              : l == null
                ? void 0
                : l.totalSize,
          y = {
            quota: I(c == null ? void 0 : c.quota),
            usage: I(c == null ? void 0 : c.usage),
            sw: I(c == null ? void 0 : c.serviceWorkerRegistrations),
            caches: I(h),
            idb: I(f),
            ls: I(g),
            incognito: T(m),
            win: T(p),
            didReload: T(u),
          };
        if (d != null && (a = d.breakdown) != null && a.length) {
          var C = d.breakdown.find(function (e) {
              var t = e[0];
              return t === "model-storage";
            }),
            b = d.breakdown.find(function (e) {
              var t = e[0];
              return t === "lru-media-storage-idb";
            });
          (C && (y.model_idb = I(C[1])), b && (y.lru_media_idb = I(b[1])));
        }
        if (l != null && (i = l.breakdown) != null && i.length) {
          var v = l.breakdown.find(function (e) {
            var t = e[0];
            return t === "lru-media-array-buffer-cache";
          });
          v && (y.lru_media_cache = I(v[1]));
        }
        return JSON.stringify(y);
      } catch (e) {
        return (
          o("WALogger").WARN(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "[memory-snapshot] Error formatting storage snapshot: ",
                "",
              ])),
            e,
          ),
          null
        );
      }
    }
    function I(e) {
      return e == null ? null : Number((e / g).toFixed(4));
    }
    function T(e) {
      return e == null ? null : e ? 1 : 0;
    }
    ((l.getStorageUtilizationSnapshot = h),
      (l.collectAndFormatStorageSnapshot = C),
      (l.formatStorageSnapshotOutput = k));
  },
  98,
);
