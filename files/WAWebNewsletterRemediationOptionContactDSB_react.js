__d(
  "WAWebNewsletterRemediationOptionContactDSB.react",
  [
    "fbt",
    "WAWebNewsletterAlertsRowComponent.react",
    "WAWebNewsletterGatingUtils",
    "WAWebPeopleIcon.react",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react")),
      c = { secondaryColor: { color: "xhslqc4", $$css: !0 } };
    function d(e) {
      var t = e.enforcementSource,
        n = e.onClickDSBFlow;
      return t === "IP_SRT" ||
        !o("WAWebNewsletterGatingUtils").isDSAEUOnlyNoticeEnabled()
        ? null
        : u.jsx(r("WAWebNewsletterAlertsRowComponent.react"), {
            icon: u.jsx(o("WAWebPeopleIcon.react").PeopleIcon, {
              height: 24,
              width: 24,
              iconXstyle: c.secondaryColor,
            }),
            onClick: n,
            showBottomBorder: !1,
            showDetailRight: !1,
            subtitle: s._(/*BTDS*/ "Get a reference number to file a dispute."),
            testId: "newsletter-remediation-options-drawer-dsb-flow",
            title: s._(/*BTDS*/ "Refer to Dispute Settlement Body"),
          });
    }
    ((d.displayName = d.name + " [from " + i.id + "]"), (l.default = d));
  },
  226,
);
