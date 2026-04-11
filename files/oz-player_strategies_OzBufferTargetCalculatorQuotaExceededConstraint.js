__d(
  "oz-player/strategies/OzBufferTargetCalculatorQuotaExceededConstraint",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      function e(e) {
        var t = e.config,
          n = e.minimumBufferTargetSec;
        ((this.$2 = 1), (this.$1 = t), (this.$3 = n));
      }
      var t = e.prototype;
      return (
        (t.adjustBufferTargetInSeconds = function (t) {
          var e;
          return Math.max(
            (e = this.$3) != null
              ? e
              : this.$1.getNumber("buffer_target_constraint_minimum_sec"),
            t * this.$2,
          );
        }),
        (t.handleEvent = function (t) {
          var e = this.$2;
          switch (t) {
            case "append_succeeded":
              e = Math.max(
                0,
                Math.min(
                  1,
                  e +
                    this.$1.getNumber(
                      "buffer_target_constraint_append_succeeded_reward",
                    ),
                ),
              );
              break;
            case "append_quota_exceeded":
              e = Math.max(
                0,
                Math.min(
                  1,
                  e -
                    this.$1.getNumber(
                      "buffer_target_constraint_quota_exceeded_penalty",
                    ),
                ),
              );
              break;
            default:
          }
          this.$2 = e;
        }),
        e
      );
    })();
    i.default = e;
  },
  66,
);
