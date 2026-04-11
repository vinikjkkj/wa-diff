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
    "react-compiler-runtime",
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
      var t = o("react-compiler-runtime").c(51),
        n = e.canEditBackground,
        r = e.canEditLayer,
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
        S = e.onPointsChange,
        L = e.onSelect,
        E = e.onTransformEnd,
        k = e.onTransformStart,
        I = e.scale,
        T = e.selectedGroupRef,
        D = e.selectedNodeRef,
        x = e.transformerRef,
        $;
      t[0] !== r ||
      t[1] !== a ||
      t[2] !== i ||
      t[3] !== l ||
      t[4] !== s ||
      t[5] !== c ||
      t[6] !== d ||
      t[7] !== m ||
      t[8] !== _ ||
      t[9] !== f ||
      t[10] !== g ||
      t[11] !== h ||
      t[12] !== y ||
      t[13] !== S ||
      t[14] !== L ||
      t[15] !== E ||
      t[16] !== k ||
      t[17] !== I ||
      t[18] !== T ||
      t[19] !== D ||
      t[20] !== x
        ? (($ = {
            data: i,
            scale: I,
            dragging: l,
            canEditLayer: r,
            hoveredFilter: s,
            inFilterMode: c,
            inOutlineMode: d,
            inPaintMode: m,
            currentlyEditingTextLayer: a,
            lineArrowGroupRef: _,
            selectedGroupRef: T,
            selectedNodeRef: D,
            transformerRef: x,
            onPointsChange: S,
            onSelect: L,
            onDoubleClick: f,
            onDragMove: h,
            onDragStart: y,
            onDragEnd: g,
            onTransformStart: k,
            onTransformEnd: E,
          }),
          (t[0] = r),
          (t[1] = a),
          (t[2] = i),
          (t[3] = l),
          (t[4] = s),
          (t[5] = c),
          (t[6] = d),
          (t[7] = m),
          (t[8] = _),
          (t[9] = f),
          (t[10] = g),
          (t[11] = h),
          (t[12] = y),
          (t[13] = S),
          (t[14] = L),
          (t[15] = E),
          (t[16] = k),
          (t[17] = I),
          (t[18] = T),
          (t[19] = D),
          (t[20] = x),
          (t[21] = $))
        : ($ = t[21]);
      var P = $,
        N;
      t[22] !== i
        ? ((N = i.getBackground()), (t[22] = i), (t[23] = N))
        : (N = t[23]);
      var M = N,
        w;
      t[24] !== M || t[25] !== n || t[26] !== p || t[27] !== P
        ? ((w =
            n &&
            M &&
            u.jsx(R, babelHelpers.extends({ layer: M, hidden: !p() }, P))),
          (t[24] = M),
          (t[25] = n),
          (t[26] = p),
          (t[27] = P),
          (t[28] = w))
        : (w = t[28]);
      var A;
      t[29] !== i || t[30] !== p || t[31] !== P
        ? ((A =
            !p() &&
            i
              .getLayers()
              .filter(v)
              .map(function (e) {
                return u.jsx(
                  R,
                  babelHelpers.extends({ layer: e, hidden: !1 }, P),
                  String(e.getId()),
                );
              })),
          (t[29] = i),
          (t[30] = p),
          (t[31] = P),
          (t[32] = A))
        : (A = t[32]);
      var F;
      t[33] !== i || t[34] !== p || t[35] !== P
        ? ((F =
            !p() &&
            i
              .getLayers()
              .filter(b)
              .map(function (e) {
                return u.jsx(
                  R,
                  babelHelpers.extends({ layer: e, hidden: !1 }, P),
                  String(e.getId()),
                );
              })),
          (t[33] = i),
          (t[34] = p),
          (t[35] = P),
          (t[36] = F))
        : (F = t[36]);
      var O;
      t[37] !== i || t[38] !== P
        ? ((O =
            i.getPaintLayer() &&
            u.jsx(
              R,
              babelHelpers.extends({ layer: i.getPaintLayer(), hidden: !1 }, P),
            )),
          (t[37] = i),
          (t[38] = P),
          (t[39] = O))
        : (O = t[39]);
      var B;
      if (t[40] !== i || t[41] !== P) {
        var W;
        (t[43] !== P
          ? ((W = function (t) {
              return u.jsx(
                R,
                babelHelpers.extends({ layer: t, hidden: !1 }, P),
                String(t.getId()),
              );
            }),
            (t[43] = P),
            (t[44] = W))
          : (W = t[44]),
          (B = i.getLayers().filter(C).map(W)),
          (t[40] = i),
          (t[41] = P),
          (t[42] = B));
      } else B = t[42];
      var q;
      return (
        t[45] !== w || t[46] !== A || t[47] !== F || t[48] !== O || t[49] !== B
          ? ((q = u.jsxs(u.Fragment, { children: [w, A, F, O, B] })),
            (t[45] = w),
            (t[46] = A),
            (t[47] = F),
            (t[48] = O),
            (t[49] = B),
            (t[50] = q))
          : (q = t[50]),
        q
      );
    }
    function C(e) {
      return !(e instanceof o("WAWebMediaEditorLayersShape").ShapeLayer);
    }
    function b(e) {
      return (
        e instanceof o("WAWebMediaEditorLayersShape").ShapeLayer && !e.isBlur()
      );
    }
    function v(e) {
      return (
        e instanceof o("WAWebMediaEditorLayersShape").ShapeLayer && e.isBlur()
      );
    }
    function S(e) {
      var t = o("react-compiler-runtime").c(16),
        n = e.getStage,
        r = e.guides,
        a = e.guidesLayerRef,
        i = e.scale,
        l = r.horizontal,
        s = r.vertical;
      if (!s && !l) return null;
      var c, d, m, p, _;
      if (t[0] !== n || t[1] !== a || t[2] !== l || t[3] !== i || t[4] !== s) {
        var f = n();
        ((c = o("ReactKonva").Layer),
          (d = "guides"),
          (m = a),
          (p =
            s &&
            u.jsx(
              o("ReactKonva").Line,
              {
                x: s.position / i.x,
                y: 0,
                points: [0, 0, 0, f.height() / i.y],
                stroke: h,
                strokeWidth: g,
                strokeScaleEnabled: !1,
              },
              "vertical",
            )),
          (_ =
            l &&
            u.jsx(
              o("ReactKonva").Line,
              {
                x: 0,
                y: l.position / i.y,
                points: [0, 0, f.width() / i.x, 0],
                stroke: h,
                strokeWidth: g,
                strokeScaleEnabled: !1,
              },
              "horizontal",
            )),
          (t[0] = n),
          (t[1] = a),
          (t[2] = l),
          (t[3] = i),
          (t[4] = s),
          (t[5] = c),
          (t[6] = d),
          (t[7] = m),
          (t[8] = p),
          (t[9] = _));
      } else ((c = t[5]), (d = t[6]), (m = t[7]), (p = t[8]), (_ = t[9]));
      var y;
      return (
        t[10] !== c || t[11] !== d || t[12] !== m || t[13] !== p || t[14] !== _
          ? ((y = u.jsxs(c, { ref: m, children: [p, _] }, d)),
            (t[10] = c),
            (t[11] = d),
            (t[12] = m),
            (t[13] = p),
            (t[14] = _),
            (t[15] = y))
          : (y = t[15]),
        y
      );
    }
    function R(e) {
      var t = o("react-compiler-runtime").c(51),
        n = e.canEditLayer,
        a = e.currentlyEditingTextLayer,
        i = e.data,
        l = e.dragging,
        s = e.hidden,
        c = e.hoveredFilter,
        d = e.inFilterMode,
        m = e.inOutlineMode,
        p = e.inPaintMode,
        _ = e.layer,
        f = e.lineArrowGroupRef,
        g = e.onDoubleClick,
        h = e.onDragEnd,
        y = e.onDragMove,
        C = e.onDragStart,
        b = e.onPointsChange,
        v = e.onSelect,
        S = e.onTransformEnd,
        R = e.onTransformStart,
        L = e.scale,
        E = e.selectedGroupRef,
        k = e.selectedNodeRef,
        I = e.transformerRef,
        T = i.getScreenWidth() * L.x,
        D = i.getScreenHeight() * L.y,
        x;
      t[0] !== n ||
      t[1] !== a ||
      t[2] !== d ||
      t[3] !== m ||
      t[4] !== p ||
      t[5] !== _
        ? ((x = _.getEditable() && n && !d && !m && !p && !a),
          (t[0] = n),
          (t[1] = a),
          (t[2] = d),
          (t[3] = m),
          (t[4] = p),
          (t[5] = _),
          (t[6] = x))
        : (x = t[6]);
      var $ = x,
        P;
      t[7] !== $ || t[8] !== a || t[9] !== i || t[10] !== _
        ? ((P = i.getSelectedLayer() === _ && a !== _ && $),
          (t[7] = $),
          (t[8] = a),
          (t[9] = i),
          (t[10] = _),
          (t[11] = P))
        : (P = t[11]);
      var N = P,
        M;
      t[12] !== i || t[13] !== c
        ? ((M = c != null ? c : i.getActiveFilter()),
          (t[12] = i),
          (t[13] = c),
          (t[14] = M))
        : (M = t[14]);
      var w;
      t[15] !== _ ? ((w = _.getId()), (t[15] = _), (t[16] = w)) : (w = t[16]);
      var A = String(w),
        F;
      t[17] !== i
        ? ((F = i.getRotation()), (t[17] = i), (t[18] = F))
        : (F = t[18]);
      var O = !l,
        B = a === _,
        W;
      t[19] !== i
        ? ((W = i.getSending()), (t[19] = i), (t[20] = W))
        : (W = t[20]);
      var q;
      t[21] !== E
        ? ((q = function (t) {
            E.current = t;
          }),
          (t[21] = E),
          (t[22] = q))
        : (q = t[22]);
      var U;
      t[23] !== I
        ? ((U = function (t) {
            I.current = t;
          }),
          (t[23] = I),
          (t[24] = U))
        : (U = t[24]);
      var V;
      return (
        t[25] !== $ ||
        t[26] !== s ||
        t[27] !== N ||
        t[28] !== _ ||
        t[29] !== f ||
        t[30] !== g ||
        t[31] !== h ||
        t[32] !== y ||
        t[33] !== C ||
        t[34] !== b ||
        t[35] !== v ||
        t[36] !== S ||
        t[37] !== R ||
        t[38] !== L ||
        t[39] !== k ||
        t[40] !== D ||
        t[41] !== T ||
        t[42] !== q ||
        t[43] !== U ||
        t[44] !== M ||
        t[45] !== A ||
        t[46] !== F ||
        t[47] !== O ||
        t[48] !== B ||
        t[49] !== W
          ? ((V = u.jsx(
              r("WAWebMediaEditorCanvasLayer.react"),
              {
                activeFilter: M,
                layer: _,
                scale: L,
                canvasRotation: F,
                textBackgroundShadow: O,
                editable: $,
                editing: B,
                selected: N,
                sending: W,
                stageHeight: D,
                stageWidth: T,
                lineArrowGroupRef: f,
                selectedGroupRef: q,
                selectedNodeRef: k,
                transformerRef: U,
                onPointsChange: b,
                onSelect: v,
                onDoubleClick: g,
                onDragMove: y,
                onDragStart: C,
                onDragEnd: h,
                onTransformStart: R,
                onTransformEnd: S,
                hidden: s,
              },
              A,
            )),
            (t[25] = $),
            (t[26] = s),
            (t[27] = N),
            (t[28] = _),
            (t[29] = f),
            (t[30] = g),
            (t[31] = h),
            (t[32] = y),
            (t[33] = C),
            (t[34] = b),
            (t[35] = v),
            (t[36] = S),
            (t[37] = R),
            (t[38] = L),
            (t[39] = k),
            (t[40] = D),
            (t[41] = T),
            (t[42] = q),
            (t[43] = U),
            (t[44] = M),
            (t[45] = A),
            (t[46] = F),
            (t[47] = O),
            (t[48] = B),
            (t[49] = W),
            (t[50] = V))
          : (V = t[50]),
        V
      );
    }
    function L(e) {
      var t = o("react-compiler-runtime").c(14),
        n = e.data,
        a = e.draftTextLayer,
        i = e.editableTextRef,
        l = e.onLayerUnselect,
        s = e.onTextInputOutsideClick,
        c = e.onTextSave,
        d = e.scale;
      if (!a) return null;
      var m;
      t[0] !== n || t[1] !== a
        ? ((m = n.toScreenPoint(a.getFrame().getCenter())),
          (t[0] = n),
          (t[1] = a),
          (t[2] = m))
        : (m = t[2]);
      var p = m,
        _;
      t[3] !== a ? ((_ = a.getText()), (t[3] = a), (t[4] = _)) : (_ = t[4]);
      var f;
      return (
        t[5] !== a ||
        t[6] !== i ||
        t[7] !== p ||
        t[8] !== l ||
        t[9] !== s ||
        t[10] !== c ||
        t[11] !== d ||
        t[12] !== _
          ? ((f = u.jsx(r("WAWebMediaEditorCanvasEditableText.react"), {
              ref: i,
              layer: a,
              layerCenter: p,
              text: _,
              scale: d,
              onSave: c,
              onUnselect: l,
              onOutsideClick: s,
            })),
            (t[5] = a),
            (t[6] = i),
            (t[7] = p),
            (t[8] = l),
            (t[9] = s),
            (t[10] = c),
            (t[11] = d),
            (t[12] = _),
            (t[13] = f))
          : (f = t[13]),
        f
      );
    }
    function E(t) {
      var n,
        a = t.ref,
        i = babelHelpers.objectWithoutPropertiesLoose(t, e),
        l = i.hoveredFilter,
        s = l === void 0 ? null : l,
        c = i.inFilterMode,
        g = c === void 0 ? !1 : c,
        h = i.inOutlineMode,
        C = h === void 0 ? !1 : h,
        b = i.inPaintMode,
        v = b === void 0 ? !1 : b,
        R = i.paintColor,
        E = R === void 0 ? o("WAWebMediaEditorUtilsColor").Color.White : R,
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
          return v ? "none" : C ? Me : "default";
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
                        inPaintMode: v,
                        inOutlineMode: C,
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
                  u.jsx(S, {
                    guides: Se,
                    scale: se,
                    guidesLayerRef: _e,
                    getStage: Ve,
                  }),
                  v &&
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
                  C &&
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
          u.jsx(L, {
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
    ((E.displayName = E.name + " [from " + i.id + "]"), (l.default = E));
  },
  98,
);
