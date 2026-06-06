__d(
  "WAWebEstimateFtsStorageApi",
  [
    "WANullthrows",
    "WAWebDbUsageApiUtils",
    "WAWebIndexedDB",
    "WAWebScanDbRowApi",
  ],
  function (t, n, r, o, a, i, l) {
    var e = "fts-storage",
      s = 15e3;
    async function u(t) {
      var n = t === void 0 ? { sampleRows: s } : t,
        a = n.sampleRows,
        i = Date.now(),
        l = a,
        u = r("WANullthrows")(r("WAWebIndexedDB")),
        c = await o("WAWebDbUsageApiUtils").getDatabase(u, e),
        d = c.transaction(c.objectStoreNames, "readonly"),
        m = 0,
        p = 0,
        _ = async function (t) {
          var e = d.objectStore(t),
            n = await o("WAWebDbUsageApiUtils").promisifyRequest(e.count());
          if (n === 0) return 1;
          var r = Math.min(l, n);
          p = r;
          var a = 0;
          await o("WAWebDbUsageApiUtils").objectStoreIterator(e, function (e) {
            return (
              (a += o("WAWebScanDbRowApi").estimateSize(e, t)),
              p--,
              p > 0
            );
          });
          var i = Math.round(a * (n / (r - p)));
          m += i;
        };
      for (var f of d.objectStoreNames) await _(f);
      var g = Date.now() - i;
      return Promise.resolve(m);
    }
    l.getEstimatedFTSDbSize = u;
  },
  98,
);
