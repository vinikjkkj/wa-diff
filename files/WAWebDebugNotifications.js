__d(
  "WAWebDebugNotifications",
  ["WATimeUtils", "WAWebUserPrefsNotifications", "vulture"],
  function (t, n, r, o, a, i, l) {
    function e() {
      (r("vulture")("cjb8RBCsbxsqKGajnFmzK0tJeWw="),
        o("WAWebUserPrefsNotifications").setWebNotificationsBBStatus({
          isDismissed: !0,
          lastDismissTime: o("WATimeUtils").unixTime(),
        }));
    }
    var s = { expireNotificationButterbar: e };
    l.default = s;
  },
  98,
);
