__d(
  "WebBloksAnimatedGetTotalDuration",
  ["WebBloksAnimatedUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      var n = o("WebBloksAnimatedUtils").getAnimationWithToken(e, t);
      if (n != null) {
        var r = n.getTotalDuration(),
          a = r / 1e3;
        return a;
      }
    }
    l.default = e;
  },
  98,
);
