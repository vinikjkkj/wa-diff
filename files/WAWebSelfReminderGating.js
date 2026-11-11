__d(
  "WAWebSelfReminderGating",
  ["WAWebABProps", "WAWebEnvironment", "gkx"],
  function (t, n, r, o, a, i, l) {
    var e = !1,
      s = new Set();
    function u() {
      return c({
        isSlashCommandsPropOn:
          o("WAWebABProps").getABPropConfigValue(
            "web_employee_slash_commands_enabled",
          ) === !0,
        isProdPropOn:
          o("WAWebABProps").getABPropConfigValue(
            "web_employee_commands_prod_enabled",
          ) === !0,
        isExtensionAllowed: e,
      });
    }
    function c(e) {
      var t = e.isExtensionAllowed,
        n = e.isProdPropOn,
        o = e.isSlashCommandsPropOn;
      return r("gkx")("9092")
        ? (function (e) {
            if (e === "intern") return r("gkx")("28886") || o || t;
            if (e === "dev") return o;
            if (e === "prod") return n;
            throw Error(
              "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                e,
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
