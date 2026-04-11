__d(
  "oz-player/strategies/OzBufferEndLimitStrategy",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      function e(e, t) {
        ((this.$1 = e), (this.$2 = t));
      }
      var t = e.prototype;
      return (
        (t.isActive = function () {
          return !0;
        }),
        (t.getBufferTarget = function () {
          var e = this.$3();
          return this.$2 >= e ? this.$2 - e : 0;
        }),
        (t.$3 = function () {
          return this.$1.buffered.length === 0 ? 0 : this.$1.buffered.end(0);
        }),
        e
      );
    })();
    i.default = e;
  },
  66,
);
