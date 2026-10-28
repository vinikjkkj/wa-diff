__d(
  "WAWebBootstrapOrgsWhenEnabled",
  [
    "WALogger",
    "WAWebBackendApi",
    "WAWebBackendEventBus",
    "WAWebBackendEventBusTypes",
    "WAWebCallsOnlyGating",
    "WAWebOrgGatingUtils",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s;
    function u() {
      if (!o("WAWebCallsOnlyGating").isCallsOnlyModeEnabled()) {
        if (o("WAWebOrgGatingUtils").isOrgInfoDisplayEnabled()) {
          (o("WALogger").LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[orgs] bootstrap started",
              ])),
          ),
            o("WAWebBackendApi").frontendFireAndForget("bootstrapOrgs", {}));
          return;
        }
        var t = function () {
          o("WAWebOrgGatingUtils").isOrgInfoDisplayEnabled() &&
            (o("WAWebBackendEventBus").BackendEventBus.off(
              o("WAWebBackendEventBusTypes").BackendEvent.ON_AB_PROPS_UPDATE,
              t,
            ),
            o("WALogger").LOG(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "[orgs] bootstrap started after an AB props update",
                ])),
            ),
            o("WAWebBackendApi").frontendFireAndForget("bootstrapOrgs", {}));
        };
        o("WAWebBackendEventBus").BackendEventBus.onAbPropsUpdate(t);
      }
    }
    l.bootstrapOrgsWhenEnabled = u;
  },
  98,
);
