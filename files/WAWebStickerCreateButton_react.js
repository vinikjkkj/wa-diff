__d(
  "WAWebStickerCreateButton.react",
  [
    "fbt",
    "WAWebPlusIcon.react",
    "WAWebUISpacing",
    "WAWebUnstyledButton.react",
    "react",
    "stylex",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c = u || (u = o("react")),
      d = {
        button: {
          width: "xx0o2gc",
          height: "x1llv8pw",
          display: "x78zum5",
          justifyContent: "xl56j7k",
          alignItems: "x6s0dn4",
          $$css: !0,
        },
        container: {
          width: "x1lraqik",
          height: "xsi6dy0",
          backgroundColor: "x1od0jb8",
          color: "x7ncltm",
          fontSize: "x1nxh6w3",
          borderTopWidth: "x178xt8z",
          borderInlineEndWidth: "x1lun4ml",
          borderBottomWidth: "xso031l",
          borderInlineStartWidth: "xpilrb4",
          borderTopStyle: "x13fuv20",
          borderInlineEndStyle: "x18b5jzi",
          borderBottomStyle: "x1q0q8m5",
          borderInlineStartStyle: "x1t7ytsu",
          borderTopColor: "xx42vgk",
          borderInlineEndColor: "xbogo7e",
          borderBottomColor: "x120ee7l",
          borderInlineStartColor: "x1vb5itz",
          borderStartStartRadius: "x1xn7y0n",
          borderStartEndRadius: "x1uxb8k9",
          borderEndEndRadius: "x1vmbcc8",
          borderEndStartRadius: "x16xm01d",
          ":hover_transform": "xt8homm",
          transitionProperty: "x11xpdln",
          transitionDuration: "x1g2r6go",
          transitionTimingFunction: "xwji4o3",
          willChange: "x1so62im",
          display: "x78zum5",
          flexDirection: "xdt5ytf",
          alignItems: "x6s0dn4",
          justifyContent: "xl56j7k",
          $$css: !0,
        },
        containerExpressionPanels: {
          width: "x1247r65",
          height: "xng8ra",
          fontSize: "x1ncwhqj",
          $$css: !0,
        },
      };
    function m(t) {
      var n = t.onClick,
        a = t.theme,
        i = function (t) {
          n == null || n(t);
        };
      return c.jsx(r("WAWebUnstyledButton.react"), {
        xstyle: d.button,
        onClick: i,
        children: c.jsxs(
          "div",
          babelHelpers.extends(
            {},
            (e || (e = r("stylex"))).props(
              d.container,
              a === "stickerExpressionsPanel" && d.containerExpressionPanels,
              a !== "stickerExpressionsPanel" &&
                o("WAWebUISpacing").uiMargin.top25,
              a !== "stickerExpressionsPanel" &&
                o("WAWebUISpacing").uiMargin.bottom20,
            ),
            {
              children: [
                c.jsx(o("WAWebPlusIcon.react").PlusIcon, {
                  xstyle: o("WAWebUISpacing").uiMargin.bottom4,
                }),
                c.jsx("span", { children: s._(/*BTDS*/ "Create") }),
              ],
            },
          ),
        ),
      });
    }
    ((m.displayName = m.name + " [from " + i.id + "]"), (l.default = m));
  },
  226,
);
