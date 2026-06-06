__d(
  "WAWebRunInBatches",
  ["Promise", "asyncToGeneratorRuntime"],
  function (t, n, r, o, a, i) {
    var e;
    function l(e, t, n) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, r, o) {
          for (
            var a,
              i,
              l = (a = o == null ? void 0 : o.batchSize) != null ? a : 1e3,
              s = (i = o == null ? void 0 : o.delayMs) != null ? i : 0,
              u = 0;
            u < t.length;
            u += l
          ) {
            var c;
            if (
              o != null &&
              (c = o.abortController) != null &&
              c.signal.aborted
            )
              return;
            var d = t.slice(u, u + l);
            (yield r(d),
              yield new (e || (e = n("Promise")))(function (e) {
                return self.setTimeout(e, s);
              }));
          }
        })),
        s.apply(this, arguments)
      );
    }
    i.runInBatches = l;
  },
  66,
);
