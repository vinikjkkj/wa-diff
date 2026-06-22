__d(
  "WAWebApiPendingDeviceSync",
  [
    "WALogger",
    "WAWebBizBroadcastDeviceRemovalCleanup",
    "WAWebSchemaPendingDeviceSync",
    "WAWebSyncDeviceAdvDeviceListJob",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s() {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          try {
            var t = yield o("WAWebSchemaPendingDeviceSync").getTable().all();
            (yield o("WAWebSyncDeviceAdvDeviceListJob").syncDeviceListJob(
              t.map(function (e) {
                return o("WAWebWidFactory").createWid(e.id);
              }),
              null,
              null,
            ),
              yield o("WAWebSchemaPendingDeviceSync")
                .getTable()
                .bulkRemove(
                  t.map(function (e) {
                    return e.id;
                  }),
                ),
              yield o(
                "WAWebBizBroadcastDeviceRemovalCleanup",
              ).cleanupCampaignsWithInvalidDevices());
          } catch (t) {
            o("WALogger")
              .ERROR(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "doPendingDeviceSync failed",
                  ])),
              )
              .catching(r("getErrorSafe")(t))
              .verbose()
              .sendLogs("pending-device-sync-failed");
          }
        })),
        u.apply(this, arguments)
      );
    }
    function c(e) {
      return o("WAWebSchemaPendingDeviceSync")
        .getTable()
        .bulkCreateOrMerge(
          e.map(function (e) {
            return { id: e };
          }),
        );
    }
    ((l.doPendingDeviceSync = s), (l.addUserToPendingDeviceSync = c));
  },
  98,
);
