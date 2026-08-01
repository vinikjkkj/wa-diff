__d(
  "DimensionObject",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      function e(e, t) {
        ((this.width = null),
          (this.height = null),
          (this.width = e),
          (this.height = t));
      }
      var t = e.prototype;
      return (
        (t.toJSON = function () {
          return { w: this.width, h: this.height };
        }),
        (t.isEqual = function (n) {
          return n instanceof e
            ? this.width === n.width && this.height === n.height
            : !1;
        }),
        e
      );
    })();
    i.default = e;
  },
  66,
);
