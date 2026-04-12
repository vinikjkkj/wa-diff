__d(
  "WAWebNewsletterRemediationOptionChannelGuidelines.react",
  [
    "fbt",
    "WAWebEnforcementActionLogging",
    "WAWebExternalLink.react",
    "WAWebFaqUrl",
    "WAWebNewsletterAlertsRowComponent.react",
    "WDSIconWdsIcChannels.react",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react")),
      c = { secondaryColor: { color: "xhslqc4", $$css: !0 } };
    function d() {
      return u.jsx(r("WAWebNewsletterAlertsRowComponent.react"), {
        icon: u.jsx(r("WDSIconWdsIcChannels.react"), {
          height: 24,
          width: 24,
          iconXstyle: c.secondaryColor,
        }),
        onClick: m,
        showBottomBorder: !1,
        showDetailRight: !1,
        subtitle: s._(/*BTDS*/ "Learn more about the rules for Channels."),
        testId: "newsletter-remediation-options-drawer-channel-guidelines",
        title: s._(/*BTDS*/ "See Channel Guidelines"),
      });
    }
    d.displayName = d.name + " [from " + i.id + "]";
    function m() {
      (r("WAWebEnforcementActionLogging").logChannelGuidelinesClick(),
        o("WAWebExternalLink.react").openExternalLink(
          o("WAWebFaqUrl").getNewsletterGuidelinesFaqUrl(),
        ));
    }
    l.default = d;
  },
  226,
);
