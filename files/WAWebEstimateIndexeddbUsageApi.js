__d(
  "WAWebEstimateIndexeddbUsageApi",
  [
    "Promise",
    "WALogger",
    "WANullthrows",
    "WAPromiseReduce",
    "WAStorageEstimator",
    "WAWebDbUsageApiUtils",
    "WAWebIndexedDB",
    "WAWebScanDbRowApi",
    "asyncToGeneratorRuntime",
    "gkx",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m = 1e6;
    function p() {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          if (r("gkx")("26258")) return !1;
          var t = yield o("WAStorageEstimator").estimateStorage();
          if (t.success === !1) return !1;
          var n = t.value,
            a = n.quota,
            i = n.usage,
            l = !1,
            d = !1,
            p = null;
          if (
            (i / a >= 0.8
              ? ((l = !0),
                (d = !0),
                (p = "More than 80% of idb storage quota used"))
              : i >= 1500 * m
                ? ((l = !0),
                  (d = !0),
                  (p = "More than 1.5GB of idb storage used"))
                : i >= 1e3 * m &&
                  ((l = !0), (p = "More than 1GB of idb storage used")),
            l)
          ) {
            var _ = yield b({ printTables: !1, sampleRate: 0.05 }),
              g = _.output,
              h = _.stats,
              y = f(h.webCache, h.lruMediaStoreSize);
            y
              ? (o("WALogger")
                  .LOG(
                    e ||
                      (e = babelHelpers.taggedTemplateLiteralLoose([
                        "uploading logs with the reason: web cache has unknown items",
                      ])),
                  )
                  .tags("idb-storage"),
                o("WALogger")
                  .LOG(
                    s ||
                      (s = babelHelpers.taggedTemplateLiteralLoose(
                        ["IndexedDB estimated snapshot:\n", ""],
                        ["IndexedDB estimated snapshot:\\n", ""],
                      )),
                    g,
                  )
                  .tags("idb-storage")
                  .sendLogs("idb_storage_web_cache"))
              : (o("WALogger")
                  .LOG(
                    u ||
                      (u = babelHelpers.taggedTemplateLiteralLoose([
                        "uploading logs with the reason: ",
                        "",
                      ])),
                    p,
                  )
                  .tags("idb-storage"),
                o("WALogger")
                  .LOG(
                    c ||
                      (c = babelHelpers.taggedTemplateLiteralLoose(
                        ["IndexedDB estimated snapshot:\n", ""],
                        ["IndexedDB estimated snapshot:\\n", ""],
                      )),
                    g,
                  )
                  .tags("idb-storage")
                  .sendLogs("idb_storage_exceeded"));
          }
          return !d;
        })),
        _.apply(this, arguments)
      );
    }
    function f(e, t) {
      if (e == null) return !1;
      var n = t != null ? t : 0;
      return (n === 0 && e > 0) || n * 1.1 <= e;
    }
    function g(e) {
      return h.apply(this, arguments);
    }
    function h() {
      return (
        (h = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield e.keys();
          return o("WAPromiseReduce").promiseReduce(
            t,
            (function () {
              var t = n("asyncToGeneratorRuntime").asyncToGenerator(
                function* (t, n) {
                  var r = yield e.match(n),
                    o = yield r.arrayBuffer();
                  return t + o.byteLength;
                },
              );
              return function (e, n) {
                return t.apply(this, arguments);
              };
            })(),
            0,
          );
        })),
        h.apply(this, arguments)
      );
    }
    function y() {
      return C.apply(this, arguments);
    }
    function C() {
      return (
        (C = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          if (!("caches" in self)) return [];
          var e = yield self.caches.keys();
          return (d || (d = n("Promise"))).all(
            e.map(
              (function () {
                var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                  function* (e) {
                    var t = yield self.caches.open(e),
                      n = yield g(t);
                    return [e, n];
                  },
                );
                return function (t) {
                  return e.apply(this, arguments);
                };
              })(),
            ),
          );
        })),
        C.apply(this, arguments)
      );
    }
    function b(e) {
      return v.apply(this, arguments);
    }
    function v() {
      return (
        (v = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t,
            n,
            a,
            i,
            l,
            s,
            u =
              e === void 0
                ? {
                    printTables: !0,
                    sampleRate: 0.05,
                    forceWebCacheBreakdown: !1,
                  }
                : e,
            c = u.forceWebCacheBreakdown,
            d = u.printTables,
            m = u.sampleRate,
            p = 1e4,
            _ = [],
            g = r("WANullthrows")(r("WAWebIndexedDB")),
            h = yield o("WAWebDbUsageApiUtils").getAllDatabases(g);
          for (var C of h) {
            var b = yield o("WAWebDbUsageApiUtils").promisifyRequest(
              g.open(C.name),
            );
            if (b.objectStoreNames.length !== 0) {
              var v = b.transaction(b.objectStoreNames, "readonly"),
                R = { name: C.name, size: 0, stores: [] },
                L = function* (t) {
                  var e = v.objectStore(t),
                    n = yield o("WAWebDbUsageApiUtils").promisifyRequest(
                      e.count(),
                    );
                  if (n === 0) return 1;
                  var r = o("WAWebScanDbRowApi").getSampleRateOverride(
                      m,
                      t,
                      C.name,
                    ),
                    a = Math.min(Math.ceil(n * r), p),
                    i = a,
                    l = 0;
                  yield o("WAWebDbUsageApiUtils").objectStoreIterator(
                    e,
                    function (e) {
                      return o("WAWebScanDbRowApi").skipRow(e, t)
                        ? !0
                        : ((l += o("WAWebScanDbRowApi").estimateSize(e, t)),
                          i--,
                          i > 0);
                    },
                  );
                  var s = Math.round(l * (n / (a - i)));
                  (R.stores.push({ name: t, size: s, rowCount: n }),
                    (R.size += s));
                };
              for (var E of v.objectStoreNames) yield* L(E);
              (R.stores.sort(function (e, t) {
                return t.size - e.size;
              }),
                _.push(R));
            }
          }
          (_.sort(function (e, t) {
            return t.size - e.size;
          }),
            d &&
              (console.table([].concat(_)),
              _.forEach(function (e) {
                var t = e.stores.map(function (t) {
                  return {
                    db: e.name,
                    store: t.name,
                    size: t.size,
                    rowCount: t.rowCount,
                  };
                });
                console.table(t);
              })));
          var k = yield o("WAStorageEstimator").estimateStorage(),
            I =
              (t =
                (n = _.find(function (e) {
                  return e.name === "lru-media-storage-idb";
                })) == null
                  ? void 0
                  : n.size) != null
                ? t
                : 0,
            T = f(
              (a = k.value) == null || (a = a.usageDetails) == null
                ? void 0
                : a.caches,
              I,
            ),
            D = T || c ? yield y() : [],
            x = {
              usage: (i = k.value) == null ? void 0 : i.usage,
              quota: (l = k.value) == null ? void 0 : l.quota,
              webCache:
                (s = k.value) == null || (s = s.usageDetails) == null
                  ? void 0
                  : s.caches,
              lruMediaStoreSize: I,
              webCacheBreakdown: D,
              debugEstimations: _,
              sampleRate: m,
            },
            $ = S(x, _);
          return { output: $, stats: x };
        })),
        v.apply(this, arguments)
      );
    }
    function S(e, t) {
      var n = JSON.stringify(e, null, 2),
        r = [],
        a = "****************************";
      (r.push(a), r.push("*******Storage Script*******"), r.push(a));
      var i =
        "Storage Api estimation: quota = " +
        o("WAWebDbUsageApiUtils").convertToMBToString(e.quota) +
        " MB, usage = " +
        o("WAWebDbUsageApiUtils").convertToMBToString(e.usage) +
        " MB";
      if (
        (e.webCache != null &&
          (i +=
            ", webCache = " +
            o("WAWebDbUsageApiUtils").convertToMBToString(e.webCache) +
            " MB"),
        e.webCacheBreakdown.length > 0)
      ) {
        var l = ["---- WebCache Breakdown ----"];
        (e.webCacheBreakdown.forEach(function (e) {
          var t = e[0],
            n = e[1];
          l.push(
            t + ": " + o("WAWebDbUsageApiUtils").convertToMBToString(n) + " MB",
          );
        }),
          (i += "\n" + l.concat("----------------------------").join("\n")));
      }
      return (
        r.push(i),
        r.push(
          "DB sampleRate = " +
            e.sampleRate * 100 +
            "%, lru-media-store table is 100%",
        ),
        t.forEach(function (e) {
          r.push(
            "[storage] " +
              e.name +
              ", size = " +
              o("WAWebDbUsageApiUtils").convertToMBToString(e.size) +
              " MB",
          );
        }),
        r.push(a),
        r.push("Detailed db scan result in bytes:"),
        r.push(n),
        r.join("\n")
      );
    }
    ((l.shouldMonitorDbStorageUsage = p), (l.getEstimatedIndexedDbUsage = b));
  },
  98,
);
