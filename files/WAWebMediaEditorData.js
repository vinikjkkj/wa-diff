__d(
  "WAWebMediaEditorData",
  [
    "WAWebMediaEditorEnumsFonts",
    "WAWebMediaEditorGeometryPoint",
    "WAWebMediaEditorGeometryRect",
    "WAWebMediaEditorGeometrySize",
    "WAWebMediaEditorLayersDraw",
    "WAWebMediaEditorLayersImage",
    "WAWebMediaEditorLayersShape",
    "WAWebMediaEditorLayersText",
    "WAWebMediaEditorUtilsFilters",
    "WAWebMediaEditorUtilsGetDominantColor",
    "cr:10202",
    "err",
    "lodash",
  ],
  function (t, n, r, o, a, i, l) {
    var e = 0,
      s = (function () {
        function t(e) {
          ((this.$1 = Object.freeze(babelHelpers.extends({}, e))),
            Object.freeze(this));
        }
        t.create = function () {
          var n,
            a,
            i = o(
              "WAWebMediaEditorUtilsGetDominantColor",
            ).DEFAULT_DOMINANT_COLOR.getBackgroundAndTintColors(),
            l = i.backgroundColor,
            s = i.tintColor;
          return new t({
            id: Math.random(),
            frame: new (r("WAWebMediaEditorGeometryRect"))({
              origin: new (r("WAWebMediaEditorGeometryPoint"))({ x: 0, y: 0 }),
              size: new (a = r("WAWebMediaEditorGeometrySize"))({
                width: 0,
                height: 0,
              }),
              rotation: 0,
              scale: { x: 0, y: 0 },
            }),
            layers: [],
            paintLayer: new (n = o("WAWebMediaEditorLayersDraw")).DrawLayer({
              size: a.empty(),
              type: n.DrawLayerType.Paint,
            }),
            outlineLayer: new n.DrawLayer({
              size: a.empty(),
              type: n.DrawLayerType.Outline,
            }),
            background: null,
            selectedLayer: null,
            activeFilter: o("WAWebMediaEditorUtilsFilters").FilterType.NONE,
            backgroundColor: l,
            tintColor: s,
            rotation: e,
            cropFrame: new (r("WAWebMediaEditorGeometryRect"))({
              origin: new (r("WAWebMediaEditorGeometryPoint"))({ x: 0, y: 0 }),
              size: new a({ width: 0, height: 0 }),
              rotation: 0,
              scale: { x: 0, y: 0 },
            }),
            sending: !1,
          });
        };
        var n = t.prototype;
        return (
          (n.$2 = function (n) {
            var e = babelHelpers.extends({}, this.$1);
            return (
              n.layers != null && (e.layers = n.layers),
              n.paintLayer !== void 0 && (e.paintLayer = n.paintLayer),
              n.outlineLayer !== void 0 && (e.outlineLayer = n.outlineLayer),
              n.background !== void 0 && (e.background = n.background),
              n.frame !== void 0 &&
                ((e.frame = n.frame),
                e.frame &&
                  (e.cropFrame = e.cropFrame.updateXYWidthHeight({
                    x: 0,
                    y: 0,
                    width: e.frame.getWidth(),
                    height: e.frame.getHeight(),
                  }))),
              n.cropFrame !== void 0 && (e.cropFrame = n.cropFrame),
              n.selectedLayer !== void 0 && (e.selectedLayer = n.selectedLayer),
              n.backgroundColor != null &&
                (e.backgroundColor = n.backgroundColor),
              n.tintColor != null && (e.tintColor = n.tintColor),
              n.rotation != null && (e.rotation = n.rotation),
              n.activeFilter != null && (e.activeFilter = n.activeFilter),
              n.sending != null && (e.sending = n.sending),
              r("lodash").isEqual(this.$1, e) ? this : new t(e)
            );
          }),
          (n.updateLayer = function (t, n) {
            if (
              (t instanceof o("WAWebMediaEditorLayersText").TextLayer &&
                !(n instanceof o("WAWebMediaEditorLayersText").TextLayer)) ||
              (t instanceof o("WAWebMediaEditorLayersImage").ImageLayer &&
                !(n instanceof o("WAWebMediaEditorLayersImage").ImageLayer))
            )
              throw new TypeError(
                "MediaEditorData: calling _updateLayer with two different layer types",
              );
            if (t === n) return this;
            var e = this.getLayers().map(function (e) {
                return e === t ? n : e;
              }),
              r = this.getSelectedLayer();
            return (
              r === t && (r = n),
              this.$2({ layers: e, selectedLayer: r })
            );
          }),
          (n.setBackground = function (t, n) {
            var e = n != null ? n : {},
              a = e.fitToSquare,
              i = a === void 0 ? !1 : a,
              l = e.scale,
              s = l === void 0 ? { x: 1, y: 1 } : l,
              u = o("WAWebMediaEditorLayersImage").ImageLayer.create({
                type: o("WAWebMediaEditorLayersImage").ImageLayerType
                  .Background,
                origin: new (r("WAWebMediaEditorGeometryPoint"))({
                  x: 0,
                  y: 0,
                }),
                image: t,
                editable: !0,
                scale: s,
              }),
              c = u.getFrame().getDimension(),
              d = i
                ? r("WAWebMediaEditorGeometryRect").create({
                    x: 0,
                    y: 0,
                    width: c,
                    height: c,
                    scale: { x: 1, y: 1 },
                    rotation: 0,
                  })
                : u.getFrame(),
              m = new (r("WAWebMediaEditorGeometryPoint"))({
                x: (d.getWidth() - u.getWidth()) / 2,
                y: (d.getHeight() - u.getHeight()) / 2,
              }),
              p = u.setScale(s).setOrigin(m),
              _ = o("WAWebMediaEditorUtilsGetDominantColor").getDominantColor(
                t,
              ),
              f = _.getBackgroundAndTintColors(),
              g = f.backgroundColor,
              h = f.tintColor,
              y = new (o("WAWebMediaEditorLayersDraw").DrawLayer)({
                size: d.getSize(),
                type: o("WAWebMediaEditorLayersDraw").DrawLayerType.Paint,
              }),
              C = new (o("WAWebMediaEditorLayersDraw").DrawLayer)({
                size: d.getSize(),
                type: o("WAWebMediaEditorLayersDraw").DrawLayerType.Outline,
              });
            return this.$2({
              background: p,
              frame: d,
              backgroundColor: g,
              tintColor: h,
              paintLayer: y,
              outlineLayer: C,
            });
          }),
          (n.updateBackground = function (t, n, r, o) {
            var e,
              a =
                (e = this.getBackground()) == null
                  ? void 0
                  : e.setImage(t).setOrigin(n).setRotation(r).setScale(o);
            return this.$2({
              background: a,
              selectedLayer: a,
            }).setShapeLayerBackground(a == null ? void 0 : a.getFrame(), t);
          }),
          (n.addImageLayer = function (t) {
            var e = o("WAWebMediaEditorLayersImage").ImageLayer.create(t),
              n = [].concat(this.getLayers(), [e]);
            return this.$2({ layers: n, selectedLayer: e });
          }),
          (n.addImageLayerToCenter = function (t) {
            var e = this.toCanvasPoint(
                new (r("WAWebMediaEditorGeometryPoint"))({
                  x: this.getScreenWidth() / 2,
                  y: this.getScreenHeight() / 2,
                }),
              ),
              n = new (r("WAWebMediaEditorGeometryPoint"))({
                x: e.getX() - t.image.width / 2,
                y: e.getY() - t.image.height / 2,
              }),
              o = babelHelpers.extends(
                { origin: n, rotation: -this.getRotation() },
                t,
              );
            return this.addImageLayer(o);
          }),
          (n.addShapeLayer = function (t) {
            var e = o("WAWebMediaEditorLayersShape").ShapeLayer.create(t),
              n = [].concat(this.getLayers(), [e]);
            return this.$2({ layers: n, selectedLayer: e });
          }),
          (n.addShapeLayerToCenter = function (t) {
            var e,
              n,
              o,
              a,
              i = this.toCanvasPoint(
                new (r("WAWebMediaEditorGeometryPoint"))({
                  x: this.getScreenWidth() / 2,
                  y: this.getScreenHeight() / 2,
                }),
              ),
              l = new (r("WAWebMediaEditorGeometryPoint"))({
                x:
                  i.getX() -
                  ((e = (n = t.size) == null ? void 0 : n.getWidth()) != null
                    ? e
                    : t.image.width) /
                    2,
                y:
                  i.getY() -
                  ((o = (a = t.size) == null ? void 0 : a.getHeight()) != null
                    ? o
                    : t.image.height) /
                    2,
              }),
              s = babelHelpers.extends({ origin: l }, t);
            return this.addShapeLayer(s);
          }),
          (n.setShapeLayerBackground = function (t, n) {
            var e = this.getLayers().map(function (e) {
              var r = e;
              return (
                r instanceof o("WAWebMediaEditorLayersShape").ShapeLayer &&
                  (n != null && (r = r.setImage(n)),
                  t != null && (r = r.setShapeBackgroundFrame(t))),
                r
              );
            });
            return this.$2({ layers: e });
          }),
          (n.addTextLayer = function (t) {
            var e =
                t instanceof o("WAWebMediaEditorLayersText").TextLayer
                  ? t
                  : o("WAWebMediaEditorLayersText").TextLayer.create(
                      babelHelpers.extends({}, t, {
                        rotation: -this.getRotation(),
                      }),
                    ),
              n = [].concat(this.getLayers(), [e]),
              r = e;
            return this.$2({ layers: n, selectedLayer: r });
          }),
          (n.setText = function (t, n) {
            return this.updateLayer(t, t.setText(n));
          }),
          (n.setTextColor = function (t, n) {
            return this.updateLayer(t, t.setTextColor(n));
          }),
          (n.setTextBackground = function (t, n) {
            return this.updateLayer(t, t.setTextBackground(n));
          }),
          (n.setFont = function (t, n) {
            return this.updateLayer(t, t.setFont(n));
          }),
          (n.setAlignment = function (t, n) {
            return this.updateLayer(t, t.setAlignment(n));
          }),
          (n.setBlurMode = function (t, n) {
            return this.updateLayer(t, t.setBlurMode(n));
          }),
          (n.setShapeFillColor = function (t, n) {
            return this.updateLayer(t, t.setFillColor(n));
          }),
          (n.setShapeStrokeColor = function (t, n) {
            return this.updateLayer(t, t.setStrokeColor(n));
          }),
          (n.setShapeStrokeWidth = function (t, n) {
            return this.updateLayer(t, t.setStrokeWidth(n));
          }),
          (n.setShapeRadius = function (t, n) {
            return this.updateLayer(t, t.setShapeRadius(n));
          }),
          (n.setShapeBackgroundFrame = function (t, n) {
            return this.updateLayer(t, t.setShapeBackgroundFrame(n));
          }),
          (n.setRotation = function (t) {
            if (t % 90 !== 0)
              throw r("err")(
                "canvas can only be rotated at a 90 degrees interval",
              );
            return this.$2({ rotation: t % 360 });
          }),
          (n.setCrop = function (t, n) {
            if (
              t.getX() < 0 ||
              t.getY() < 0 ||
              t.getX() + n.getWidth() > this.getWidth() ||
              t.getY() + n.getHeight() > this.getHeight()
            )
              throw r("err")("canvas crop must stays within the frame bound");
            var e = new (r("WAWebMediaEditorGeometryRect"))({
              origin: t,
              size: n,
              rotation: 0,
              scale: { x: 0, y: 0 },
            });
            return this.$2({ cropFrame: e });
          }),
          (n.setActiveFilter = function (t) {
            return this.$2({ activeFilter: t });
          }),
          (n.setSending = function (t) {
            return this.$2({ sending: t });
          }),
          (n.addEmptyTextLayer = function (t, n) {
            var e = {
              origin: new (r("WAWebMediaEditorGeometryPoint"))({
                x: this.getWidth() / 4,
                y: this.getHeight() / 2,
              }),
              text: "",
              textColor: t,
              textBackground: !1,
              font: n,
              alignment: o("WAWebMediaEditorEnumsFonts").TextAlignment.CENTER,
            };
            return this.addTextLayer(e);
          }),
          (n.addPaintPath = function (t) {
            var e = this.getPaintLayer().addPath(t);
            return this.$2({ paintLayer: e });
          }),
          (n.addOutlinePath = function (t) {
            var e = this.getOutlineLayer().addPath(t);
            return this.$2({ outlineLayer: e });
          }),
          (n.clearOutlinePaths = function () {
            var e = this.getOutlineLayer().clearPaths();
            return this.$2({ outlineLayer: e });
          }),
          (n.translateLayer = function (t, n) {
            return this.updateLayer(t, t.setOrigin(n));
          }),
          (n.translateBackground = function (t) {
            var e,
              n = (e = this.getBackground()) == null ? void 0 : e.setOrigin(t);
            return this.$2({
              background: n,
              selectedLayer: n,
            }).setShapeLayerBackground(n == null ? void 0 : n.getFrame());
          }),
          (n.transformLayer = function (t, n, r, a) {
            var e = t;
            return (
              a != null &&
                t instanceof o("WAWebMediaEditorLayersShape").ShapeLayer &&
                (e = t.setFrame(a)),
              (e = e.setRotation(n).setScale(r)),
              this.updateLayer(t, e)
            );
          }),
          (n.transformBackground = function (t, n) {
            var e,
              r =
                (e = this.getBackground()) == null
                  ? void 0
                  : e.setRotation(t).setScale(n);
            return this.$2({
              background: r,
              selectedLayer: r,
            }).setShapeLayerBackground(r == null ? void 0 : r.getFrame());
          }),
          (n.setSelectedLayer = function (t) {
            return this.$2({ selectedLayer: t });
          }),
          (n.clearSelectedLayer = function () {
            return this.$2({ selectedLayer: null });
          }),
          (n.deleteLayer = function (t) {
            t.delete();
            var e = this.getLayers().filter(function (e) {
                return e !== t;
              }),
              n = { layers: e };
            return (
              t === this.getSelectedLayer() &&
                (n = babelHelpers.extends({}, n, { selectedLayer: null })),
              this.$2(n)
            );
          }),
          (n.deleteAllLayers = function () {
            var e;
            return (
              this.getLayers().forEach(function (e) {
                return e.delete();
              }),
              this.$2({
                layers: [],
                paintLayer: new (e = o("WAWebMediaEditorLayersDraw")).DrawLayer(
                  { size: this.getSize(), type: e.DrawLayerType.Paint },
                ),
                outlineLayer: new e.DrawLayer({
                  size: this.getSize(),
                  type: e.DrawLayerType.Outline,
                }),
                selectedLayer: null,
              })
            );
          }),
          (n.hasEdits = function () {
            return (
              !this.getPaintLayer().isEmpty() ||
              !this.getOutlineLayer().isEmpty() ||
              this.getLayers().length > 0 ||
              this.getRotation() !== e ||
              !this.getSize().equals(this.$1.cropFrame.getSize()) ||
              this.getActiveFilter() !==
                o("WAWebMediaEditorUtilsFilters").FilterType.NONE
            );
          }),
          (n.getLayers = function () {
            return this.$1.layers;
          }),
          (n.getLastTextLayer = function () {
            var e = this.getLayers().findLast(function (e) {
              return e instanceof o("WAWebMediaEditorLayersText").TextLayer;
            });
            return e instanceof o("WAWebMediaEditorLayersText").TextLayer
              ? e
              : null;
          }),
          (n.getActiveFilter = function () {
            return this.$1.activeFilter;
          }),
          (n.getPaintLayer = function () {
            return this.$1.paintLayer;
          }),
          (n.getOutlineLayer = function () {
            return this.$1.outlineLayer;
          }),
          (n.getBackground = function () {
            return this.$1.background;
          }),
          (n.getSelectedLayer = function () {
            return this.$1.selectedLayer;
          }),
          (n.getBackgroundColor = function () {
            return this.$1.backgroundColor;
          }),
          (n.getTintColor = function () {
            return this.$1.tintColor;
          }),
          (n.getSize = function () {
            return this.$1.frame.getSize();
          }),
          (n.getFrame = function () {
            return this.$1.frame;
          }),
          (n.getWidth = function () {
            return this.$1.frame.getWidth();
          }),
          (n.getHeight = function () {
            return this.$1.frame.getHeight();
          }),
          (n.getCropWidth = function () {
            return this.$1.cropFrame.getWidth();
          }),
          (n.getCropHeight = function () {
            return this.$1.cropFrame.getHeight();
          }),
          (n.getCropOrigin = function () {
            return this.$1.cropFrame.getOrigin();
          }),
          (n.getCropSize = function () {
            return this.$1.cropFrame.getSize();
          }),
          (n.getCropCenter = function () {
            return this.$1.cropFrame.getCenter();
          }),
          (n.getScreenWidth = function () {
            return this.getRotation() % 180 === 0
              ? this.getCropWidth()
              : this.getCropHeight();
          }),
          (n.getScreenHeight = function () {
            return this.getRotation() % 180 === 0
              ? this.getCropHeight()
              : this.getCropWidth();
          }),
          (n.getCanvasCenter = function () {
            return new (r("WAWebMediaEditorGeometryPoint"))({
              x: this.getWidth() / 2,
              y: this.getHeight() / 2,
            });
          }),
          (n.getRotation = function () {
            return this.$1.rotation;
          }),
          (n.getSending = function () {
            return this.$1.sending;
          }),
          (n.getId = function () {
            return this.$1.id;
          }),
          (n.toScreenPoint = function (t) {
            var e,
              n = Math.max(this.getWidth(), this.getHeight()),
              o = new (e = r("WAWebMediaEditorGeometryPoint"))({
                x: n / 2,
                y: n / 2,
              }),
              a = new e({
                x: t.getX() + (n - this.getWidth()) / 2,
                y: t.getY() + (n - this.getHeight()) / 2,
              }),
              i = a.rotate(o, this.getRotation()),
              l = new e({
                x: this.getCropCenter().getX() + (n - this.getWidth()) / 2,
                y: this.getCropCenter().getY() + (n - this.getHeight()) / 2,
              }),
              s = l.rotate(o, this.getRotation()),
              u = new e({
                x: s.getX() - this.getScreenWidth() / 2,
                y: s.getY() - this.getScreenHeight() / 2,
              });
            return new e({ x: i.getX() - u.getX(), y: i.getY() - u.getY() });
          }),
          (n.toCanvasPoint = function (t) {
            var e,
              n = Math.max(this.getWidth(), this.getHeight()),
              o = new (e = r("WAWebMediaEditorGeometryPoint"))({
                x: n / 2,
                y: n / 2,
              }),
              a = this.getCropCenter().rotate(o, this.getRotation()),
              i = new e({
                x: a.getX() - this.getScreenWidth() / 2,
                y: a.getY() - this.getScreenHeight() / 2,
              }),
              l = new e({ x: t.getX() + i.getX(), y: t.getY() + i.getY() }),
              s = l.rotate(o, -this.getRotation());
            return new e({ x: s.getX(), y: s.getY() });
          }),
          (n.resetCropRotate = function () {
            return this.setRotation(0).setCrop(
              new (r("WAWebMediaEditorGeometryPoint"))({ x: 0, y: 0 }),
              new (r("WAWebMediaEditorGeometrySize"))({
                width: this.getWidth(),
                height: this.getHeight(),
              }),
            );
          }),
          (n.isRotated = function () {
            return this.getRotation() !== 0;
          }),
          (n.isCropped = function () {
            return (
              !this.getCropOrigin().equals(
                new (r("WAWebMediaEditorGeometryPoint"))({ x: 0, y: 0 }),
              ) || !this.getCropSize().equals(this.getSize())
            );
          }),
          (n.isOutlined = function () {
            return !this.getOutlineLayer().isEmpty();
          }),
          t
        );
      })();
    l.default = s;
  },
  98,
);
