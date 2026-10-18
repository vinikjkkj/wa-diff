__d(
  "WAWebBootstrapOrgsWhenEnabled",
  [
    "WAWebBackendApi",
    "WAWebBackendEventBus",
    "WAWebBackendEventBusTypes",
    "WAWebCallsOnlyGating",
    "WAWebOrgGatingUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e() {
      if (!o("WAWebCallsOnlyGating").isCallsOnlyModeEnabled()) {
        if (o("WAWebOrgGatingUtils").isOrgInfoDisplayEnabled()) {
          o("WAWebBackendApi").frontendFireAndForget("bootstrapOrgs", {});
          return;
        }
        var e = function () {
          o("WAWebOrgGatingUtils").isOrgInfoDisplayEnabled() &&
            (o("WAWebBackendEventBus").BackendEventBus.off(
              o("WAWebBackendEventBusTypes").BackendEvent.ON_AB_PROPS_UPDATE,
              e,
            ),
            o("WAWebBackendApi").frontendFireAndForget("bootstrapOrgs", {}));
        };
        o("WAWebBackendEventBus").BackendEventBus.onAbPropsUpdate(e);
      }
    }
    l.bootstrapOrgsWhenEnabled = e;
  },
  98,
);
