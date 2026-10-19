__d(
  "WAWebApiPendingDeviceSync",
  [
    "WALogger",
    "WAWebBizBroadcastDeviceRemovalCleanup",
    "WAWebOffdStorageUtils",
    "WAWebSchemaPendingDeviceSync",
    "WAWebSyncDeviceAdvDeviceListJob",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s;
    function u() {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          if (!o("WAWebOffdStorageUtils").isStorageCreated()) {
            o("WALogger").WARN(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "doPendingDeviceSync skipped: offline storage not created",
                ])),
            );
            return;
          }
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
          } catch (e) {
            o("WALogger")
              .ERROR(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "doPendingDeviceSync failed",
                  ])),
              )
              .catching(r("getErrorSafe")(e))
              .verbose()
              .sendLogs("pending-device-sync-failed");
          }
        })),
        c.apply(this, arguments)
      );
    }
    function d(e) {
      return o("WAWebSchemaPendingDeviceSync")
        .getTable()
        .bulkCreateOrMerge(
          e.map(function (e) {
            return { id: e };
          }),
        );
    }
    ((l.doPendingDeviceSync = u), (l.addUserToPendingDeviceSync = d));
  },
  98,
);
