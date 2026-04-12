__d(
  "WAWebMediaEditorCanvas.react",
  [
    "ReactKonva",
    "WAWebBoolFunc",
    "WAWebMediaEditorCanvasBackground.react",
    "WAWebMediaEditorCanvasContext",
    "WAWebMediaEditorCanvasEditableText.react",
    "WAWebMediaEditorCanvasLayer.react",
    "WAWebMediaEditorCanvasOutlineOverlay.react",
    "WAWebMediaEditorCanvasPaintOverlay.react",
    "WAWebMediaEditorCanvasTransparentGrid.react",
    "WAWebMediaEditorEnumsThickness",
    "WAWebMediaEditorLayersShape",
    "WAWebMediaEditorLayersText",
    "WAWebMediaEditorUtilsColor",
    "WAWebMediaEditorUtilsKonva",
    "WAWebNoop",
    "err",
    "lodash",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e = ["ref"],
      s,
      u = s || (s = o("react")),
      c = s,
      d = c.useEffect,
      m = c.useImperativeHandle,
      p = c.useRef,
      _ = c.useState,
      f = 15,
      g = 1,
      h = "#52F818";
    function y(e) {
      var t = e.canEditBackground,
        n = e.canEditLayer,
        r = e.canvasContextRef,
        a = e.currentlyEditingTextLayer,
        i = e.data,
        l = e.dragging,
        s = e.hoveredFilter,
        c = e.inFilterMode,
        d = e.inOutlineMode,
        m = e.inPaintMode,
        p = e.isEditingBackground,
        _ = e.lineArrowGroupRef,
        f = e.onDoubleClick,
        g = e.onDragEnd,
        h = e.onDragMove,
        y = e.onDragStart,
        C = e.onPointsChange,
        v = e.onSelect,
        S = e.onTransformEnd,
        R = e.onTransformStart,
        L = e.scale,
        E = e.selectedGroupRef,
        k = e.selectedNodeRef,
        I = e.transformerRef,
        T = !1,
        D = {
          data: i,
          scale: L,
          dragging: l,
          canEditLayer: n,
          hoveredFilter: s,
          inFilterMode: c,
          inOutlineMode: d,
          inPaintMode: m,
          currentlyEditingTextLayer: a,
          lineArrowGroupRef: _,
          selectedGroupRef: E,
          selectedNodeRef: k,
          transformerRef: I,
          onPointsChange: C,
          onSelect: v,
          onDoubleClick: f,
          onDragMove: h,
          onDragStart: y,
          onDragEnd: g,
          onTransformStart: R,
          onTransformEnd: S,
        },
        x = i.getBackground();
      return u.jsxs(u.Fragment, {
        children: [
          t &&
            x &&
            u.jsx(b, babelHelpers.extends({ layer: x, hidden: !p() }, D)),
          !p() &&
            i
              .getLayers()
              .filter(function (e) {
                return (
                  e instanceof o("WAWebMediaEditorLayersShape").ShapeLayer &&
                  e.isBlur()
                );
              })
              .map(function (e) {
                return u.jsx(
                  b,
                  babelHelpers.extends({ layer: e, hidden: T }, D),
                  String(e.getId()),
                );
              }),
          !p() &&
            i
              .getLayers()
              .filter(function (e) {
                return (
                  e instanceof o("WAWebMediaEditorLayersShape").ShapeLayer &&
                  !e.isBlur()
                );
              })
              .map(function (e) {
                return u.jsx(
                  b,
                  babelHelpers.extends({ layer: e, hidden: T }, D),
                  String(e.getId()),
                );
              }),
          i.getPaintLayer() &&
            u.jsx(
              b,
              babelHelpers.extends({ layer: i.getPaintLayer(), hidden: T }, D),
            ),
          i
            .getLayers()
            .filter(function (e) {
              return !(
                e instanceof o("WAWebMediaEditorLayersShape").ShapeLayer
              );
            })
            .map(function (e) {
              return u.jsx(
                b,
                babelHelpers.extends({ layer: e, hidden: T }, D),
                String(e.getId()),
              );
            }),
        ],
      });
    }
    y.displayName = y.name + " [from " + i.id + "]";
    function C(e) {
      var t = e.getStage,
        n = e.guides,
        r = e.guidesLayerRef,
        a = e.scale,
        i = n.horizontal,
        l = n.vertical;
      if (!l && !i) return null;
      var s = t();
      return u.jsxs(
        o("ReactKonva").Layer,
        {
          ref: r,
          children: [
            l &&
              u.jsx(
                o("ReactKonva").Line,
                {
                  x: l.position / a.x,
                  y: 0,
                  points: [0, 0, 0, s.height() / a.y],
                  stroke: h,
                  strokeWidth: g,
                  strokeScaleEnabled: !1,
                },
                "vertical",
              ),
            i &&
              u.jsx(
                o("ReactKonva").Line,
                {
                  x: 0,
                  y: i.position / a.y,
                  points: [0, 0, s.width() / a.x, 0],
                  stroke: h,
                  strokeWidth: g,
                  strokeScaleEnabled: !1,
                },
                "horizontal",
              ),
          ],
        },
        "guides",
      );
    }
    C.displayName = C.name + " [from " + i.id + "]";
    function b(e) {
      var t = e.canEditLayer,
        n = e.currentlyEditingTextLayer,
        o = e.data,
        a = e.dragging,
        i = e.hidden,
        l = e.hoveredFilter,
        s = e.inFilterMode,
        c = e.inOutlineMode,
        d = e.inPaintMode,
        m = e.layer,
        p = e.lineArrowGroupRef,
        _ = e.onDoubleClick,
        f = e.onDragEnd,
        g = e.onDragMove,
        h = e.onDragStart,
        y = e.onPointsChange,
        C = e.onSelect,
        b = e.onTransformEnd,
        v = e.onTransformStart,
        S = e.scale,
        R = e.selectedGroupRef,
        L = e.selectedNodeRef,
        E = e.transformerRef,
        k = o.getScreenWidth() * S.x,
        I = o.getScreenHeight() * S.y,
        T = m.getEditable() && t && !s && !c && !d && !n,
        D = o.getSelectedLayer() === m && n !== m && T;
      return u.jsx(
        r("WAWebMediaEditorCanvasLayer.react"),
        {
          activeFilter: l != null ? l : o.getActiveFilter(),
          layer: m,
          scale: S,
          canvasRotation: o.getRotation(),
          textBackgroundShadow: !a,
          editable: T,
          editing: n === m,
          selected: D,
          sending: o.getSending(),
          stageHeight: I,
          stageWidth: k,
          lineArrowGroupRef: p,
          selectedGroupRef: function (t) {
            R.current = t;
          },
          selectedNodeRef: L,
          transformerRef: function (t) {
            E.current = t;
          },
          onPointsChange: y,
          onSelect: C,
          onDoubleClick: _,
          onDragMove: g,
          onDragStart: h,
          onDragEnd: f,
          onTransformStart: v,
          onTransformEnd: b,
          hidden: i,
        },
        String(m.getId()),
      );
    }
    b.displayName = b.name + " [from " + i.id + "]";
    function v(e) {
      var t = e.data,
        n = e.draftTextLayer,
        o = e.editableTextRef,
        a = e.onLayerUnselect,
        i = e.onTextInputOutsideClick,
        l = e.onTextSave,
        s = e.scale;
      if (!n) return null;
      var c = t.toScreenPoint(n.getFrame().getCenter());
      return u.jsx(r("WAWebMediaEditorCanvasEditableText.react"), {
        ref: o,
        layer: n,
        layerCenter: c,
        text: n.getText(),
        scale: s,
        onSave: l,
        onUnselect: a,
        onOutsideClick: i,
      });
    }
    v.displayName = v.name + " [from " + i.id + "]";
    function S(t) {
      var n,
        a = t.ref,
        i = babelHelpers.objectWithoutPropertiesLoose(t, e),
        l = i.hoveredFilter,
        s = l === void 0 ? null : l,
        c = i.inFilterMode,
        g = c === void 0 ? !1 : c,
        h = i.inOutlineMode,
        b = h === void 0 ? !1 : h,
        S = i.inPaintMode,
        R = S === void 0 ? !1 : S,
        L = i.paintColor,
        E = L === void 0 ? o("WAWebMediaEditorUtilsColor").Color.White : L,
        k = i.paintThickness,
        I =
          k === void 0
            ? o("WAWebMediaEditorEnumsThickness").ThicknessType.MEDIUM
            : k,
        T = i.outlineSmoothing,
        D = T === void 0 ? !0 : T,
        x = i.canEditLayer,
        $ = x === void 0 ? !0 : x,
        P = i.canEditBackground,
        N = P === void 0 ? !1 : P,
        M = i.outlineEnabled,
        w = M === void 0 ? !1 : M,
        A = i.currentlyEditingTextLayer,
        F = A === void 0 ? null : A,
        O = i.draftTextLayer,
        B = O === void 0 ? null : O,
        W = i.onPointsChange,
        q = W === void 0 ? r("WAWebNoop") : W,
        U = i.onLayerSelect,
        V = U === void 0 ? r("WAWebNoop") : U,
        H = i.onLayerUnselect,
        G = H === void 0 ? r("WAWebNoop") : H,
        z = i.onLayerTranslate,
        j = z === void 0 ? r("WAWebNoop") : z,
        K = i.onLayerTransform,
        Q = K === void 0 ? r("WAWebNoop") : K,
        X = i.onTextEditingStart,
        Y = X === void 0 ? r("WAWebNoop") : X,
        J = i.onTextEditingEnd,
        Z = J === void 0 ? r("WAWebNoop") : J,
        ee = i.onTextInputOutsideClick,
        te = ee === void 0 ? o("WAWebBoolFunc").returnTrue : ee,
        ne = i.onPaintDrawEnd,
        re = ne === void 0 ? r("WAWebNoop") : ne,
        oe = i.onOutlineDrawEnd,
        ae = oe === void 0 ? r("WAWebNoop") : oe,
        ie = i.onOutlineDone,
        le = ie === void 0 ? r("WAWebNoop") : ie,
        se = i.scale,
        ue = i.data,
        ce = p(null),
        de = p(null),
        me = p(null),
        pe = p(null),
        _e = p(null),
        fe = p(null),
        ge = p(null),
        he = p(null),
        ye = p(null),
        Ce = p(null),
        be = p({
          dragging: !1,
          transforming: !1,
          editing: !1,
          canEditBackground: N,
        }),
        ve = _({ horizontal: null, vertical: null }),
        Se = ve[0],
        Re = ve[1],
        Le = _(null),
        Ee = Le[0],
        ke = Le[1],
        Ie = _(!1),
        Te = Ie[0],
        De = Ie[1],
        xe = _(!1),
        $e = xe[0],
        Pe = xe[1],
        Ne = _("crosshair"),
        Me = Ne[0],
        we = Ne[1],
        Ae = function () {
          var e, t, n, r, o, a, i, l, s, u;
          ((e = de.current) == null ||
            e.find("Circle").forEach(function (e) {
              e.hide();
            }),
            (t = de.current) == null ||
              (t = t.findOne("Rect")) == null ||
              t.hide(),
            (n = pe.current) == null || n.hide(),
            (r = me.current) == null ||
              (r = r.findOne(".selectedState")) == null ||
              r.hide(),
            (o = me.current) == null ||
              (o = o.findOne(".hoveredState")) == null ||
              o.hide(),
            (a = _e.current) == null || a.hide(),
            (i = ge.current) == null || i.toggleCursor(!1),
            (l = he.current) == null || l.hide(),
            (s = pe.current) == null ||
              (s = s.getLayer()) == null ||
              s.batchDraw(),
            (u = fe.current) == null || u.hide());
        },
        Fe = function () {
          var e, t, n, r, o, a, i, l, s, u;
          ((e = de.current) == null ||
            e.find("Circle").forEach(function (e) {
              e.show();
            }),
            (t = de.current) == null ||
              (t = t.findOne("Rect")) == null ||
              t.show(),
            (n = pe.current) == null || n.show(),
            (r = me.current) == null ||
              (r = r.findOne(".selectedState")) == null ||
              r.show(),
            (o = me.current) == null ||
              (o = o.findOne(".hoveredState")) == null ||
              o.show(),
            (a = _e.current) == null || a.show(),
            (i = ge.current) == null || i.toggleCursor(!0),
            (l = he.current) == null || l.show(),
            (s = pe.current) == null ||
              (s = s.getLayer()) == null ||
              s.batchDraw(),
            (u = fe.current) == null || u.show());
        },
        Oe = function (t) {
          !F && !o("WAWebMediaEditorUtilsKonva").isEventOnAnchor(t) && G();
        },
        Be = function () {
          ((be.current.dragging = !0), De(!0));
        },
        We = function (t, n) {
          ((be.current.dragging = !1),
            j(t, n),
            Re({ vertical: null, horizontal: null }),
            De(!1));
        },
        qe = function () {
          ((be.current.transforming = !0), Pe(!0));
        },
        Ue = function (t, n, r, o) {
          ((be.current.transforming = !1), Q(t, n, r, o), Pe(!1));
        },
        Ve = function () {
          if (!ce.current)
            throw r("err")("MediaEditorCanvas:stage is not initialized");
          return ce.current.getStage();
        },
        He = function (t, n) {
          var e,
            o,
            a,
            i,
            l = [
              { position: Ve().width() / 2, orientation: "v" },
              { position: Ve().height() / 2, orientation: "h" },
            ],
            s = n.target,
            u = s.absolutePosition(),
            c = [
              { position: u.y, orientation: "h" },
              { position: u.x, orientation: "v" },
            ],
            d = [];
          for (var m of c)
            for (var p of l)
              if (m.orientation === p.orientation) {
                var _ = Math.abs(p.position - m.position);
                _ <= f && d.push({ guide: p, distance: _ });
              }
          d.sort(function (e, t) {
            return e.distance - t.distance;
          });
          var g = null,
            h = null;
          for (var y of d) {
            var C = y.guide;
            C.orientation === "v" && !g
              ? (g = C)
              : C.orientation === "h" && !h && (h = C);
          }
          s.absolutePosition({
            x: (e = (o = g) == null ? void 0 : o.position) != null ? e : u.x,
            y: (a = (i = h) == null ? void 0 : i.position) != null ? a : u.y,
          });
          var b = { horizontal: h, vertical: g };
          r("lodash").isEqual(Se, b) || Re(b);
        },
        Ge = function (t) {
          t instanceof o("WAWebMediaEditorLayersText").TextLayer && !g && Y(t);
        },
        ze = function (t) {
          B && Z(B, t);
        },
        je = function (t) {
          V(t);
        },
        Ke = function (t) {
          we(t);
        };
      d(
        function () {
          if (Ee) {
            var e, t;
            ((e = pe.current) == null || e.nodes([Ee]),
              (t = pe.current) == null ||
                (t = t.getLayer()) == null ||
                t.batchDraw());
          }
        },
        void 0,
      );
      var Qe = function () {
          Ae();
          var e = Ve().toDataURL({
            mimeType: "image/png",
            quality: 1,
            pixelRatio: 1 / se.x,
          });
          return (Fe(), e);
        },
        Xe = function () {
          var e;
          return (e = Ce.current) == null ? void 0 : e.toCanvas();
        },
        Ye = function () {
          var e;
          (e = ye.current) == null || e.save();
        },
        Je = function () {
          return (Te || $e) && ue.getSelectedLayer() === ue.getBackground();
        },
        Ze = function () {
          return R ? "none" : b ? Me : "default";
        };
      m(a, function () {
        return {
          getStage: Ve,
          getDataUrl: Qe,
          endTextEditing: Ye,
          getBackground: Xe,
        };
      });
      var et = ue.getScreenWidth() / 2,
        tt = ue.getScreenHeight() / 2,
        nt = ue.toScreenPoint(ue.getCropCenter()),
        rt = ue.toScreenPoint(ue.getCanvasCenter()),
        ot = et - (nt.getX() - rt.getX()),
        at = tt - (nt.getY() - rt.getY());
      return u.jsxs(u.Fragment, {
        children: [
          u.jsx(o("ReactKonva").Stage, {
            ref: ce,
            width: ue.getScreenWidth() * se.x,
            height: ue.getScreenHeight() * se.y,
            onMouseDown: Oe,
            scaleX: se.x,
            scaleY: se.y,
            style: babelHelpers.extends(
              { cursor: Ze() },
              (n = i.style) != null ? n : {},
            ),
            children: u.jsxs(
              o("WAWebMediaEditorCanvasContext").CanvasContext.Provider,
              {
                value: be.current,
                children: [
                  w &&
                    u.jsx(
                      o("ReactKonva").Layer,
                      {
                        x: ot,
                        y: at,
                        offsetX: ue.getWidth() / 2,
                        offsetY: ue.getHeight() / 2,
                        rotation: ue.getRotation(),
                        children: u.jsx(
                          r("WAWebMediaEditorCanvasTransparentGrid.react"),
                          {
                            ref: fe,
                            width: ue.getWidth(),
                            height: ue.getHeight(),
                          },
                        ),
                      },
                      "transparent",
                    ),
                  u.jsx(
                    o("ReactKonva").Layer,
                    {
                      x: ot,
                      y: at,
                      offsetX: ue.getWidth() / 2,
                      offsetY: ue.getHeight() / 2,
                      rotation: ue.getRotation(),
                      children: u.jsx(
                        r("WAWebMediaEditorCanvasBackground.react"),
                        {
                          ref: Ce,
                          layer: ue.getBackground(),
                          outlineLayer: ue.getOutlineLayer(),
                          scale: se,
                          visible: !Je(),
                          activeFilter: s != null ? s : ue.getActiveFilter(),
                        },
                      ),
                    },
                    "background",
                  ),
                  u.jsx(
                    o("ReactKonva").Layer,
                    {
                      x: ot,
                      y: at,
                      offsetX: ue.getWidth() / 2,
                      offsetY: ue.getHeight() / 2,
                      rotation: ue.getRotation(),
                      children: u.jsx(y, {
                        canEditBackground: N,
                        data: ue,
                        scale: se,
                        canvasContextRef: be,
                        isEditingBackground: Je,
                        canEditLayer: $,
                        dragging: Te,
                        hoveredFilter: s,
                        inPaintMode: R,
                        inOutlineMode: b,
                        inFilterMode: g,
                        currentlyEditingTextLayer: F,
                        lineArrowGroupRef: de,
                        selectedGroupRef: me,
                        selectedNodeRef: ke,
                        transformerRef: pe,
                        onPointsChange: q,
                        onSelect: je,
                        onDoubleClick: Ge,
                        onDragMove: He,
                        onDragStart: Be,
                        onDragEnd: We,
                        onTransformStart: qe,
                        onTransformEnd: Ue,
                      }),
                    },
                    "edits",
                  ),
                  u.jsx(C, {
                    guides: Se,
                    scale: se,
                    guidesLayerRef: _e,
                    getStage: Ve,
                  }),
                  R &&
                    u.jsx(r("WAWebMediaEditorCanvasPaintOverlay.react"), {
                      ref: ge,
                      width: ue.getScreenWidth(),
                      height: ue.getScreenHeight(),
                      pathStyle: {
                        color: E,
                        thickness: o(
                          "WAWebMediaEditorEnumsThickness",
                        ).getThicknessValue(I),
                        smoothing: !1,
                      },
                      data: ue,
                      onDrawEnd: re,
                    }),
                  b &&
                    u.jsx(r("WAWebMediaEditorCanvasOutlineOverlay.react"), {
                      ref: he,
                      width: ue.getScreenWidth(),
                      height: ue.getScreenHeight(),
                      scale: se,
                      data: ue,
                      smoothing: D,
                      onDrawEnd: ae,
                      onDone: le,
                      onCursorChange: Ke,
                    }),
                ],
              },
            ),
          }),
          u.jsx(v, {
            draftTextLayer: B,
            data: ue,
            editableTextRef: ye,
            scale: se,
            onTextSave: ze,
            onLayerUnselect: G,
            onTextInputOutsideClick: te,
          }),
        ],
      });
    }
    ((S.displayName = S.name + " [from " + i.id + "]"), (l.default = S));
  },
  98,
);
