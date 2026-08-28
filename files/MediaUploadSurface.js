__d(
  "MediaUploadSurface",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      function e(e, t) {
        ((this.$1 = t), (this.sdk = e));
      }
      var t = e.prototype;
      return (
        (t.isClientSupported = function (t) {
          var e = this.$1.get(t.key);
          return e != null;
        }),
        (t.getClient = function (t) {
          var e = this.$1.get(t.key);
          if (e == null)
            throw this.sdk.createThrowableError(
              "Client configuration was not provided for the entry point " +
                t.key,
            );
          return e();
        }),
        e
      );
    })();
    i.default = e;
  },
  66,
);
