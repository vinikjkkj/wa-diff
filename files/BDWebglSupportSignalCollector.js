__d(
  "BDWebglSupportSignalCollector",
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
            var e = document.createElement("canvas"),
              t = null;
            try {
              t = e.getContext("webgl") || e.getContext("experimental-webgl");
            } catch (e) {}
            var n = !!t,
              o = new (r("BooleanSignalValueType"))(
                Date.now(),
                this.getContext(),
                n,
              );
            return { valueOrError: o };
          }),
          t
        );
      })(r("BDSignalCollectorBase")),
      s = null,
      u = {
        signalType: 30022,
        get: function () {
          return (s == null && (s = new e()), s);
        },
      },
      c = u;
    l.default = c;
  },
  98,
);
