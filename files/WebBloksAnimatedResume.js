__d(
  "WebBloksAnimatedResume",
  ["WebBloksAnimatedUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n = o("WebBloksAnimatedUtils").getAnimationWithToken(e, t);
      if (n != null && !n.isCancelled) {
        var r = n.isPaused;
        return (n.resume(), r && !n.isPaused);
      }
      return !1;
    }
    l.default = e;
  },
  98,
);
