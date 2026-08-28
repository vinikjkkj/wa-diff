__d(
  "OverlayConfigLayer",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      function e(e, t) {
        ((this.$1 = e), (this.$2 = t));
      }
      var t = e.prototype;
      return (
        (t.getLayerSource = function () {
          return this.$1;
        }),
        (t.getValue = function (t) {
          return this.$2[t];
        }),
        (t.logExposure = function (t) {}),
        e
      );
    })();
    i.default = e;
  },
  66,
);
