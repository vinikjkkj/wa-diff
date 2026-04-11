__d(
  "WebBloksAnimatedCancelToken",
  ["WebBloksAnimatedUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      var n = o("WebBloksAnimatedUtils").getAnimationWithToken(e, t);
      n !== null && n.cancel();
    }
    l.default = e;
  },
  98,
);
