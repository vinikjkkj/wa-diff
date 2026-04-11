__d(
  "WAWebMediaEditorGeometryRect",
  ["WAWebMediaEditorGeometryPoint", "WAWebMediaEditorGeometrySize", "lodash"],
  function (t, n, r, o, a, i, l) {
    var e = 1e-6,
      s = (function () {
        function t(e) {
          ((this.$1 = Object.freeze(babelHelpers.extends({}, e))),
            Object.freeze(this));
        }
        t.create = function (n) {
          return new t({
            origin: new (r("WAWebMediaEditorGeometryPoint"))({
              x: n.x,
              y: n.y,
            }),
            size: new (r("WAWebMediaEditorGeometrySize"))({
              width: n.width,
              height: n.height,
            }),
            rotation: n.rotation,
            scale: n.scale,
          });
        };
        var n = t.prototype;
        return (
          (n.updateXYWidthHeight = function (t) {
            var e = babelHelpers.extends({}, this.$1);
            return (
              (t.x != null || t.y != null) &&
                (e.origin = e.origin.update({ x: t.x, y: t.y })),
              (t.width != null || t.height != null) &&
                (e.size = e.size.update({ width: t.width, height: t.height })),
              t.rotation != null && (e.rotation = t.rotation),
              t.scale != null && (e.scale = t.scale),
              this.update(e)
            );
          }),
          (n.update = function (o) {
            var n = babelHelpers.extends({}, this.$1),
              a = o.origin,
              i = o.rotation,
              l = o.scale,
              s = o.size;
            return (
              a != null && (n.origin = a),
              s != null && (n.size = s),
              i != null && (n.rotation = i),
              l != null &&
                Math.abs(n.scale.x - l.x) > e &&
                Math.abs(n.scale.y - l.y) > e &&
                (n.scale = l),
              r("lodash").isEqual(this.$1, n) ? this : new t(n)
            );
          }),
          (n.clone = function () {
            return new t(this.$1);
          }),
          (n.addPadding = function (t, n) {
            var e = this.getTopLeft(),
              o = n.getTopLeft(),
              a = new (r("WAWebMediaEditorGeometryPoint"))({
                x: Math.max(o.getX(), e.getX() - t),
                y: Math.max(o.getY(), e.getY() - t),
              }),
              i = this.getBottomRight(),
              l = n.getBottomRight(),
              s = new (r("WAWebMediaEditorGeometryPoint"))({
                x: Math.min(l.getX(), i.getX() + t),
                y: Math.min(l.getY(), i.getY() + t),
              }),
              u = s.getX() - a.getX(),
              c = s.getY() - a.getY();
            return this.updateXYWidthHeight({
              x: a.getX(),
              y: a.getY(),
              width: u,
              height: c,
            });
          }),
          (n.toString = function () {
            return (
              "(" +
              this.getOrigin().toString() +
              ", " +
              this.getSize().toString() +
              ", " +
              this.getRotation() +
              "r)"
            );
          }),
          (n.equals = function (t) {
            return (
              this.getOrigin().equals(t.getOrigin()) &&
              this.getSize().equals(t.getSize()) &&
              this.getRotation() === t.getRotation() &&
              this.getScale() === t.getScale()
            );
          }),
          (n.contains = function (t) {
            return (
              t.getX() >= this.getX() &&
              t.getY() >= this.getY() &&
              t.getX() < this.getX() + this.getWidth() &&
              t.getY() < this.getY() + this.getHeight()
            );
          }),
          (n.getTopLeft = function () {
            return new (r("WAWebMediaEditorGeometryPoint"))({
              x: this.getX(),
              y: this.getY(),
            });
          }),
          (n.getTopCenter = function () {
            return new (r("WAWebMediaEditorGeometryPoint"))({
              x: this.getX() + this.getWidth() / 2,
              y: this.getY(),
            });
          }),
          (n.getTopRight = function () {
            return new (r("WAWebMediaEditorGeometryPoint"))({
              x: this.getX() + this.getWidth(),
              y: this.getY(),
            });
          }),
          (n.getLeftCenter = function () {
            return new (r("WAWebMediaEditorGeometryPoint"))({
              x: this.getX(),
              y: this.getY() + this.getHeight() / 2,
            });
          }),
          (n.getCenter = function () {
            return new (r("WAWebMediaEditorGeometryPoint"))({
              x: this.getX() + this.getWidth() / 2,
              y: this.getY() + this.getHeight() / 2,
            });
          }),
          (n.getRightCenter = function () {
            return new (r("WAWebMediaEditorGeometryPoint"))({
              x: this.getX() + this.getWidth(),
              y: this.getY() + this.getHeight() / 2,
            });
          }),
          (n.getBottomLeft = function () {
            return new (r("WAWebMediaEditorGeometryPoint"))({
              x: this.getX(),
              y: this.getY() + this.getHeight(),
            });
          }),
          (n.getBottomCenter = function () {
            return new (r("WAWebMediaEditorGeometryPoint"))({
              x: this.getX() + this.getWidth() / 2,
              y: this.getY() + this.getHeight(),
            });
          }),
          (n.getBottomRight = function () {
            return new (r("WAWebMediaEditorGeometryPoint"))({
              x: this.getX() + this.getWidth(),
              y: this.getY() + this.getHeight(),
            });
          }),
          (n.getOrigin = function () {
            return this.$1.origin;
          }),
          (n.getSize = function () {
            return this.$1.size;
          }),
          (n.getX = function () {
            return this.getOrigin().getX();
          }),
          (n.getY = function () {
            return this.getOrigin().getY();
          }),
          (n.getWidth = function () {
            return this.getSize().getWidth();
          }),
          (n.getHeight = function () {
            return this.getSize().getHeight();
          }),
          (n.getRotation = function () {
            return this.$1.rotation;
          }),
          (n.getScale = function () {
            return this.$1.scale;
          }),
          (n.getDimension = function () {
            return this.getSize().getDimension();
          }),
          t
        );
      })();
    l.default = s;
  },
  98,
);
