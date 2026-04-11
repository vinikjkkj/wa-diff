__d(
  "DoubleKeyMap",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      function e() {
        this.$1 = new Map();
      }
      var t = e.prototype;
      return (
        (t.set = function (t, n, r) {
          var e = this.$1.get(t);
          (e || this.$1.set(t, (e = new Map())), e.set(n, r));
        }),
        (t.get = function (t, n) {
          var e;
          return (e = this.$1.get(t)) == null ? void 0 : e.get(n);
        }),
        (t.delete = function (t, n) {
          var e = this.$1.get(t);
          e && (e.delete(n), e.size === 0 && this.$1.delete(t));
        }),
        (t.getAll = function (t) {
          return this.$1.get(t);
        }),
        (t.deleteAll = function (t) {
          this.$1.delete(t);
        }),
        e
      );
    })();
    i.DoubleKeyMap = e;
  },
  66,
);
