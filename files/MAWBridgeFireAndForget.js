__d(
  "MAWBridgeFireAndForget",
  [
    "MAWBridge",
    "MAWBridgeLoggingUtils",
    "MAWTimedBridge",
    "MAWWaitForBackendSetup",
    "MAWWorkerEvent",
    "Promise",
    "justknobx",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = r("justknobx")._("1143");
    function u(t, r, a, i) {
      return o("MAWWaitForBackendSetup").runAfterBackendSetup(function () {
        var l = o("MAWBridgeLoggingUtils").getBridgeEventInstanceKey(r);
        (i !== !0 && o("MAWBridgeLoggingUtils").routeStart(t, r),
          o("MAWTimedBridge").bridgeTimeout(
            function () {
              return new (e || (e = n("Promise")))(function (e) {
                o("MAWBridge")
                  .getBridge()
                  .fireAndForget(
                    t,
                    r,
                    a,
                    i,
                    {
                      onAck: function (a) {
                        (i !== !0 &&
                          (o("MAWWorkerEvent").logAck(r, a),
                          o("MAWBridgeLoggingUtils").routeSuccess(t, r)),
                          e());
                      },
                    },
                    { bridgeQPLInstanceKey: l },
                  );
              });
            },
            t,
            r,
            s,
          ));
      }, r);
    }
    l.fireAndForget = u;
  },
  98,
);
