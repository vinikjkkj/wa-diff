__d(
  "WebBloksAnimatedCreate",
  ["WebBloksAnimationFunctions", "WebBloksAnimationValue", "WebBloksUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e, t, n, r, a, i, l) {
      var s = new (o("WebBloksAnimationValue").WebBloksAnimationValue)({
        id: "" + o("WebBloksUtils").getNextGlobalBloksClientId(),
        animation: {
          style: "transform",
          from: parseFloat(r),
          to: parseFloat(a),
          format: function (t) {
            return String(t);
          },
          duration: i * 1e3,
          interpolator:
            l != null
              ? l
              : o("WebBloksAnimationFunctions").linearInterpolator(),
        },
        animatedValue: null,
      });
      return (
        s.addUpdateListener(function () {
          t(e, s);
        }),
        s.addOnCompleteListener(function (t) {
          n == null || n(e, s, t, e.bloksContext);
        }),
        s
      );
    }
    l.default = e;
  },
  98,
);
