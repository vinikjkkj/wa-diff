__d(
  "WAWebOrderDetailSelector",
  [
    "WAWebChevronCustomIcons",
    "WAWebChipButton.react",
    "WAWebDropdownItem.react",
    "WAWebL10N",
    "WAWebUimUie.react",
    "WAWebUimUieMenu.react",
    "WDSColorStyles.stylex",
    "WDSFontTokenStyles",
    "WDSPaddings.stylex",
    "react",
    "react-compiler-runtime",
    "stylex",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = s || (s = o("react")),
      c = s.useState,
      d = { paddingTop13: { paddingTop: "x1d0ri9u", $$css: !0 } },
      m = {
        chipButtonRTL: {
          paddingInlineEnd: "xud5lew",
          paddingInlineStart: "x7myx5e",
          $$css: !0,
        },
        option: {
          boxSizing: "x9f619",
          color: "x14ug900",
          cursor: "x1ypdohk",
          fontSize: "x7yx35o",
          height: "x1vqgdyp",
          lineHeight: "xo5v014",
          overflowX: "x6ikm8r",
          overflowY: "x10wlt62",
          paddingInlineEnd: "x1ikfw9c",
          position: "x1n2onr6",
          textOverflow: "xlyipyv",
          whiteSpace: "xuxw1ft",
          $$css: !0,
        },
      };
    function p(t) {
      var n = o("react-compiler-runtime").c(19),
        a = t["aria-label"],
        i = t.defaultIndex,
        l = t.onChange,
        s = t.options,
        p = i === void 0 ? 0 : i,
        f = c(null),
        g = f[0],
        h = f[1],
        y = c(!1),
        C = y[0],
        b = y[1],
        v = c(p),
        S = v[0],
        R = v[1],
        L;
      if (n[0] !== l || n[1] !== s || n[2] !== S) {
        var E;
        (n[4] !== l || n[5] !== S
          ? ((E = function (n, a) {
              var t = n.id,
                i = n.label;
              return u.jsx(
                o("WAWebDropdownItem.react").DropdownItem,
                {
                  testid: "mi-" + t,
                  action: function () {
                    (l(n), R(a));
                  },
                  children: u.jsx(
                    "div",
                    babelHelpers.extends(
                      {},
                      (e || (e = r("stylex"))).props([
                        m.option,
                        o("WDSPaddings.stylex").wdsPaddings.paddingStart24,
                        d.paddingTop13,
                      ]),
                      {
                        role: "button",
                        "aria-label": i,
                        children:
                          a === S
                            ? u.jsx(
                                "span",
                                babelHelpers.extends(
                                  {
                                    "data-testid":
                                      "order-detail-selected-option",
                                  },
                                  (e || (e = r("stylex"))).props(
                                    o("WDSFontTokenStyles").WDSFontTokenStyles
                                      .Body2Emphasized,
                                    o("WDSColorStyles.stylex").WDSColorStyles
                                      .contentDefault,
                                  ),
                                  { children: i },
                                ),
                              )
                            : i,
                      },
                    ),
                  ),
                },
                t,
              );
            }),
            (n[4] = l),
            (n[5] = S),
            (n[6] = E))
          : (E = n[6]),
          (L = s.map(E)),
          (n[0] = l),
          (n[1] = s),
          (n[2] = S),
          (n[3] = L));
      } else L = n[3];
      var k = L,
        I;
      n[7] === Symbol.for("react.memo_cache_sentinel")
        ? ((I = r("WAWebL10N").isRTL() && m.chipButtonRTL), (n[7] = I))
        : (I = n[7]);
      var T = s[S],
        D;
      n[8] === Symbol.for("react.memo_cache_sentinel")
        ? ((D = function () {
            return b(_);
          }),
          (n[8] = D))
        : (D = n[8]);
      var x;
      n[9] !== a || n[10] !== T.value
        ? ((x = u.jsx(r("WAWebChipButton.react"), {
            xstyle: I,
            "aria-label": a,
            PostfixIcon: o("WAWebChevronCustomIcons").ChevronDownCustomIcon,
            label: T.value,
            onClick: D,
          })),
          (n[9] = a),
          (n[10] = T.value),
          (n[11] = x))
        : (x = n[11]);
      var $;
      n[12] !== g || n[13] !== k || n[14] !== C
        ? (($ =
            C &&
            g != null &&
            u.jsx(o("WAWebUimUie.react").UIE, {
              displayName: "ValuePicker",
              escapable: !0,
              popable: !0,
              dismissOnWindowResize: !0,
              requestDismiss: function () {
                return b(!1);
              },
              children: u.jsx(r("WAWebUimUieMenu.react"), {
                contextMenu: { anchor: g, menu: k },
              }),
            })),
          (n[12] = g),
          (n[13] = k),
          (n[14] = C),
          (n[15] = $))
        : ($ = n[15]);
      var P;
      return (
        n[16] !== x || n[17] !== $
          ? ((P = u.jsxs("div", { ref: h, children: [x, $] })),
            (n[16] = x),
            (n[17] = $),
            (n[18] = P))
          : (P = n[18]),
        P
      );
    }
    function _(e) {
      return !e;
    }
    l.default = p;
  },
  98,
);
