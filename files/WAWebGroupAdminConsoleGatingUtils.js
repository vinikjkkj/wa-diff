__d(
  "WAWebGroupAdminConsoleGatingUtils",
  ["WAWebABProps", "gkx"],
  function (t, n, r, o, a, i, l) {
    function e() {
      return (
        r("gkx")("9092") &&
        o("WAWebABProps").getABPropConfigValue(
          "web_group_admin_console_enabled",
        ) === !0
      );
    }
    l.isGroupAdminConsoleEnabled = e;
  },
  98,
);
