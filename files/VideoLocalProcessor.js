__d(
  "VideoLocalProcessor",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      function e(e, t) {
        ((this.$1 = e), (this.$2 = t));
      }
      var t = e.prototype;
      return (
        (t.run = function (t) {
          return this.$1.run(t);
        }),
        (t.getMetadataSummary = function (t) {
          return t.metadata;
        }),
        (t.applyValidationConfig = function (t) {
          this.$2.applyServerConfig(t);
        }),
        e
      );
    })();
    i.default = e;
  },
  66,
);
