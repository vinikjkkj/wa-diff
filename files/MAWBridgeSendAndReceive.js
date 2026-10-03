__d(
  "MAWBridgeSendAndReceive",
  [
    "MAWBridge",
    "MAWBridgeLoggingUtils",
    "MAWTimedBridge",
    "MAWWorkerEvent",
    "MWInteractionTracing",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n, a) {
      var i = o("MAWBridgeLoggingUtils").getBridgeEventInstanceKey(t),
        l = (a == null ? void 0 : a.isLoggingDisabled) !== !0;
      return r("MWInteractionTracing").trace(
        l ? (a == null ? void 0 : a.mwTraceId) : void 0,
        "mawBridge.sendAndReceive",
        { annotations: { backend: e, eventKey: i, route: t } },
        function () {
          return o("MAWTimedBridge").bridgeTimeout(
            function () {
              return (
                l && o("MAWBridgeLoggingUtils").routeStart(e, t),
                o("MAWBridge")
                  .getBridge()
                  .sendAndReceive(
                    e,
                    t,
                    n,
                    a == null ? void 0 : a.isLoggingDisabled,
                    {
                      onAck: function (n) {
                        l && o("MAWWorkerEvent").logAck(t, n);
                      },
                    },
                    { bridgeQPLInstanceKey: i },
                    a == null ? void 0 : a.transferList,
                  )
                  .then(function (n) {
                    return (
                      l && o("MAWBridgeLoggingUtils").routeSuccess(e, t),
                      n
                    );
                  })
                  .catch(function (n) {
                    throw (l && o("MAWBridgeLoggingUtils").routeFail(e, t), n);
                  })
              );
            },
            e,
            t,
            a == null ? void 0 : a.timeoutMs,
          );
        },
      );
    }
    l.sendAndReceive = e;
  },
  98,
);
