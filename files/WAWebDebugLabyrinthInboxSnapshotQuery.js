__d(
  "WAWebDebugLabyrinthInboxSnapshotQuery",
  [
    "WAWebDebugLabyrinthInboxSnapshotQuery.graphql",
    "WAWebRelayClient",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s =
        e !== void 0
          ? e
          : (e = n("WAWebDebugLabyrinthInboxSnapshotQuery.graphql"));
    function u(e) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          return o("WAWebRelayClient").fetchQuery(
            s,
            {
              ebDeviceId: e.ebDeviceId,
              locallyAvailableEpochIds: e.locallyAvailableEpochIds,
              messageFirst: e.messageFirst,
              threadFirst: e.threadFirst,
            },
            { environmentType: "whatsapp_web" },
          );
        })),
        c.apply(this, arguments)
      );
    }
    l.fetchLabyrinthInboxSnapshot = u;
  },
  98,
);
