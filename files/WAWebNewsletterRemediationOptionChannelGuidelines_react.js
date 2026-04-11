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
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react")),
      c = { secondaryColor: { color: "xhslqc4", $$css: !0 } };
    function d() {
      var e = o("react-compiler-runtime").c(3),
        t;
      e[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((t = u.jsx(r("WDSIconWdsIcChannels.react"), {
            height: 24,
            width: 24,
            iconXstyle: c.secondaryColor,
          })),
          (e[0] = t))
        : (t = e[0]);
      var n;
      e[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((n = s._(/*BTDS*/ "Learn more about the rules for Channels.")),
          (e[1] = n))
        : (n = e[1]);
      var a;
      return (
        e[2] === Symbol.for("react.memo_cache_sentinel")
          ? ((a = u.jsx(r("WAWebNewsletterAlertsRowComponent.react"), {
              icon: t,
              onClick: m,
              showBottomBorder: !1,
              showDetailRight: !1,
              subtitle: n,
              testId:
                "newsletter-remediation-options-drawer-channel-guidelines",
              title: s._(/*BTDS*/ "See Channel Guidelines"),
            })),
            (e[2] = a))
          : (a = e[2]),
        a
      );
    }
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
