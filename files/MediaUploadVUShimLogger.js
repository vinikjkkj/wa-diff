__d(
  "MediaUploadVUShimLogger",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      function e(e) {
        this.$1 = e;
      }
      var t = e.prototype;
      return (
        (t.logEvent = function (t, n) {}),
        (t.postOnShutdown = function (t) {
          return { remove: function () {} };
        }),
        (t.getWaterfallID = function () {
          return this.$1;
        }),
        e
      );
    })();
    i.default = e;
  },
  66,
);
