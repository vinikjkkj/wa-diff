__d(
  "BDNavigatorUserAgentSignalCollector",
  ["BDSignalCollectorBase", "StringSignalValueType"],
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
            var e = new (r("StringSignalValueType"))(
              Date.now(),
              this.getContext(),
              navigator.userAgent,
            );
            return { valueOrError: e };
          }),
          t
        );
      })(r("BDSignalCollectorBase")),
      s = null,
      u = {
        signalType: 30094,
        get: function () {
          return (s == null && (s = new e()), s);
        },
      },
      c = u;
    l.default = c;
  },
  98,
);
