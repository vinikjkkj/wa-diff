__d(
  "LoadObjectLoader",
  ["LoadObjectMap"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = "key",
      s = (function () {
        function t(e, t) {
          ((this.$2 = e), (this.$1 = t || r("LoadObjectMap").create(e)));
        }
        var n = t.prototype;
        return (
          (n.get = function () {
            return this.$1.get(e);
          }),
          (n.set = function (r) {
            var n = this.$1,
              o = this.$1.set(e, r);
            return n === o ? this : new t(this.$2, o);
          }),
          (n.setStale = function () {
            var n = this.$1,
              r = this.$1.setKeyStale(e);
            return n === r ? this : new t(this.$2, r);
          }),
          (n.update = function (t) {
            return this.set(t(this.get()));
          }),
          t
        );
      })();
    l.default = s;
  },
  98,
);
