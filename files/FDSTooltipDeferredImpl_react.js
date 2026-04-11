__d(
  "FDSTooltipDeferredImpl.react",
  [
    "BaseTooltipImpl.react",
    "CometThemeInfraBaseThemeContext.react",
    "CometThemeInfraUtils",
    "FDSProgressRingIndeterminate.react",
    "FDSText.react",
    "react",
    "react-compiler-runtime",
    "useCometTheme",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = ["headline", "tooltip"],
      s,
      u = s || (s = o("react")),
      c = s.useContext;
    function d(t) {
      var n = o("react-compiler-runtime").c(16),
        a,
        i;
      if (n[0] !== t) {
        var l = t.headline,
          s = t.tooltip,
          d = babelHelpers.objectWithoutPropertiesLoose(t, e);
        ((i = s), (a = d), (n[0] = t), (n[1] = a), (n[2] = i));
      } else ((a = n[1]), (i = n[2]));
      var m = r("useCometTheme")("invert"),
        p = m[0],
        _ = m[1],
        f = c(r("CometThemeInfraBaseThemeContext.react")),
        g;
      n[3] !== f || n[4] !== _
        ? ((g =
            o(
              "CometThemeInfraUtils",
            ).enableCometThemeInfraThemeInXMDSComponents() && f
              ? f.dark
              : _),
          (n[3] = f),
          (n[4] = _),
          (n[5] = g))
        : (g = n[5]);
      var h = g,
        y;
      n[6] === Symbol.for("react.memo_cache_sentinel")
        ? ((y = u.jsx(r("FDSProgressRingIndeterminate.react"), {
            color: "dark",
            size: 20,
          })),
          (n[6] = y))
        : (y = n[6]);
      var C;
      n[7] !== i
        ? ((C =
            i != null
              ? u.jsx(r("FDSText.react"), {
                  color: "tooltip",
                  type: "body4",
                  children: i,
                })
              : null),
          (n[7] = i),
          (n[8] = C))
        : (C = n[8]);
      var b;
      n[9] !== h || n[10] !== a || n[11] !== C
        ? ((b = u.jsx(
            r("BaseTooltipImpl.react"),
            babelHelpers.extends({}, a, {
              loadingState: y,
              tooltip: C,
              xstyle: h,
            }),
          )),
          (n[9] = h),
          (n[10] = a),
          (n[11] = C),
          (n[12] = b))
        : (b = n[12]);
      var v;
      return (
        n[13] !== p || n[14] !== b
          ? ((v = u.jsx(p, { children: b })),
            (n[13] = p),
            (n[14] = b),
            (n[15] = v))
          : (v = n[15]),
        v
      );
    }
    l.default = d;
  },
  98,
);
