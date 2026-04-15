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
        paddingTop8Only: { paddingTop: "x16ovd2e", $$css: !0 },
        paddingInline20: {
          paddingInlineStart: "x1phvje8",
          paddingInlineEnd: "xcldk2z",
          paddingLeft: null,
          paddingRight: null,
          $$css: !0,
        },
        paddingStart24: { paddingInlineStart: "xb0esv5", $$css: !0 },
      };
    function c(e) {
      var t = o("react-compiler-runtime").c(10),
        n = e.children,
        a = e.headerText,
        i = e.hideDivider,
        l = e.theme,
        c = l === "biz-ai-home" ? u.paddingInline20 : u.paddingStart24,
        d;
      t[0] !== i
        ? ((d = {
            0: { className: "x16ovd2e x12xbjc7" },
            1: { className: "xso031l x1q0q8m5 x120ee7l x16ovd2e x12xbjc7" },
          }[!i << 0]),
          (t[0] = i),
          (t[1] = d))
        : (d = t[1]);
      var m;
      t[2] !== c || t[3] !== a || t[4] !== l
        ? ((m =
            a != null
              ? s.jsx(r("WDSText.react"), {
                  type: "Body1Emphasized",
                  colorName: "contentDefault",
                  xstyle: [
                    l === "biz-ai-home" ? u.paddingTop8Only : u.paddingVert8,
                    c,
                  ],
                  children: a,
                })
              : null),
          (t[2] = c),
          (t[3] = a),
          (t[4] = l),
          (t[5] = m))
        : (m = t[5]);
      var p;
      return (
        t[6] !== n || t[7] !== d || t[8] !== m
          ? ((p = s.jsxs(
              "div",
              babelHelpers.extends({ "data-testid": void 0 }, d, {
                children: [m, n],
              }),
            )),
            (t[6] = n),
            (t[7] = d),
            (t[8] = m),
            (t[9] = p))
          : (p = t[9]),
        p
      );
    }
    l.default = c;
  },
  98,
);
