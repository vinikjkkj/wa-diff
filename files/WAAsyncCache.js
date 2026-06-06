__d(
  "WAAsyncCache",
  ["WAAbortError", "WAMemoizeConcurrent"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n) {
      return r("WAMemoizeConcurrent")(e, async function (a) {
        if (a != null && a.signal.aborted)
          throw new (o("WAAbortError").AbortError)();
        var r = e(a),
          i = await t.get(r, a);
        if (a != null && a.signal.aborted)
          throw new (o("WAAbortError").AbortError)();
        if (i != null) return i;
        var l = await n(a);
        if (a != null && a.signal.aborted)
          throw new (o("WAAbortError").AbortError)();
        return (await t.set(r, l, a), l);
      });
    }
    l.asyncCache = e;
  },
  98,
);
