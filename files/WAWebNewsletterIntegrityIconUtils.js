__d(
  "WAWebNewsletterIntegrityIconUtils",
  ["WDSIconIcDescriptionFilled.react", "WDSIconIcSchedule.react", "react"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = { secondaryColor: { color: "xhslqc4", $$css: !0 } };
    function c(e) {
      var t = { width: 24, height: 24, iconXstyle: u.secondaryColor };
      return e === "PENDING"
        ? s.jsx(r("WDSIconIcSchedule.react"), babelHelpers.extends({}, t))
        : s.jsx(
            r("WDSIconIcDescriptionFilled.react"),
            babelHelpers.extends({}, t),
          );
    }
    ((c.displayName = c.name + " [from " + i.id + "]"),
      (l.getBadgeIconForOutcomeListBasedOnAppealState = c));
  },
  98,
);
