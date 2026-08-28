__d(
  "RelayFBLiveEnvironmentFactory",
  [
    "RelayFBHandlerProvider",
    "RelayFBOperationLoader",
    "RelayModern",
    "cr:1121434",
    "getRelayFBMissingFieldHandlers",
    "liveQueryFetch",
    "liveQueryFetchWithWWWInitial",
    "relay-runtime",
    "relayFBGetDataID",
    "resolveImmediate",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = o("RelayModern").createEnvironmentFactory(function (e) {
      return {
        configName: "RelayFBLiveEnvironment",
        networkConfig: {
          liveQueryFetchFn: r("liveQueryFetch"),
          liveQueryFetchWithWWWInitialFn: r("liveQueryFetchWithWWWInitial"),
        },
        handlerProvider: r("RelayFBHandlerProvider"),
        log: n("cr:1121434") != null ? n("cr:1121434")() : null,
        operationLoader: r("RelayFBOperationLoader"),
        store: new (o("relay-runtime").Store)(
          new (o("relay-runtime").RecordSource)(),
          {
            getDataID: r("relayFBGetDataID"),
            gcReleaseBufferSize: 10,
            gcScheduler: r("resolveImmediate"),
            operationLoader: r("RelayFBOperationLoader"),
          },
        ),
        missingFieldHandlers: r("getRelayFBMissingFieldHandlers")(),
        getDataID: r("relayFBGetDataID"),
        actorID: e,
      };
    });
    l.default = e;
  },
  98,
);
