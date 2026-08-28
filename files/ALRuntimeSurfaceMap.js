__d(
  "ALRuntimeSurfaceMap",
  ["AutoLoggingConsts"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function () {
      function e() {
        this.$1 = new Map();
      }
      var t = e.prototype;
      return (
        (t.get = function (t) {
          return this.$1.get(t);
        }),
        (t.getKeys = function () {
          return Array.from(this.$1.keys());
        }),
        (t.getFromHierarchy = function (t) {
          for (
            var e = t.split(o("AutoLoggingConsts").SURFACE_SEPARATOR),
              n = e.length - 1;
            n >= 0;
            n--
          ) {
            var r = this.get(e[n]);
            if (r != null) return r;
          }
          return null;
        }),
        (t.set = function (t, n) {
          this.$1.set(t, n);
        }),
        (t.delete = function (t) {
          this.$1.delete(t);
        }),
        (t.clear = function () {
          this.$1 = new Map();
        }),
        e
      );
    })();
    l.ALRuntimeSurfaceMap = e;
  },
  98,
);
