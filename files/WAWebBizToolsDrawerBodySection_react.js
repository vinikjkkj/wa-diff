__d(
  "WAWebBizToolsDrawerBodySection.react",
  ["WDSText.react", "react"],
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
      var t = e.children,
        n = e.headerText,
        o = e.hideDivider;
      return s.jsxs(
        "div",
        babelHelpers.extends(
          { "data-testid": void 0 },
          {
            0: { className: "x16ovd2e x12xbjc7" },
            1: { className: "xso031l x1q0q8m5 x120ee7l x16ovd2e x12xbjc7" },
          }[!o << 0],
          {
            children: [
              n != null
                ? s.jsx(r("WDSText.react"), {
                    type: "Body1Emphasized",
                    colorName: "contentDefault",
                    xstyle: [u.paddingVert8, u.paddingStart24],
                    children: n,
                  })
                : null,
              t,
            ],
          },
        ),
      );
    }
    ((c.displayName = c.name + " [from " + i.id + "]"), (l.default = c));
  },
  98,
);
