__d(
  "MAIBACanvasExitGuard",
  ["Promise", "vulture"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = null;
    function u(e) {
      return (
        r("vulture")("BNOGLLxZwGH5Ac8w7C4lh36y7gk="),
        (s = e),
        function () {
          s === e && (s = null);
        }
      );
    }
    function c() {
      return s != null;
    }
    function d() {
      return s != null ? s() : (e || (e = n("Promise"))).resolve(!0);
    }
    ((l.registerCanvasExitGuard = u),
      (l.hasCanvasExitGuard = c),
      (l.runCanvasExitGuard = d));
  },
  98,
);
