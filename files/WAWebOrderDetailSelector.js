__d(
  "WAWebOrderDetailSelector",
  [
    "WAWebChevronCustomIcons",
    "WAWebChipButton.react",
    "WAWebDropdownItem.react",
    "WAWebL10N",
    "WAWebText_DONOTUSE.react",
    "WAWebUimUie.react",
    "WAWebUimUieMenu.react",
    "WDSPaddings.stylex",
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
      p = { paddingTop13: { paddingTop: "x1d0ri9u", $$css: !0 } },
      _ = {
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
    function f(t) {
      var n = t["aria-label"],
        a = t.defaultIndex,
        i = a === void 0 ? 0 : a,
        l = t.onChange,
        s = t.options,
        c = d(null),
        f = m(!1),
        g = f[0],
        h = f[1],
        y = m(i),
        C = y[0],
        b = y[1],
        v = s.map(function (t, n) {
          var a = t.id,
            i = t.label;
          return u.jsx(
            o("WAWebDropdownItem.react").DropdownItem,
            {
              testid: "mi-" + a,
              action: function () {
                (l(t), b(n));
              },
              children: u.jsx(
                "div",
                babelHelpers.extends(
                  {},
                  (e || (e = r("stylex"))).props([
                    _.option,
                    o("WDSPaddings.stylex").wdsPaddings.paddingStart24,
                    p.paddingTop13,
                  ]),
                  {
                    role: "button",
                    "aria-label": i,
                    children:
                      n === C
                        ? u.jsx(o("WAWebText_DONOTUSE.react").TextSpan, {
                            weight: "bold",
                            children: i,
                          })
                        : i,
                  },
                ),
              ),
            },
            a,
          );
        });
      return u.jsxs("div", {
        ref: c,
        children: [
          u.jsx(r("WAWebChipButton.react"), {
            xstyle: r("WAWebL10N").isRTL() && _.chipButtonRTL,
            "aria-label": n,
            PostfixIcon: o("WAWebChevronCustomIcons").ChevronDownCustomIcon,
            label: s[C].value,
            onClick: function () {
              return h(function (e) {
                return !e;
              });
            },
          }),
          g &&
            c.current &&
            u.jsx(o("WAWebUimUie.react").UIE, {
              displayName: "ValuePicker",
              escapable: !0,
              popable: !0,
              dismissOnWindowResize: !0,
              requestDismiss: function () {
                return h(!1);
              },
              children: u.jsx(r("WAWebUimUieMenu.react"), {
                contextMenu: { anchor: c.current, menu: v },
              }),
            }),
        ],
      });
    }
    ((f.displayName = f.name + " [from " + i.id + "]"), (l.default = f));
  },
  98,
);
