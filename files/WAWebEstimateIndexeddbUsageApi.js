__d(
  "WAWebEstimateIndexeddbUsageApi",
  [
    "WALogger",
    "WANullthrows",
    "WAPromiseReduce",
    "WAStorageEstimator",
    "WAWebDbUsageApiUtils",
    "WAWebIndexedDB",
    "WAWebScanDbRowApi",
    "gkx",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d = 1e6;
    async function m() {
      if (r("gkx")("26258")) return !1;
      var t = await o("WAStorageEstimator").estimateStorage();
      if (t.success === !1) return !1;
      var n = t.value,
        a = n.quota,
        i = n.usage,
        l = !1,
        m = !1,
        _ = null;
      if (
        (i / a >= 0.8
          ? ((l = !0),
            (m = !0),
            (_ = "More than 80% of idb storage quota used"))
          : i >= 1500 * d
            ? ((l = !0), (m = !0), (_ = "More than 1.5GB of idb storage used"))
            : i >= 1e3 * d &&
              ((l = !0), (_ = "More than 1GB of idb storage used")),
        l)
      ) {
        var f = await g({ printTables: !1, sampleRate: 0.05 }),
          h = f.output,
          y = f.stats,
          C = p(y.webCache, y.lruMediaStoreSize);
        C
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
                    [
                      `IndexedDB estimated snapshot:
`,
                      "",
                    ],
                    ["IndexedDB estimated snapshot:\\n", ""],
                  )),
                h,
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
                _,
              )
              .tags("idb-storage"),
            o("WALogger")
              .LOG(
                c ||
                  (c = babelHelpers.taggedTemplateLiteralLoose(
                    [
                      `IndexedDB estimated snapshot:
`,
                      "",
                    ],
                    ["IndexedDB estimated snapshot:\\n", ""],
                  )),
                h,
              )
              .tags("idb-storage")
              .sendLogs("idb_storage_exceeded"));
      }
      return !m;
    }
    function p(e, t) {
      if (e == null) return !1;
      var n = t != null ? t : 0;
      return (n === 0 && e > 0) || n * 1.1 <= e;
    }
    async function _(e) {
      var t = await e.keys();
      return o("WAPromiseReduce").promiseReduce(
        t,
        async function (t, n) {
          var r = await e.match(n),
            o = await r.arrayBuffer();
          return t + o.byteLength;
        },
        0,
      );
    }
    async function f() {
      if (!("caches" in self)) return [];
      var e = await self.caches.keys();
      return Promise.all(
        e.map(async function (e) {
          var t = await self.caches.open(e),
            n = await _(t);
          return [e, n];
        }),
      );
    }
    async function g(e) {
      var t,
        n,
        a,
        i,
        l,
        s,
        u =
          e === void 0
            ? { printTables: !0, sampleRate: 0.05, forceWebCacheBreakdown: !1 }
            : e,
        c = u.forceWebCacheBreakdown,
        d = u.printTables,
        m = u.sampleRate,
        _ = 1e4,
        g = [],
        y = r("WANullthrows")(r("WAWebIndexedDB")),
        C = await o("WAWebDbUsageApiUtils").getAllDatabases(y);
      for (var b of C) {
        var v = await o("WAWebDbUsageApiUtils").promisifyRequest(
          y.open(b.name),
        );
        if (v.objectStoreNames.length !== 0) {
          var S = v.transaction(v.objectStoreNames, "readonly"),
            R = { name: b.name, size: 0, stores: [] },
            L = async function (t) {
              var e = S.objectStore(t),
                n = await o("WAWebDbUsageApiUtils").promisifyRequest(e.count());
              if (n === 0) return 1;
              var r = o("WAWebScanDbRowApi").getSampleRateOverride(
                  m,
                  t,
                  b.name,
                ),
                a = Math.min(Math.ceil(n * r), _),
                i = a,
                l = 0;
              await o("WAWebDbUsageApiUtils").objectStoreIterator(
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
              (R.stores.push({ name: t, size: s, rowCount: n }), (R.size += s));
            };
          for (var E of S.objectStoreNames) await L(E);
          (R.stores.sort(function (e, t) {
            return t.size - e.size;
          }),
            g.push(R));
        }
      }
      (g.sort(function (e, t) {
        return t.size - e.size;
      }),
        d &&
          (console.table([].concat(g)),
          g.forEach(function (e) {
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
      var k = await o("WAStorageEstimator").estimateStorage(),
        I =
          (t =
            (n = g.find(function (e) {
              return e.name === "lru-media-storage-idb";
            })) == null
              ? void 0
              : n.size) != null
            ? t
            : 0,
        T = p(
          (a = k.value) == null || (a = a.usageDetails) == null
            ? void 0
            : a.caches,
          I,
        ),
        D = T || c ? await f() : [],
        x = {
          usage: (i = k.value) == null ? void 0 : i.usage,
          quota: (l = k.value) == null ? void 0 : l.quota,
          webCache:
            (s = k.value) == null || (s = s.usageDetails) == null
              ? void 0
              : s.caches,
          lruMediaStoreSize: I,
          webCacheBreakdown: D,
          debugEstimations: g,
          sampleRate: m,
        },
        $ = h(x, g);
      return { output: $, stats: x };
    }
    function h(e, t) {
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
          (i +=
            `
` +
            l.concat("----------------------------").join(`
`)));
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
        r.join(`
`)
      );
    }
    ((l.shouldMonitorDbStorageUsage = m), (l.getEstimatedIndexedDbUsage = g));
  },
  98,
);
