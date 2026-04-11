__d(
  "oz-player/strategies/OzStaleManifestBufferTargetStrategy",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      function e(e, t) {
        ((this.$1 = t), (this.$2 = e));
      }
      var t = e.prototype;
      return (
        (t.isActive = function () {
          return (
            this.$2.getRefreshDate() == null &&
            this.$1.getNumber("stale_mpd_buffer_ahead_target") > 0
          );
        }),
        (t.getBufferTarget = function () {
          return this.$1.getNumber("stale_mpd_buffer_ahead_target");
        }),
        e
      );
    })();
    i.default = e;
  },
  66,
);
