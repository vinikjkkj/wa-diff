__d(
  "FDSDialogFooterSingleButtonItem.react",
  [
    "BaseRow.react",
    "BaseRowItem.react",
    "CometColumnItem.react",
    "FDSButton.react",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = { item: { minWidth: "xl9nvqe xwfmwtl", $$css: !0 } };
    function c(e) {
      var t = o("react-compiler-runtime").c(6),
        n = e.expanding,
        a = e.primary,
        i = e.size,
        l = n === void 0 ? !0 : n,
        c = i === void 0 ? "medium" : i,
        d;
      t[0] !== a || t[1] !== c
        ? ((d = s.jsx(
            r("FDSButton.react"),
            babelHelpers.extends({ padding: "wide" }, a, { size: c }),
          )),
          (t[0] = a),
          (t[1] = c),
          (t[2] = d))
        : (d = t[2]);
      var m;
      return (
        t[3] !== l || t[4] !== d
          ? ((m = s.jsx(r("CometColumnItem.react"), {
              paddingVertical: 16,
              children: s.jsx(r("BaseRow.react"), {
                align: "end",
                direction: "backward",
                verticalAlign: "stretch",
                wrap: "forward",
                children: s.jsx(r("BaseRowItem.react"), {
                  expanding: l,
                  xstyle: u.item,
                  children: d,
                }),
              }),
            })),
            (t[3] = l),
            (t[4] = d),
            (t[5] = m))
          : (m = t[5]),
        m
      );
    }
    l.default = c;
  },
  98,
);
