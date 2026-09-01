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
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s;
    function u(e) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
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
            d(a),
            r()
          );
        })),
        c.apply(this, arguments)
      );
    }
    function d(e) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          try {
            var t = e.groupsDirtyGroup.map(function (e) {
              return e.jid;
            });
            yield o("WAWebRestOperations").runRestOperation(
              o("WAWebScheduledOperations").ScheduledOperation
                .QUERY_AND_UPDATE_GROUPS_METADATA_BY_JIDS,
              function () {
                return p(t);
              },
              function () {
                return f(t);
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
        })),
        m.apply(this, arguments)
      );
    }
    function p(e) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          (yield o(
            "WAWebEventsWaitForOfflineDeliveryEnd",
          ).waitForOfflineDeliveryEnd(),
            yield o("WAComms").waitForConnection(),
            yield o(
              "WAWebQueryAndUpdateGroupsMetadataByJidsJob",
            ).queryAndUpdateDirtyGroupsMetadata(e));
        })),
        _.apply(this, arguments)
      );
    }
    function f(e) {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield o("WAWebPersistedJobManagerWorkerCompatible")
            .getJobManager()
            .accessors.maybeCreateJob(
              o(
                "WAWebPersistedJobDefinitions",
              ).jobSerializers.queryAndUpdateGroupsMetadataByJids(e),
            );
          return (
            yield o(
              "WAWebEventsWaitForOfflineDeliveryEnd",
            ).waitForOfflineDeliveryEnd(),
            yield o("WAComms").waitForConnection(),
            o("WAWebPersistedJobManagerWorkerCompatible")
              .getJobManager()
              .loadAndRunJobFromId(t.id)
          );
        })),
        g.apply(this, arguments)
      );
    }
    l.handleGroupsDirtyNotificationJob = u;
  },
  98,
);
