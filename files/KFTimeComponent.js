__d(
  "KFTimeComponent",
  ["KFComponentNames"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function () {
      function e(e, t, n, r) {
        ((this.$1 = e || 0),
          (this.$2 = t || 1),
          (this.$3 = n || 0),
          (this.$4 = r != null ? r : 1),
          (this.$5 = 0));
      }
      var t = e.prototype;
      return (
        (t.isInBounds = function (t) {
          var e = t != null ? t : this.$5;
          return e >= this.$1 && e <= this.$2;
        }),
        (t.update = function (t) {
          return ((this.$5 = t * this.$4), this.$5);
        }),
        (t.getProgress = function () {
          return this.$5;
        }),
        (t.getProgressOffset = function () {
          return this.$3;
        }),
        (t.toString = function () {
          return o("KFComponentNames").TIME;
        }),
        e
      );
    })();
    l.default = e;
  },
  98,
);
