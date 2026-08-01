__d(
  "BDTouchOrMouseSignalCollectorBase",
  [
    "BDBiometricSignalCollectorBase",
    "BDLoggingConstants",
    "BDOperationLogHelper",
    "BooleanSignalValueType",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = "BDTouchOrMouseSignalCollectorBase",
      s = (function (t) {
        function n(e, n, r) {
          var o;
          return (
            (o = t.call(this, e) || this),
            (o.eventsToSubscribe = []),
            (o.pauseTimeout = 36e5),
            (o.eventsToSubscribe = n),
            (o.pauseTimeout = r),
            (o.handler = function (e) {
              return o.collectSignals(e);
            }),
            o
          );
        }
        babelHelpers.inheritsLoose(n, t);
        var a = n.prototype;
        return (
          (a.listenForSignals = function () {
            (this.collectSignals(), this.addListeners());
          }),
          (a.addListeners = function () {
            var t = this;
            this.eventsToSubscribe.forEach(function (n) {
              try {
                document.addEventListener(n, t.handler);
              } catch (t) {
                var a = r("getErrorSafe")(t);
                o("BDOperationLogHelper").logError(
                  e,
                  o("BDLoggingConstants").OPERATIONS.BD_EXCEPTION,
                  { error: a.message },
                );
              }
            });
          }),
          (a.pauseListeners = function () {
            var e = this;
            (this.eventsToSubscribe.forEach(function (t) {
              document.removeEventListener(t, e.handler);
            }),
              window.setTimeout(function () {
                return e.addListeners();
              }, this.pauseTimeout));
          }),
          (a.collectSignals = function (t) {
            var e = t != null;
            e && this.pauseListeners();
            var n = new (r("BooleanSignalValueType"))(
                Date.now(),
                this.getContext(),
                e,
              ),
              a = { signalId: this.signalType, data: { valueOrError: n } };
            window.dispatchEvent(
              new CustomEvent(
                o("BDBiometricSignalCollectorBase")
                  .BIOMETRIC_SIGNAL_COLLECTED_EVENT_NAME,
                { detail: a },
              ),
            );
          }),
          n
        );
      })(o("BDBiometricSignalCollectorBase").BDBiometricSignalCollectorBase);
    l.default = s;
  },
  98,
);
