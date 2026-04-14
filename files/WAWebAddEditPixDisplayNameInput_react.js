__d(
  "WAWebAddEditPixDisplayNameInput.react",
  [
    "fbt",
    "WAWebBrazilPixKeyValidationUtils",
    "WAWebFlex.react",
    "WDSTextField.react",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react")),
      c = e.useState,
      d = {
        row: {
          height: "xdd8jsf",
          paddingTop: "xz9dl7a",
          paddingBottom: "x1l90r2v",
          width: "xh8yej3",
          $$css: !0,
        },
        column: { width: "xh8yej3", $$css: !0 },
      };
    function m(e) {
      var t = e.onValueChange,
        n = e.pixDisplayName,
        a = c(null),
        i = a[0],
        l = a[1],
        m = function (n) {
          t(n);
          var e = p(n);
          l(e);
        };
      return u.jsx(o("WAWebFlex.react").FlexRow, {
        xstyle: d.row,
        align: "start",
        justify: "start",
        children: u.jsx(o("WAWebFlex.react").FlexColumn, {
          xstyle: d.column,
          align: "start",
          justify: "center",
          children: u.jsx("div", {
            className: "xh8yej3",
            "data-testid": void 0,
            children: u.jsx(r("WDSTextField.react"), {
              label: s._(/*BTDS*/ "Full name on account"),
              defaultValue: n,
              onValueChange: m,
              error: i != null,
              errorText: i,
              maxCharacterCount: 25,
            }),
          }),
        }),
      });
    }
    m.displayName = m.name + " [from " + i.id + "]";
    function p(e) {
      var t = o("WAWebBrazilPixKeyValidationUtils").isPixDisplayNameValid(e);
      return t ? null : s._(/*BTDS*/ "Invalid name");
    }
    ((p.displayName = p.name + " [from " + i.id + "]"), (l.default = m));
  },
  226,
);
