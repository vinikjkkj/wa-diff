__d(
  "BaseTypeaheadInMemoryMapDataCache",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      function e() {
        this.$1 = new Map();
      }
      var t = e.prototype;
      return (
        (t.clear = function () {
          this.$1.clear();
        }),
        (t.get = function (t) {
          return this.$1.get(t);
        }),
        (t.has = function (t) {
          return this.$1.has(t);
        }),
        (t.remove = function (t) {
          this.$1.delete(t);
        }),
        (t.set = function (t, n) {
          this.$1.set(t, n);
        }),
        (t.values = function () {
          return Array.from(this.$1.values());
        }),
        e
      );
    })();
    i.default = e;
  },
  66,
);
