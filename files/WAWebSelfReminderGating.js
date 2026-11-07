__d(
  "WAWebSelfReminderGating",
  ["WAWebABProps", "WAWebEnvironment", "gkx"],
  function (t, n, r, o, a, i, l) {
    var e = !1,
      s = new Set();
    function u() {
      return c(
        o("WAWebABProps").getABPropConfigValue(
          "web_employee_slash_commands_enabled",
        ) === !0,
        e,
      );
    }
    function c(e, t) {
      return r("gkx")("9092")
        ? (function (n) {
            if (n === "intern") return r("gkx")("28886") || e || t;
            if (n === "dev") return e;
            if (n === "prod") return !1;
            throw Error(
              "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                n,
            );
          })(r("WAWebEnvironment").getEnvironment())
        : !1;
    }
    function d() {
      return e;
    }
    function m(t) {
      t !== e &&
        ((e = t),
        s.forEach(function (e) {
          return e();
        }));
    }
    function p(e) {
      return (
        s.add(e),
        function () {
          s.delete(e);
        }
      );
    }
    ((l.isSelfReminderEnabled = u),
      (l.isEmployeeCommandsEnabled = c),
      (l.isEmployeeCommandExtensionAllowed = d),
      (l.updateEmployeeCommandExtensionAccess = m),
      (l.subscribeToEmployeeCommandExtensionAccess = p));
  },
  98,
);
