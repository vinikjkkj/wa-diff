__d(
  "WAWebVoipVideoStateUtils",
  ["WAWebVoipWaCallEnums"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return e == null
        ? !0
        : e === o("WAWebVoipWaCallEnums").VideoState.Disabled ||
            e === o("WAWebVoipWaCallEnums").VideoState.Error ||
            e === o("WAWebVoipWaCallEnums").VideoState.Stopped ||
            e === o("WAWebVoipWaCallEnums").VideoState.UpgradeCancel ||
            e === o("WAWebVoipWaCallEnums").VideoState.UpgradeCancelByTimeout ||
            e === o("WAWebVoipWaCallEnums").VideoState.UpgradeReject ||
            e === o("WAWebVoipWaCallEnums").VideoState.UpgradeRejectByTimeout;
    }
    l.isVideoStateInactiveForCallMode = e;
  },
  98,
);
