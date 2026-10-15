__d(
  "WAWebDeviceSwitchAction",
  [
    "WAWebDeviceSwitchingPopupLoadable",
    "WAWebModalManager",
    "WAWebNotificationBackend",
    "WAWebUserPrefsMeUser",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = o("WAWebUserPrefsMeUser").getMeUserOrThrow(),
        n = { wid: t, otpCode: e };
      (o("WAWebNotificationBackend").showDeviceSwitchNotification(n),
        o("WAWebModalManager").ModalManager.open(
          s.jsx(
            o("WAWebDeviceSwitchingPopupLoadable").DeviceSwitchingPopupLoadable,
            { otpCode: e },
          ),
        ));
    }
    l.handleOpenDeviceSwitchCode = u;
  },
  98,
);
