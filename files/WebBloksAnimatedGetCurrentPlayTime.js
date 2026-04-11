__d(
  "WebBloksAnimatedGetCurrentPlayTime",
  ["WebBloksAnimatedUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n = o("WebBloksAnimatedUtils").getAnimationWithToken(e, t);
      if (n != null) {
        var r = n.getCurrentTime(),
          a = r / 1e3;
        return a;
      }
      return 0;
    }
    l.default = e;
  },
  98,
);
