__d(
  "WARaceSignal",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    async function e(e, t) {
      var n,
        r = new AbortController();
      if (
        e.some(function (e) {
          return e.aborted;
        })
      )
        r.abort();
      else {
        n = function () {
          for (var t of e) t.removeEventListener("abort", o);
          n = null;
        };
        var o = function () {
          (n == null || n(), r.abort());
        };
        for (var a of e) a.addEventListener("abort", o);
      }
      try {
        return await t(r.signal);
      } finally {
        n == null || n();
      }
    }
    i.default = e;
  },
  66,
);
