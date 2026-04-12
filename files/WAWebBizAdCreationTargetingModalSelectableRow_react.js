__d(
  "WAWebBizAdCreationTargetingModalSelectableRow.react",
  [
    "WAWebFlex.react",
    "WDSButton.react",
    "WDSIconIcEdit.react",
    "WDSText.react",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react"));
    function u(e) {
      return s.jsx(r("WDSIconIcEdit.react"), {
        colorName: "contentDeemphasized",
        height: 20,
        width: 20,
      });
    }
    u.displayName = u.name + " [from " + i.id + "]";
    function c(e) {
      var t = e.ariaLabel,
        n = e.onEditClick,
        a = e.subtitle,
        i = e.title,
        l = e.xstyle;
      return s.jsxs(o("WAWebFlex.react").FlexRow, {
        xstyle: l,
        align: "center",
        justify: "all",
        children: [
          s.jsxs(o("WAWebFlex.react").FlexColumn, {
            children: [
              s.jsx(r("WDSText.react"), {
                type: "Body1Emphasized",
                colorName: "contentDefault",
                children: i,
              }),
              s.jsx(r("WDSText.react"), {
                type: "Body2",
                colorName: "contentDeemphasized",
                children: a,
              }),
            ],
          }),
          s.jsx(r("WDSButton.react"), {
            Icon: u,
            variant: "borderless",
            size: "medium",
            "aria-label": t ? String(t) : void 0,
            onPress: n,
          }),
        ],
      });
    }
    ((c.displayName = c.name + " [from " + i.id + "]"), (l.default = c));
  },
  98,
);
