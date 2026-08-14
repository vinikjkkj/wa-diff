__d(
  "BDWindowChromeSignalCollector",
  ["BDSignalCollectorBase", "BooleanSignalValueType"],
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
            var e = new (r("BooleanSignalValueType"))(
              Date.now(),
              this.getContext(),
              "chrome" in window,
            );
            return { valueOrError: e };
          }),
          t
        );
      })(r("BDSignalCollectorBase")),
      s = null,
      u = {
        signalType: 30006,
        get: function () {
          return (s == null && (s = new e()), s);
        },
      },
      c = u;
    l.default = c;
  },
  98,
);
