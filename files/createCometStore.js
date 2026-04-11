__d(
  "createCometStore",
  [
    "CometRelayConfig.experimental",
    "RelayFBGCScheduler",
    "RelayFBOperationLoader",
    "cr:2928",
    "relayFBGetDataID",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = new (n("cr:2928").RecordSource)(),
        o = new (n("cr:2928").Store)(t, {
          gcReleaseBufferSize: r("CometRelayConfig.experimental")
            .gc_release_buffer_size,
          gcScheduler: r("RelayFBGCScheduler"),
          getDataID: r("relayFBGetDataID"),
          log: e,
          operationLoader: r("RelayFBOperationLoader"),
        });
      return o;
    }
    l.default = e;
  },
  98,
);
