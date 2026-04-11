__d(
  "WAWebAddEditPixDisplayNameInput.react",
  [
    "fbt",
    "WAWebBrazilPixKeyValidationUtils",
    "WAWebFlex.react",
    "WDSTextField.react",
    "react",
    "react-compiler-runtime",
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
      var t = o("react-compiler-runtime").c(9),
        n = e.onValueChange,
        a = e.pixDisplayName,
        i = c(null),
        l = i[0],
        m = i[1],
        _;
      t[0] !== n
        ? ((_ = function (t) {
            n(t);
            var e = p(t);
            m(e);
          }),
          (t[0] = n),
          (t[1] = _))
        : (_ = t[1]);
      var f = _,
        g;
      t[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((g = { className: "xh8yej3" }), (t[2] = g))
        : (g = t[2]);
      var h;
      t[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((h = s._(/*BTDS*/ "Full name on account")), (t[3] = h))
        : (h = t[3]);
      var y = l != null,
        C;
      return (
        t[4] !== l || t[5] !== f || t[6] !== a || t[7] !== y
          ? ((C = u.jsx(o("WAWebFlex.react").FlexRow, {
              xstyle: d.row,
              align: "start",
              justify: "start",
              children: u.jsx(o("WAWebFlex.react").FlexColumn, {
                xstyle: d.column,
                align: "start",
                justify: "center",
                children: u.jsx(
                  "div",
                  babelHelpers.extends({}, g, {
                    "data-testid": void 0,
                    children: u.jsx(r("WDSTextField.react"), {
                      label: h,
                      defaultValue: a,
                      onValueChange: f,
                      error: y,
                      errorText: l,
                      maxCharacterCount: 25,
                    }),
                  }),
                ),
              }),
            })),
            (t[4] = l),
            (t[5] = f),
            (t[6] = a),
            (t[7] = y),
            (t[8] = C))
          : (C = t[8]),
        C
      );
    }
    function p(e) {
      var t = o("WAWebBrazilPixKeyValidationUtils").isPixDisplayNameValid(e);
      return t ? null : s._(/*BTDS*/ "Invalid name");
    }
    ((p.displayName = p.name + " [from " + i.id + "]"), (l.default = m));
  },
  226,
);
