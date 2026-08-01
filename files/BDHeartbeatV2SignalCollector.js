__d(
  "BDHeartbeatV2SignalCollector",
  [
    "BDClientConfig",
    "BDSignalCollectorBase",
    "CustomObjectSignalValueType",
    "HeartbeatV2Object",
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
            var e = new (r("CustomObjectSignalValueType"))(
              Date.now(),
              this.getContext(),
              new (r("HeartbeatV2Object"))(
                r("BDClientConfig").get().getHeartbeatVersion(),
              ),
            );
            return { valueOrError: e };
          }),
          t
        );
      })(r("BDSignalCollectorBase")),
      s = null,
      u = {
        signalType: 38001,
        get: function () {
          return (s == null && (s = new e()), s);
        },
      },
      c = u;
    l.default = c;
  },
  98,
);
