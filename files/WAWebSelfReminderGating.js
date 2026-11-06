__d(
  "WAWebSelfReminderGating",
  ["WAWebABProps", "WAWebEnvironment", "gkx"],
  function (t, n, r, o, a, i, l) {
    function e() {
      return s(
        o("WAWebABProps").getABPropConfigValue(
          "web_employee_slash_commands_enabled",
        ) === !0,
      );
    }
    function s(e) {
      return r("gkx")("9092")
        ? (function (t) {
            if (t === "intern") return r("gkx")("28886") || e;
            if (t === "dev") return e;
            if (t === "prod") return !1;
            throw Error(
              "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                t,
            );
          })(r("WAWebEnvironment").getEnvironment())
        : !1;
    }
    ((l.isSelfReminderEnabled = e), (l.isEmployeeCommandsEnabled = s));
  },
  98,
);
