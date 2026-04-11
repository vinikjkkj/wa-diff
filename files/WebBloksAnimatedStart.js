__d(
  "WebBloksAnimatedStart",
  [
    "WebBloksAnimatedUtils",
    "WebBloksAnimationsTimeline",
    "webBloksPerformanceUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      var n = e.bloksContext.loggingIDForInternalFrameworkUseOnly,
        r = { detail: { loggingID: n } };
      if (
        t instanceof o("WebBloksAnimationsTimeline").WebBloksAnimationsTimeline
      )
        (t.play(),
          (r.detail = babelHelpers.extends({}, r.detail, {
            animationID: t.getID(),
          })));
      else {
        var a = new (o(
            "WebBloksAnimationsTimeline",
          ).WebBloksAnimationsTimeline)(t),
          i = o("WebBloksAnimatedUtils").getIDTokenForLegacyAnimation(t);
        (a.setID(i),
          (r.detail = babelHelpers.extends({}, r.detail, {
            animationID: a.getID(),
          })),
          o("WebBloksAnimatedUtils").associateAnimationWithToken(e, i, a, !1),
          o("WebBloksAnimatedUtils").startAnimationWithToken(e, i));
      }
      o("webBloksPerformanceUtils").addWebBloksPerformanceMark(
        "--web-bloks-animation-start",
        r,
      );
      var l = function () {
        (o("webBloksPerformanceUtils").addWebBloksPerformanceMark(
          "--web-bloks-animation-end",
          r,
        ),
          t == null || t.removeOnCompleteListener(l));
      };
      t == null || t.addOnCompleteListener(l);
    }
    l.default = e;
  },
  98,
);
