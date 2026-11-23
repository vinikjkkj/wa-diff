__d(
  "WAWebHandleGroupsDirtyNotification",
  [
    "WAComms",
    "WALogger",
    "WASmaxGroupsGroupsDirtyNotificationRPC",
    "WAWebEventsWaitForOfflineDeliveryEnd",
    "WAWebPersistedJobDefinitions",
    "WAWebPersistedJobManagerWorkerCompatible",
    "WAWebQueryAndUpdateGroupsMetadataByJidsJob",
    "WAWebRestOperations",
    "WAWebScheduledOperations",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s;
    async function u(t) {
      var n = o(
          "WASmaxGroupsGroupsDirtyNotificationRPC",
        ).receiveGroupsDirtyNotificationRPC(t),
        r = n.makeGroupsDirtyNotificationResponseAck,
        a = n.parsedRequest;
      return (
        o("WALogger").LOG(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "handleGroupsDirtyNotification: rcvd dirty bit notif",
            ])),
        ),
        c(a),
        r()
      );
    }
    async function c(e) {
      try {
        var t = e.groupsDirtyGroup.map(function (e) {
          return e.jid;
        });
        await o("WAWebRestOperations").runRestOperation(
          o("WAWebScheduledOperations").ScheduledOperation
            .QUERY_AND_UPDATE_GROUPS_METADATA_BY_JIDS,
          function () {
            return d(t);
          },
          function () {
            return m(t);
          },
        );
      } catch (e) {
        o("WALogger")
          .ERROR(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "handleGroupsDirtyNotification: failed with ",
                "",
              ])),
            e,
          )
          .sendLogs("handleGroupsDirtyNotificationJob");
      }
    }
    async function d(e) {
      (await o(
        "WAWebEventsWaitForOfflineDeliveryEnd",
      ).waitForOfflineDeliveryEnd(),
        await o("WAComms").waitForConnection(),
        await o(
          "WAWebQueryAndUpdateGroupsMetadataByJidsJob",
        ).queryAndUpdateDirtyGroupsMetadata(e));
    }
    async function m(e) {
      var t = await o("WAWebPersistedJobManagerWorkerCompatible")
        .getJobManager()
        .accessors.maybeCreateJob(
          o(
            "WAWebPersistedJobDefinitions",
          ).jobSerializers.queryAndUpdateGroupsMetadataByJids(e),
        );
      return (
        await o(
          "WAWebEventsWaitForOfflineDeliveryEnd",
        ).waitForOfflineDeliveryEnd(),
        await o("WAComms").waitForConnection(),
        o("WAWebPersistedJobManagerWorkerCompatible")
          .getJobManager()
          .loadAndRunJobFromId(t.id)
      );
    }
    l.handleGroupsDirtyNotificationJob = u;
  },
  98,
);
