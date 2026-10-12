__d(
  "WAWebVoipWebCodecsEncoderWatchdog",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = 30,
      l = 2,
      s = 3,
      u = 3e3,
      c = (function () {
        function t() {
          ((this.$1 = 0), (this.$2 = null));
        }
        var n = t.prototype;
        return (
          (n.recordFrameSubmitted = function (n, r) {
            this.$1++;
            var t = this.$2;
            t == null && ((t = r), (this.$2 = t));
            var o = Math.max(e, Math.ceil(Math.max(n, 1) * l)),
              a = r - t,
              i = this.$1 >= o,
              c = this.$1 >= s && a >= u;
            return i || c ? this.$1 : null;
          }),
          (n.recordOutput = function () {
            this.reset();
          }),
          (n.reset = function () {
            ((this.$1 = 0), (this.$2 = null));
          }),
          t
        );
      })();
    i.WAWebVoipWebCodecsEncoderWatchdog = c;
  },
  66,
);
