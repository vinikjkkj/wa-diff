__d(
  "MediaUploadMediaTypeHandlerRegistry",
  ["err"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function () {
      function e() {
        this.$1 = new Map();
      }
      var t = e.prototype;
      return (
        (t.register = function (t, n) {
          this.$1.set(t, n);
        }),
        (t.getHandler = function (t) {
          var e = this.$1.get(t);
          if (e == null)
            throw r("err")(
              "No MediaUploadMediaTypeHandler registered for media type: " +
                String(t),
            );
          return e;
        }),
        e
      );
    })();
    l.default = e;
  },
  98,
);
