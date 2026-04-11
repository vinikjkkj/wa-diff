__d(
  "WAPromiseRaceAbort",
  ["Promise", "WAAbortError"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(t, r) {
      if (r == null) return t;
      var a,
        i = r.aborted
          ? (e || (e = n("Promise"))).reject(
              new (o("WAAbortError").AbortError)(),
            )
          : new (e || (e = n("Promise")))(function (e, t) {
              var n = function () {
                t(new (o("WAAbortError").AbortError)());
              };
              (r.addEventListener("abort", n),
                (a = function () {
                  r.removeEventListener("abort", n);
                }));
            });
      return (e || (e = n("Promise"))).race([i, t]).finally(function () {
        (a == null || a(), (a = null));
      });
    }
    l.default = s;
  },
  98,
);
