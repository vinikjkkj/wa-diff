__d(
  "WAMapWithDefault",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      function e(e, t) {
        ((this.$1 = e),
          t != null ? (this.$2 = new Map(t)) : (this.$2 = new Map()));
      }
      var t = e.prototype;
      return (
        (t.size = function () {
          return this.$2.size;
        }),
        (t.clear = function () {
          this.$2.clear();
        }),
        (t.delete = function (t) {
          return this.$2.delete(t);
        }),
        (t.get = function (t) {
          var e = this.$2.get(t);
          if (e != null) return e;
          var n = this.$1(t);
          return (this.$2.set(t, n), n);
        }),
        (t.keys = function () {
          return this.$2.keys();
        }),
        (t.entries = function () {
          return this.$2.entries();
        }),
        (t.update = function (n, r) {
          var t = new Map(this.$2).set(n, r(this.get(n)));
          return new e(this.$1, t);
        }),
        (t.toMap = function () {
          return new Map(this.$2);
        }),
        e
      );
    })();
    i.MapWithDefault = e;
  },
  66,
);
