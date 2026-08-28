__d(
  "ICEDI",
  ["invariant", "immutable"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = (function () {
      function e() {
        this.reset();
      }
      var t = e.prototype;
      return (
        (t.set = function (t, n) {
          (!this.$1.has(t) || s(0, 1455, t), (this.$1 = this.$1.set(t, n)));
        }),
        (t.get = function (t) {
          return (this.$1.has(t) || s(0, 1456, t), this.$1.get(t));
        }),
        (t.getOrNull = function (t) {
          return this.$1.get(t);
        }),
        (t.reset = function () {
          this.$1 = r("immutable").Map({});
        }),
        e
      );
    })();
    l.default = e;
  },
  98,
);
