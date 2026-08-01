__d(
  "BDLanguagesSignalCollector",
  ["BDSignalCollectorBase", "CustomObjectSignalValueType", "StringArrayObject"],
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
            var e = [].concat(navigator.languages),
              t = new (r("CustomObjectSignalValueType"))(
                Date.now(),
                this.getContext(),
                new (r("StringArrayObject"))(e),
              );
            return { valueOrError: t };
          }),
          t
        );
      })(r("BDSignalCollectorBase")),
      s = null,
      u = {
        signalType: 30003,
        get: function () {
          return (s == null && (s = new e()), s);
        },
      },
      c = u;
    l.default = c;
  },
  98,
);
