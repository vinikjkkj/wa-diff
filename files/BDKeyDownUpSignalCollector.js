__d(
  "BDKeyDownUpSignalCollector",
  [
    "BDBiometricSignalCollectorBase",
    "CustomObjectSignalValueType",
    "KeyDownUpObject",
    "gkx",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function (e) {
        function t() {
          return e.call(this, u.signalType) || this;
        }
        babelHelpers.inheritsLoose(t, e);
        var n = t.prototype;
        return (
          (n.listenForSignals = function () {
            var e = this;
            r("gkx")("21049") &&
              (document.addEventListener("keydown", function (t) {
                return e.collectSignals(2);
              }),
              document.addEventListener("keyup", function (t) {
                return e.collectSignals(1);
              }));
          }),
          (n.collectSignals = function (t) {
            var e = new (r("CustomObjectSignalValueType"))(
                Date.now(),
                this.getContext(),
                new (r("KeyDownUpObject"))(t, 0),
              ),
              n = { signalId: this.signalType, data: { valueOrError: e } };
            window.dispatchEvent(
              new CustomEvent(
                o("BDBiometricSignalCollectorBase")
                  .BIOMETRIC_SIGNAL_COLLECTED_EVENT_NAME,
                { detail: n },
              ),
            );
          }),
          t
        );
      })(o("BDBiometricSignalCollectorBase").BDBiometricSignalCollectorBase),
      s = null,
      u = {
        signalType: 30100,
        get: function () {
          return (s == null && (s = new e()), s);
        },
      },
      c = u;
    l.default = c;
  },
  98,
);
