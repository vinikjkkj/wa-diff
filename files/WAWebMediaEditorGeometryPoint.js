__d(
  "WAWebMediaEditorGeometryPoint",
  ["lodash"],
  function (t, n, r, o, a, i, l) {
    var e = (function () {
      function e(e) {
        ((this.$1 = Object.freeze(babelHelpers.extends({}, e))),
          Object.freeze(this));
      }
      var t = e.prototype;
      return (
        (t.update = function (n) {
          var t = babelHelpers.extends({}, this.$1);
          return (
            n.x != null && (t.x = n.x),
            n.y != null && (t.y = n.y),
            r("lodash").isEqual(this.$1, t) ? this : new e(t)
          );
        }),
        (t.clone = function () {
          return new e(this.$1);
        }),
        (t.toString = function () {
          return "(" + this.getX() + "x, " + this.getY() + "y)";
        }),
        (t.equals = function (t) {
          return (
            Math.abs(this.getX() - t.getX()) < Number.EPSILON &&
            Math.abs(this.getY() - t.getY()) < Number.EPSILON
          );
        }),
        (t.distance = function (t) {
          return Math.sqrt(
            Math.pow(t.getX() - this.getX(), 2) +
              Math.pow(t.getY() - this.getY(), 2),
          );
        }),
        (t.rotate = function (n, r) {
          var t = (r * Math.PI) / 180,
            o = this.getX() - n.getX(),
            a = this.getY() - n.getY(),
            i = Math.cos(t) * o - Math.sin(t) * a + n.getX(),
            l = Math.sin(t) * o + Math.cos(t) * a + n.getY();
          return new e({
            x: Math.round(i * 100) / 100,
            y: Math.round(l * 100) / 100,
          });
        }),
        (t.getX = function () {
          return this.$1.x;
        }),
        (t.getY = function () {
          return this.$1.y;
        }),
        e
      );
    })();
    l.default = e;
  },
  98,
);
