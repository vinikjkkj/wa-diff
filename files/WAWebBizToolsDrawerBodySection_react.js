__d(
  "WAWebBizToolsDrawerBodySection.react",
  ["WDSText.react", "react", "react-compiler-runtime"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = {
        paddingVert8: {
          paddingTop: "x16ovd2e",
          paddingBottom: "x12xbjc7",
          $$css: !0,
        },
        paddingStart24: { paddingInlineStart: "xb0esv5", $$css: !0 },
      };
    function c(e) {
      var t = o("react-compiler-runtime").c(8),
        n = e.children,
        a = e.headerText,
        i = e.hideDivider,
        l;
      t[0] !== i
        ? ((l = {
            0: { className: "x16ovd2e x12xbjc7" },
            1: { className: "xso031l x1q0q8m5 x120ee7l x16ovd2e x12xbjc7" },
          }[!i << 0]),
          (t[0] = i),
          (t[1] = l))
        : (l = t[1]);
      var c;
      t[2] !== a
        ? ((c =
            a != null
              ? s.jsx(r("WDSText.react"), {
                  type: "Body1Emphasized",
                  colorName: "contentDefault",
                  xstyle: [u.paddingVert8, u.paddingStart24],
                  children: a,
                })
              : null),
          (t[2] = a),
          (t[3] = c))
        : (c = t[3]);
      var d;
      return (
        t[4] !== n || t[5] !== l || t[6] !== c
          ? ((d = s.jsxs(
              "div",
              babelHelpers.extends({ "data-testid": void 0 }, l, {
                children: [c, n],
              }),
            )),
            (t[4] = n),
            (t[5] = l),
            (t[6] = c),
            (t[7] = d))
          : (d = t[7]),
        d
      );
    }
    l.default = c;
  },
  98,
);
