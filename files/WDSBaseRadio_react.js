__d(
  "WDSBaseRadio.react",
  [
    "BaseRadio.react",
    "BaseView.react",
    "WDSFocusStateStyles",
    "WDSIconIcCheck.react",
    "react",
    "stylex",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = [
        "checked",
        "children",
        "disabled",
        "id",
        "name",
        "onChange",
        "platform",
        "tabIndex",
        "testid",
        "value",
      ],
      s,
      u,
      c = u || (u = o("react")),
      d = u,
      m = d.useCallback,
      p = d.useState,
      _ = {
        root: {
          height: "xxk0z11",
          width: "xvy4d1p",
          display: "x78zum5",
          alignItems: "x6s0dn4",
          justifyContent: "xl56j7k",
          $$css: !0,
        },
        radioBorder: {
          boxSizing: "x9f619",
          minHeight: "xisnujt",
          minWidth: "xt4ypqs",
          borderStartStartRadius: "xt8t1vi",
          borderStartEndRadius: "x1xc408v",
          borderEndEndRadius: "x129tdwq",
          borderEndStartRadius: "x15urzxu",
          borderTopWidth: "xamhcws",
          borderInlineEndWidth: "x1alpsbp",
          borderBottomWidth: "xlxy82",
          borderInlineStartWidth: "xyumdvf",
          borderTopStyle: "x13fuv20",
          borderInlineEndStyle: "x18b5jzi",
          borderBottomStyle: "x1q0q8m5",
          borderInlineStartStyle: "x1t7ytsu",
          display: "x78zum5",
          alignItems: "x6s0dn4",
          justifyContent: "xl56j7k",
          $$css: !0,
        },
        radioBorderUnselected: {
          borderTopColor: "x1pyc6se",
          borderInlineEndColor: "x1mlb2bo",
          borderBottomColor: "x16pkwpw",
          borderInlineStartColor: "xqe4bef",
          $$css: !0,
        },
        radioBorderSelected: {
          borderTopColor: "xlze6vy",
          borderInlineEndColor: "x47fsot",
          borderBottomColor: "x1rrvw3c",
          borderInlineStartColor: "x18djku1",
          $$css: !0,
        },
        hovered: { backgroundColor: "xg6fylz", $$css: !0 },
        checkedCircle: {
          minHeight: "x1c87fqo",
          minWidth: "x1q6aqyx",
          backgroundColor: "xfn3atn",
          borderStartStartRadius: "xt8t1vi",
          borderStartEndRadius: "x1xc408v",
          borderEndEndRadius: "x129tdwq",
          borderEndStartRadius: "x15urzxu",
          $$css: !0,
        },
        checkmarkWrapper: {
          display: "x78zum5",
          alignItems: "x6s0dn4",
          justifyContent: "xl56j7k",
          $$css: !0,
        },
        disabled: { opacity: "x1lxidc1", filter: "x4dje6k", $$css: !0 },
      };
    function f(t) {
      var n = t.checked,
        a = t.children,
        i = t.disabled,
        l = t.id,
        u = t.name,
        d = t.onChange,
        f = t.platform,
        g = t.tabIndex,
        h = t.testid,
        y = t.value,
        C = babelHelpers.objectWithoutPropertiesLoose(t, e),
        b = f === "iOS",
        v = p(!1),
        S = v[0],
        R = v[1],
        L = m(
          function () {
            d(String(y));
          },
          [d, y],
        );
      return c.jsx(
        "div",
        babelHelpers.extends(
          {},
          (s || (s = r("stylex"))).props(
            o("WDSFocusStateStyles").WDSComponentFocusStateStyles.WDSRadio,
          ),
          {
            children: c.jsxs(
              r("BaseRadio.react"),
              babelHelpers.extends({}, C, {
                onMouseEnter: function () {
                  return R(!0);
                },
                onMouseLeave: function () {
                  return R(!1);
                },
                checked: n,
                disabled: i,
                name: u,
                id: l,
                onValueChange: L,
                value: String(y),
                suppressFocusRing: !0,
                tabIndex: g,
                testid: void 0,
                xstyle: _.root,
                children: [
                  c.jsx(r("BaseView.react"), {
                    xstyle: !b && [
                      _.radioBorder,
                      n && _.radioBorderSelected,
                      !n && _.radioBorderUnselected,
                      !n && S && _.hovered,
                      i === !0 && _.disabled,
                    ],
                    children:
                      n &&
                      (b
                        ? c.jsx(r("WDSIconIcCheck.react"), {
                            width: 22,
                            height: 22,
                            colorName: "accent",
                            xstyle: _.checkmarkWrapper,
                            iconXstyle: [i === !0 && _.disabled],
                          })
                        : c.jsx(r("BaseView.react"), {
                            xstyle: _.checkedCircle,
                          })),
                  }),
                  a,
                ],
              }),
            ),
          },
        ),
      );
    }
    ((f.displayName = f.name + " [from " + i.id + "]"), (l.default = f));
  },
  98,
);
