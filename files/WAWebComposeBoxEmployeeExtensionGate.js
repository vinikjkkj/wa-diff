__d(
  "WAWebComposeBoxEmployeeExtensionGate",
  [
    "WAWebSelfReminderGating",
    "react",
    "react-compiler-runtime",
    "useWAWebABPropConfigValue",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e || (e = o("react"))).useSyncExternalStore;
    function u() {
      var e = o("react-compiler-runtime").c(3),
        t =
          o("useWAWebABPropConfigValue").useABPropConfigValue(
            "web_employee_slash_commands_enabled",
          ) === !0,
        n = s(
          o("WAWebSelfReminderGating")
            .subscribeToEmployeeCommandExtensionAccess,
          o("WAWebSelfReminderGating").isEmployeeCommandExtensionAllowed,
        ),
        r;
      return (
        e[0] !== n || e[1] !== t
          ? ((r = o("WAWebSelfReminderGating").isEmployeeCommandsEnabled({
              isSlashCommandsPropOn: t,
              isExtensionAllowed: n,
            })),
            (e[0] = n),
            (e[1] = t),
            (e[2] = r))
          : (r = e[2]),
        r
      );
    }
    l.useIsEmployeeComposerExtensionAllowed = u;
  },
  98,
);
