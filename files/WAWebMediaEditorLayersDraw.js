__d(
  "WAWebMediaEditorLayersDraw",
  [
    "$InternalEnum",
    "WAWebMediaEditorGeometryPath",
    "WAWebMediaEditorGeometryPoint",
    "WAWebMediaEditorGeometryRect",
    "WAWebMediaEditorUtilsGenerateLayerId",
  ],
  function (t, n, r, o, a, i, l) {
    var e = n("$InternalEnum").Mirrored(["Paint", "Outline"]),
      s = (function () {
        function e(e) {
          if (((this.$4 = e.type), e.size != null)) {
            var t = e.size;
            ((this.$2 = new (r("WAWebMediaEditorGeometryRect"))({
              origin: new (r("WAWebMediaEditorGeometryPoint"))({ x: 0, y: 0 }),
              size: t,
              rotation: 0,
              scale: { x: 1, y: 1 },
            })),
              (this.$3 = []));
          } else
            e.frame != null &&
              e.paths != null &&
              ((this.$2 = e.frame), (this.$3 = e.paths));
          (e.id != null
            ? (this.$1 = e.id)
            : (this.$1 = o(
                "WAWebMediaEditorUtilsGenerateLayerId",
              ).generateLayerId(e.type)),
            Object.freeze(this));
        }
        var t = e.prototype;
        return (
          (t.delete = function () {}),
          (t.$5 = function (n) {
            var t = this.$3;
            n.paths != null && (t = n.paths);
            var r = this.$2,
              o = this.$4;
            return new e({ id: this.getId(), paths: t, frame: r, type: o });
          }),
          (t.setOrigin = function (t) {
            throw new TypeError(
              "MediaEditor:DrawLayer resetting origin is not allowed",
            );
          }),
          (t.setRotation = function (t) {
            throw new TypeError(
              "MediaEditor:DrawLayer resetting rotation is not allowed",
            );
          }),
          (t.setScale = function (t) {
            throw new TypeError(
              "MediaEditor:DrawLayer resetting scale is not allowed",
            );
          }),
          (t.addPath = function (t) {
            var e = new (r("WAWebMediaEditorGeometryPath"))(t),
              n = [].concat(this.$3, [e]);
            return this.$5({ paths: n });
          }),
          (t.clearPaths = function () {
            var e = [];
            return this.$5({ paths: e });
          }),
          (t.isEmpty = function () {
            return this.$3.length === 0;
          }),
          (t.getAllPoints = function () {
            return this.getPaths().reduce(function (e, t) {
              return (
                !t.getSmoothing() && e.length && e.push(e[e.length - 1]),
                t.isDrag() && e.push(t.getPoints()[0]),
                e.push.apply(
                  e,
                  t.getPoints().flatMap(function (e) {
                    return t.isSmooth() ? [e] : [e, e];
                  }),
                ),
                e
              );
            }, []);
          }),
          (t.getPaths = function () {
            return this.$3;
          }),
          (t.getEditable = function () {
            return !1;
          }),
          (t.getId = function () {
            return this.$1;
          }),
          (t.getType = function () {
            return this.$4;
          }),
          (t.getFrame = function () {
            return this.$2;
          }),
          (t.getOrigin = function () {
            return this.$2.getOrigin();
          }),
          (t.getSize = function () {
            return this.$2.getSize();
          }),
          (t.getX = function () {
            return this.$2.getX();
          }),
          (t.getY = function () {
            return this.$2.getY();
          }),
          (t.getWidth = function () {
            return this.$2.getWidth();
          }),
          (t.getHeight = function () {
            return this.$2.getHeight();
          }),
          (t.getRotation = function () {
            return this.$2.getRotation();
          }),
          (t.getScale = function () {
            return this.$2.getScale();
          }),
          e
        );
      })();
    ((l.DrawLayerType = e), (l.DrawLayer = s));
  },
  98,
);
