__d(
  "WAWebBizAdManagementDraftActionsCell.react",
  [
    "fbt",
    "WAWebFlex.react",
    "WDSButton.react",
    "WDSIconIcChevronRight.react",
    "WDSIconIcDelete.react",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react")),
      c = { container: { width: "xh8yej3", $$css: !0 } };
    function d(e) {
      var t = e.isRowHovered,
        n = e.onDelete;
      return u.jsxs(o("WAWebFlex.react").FlexRow, {
        align: "center",
        justify: "end",
        xstyle: c.container,
        children: [
          t &&
            n != null &&
            u.jsx(r("WDSButton.react"), {
              Icon: r("WDSIconIcDelete.react"),
              "aria-label": s._(/*BTDS*/ "Delete draft"),
              onPress: function (t) {
                (t.stopPropagation(), n());
              },
              size: "small",
              type: "default",
              variant: "borderless",
            }),
          u.jsx(r("WDSButton.react"), {
            Icon: r("WDSIconIcChevronRight.react"),
            variant: "borderless",
            size: "small",
            type: "default",
            disabled: !0,
          }),
        ],
      });
    }
    ((d.displayName = d.name + " [from " + i.id + "]"), (l.default = d));
  },
  226,
);
