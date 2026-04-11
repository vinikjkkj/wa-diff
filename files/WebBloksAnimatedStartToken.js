__d(
  "WebBloksAnimatedStartToken",
  ["WebBloksAnimatedUtils", "webBloksPerformanceUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      var n = o("WebBloksAnimatedUtils").getAnimationWithToken(e, t);
      (n != null && n.setID(t),
        o("WebBloksAnimatedUtils").startAnimationWithToken(e, t));
      var r = e.bloksContext.loggingIDForInternalFrameworkUseOnly,
        a = { detail: { animationID: t, loggingID: r } };
      o("webBloksPerformanceUtils").addWebBloksPerformanceMark(
        "--web-bloks-animation-start",
        a,
      );
      var i = function () {
        (o("webBloksPerformanceUtils").addWebBloksPerformanceMark(
          "--web-bloks-animation-end",
          a,
        ),
          n == null || n.removeOnCompleteListener(i));
      };
      n == null || n.addOnCompleteListener(i);
    }
    l.default = e;
  },
  98,
);
