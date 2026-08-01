__d(
  "BDNotificationPermissionSignalCollector",
  [
    "BDSignalCollectorBase",
    "ErrorSignalValueType",
    "SignalErrorValueTypeDef",
    "StringSignalValueType",
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
            return (
              window.Notification
                ? (e = new (r("StringSignalValueType"))(
                    Date.now(),
                    this.getContext(),
                    Notification.permission,
                  ))
                : (e = new (r("ErrorSignalValueType"))(
                    Date.now(),
                    this.getContext(),
                    new (o("SignalErrorValueTypeDef").SignalErrorValueTypeDef)(
                      3,
                      "Notification not supported",
                    ),
                  )),
              { valueOrError: e }
            );
          }),
          t
        );
      })(r("BDSignalCollectorBase")),
      s = null,
      u = {
        signalType: 30007,
        get: function () {
          return (s == null && (s = new e()), s);
        },
      },
      c = u;
    l.default = c;
  },
  98,
);
