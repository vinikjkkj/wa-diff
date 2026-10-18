__d(
  "WAWebOrgBackgroundSyncJob",
  [
    "WAWebABPropsCache",
    "WAWebBackendApi",
    "WAWebCallsOnlyGating",
    "WAWebOrgGatingUtils",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    function e() {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          (yield o("WAWebABPropsCache").waitForABPropConfigsReady(),
            !o("WAWebCallsOnlyGating").isCallsOnlyModeEnabled() &&
              o("WAWebOrgGatingUtils").isOrgInfoDisplayEnabled() &&
              o("WAWebBackendApi").frontendFireAndForget(
                "syncOrgsInBackground",
                { bypassCooldown: !1, forceDirectory: !1 },
              ));
        })),
        s.apply(this, arguments)
      );
    }
    l.runOrgBackgroundSync = e;
  },
  98,
);
