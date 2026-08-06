__d(
  "WALRUMap",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      function e(e) {
        var t = e.max;
        ((this.$1 = new Map()), (this.$2 = t));
      }
      var t = e.prototype;
      return (
        (t.has = function (t) {
          return this.$1.has(t);
        }),
        (t.get = function (t) {
          return this.$1.get(t);
        }),
        (t.set = function (t, n) {
          if ((this.$1.delete(t), this.$1.set(t, n), this.$1.size > this.$2)) {
            var e = this.$1.keys().next().value;
            e != null && this.$1.delete(e);
          }
        }),
        (t.delete = function (t) {
          this.$1.delete(t);
        }),
        (t.clear = function () {
          this.$1.clear();
        }),
        (t.size = function () {
          return this.$1.size;
        }),
        e
      );
    })();
    i.LRUMap = e;
  },
  66,
);
