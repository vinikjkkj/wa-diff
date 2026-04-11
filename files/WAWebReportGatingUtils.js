__d(
  "WAWebReportGatingUtils",
  [
    "WAWebABProps",
    "WAWebChatGetters",
    "WAWebMsgGetters",
    "WAWebNewsletterGatingUtils",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      return o("WAWebABProps").getABPropConfigValue(
        "private_osa_reporting_enabled",
      );
    }
    function s() {
      return o("WAWebABProps").getABPropConfigValue(
        "private_messaging_uk_osa_enabled",
      );
    }
    function u(t, n) {
      var r = !1;
      return (
        t != null
          ? (r = o("WAWebChatGetters").getIsNewsletter(t))
          : n != null && (r = o("WAWebMsgGetters").getIsNewsletterMsg(n)),
        r === !0
          ? o("WAWebNewsletterGatingUtils").isNewsletterAusOSAReportingEnabled()
          : e()
      );
    }
    ((l.isAusOSAReportingEnabled = e),
      (l.isUKOSAReportingEnabled = s),
      (l.isPostReportingAusOSAModalEnabled = u));
  },
  98,
);
