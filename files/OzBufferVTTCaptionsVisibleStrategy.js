__d(
  "OzBufferVTTCaptionsVisibleStrategy",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      function e(e) {
        this.$1 = e;
      }
      var t = e.prototype;
      return (
        (t.isActive = function () {
          return !this.$1();
        }),
        (t.getBufferTarget = function () {
          return 0;
        }),
        e
      );
    })();
    i.default = e;
  },
  66,
);
