__d(
  "WAWebMediaEditorCanvasBlur.react",
  [
    "ReactKonva",
    "WAWebMediaEditorLayersShape",
    "WAWebMediaEditorUtilsFilters",
    "konva",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    var e = ["composition", "overlay"],
      s,
      u = s || (s = o("react")),
      c = s,
      d = c.useEffect,
      m = c.useRef,
      p = 3,
      _ = 0.4;
    function f(t) {
      var n,
        a = o("react-compiler-runtime").c(87),
        i = t.activeFilter,
        l = t.frame,
        s = t.layer,
        c = t.onTransform,
        f = t.onTransformEnd,
        g = t.onTransformStart,
        h = t.scale,
        y = t.selectedNodeRef,
        C = t.showPadding,
        b = m(),
        v;
      a[0] !== s ? ((v = s.getImage()), (a[0] = s), (a[1] = v)) : (v = a[1]);
      var S = v,
        R;
      a[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((R = function () {
            var e;
            b == null ||
              (e = b.current) == null ||
              e.cache({ pixelRatio: _, imageSmoothingEnabled: !1 });
          }),
          (a[2] = R))
        : (R = a[2]);
      var L;
      (a[3] !== S ? ((L = [S]), (a[3] = S), (a[4] = L)) : (L = a[4]), d(R, L));
      var E = C ? 50 : 0,
        k;
      if (a[5] !== l || a[6] !== s) {
        var I;
        ((k = (I = l == null ? void 0 : l.getX()) != null ? I : s.getX()),
          (a[5] = l),
          (a[6] = s),
          (a[7] = k));
      } else k = a[7];
      var T = k,
        D;
      if (a[8] !== l || a[9] !== s) {
        var x;
        ((D = (x = l == null ? void 0 : l.getY()) != null ? x : s.getY()),
          (a[8] = l),
          (a[9] = s),
          (a[10] = D));
      } else D = a[10];
      var $ = D,
        P;
      if (a[11] !== l || a[12] !== s) {
        var N;
        ((P =
          (N = l == null ? void 0 : l.getWidth()) != null ? N : s.getWidth()),
          (a[11] = l),
          (a[12] = s),
          (a[13] = P));
      } else P = a[13];
      var M = P,
        w;
      if (a[14] !== l || a[15] !== s) {
        var A;
        ((w =
          (A = l == null ? void 0 : l.getHeight()) != null ? A : s.getHeight()),
          (a[14] = l),
          (a[15] = s),
          (a[16] = w));
      } else w = a[16];
      var F = w,
        O;
      a[17] !== s
        ? ((O = s.getBackgroundFrame().getScale()), (a[17] = s), (a[18] = O))
        : (O = a[18]);
      var B = (((n = h == null ? void 0 : h.x) != null ? n : 1) * O.x * p) / _,
        W;
      a[19] !== s
        ? ((W = s.getBackgroundFrame().getWidth()), (a[19] = s), (a[20] = W))
        : (W = a[20]);
      var q;
      a[21] !== s
        ? ((q = s.getBackgroundFrame().getX()), (a[21] = s), (a[22] = q))
        : (q = a[22]);
      var U = -T + W / 2 + q,
        V;
      a[23] !== s
        ? ((V = s.getBackgroundFrame().getHeight()), (a[23] = s), (a[24] = V))
        : (V = a[24]);
      var H;
      a[25] !== s
        ? ((H = s.getBackgroundFrame().getY()), (a[25] = s), (a[26] = H))
        : (H = a[26]);
      var G = -$ + V / 2 + H,
        z;
      a[27] !== s
        ? ((z = s.getBackgroundFrame().getWidth()), (a[27] = s), (a[28] = z))
        : (z = a[28]);
      var j;
      a[29] !== s
        ? ((j = s.getBackgroundFrame().getScale()), (a[29] = s), (a[30] = j))
        : (j = a[30]);
      var K = z + (E / j.x) * 2,
        Q;
      a[31] !== s
        ? ((Q = s.getBackgroundFrame().getHeight()), (a[31] = s), (a[32] = Q))
        : (Q = a[32]);
      var X;
      a[33] !== s
        ? ((X = s.getBackgroundFrame().getScale()), (a[33] = s), (a[34] = X))
        : (X = a[34]);
      var Y = Q + (E / X.y) * 2,
        J = K / 2,
        Z = Y / 2,
        ee;
      a[35] !== i || a[36] !== s
        ? ((ee = o("WAWebMediaEditorUtilsFilters").getKonvaFilters(i)),
          s.getMode() === o("WAWebMediaEditorLayersShape").BlurMode.Smooth
            ? ee.push(r("konva").Filters.Blur)
            : s.getMode() ===
                o("WAWebMediaEditorLayersShape").BlurMode.Pixelate &&
              ee.push(r("konva").Filters.Pixelate),
          (a[35] = i),
          (a[36] = s),
          (a[37] = ee))
        : (ee = a[37]);
      var te;
      a[38] !== i
        ? ((te = o("WAWebMediaEditorUtilsFilters").getFilterPresets(i)),
          (a[38] = i),
          (a[39] = te))
        : (te = a[39]);
      var ne, re, oe;
      if (a[40] !== te) {
        var ae = te;
        ((ne = ae.composition),
          (oe = ae.overlay),
          (re = babelHelpers.objectWithoutPropertiesLoose(ae, e)),
          (a[40] = te),
          (a[41] = ne),
          (a[42] = re),
          (a[43] = oe));
      } else ((ne = a[41]), (re = a[42]), (oe = a[43]));
      var ie;
      a[44] !== s
        ? ((ie = s.getImage()), (a[44] = s), (a[45] = ie))
        : (ie = a[45]);
      var le;
      a[46] !== s
        ? ((le = s.getBackgroundFrame().getScale()), (a[46] = s), (a[47] = le))
        : (le = a[47]);
      var se = -E / le.x,
        ue;
      a[48] !== s
        ? ((ue = s.getBackgroundFrame().getScale()), (a[48] = s), (a[49] = ue))
        : (ue = a[49]);
      var ce = -E / ue.y,
        de;
      a[50] !== s
        ? ((de = s.getBackgroundFrame().getScale()), (a[50] = s), (a[51] = de))
        : (de = a[51]);
      var me = de.x,
        pe;
      a[52] !== s
        ? ((pe = s.getBackgroundFrame().getScale()), (a[52] = s), (a[53] = pe))
        : (pe = a[53]);
      var _e;
      if (a[54] !== s) {
        var fe, ge;
        ((_e =
          (fe =
            (ge = s.getBackgroundFrame()) == null
              ? void 0
              : ge.getRotation()) != null
            ? fe
            : 0),
          (a[54] = s),
          (a[55] = _e));
      } else _e = a[55];
      var he = s.getRadius() / B,
        ye = s.getRadius() / B,
        Ce;
      a[56] !== Y ||
      a[57] !== J ||
      a[58] !== Z ||
      a[59] !== re ||
      a[60] !== K ||
      a[61] !== U ||
      a[62] !== G ||
      a[63] !== ee ||
      a[64] !== ie ||
      a[65] !== se ||
      a[66] !== ce ||
      a[67] !== de.x ||
      a[68] !== pe.y ||
      a[69] !== _e ||
      a[70] !== he ||
      a[71] !== ye
        ? ((Ce = u.jsx(
            o("ReactKonva").Image,
            babelHelpers.extends(
              {
                ref: b,
                x: U,
                y: G,
                width: K,
                height: Y,
                offsetX: J,
                offsetY: Z,
                fillPatternImage: ie,
                fillPatternOffsetX: se,
                fillPatternOffsetY: ce,
                fillPatternRepeat: "no-repeat",
                scaleX: me,
                scaleY: pe.y,
                rotation: _e,
                perfectDrawEnabled: !1,
                filters: ee,
                blurRadius: he,
                pixelSize: ye,
              },
              re,
            ),
          )),
          (a[56] = Y),
          (a[57] = J),
          (a[58] = Z),
          (a[59] = re),
          (a[60] = K),
          (a[61] = U),
          (a[62] = G),
          (a[63] = ee),
          (a[64] = ie),
          (a[65] = se),
          (a[66] = ce),
          (a[67] = de.x),
          (a[68] = pe.y),
          (a[69] = _e),
          (a[70] = he),
          (a[71] = ye),
          (a[72] = Ce))
        : (Ce = a[72]);
      var be;
      a[73] !== ne ||
      a[74] !== F ||
      a[75] !== c ||
      a[76] !== f ||
      a[77] !== g ||
      a[78] !== oe ||
      a[79] !== y ||
      a[80] !== M
        ? ((be = u.jsx(o("ReactKonva").Rect, {
            ref: y,
            x: 0,
            y: 0,
            width: M,
            height: F,
            fill: oe,
            globalCompositeOperation: ne,
            onTransformStart: g,
            onTransformEnd: f,
            onTransform: c,
          })),
          (a[73] = ne),
          (a[74] = F),
          (a[75] = c),
          (a[76] = f),
          (a[77] = g),
          (a[78] = oe),
          (a[79] = y),
          (a[80] = M),
          (a[81] = be))
        : (be = a[81]);
      var ve;
      return (
        a[82] !== F || a[83] !== Ce || a[84] !== be || a[85] !== M
          ? ((ve = u.jsxs(o("ReactKonva").Group, {
              width: M,
              height: F,
              clipX: 0,
              clipY: 0,
              clipWidth: M,
              clipHeight: F,
              children: [Ce, be],
            })),
            (a[82] = F),
            (a[83] = Ce),
            (a[84] = be),
            (a[85] = M),
            (a[86] = ve))
          : (ve = a[86]),
        ve
      );
    }
    l.default = f;
  },
  98,
);
