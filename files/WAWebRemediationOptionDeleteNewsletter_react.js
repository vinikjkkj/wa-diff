__d(
  "WAWebRemediationOptionDeleteNewsletter.react",
  [
    "fbt",
    "WAWebCommonNewsletterEnums",
    "WAWebDeleteIcon.react",
    "WAWebNewsletterAlertsRowComponent.react",
    "WAWebNewsletterMembershipUtil",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react")),
      c = { secondaryColor: { color: "xhslqc4", $$css: !0 } };
    function d(e) {
      var t = o("react-compiler-runtime").c(5),
        n = e.enforcementType,
        a = e.newsletterMetadata,
        i = e.onDeleteNewsletter;
      if (
        a == null ||
        !o("WAWebNewsletterMembershipUtil").iAmOwner(a) ||
        n !== o("WAWebCommonNewsletterEnums").EnforcementType.SUSPEND
      )
        return null;
      var l;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((l = u.jsx(o("WAWebDeleteIcon.react").DeleteIcon, {
            height: 24,
            width: 24,
            iconXstyle: c.secondaryColor,
          })),
          (t[0] = l))
        : (l = t[0]);
      var d;
      t[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((d = s._(/*BTDS*/ "Your channel will be permanently deleted.")),
          (t[1] = d))
        : (d = t[1]);
      var m;
      t[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((m = s._(/*BTDS*/ "Delete channel")), (t[2] = m))
        : (m = t[2]);
      var p;
      return (
        t[3] !== i
          ? ((p = u.jsx(r("WAWebNewsletterAlertsRowComponent.react"), {
              icon: l,
              onClick: i,
              showBottomBorder: !1,
              showDetailRight: !1,
              subtitle: d,
              testId: "newsletter-remediation-options-drawer-delete-channel",
              title: m,
            })),
            (t[3] = i),
            (t[4] = p))
          : (p = t[4]),
        p
      );
    }
    l.default = d;
  },
  226,
);
