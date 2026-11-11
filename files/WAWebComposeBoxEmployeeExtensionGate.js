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
      var e = o("react-compiler-runtime").c(4),
        t =
          o("useWAWebABPropConfigValue").useABPropConfigValue(
            "web_employee_slash_commands_enabled",
          ) === !0,
        n =
          o("useWAWebABPropConfigValue").useABPropConfigValue(
            "web_employee_commands_prod_enabled",
          ) === !0,
        r = s(
          o("WAWebSelfReminderGating")
            .subscribeToEmployeeCommandExtensionAccess,
          o("WAWebSelfReminderGating").isEmployeeCommandExtensionAllowed,
        ),
        a;
      return (
        e[0] !== r || e[1] !== n || e[2] !== t
          ? ((a = o("WAWebSelfReminderGating").isEmployeeCommandsEnabled({
              isSlashCommandsPropOn: t,
              isProdPropOn: n,
              isExtensionAllowed: r,
            })),
            (e[0] = r),
            (e[1] = n),
            (e[2] = t),
            (e[3] = a))
          : (a = e[3]),
        a
      );
    }
    l.useIsEmployeeComposerExtensionAllowed = u;
  },
  98,
);
