__d(
  "createCometStore",
  [
    "CometRelayConfig.experimental",
    "CometRelayHeapPressureGC",
    "RelayFBGCScheduler",
    "RelayFBOperationLoader",
    "cr:18930",
    "cr:2928",
    "relayFBGetDataID",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = new (n("cr:2928").RecordSource)(),
        a = new (n("cr:18930") != null ? n("cr:18930") : n("cr:2928").Store)(
          t,
          {
            gcReleaseBufferSize: r("CometRelayConfig.experimental")
              .gc_release_buffer_size,
            gcScheduler: r("RelayFBGCScheduler"),
            getDataID: r("relayFBGetDataID"),
            log: e,
            operationLoader: r("RelayFBOperationLoader"),
            shouldScheduleGCAfterPublish_EXPERIMENTAL: o(
              "CometRelayHeapPressureGC",
            ).createShouldScheduleHeapPressureGC(),
          },
        );
      return a;
    }
    l.default = e;
  },
  98,
);
