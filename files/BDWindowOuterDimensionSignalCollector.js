__d(
  "BDWindowOuterDimensionSignalCollector",
  ["BDSignalCollectorBase", "CustomObjectSignalValueType", "DimensionObject"],
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
            var e = window.innerHeight,
              t = window.innerWidth,
              n = new (r("CustomObjectSignalValueType"))(
                Date.now(),
                this.getContext(),
                new (r("DimensionObject"))(t, e),
              );
            return { valueOrError: n };
          }),
          t
        );
      })(r("BDSignalCollectorBase")),
      s = null,
      u = {
        signalType: 30005,
        get: function () {
          return (s == null && (s = new e()), s);
        },
      },
      c = u;
    l.default = c;
  },
  98,
);
