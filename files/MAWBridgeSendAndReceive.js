__d(
  "MAWBridgeSendAndReceive",
  ["MAWBridge", "MAWBridgeLoggingUtils", "MAWTimedBridge", "MAWWorkerEvent"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n, r) {
      var a = o("MAWBridgeLoggingUtils").getBridgeEventInstanceKey(t),
        i = (r == null ? void 0 : r.isLoggingDisabled) !== !0,
        l = o("MAWTimedBridge").bridgeTimeout(
          function () {
            return (
              i && o("MAWBridgeLoggingUtils").routeStart(e, t),
              o("MAWBridge")
                .getBridge()
                .sendAndReceive(
                  e,
                  t,
                  n,
                  r == null ? void 0 : r.isLoggingDisabled,
                  {
                    onAck: function (n) {
                      i && o("MAWWorkerEvent").logAck(t, n);
                    },
                  },
                  { bridgeQPLInstanceKey: a },
                  r == null ? void 0 : r.transferList,
                )
                .then(function (n) {
                  return (
                    i && o("MAWBridgeLoggingUtils").routeSuccess(e, t),
                    n
                  );
                })
                .catch(function (n) {
                  throw (i && o("MAWBridgeLoggingUtils").routeFail(e, t), n);
                })
            );
          },
          e,
          t,
          r == null ? void 0 : r.timeoutMs,
        );
      return l;
    }
    l.sendAndReceive = e;
  },
  98,
);
