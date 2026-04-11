__d(
  "WAWebNewsletterIntegrityIconUtils",
  ["WAWebBusinessHoursIcon.react", "WAWebSettingsDocumentIcon.react", "react"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = { secondaryColor: { color: "xhslqc4", $$css: !0 } };
    function c(e) {
      var t = { width: 24, height: 24, iconXstyle: u.secondaryColor },
        n =
          e === "PENDING"
            ? o("WAWebBusinessHoursIcon.react").BusinessHoursIcon
            : o("WAWebSettingsDocumentIcon.react").SettingsDocumentIcon;
      return s.jsx(n, babelHelpers.extends({}, t));
    }
    ((c.displayName = c.name + " [from " + i.id + "]"),
      (l.getBadgeIconForOutcomeListBasedOnAppealState = c));
  },
  98,
);
