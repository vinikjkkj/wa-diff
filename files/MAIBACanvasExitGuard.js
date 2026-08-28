__d(
  "MAIBACanvasExitGuard",
  ["Promise"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e,
      l = null;
    function s(e) {
      return (
        (l = e),
        function () {
          l === e && (l = null);
        }
      );
    }
    function u() {
      return l != null;
    }
    function c() {
      return l != null ? l() : (e || (e = n("Promise"))).resolve(!0);
    }
    ((i.registerCanvasExitGuard = s),
      (i.hasCanvasExitGuard = u),
      (i.runCanvasExitGuard = c));
  },
  66,
);
