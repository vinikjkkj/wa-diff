__d(
  "createRelayFBLocalEnvironment",
  [
    "RelayFBHandlerProvider",
    "RelayFBOperationLoader",
    "RelayFieldLogger",
    "RelayRuntime",
    "getRelayFBMissingFieldHandlers",
    "relayFBGetDataID",
    "resolveImmediate",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
      execute: function (t) {
        var e = new Error(
          "RelayFBLocalEnvironment: Network requests are not allowed in the local environment, got: " +
            t.name,
        );
        throw (e.stack, e);
      },
    };
    function s(t) {
      var n = t.configName,
        a = t.getDataID,
        i = t.handlerProvider,
        l = t.log,
        s = t.missingFieldHandlers,
        u = t.operationTracker,
        c = t.scheduler,
        d = t.store,
        m = new (o("RelayRuntime").Environment)({
          configName: n != null ? n : "RelayFBLocalEnvironment",
          handlerProvider: i != null ? i : r("RelayFBHandlerProvider"),
          missingFieldHandlers:
            s != null ? s : r("getRelayFBMissingFieldHandlers")(),
          operationLoader: r("RelayFBOperationLoader"),
          scheduler: c,
          store:
            d != null
              ? d
              : new (o("RelayRuntime").Store)(
                  new (o("RelayRuntime").RecordSource)(),
                  {
                    getDataID: r("relayFBGetDataID"),
                    gcReleaseBufferSize: 10,
                    gcScheduler: r("resolveImmediate"),
                    operationLoader: r("RelayFBOperationLoader"),
                  },
                ),
          network: e,
          operationTracker: u,
          log: l,
          getDataID: a != null ? a : r("relayFBGetDataID"),
          options: { isLocal: !0 },
          relayFieldLogger: o("RelayFieldLogger").create(),
        });
      return m;
    }
    l.default = s;
  },
  98,
);
