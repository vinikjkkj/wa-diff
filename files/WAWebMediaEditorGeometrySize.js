__d(
  "WAWebMediaEditorGeometrySize",
  ["lodash"],
  function (t, n, r, o, a, i, l) {
    var e = (function () {
      function e(e) {
        var t = e.height,
          n = e.width;
        if (n < 0)
          throw new RangeError("MediaEditor:Size width cannot be negative");
        if (t < 0)
          throw new RangeError("MediaEditor:Size height cannot be negative");
        ((this.$1 = Object.freeze({ width: n, height: t })),
          Object.freeze(this));
      }
      var t = e.prototype;
      return (
        (t.update = function (n) {
          var t = babelHelpers.extends({}, this.$1);
          return (
            n.width != null && (t.width = n.width),
            n.height != null && (t.height = n.height),
            r("lodash").isEqual(this.$1, t) ? this : new e(t)
          );
        }),
        (t.clone = function () {
          return new e(this.$1);
        }),
        (t.toString = function () {
          return "(" + this.getWidth() + "w, " + this.getHeight() + "h)";
        }),
        (t.equals = function (t) {
          return (
            Math.abs(this.getWidth() - t.getWidth()) < Number.EPSILON &&
            Math.abs(this.getHeight() - t.getHeight()) < Number.EPSILON
          );
        }),
        (t.isEmpty = function () {
          return this.equals(e.empty());
        }),
        (e.empty = function () {
          return new e({ width: 0, height: 0 });
        }),
        (t.getWidth = function () {
          return this.$1.width;
        }),
        (t.getHeight = function () {
          return this.$1.height;
        }),
        (t.getDimension = function () {
          return Math.max(this.getWidth(), this.getHeight());
        }),
        e
      );
    })();
    l.default = e;
  },
  98,
);
