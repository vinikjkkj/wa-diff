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
      var n = t["aria-label"],
        a = t.defaultIndex,
        i = a === void 0 ? 0 : a,
        l = t.onChange,
        s = t.options,
        p = c(null),
        _ = p[0],
        f = p[1],
        g = c(!1),
        h = g[0],
        y = g[1],
        C = c(i),
        b = C[0],
        v = C[1],
        S = s.map(function (t, n) {
          var a = t.id,
            i = t.label;
          return u.jsx(
            o("WAWebDropdownItem.react").DropdownItem,
            {
              testid: "mi-" + a,
              action: function () {
                (l(t), v(n));
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
                      n === b
                        ? u.jsx(
                            "span",
                            babelHelpers.extends(
                              { "data-testid": "order-detail-selected-option" },
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
            a,
          );
        });
      return u.jsxs("div", {
        ref: f,
        children: [
          u.jsx(r("WAWebChipButton.react"), {
            xstyle: r("WAWebL10N").isRTL() && m.chipButtonRTL,
            "aria-label": n,
            PostfixIcon: o("WAWebChevronCustomIcons").ChevronDownCustomIcon,
            label: s[b].value,
            onClick: function () {
              return y(function (e) {
                return !e;
              });
            },
          }),
          h &&
            _ != null &&
            u.jsx(o("WAWebUimUie.react").UIE, {
              displayName: "ValuePicker",
              escapable: !0,
              popable: !0,
              dismissOnWindowResize: !0,
              requestDismiss: function () {
                return y(!1);
              },
              children: u.jsx(r("WAWebUimUieMenu.react"), {
                contextMenu: { anchor: _, menu: S },
              }),
            }),
        ],
      });
    }
    ((p.displayName = p.name + " [from " + i.id + "]"), (l.default = p));
  },
  98,
);
