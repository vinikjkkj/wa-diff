__d(
  "WAWebBizBusinessComplianceContactErrorModal",
  ["WAWebConfirmPopup.react", "WAWebFbtCommon", "WAWebModalManager", "react"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = function (t) {
        o("WAWebModalManager").ModalManager.open(
          s.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
            tsNavigationData: {
              surface: "unknown",
              viewName: "biz-compliance-contact-error",
            },
            okText: r("WAWebFbtCommon")("OK"),
            onOK: function () {
              return o("WAWebModalManager").ModalManager.close();
            },
            children: t,
          }),
        );
      },
      c = u;
    l.default = c;
  },
  98,
);
