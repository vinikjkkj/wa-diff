__d(
  "XMDSThemeV1.react",
  [
    "BaseTheme.react",
    "CometTransientDialogProvider.react",
    "XMDSThemeConfig",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = ["children"],
      s,
      u = s || (s = o("react"));
    function c(t) {
      var n = o("react-compiler-runtime").c(8),
        a,
        i;
      n[0] !== t
        ? ((a = t.children),
          (i = babelHelpers.objectWithoutPropertiesLoose(t, e)),
          (n[0] = t),
          (n[1] = a),
          (n[2] = i))
        : ((a = n[1]), (i = n[2]));
      var l;
      n[3] !== a
        ? ((l = u.jsx(r("CometTransientDialogProvider.react"), {
            children: a,
          })),
          (n[3] = a),
          (n[4] = l))
        : (l = n[4]);
      var s;
      return (
        n[5] !== i || n[6] !== l
          ? ((s = u.jsx(
              r("BaseTheme.react"),
              babelHelpers.extends({ config: r("XMDSThemeConfig") }, i, {
                children: l,
              }),
            )),
            (n[5] = i),
            (n[6] = l),
            (n[7] = s))
          : (s = n[7]),
        s
      );
    }
    l.default = c;
  },
  98,
);
