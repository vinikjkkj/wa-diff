__d(
  "WebBloksAnimatedCreateColor",
  ["WebBloksAnimationFunctions", "WebBloksAnimationValue", "WebBloksUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e, t, n, r, a, i, l) {
      var s = new (o("WebBloksAnimationValue").WebBloksAnimationValue)({
        id: "" + o("WebBloksUtils").getNextGlobalBloksClientId(),
        animation: {
          style: "color",
          from: o("WebBloksUtils").convertRGBOrHexStringToArr(r),
          to: o("WebBloksUtils").convertRGBOrHexStringToArr(a),
          format: function (t, n, r, a) {
            return (
              a === void 0 && (a = 1),
              o("WebBloksUtils").convertRGBArrToString([t, n, r, a])
            );
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
        n &&
          s.addOnCompleteListener(function (t) {
            return n == null ? void 0 : n(e, s, t, e.bloksContext);
          }),
        s
      );
    }
    l.default = e;
  },
  98,
);
