__d(
  "BDTouchPresenceSignalCollector",
  ["BDTouchOrMouseSignalCollectorBase"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 36e5,
      s = (function (t) {
        function n() {
          return (
            t.call(this, c.signalType, ["touchstart", "touchcancel"], e) || this
          );
        }
        return (babelHelpers.inheritsLoose(n, t), n);
      })(r("BDTouchOrMouseSignalCollectorBase")),
      u = null,
      c = {
        signalType: 30107,
        get: function () {
          return (u == null && (u = new s()), u);
        },
      },
      d = c;
    l.default = d;
  },
  98,
);
