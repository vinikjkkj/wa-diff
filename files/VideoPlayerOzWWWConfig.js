__d(
  "VideoPlayerOzWWWConfig",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = "oz_www_",
      l = (function () {
        function t(e) {
          this.$1 = e;
        }
        var n = t.prototype;
        return (
          (n.getBool = function (n, r) {
            return this.$1.getBool(e + n, r);
          }),
          (n.getNumber = function (n, r) {
            return this.$1.getNumber(e + n, r);
          }),
          (n.getString = function (n, r) {
            return this.$1.getString(e + n, r);
          }),
          (n.setContext = function (t, n) {
            this.$1.setContext(t, n);
          }),
          (n.getAllContexts = function () {
            return this.$1.getAllContexts();
          }),
          t
        );
      })();
    i.default = l;
  },
  66,
);
