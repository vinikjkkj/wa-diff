__d(
  "WAWebApiPendingDeviceSync",
  [
    "WALogger",
    "WAWebBizBroadcastDeviceRemovalCleanup",
    "WAWebSchemaPendingDeviceSync",
    "WAWebSyncDeviceAdvDeviceListJob",
    "WAWebWidFactory",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    async function s() {
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
      } catch (t) {
        o("WALogger")
          .ERROR(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "doPendingDeviceSync failed during RESUME_WITH_OPEN_TAB",
              ])),
          )
          .verbose();
      }
    }
    function u(e) {
      return o("WAWebSchemaPendingDeviceSync")
        .getTable()
        .bulkCreateOrMerge(
          e.map(function (e) {
            return { id: e };
          }),
        );
    }
    ((l.doPendingDeviceSync = s), (l.addUserToPendingDeviceSync = u));
  },
  98,
);
