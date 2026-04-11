__d(
  "WAWebEstimateFtsStorageApi",
  [
    "Promise",
    "WANullthrows",
    "WAWebDbUsageApiUtils",
    "WAWebIndexedDB",
    "WAWebScanDbRowApi",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = "fts-storage",
      u = 15e3;
    function c(e) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var a = t === void 0 ? { sampleRows: u } : t,
            i = a.sampleRows,
            l = Date.now(),
            c = i,
            d = r("WANullthrows")(r("WAWebIndexedDB")),
            m = yield o("WAWebDbUsageApiUtils").getDatabase(d, s),
            p = m.transaction(m.objectStoreNames, "readonly"),
            _ = 0,
            f = 0,
            g = function* (t) {
              var e = p.objectStore(t),
                n = yield o("WAWebDbUsageApiUtils").promisifyRequest(e.count());
              if (n === 0) return 1;
              var r = Math.min(c, n);
              f = r;
              var a = 0;
              yield o("WAWebDbUsageApiUtils").objectStoreIterator(
                e,
                function (e) {
                  return (
                    (a += o("WAWebScanDbRowApi").estimateSize(e, t)),
                    f--,
                    f > 0
                  );
                },
              );
              var i = Math.round(a * (n / (r - f)));
              _ += i;
            };
          for (var h of p.objectStoreNames) yield* g(h);
          var y = Date.now() - l;
          return (e || (e = n("Promise"))).resolve(_);
        })),
        d.apply(this, arguments)
      );
    }
    l.getEstimatedFTSDbSize = c;
  },
  98,
);
