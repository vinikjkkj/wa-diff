__d(
  "VideoPlayerSmartPlayerStaticSignalStore",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = { videoDecodeCapabilities: null },
      l = (function () {
        function t() {
          ((this.$1 = new Set()), (this.$2 = e));
        }
        var n = t.prototype;
        return (
          (n.getSnapshot = function () {
            return this.$2;
          }),
          (n.publish = function (t) {
            if (t !== this.$2) {
              this.$2 = t;
              for (var e of this.$1) e();
            }
          }),
          (n.subscribe = function (t) {
            var e = this;
            return (
              this.$1.add(t),
              function () {
                e.$1.delete(t);
              }
            );
          }),
          t
        );
      })(),
      s = new l();
    ((i.VideoPlayerSmartPlayerStaticSignalStore = l),
      (i.videoPlayerSmartPlayerStaticSignalStore = s));
  },
  66,
);
