__d(
  "WebBloksAnimatedCreateDimension",
  [
    "WebBloksAnimationFunctions",
    "WebBloksAnimationValue",
    "WebBloksDimensionUtils",
    "WebBloksErrors",
    "WebBloksUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t, n, r, a, i, l) {
      var s,
        u = o("WebBloksDimensionUtils").parseDimension(r);
      if (!u)
        throw new (o("WebBloksErrors").WebBloksError)(
          "Failed to parse dimension (" + r + ")",
        );
      var c = u.type,
        d = u.value,
        m =
          (s = o("WebBloksDimensionUtils").parseDimension(a)) == null
            ? void 0
            : s.value;
      if (m == null)
        throw new (o("WebBloksErrors").WebBloksError)(
          "Failed to parse dimension (" + a + ")",
        );
      var p = new (o("WebBloksAnimationValue").WebBloksAnimationValue)({
        id: "" + o("WebBloksUtils").getNextGlobalBloksClientId(),
        animation: {
          style: "transform",
          from: d,
          to: m,
          format: function (t) {
            return o("WebBloksUtils").toPx(String(t) + c);
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
        p.addUpdateListener(function () {
          t(e, p);
        }),
        n &&
          p.addOnCompleteListener(function (t) {
            return n == null ? void 0 : n(e, p, t, e.bloksContext);
          }),
        p
      );
    }
    l.default = e;
  },
  98,
);
