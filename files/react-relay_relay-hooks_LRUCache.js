__d(
  "react-relay/relay-hooks/LRUCache",
  ["invariant"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function () {
      function e(e) {
        ((this.$1 = e), this.$1 > 0 || l(0, 11399), (this.$2 = new Map()));
      }
      var t = e.prototype;
      return (
        (t.set = function (t, n) {
          if ((this.$2.delete(t), this.$2.set(t, n), this.$2.size > this.$1)) {
            var e = this.$2.keys().next();
            e.done || this.$2.delete(e.value);
          }
        }),
        (t.get = function (t) {
          var e = this.$2.get(t);
          return (e != null && (this.$2.delete(t), this.$2.set(t, e)), e);
        }),
        (t.has = function (t) {
          return this.$2.has(t);
        }),
        (t.delete = function (t) {
          this.$2.delete(t);
        }),
        (t.size = function () {
          return this.$2.size;
        }),
        (t.capacity = function () {
          return this.$1 - this.$2.size;
        }),
        (t.clear = function () {
          this.$2.clear();
        }),
        e
      );
    })();
    function s(t) {
      return new e(t);
    }
    a.exports = { create: s };
  },
  null,
);
