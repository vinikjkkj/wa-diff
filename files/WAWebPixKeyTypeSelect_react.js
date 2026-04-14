__d(
  "WAWebPixKeyTypeSelect.react",
  [
    "fbt",
    "WAWebBizPaymentsBrazilAddPixModal.react",
    "WAWebDropdown.react",
    "WAWebDropdownItem.react",
    "WAWebFlex.react",
    "WAWebUimUie.react",
    "WAWebUimUieMenu.react",
    "WAWebUserPrefsTypes",
    "WDSIconIcArrowDropDown.react",
    "WDSTextField.react",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react")),
      c = e,
      d = c.useRef,
      m = c.useState,
      p = {
        row: {
          height: "xdd8jsf",
          paddingBottom: "x1l90r2v",
          width: "xh8yej3",
          $$css: !0,
        },
        column: { width: "xh8yej3", $$css: !0 },
      };
    function _(e) {
      var t = e.onSelectChange,
        n = e.pixKeyType,
        a = d(null),
        i = m(null),
        l = i[0],
        c = i[1],
        _ = function () {
          c({
            menu: Array.from(
              o("WAWebUserPrefsTypes").PixKeyType.members(),
              function (e) {
                return u.jsx(
                  o("WAWebDropdownItem.react").DropdownItem,
                  {
                    action: function () {
                      (t(e), c(null));
                    },
                    testid: void 0,
                    children: o(
                      "WAWebBizPaymentsBrazilAddPixModal.react",
                    ).getPixKeyType(e),
                  },
                  String(e),
                );
              },
            ),
            anchor: a.current,
            type: o("WAWebDropdown.react").MenuType.DropdownMenuPopup,
          });
        },
        f = function () {
          c(null);
        },
        g = function (t) {
          (l == null ? _() : f(), t == null || t.currentTarget.blur());
        };
      return u.jsx(o("WAWebFlex.react").FlexRow, {
        xstyle: p.row,
        align: "start",
        justify: "start",
        children: u.jsx(o("WAWebFlex.react").FlexColumn, {
          xstyle: p.column,
          align: "start",
          justify: "center",
          children: u.jsxs("div", {
            className: "xh8yej3",
            ref: a,
            "data-testid": void 0,
            children: [
              u.jsx(r("WDSTextField.react"), {
                label: s._(/*BTDS*/ "Type"),
                defaultValue: o(
                  "WAWebBizPaymentsBrazilAddPixModal.react",
                ).getPixKeyType(n),
                EndIcon: r("WDSIconIcArrowDropDown.react"),
                onEndIconClick: g,
                value: o("WAWebBizPaymentsBrazilAddPixModal.react")
                  .getPixKeyType(n)
                  .toString(),
                onFocus: g,
              }),
              l &&
                u.jsx(o("WAWebUimUie.react").UIE, {
                  displayName: l.toString(),
                  escapable: !0,
                  popable: !0,
                  requestDismiss: f,
                  dismissOnWindowResize: !0,
                  children: u.jsx(r("WAWebUimUieMenu.react"), {
                    contextMenu: l,
                  }),
                }),
            ],
          }),
        }),
      });
    }
    ((_.displayName = _.name + " [from " + i.id + "]"), (l.default = _));
  },
  226,
);
