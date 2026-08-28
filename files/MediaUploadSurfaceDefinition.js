__d(
  "MediaUploadSurfaceDefinition",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      function e(e) {
        ((this.$1 = e), (this.$2 = new Map()), (this.$3 = new Map()));
      }
      var t = e.prototype;
      return (
        (t.$4 = function (t, n) {
          var e = this;
          return function () {
            var r = e.$3.get(t.key);
            return (
              r == null && ((r = e.$1.client(t, n)), e.$3.set(t.key, r)),
              r
            );
          };
        }),
        (t.registerClientConfiguration = function (t) {
          var e = this;
          return (
            t.entryPoints.forEach(function (n) {
              e.$2.set(n.key, e.$4(n, t));
            }),
            this
          );
        }),
        (t.createSurface = function () {
          return this.$1.surface(this.$2);
        }),
        e
      );
    })();
    i.default = e;
  },
  66,
);
