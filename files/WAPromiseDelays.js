__d(
  "WAPromiseDelays",
  ["Promise", "WAAbortError"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(t, r) {
      return new (e || (e = n("Promise")))(function (e, n) {
        if (r != null && r.aborted) throw new (o("WAAbortError").AbortError)();
        var a = setTimeout(i, t);
        r == null || r.addEventListener("abort", l);
        function i() {
          (r == null || r.removeEventListener("abort", l), e());
        }
        function l() {
          (r == null || r.removeEventListener("abort", l),
            clearTimeout(a),
            n(new (o("WAAbortError").AbortError)()));
        }
      });
    }
    function u(t, r, o) {
      return new (e || (e = n("Promise")))(function (e, n) {
        var a = setTimeout(function () {
          try {
            e(o());
          } catch (e) {
            n(e);
          }
        }, r);
        t.then(
          function (t) {
            (clearTimeout(a), e(t));
          },
          function (e) {
            (clearTimeout(a), n(e));
          },
        );
      });
    }
    function c() {
      return s(0);
    }
    ((l.delayMs = s), (l.withTimeout = u), (l.releaseToEventLoop = c));
  },
  98,
);
