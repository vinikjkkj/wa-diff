__d(
  "WAWebNewsletterRemediationOptionContactReporter.react",
  [
    "fbt",
    "WAWebBusinessEmailIcon.react",
    "WAWebNewsletterAlertsRowComponent.react",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react")),
      c = { secondaryColor: { color: "xhslqc4", $$css: !0 } };
    function d(e) {
      var t = e.onClickEmailReporter;
      return u.jsx(r("WAWebNewsletterAlertsRowComponent.react"), {
        icon: u.jsx(o("WAWebBusinessEmailIcon.react").BusinessEmailIcon, {
          height: 24,
          width: 24,
          iconXstyle: c.secondaryColor,
        }),
        onClick: t,
        showBottomBorder: !1,
        showDetailRight: !1,
        subtitle: s._(
          /*BTDS*/ "The reporter has agreed to allow contact to directly resolve this dispute.",
        ),
        testId: "newsletter-remediation-options-drawer-contact-reporter",
        title: s._(/*BTDS*/ "Email the reporter"),
      });
    }
    ((d.displayName = d.name + " [from " + i.id + "]"), (l.default = d));
  },
  226,
);
