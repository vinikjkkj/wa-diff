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
          c = (r = t.maxCount) != null ? r : 1e3,
          d = [],
          m = new Set(),
          p = new Set(),
          _ = c,
          f = 0;
        _ > 0;
      ) {
        var g = s + p.size,
          h = await a(g);
        if (h.length === 0) break;
        var y = h.filter(function (e) {
          return !p.has(e.msgId);
        });
        if (y.length === 0) break;
        var C = y.slice(0, _),
          b = await l(C);
        (b.failedIds.forEach(function (e) {
          return m.add(e);
        }),
          u(b, p),
          b.processedIds.length > 0 &&
            (await o("WAWebQuarantineDataStore").bulkDeleteQuarantineData(
              b.processedIds,
            ),
            d.push.apply(d, b.processedIds)),
          (_ -= C.length),
          f++);
      }
      return (
        f > 0 &&
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
            f,
            d.length,
            m.size,
          ),
        d.length
      );
    }
    function u(e, t) {
      var n;
      []
        .concat(e.failedIds, (n = e.retainedIds) != null ? n : [])
        .forEach(function (e) {
          return t.add(e);
        });
    }
    l.processQuarantineDataInBatches = s;
  },
  98,
);
