__d(
  "WAWebMediaEditorLayersText",
  [
    "WAWebMediaEditorEnumsColors",
    "WAWebMediaEditorGeometryPoint",
    "WAWebMediaEditorGeometryRect",
    "WAWebMediaEditorGeometrySize",
    "WAWebMediaEditorUtilsColor",
    "WAWebMediaEditorUtilsGenerateLayerId",
    "WAWebMediaEditorUtilsTextBackground",
    "WAWebMediaEditorUtilsTextInCanvas",
    "lodash",
  ],
  function (t, n, r, o, a, i, l) {
    var e = 18,
      s = {
        lineVerticalPadding: 6,
        lineHorizontalPadding: 8,
        layerPadding: 6,
        backgroundBorderRadius: 5,
        backgroundShadow: {
          offsetX: 0,
          offsetY: 1,
          radius: 6,
          spread: 0,
          color: new (o("WAWebMediaEditorUtilsColor").Color)(0, 0, 0, 0.32),
        },
      },
      u = (function () {
        function t(e) {
          ((this.$1 = Object.freeze(babelHelpers.extends({}, e))),
            Object.freeze(this));
        }
        t.create = function (n) {
          var e,
            a = [],
            i = c(a, s),
            l = 0;
          return (
            n.rotation != null && (l = n.rotation),
            new t({
              id: o("WAWebMediaEditorUtilsGenerateLayerId").generateLayerId(
                "text",
              ),
              text: "",
              textColor: n.textColor,
              textBackground: n.textBackground,
              font: n.font,
              alignment: n.alignment,
              lines: a,
              frame: new (r("WAWebMediaEditorGeometryRect"))({
                origin: new (r("WAWebMediaEditorGeometryPoint"))({
                  x: n.origin.getX() - i.getWidth() / 2,
                  y: n.origin.getY() - i.getHeight() / 2,
                }),
                size: i,
                rotation: l,
                scale: (e = n.scale) != null ? e : { x: 1, y: 1 },
              }),
              maxWidth: 0,
              backgroundPath: "",
            }).setText(n.text)
          );
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
          (n.setText = function (t) {
            return this.$2({ text: t });
          }),
          (n.setTextColor = function (t) {
            return this.$2({ textColor: t });
          }),
          (n.setTextBackground = function (t) {
            return this.$2({ textBackground: t });
          }),
          (n.setFont = function (t) {
            return this.$2({ font: t });
          }),
          (n.setAlignment = function (t) {
            return this.$2({ alignment: t });
          }),
          (n.$2 = function (a) {
            var n = babelHelpers.extends({}, this.$1);
            if (
              (a.frame != null && (n.frame = a.frame),
              a.textColor != null && (n.textColor = a.textColor),
              a.textBackground != null && (n.textBackground = a.textBackground),
              (a.text != null && a.text !== n.text) ||
                (a.font != null && a.font !== n.font))
            ) {
              var i, l;
              ((n.text = (i = a.text) != null ? i : n.text),
                (n.font = (l = a.font) != null ? l : n.font),
                (n.lines = o("WAWebMediaEditorUtilsTextInCanvas").getLines(
                  n.text,
                  n.font,
                  e,
                  this.$1.maxWidth,
                )));
              var u = c(n.lines, s),
                d = n.frame.getSize(),
                m = n.frame.getOrigin(),
                p = new (r("WAWebMediaEditorGeometryPoint"))({
                  x: m.getX() + d.getWidth() / 2 - u.getWidth() / 2,
                  y: m.getY() + d.getHeight() / 2 - u.getHeight() / 2,
                });
              n.frame = n.frame.update({ origin: p, size: u });
            }
            if (
              (a.alignment != null && (n.alignment = a.alignment),
              this.getFont() !== n.font ||
                this.getText() !== n.text ||
                this.getAlignment() !== n.alignment)
            ) {
              var _ = n.lines.map(function (e) {
                return e.width;
              });
              n.backgroundPath = o(
                "WAWebMediaEditorUtilsTextBackground",
              ).generateTextBackgroundPath(_, n.alignment, {
                lineVerticalPadding: this.getStyles().lineVerticalPadding,
                lineHorizontalPadding: this.getStyles().lineHorizontalPadding,
                lineHeight: this.getLineHeight(),
                arcSize: this.getStyles().backgroundBorderRadius,
              });
            }
            return r("lodash").isEqual(this.$1, n) ? this : new t(n);
          }),
          (n.getLines = function () {
            return this.$1.lines;
          }),
          (n.getLinesOfText = function () {
            return this.getLines().map(function (e) {
              return e.text;
            });
          }),
          (n.getLineWidths = function () {
            return this.getLines().map(function (e) {
              return e.width;
            });
          }),
          (n.getNumberOfLines = function () {
            return this.getLines().length;
          }),
          (n.getFontSize = function () {
            return e;
          }),
          (n.getLineHeight = function () {
            return this.getFontSize();
          }),
          (n.getStyles = function () {
            return s;
          }),
          (n.getText = function () {
            return this.$1.text;
          }),
          (n.getTextColor = function () {
            return this.$1.textColor;
          }),
          (n.getTextBackgroundColor = function () {
            return this.getTextColor().isLight()
              ? o("WAWebMediaEditorEnumsColors").getColorValue(
                  o("WAWebMediaEditorEnumsColors").ColorType.BLACK,
                )
              : o("WAWebMediaEditorEnumsColors").getColorValue(
                  o("WAWebMediaEditorEnumsColors").ColorType.WHITE,
                );
          }),
          (n.getTextBackground = function () {
            return this.$1.textBackground;
          }),
          (n.getFont = function () {
            return this.$1.font;
          }),
          (n.getEditable = function () {
            return !0;
          }),
          (n.getId = function () {
            return this.$1.id;
          }),
          (n.getAlignment = function () {
            return this.$1.alignment;
          }),
          (n.getFrame = function () {
            return this.$1.frame;
          }),
          (n.getOrigin = function () {
            return this.getFrame().getOrigin();
          }),
          (n.getSize = function () {
            return this.getFrame().getSize();
          }),
          (n.getX = function () {
            return this.getFrame().getX();
          }),
          (n.getY = function () {
            return this.getFrame().getY();
          }),
          (n.getWidth = function () {
            return this.getFrame().getWidth();
          }),
          (n.getHeight = function () {
            return this.getFrame().getHeight();
          }),
          (n.getRotation = function () {
            return this.getFrame().getRotation();
          }),
          (n.getScale = function () {
            return this.getFrame().getScale();
          }),
          (n.getBackgroundPath = function () {
            return this.$1.backgroundPath;
          }),
          t
        );
      })();
    function c(t, n) {
      var o =
          Math.max.apply(
            Math,
            t
              .map(function (e) {
                return e.width;
              })
              .concat([0]),
          ) +
          n.lineHorizontalPadding * 2 +
          n.layerPadding * 2,
        a = t.length * (e + n.lineVerticalPadding * 2) + n.layerPadding * 2;
      return new (r("WAWebMediaEditorGeometrySize"))({ width: o, height: a });
    }
    ((l.DEFAULT_FONT_SIZE = e), (l.TextLayer = u));
  },
  98,
);
