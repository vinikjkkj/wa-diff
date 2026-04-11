__d(
  "WAWebMediaEditorLayersShape",
  [
    "$InternalEnum",
    "WAWebMediaEditorEnumsColors",
    "WAWebMediaEditorGeometryRect",
    "WAWebMediaEditorGeometrySize",
    "WAWebMediaEditorUtilsGenerateLayerId",
    "WAWebMediaEditorUtilsShapes",
    "err",
    "lodash",
  ],
  function (t, n, r, o, a, i, l) {
    var e = ["mode"],
      s = n("$InternalEnum").Mirrored(["None", "Pixelate", "Smooth"]),
      u = (function () {
        function t(e) {
          ((this.$1 = Object.freeze(babelHelpers.extends({}, e))),
            Object.freeze(this));
        }
        t.create = function (a) {
          var n = a.mode,
            i = n === void 0 ? s.None : n,
            l = babelHelpers.objectWithoutPropertiesLoose(a, e),
            u = l.image.width,
            c = l.image.height;
          if (!u || !c)
            throw r("err")("Image must have valid width and height");
          var d = l.backgroundFrame.getWidth() / 2 - l.size.getWidth() / 2,
            m = l.size.getWidth() + d,
            p = l.backgroundFrame.getHeight() / 2 - l.size.getHeight() / 2,
            _ = l.size.getHeight() + p,
            f =
              l.shape === o("WAWebMediaEditorUtilsShapes").ShapeType.LINE ||
              l.shape === o("WAWebMediaEditorUtilsShapes").ShapeType.ARROW
                ? [d, _, (d + m) / 2, (_ + p) / 2, m, p]
                : [];
          return new t({
            id: o("WAWebMediaEditorUtilsGenerateLayerId").generateLayerId(
              "shape",
            ),
            image: l.image,
            editable: !0,
            frame: new (r("WAWebMediaEditorGeometryRect"))({
              origin: l.origin,
              size: l.size,
              rotation: 0,
              scale: { x: 1, y: 1 },
            }),
            radius: l.radius,
            shape: l.shape,
            backgroundFrame: l.backgroundFrame,
            confirmed: !0,
            mode: i,
            points: f,
            fillColor: l.fillColor,
            strokeColor: l.strokeColor,
            strokeWidth: l.strokeWidth,
          });
        };
        var n = t.prototype;
        return (
          (n.delete = function () {}),
          (n.setOrigin = function (t) {
            return this.$2({ frame: this.getFrame().update({ origin: t }) });
          }),
          (n.setRotation = function (t) {
            return this.$2({ frame: this.getFrame().update({ rotation: t }) });
          }),
          (n.setScale = function (t) {
            return this.$2({ frame: this.getFrame().update({ scale: t }) });
          }),
          (n.setFrame = function (t) {
            return this.$2({ frame: t });
          }),
          (n.setImage = function (t) {
            return this.$2({ image: t });
          }),
          (n.setEditable = function (t) {
            return this.$2({ editable: t });
          }),
          (n.setBlurMode = function (t) {
            return this.$2({ mode: t });
          }),
          (n.setPoints = function (t) {
            return this.$2({ points: t });
          }),
          (n.setFillColor = function (t) {
            return this.$2({ fillColor: t });
          }),
          (n.setStrokeColor = function (t) {
            return this.$2({ strokeColor: t });
          }),
          (n.setStrokeWidth = function (t) {
            return this.$2({ strokeWidth: t });
          }),
          (n.setShape = function (t) {
            return this.$2({ shape: t });
          }),
          (n.setShapeRadius = function (t) {
            return this.$2({ radius: t });
          }),
          (n.setShapeBackgroundFrame = function (t) {
            return this.$2({ backgroundFrame: t });
          }),
          (n.setConfirmed = function () {
            return this.$2({ confirmed: !0 });
          }),
          (n.$2 = function (n) {
            var e = babelHelpers.extends({}, this.$1);
            if (n.image != null) {
              var o = n.image.width,
                a = n.image.height;
              if (!o || !a)
                throw r("err")("Image must have valid width and height");
              ((e.image = n.image),
                (e.backgroundFrame = new (r("WAWebMediaEditorGeometryRect"))({
                  origin: this.getBackgroundFrame().getOrigin(),
                  size: new (r("WAWebMediaEditorGeometrySize"))({
                    width: o,
                    height: a,
                  }),
                  rotation: this.getBackgroundFrame().getRotation(),
                  scale: this.getBackgroundFrame().getScale(),
                })));
            }
            return (
              n.editable != null && (e.editable = n.editable),
              n.frame != null && (e.frame = n.frame),
              n.radius != null && (e.radius = n.radius),
              n.shape != null && (e.shape = n.shape),
              n.points != null && (e.points = n.points),
              n.fillColor != null && (e.fillColor = n.fillColor),
              n.strokeColor != null && (e.strokeColor = n.strokeColor),
              n.strokeWidth != null && (e.strokeWidth = n.strokeWidth),
              n.backgroundFrame != null &&
                (e.backgroundFrame = n.backgroundFrame),
              n.confirmed != null && (e.confirmed = n.confirmed),
              n.mode != null && (e.mode = n.mode),
              r("lodash").isEqual(this.$1, e) ? this : new t(e).setConfirmed()
            );
          }),
          (n.getImage = function () {
            return this.$1.image;
          }),
          (n.getEditable = function () {
            return this.$1.editable;
          }),
          (n.getId = function () {
            return this.$1.id;
          }),
          (n.getFrame = function () {
            return this.$1.frame;
          }),
          (n.getOrigin = function () {
            return this.$1.frame.getOrigin();
          }),
          (n.getSize = function () {
            return this.$1.frame.getSize();
          }),
          (n.getX = function () {
            return this.$1.frame.getX();
          }),
          (n.getY = function () {
            return this.$1.frame.getY();
          }),
          (n.getWidth = function () {
            return this.$1.frame.getWidth();
          }),
          (n.getHeight = function () {
            return this.$1.frame.getHeight();
          }),
          (n.getRotation = function () {
            return this.$1.frame.getRotation();
          }),
          (n.getScale = function () {
            return this.$1.frame.getScale();
          }),
          (n.getPoints = function () {
            return this.$1.points;
          }),
          (n.getFillColor = function () {
            var e;
            return (e = this.$1.fillColor) != null
              ? e
              : o("WAWebMediaEditorEnumsColors").getColorValue(
                  o("WAWebMediaEditorEnumsColors").ColorType.BLACK,
                );
          }),
          (n.getStrokeColor = function () {
            var e;
            return (e = this.$1.strokeColor) != null
              ? e
              : o("WAWebMediaEditorEnumsColors").getColorValue(
                  o("WAWebMediaEditorEnumsColors").ColorType.BLACK,
                );
          }),
          (n.getStrokeWidth = function () {
            var e;
            return (e = this.$1.strokeWidth) != null ? e : 10;
          }),
          (n.getMode = function () {
            return this.$1.mode;
          }),
          (n.getShape = function () {
            return this.$1.shape;
          }),
          (n.getRadius = function () {
            return this.$1.radius;
          }),
          (n.getBackgroundFrame = function () {
            return this.$1.backgroundFrame;
          }),
          (n.getConfirmed = function () {
            return this.$1.confirmed;
          }),
          (n.isBlur = function () {
            return this.getMode() !== s.None;
          }),
          (n.isRectangle = function () {
            return (
              this.getShape() ===
              o("WAWebMediaEditorUtilsShapes").ShapeType.RECTANGLE
            );
          }),
          (n.isCircle = function () {
            return (
              this.getShape() ===
              o("WAWebMediaEditorUtilsShapes").ShapeType.CIRCLE
            );
          }),
          (n.isLine = function () {
            return (
              this.getShape() ===
              o("WAWebMediaEditorUtilsShapes").ShapeType.LINE
            );
          }),
          (n.isArrow = function () {
            return (
              this.getShape() ===
              o("WAWebMediaEditorUtilsShapes").ShapeType.ARROW
            );
          }),
          t
        );
      })();
    ((l.BlurMode = s), (l.ShapeLayer = u));
  },
  98,
);
