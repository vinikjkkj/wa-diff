__d(
  "WAWebBizAdCreationTargetingModalLocationItem.react",
  [
    "WAWebBizAdCreationTargetingModalLocationDisplayUtils",
    "WAWebFlex.react",
    "WAWebNoop",
    "WDSBaseCheckbox.react",
    "WDSText.react",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = {
        locationRow: {
          width: "xh8yej3",
          justifyContent: "x1qughib",
          $$css: !0,
        },
        locationText: { flex: "x98rzlu", minWidth: "xeuugli", $$css: !0 },
      };
    function c(e) {
      var t = e.isSelected,
        n = e.location,
        a = e.onToggle,
        i = e.showSubtitle,
        l = i
          ? o(
              "WAWebBizAdCreationTargetingModalLocationDisplayUtils",
            ).buildLocationSubtitle(n)
          : "";
      return s.jsx(
        "div",
        {
          className: "x6s0dn4 x1ypdohk x16ovd2e x12xbjc7 xh8yej3",
          onClick: function () {
            return a(n.key, !t);
          },
          onKeyDown: function (r) {
            (r.key === "Enter" || r.key === " ") &&
              (r.preventDefault(), a(n.key, !t));
          },
          role: "button",
          tabIndex: 0,
          "aria-pressed": t,
          children: s.jsxs(o("WAWebFlex.react").FlexRow, {
            gap: 12,
            align: "center",
            xstyle: u.locationRow,
            children: [
              s.jsxs(o("WAWebFlex.react").FlexColumn, {
                xstyle: u.locationText,
                children: [
                  s.jsx(r("WDSText.react"), {
                    type: "Body1",
                    colorName: "contentDefault",
                    children: n.name,
                  }),
                  l.length > 0 &&
                    s.jsx(r("WDSText.react"), {
                      type: "Body2",
                      colorName: "contentDeemphasized",
                      children: l,
                    }),
                ],
              }),
              s.jsx(r("WDSBaseCheckbox.react"), {
                value: t,
                onChange: r("WAWebNoop"),
                shape: "circle",
              }),
            ],
          }),
        },
        n.key,
      );
    }
    ((c.displayName = c.name + " [from " + i.id + "]"), (l.default = c));
  },
  98,
);
