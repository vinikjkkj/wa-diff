__d(
  "FDSDialogConfirmationFooter.react",
  [
    "BaseRow.react",
    "BaseRowItem.react",
    "CometColumnItem.react",
    "FDSButton.react",
    "FDSDialogFooterContainer.react",
    "FDSDialogMetaTextItem.react",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = {
        item: { minWidth: "xl9nvqe x17ot9bj", $$css: !0 },
        secondary: { paddingInlineEnd: "xf159sx", $$css: !0 },
      };
    function c(e) {
      var t = o("react-compiler-runtime").c(15),
        n = e.primary,
        a = e.secondary,
        i = e.size,
        l = e.meta,
        c = i === void 0 ? "medium" : i,
        d;
      t[0] !== l
        ? ((d =
            l != null && s.jsx(r("FDSDialogMetaTextItem.react"), { meta: l })),
          (t[0] = l),
          (t[1] = d))
        : (d = t[1]);
      var m;
      t[2] !== n || t[3] !== c
        ? ((m = s.jsx(r("BaseRowItem.react"), {
            xstyle: u.item,
            children: s.jsx(
              r("FDSButton.react"),
              babelHelpers.extends({ padding: "wide", size: c }, n),
            ),
          })),
          (t[2] = n),
          (t[3] = c),
          (t[4] = m))
        : (m = t[4]);
      var p;
      t[5] === Symbol.for("react.memo_cache_sentinel")
        ? ((p = [u.item, u.secondary]), (t[5] = p))
        : (p = t[5]);
      var _;
      t[6] !== a || t[7] !== c
        ? ((_ = s.jsx(r("BaseRowItem.react"), {
            xstyle: p,
            children: s.jsx(
              r("FDSButton.react"),
              babelHelpers.extends(
                { reduceEmphasis: !0, size: c, type: "secondary" },
                a,
              ),
            ),
          })),
          (t[6] = a),
          (t[7] = c),
          (t[8] = _))
        : (_ = t[8]);
      var f;
      t[9] !== m || t[10] !== _
        ? ((f = s.jsx(r("CometColumnItem.react"), {
            paddingVertical: 16,
            children: s.jsxs(r("BaseRow.react"), {
              align: "end",
              direction: "backward",
              verticalAlign: "stretch",
              wrap: "forward",
              children: [m, _],
            }),
          })),
          (t[9] = m),
          (t[10] = _),
          (t[11] = f))
        : (f = t[11]);
      var g;
      return (
        t[12] !== d || t[13] !== f
          ? ((g = s.jsxs(r("FDSDialogFooterContainer.react"), {
              children: [d, f],
            })),
            (t[12] = d),
            (t[13] = f),
            (t[14] = g))
          : (g = t[14]),
        g
      );
    }
    l.default = c;
  },
  98,
);
