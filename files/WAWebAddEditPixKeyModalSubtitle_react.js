__d(
  "WAWebAddEditPixKeyModalSubtitle.react",
  [
    "fbt",
    "WAWebFlex.react",
    "WDSText.react",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react")),
      c = { row: { minHeight: "x1ba4aug", textAlign: "x2b8uid", $$css: !0 } };
    function d() {
      var e = o("react-compiler-runtime").c(1),
        t;
      return (
        e[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = u.jsx(o("WAWebFlex.react").FlexRow, {
              xstyle: c.row,
              justify: "center",
              children: u.jsx(r("WDSText.react"), {
                type: "Body2",
                colorName: "contentDeemphasized",
                children: s._(
                  /*BTDS*/ "Customers will see your Pix key and name when they pay with Pix.",
                ),
              }),
            })),
            (e[0] = t))
          : (t = e[0]),
        t
      );
    }
    l.default = d;
  },
  226,
);
