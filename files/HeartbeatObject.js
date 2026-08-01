__d(
  "HeartbeatObject",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      function e() {
        this.isAppForeground = !0;
      }
      var t = e.prototype;
      return (
        (t.toJSON = function () {
          return { f: this.isAppForeground };
        }),
        (t.isEqual = function (t) {
          return !1;
        }),
        e
      );
    })();
    i.default = e;
  },
  66,
);
