__d(
  "MAWForwardEBLSEbEnabledStateChangesToMainThread",
  ["MAWBridge", "MAWEBLSInWorkerSwitch"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      (r("MAWEBLSInWorkerSwitch").onSet(function (e) {
        s();
      }),
        s());
    }
    function s() {
      o("MAWBridge")
        .getBridge()
        .fireAndForget("event", "updateEBLSInWokerStateInMainThread", {
          ebEnabled: r("MAWEBLSInWorkerSwitch").isEnabled(),
        });
    }
    ((l.listenForEBLSEbEnabledStateChangesAndSendToMainThread = e),
      (l.sendEBLSEbEnabledStateToMainThread = s));
  },
  98,
);
