__d(
  "VideoMediaTypeHandler",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      function e(e, t) {
        ((this.$1 = e), (this.$2 = t));
      }
      var t = e.prototype;
      return (
        (t.parse = function (t) {
          return this.$1.parse(t);
        }),
        (t.retrieveRawMetadata = function (t) {
          return this.$1.retriveRawMetadata(t);
        }),
        (t.validate = function (t, n) {
          return this.$2.validate(t, n);
        }),
        (t.applyServerConfig = function (t) {
          this.$2.configuration = t;
        }),
        e
      );
    })();
    i.default = e;
  },
  66,
);
