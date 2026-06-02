__d(
  "WAWebQuarantineDataBatchProcessor",
  ["WALogger", "WAWebQuarantineDataStore"],
  function (t, n, r, o, a, i, l) {
    var e;
    async function s(t) {
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
          f = await a(_);
        if (f.length === 0) break;
        var g = f.filter(function (e) {
          return !d.has(e.msgId);
        });
        if (g.length === 0) break;
        var h = g.slice(0, m),
          y = await l(h);
        (y.failedIds.forEach(function (e) {
          return d.add(e);
        }),
          y.processedIds.length > 0 &&
            (await o("WAWebQuarantineDataStore").bulkDeleteQuarantineData(
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
    }
    l.processQuarantineDataInBatches = s;
  },
  98,
);
