__d(
  "WAWebComposeBoxEmployeeExtensionGate",
  ["WAWebSelfReminderGating", "react", "useWAWebABPropConfigValue"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e || (e = o("react"))).useSyncExternalStore;
    function u() {
      var e =
          o("useWAWebABPropConfigValue").useABPropConfigValue(
            "web_employee_slash_commands_enabled",
          ) === !0,
        t = s(
          o("WAWebSelfReminderGating")
            .subscribeToEmployeeCommandExtensionAccess,
          o("WAWebSelfReminderGating").isEmployeeCommandExtensionAllowed,
        );
      return o("WAWebSelfReminderGating").isEmployeeCommandsEnabled({
        isSlashCommandsPropOn: e,
        isExtensionAllowed: t,
      });
    }
    l.useIsEmployeeComposerExtensionAllowed = u;
  },
  98,
);
