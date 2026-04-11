__d(
  "WebBloksAnimatedSetCurrentPlayTime",
  ["WebBloksAnimatedUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n) {
      var r = o("WebBloksAnimatedUtils").getAnimationWithToken(e, t);
      if (r != null && n != null) {
        var a = n * 1e3;
        r.setCurrentTime(a);
      }
    }
    l.default = e;
  },
  98,
);
