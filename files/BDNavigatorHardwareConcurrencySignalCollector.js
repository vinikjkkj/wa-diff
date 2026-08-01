__d(
  "BDNavigatorHardwareConcurrencySignalCollector",
  ["BDSignalCollectorBase", "NumberSignalValueType"],
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
            var e,
              t = new (r("NumberSignalValueType"))(
                Date.now(),
                this.getContext(),
                (e = navigator.hardwareConcurrency) != null ? e : 0,
              );
            return { valueOrError: t };
          }),
          t
        );
      })(r("BDSignalCollectorBase")),
      s = null,
      u = {
        signalType: 30018,
        get: function () {
          return (s == null && (s = new e()), s);
        },
      },
      c = u;
    l.default = c;
  },
  98,
);
