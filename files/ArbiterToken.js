__d(
  "ArbiterToken",
  ["invariant"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = (function () {
      function e(e, t) {
        ((this.unsubscribe = function () {
          for (var e = 0; e < this.$2.length; e++) this.$2[e].remove();
          this.$2.length = 0;
        }),
          (this.$1 = e),
          (this.$2 = t));
      }
      var t = e.prototype;
      return (
        (t.isForArbiterInstance = function (t) {
          return (this.$1 || s(0, 2506), this.$1 === t);
        }),
        e
      );
    })();
    l.default = e;
  },
  98,
);
