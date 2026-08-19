__d(
  "WAWebMediaEditorData",
  [
    "WADeepEquals",
    "WAWebMediaEditorEnumsFonts",
    "WAWebMediaEditorGeometryPoint",
    "WAWebMediaEditorGeometryRect",
    "WAWebMediaEditorGeometrySize",
    "WAWebMediaEditorLayersDraw",
    "WAWebMediaEditorLayersImage",
    "WAWebMediaEditorLayersShape",
    "WAWebMediaEditorLayersText",
    "WAWebMediaEditorUtilsFilterType",
    "WAWebMediaEditorUtilsGetDominantColor",
    "cr:10202",
    "err",
    "gkx",
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
            activeFilter: o("WAWebMediaEditorUtilsFilterType").FilterType.NONE,
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
        var a = t.prototype;
        return (
          (a.$2 = function (a) {
            var e = babelHelpers.extends({}, this.$1);
            if (
              (a.layers != null && (e.layers = a.layers),
              a.paintLayer !== void 0 && (e.paintLayer = a.paintLayer),
              a.outlineLayer !== void 0 && (e.outlineLayer = a.outlineLayer),
              a.background !== void 0 && (e.background = a.background),
              a.frame !== void 0 &&
                ((e.frame = a.frame),
                e.frame &&
                  (e.cropFrame = e.cropFrame.updateXYWidthHeight({
                    x: 0,
                    y: 0,
                    width: e.frame.getWidth(),
                    height: e.frame.getHeight(),
                  }))),
              a.cropFrame !== void 0 && (e.cropFrame = a.cropFrame),
              a.selectedLayer !== void 0)
            ) {
              if (r("gkx")("16539")) {
                var i =
                  n("cr:10202") == null
                    ? void 0
                    : n("cr:10202").getMediaEditorDebug();
                i && (i.selectedLayer = a.selectedLayer);
              }
              e.selectedLayer = a.selectedLayer;
            }
            return (
              a.backgroundColor != null &&
                (e.backgroundColor = a.backgroundColor),
              a.tintColor != null && (e.tintColor = a.tintColor),
              a.rotation != null && (e.rotation = a.rotation),
              a.activeFilter != null && (e.activeFilter = a.activeFilter),
              a.sending != null && (e.sending = a.sending),
              o("WADeepEquals").deepEqual(this.$1, e) ? this : new t(e)
            );
          }),
          (a.updateLayer = function (t, n) {
            if (
              (t instanceof o("WAWebMediaEditorLayersText").TextLayer &&
                !(n instanceof o("WAWebMediaEditorLayersText").TextLayer)) ||
              (t instanceof o("WAWebMediaEditorLayersImage").ImageLayer &&
                !(n instanceof o("WAWebMediaEditorLayersImage").ImageLayer))
            ) {
              var e = new TypeError(
                "MediaEditorData: calling _updateLayer with two different layer types",
              );
              throw (e.stack, e);
            }
            if (t === n) return this;
            var r = this.getLayers().map(function (e) {
                return e === t ? n : e;
              }),
              a = this.getSelectedLayer();
            return (
              a === t && (a = n),
              this.$2({ layers: r, selectedLayer: a })
            );
          }),
          (a.setBackground = function (t, n) {
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
          (a.updateBackground = function (t) {
            var e,
              n = t.image,
              r = t.origin,
              o = t.rotation,
              a = t.scale,
              i =
                (e = this.getBackground()) == null
                  ? void 0
                  : e.setImage(n).setOrigin(r).setRotation(o).setScale(a);
            return this.$2({
              background: i,
              selectedLayer: i,
            }).setShapeLayerBackground(i == null ? void 0 : i.getFrame(), n);
          }),
          (a.addImageLayer = function (t) {
            var e = o("WAWebMediaEditorLayersImage").ImageLayer.create(t),
              n = [].concat(this.getLayers(), [e]);
            return this.$2({ layers: n, selectedLayer: e });
          }),
          (a.addImageLayerToCenter = function (t) {
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
          (a.addShapeLayer = function (t) {
            var e = o("WAWebMediaEditorLayersShape").ShapeLayer.create(t),
              n = [].concat(this.getLayers(), [e]);
            return this.$2({ layers: n, selectedLayer: e });
          }),
          (a.addShapeLayerToCenter = function (t) {
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
          (a.setShapeLayerBackground = function (t, n) {
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
          (a.addTextLayer = function (t) {
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
          (a.setText = function (t, n) {
            return this.updateLayer(t, t.setText(n));
          }),
          (a.setTextColor = function (t, n) {
            return this.updateLayer(t, t.setTextColor(n));
          }),
          (a.setTextBackground = function (t, n) {
            return this.updateLayer(t, t.setTextBackground(n));
          }),
          (a.setFont = function (t, n) {
            return this.updateLayer(t, t.setFont(n));
          }),
          (a.setAlignment = function (t, n) {
            return this.updateLayer(t, t.setAlignment(n));
          }),
          (a.setBlurMode = function (t, n) {
            return this.updateLayer(t, t.setBlurMode(n));
          }),
          (a.setShapeFillColor = function (t, n) {
            return this.updateLayer(t, t.setFillColor(n));
          }),
          (a.setShapeStrokeColor = function (t, n) {
            return this.updateLayer(t, t.setStrokeColor(n));
          }),
          (a.setShapeStrokeWidth = function (t, n) {
            return this.updateLayer(t, t.setStrokeWidth(n));
          }),
          (a.setShapeRadius = function (t, n) {
            return this.updateLayer(t, t.setShapeRadius(n));
          }),
          (a.setShapeBackgroundFrame = function (t, n) {
            return this.updateLayer(t, t.setShapeBackgroundFrame(n));
          }),
          (a.setRotation = function (t) {
            if (t % 90 !== 0)
              throw r("err")(
                "canvas can only be rotated at a 90 degrees interval",
              );
            return this.$2({ rotation: t % 360 });
          }),
          (a.setCrop = function (t, n) {
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
          (a.setActiveFilter = function (t) {
            return this.$2({ activeFilter: t });
          }),
          (a.setSending = function (t) {
            return this.$2({ sending: t });
          }),
          (a.addEmptyTextLayer = function (t, n) {
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
          (a.addPaintPath = function (t) {
            var e = this.getPaintLayer().addPath(t);
            return this.$2({ paintLayer: e });
          }),
          (a.addOutlinePath = function (t) {
            var e = this.getOutlineLayer().addPath(t);
            return this.$2({ outlineLayer: e });
          }),
          (a.clearOutlinePaths = function () {
            var e = this.getOutlineLayer().clearPaths();
            return this.$2({ outlineLayer: e });
          }),
          (a.translateLayer = function (t, n) {
            return this.updateLayer(t, t.setOrigin(n));
          }),
          (a.translateBackground = function (t) {
            var e,
              n = (e = this.getBackground()) == null ? void 0 : e.setOrigin(t);
            return this.$2({
              background: n,
              selectedLayer: n,
            }).setShapeLayerBackground(n == null ? void 0 : n.getFrame());
          }),
          (a.transformLayer = function (t) {
            var e = t.frame,
              n = t.layer,
              r = t.rotation,
              a = t.scale,
              i = n;
            return (
              e != null &&
                n instanceof o("WAWebMediaEditorLayersShape").ShapeLayer &&
                (i = n.setFrame(e)),
              (i = i.setRotation(r).setScale(a)),
              this.updateLayer(n, i)
            );
          }),
          (a.transformBackground = function (t, n) {
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
          (a.setSelectedLayer = function (t) {
            return this.$2({ selectedLayer: t });
          }),
          (a.clearSelectedLayer = function () {
            return this.$2({ selectedLayer: null });
          }),
          (a.deleteLayer = function (t) {
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
          (a.deleteAllLayers = function () {
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
          (a.hasEdits = function () {
            return (
              !this.getPaintLayer().isEmpty() ||
              !this.getOutlineLayer().isEmpty() ||
              this.getLayers().length > 0 ||
              this.getRotation() !== e ||
              !this.getSize().equals(this.$1.cropFrame.getSize()) ||
              this.getActiveFilter() !==
                o("WAWebMediaEditorUtilsFilterType").FilterType.NONE
            );
          }),
          (a.getLayers = function () {
            return this.$1.layers;
          }),
          (a.getLastTextLayer = function () {
            var e = this.getLayers().findLast(function (e) {
              return e instanceof o("WAWebMediaEditorLayersText").TextLayer;
            });
            return e instanceof o("WAWebMediaEditorLayersText").TextLayer
              ? e
              : null;
          }),
          (a.getActiveFilter = function () {
            return this.$1.activeFilter;
          }),
          (a.getPaintLayer = function () {
            return this.$1.paintLayer;
          }),
          (a.getOutlineLayer = function () {
            return this.$1.outlineLayer;
          }),
          (a.getBackground = function () {
            return this.$1.background;
          }),
          (a.getSelectedLayer = function () {
            return this.$1.selectedLayer;
          }),
          (a.getBackgroundColor = function () {
            return this.$1.backgroundColor;
          }),
          (a.getTintColor = function () {
            return this.$1.tintColor;
          }),
          (a.getSize = function () {
            return this.$1.frame.getSize();
          }),
          (a.getFrame = function () {
            return this.$1.frame;
          }),
          (a.getWidth = function () {
            return this.$1.frame.getWidth();
          }),
          (a.getHeight = function () {
            return this.$1.frame.getHeight();
          }),
          (a.getCropWidth = function () {
            return this.$1.cropFrame.getWidth();
          }),
          (a.getCropHeight = function () {
            return this.$1.cropFrame.getHeight();
          }),
          (a.getCropOrigin = function () {
            return this.$1.cropFrame.getOrigin();
          }),
          (a.getCropSize = function () {
            return this.$1.cropFrame.getSize();
          }),
          (a.getCropCenter = function () {
            return this.$1.cropFrame.getCenter();
          }),
          (a.getScreenWidth = function () {
            return this.getRotation() % 180 === 0
              ? this.getCropWidth()
              : this.getCropHeight();
          }),
          (a.getScreenHeight = function () {
            return this.getRotation() % 180 === 0
              ? this.getCropHeight()
              : this.getCropWidth();
          }),
          (a.getCanvasCenter = function () {
            return new (r("WAWebMediaEditorGeometryPoint"))({
              x: this.getWidth() / 2,
              y: this.getHeight() / 2,
            });
          }),
          (a.getRotation = function () {
            return this.$1.rotation;
          }),
          (a.getSending = function () {
            return this.$1.sending;
          }),
          (a.getId = function () {
            return this.$1.id;
          }),
          (a.toScreenPoint = function (t) {
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
          (a.toCanvasPoint = function (t) {
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
          (a.resetCropRotate = function () {
            return this.setRotation(0).setCrop(
              new (r("WAWebMediaEditorGeometryPoint"))({ x: 0, y: 0 }),
              new (r("WAWebMediaEditorGeometrySize"))({
                width: this.getWidth(),
                height: this.getHeight(),
              }),
            );
          }),
          (a.isRotated = function () {
            return this.getRotation() !== 0;
          }),
          (a.isCropped = function () {
            return (
              !this.getCropOrigin().equals(
                new (r("WAWebMediaEditorGeometryPoint"))({ x: 0, y: 0 }),
              ) || !this.getCropSize().equals(this.getSize())
            );
          }),
          (a.isOutlined = function () {
            return !this.getOutlineLayer().isEmpty();
          }),
          t
        );
      })();
    l.default = s;
  },
  98,
);
