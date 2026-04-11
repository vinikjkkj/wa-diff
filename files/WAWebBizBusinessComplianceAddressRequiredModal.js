__d(
  "WAWebBizBusinessComplianceAddressRequiredModal",
  [
    "WAWebComplianceInfo.react",
    "WAWebConfirmPopup.react",
    "WAWebFbtCommon",
    "WAWebModalManager",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = function () {
        o("WAWebModalManager").ModalManager.open(
          s.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
            tsNavigationData: {
              surface: "unknown",
              viewName: "biz-compliance-address",
            },
            okText: r("WAWebFbtCommon")("OK"),
            onOK: function () {
              return o("WAWebModalManager").ModalManager.close();
            },
            children: s.jsx(
              o("WAWebComplianceInfo.react").ComplianceInfoHelpCenterBanner,
              {},
            ),
          }),
        );
      },
      c = u;
    l.default = c;
  },
  98,
);
