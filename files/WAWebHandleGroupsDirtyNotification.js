__d(
  "WAWebHandleGroupsDirtyNotification",
  [
    "WAComms",
    "WALogger",
    "WASmaxGroupsGroupsDirtyNotificationRPC",
    "WAWebEventsWaitForOfflineDeliveryEnd",
    "WAWebPersistedJobDefinitions",
    "WAWebPersistedJobManagerWorkerCompatible",
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
              }),
              n = yield p(t);
            yield f(n);
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
          var t = yield o("WAWebPersistedJobManagerWorkerCompatible")
            .getJobManager()
            .accessors.maybeCreateJob(
              o(
                "WAWebPersistedJobDefinitions",
              ).jobSerializers.queryAndUpdateGroupsMetadataByJids(e),
            );
          return t.id;
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
          return (
            yield o(
              "WAWebEventsWaitForOfflineDeliveryEnd",
            ).waitForOfflineDeliveryEnd(),
            yield o("WAComms").waitForConnection(),
            o("WAWebPersistedJobManagerWorkerCompatible")
              .getJobManager()
              .loadAndRunJobFromId(e)
          );
        })),
        g.apply(this, arguments)
      );
    }
    l.handleGroupsDirtyNotificationJob = u;
  },
  98,
);
