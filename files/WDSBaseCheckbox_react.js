__d(
  "WDSBaseCheckbox.react",
  [
    "BaseCheckbox.react",
    "BaseView.react",
    "WDSFocusStateStyles",
    "WDSHoverStateStyles",
    "WDSIconIcCheck.react",
    "react",
    "stylex",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = [
        "appearsOnMedia",
        "children",
        "disabled",
        "id",
        "onChange",
        "onKeyDown",
        "platform",
        "shape",
        "tabIndex",
        "testid",
        "value",
      ],
      s,
      u,
      c = u || (u = o("react")),
      d = u.useState,
      m = "xuza879-B",
      p = {
        root: {
          height: "xxk0z11",
          width: "xvy4d1p",
          display: "x3nfvp2",
          alignItems: "x6s0dn4",
          justifyContent: "xl56j7k",
          boxSizing: "x9f619",
          paddingTop: "xyqdw3p",
          paddingInlineEnd: "x1im30kd",
          paddingBottom: "xg8j3zb",
          paddingInlineStart: "x1djpfga",
          position: "x1n2onr6",
          $$css: !0,
        },
        checkboxBorder: {
          boxSizing: "x9f619",
          flexShrink: "x2lah0s",
          borderTopWidth: "xamhcws",
          borderInlineEndWidth: "x1alpsbp",
          borderBottomWidth: "xlxy82",
          borderInlineStartWidth: "xyumdvf",
          borderTopStyle: "x13fuv20",
          borderInlineEndStyle: "x18b5jzi",
          borderBottomStyle: "x1q0q8m5",
          borderInlineStartStyle: "x1t7ytsu",
          alignItems: "x6s0dn4",
          justifyContent: "xl56j7k",
          display: "x3nfvp2",
          $$css: !0,
        },
        checkboxBorderUnselected: {
          borderTopColor: "x1pyc6se",
          borderInlineEndColor: "x1mlb2bo",
          borderBottomColor: "x16pkwpw",
          borderInlineStartColor: "xqe4bef",
          $$css: !0,
        },
        checkboxBorderSelected: {
          borderTopColor: "xlze6vy",
          borderInlineEndColor: "x47fsot",
          borderBottomColor: "x1rrvw3c",
          borderInlineStartColor: "x18djku1",
          backgroundColor: "xfn3atn",
          $$css: !0,
        },
        checkboxBorderCircle: {
          borderStartStartRadius: "xt8t1vi",
          borderStartEndRadius: "x1xc408v",
          borderEndEndRadius: "x129tdwq",
          borderEndStartRadius: "x15urzxu",
          $$css: !0,
        },
        disabledCheckbox: { opacity: "x1lxidc1", filter: "x4dje6k", $$css: !0 },
        mediaCheckboxUnselected: {
          borderTopColor: "x1zfx7y",
          borderInlineEndColor: "x1gj3efs",
          borderBottomColor: "x151wx5t",
          borderInlineStartColor: "xea0m3l",
          $$css: !0,
        },
        mediaCheckboxSelected: {
          borderTopColor: "x1zfx7y",
          borderInlineEndColor: "x1gj3efs",
          borderBottomColor: "x151wx5t",
          borderInlineStartColor: "xea0m3l",
          backgroundColor: "x1p8t8ri",
          $$css: !0,
        },
        checkmarkWrapper: {
          display: "x78zum5",
          alignItems: "x6s0dn4",
          justifyContent: "xl56j7k",
          $$css: !0,
        },
        checkedCheckmark: {
          opacity: "x1hc1fzr",
          animationName: "x1oyg3g3",
          animationTimingFunction: "xa3vuyk",
          animationFillMode: "x10e4vud",
          animationDuration: "x1shwlz2",
          $$css: !0,
        },
        uncheckedCheckmark: { opacity: "xg01cxk", $$css: !0 },
      },
      _ = {
        checkboxBorder: {
          height: "xmix8c7",
          width: "x1xp8n7a",
          borderStartStartRadius: "xbrszos",
          borderStartEndRadius: "xea3l6g",
          borderEndEndRadius: "x18isctg",
          borderEndStartRadius: "x2q3nzr",
          $$css: !0,
        },
      },
      f = {
        checkboxBorder: {
          height: "x17rw0jw",
          width: "x17z2i9w",
          borderStartStartRadius: "xt8t1vi",
          borderStartEndRadius: "x1xc408v",
          borderEndEndRadius: "x129tdwq",
          borderEndStartRadius: "x15urzxu",
          $$css: !0,
        },
      };
    function g(t) {
      var n = t.appearsOnMedia,
        a = n === void 0 ? !1 : n,
        i = t.children,
        l = t.disabled,
        u = l === void 0 ? !1 : l,
        m = t.id,
        g = t.onChange,
        h = t.onKeyDown,
        y = t.platform,
        C = t.shape,
        b = C === void 0 ? "square" : C,
        v = t.tabIndex,
        S = t.testid,
        R = t.value,
        L = R === void 0 ? !1 : R,
        E = babelHelpers.objectWithoutPropertiesLoose(t, e),
        k = y === "iOS",
        I = d(!1),
        T = I[0],
        D = I[1];
      function x(e) {
        var t = e.key === "Enter" || e.key === " ";
        (t && (e.preventDefault(), g == null || g(null)), h == null || h(e));
      }
      var $ = L === !0 || L === "indeterminate",
        P = L === "indeterminate",
        N = $ || P === !0,
        M = [],
        w = [N ? p.mediaCheckboxSelected : p.mediaCheckboxUnselected],
        A = [p.checkboxBorderCircle];
      return (
        T &&
          (A.push(
            o("WDSHoverStateStyles").WDSComponentHoverStateStyles
              .WDSCheckboxCircle,
          ),
          N
            ? (M.push(
                o("WDSHoverStateStyles").WDSComponentHoverStateStyles
                  .WDSCheckboxSelected,
              ),
              w.push(
                o("WDSHoverStateStyles").WDSComponentHoverStateStyles
                  .WDSCheckboxMediaSelected,
              ))
            : (M.push(
                o("WDSHoverStateStyles").WDSComponentHoverStateStyles
                  .WDSCheckboxUnselected,
              ),
              w.push(
                o("WDSHoverStateStyles").WDSComponentHoverStateStyles
                  .WDSCheckboxMediaUnselected,
              ))),
        c.jsx(
          "div",
          babelHelpers.extends(
            {},
            (s || (s = r("stylex"))).props(
              o("WDSFocusStateStyles").WDSComponentFocusStateStyles.WDSCheckbox,
            ),
            {
              children: c.jsx(
                r("BaseCheckbox.react"),
                babelHelpers.extends({}, E, {
                  checked: $,
                  disabled: u,
                  id: m,
                  onClick: g,
                  onKeyDown: x,
                  onMouseEnter: function () {
                    return D(!0);
                  },
                  onMouseLeave: function () {
                    return D(!1);
                  },
                  suppressFocusRing: !0,
                  testid: void 0,
                  xstyle: p.root,
                  tabIndex: v,
                  children: c.jsxs(r("BaseView.react"), {
                    "aria-hidden": !0,
                    tabIndex: -1,
                    testid: void 0,
                    xstyle: [
                      p.checkboxBorder,
                      k ? f.checkboxBorder : _.checkboxBorder,
                      N ? p.checkboxBorderSelected : p.checkboxBorderUnselected,
                      u && p.disabledCheckbox,
                      T &&
                        o("WDSHoverStateStyles").WDSComponentHoverStateStyles
                          .WDSCheckboxBase,
                    ].concat(a ? w : M, b === "circle" || k ? A : []),
                    children: [
                      P === !0
                        ? c.jsx(
                            "div",
                            babelHelpers.extends(
                              {},
                              {
                                0: {
                                  className:
                                    "x36qwtl x1fsd2vl xt8t1vi x1xc408v x129tdwq x15urzxu xep993w x1hc1fzr x1oyg3g3 xa3vuyk x10e4vud x1shwlz2",
                                },
                                1: {
                                  className:
                                    "x36qwtl x1fsd2vl xt8t1vi x1xc408v x129tdwq x15urzxu x1hc1fzr x1oyg3g3 xa3vuyk x10e4vud x1shwlz2 x1e6sl3u",
                                },
                              }[!!a << 0],
                            ),
                          )
                        : c.jsx(r("WDSIconIcCheck.react"), {
                            width: 18,
                            height: 18,
                            xstyle: p.checkmarkWrapper,
                            colorName: a
                              ? "persistentAlwaysBlack"
                              : "contentOnAccent",
                            iconXstyle: [
                              $ ? p.checkedCheckmark : p.uncheckedCheckmark,
                            ],
                          }),
                      i,
                    ],
                  }),
                }),
              ),
            },
          ),
        )
      );
    }
    ((g.displayName = g.name + " [from " + i.id + "]"), (l.default = g));
  },
  98,
);
