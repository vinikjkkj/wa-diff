__d(
  "WAWebRemediationOptionDeleteNewsletter.react",
  [
    "fbt",
    "WAWebCommonNewsletterEnums",
    "WAWebDeleteIcon.react",
    "WAWebNewsletterAlertsRowComponent.react",
    "WAWebNewsletterMembershipUtil",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react")),
      c = { secondaryColor: { color: "xhslqc4", $$css: !0 } };
    function d(e) {
      var t = e.enforcementType,
        n = e.newsletterMetadata,
        a = e.onDeleteNewsletter;
      return n == null ||
        !o("WAWebNewsletterMembershipUtil").iAmOwner(n) ||
        t !== o("WAWebCommonNewsletterEnums").EnforcementType.SUSPEND
        ? null
        : u.jsx(r("WAWebNewsletterAlertsRowComponent.react"), {
            icon: u.jsx(o("WAWebDeleteIcon.react").DeleteIcon, {
              height: 24,
              width: 24,
              iconXstyle: c.secondaryColor,
            }),
            onClick: a,
            showBottomBorder: !1,
            showDetailRight: !1,
            subtitle: s._(/*BTDS*/ "Your channel will be permanently deleted."),
            testId: "newsletter-remediation-options-drawer-delete-channel",
            title: s._(/*BTDS*/ "Delete channel"),
          });
    }
    ((d.displayName = d.name + " [from " + i.id + "]"), (l.default = d));
  },
  226,
);
