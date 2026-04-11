__d(
  "WAWebContactReporterInformation",
  ["fbt", "WAWebEnforcementActionLogging"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    function e(e) {
      return [
        {
          headerText: s._(/*BTDS*/ "Report number"),
          ctaLabel: s._(/*BTDS*/ "Copy report number"),
          textToCopyLabel: s._(/*BTDS*/ "{reportID}", [
            s._param("reportID", e.reportFbid),
          ]),
          textToCopy: e.reportFbid,
          toastMessage: s._(/*BTDS*/ "Report number copied"),
          testid:
            "newsletter-contact-ip-reporter-flow-step2-copy-report-number",
          onClick: function () {
            return r(
              "WAWebEnforcementActionLogging",
            ).logCopyReportNumberClick();
          },
        },
        {
          headerText: s._(/*BTDS*/ "Reporter name"),
          ctaLabel: s._(/*BTDS*/ "Copy reporter name"),
          textToCopyLabel: s._(/*BTDS*/ "{reportName}", [
            s._param("reportName", e.reporterName),
          ]),
          textToCopy: e.reporterName,
          toastMessage: s._(/*BTDS*/ "Reporter name copied"),
          testid:
            "newsletter-contact-ip-reporter-flow-step2-copy-reporter-name",
          onClick: function () {
            return r(
              "WAWebEnforcementActionLogging",
            ).logCopyReporterNameClick();
          },
        },
        {
          headerText: s._(/*BTDS*/ "Reporter email"),
          ctaLabel: s._(/*BTDS*/ "Copy reporter email"),
          textToCopyLabel: s._(/*BTDS*/ "{reportEmail}", [
            s._param("reportEmail", e.reporterEmail),
          ]),
          textToCopy: e.reporterEmail,
          toastMessage: s._(/*BTDS*/ "Reporter email copied"),
          testid:
            "newsletter-contact-ip-reporter-flow-step2-copy-reporter-email",
          onClick: function () {
            return r(
              "WAWebEnforcementActionLogging",
            ).logCopyReporterEmailClick();
          },
        },
      ];
    }
    l.getReporterDetails = e;
  },
  226,
);
