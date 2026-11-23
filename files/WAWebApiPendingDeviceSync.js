__d(
  "WAWebApiPendingDeviceSync",
  [
    "WALogger",
    "WAWebBizBroadcastDeviceRemovalCleanup",
    "WAWebOffdStorageUtils",
    "WAWebSchemaPendingDeviceSync",
    "WAWebSyncDeviceAdvDeviceListJob",
    "WAWebWidFactory",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s;
    async function u() {
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
        var t = await o("WAWebSchemaPendingDeviceSync").getTable().all();
        (await o("WAWebSyncDeviceAdvDeviceListJob").syncDeviceListJob(
          t.map(function (e) {
            return o("WAWebWidFactory").createWid(e.id);
          }),
          null,
          null,
        ),
          await o("WAWebSchemaPendingDeviceSync")
            .getTable()
            .bulkRemove(
              t.map(function (e) {
                return e.id;
              }),
            ),
          await o(
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
    ((l.doPendingDeviceSync = u), (l.addUserToPendingDeviceSync = c));
  },
  98,
);
