__d(
  "MAWEBEnabledStateManager",
  ["WAGenericStateManager"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function (e) {
      function t() {
        return e.call(this, null) || this;
      }
      babelHelpers.inheritsLoose(t, e);
      var n = t.prototype;
      return (
        (n.isEnabled = function () {
          return this.get() === !0;
        }),
        (n.waitForEBEnabled = function () {
          return this.waitForValue(!0);
        }),
        t
      );
    })(o("WAGenericStateManager").WAGenericStateManager);
    l.MAWEBEnabledStateManager = e;
  },
  98,
);
