__d(
  "WAWebSocketLogoutJob",
  [
    "WALogger",
    "WAWebBackendApi",
    "WAWebRuntimeEnvironmentUtils",
    "WAWebUserPrefsGeneral",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    async function s(t) {
      if (o("WAWebRuntimeEnvironmentUtils").isServiceWorker())
        try {
          await Promise.all([
            o("WAWebUserPrefsGeneral").setOfflinePushDisabled(!0),
            o("WAWebUserPrefsGeneral").setLogoutReason({ reason: t }),
          ]);
        } catch (t) {
          o("WALogger")
            .ERROR(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "Socket logout failed, err: ",
                  "",
                ])),
              t,
            )
            .sendLogs("sw-socket-logout-failed");
          return;
        }
      o("WAWebBackendApi").frontendFireAndForget("socketLogout", { reason: t });
    }
    l.socketLogout = s;
  },
  98,
);
