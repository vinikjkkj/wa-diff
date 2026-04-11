__d(
  "WAMemoizeConcurrent",
  ["Promise", "WAAbortError", "WAPromiseRaceAbort", "WASignalAggregator"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(t, a) {
      var i = new Map();
      return function (s) {
        var l;
        if (s != null && (l = s.signal) != null && l.aborted)
          return (e || (e = n("Promise"))).reject(
            new (o("WAAbortError").AbortError)(),
          );
        var u = t.call(this, s),
          c = i.get(u);
        if (c == null || c.aggregator.signal.aborted) {
          var d = new (r("WASignalAggregator"))(),
            m = babelHelpers.extends({}, s, { signal: d.signal });
          ((c = {
            aggregator: d,
            promise: a.call(this, m).finally(function () {
              (d.dispose(), i.delete(u));
            }),
          }),
            i.set(u, c));
        }
        var p = (s == null ? void 0 : s.signal) || new AbortController().signal;
        return (c.aggregator.add(p), r("WAPromiseRaceAbort")(c.promise, p));
      };
    }
    l.default = s;
  },
  98,
);
