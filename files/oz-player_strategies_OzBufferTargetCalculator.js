__d(
  "oz-player/strategies/OzBufferTargetCalculator",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      function e(e, t) {
        ((this.$1 = 0), (this.$2 = e), (this.$3 = t));
      }
      var t = e.prototype;
      return (
        (t.computeBufferTarget = function () {
          var e = this.$1;
          for (var t of this.$2)
            if (t.isActive()) {
              e = t.getBufferTarget();
              break;
            }
          for (var n of this.$3) e = n.adjustBufferTargetInSeconds(e);
          return ((this.$1 = e), e);
        }),
        (t.handleEvent = function (t) {
          for (var e of this.$3) e.handleEvent(t);
        }),
        e
      );
    })();
    i.default = e;
  },
  66,
);
