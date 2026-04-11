__d(
  "WAWebDeviceSwitchAction",
  [
    "WAWebDeviceSwitchingPopup.react",
    "WAWebModalManager",
    "WAWebNotificationBackend",
    "WAWebUserPrefsMeUser",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = o("WAWebUserPrefsMeUser").getMeUser(),
        n = { wid: t, otpCode: e };
      (o("WAWebNotificationBackend").showDeviceSwitchNotification(n),
        o("WAWebModalManager").ModalManager.open(
          s.jsx(r("WAWebDeviceSwitchingPopup.react"), { otpCode: e }),
        ));
    }
    l.handleOpenDeviceSwitchCode = u;
  },
  98,
);
