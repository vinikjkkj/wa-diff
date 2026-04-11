__d(
  "WAWebBizCoexStatusGatingUtils",
  ["WAWebBizCoexGatingUtils", "WAWebUserPrefsMultiDevice"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      return (
        o("WAWebBizCoexGatingUtils").bizHostedDevicesEnabled() &&
        o("WAWebUserPrefsMultiDevice").getHaveProcessedCoexAdv()
      );
    }
    l.smbHostedstatusReplyPrivacyDisclaimerEnabled = e;
  },
  98,
);
