__d(
  "WAWebRunInBatches",
  [],
  function (t, n, r, o, a, i) {
    async function e(e, t, n) {
      for (
        var r,
          o,
          a = (r = n == null ? void 0 : n.batchSize) != null ? r : 1e3,
          i = (o = n == null ? void 0 : n.delayMs) != null ? o : 0,
          l = 0;
        l < e.length;
        l += a
      ) {
        var s;
        if (n != null && (s = n.abortController) != null && s.signal.aborted)
          return;
        var u = e.slice(l, l + a);
        (await t(u),
          await new Promise(function (e) {
            return self.setTimeout(e, i);
          }));
      }
    }
    i.runInBatches = e;
  },
  66,
);
