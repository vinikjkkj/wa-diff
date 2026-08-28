__d(
  "AdsAppAEMv2Utils",
  ["AdsAccountStore", "AdsAppAEMv2LaunchStatusUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      var e = r("AdsAccountStore").getSelectedAccount().getValue();
      return e == null
        ? "not_launched"
        : o("AdsAppAEMv2LaunchStatusUtils").getAppAEMv2MAILaunchStatus(e);
    }
    l.getAppAEMv2MAILaunchStatusForMAIIOS14Check = e;
  },
  98,
);
