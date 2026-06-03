__d(
  "WAAsyncCache",
  ["WAAbortError", "WAMemoizeConcurrent", "asyncToGeneratorRuntime"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, a) {
      return r("WAMemoizeConcurrent")(
        e,
        (function () {
          var r = n("asyncToGeneratorRuntime").asyncToGenerator(function* (n) {
            if (n != null && n.signal.aborted)
              throw new (o("WAAbortError").AbortError)();
            var r = e(n),
              i = yield t.get(r, n);
            if (n != null && n.signal.aborted)
              throw new (o("WAAbortError").AbortError)();
            if (i != null) return i;
            var l = yield a(n);
            if (n != null && n.signal.aborted)
              throw new (o("WAAbortError").AbortError)();
            return (yield t.set(r, l, n), l);
          });
          function i(e) {
            return r.apply(this, arguments);
          }
          return i;
        })(),
      );
    }
    l.asyncCache = e;
  },
  98,
);
