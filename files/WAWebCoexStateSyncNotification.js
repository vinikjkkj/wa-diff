__d(
  "WAWebCoexStateSyncNotification",
  ["WALogger", "WAWebAECompanionGating", "WAWebBackendApi", "getErrorSafe"],
  function (t, n, r, o, a, i, l) {
    var e;
    function s() {
      try {
        if (!o("WAWebAECompanionGating").isCoexStateSyncEnabled()) return;
        o("WAWebBackendApi").frontendFireAndForget(
          "coexStateSyncNotification",
          {},
        );
      } catch (t) {
        o("WALogger")
          .ERROR(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "handleCoexStateSyncNotification: failed",
              ])),
          )
          .catching(r("getErrorSafe")(t))
          .sendLogs("coex-state-sync-notification-failed");
      }
    }
    l.handleCoexStateSyncNotification = s;
  },
  98,
);
