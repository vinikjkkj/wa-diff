__d(
  "WAWebPrivateMessageComplianceUtils",
  [
    "fbt",
    "WAWebComplianceUtil",
    "WAWebContactFormsUrl",
    "WAWebReportGatingUtils",
  ],
  function (t, n, r, o, a, i, l, s) {
    function e(e) {
      var t = e.msg,
        n = e.reportId;
      return t != null &&
        n != null &&
        o("WAWebReportGatingUtils").isAusOSAReportingEnabled()
        ? {
            learnMoreUrl: o("WAWebContactFormsUrl").getReportContentAUSFormUrl(
              n,
              o("WAWebComplianceUtil").WA_CF_RES_OSA_ID,
              o("WAWebComplianceUtil").WA_CF_RES_OSA,
            ),
            bannerText: s._(
              /*BTDS*/ "You can send an additional report under the Australian Online Safety Act.",
            ),
            actionText: s._(/*BTDS*/ "Learn more"),
            showViewReport: !1,
          }
        : null;
    }
    l.getPrivateMessageReportComplianceConfig = e;
  },
  226,
);
