__d(
  "WAWebMediaEditorToolbarColorChip.react",
  [
    "WAWebDropdownV2.react",
    "WAWebMediaEditorEnumsColors",
    "WAWebPopoverContext.react",
    "WAWebRecalledIcon.react",
    "WAWebTooltip.react",
    "WDSFocusStateStyles",
    "react",
    "stylex",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = s || (s = o("react")),
      c = s,
      d = c.useRef,
      m = c.useState,
      p = {
        colorButton: {
          display: "x78zum5",
          flexShrink: "x2lah0s",
          alignItems: "x6s0dn4",
          justifyContent: "xl56j7k",
          width: "xgd8bvy",
          height: "x1fgtraw",
          borderStartStartRadius: "x1c9tyrk",
          borderStartEndRadius: "xeusxvb",
          borderEndEndRadius: "x1pahc9y",
          borderEndStartRadius: "x1ertn4p",
          $$css: !0,
        },
        smallColorButton: {
          display: "x78zum5",
          flexShrink: "x2lah0s",
          alignItems: "x6s0dn4",
          justifyContent: "xl56j7k",
          width: "xvy4d1p",
          height: "xxk0z11",
          borderStartStartRadius: "x1c9tyrk",
          borderStartEndRadius: "xeusxvb",
          borderEndEndRadius: "x1pahc9y",
          borderEndStartRadius: "x1ertn4p",
          $$css: !0,
        },
        btnHoverActive: { cursor: "x1ypdohk", $$css: !0 },
        btnSelectedHoverActive: { cursor: "xt0e3qv", $$css: !0 },
        bgColor: function (t) {
          return [
            { backgroundColor: t != null ? "xl8spv7" : t, $$css: !0 },
            { "--x-backgroundColor": t != null ? t : void 0 },
          ];
        },
      };
    function _(t) {
      var n = t.onSelect,
        a = t.primaryColor,
        i = t.secondaryColor,
        l = t.selected,
        s = t.theme,
        c = t.withBorder,
        _ = m(!1),
        f = _[0],
        g = _[1],
        h = m(!1),
        y = h[0],
        C = h[1],
        b = d(null),
        v = function (t) {
          g(!0);
        },
        S = function (t) {
          g(!1);
        },
        R = function (t) {
          C(!0);
        },
        L = function (t) {
          C(!1);
        },
        E = 24;
      l ? (E = 30) : f && (E = 26);
      var k = s === "small",
        I = s !== "small",
        T = k || I,
        D = T && l,
        x = y && !l ? a.withAlpha(0.2).toRgbaString() : "transparent",
        $ = a.colorType
          ? o("WAWebMediaEditorEnumsColors").getColorLabel(a.colorType)
          : null;
      return u.jsx(
        "button",
        babelHelpers.extends(
          {
            ref: b,
            onClick: n,
            onMouseEnter: v,
            onMouseLeave: S,
            onMouseDown: R,
            onMouseUp: L,
            "aria-label": $,
          },
          (e || (e = r("stylex"))).props([
            I && p.colorButton,
            k && p.smallColorButton,
            T && (f || y) && p.btnHoverActive,
            D && (f || y) && p.btnSelectedHoverActive,
            p.bgColor(x),
            o("WDSFocusStateStyles").WDSFocusStateStyles.genericFocusInner,
          ]),
          {
            children: u.jsxs("div", {
              className: {
                0: "x78zum5 x6s0dn4 xl56j7k x1xp8n7a xmix8c7 x1c9tyrk xeusxvb x1pahc9y x1ertn4p",
                8: "x78zum5 x6s0dn4 xl56j7k x1c9tyrk xeusxvb x1pahc9y x1ertn4p xw4jnvo x1qx5ct2",
                4: "x78zum5 x6s0dn4 xl56j7k x1xp8n7a xmix8c7 x1c9tyrk xeusxvb x1pahc9y x1ertn4p x9f619 x10yov1p x1faonio x4dhg9v xn24z0i x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu x178xt8z x1lun4ml xso031l xpilrb4",
                12: "x78zum5 x6s0dn4 xl56j7k x1c9tyrk xeusxvb x1pahc9y x1ertn4p xw4jnvo x1qx5ct2 x9f619 x10yov1p x1faonio x4dhg9v xn24z0i x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu x178xt8z x1lun4ml xso031l xpilrb4",
                2: "x78zum5 x6s0dn4 xl56j7k x1c9tyrk xeusxvb x1pahc9y x1ertn4p xw4jnvo x1qx5ct2",
                10: "x78zum5 x6s0dn4 xl56j7k x1c9tyrk xeusxvb x1pahc9y x1ertn4p xw4jnvo x1qx5ct2",
                6: "x78zum5 x6s0dn4 xl56j7k x1c9tyrk xeusxvb x1pahc9y x1ertn4p x9f619 x10yov1p x1faonio x4dhg9v xn24z0i x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu x178xt8z x1lun4ml xso031l xpilrb4 xw4jnvo x1qx5ct2",
                14: "x78zum5 x6s0dn4 xl56j7k x1c9tyrk xeusxvb x1pahc9y x1ertn4p x9f619 x10yov1p x1faonio x4dhg9v xn24z0i x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu x178xt8z x1lun4ml xso031l xpilrb4 xw4jnvo x1qx5ct2",
                1: "x78zum5 x6s0dn4 xl56j7k x1c9tyrk xeusxvb x1pahc9y x1ertn4p xvy4d1p xxk0z11",
                9: "x78zum5 x6s0dn4 xl56j7k x1c9tyrk xeusxvb x1pahc9y x1ertn4p xvy4d1p xxk0z11",
                5: "x78zum5 x6s0dn4 xl56j7k x1c9tyrk xeusxvb x1pahc9y x1ertn4p x9f619 x10yov1p x1faonio x4dhg9v xn24z0i x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu x178xt8z x1lun4ml xso031l xpilrb4 xvy4d1p xxk0z11",
                13: "x78zum5 x6s0dn4 xl56j7k x1c9tyrk xeusxvb x1pahc9y x1ertn4p x9f619 x10yov1p x1faonio x4dhg9v xn24z0i x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu x178xt8z x1lun4ml xso031l xpilrb4 xvy4d1p xxk0z11",
                3: "x78zum5 x6s0dn4 xl56j7k x1c9tyrk xeusxvb x1pahc9y x1ertn4p xvy4d1p xxk0z11",
                11: "x78zum5 x6s0dn4 xl56j7k x1c9tyrk xeusxvb x1pahc9y x1ertn4p xvy4d1p xxk0z11",
                7: "x78zum5 x6s0dn4 xl56j7k x1c9tyrk xeusxvb x1pahc9y x1ertn4p x9f619 x10yov1p x1faonio x4dhg9v xn24z0i x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu x178xt8z x1lun4ml xso031l xpilrb4 xvy4d1p xxk0z11",
                15: "x78zum5 x6s0dn4 xl56j7k x1c9tyrk xeusxvb x1pahc9y x1ertn4p x9f619 x10yov1p x1faonio x4dhg9v xn24z0i x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu x178xt8z x1lun4ml xso031l xpilrb4 xvy4d1p xxk0z11",
              }[
                ((t.theme === "medium") << 3) |
                  (!!(c && a.isWhite()) << 2) |
                  (!!(T && (f || y)) << 1) |
                  (!!(D && (f || y)) << 0)
              ],
              style: { backgroundColor: a.toRgbaString() },
              children: [
                a.equals(
                  o("WAWebMediaEditorEnumsColors").getColorValue(
                    o("WAWebMediaEditorEnumsColors").ColorType.TRANSPARENT,
                  ),
                ) &&
                  u.jsx(o("WAWebRecalledIcon.react").RecalledIcon, {
                    width: E,
                    height: E,
                  }),
                i &&
                  l &&
                  u.jsx("div", {
                    className:
                      "x1xc55vz xdk7pt x1c9tyrk xeusxvb x1pahc9y x1ertn4p",
                    style: { backgroundColor: i.toRgbaString() },
                  }),
                $ != null &&
                  u.jsx(o("WAWebPopoverContext.react").WAWebPopoverController, {
                    targetRef: b,
                    popover: u.jsx(o("WAWebTooltip.react").WAWebHoverTooltip, {
                      targetRef: "context",
                      alignment: o("WAWebDropdownV2.react").PopoverAlignment
                        .Center,
                      position: o("WAWebDropdownV2.react").PopoverPosition
                        .Bottom,
                      showOnFocus: !0,
                      enableEnterTransition: !1,
                      children: $,
                    }),
                  }),
              ],
            }),
          },
        ),
      );
    }
    ((_.displayName = _.name + " [from " + i.id + "]"), (l.default = _));
  },
  98,
);
