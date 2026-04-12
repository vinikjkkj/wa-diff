__d(
  "WAWebLabelColorPanel.react",
  [
    "WAWebDropdown.react",
    "WAWebFlex.react",
    "WAWebL10N",
    "WAWebUISpacing",
    "WAWebUimUie.react",
    "WAWebUimUieMenu.react",
    "react",
    "stylex",
  ],
  function (t, n, r, o, a, i, l) {
    var e = ["anchor", "onClose"],
      s,
      u,
      c = u || (u = o("react")),
      d = {
        btnOutline: {
          boxSizing: "x9f619",
          width: "x1n7h9c3",
          height: "x1s1d1n7",
          borderStartStartRadius: "x1c9tyrk",
          borderStartEndRadius: "xeusxvb",
          borderEndEndRadius: "x1pahc9y",
          borderEndStartRadius: "x1ertn4p",
          $$css: !0,
        },
      };
    function m(e) {
      var t = e.colors,
        n = e.onSelect,
        a = e.selectedIndex,
        i = 0;
      return c.jsx(
        "div",
        babelHelpers.extends(
          { role: "tablist" },
          (s || (s = r("stylex"))).props([
            o("WAWebUISpacing").uiPadding.horiz16,
            o("WAWebUISpacing").uiPadding.vert20,
          ]),
          {
            "data-testid": void 0,
            children: t.map(function (e, t) {
              return c.jsx(
                o("WAWebFlex.react").FlexRow,
                {
                  className: (s || (s = r("stylex")))(
                    o("WAWebUISpacing").uiMargin.top9,
                  ),
                  justify: "center",
                  children: e.map(function (e) {
                    var t = i++,
                      l = a === t;
                    return c.jsx(
                      o("WAWebFlex.react").FlexRow,
                      {
                        justify: "center",
                        align: "center",
                        children: c.jsx(o("WAWebFlex.react").FlexRow, {
                          justify: "center",
                          align: "center",
                          className: (s || (s = r("stylex")))(
                            d.btnOutline,
                            o("WAWebUISpacing").uiMargin.horiz10,
                          ),
                          style: {
                            border: l ? "1.5px solid " + e.hexColor : "",
                          },
                          children: c.jsx("button", {
                            role: "tab",
                            tabIndex: l ? 0 : -1,
                            "aria-selected": l,
                            "data-testid": void 0,
                            className: {
                              0: "x1td3qas x10w6t97 x1c9tyrk xeusxvb x1pahc9y x1ertn4p x13345yd x1kqiigx x1iy4mvq x1nrmj05",
                              2: "x1c9tyrk xeusxvb x1pahc9y x1ertn4p x13345yd x1kqiigx x1iy4mvq x1nrmj05 x1ksvffz xqaafxp",
                              1: "x1td3qas x10w6t97 x1c9tyrk xeusxvb x1pahc9y x1ertn4p x13345yd x1kqiigx x1iy4mvq x1nrmj05 x1ptxcow x47corl",
                              3: "x1c9tyrk xeusxvb x1pahc9y x1ertn4p x13345yd x1kqiigx x1iy4mvq x1nrmj05 x1ksvffz xqaafxp x1ptxcow x47corl",
                            }[(!!l << 1) | (!e.enabled << 0)],
                            style: { backgroundColor: e.hexColor },
                            onClick: e.enabled
                              ? function () {
                                  return n(t);
                                }
                              : null,
                            disabled: !e.enabled,
                          }),
                        }),
                      },
                      t,
                    );
                  }),
                },
                t,
              );
            }),
          },
        ),
      );
    }
    m.displayName = m.name + " [from " + i.id + "]";
    function p(t) {
      var n = t.anchor,
        a = t.onClose,
        i = babelHelpers.objectWithoutPropertiesLoose(t, e),
        l = c.jsx(m, {
          colors: i.colors,
          selectedIndex: i.selectedIndex,
          onSelect: i.onSelect,
        });
      return c.jsx(o("WAWebUimUie.react").UIE, {
        displayName: "LabelColorPicker",
        escapable: !0,
        popable: !0,
        dismissOnWindowResize: !0,
        requestDismiss: a,
        children: c.jsx(r("WAWebUimUieMenu.react"), {
          contextMenu: {
            menu: l,
            type: o("WAWebDropdown.react").MenuType.LabelColorPicker,
            anchor: n,
            offsetX: r("WAWebL10N").isRTL() ? 9 : -9,
            offsetY: 2,
          },
        }),
      });
    }
    ((p.displayName = p.name + " [from " + i.id + "]"),
      (l.LabelColorPicker = m),
      (l.LabelColorPopup = p));
  },
  98,
);
