__d(
  "BDConnectionRTTSignalCollector",
  [
    "BDSignalCollectorBase",
    "ErrorSignalValueType",
    "NumberSignalValueType",
    "SignalErrorValueTypeDef",
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
          (n.executeSignalCollection = function () {
            var e;
            if (
              navigator.connection != null &&
              navigator.connection.rtt != null
            ) {
              var t = navigator.connection.rtt;
              e = new (r("NumberSignalValueType"))(
                Date.now(),
                this.getContext(),
                t,
              );
            } else
              e = new (r("ErrorSignalValueType"))(
                Date.now(),
                this.getContext(),
                new (o("SignalErrorValueTypeDef").SignalErrorValueTypeDef)(
                  3,
                  "navigator.connection.rtt not supported",
                ),
              );
            return { valueOrError: e };
          }),
          t
        );
      })(r("BDSignalCollectorBase")),
      s = null,
      u = {
        signalType: 30004,
        get: function () {
          return (s == null && (s = new e()), s);
        },
      },
      c = u;
    l.default = c;
  },
  98,
);
