__d(
  "WAWebOrgBackgroundSyncJob",
  [
    "WAWebABPropsCache",
    "WAWebBackendApi",
    "WAWebCallsOnlyGating",
    "WAWebOrgGatingUtils",
  ],
  function (t, n, r, o, a, i, l) {
    async function e() {
      (await o("WAWebABPropsCache").waitForABPropConfigsReady(),
        !o("WAWebCallsOnlyGating").isCallsOnlyModeEnabled() &&
          o("WAWebOrgGatingUtils").isOrgsEnabled() &&
          o("WAWebBackendApi").frontendFireAndForget("syncOrgsInBackground", {
            bypassCooldown: !1,
            forceDirectory: !1,
          }));
    }
    l.runOrgBackgroundSync = e;
  },
  98,
);
