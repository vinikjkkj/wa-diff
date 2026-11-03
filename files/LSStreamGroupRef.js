__d(
  "LSStreamGroupRef",
  ["I64", "LSMailboxInitialSyncCursor"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = {
        connectionStatusChangeHandler: null,
        current: null,
        currentStreamGroupId: null,
        publishBuffer: new Map(),
        reconnectHandler: null,
        sharedStreams: new Map(),
        status: "Disconnected",
        subscribers: new Map(),
      };
    function u() {
      return (e || (e = o("I64"))).equal(
        (e || (e = o("I64"))).of_int32(1),
        o("LSMailboxInitialSyncCursor").syncChannel,
      )
        ? "mqtt"
        : s.current == null ||
            s.current.streamGroupLoggingContext.sgTransportId == null
          ? "null"
          : s.current.streamGroupLoggingContext.sgTransportId;
    }
    function c() {
      return s.status;
    }
    ((l.streamGroupRef = s),
      (l.getTransportId = u),
      (l.getTransportStatus = c));
  },
  98,
);
