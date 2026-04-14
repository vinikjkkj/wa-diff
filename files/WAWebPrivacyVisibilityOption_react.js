__d(
  "WAWebPrivacyVisibilityOption.react",
  [
    "WAWebCheckBoxRound.react",
    "WAWebFlex.react",
    "WAWebTabOrder",
    "WAWebText.react",
    "WAWebUnstyledButton.react",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = {
        visibilityOption: {
          display: "x1lliihq",
          width: "xh8yej3",
          boxSizing: "x9f619",
          paddingTop: "x1h678fw",
          paddingBottom: "xv6tirj",
          paddingInlineStart: "xdx6fka",
          paddingInlineEnd: "xvtqlqk",
          marginInlineStart: "x45gse5",
          borderStartStartRadius: "xlr9sxt",
          borderStartEndRadius: "xvvg52n",
          borderEndEndRadius: "xwd4zgb",
          borderEndStartRadius: "xq8v1ta",
          textAlign: "x1yc453h",
          ":hover_backgroundColor": "x1ubxc9n",
          $$css: !0,
        },
        paddingStart20: { paddingInlineStart: "x1phvje8", $$css: !0 },
      };
    function c(e) {
      var t = e.disabled,
        n = e.onClick,
        a = e.onDisabledClick,
        i = e.ref,
        l = e.selected,
        c = e.subText,
        d = e.testid,
        m = e.text;
      return s.jsx(r("WAWebUnstyledButton.react"), {
        tabIndex: 0,
        dataTab: o("WAWebTabOrder").TAB_ORDER.DRAWER_CONTENT,
        ref: i,
        xstyle: u.visibilityOption,
        onClick: n,
        onDisabledClick: a,
        disabled: t,
        testid: void 0,
        children: s.jsxs(o("WAWebFlex.react").FlexRow, {
          children: [
            s.jsx(o("WAWebFlex.react").FlexItem, {
              align: "center",
              children: s.jsx(r("WAWebCheckBoxRound.react"), {
                checked: l,
                radio: !0,
                hover: !1,
                systemUncheckedColor: !0,
                disabled: t,
                onClick: n,
              }),
            }),
            s.jsxs(o("WAWebFlex.react").FlexItem, {
              xstyle: u.paddingStart20,
              grow: 1,
              children: [
                s.jsx(
                  "span",
                  babelHelpers.extends(
                    {},
                    {
                      0: { className: "x1jchvi3 x1fc57z9 x1rg5ohu" },
                      1: { className: "x1jchvi3 x1fc57z9 x1rg5ohu xbyyjgo" },
                    }[(t === !0) << 0],
                    { children: m },
                  ),
                ),
                s.jsx(o("WAWebText.react").WAWebTextSmall, { children: c }),
              ],
            }),
          ],
        }),
      });
    }
    ((c.displayName = c.name + " [from " + i.id + "]"), (l.default = c));
  },
  98,
);
