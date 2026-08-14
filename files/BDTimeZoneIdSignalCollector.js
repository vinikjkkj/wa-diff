__d(
  "BDTimeZoneIdSignalCollector",
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
            var e = Intl.DateTimeFormat().resolvedOptions().timeZone,
              t;
            return (
              typeof e == "string" && e !== ""
                ? (t = new (r("StringSignalValueType"))(
                    Date.now(),
                    this.getContext(),
                    e,
                  ))
                : (t = new (r("ErrorSignalValueType"))(
                    Date.now(),
                    this.getContext(),
                    new (o("SignalErrorValueTypeDef").SignalErrorValueTypeDef)(
                      3,
                      "Intl.DateTimeFormat().resolvedOptions().timeZone unavailable",
                    ),
                  )),
              { valueOrError: t }
            );
          }),
          t
        );
      })(r("BDSignalCollectorBase")),
      s = null,
      u = {
        signalType: 11020,
        get: function () {
          return (s == null && (s = new e()), s);
        },
      },
      c = u;
    l.default = c;
  },
  98,
);
