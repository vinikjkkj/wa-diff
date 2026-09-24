__d(
  "WAWebNotificationPermission",
  ["WAWebEnvironment", "WAWebNotificationConstants"],
  function (t, n, r, o, a, i, l) {
    function e() {
      var e;
      return (
        r("WAWebEnvironment").isWindows ||
        ((e = window.Notification) == null ? void 0 : e.permission) ===
          o("WAWebNotificationConstants").PERMISSION_ALLOWED
      );
    }
    l.isNotificationPermissionGranted = e;
  },
  98,
);
