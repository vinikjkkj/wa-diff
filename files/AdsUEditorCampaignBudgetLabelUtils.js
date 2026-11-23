__d(
  "AdsUEditorCampaignBudgetLabelUtils",
  [
    "fbt",
    "AdsBudgetPoolBudgetPillContainer.react",
    "AdsBudgetPoolGatingUtils",
    "GeoIcon.react",
    "GeoTooltip.react",
    "meta-brand-i-circle-filled-12",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react"));
    function c(e) {
      return u.jsx(r("GeoTooltip.react"), {
        content: e,
        popoverType: "infoTooltip",
        position: "above",
        children: u.jsx("span", {
          className: "x6s0dn4 x3nfvp2 xdwrcjd x176pe96",
          children: u.jsx(r("GeoIcon.react"), {
            color: "inherit",
            icon: o("meta-brand-i-circle-filled-12")
              .metaBrandICircleInfoCircleFilled12,
          }),
        }),
      });
    }
    c.displayName = c.name + " [from " + i.id + "]";
    function d(e, t, n) {
      return s._(/*BTDS*/ "", [
        s._param("title", e),
        s._param("infoTooltip", t),
        s._param("pills", u.jsx("span", { className: "xdwrcjd", children: n })),
      ]);
    }
    d.displayName = d.name + " [from " + i.id + "]";
    function m(e, t, n) {
      return !o(
        "AdsBudgetPoolGatingUtils",
      ).getIsAccountInBudgetPoolsCreation() || e == null
        ? null
        : u.jsx(r("AdsBudgetPoolBudgetPillContainer.react"), {
            currency: n,
            dailyBudget: t,
            membership: e,
          });
    }
    ((m.displayName = m.name + " [from " + i.id + "]"),
      (l.renderBudgetInfoIcon = c),
      (l.composeBudgetLabelWithPills = d),
      (l.getBudgetPoolPill = m));
  },
  226,
);
