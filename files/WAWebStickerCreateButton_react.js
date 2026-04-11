__d(
  "WAWebStickerCreateButton.react",
  [
    "fbt",
    "WAWebPlusIcon.react",
    "WAWebUISpacing",
    "WAWebUnstyledButton.react",
    "react",
    "react-compiler-runtime",
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
      var n = o("react-compiler-runtime").c(11),
        a = t.onClick,
        i = t.theme,
        l;
      n[0] !== a
        ? ((l = function (t) {
            a == null || a(t);
          }),
          (n[0] = a),
          (n[1] = l))
        : (l = n[1]);
      var u = l,
        m;
      n[2] !== i
        ? ((m = (e || (e = r("stylex"))).props(
            d.container,
            i === "stickerExpressionsPanel" && d.containerExpressionPanels,
            i !== "stickerExpressionsPanel" &&
              o("WAWebUISpacing").uiMargin.top25,
            i !== "stickerExpressionsPanel" &&
              o("WAWebUISpacing").uiMargin.bottom20,
          )),
          (n[2] = i),
          (n[3] = m))
        : (m = n[3]);
      var p, _;
      n[4] === Symbol.for("react.memo_cache_sentinel")
        ? ((p = c.jsx(o("WAWebPlusIcon.react").PlusIcon, {
            xstyle: o("WAWebUISpacing").uiMargin.bottom4,
          })),
          (_ = c.jsx("span", { children: s._(/*BTDS*/ "Create") })),
          (n[4] = p),
          (n[5] = _))
        : ((p = n[4]), (_ = n[5]));
      var f;
      n[6] !== m
        ? ((f = c.jsxs(
            "div",
            babelHelpers.extends({}, m, { children: [p, _] }),
          )),
          (n[6] = m),
          (n[7] = f))
        : (f = n[7]);
      var g;
      return (
        n[8] !== u || n[9] !== f
          ? ((g = c.jsx(r("WAWebUnstyledButton.react"), {
              xstyle: d.button,
              onClick: u,
              children: f,
            })),
            (n[8] = u),
            (n[9] = f),
            (n[10] = g))
          : (g = n[10]),
        g
      );
    }
    l.default = m;
  },
  226,
);
