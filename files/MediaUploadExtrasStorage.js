__d(
  "MediaUploadExtrasStorage",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      function e(e) {
        ((this.$2 = new Map()), (this.$1 = e));
      }
      var t = e.prototype;
      return (
        (t.setFromObject = function (t) {
          for (var e of Object.keys(t)) this.set(e, t[e]);
          return this;
        }),
        (t.set = function (t, n) {
          return (this.$2.set(t, n), this);
        }),
        (t.getNumber = function (t) {
          var e = this.getUnsafe(t);
          return e == null || typeof e == "number"
            ? e
            : (this.$1.reportRecoverableError(
                "Requested key " + t + " as number, but it was " + typeof e,
              ),
              null);
        }),
        (t.getString = function (t) {
          var e = this.getUnsafe(t);
          return e == null || typeof e == "string"
            ? e
            : (this.$1.reportRecoverableError(
                "Requested key " + t + " as string, but it was " + typeof e,
              ),
              null);
        }),
        (t.getBoolean = function (t) {
          var e = this.getUnsafe(t);
          return e == null || typeof e == "boolean"
            ? e
            : (this.$1.reportRecoverableError(
                "Requested key " + t + " as boolean, but it was " + typeof e,
              ),
              null);
        }),
        (t.getUnsafe = function (t) {
          return this.$2.get(t);
        }),
        (t.getClassInstance = function (t, n) {
          var e = this.getUnsafe(t);
          return e == null || e instanceof n
            ? e
            : (this.$1.reportRecoverableError(
                "Requested key " +
                  t +
                  " as " +
                  String(n) +
                  ", but it was something else",
              ),
              null);
        }),
        e
      );
    })();
    i.default = e;
  },
  66,
);
