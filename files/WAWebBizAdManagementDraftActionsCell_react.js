__d(
  "WAWebBizAdManagementDraftActionsCell.react",
  [
    "fbt",
    "WAWebFlex.react",
    "WDSButton.react",
    "WDSIconIcChevronRight.react",
    "WDSIconIcDelete.react",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react")),
      c = { container: { width: "xh8yej3", $$css: !0 } };
    function d(e) {
      var t = o("react-compiler-runtime").c(6),
        n = e.isRowHovered,
        a = e.onDelete,
        i;
      t[0] !== n || t[1] !== a
        ? ((i =
            n &&
            a != null &&
            u.jsx(r("WDSButton.react"), {
              Icon: r("WDSIconIcDelete.react"),
              "aria-label": s._(/*BTDS*/ "Delete draft"),
              onPress: function (t) {
                (t.stopPropagation(), a());
              },
              size: "small",
              type: "default",
              variant: "borderless",
            })),
          (t[0] = n),
          (t[1] = a),
          (t[2] = i))
        : (i = t[2]);
      var l;
      t[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((l = u.jsx(r("WDSButton.react"), {
            Icon: r("WDSIconIcChevronRight.react"),
            variant: "borderless",
            size: "small",
            type: "default",
            disabled: !0,
          })),
          (t[3] = l))
        : (l = t[3]);
      var d;
      return (
        t[4] !== i
          ? ((d = u.jsxs(o("WAWebFlex.react").FlexRow, {
              align: "center",
              justify: "end",
              xstyle: c.container,
              children: [i, l],
            })),
            (t[4] = i),
            (t[5] = d))
          : (d = t[5]),
        d
      );
    }
    l.default = d;
  },
  226,
);
