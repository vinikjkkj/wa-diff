__d(
  "LRUCapacityCache",
  ["first"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function () {
      function e(e) {
        ((this.$1 = new Map()), (this.$2 = e));
      }
      var t = e.prototype;
      return (
        (t.get = function (t) {
          var e = this.$1.get(t);
          if (e !== void 0) return (this.$1.delete(t), this.$1.set(t, e), e);
        }),
        (t.set = function (t, n) {
          var e = void 0;
          if (this.$2 <= this.$1.size) {
            var o = r("first")(this.$1.keys());
            if (o == null) return;
            ((e = o), this.$1.delete(e));
          }
          return (this.$1.delete(t), this.$1.set(t, n), e);
        }),
        (t.delete = function (t) {
          return this.$1.delete(t);
        }),
        (t.has = function (t) {
          return this.$1.has(t);
        }),
        (t.entries = function () {
          return this.$1.entries();
        }),
        e
      );
    })();
    l.default = e;
  },
  98,
);
