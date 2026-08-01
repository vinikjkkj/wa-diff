__d(
  "BDBiometricSignalCollectorBase",
  ["BDSignalCollectorBase", "err"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = "biometric_signal_collected",
      s = (function (e) {
        function t() {
          return e.apply(this, arguments) || this;
        }
        babelHelpers.inheritsLoose(t, e);
        var n = t.prototype;
        return (
          (n.listenForSignals = function () {
            throw r("err")(
              "Child class responsibility to implement listenForSignals",
            );
          }),
          (n.executeSignalCollection = function () {
            throw r("err")(
              "executeAsyncSignalCollection and executeSignalCollection should not be called on biometric signals",
            );
          }),
          t
        );
      })(r("BDSignalCollectorBase"));
    ((l.BIOMETRIC_SIGNAL_COLLECTED_EVENT_NAME = e),
      (l.BDBiometricSignalCollectorBase = s));
  },
  98,
);
