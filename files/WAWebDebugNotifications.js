__d(
  "WAWebDebugNotifications",
  ["WATimeUtils", "WAWebUserPrefsNotifications"],
  function (t, n, r, o, a, i, l) {
    function e() {
      o("WAWebUserPrefsNotifications").setWebNotificationsBBStatus({
        isDismissed: !0,
        lastDismissTime: o("WATimeUtils").unixTime(),
      });
    }
    var s = { expireNotificationButterbar: e };
    l.default = s;
  },
  98,
);
