__d(
  "WAWebQuarantineDataBatchProcessor",
  ["WALogger", "WAWebQuarantineDataStore", "asyncToGeneratorRuntime"],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(e) {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          for (
            var n,
              r,
              a = t.fetchBatch,
              i = t.jobName,
              l = t.processBatch,
              s = (n = t.batchSize) != null ? n : 200,
              u = (r = t.maxCount) != null ? r : 1e3,
              c = [],
              d = new Set(),
              m = u,
              p = 0;
            m > 0;
          ) {
            var _ = s + d.size,
              f = yield a(_);
            if (f.length === 0) break;
            var g = f.filter(function (e) {
              return !d.has(e.msgId);
            });
            if (g.length === 0) break;
            var h = g.slice(0, m),
              y = yield l(h);
            (y.failedIds.forEach(function (e) {
              return d.add(e);
            }),
              y.processedIds.length > 0 &&
                (yield o("WAWebQuarantineDataStore").bulkDeleteQuarantineData(
                  y.processedIds,
                ),
                c.push.apply(c, y.processedIds)),
              (m -= h.length),
              p++);
          }
          return (
            p > 0 &&
              o("WALogger").LOG(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "",
                    ": Completed ",
                    " batches - total processed ",
                    ", total failed ",
                    "",
                  ])),
                i,
                p,
                c.length,
                d.size,
              ),
            c.length
          );
        })),
        u.apply(this, arguments)
      );
    }
    l.processQuarantineDataInBatches = s;
  },
  98,
);
