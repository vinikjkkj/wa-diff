__d(
  "oz-player/manifests/OzSegmentOptions",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      function e() {
        ((this.$1 = !1), (this.$2 = null));
      }
      var t = e.prototype;
      return (
        (t.setSegmentNumDecisionTime = function (t) {
          this.$2 = t;
        }),
        (t.getSegmentNumDecisionTime = function () {
          return this.$2;
        }),
        (t.setIsDVLEnabled = function (t) {
          this.$1 = t;
        }),
        (t.isDVLEnabled = function () {
          return this.$1;
        }),
        e
      );
    })();
    i.default = e;
  },
  66,
);
