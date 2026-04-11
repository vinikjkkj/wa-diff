__d(
  "oz-player/utils/OzFakeEventTarget",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      function e() {
        this.$1 = {};
      }
      var t = e.prototype;
      return (
        (t.dispatchEvent = function (t) {
          this.$1[t] != null &&
            this.$1[t].forEach(function (e) {
              return e();
            });
        }),
        (t.addEventListener = function (t, n) {
          var e = this;
          return (
            this.$1[t] === void 0 && (this.$1[t] = new Set()),
            this.$1[t].add(n),
            {
              remove: function () {
                e.removeEventListener(t, n);
              },
            }
          );
        }),
        (t.removeEventListener = function (t, n) {
          this.$1[t] && this.$1[t].delete(n);
        }),
        (t.destroy = function () {
          this.$1 = {};
        }),
        e
      );
    })();
    i.default = e;
  },
  66,
);
