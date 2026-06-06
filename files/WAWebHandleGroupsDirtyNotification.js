__d(
  "WAWebHandleGroupsDirtyNotification",
  [
    "WAComms",
    "WALogger",
    "WASmaxGroupsGroupsDirtyNotificationRPC",
    "WAWebEventsWaitForOfflineDeliveryEnd",
    "WAWebPersistedJobDefinitions",
    "WAWebPersistedJobManagerWorkerCompatible",
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
          }),
          n = await d(t);
        await m(n);
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
      var t = await o("WAWebPersistedJobManagerWorkerCompatible")
        .getJobManager()
        .accessors.maybeCreateJob(
          o(
            "WAWebPersistedJobDefinitions",
          ).jobSerializers.queryAndUpdateGroupsMetadataByJids(e),
        );
      return t.id;
    }
    async function m(e) {
      return (
        await o(
          "WAWebEventsWaitForOfflineDeliveryEnd",
        ).waitForOfflineDeliveryEnd(),
        await o("WAComms").waitForConnection(),
        o("WAWebPersistedJobManagerWorkerCompatible")
          .getJobManager()
          .loadAndRunJobFromId(e)
      );
    }
    l.handleGroupsDirtyNotificationJob = u;
  },
  98,
);
