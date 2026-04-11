__d(
  "WAWebSocketLogoutJob",
  [
    "Promise",
    "WALogger",
    "WAWebBackendApi",
    "WAWebRuntimeEnvironmentUtils",
    "WAWebUserPrefsGeneral",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s;
    function u(e) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          if (o("WAWebRuntimeEnvironmentUtils").isServiceWorker())
            try {
              yield (s || (s = n("Promise"))).all([
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
          o("WAWebBackendApi").frontendFireAndForget("socketLogout", {
            reason: t,
          });
        })),
        c.apply(this, arguments)
      );
    }
    l.socketLogout = u;
  },
  98,
);
