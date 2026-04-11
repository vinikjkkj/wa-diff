__d(
  "WebBloksAnimatedCancel",
  ["WebBloksAnimatedUtils", "WebBloksAnimationsTimeline"],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      if (
        t instanceof o("WebBloksAnimationsTimeline").WebBloksAnimationsTimeline
      )
        t.cancel();
      else {
        var n = o("WebBloksAnimatedUtils").getIDTokenForLegacyAnimation(t);
        o("WebBloksAnimatedUtils").deleteAnimationWithToken(e, n);
      }
    }
    l.default = e;
  },
  98,
);
