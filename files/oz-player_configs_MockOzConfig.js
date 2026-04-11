__d(
  "oz-player/configs/MockOzConfig",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      function e(e) {
        (e === void 0 && (e = {}), (this.$1 = e));
      }
      var t = e.prototype;
      return (
        (t.getBool = function (t, n) {
          return typeof this.$1[t] == "boolean" ? this.$1[t] : n;
        }),
        (t.getNumber = function (t, n) {
          return typeof this.$1[t] == "number" ? this.$1[t] : n;
        }),
        (t.getString = function (t, n) {
          return typeof this.$1[t] == "string" ? this.$1[t] : n;
        }),
        e
      );
    })();
    i.default = e;
  },
  66,
);
