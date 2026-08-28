__d(
  "LWICometLogger",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      function e(e) {
        ((this.$2 = new Set([])), (this.$1 = e));
      }
      var t = e.prototype;
      return (
        (t.subscribe = function (t) {
          this.$2.add(t);
        }),
        (t.unsubscribe = function (t) {
          this.$2.delete(t);
        }),
        (t.$4 = function (t) {
          this.$2.forEach(function (e) {
            e(t);
          });
        }),
        (t.log = function (t) {
          ((this.$3 = t), this.$4(t), this.$1(t));
        }),
        (t.getLastLoggedData = function () {
          return this.$3;
        }),
        e
      );
    })();
    i.default = e;
  },
  66,
);
