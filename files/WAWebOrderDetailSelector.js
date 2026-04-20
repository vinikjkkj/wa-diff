__d(
  "WAWebOrderDetailSelector",
  [
    "WAWebChevronCustomIcons",
    "WAWebChipButton.react",
    "WAWebDropdownItem.react",
    "WAWebL10N",
    "WAWebText_DONOTUSE.react",
    "WAWebUISpacing",
    "WAWebUimUie.react",
    "WAWebUimUieMenu.react",
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
    function _(t) {
      var n = t["aria-label"],
        a = t.defaultIndex,
        i = a === void 0 ? 0 : a,
        l = t.onChange,
        s = t.options,
        c = d(null),
        _ = m(!1),
        f = _[0],
        g = _[1],
        h = m(i),
        y = h[0],
        C = h[1],
        b = s.map(function (t, n) {
          var a = t.id,
            i = t.label;
          return u.jsx(
            o("WAWebDropdownItem.react").DropdownItem,
            {
              testid: "mi-" + a,
              action: function () {
                (l(t), C(n));
              },
              children: u.jsx(
                "div",
                babelHelpers.extends(
                  {},
                  (e || (e = r("stylex"))).props([
                    p.option,
                    o("WAWebUISpacing").uiPadding.start24,
                    o("WAWebUISpacing").uiPadding.top13,
                  ]),
                  {
                    role: "button",
                    "aria-label": i,
                    children:
                      n === y
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
            xstyle: r("WAWebL10N").isRTL() && p.chipButtonRTL,
            "aria-label": n,
            PostfixIcon: o("WAWebChevronCustomIcons").ChevronDownCustomIcon,
            label: s[y].value,
            onClick: function () {
              return g(function (e) {
                return !e;
              });
            },
          }),
          f &&
            c.current &&
            u.jsx(o("WAWebUimUie.react").UIE, {
              displayName: "ValuePicker",
              escapable: !0,
              popable: !0,
              dismissOnWindowResize: !0,
              requestDismiss: function () {
                return g(!1);
              },
              children: u.jsx(r("WAWebUimUieMenu.react"), {
                contextMenu: { anchor: c.current, menu: b },
              }),
            }),
        ],
      });
    }
    ((_.displayName = _.name + " [from " + i.id + "]"), (l.default = _));
  },
  98,
);
