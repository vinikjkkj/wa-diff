__d(
  "BDMimeTypeCountSignalCollector",
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
            var e = navigator.mimeTypes ? navigator.mimeTypes.length : -1,
              t = new (r("NumberSignalValueType"))(
                Date.now(),
                this.getContext(),
                e,
              );
            return { valueOrError: t };
          }),
          t
        );
      })(r("BDSignalCollectorBase")),
      s = null,
      u = {
        signalType: 30002,
        get: function () {
          return (s == null && (s = new e()), s);
        },
      },
      c = u;
    l.default = c;
  },
  98,
);
