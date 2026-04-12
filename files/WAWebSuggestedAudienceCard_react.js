__d(
  "WAWebSuggestedAudienceCard.react",
  [
    "WAWebFlex.react",
    "WDSFocusStateStyles",
    "WDSIconIcChevronRight.react",
    "WDSText.react",
    "react",
    "stylex",
    "useWAWebStaticButtonA11y",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = s || (s = o("react")),
      c = s.useCallback,
      d = {
        card: {
          backgroundColor: "xjbqb8w x1ubxc9n",
          borderTopColor: "xnj1f2r",
          borderInlineEndColor: "x2uibgs",
          borderBottomColor: "xkveyfu",
          borderInlineStartColor: "x12llq9",
          borderStartStartRadius: "xlr9sxt",
          borderStartEndRadius: "xvvg52n",
          borderEndEndRadius: "xwd4zgb",
          borderEndStartRadius: "xq8v1ta",
          borderTopStyle: "x13fuv20",
          borderInlineEndStyle: "x18b5jzi",
          borderBottomStyle: "x1q0q8m5",
          borderInlineStartStyle: "x1t7ytsu",
          borderTopWidth: "x178xt8z",
          borderInlineEndWidth: "x1lun4ml",
          borderBottomWidth: "xso031l",
          borderInlineStartWidth: "xpilrb4",
          cursor: "x1ypdohk",
          rowGap: "x8a3fw1",
          columnGap: "x1aj3ljl",
          paddingTop: "x1xrf6ya",
          paddingBottom: "xscbp6u",
          paddingInlineStart: "xdx6fka",
          paddingInlineEnd: "xvtqlqk",
          $$css: !0,
        },
        iconWrapper: {
          backgroundColor: "x1h3rtpe",
          borderStartStartRadius: "xt8t1vi",
          borderStartEndRadius: "x1xc408v",
          borderEndEndRadius: "x129tdwq",
          borderEndStartRadius: "x15urzxu",
          height: "x10kmny3",
          width: "xuy0it7",
          $$css: !0,
        },
        row: {
          alignItems: "x6s0dn4",
          display: "x78zum5",
          flexDirection: "x1q0g3np",
          $$css: !0,
        },
      };
    function m(t) {
      var n = t.card,
        a = t.onPress,
        i = t.xstyle,
        l = c(
          function () {
            a(n);
          },
          [n, a],
        ),
        s = r("useWAWebStaticButtonA11y")(l),
        m = s[0],
        p = s[1],
        _ = n.icon;
      return u.jsxs(
        "div",
        babelHelpers.extends(
          {
            ref: m,
            className: (e || (e = r("stylex")))(
              d.card,
              d.row,
              o("WDSFocusStateStyles").WDSFocusStateStyles.genericFocus,
              i,
            ),
            "data-testid": void 0,
          },
          p,
          {
            children: [
              u.jsx(o("WAWebFlex.react").FlexRow, {
                align: "center",
                justify: "center",
                shrink: 0,
                xstyle: d.iconWrapper,
                children: u.jsx(_, {}),
              }),
              u.jsxs(o("WAWebFlex.react").FlexColumn, {
                grow: 1,
                children: [
                  u.jsx(r("WDSText.react"), {
                    type: "Body1",
                    colorName: "contentDefault",
                    children: n.title(),
                  }),
                  u.jsx(r("WDSText.react"), {
                    type: "Body2",
                    colorName: "contentDeemphasized",
                    maxLines: 1,
                    children: n.description(),
                  }),
                ],
              }),
              u.jsx(r("WDSIconIcChevronRight.react"), {
                colorName: "contentDeemphasized",
              }),
            ],
          },
        ),
      );
    }
    ((m.displayName = m.name + " [from " + i.id + "]"), (l.default = m));
  },
  98,
);
