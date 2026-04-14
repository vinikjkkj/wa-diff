__d(
  "WAWebMediaEditorCanvasLayer.react",
  [
    "ReactKonva",
    "WAWebMediaEditorCanvasBlur.react",
    "WAWebMediaEditorCanvasContext",
    "WAWebMediaEditorCanvasHoveredState.react",
    "WAWebMediaEditorCanvasImage.react",
    "WAWebMediaEditorCanvasOutline.react",
    "WAWebMediaEditorCanvasPaint",
    "WAWebMediaEditorCanvasSelectedState.react",
    "WAWebMediaEditorCanvasShape.react",
    "WAWebMediaEditorCanvasText.react",
    "WAWebMediaEditorGeometryRect",
    "WAWebMediaEditorLayersDraw",
    "WAWebMediaEditorLayersImage",
    "WAWebMediaEditorLayersShape",
    "WAWebMediaEditorLayersText",
    "WAWebMediaEditorUtilsKonva",
    "WAWebMediaEditorUtilsRemoveBoundBoxRotation",
    "react",
    "useMergeRefs",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = e,
      c = u.useCallback,
      d = u.useContext,
      m = u.useEffect,
      p = u.useState,
      _ = [0, 45, 90, 135, 180, 225, 270, 315],
      f = 36,
      g = 18,
      h = 5,
      y = 40,
      C = 0;
    function b(e) {
      var t,
        n,
        a,
        i,
        l = e.activeFilter,
        u = e.canvasRotation,
        b = e.editable,
        v = e.editing,
        S = e.hidden,
        R = e.layer,
        L = e.lineArrowGroupRef,
        E = e.onDoubleClick,
        k = e.onDragEnd,
        I = e.onDragMove,
        T = e.onDragStart,
        D = e.onPointsChange,
        x = e.onSelect,
        $ = e.onTransformEnd,
        P = e.onTransformStart,
        N = e.scale,
        M = e.selected,
        w = e.selectedGroupRef,
        A = e.selectedNodeRef,
        F = e.sending,
        O = e.stageHeight,
        B = e.stageWidth,
        W = e.textBackgroundShadow,
        q = e.transformerRef,
        U = p(!1),
        V = U[0],
        H = U[1],
        G = p(null),
        z = G[0],
        j = G[1],
        K = d(o("WAWebMediaEditorCanvasContext").CanvasContext),
        Q = r("useMergeRefs")(w, A),
        X = R instanceof o("WAWebMediaEditorLayersShape").ShapeLayer,
        Y =
          R instanceof o("WAWebMediaEditorLayersShape").ShapeLayer &&
          R.isBlur(),
        J =
          R instanceof o("WAWebMediaEditorLayersShape").ShapeLayer &&
          (R.isBlur() || R.isRectangle() || R.isCircle()),
        Z =
          R instanceof o("WAWebMediaEditorLayersShape").ShapeLayer &&
          (R.isLine() || R.isArrow()),
        ee =
          R instanceof o("WAWebMediaEditorLayersImage").ImageLayer &&
          (R.isSticker() || R.isBackground()),
        te = R.getFrame().getCenter(),
        ne = (t = z == null ? void 0 : z.getX()) != null ? t : R.getX(),
        re = (n = z == null ? void 0 : z.getY()) != null ? n : R.getY(),
        oe = (a = z == null ? void 0 : z.getWidth()) != null ? a : R.getWidth(),
        ae =
          (i = z == null ? void 0 : z.getHeight()) != null ? i : R.getHeight(),
        ie = h;
      (ee && (ie = y), X && (ie = C));
      var le = function (t) {
          !R.getEditable() ||
            K.dragging ||
            K.transforming ||
            ((t.cancelBubble = !0),
            (t.target.getStage().container().style.cursor = "pointer"),
            H(!0));
        },
        se = function (t) {
          R.getEditable() &&
            ((t.cancelBubble = !0),
            (t.target.getStage().container().style.cursor = ""),
            H(!1));
        },
        ue = function (t) {
          Z && me();
          var e = o("WAWebMediaEditorUtilsKonva").getPointFromGroup(t);
          (k(R, e), X && j(null));
        },
        ce = function (t) {
          if (Z) me();
          else if (J) {
            var e = t.target;
            j(
              r("WAWebMediaEditorGeometryRect").create({
                x: e.x(),
                y: e.y(),
                width: R.getWidth(),
                height: R.getHeight(),
                rotation: R.getRotation(),
                scale: R.getScale(),
              }),
            );
          }
          Y || I(R, t);
        },
        de = c(
          function (e) {
            var t = 0,
              n = 0,
              a = 0,
              i = 0,
              l = 0,
              s = 0;
            e
              ? ((t = e[0]),
                (n = e[1]),
                (a = e[2]),
                (i = e[3]),
                (l = e[4]),
                (s = e[5]))
              : R instanceof o("WAWebMediaEditorLayersShape").ShapeLayer &&
                ((t = R.getPoints()[0]),
                (n = R.getPoints()[1]),
                (a = R.getPoints()[2]),
                (i = R.getPoints()[3]),
                (l = R.getPoints()[4]),
                (s = R.getPoints()[5]));
            var u = Math.min(t, a, l),
              c = Math.min(n, i, s),
              d = Math.max(t, a, l),
              m = Math.max(n, i, s),
              p = d - u,
              _ = m - c,
              f = u,
              g = c,
              h = r("WAWebMediaEditorGeometryRect").create({
                x: f,
                y: g,
                width: p,
                height: _,
                rotation: 0,
                scale: { x: 1, y: 1 },
              });
            j(h);
          },
          [R],
        ),
        me = function () {
          var e,
            t = (e = L.current) == null ? void 0 : e.find("Circle");
          if ((t == null ? void 0 : t.length) === 3) {
            var n = [
              t[0].x(),
              t[0].y(),
              t[1].x(),
              t[1].y(),
              t[2].x(),
              t[2].y(),
            ];
            de(n);
          }
        },
        pe = function (t) {
          R instanceof o("WAWebMediaEditorLayersShape").ShapeLayer && D(R, t);
        },
        _e = function (t) {
          if (M) {
            var e = o("WAWebMediaEditorUtilsKonva").getRotationFromGroup(t),
              n = o("WAWebMediaEditorUtilsKonva").getScaleFromGroup(t);
            ($(R, e, n, z), J && j(null));
          }
        },
        fe = function (t) {
          if (!(!M || !J)) {
            var e = t.target;
            Y &&
              (e.width(e.width() * e.scaleX()),
              e.height(e.height() * e.scaleY()),
              e.scaleX(1),
              e.scaleY(1));
            var n = r("WAWebMediaEditorGeometryRect").create(
              babelHelpers.extends(
                {
                  x: e.x() - oe / 2,
                  y: e.y() - ae / 2,
                  width: e.width(),
                  height: e.height(),
                  rotation: e.rotation(),
                  scale: { x: e.scaleX(), y: e.scaleY() },
                },
                Y && { x: ne + e.x(), y: re + e.y(), scale: R.getScale() },
              ),
            );
            (Y && (e.x(0), e.y(0)), j(n));
          }
        },
        ge = function (t) {
          R.getEditable() && ((t.cancelBubble = !0), x(R));
        },
        he = function (t) {
          if (Z) return t;
          var e = { x: { min: 0, max: B }, y: { min: 0, max: O } },
            n = Y ? 1 : 2;
          return (
            Y &&
              (u === 0
                ? ((e.x.max -= (oe * N.x) / n), (e.y.max -= (ae * N.y) / n))
                : u === 90
                  ? ((e.x.min += (ae * N.x) / n), (e.y.max -= (oe * N.y) / n))
                  : u === 180
                    ? ((e.x.min += (oe * N.x) / n), (e.y.min += (ae * N.y) / n))
                    : ((e.x.max -= (ae * N.x) / n),
                      (e.y.min += (oe * N.y) / n))),
            (t.x = Math.max(e.x.min, Math.min(t.x, e.x.max))),
            (t.y = Math.max(e.y.min, Math.min(t.y, e.y.max))),
            t
          );
        },
        ye,
        Ce,
        be,
        ve;
      if (b && M && !v && !F) {
        Ce = s.jsx(r("WAWebMediaEditorCanvasSelectedState.react"), {
          layer: R,
          borderRadius: ie,
          frame: z,
        });
        var Se = function (t, n) {
          var e = n.width / N.x,
            a = n.height / N.y;
          if (
            (R instanceof o("WAWebMediaEditorLayersText").TextLayer &&
              (e <= g || a <= g)) ||
            e <= f ||
            a <= f
          )
            return t;
          if (Y) {
            (r("WAWebMediaEditorUtilsRemoveBoundBoxRotation")(n, u),
              r("WAWebMediaEditorUtilsRemoveBoundBoxRotation")(t, u));
            var i = {
              x: { min: 0, max: B - n.width },
              y: { min: 0, max: O - n.height },
            };
            (n.x < i.x.min
              ? ((n.width -= i.x.min - n.x), (n.x = i.x.min))
              : n.x > i.x.max && (n.width -= n.x - i.x.max),
              n.y < i.y.min
                ? ((n.height -= i.y.min - n.y), (n.y = i.y.min))
                : n.y > i.y.max && (n.height -= n.y - i.y.max),
              r("WAWebMediaEditorUtilsRemoveBoundBoxRotation")(n, u, !0),
              r("WAWebMediaEditorUtilsRemoveBoundBoxRotation")(t, u, !0));
          }
          return n;
        };
        ve =
          !Z &&
          s.jsx(
            o("ReactKonva").Transformer,
            {
              ref: q,
              anchorStroke: "black",
              anchorFill: "white",
              anchorSize: 8,
              anchorCornerRadius: 4,
              borderEnabled: !1,
              centeredScaling: !X,
              enabledAnchors: X
                ? [
                    "top-left",
                    "top-center",
                    "top-right",
                    "middle-left",
                    "middle-right",
                    "bottom-left",
                    "bottom-center",
                    "bottom-right",
                  ]
                : ["bottom-right"],
              resizeEnabled: !0,
              rotateAnchorOffset: 12,
              rotateEnabled: !Y,
              rotationSnaps: _,
              ignoreStroke: !0,
              rotationSnapTolerance: 10,
              boundBoxFunc: Se,
              keepRatio: !J,
            },
            "transformer",
          );
      }
      (b &&
        V &&
        !M &&
        !F &&
        (be = s.jsx(r("WAWebMediaEditorCanvasHoveredState.react"), {
          layer: R,
          borderRadius: ie,
          frame: z,
        })),
        R instanceof o("WAWebMediaEditorLayersImage").ImageLayer
          ? (ye = s.jsx(r("WAWebMediaEditorCanvasImage.react"), { layer: R }))
          : R instanceof o("WAWebMediaEditorLayersShape").ShapeLayer &&
              R.isBlur()
            ? (ye = s.jsx(r("WAWebMediaEditorCanvasBlur.react"), {
                layer: R,
                scale: N,
                frame: z,
                selectedNodeRef: M ? A : null,
                showPadding: K.canEditBackground,
                onTransformStart: function () {
                  return P(R);
                },
                onTransformEnd: _e,
                onTransform: fe,
                activeFilter: l,
              }))
            : R instanceof o("WAWebMediaEditorLayersShape").ShapeLayer &&
                !R.isBlur()
              ? (ye = s.jsx(r("WAWebMediaEditorCanvasShape.react"), {
                  layer: R,
                  selected: M,
                  onPointsChange: pe,
                  canvasScale: N.x,
                  stageWidth: B,
                  stageHeight: O,
                }))
              : R instanceof o("WAWebMediaEditorLayersDraw").DrawLayer
                ? R.getType() ===
                  o("WAWebMediaEditorLayersDraw").DrawLayerType.Paint
                  ? (ye = s.jsx(r("WAWebMediaEditorCanvasPaint"), { layer: R }))
                  : R.getType() ===
                      o("WAWebMediaEditorLayersDraw").DrawLayerType.Outline &&
                    (ye = s.jsx(
                      o("WAWebMediaEditorCanvasOutline.react").Outline,
                      { layer: R },
                    ))
                : R instanceof o("WAWebMediaEditorLayersText").TextLayer &&
                  !v &&
                  (ye = s.jsx(r("WAWebMediaEditorCanvasText.react"), {
                    layer: R,
                    shadow: W,
                  })),
        S &&
          (ye = s.jsx(o("ReactKonva").Rect, {
            width: R.getWidth(),
            height: R.getHeight(),
          })),
        m(
          function () {
            (Z && de(), v && H(!1));
          },
          [v, H, de, Z],
        ));
      var Re = null;
      M && (Y ? (Re = w) : Z ? (Re = L) : (Re = Q));
      var Le, Ee, ke, Ie;
      return (
        Y
          ? ((Le = ne), (Ee = re), (ke = 0), (Ie = 0))
          : Z ||
            ((Le = te.getX()), (Ee = te.getY()), (ke = oe / 2), (Ie = ae / 2)),
        s.jsxs(s.Fragment, {
          children: [
            s.jsxs(o("ReactKonva").Group, {
              ref: Re,
              x: Le,
              y: Ee,
              offsetX: ke,
              offsetY: Ie,
              width: oe,
              height: ae,
              rotation: R.getRotation(),
              scaleX: R.getScale().x,
              scaleY: R.getScale().y,
              draggable: b,
              dragBoundFunc: he,
              onMouseEnter: le,
              onMouseLeave: se,
              onMouseDown: ge,
              onDblClick: function () {
                return E(R);
              },
              onDragStart: function () {
                return T(R);
              },
              onDragEnd: ue,
              onDragMove: ce,
              onTransformStart: function () {
                return P(R);
              },
              onTransformEnd: _e,
              onTransform: fe,
              children: [Ce, ye, be],
            }),
            ve,
          ],
        })
      );
    }
    ((b.displayName = b.name + " [from " + i.id + "]"), (l.default = b));
  },
  98,
);
