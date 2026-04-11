__d(
  "WAWebEventsWaitForBbEvent",
  ["Promise", "WAAbortError", "WAWebBoolFunc"],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(t, r, a, i) {
      return (
        a === void 0 && (a = o("WAWebBoolFunc").returnTrue),
        i != null && i.aborted
          ? (e || (e = n("Promise"))).reject(
              new (o("WAAbortError").AbortError)(),
            )
          : new (e || (e = n("Promise")))(function (e, n) {
              var l = function () {
                  a.apply(this, arguments) && (u == null || u(), e(arguments));
                },
                s = function () {
                  (u == null || u(), n(new (o("WAAbortError").AbortError)()));
                },
                u = function () {
                  (t.off(r, l),
                    i == null || i.removeEventListener("abort", s),
                    (u = null));
                };
              (i == null || i.addEventListener("abort", s), t.on(r, l));
            })
      );
    }
    l.default = s;
  },
  98,
);
