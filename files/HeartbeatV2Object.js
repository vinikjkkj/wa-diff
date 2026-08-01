__d(
  "HeartbeatV2Object",
  ["HeartbeatObject"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function (e) {
      function t(t) {
        var n;
        return ((n = e.call(this) || this), (n.id = ""), (n.id = t), n);
      }
      babelHelpers.inheritsLoose(t, e);
      var n = t.prototype;
      return (
        (n.toJSON = function () {
          return { f: this.isAppForeground, id: this.id };
        }),
        t
      );
    })(r("HeartbeatObject"));
    l.default = e;
  },
  98,
);
