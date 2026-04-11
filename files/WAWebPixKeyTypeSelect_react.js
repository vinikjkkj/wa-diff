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
    "react-compiler-runtime",
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
      var t = o("react-compiler-runtime").c(21),
        n = e.onSelectChange,
        a = e.pixKeyType,
        i = d(null),
        l = m(null),
        c = l[0],
        _ = l[1],
        f;
      t[0] !== n
        ? ((f = function () {
            _({
              menu: Array.from(
                o("WAWebUserPrefsTypes").PixKeyType.members(),
                function (e) {
                  return u.jsx(
                    o("WAWebDropdownItem.react").DropdownItem,
                    {
                      action: function () {
                        (n(e), _(null));
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
              anchor: i.current,
              type: o("WAWebDropdown.react").MenuType.DropdownMenuPopup,
            });
          }),
          (t[0] = n),
          (t[1] = f))
        : (f = t[1]);
      var g = f,
        h;
      t[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((h = function () {
            _(null);
          }),
          (t[2] = h))
        : (h = t[2]);
      var y = h,
        C;
      t[3] !== g || t[4] !== c
        ? ((C = function (t) {
            (c == null ? g() : y(), t == null || t.currentTarget.blur());
          }),
          (t[3] = g),
          (t[4] = c),
          (t[5] = C))
        : (C = t[5]);
      var b = C,
        v;
      t[6] === Symbol.for("react.memo_cache_sentinel")
        ? ((v = { className: "xh8yej3" }), (t[6] = v))
        : (v = t[6]);
      var S;
      t[7] === Symbol.for("react.memo_cache_sentinel")
        ? ((S = s._(/*BTDS*/ "Type")), (t[7] = S))
        : (S = t[7]);
      var R;
      t[8] !== a
        ? ((R = o("WAWebBizPaymentsBrazilAddPixModal.react").getPixKeyType(a)),
          (t[8] = a),
          (t[9] = R))
        : (R = t[9]);
      var L;
      t[10] !== a
        ? ((L = o("WAWebBizPaymentsBrazilAddPixModal.react")
            .getPixKeyType(a)
            .toString()),
          (t[10] = a),
          (t[11] = L))
        : (L = t[11]);
      var E;
      t[12] !== b || t[13] !== R || t[14] !== L
        ? ((E = u.jsx(r("WDSTextField.react"), {
            label: S,
            defaultValue: R,
            EndIcon: r("WDSIconIcArrowDropDown.react"),
            onEndIconClick: b,
            value: L,
            onFocus: b,
          })),
          (t[12] = b),
          (t[13] = R),
          (t[14] = L),
          (t[15] = E))
        : (E = t[15]);
      var k;
      t[16] !== c
        ? ((k =
            c &&
            u.jsx(o("WAWebUimUie.react").UIE, {
              displayName: c.toString(),
              escapable: !0,
              popable: !0,
              requestDismiss: y,
              dismissOnWindowResize: !0,
              children: u.jsx(r("WAWebUimUieMenu.react"), { contextMenu: c }),
            })),
          (t[16] = c),
          (t[17] = k))
        : (k = t[17]);
      var I;
      return (
        t[18] !== E || t[19] !== k
          ? ((I = u.jsx(o("WAWebFlex.react").FlexRow, {
              xstyle: p.row,
              align: "start",
              justify: "start",
              children: u.jsx(o("WAWebFlex.react").FlexColumn, {
                xstyle: p.column,
                align: "start",
                justify: "center",
                children: u.jsxs(
                  "div",
                  babelHelpers.extends({}, v, {
                    ref: i,
                    "data-testid": void 0,
                    children: [E, k],
                  }),
                ),
              }),
            })),
            (t[18] = E),
            (t[19] = k),
            (t[20] = I))
          : (I = t[20]),
        I
      );
    }
    l.default = _;
  },
  226,
);
