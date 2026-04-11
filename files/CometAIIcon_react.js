__d(
  "CometAIIcon.react",
  [
    "BaseSVGIcon.react",
    "CometAIBaseTheme.stylex",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = ["color"],
      s,
      u = s || (s = o("react")),
      c = {
        disabled: o("CometAIBaseTheme.stylex").baseThemeVars.disabledIcon,
        negative: o("CometAIBaseTheme.stylex").baseThemeVars.negative,
        primary: o("CometAIBaseTheme.stylex").baseThemeVars.primaryIcon,
        secondary: o("CometAIBaseTheme.stylex").baseThemeVars.secondaryIcon,
      };
    function d(t) {
      var n,
        a = o("react-compiler-runtime").c(6),
        i,
        l;
      a[0] !== t
        ? ((l = t.color),
          (i = babelHelpers.objectWithoutPropertiesLoose(t, e)),
          (a[0] = t),
          (a[1] = i),
          (a[2] = l))
        : ((i = a[1]), (l = a[2]));
      var s = l === void 0 ? "primary" : l,
        d = (n = c[s]) != null ? n : s,
        m;
      return (
        a[3] !== i || a[4] !== d
          ? ((m = u.jsx(
              r("BaseSVGIcon.react"),
              babelHelpers.extends({}, i, { color: d }),
            )),
            (a[3] = i),
            (a[4] = d),
            (a[5] = m))
          : (m = a[5]),
        m
      );
    }
    l.default = d;
  },
  98,
);
