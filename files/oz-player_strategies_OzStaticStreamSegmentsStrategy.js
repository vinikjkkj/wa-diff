__d(
  "oz-player/strategies/OzStaticStreamSegmentsStrategy",
  ["oz-player/strategies/getSegmentsCount"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function () {
      function e(e) {
        this.$1 = e;
      }
      var t = e.prototype;
      return (
        (t.isActive = function () {
          return !0;
        }),
        (t.getSegmentsCount = function (t, n, o) {
          var e = this.$1.getNumber("seconds_to_stream"),
            a = this.$1.getNumber("segments_to_stream");
          return (
            e > 0 &&
              (a = r("oz-player/strategies/getSegmentsCount")(n, o, e, a)),
            a
          );
        }),
        e
      );
    })();
    l.default = e;
  },
  98,
);
