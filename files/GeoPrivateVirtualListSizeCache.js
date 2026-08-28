__d(
  "GeoPrivateVirtualListSizeCache",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      function e(e) {
        var t = e.estimatedSize;
        ((this.$1 = new Map()), (this.$2 = t));
      }
      var t = e.prototype;
      return (
        (t.setSize = function (t, n) {
          this.$1.set(t, n);
        }),
        (t.getSize = function (t) {
          var e = this.$1.get(t);
          return e != null ? e : this.$2;
        }),
        (t.getOffset = function (t) {
          for (var e = 0, n = 0; n < t; n++) e += this.getSize(n);
          return e;
        }),
        (t.getDistance = function (t, n) {
          for (var e = 0, r = t; r < n; r++) e += this.getSize(r);
          return e;
        }),
        (t.getIndex = function (t, n) {
          for (var e = 0, r = 0; r < n; r++)
            if (((e += this.getSize(r)), e > t)) return r;
          return n;
        }),
        e
      );
    })();
    i.default = e;
  },
  66,
);
