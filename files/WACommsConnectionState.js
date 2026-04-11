__d(
  "WACommsConnectionState",
  ["WAGenericStateManager"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function (e) {
        function t() {
          return e.call(this, !1) || this;
        }
        babelHelpers.inheritsLoose(t, e);
        var n = t.prototype;
        return (
          (n.isConnected = function () {
            return this.get();
          }),
          (n.waitForConnection = function () {
            return this.waitForValue(!0);
          }),
          t
        );
      })(o("WAGenericStateManager").WAGenericStateManager),
      s = new e();
    l.WACommsConnectionState = s;
  },
  98,
);
