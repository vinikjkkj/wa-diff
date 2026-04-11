__d(
  "RSTWeakRefList",
  ["WeakRefApiUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = o("WeakRefApiUtils").getNativeWeakRefOrFallback(),
      s = (function () {
        function t() {
          this.$1 = [];
        }
        var n = t.prototype;
        return (
          (n.add = function (n) {
            this.$1.push(new e(n));
          }),
          (n.compact = function () {
            this.$1 = this.$1.filter(function (e) {
              return e.deref() != null;
            });
          }),
          (n.getSize = function () {
            return (this.compact(), this.$1.length);
          }),
          t
        );
      })();
    l.default = s;
  },
  98,
);
