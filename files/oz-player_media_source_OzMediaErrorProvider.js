__d(
  "oz-player/media_source/OzMediaErrorProvider",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      function e(e) {
        this.$1 = e;
      }
      var t = e.prototype;
      return (
        (t.hasError = function () {
          return this.$1.error !== null;
        }),
        (t.getMediaErrorName = function () {
          var e = this.$1.error;
          return e != null && e.message != null && e.message !== ""
            ? this.$2(e.message)
            : null;
        }),
        (t.getErrorCode = function () {
          var e = this.$1.error;
          return e && e.code ? e.code : null;
        }),
        (t.getVideoNode = function () {
          return this.$1;
        }),
        (t.$2 = function (t) {
          return t.replace(/([0-9]{2,})/g, function (e) {
            for (var t = ""; t.length < e.length; ) t += "#";
            return t;
          });
        }),
        e
      );
    })();
    i.default = e;
  },
  66,
);
