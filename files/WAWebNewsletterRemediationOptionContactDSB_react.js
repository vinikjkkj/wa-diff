__d(
  "WAWebNewsletterRemediationOptionContactDSB.react",
  [
    "fbt",
    "WAWebNewsletterAlertsRowComponent.react",
    "WAWebNewsletterGatingUtils",
    "WAWebPeopleIcon.react",
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
        n = e.enforcementSource,
        a = e.onClickDSBFlow;
      if (
        n === "IP_SRT" ||
        !o("WAWebNewsletterGatingUtils").isDSAEUOnlyNoticeEnabled()
      )
        return null;
      var i;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((i = u.jsx(o("WAWebPeopleIcon.react").PeopleIcon, {
            height: 24,
            width: 24,
            iconXstyle: c.secondaryColor,
          })),
          (t[0] = i))
        : (i = t[0]);
      var l;
      t[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((l = s._(/*BTDS*/ "Get a reference number to file a dispute.")),
          (t[1] = l))
        : (l = t[1]);
      var d;
      t[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((d = s._(/*BTDS*/ "Refer to Dispute Settlement Body")), (t[2] = d))
        : (d = t[2]);
      var m;
      return (
        t[3] !== a
          ? ((m = u.jsx(r("WAWebNewsletterAlertsRowComponent.react"), {
              icon: i,
              onClick: a,
              showBottomBorder: !1,
              showDetailRight: !1,
              subtitle: l,
              testId: "newsletter-remediation-options-drawer-dsb-flow",
              title: d,
            })),
            (t[3] = a),
            (t[4] = m))
          : (m = t[4]),
        m
      );
    }
    l.default = d;
  },
  226,
);
