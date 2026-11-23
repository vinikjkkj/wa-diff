__d(
  "WAWebStorageUtilizationSnapshot",
  [
    "WALogger",
    "WAStorageEstimator",
    "WAWebEnvironment",
    "WAWebEstimateIndexeddbUsageApi",
    "WAWebFeatureDetectionDetermineIncognito",
    "WAWebLocalStorage",
    "WAWebStorageErrorHandlingUtils",
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
      f = 1073741824;
    async function g() {
      try {
        var t = await Promise.all([
            y(),
            C(),
            b(),
            r("WAWebFeatureDetectionDetermineIncognito")(),
          ]),
          n = t[0],
          a = t[1],
          i = t[2],
          l = t[3];
        return {
          estimate: n,
          indexedDB: a == null ? void 0 : a.indexedDB,
          cache: a == null ? void 0 : a.cache,
          localStorage: i,
          isIncognito: l,
          isWindows: r("WAWebEnvironment").isWindows,
          didReload: o(
            "WAWebStorageErrorHandlingUtils",
          ).didReloadAppForStorageRecovery(),
        };
      } catch (t) {
        return (
          o("WALogger").WARN(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[memory-snapshot] Error collecting storage utilization: ",
                "",
              ])),
            t,
          ),
          null
        );
      }
    }
    async function h() {
      try {
        var e = await g();
        if (!e)
          return (
            o("WALogger").WARN(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "[memory-snapshot] Failed to collect storage snapshot",
                ])),
            ),
            null
          );
        var t = v(e);
        return (
          o("WALogger").LOG(
            u ||
              (u = babelHelpers.taggedTemplateLiteralLoose([
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
            c ||
              (c = babelHelpers.taggedTemplateLiteralLoose([
                "[memory-snapshot] collect+format snapshot err: ",
                "",
              ])),
            e,
          ),
          null
        );
      }
    }
    async function y() {
      try {
        var e,
          t,
          n,
          r,
          a = await o("WAStorageEstimator").estimateStorage();
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
              (r = u == null ? void 0 : u.serviceWorkerRegistrations) != null
                ? r
                : null,
          };
        return c;
      } catch (e) {
        return (
          o("WALogger").WARN(
            d ||
              (d = babelHelpers.taggedTemplateLiteralLoose([
                "[memory-snapshot] Error estimating storage: ",
                "",
              ])),
            e,
          ),
          null
        );
      }
    }
    async function C() {
      try {
        var e = await o(
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
            m ||
              (m = babelHelpers.taggedTemplateLiteralLoose([
                "[memory-snapshot] Error collecting database and cache info: ",
                "",
              ])),
            e,
          ),
          null
        );
      }
    }
    function b() {
      try {
        if (r("WAWebLocalStorage") == null) return null;
        var e = JSON.stringify(r("WAWebLocalStorage")).length;
        return { totalSize: e };
      } catch (e) {
        return (
          o("WALogger").WARN(
            p ||
              (p = babelHelpers.taggedTemplateLiteralLoose([
                "[memory-snapshot] Error collecting localStorage info: ",
                "",
              ])),
            e,
          ),
          null
        );
      }
    }
    function v(e) {
      try {
        var t,
          n,
          r,
          a,
          i,
          l = e.cache,
          s = e.didReload,
          u = e.estimate,
          c = e.indexedDB,
          d = e.isIncognito,
          m = e.isWindows,
          p = e.localStorage,
          f =
            (t = u == null ? void 0 : u.indexedDB) != null
              ? t
              : c == null
                ? void 0
                : c.totalSize,
          g =
            (n = u == null ? void 0 : u.localStorage) != null
              ? n
              : p == null
                ? void 0
                : p.totalSize,
          h =
            (r = u == null ? void 0 : u.caches) != null
              ? r
              : l == null
                ? void 0
                : l.totalSize,
          y = {
            quota: S(u == null ? void 0 : u.quota),
            usage: S(u == null ? void 0 : u.usage),
            sw: S(u == null ? void 0 : u.serviceWorkerRegistrations),
            caches: S(h),
            idb: S(f),
            ls: S(g),
            incognito: R(d),
            win: R(m),
            didReload: R(s),
          };
        if (c != null && (a = c.breakdown) != null && a.length) {
          var C = c.breakdown.find(function (e) {
              var t = e[0];
              return t === "model-storage";
            }),
            b = c.breakdown.find(function (e) {
              var t = e[0];
              return t === "lru-media-storage-idb";
            });
          (C && (y.model_idb = S(C[1])), b && (y.lru_media_idb = S(b[1])));
        }
        if (l != null && (i = l.breakdown) != null && i.length) {
          var v = l.breakdown.find(function (e) {
            var t = e[0];
            return t === "lru-media-array-buffer-cache";
          });
          v && (y.lru_media_cache = S(v[1]));
        }
        return JSON.stringify(y);
      } catch (e) {
        return (
          o("WALogger").WARN(
            _ ||
              (_ = babelHelpers.taggedTemplateLiteralLoose([
                "[memory-snapshot] Error formatting storage snapshot: ",
                "",
              ])),
            e,
          ),
          null
        );
      }
    }
    function S(e) {
      return e == null ? null : Number((e / f).toFixed(4));
    }
    function R(e) {
      return e == null ? null : e ? 1 : 0;
    }
    ((l.getStorageUtilizationSnapshot = g),
      (l.collectAndFormatStorageSnapshot = h),
      (l.formatStorageSnapshotOutput = v));
  },
  98,
);
