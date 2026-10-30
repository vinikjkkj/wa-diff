__d(
  "WAWebSelfReminderGating",
  ["WAWebABProps", "gkx"],
  function (t, n, r, o, a, i, l) {
    function e() {
      return (
        r("gkx")("9092") &&
        o("WAWebABProps").getABPropConfigValue(
          "web_employee_slash_commands_enabled",
        ) === !0
      );
    }
    l.isSelfReminderEnabled = e;
  },
  98,
);
