__d(
  "WAWebNewsletterRemediationOptionContactReporter.react",
  [
    "fbt",
    "WAWebBusinessEmailIcon.react",
    "WAWebNewsletterAlertsRowComponent.react",
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
        n = e.onClickEmailReporter,
        a;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((a = u.jsx(o("WAWebBusinessEmailIcon.react").BusinessEmailIcon, {
            height: 24,
            width: 24,
            iconXstyle: c.secondaryColor,
          })),
          (t[0] = a))
        : (a = t[0]);
      var i;
      t[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((i = s._(
            /*BTDS*/ "The reporter has agreed to allow contact to directly resolve this dispute.",
          )),
          (t[1] = i))
        : (i = t[1]);
      var l;
      t[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((l = s._(/*BTDS*/ "Email the reporter")), (t[2] = l))
        : (l = t[2]);
      var d;
      return (
        t[3] !== n
          ? ((d = u.jsx(r("WAWebNewsletterAlertsRowComponent.react"), {
              icon: a,
              onClick: n,
              showBottomBorder: !1,
              showDetailRight: !1,
              subtitle: i,
              testId: "newsletter-remediation-options-drawer-contact-reporter",
              title: l,
            })),
            (t[3] = n),
            (t[4] = d))
          : (d = t[4]),
        d
      );
    }
    l.default = d;
  },
  226,
);
