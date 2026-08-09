__d(
  "MAWTimedBridge",
  [
    "FBLogger",
    "MAWBridgeLoggingUtils",
    "MAWMaybeWithTimeout",
    "MAWWaitForBackendSetup",
    "MAWWebWorkerSingleton",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 17e4;
    function s(t, n, a, i) {
      return (
        i === void 0 && (i = e),
        o("MAWWaitForBackendSetup")
          .waitForBackendSetup(a)
          .then(function () {
            return o("MAWMaybeWithTimeout").maybeWithTimeout(
              t(),
              i,
              function () {
                return o("MAWWebWorkerSingleton")
                  .getWorkerHealthStatus()
                  .then(function (e) {
                    throw (
                      o("MAWBridgeLoggingUtils").routeTimeoutFail(n, a),
                      r("FBLogger")("wmi").warn(
                        "[Timeout] Bridge route: " +
                          a +
                          ", WorkerHealthStatus: %s",
                        e.tag,
                      ),
                      new u(
                        "Bridge route " +
                          a +
                          " timed out, WorkerHealthStatus: " +
                          e.tag,
                      )
                    );
                  });
              },
              a,
            );
          })
      );
    }
    var u = (function (e) {
      function t(t) {
        var n;
        return (
          (n = e.call(this, t) || this),
          (n.name = "BridgeTimeoutError"),
          (n.message = t),
          n
        );
      }
      return (babelHelpers.inheritsLoose(t, e), t);
    })(babelHelpers.wrapNativeSuper(Error));
    ((l.DEFAULT_MAW_BRIDGE_TIMEOUT_MS = e),
      (l.bridgeTimeout = s),
      (l.MAWBridgeTimeoutError = u));
  },
  98,
);
