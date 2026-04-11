__d(
  "WAWebMediaEditorLayersImage",
  [
    "$InternalEnum",
    "WAWebMediaEditorGeometryRect",
    "WAWebMediaEditorGeometrySize",
    "WAWebMediaEditorUtilsGenerateLayerId",
    "err",
    "lodash",
  ],
  function (t, n, r, o, a, i, l) {
    var e = n("$InternalEnum").Mirrored([
        "Image",
        "Emoji",
        "Sticker",
        "Background",
      ]),
      s = (function () {
        function t(e) {
          ((this.$1 = Object.freeze(babelHelpers.extends({}, e))),
            Object.freeze(this));
        }
        t.create = function (n) {
          var e,
            a = n.image.width,
            i = n.image.height;
          if (!a || !i)
            throw r("err")("Image must have valid width and height");
          return new t({
            id: o("WAWebMediaEditorUtilsGenerateLayerId").generateLayerId(
              "image",
            ),
            type: n.type,
            image: n.image,
            editable: n.editable,
            frame: new (r("WAWebMediaEditorGeometryRect"))({
              origin: n.origin,
              size: new (r("WAWebMediaEditorGeometrySize"))({
                width: a,
                height: i,
              }),
              rotation: (e = n.rotation) != null ? e : 0,
              scale: n.scale,
            }),
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
          (n.$2 = function (n) {
            var e = babelHelpers.extends({}, this.$1);
            if (n.image != null) {
              var o = n.image.width,
                a = n.image.height;
              if (!o || !a)
                throw r("err")("Image must have valid width and height");
              ((e.image = n.image),
                (e.frame = new (r("WAWebMediaEditorGeometryRect"))({
                  origin: this.getFrame().getOrigin(),
                  size: new (r("WAWebMediaEditorGeometrySize"))({
                    width: o,
                    height: a,
                  }),
                  rotation: this.getFrame().getRotation(),
                  scale: this.getFrame().getScale(),
                })));
            }
            return (
              n.editable != null && (e.editable = n.editable),
              n.frame != null && (e.frame = n.frame),
              r("lodash").isEqual(this.$1, e) ? this : new t(e)
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
          (n.isSticker = function () {
            return this.$1.type === e.Sticker;
          }),
          (n.isEmoji = function () {
            return this.$1.type === e.Emoji;
          }),
          (n.isBackground = function () {
            return this.$1.type === e.Background;
          }),
          t
        );
      })();
    ((l.ImageLayerType = e), (l.ImageLayer = s));
  },
  98,
);
