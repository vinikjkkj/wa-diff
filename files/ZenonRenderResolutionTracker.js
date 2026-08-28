__d(
  "ZenonRenderResolutionTracker",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      function e() {
        this.$2 = {};
      }
      var t = e.prototype;
      return (
        (t.setRenderResolutionListener = function (t) {
          this.$1 = t;
        }),
        (t.getRenderResolutionMap = function () {
          return this.$2;
        }),
        (t.setRenderResolutionMap = function (t) {
          ((this.$2 = t), this.$1 && this.$1.onRenderResolutionChange(t));
        }),
        e
      );
    })();
    i.default = e;
  },
  66,
);
