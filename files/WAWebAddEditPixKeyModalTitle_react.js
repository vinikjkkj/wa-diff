__d(
  "WAWebAddEditPixKeyModalTitle.react",
  ["fbt", "WAWebFlex.react", "WDSText.react", "react"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react")),
      c = { row: { minHeight: "x1gg8mnh", textAlign: "x2b8uid", $$css: !0 } };
    function d() {
      return u.jsx(o("WAWebFlex.react").FlexRow, {
        xstyle: c.row,
        justify: "center",
        align: "center",
        children: u.jsx(r("WDSText.react"), {
          type: "Headline2",
          colorName: "contentDefault",
          children: s._(
            /*BTDS*/ "Make it easy to get paid by adding your Pix key",
          ),
        }),
      });
    }
    ((d.displayName = d.name + " [from " + i.id + "]"), (l.default = d));
  },
  226,
);
