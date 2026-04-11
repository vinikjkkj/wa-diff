__d(
  "WAWebComplianceReportTrigger",
  ["WAWebComplianceReportPopupLoadable", "WAWebModalManager", "react"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react"));
    function u(e) {
      return o("WAWebModalManager").ModalManager.open(
        s.jsx(
          o("WAWebComplianceReportPopupLoadable").ComplianceReportPopupLoadable,
          {
            learnMoreUrl: e.learnMoreUrl,
            bannerText: e.bannerText,
            actionText: e.actionText,
            showViewReport: e.showViewReport,
          },
        ),
      );
    }
    l.WAWebComplianceReportTrigger = u;
  },
  98,
);
