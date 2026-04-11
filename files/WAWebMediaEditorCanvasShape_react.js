__d(
  "WAWebMediaEditorCanvasShape.react",
  ["ReactKonva", "react", "react-compiler-runtime"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = e,
      c = u.useEffect,
      d = u.useRef,
      m = u.useState,
      p = 0.9,
      _ = 10,
      f = 20,
      g = 4,
      h = 1;
    function y(e) {
      var t = o("react-compiler-runtime").c(92),
        n = e.canvasScale,
        r = e.layer,
        a = e.onPointsChange,
        i = e.selected,
        l = e.stageHeight,
        u = e.stageWidth,
        y = d(),
        C;
      t[0] !== r ? ((C = r.getPoints()), (t[0] = r), (t[1] = C)) : (C = t[1]);
      var b = m(C),
        v = b[0],
        S = b[1],
        R;
      t[2] !== r ? ((R = r.getPoints()), (t[2] = r), (t[3] = R)) : (R = t[3]);
      var L = d(R),
        E;
      t[4] !== r ? ((E = r.getImage()), (t[4] = r), (t[5] = E)) : (E = t[5]);
      var k = E,
        I;
      t[6] !== r ? ((I = r.getPoints()), (t[6] = r), (t[7] = I)) : (I = t[7]);
      var T = I,
        D;
      t[8] === Symbol.for("react.memo_cache_sentinel")
        ? ((D = function () {
            var e;
            y == null ||
              (e = y.current) == null ||
              e.cache({ imageSmoothingEnabled: !1 });
          }),
          (t[8] = D))
        : (D = t[8]);
      var x;
      (t[9] !== k ? ((x = [k]), (t[9] = k), (t[10] = x)) : (x = t[10]),
        c(D, x));
      var $, P;
      (t[11] !== T || t[12] !== a
        ? (($ = function () {
            L.current !== T && (S(T), a(T), (L.current = T));
          }),
          (P = [T, a]),
          (t[11] = T),
          (t[12] = a),
          (t[13] = $),
          (t[14] = P))
        : (($ = t[13]), (P = t[14])),
        c($, P));
      var N = r.getWidth(),
        M = r.getHeight(),
        w;
      t[15] !== r
        ? ((w = r.getFillColor().toRgbaString()), (t[15] = r), (t[16] = w))
        : (w = t[16]);
      var A = w,
        F;
      t[17] !== r
        ? ((F = r.getStrokeColor().toRgbaString()), (t[17] = r), (t[18] = F))
        : (F = t[18]);
      var O = F,
        B;
      t[19] !== r
        ? ((B = r.getStrokeWidth()), (t[19] = r), (t[20] = B))
        : (B = t[20]);
      var W = B,
        q = (N * (1 - p)) / 2,
        U = (M * (1 - p)) / 2,
        V;
      t[21] !== A ||
      t[22] !== M ||
      t[23] !== O ||
      t[24] !== W ||
      t[25] !== q ||
      t[26] !== U ||
      t[27] !== N
        ? ((V = {
            x: q,
            y: U,
            width: N,
            height: M,
            fill: A,
            stroke: O,
            strokeWidth: W,
            strokeScaleEnabled: !1,
            scaleX: p,
            scaleY: p,
          }),
          (t[21] = A),
          (t[22] = M),
          (t[23] = O),
          (t[24] = W),
          (t[25] = q),
          (t[26] = U),
          (t[27] = N),
          (t[28] = V))
        : (V = t[28]);
      var H = V,
        G;
      t[29] !== n || t[30] !== l || t[31] !== u
        ? ((G = function (t, r, o) {
            var e = o === !0 ? u / n : u,
              a = o === !0 ? l / n : l,
              i = Math.max(0, Math.min(t.x, e)),
              s = Math.max(0, Math.min(t.y, a));
            return { x: i, y: s };
          }),
          (t[29] = n),
          (t[30] = l),
          (t[31] = u),
          (t[32] = G))
        : (G = t[32]);
      var z = G,
        j;
      t[33] !== z || t[34] !== v
        ? ((j = function (t, n) {
            var e = [].concat(v);
            if (
              ((e[t] = n.target.x()),
              (e[t + 1] = n.target.y()),
              t === 0 || t === 4)
            ) {
              var r = v[2],
                o = v[3],
                a = v[4] - v[0],
                i = v[5] - v[1],
                l = (v[0] + v[4]) / 2,
                s = (v[1] + v[5]) / 2,
                u = r - l,
                c = o - s,
                d = Math.sqrt(a * a + i * i),
                m = e[4] - e[0],
                p = e[5] - e[1],
                _ = (e[0] + e[4]) / 2,
                f = (e[1] + e[5]) / 2,
                g = Math.sqrt(m * m + p * p),
                h = g / d,
                y = u * h,
                C = c * h,
                b = { x: _ + y, y: f + C },
                R = z(b, null, !0);
              ((e[2] = R.x), (e[3] = R.y));
            } else t === 2 && ((e[2] = n.target.x()), (e[3] = n.target.y()));
            S(e);
          }),
          (t[33] = z),
          (t[34] = v),
          (t[35] = j))
        : (j = t[35]);
      var K = j,
        Q;
      t[36] !== a || t[37] !== v
        ? ((Q = function () {
            a(v);
          }),
          (t[36] = a),
          (t[37] = v),
          (t[38] = Q))
        : (Q = t[38]);
      var X = Q,
        Y;
      t[39] !== r
        ? ((Y = r.isArrow() || r.isLine()), (t[39] = r), (t[40] = Y))
        : (Y = t[40]);
      var J = Y,
        Z;
      t[41] !== n ||
      t[42] !== z ||
      t[43] !== X ||
      t[44] !== K ||
      t[45] !== J ||
      t[46] !== v ||
      t[47] !== i
        ? ((Z =
            i &&
            J &&
            s.jsx(o("ReactKonva").Circle, {
              x: v[0],
              y: v[1],
              radius: g / n,
              stroke: "black",
              strokeWidth: h / n,
              fill: "white",
              draggable: !0,
              dragBoundFunc: z,
              onDragMove: function (t) {
                return K(0, t);
              },
              onDragEnd: X,
            })),
          (t[41] = n),
          (t[42] = z),
          (t[43] = X),
          (t[44] = K),
          (t[45] = J),
          (t[46] = v),
          (t[47] = i),
          (t[48] = Z))
        : (Z = t[48]);
      var ee = Z,
        te;
      t[49] !== n ||
      t[50] !== z ||
      t[51] !== X ||
      t[52] !== K ||
      t[53] !== J ||
      t[54] !== v ||
      t[55] !== i
        ? ((te =
            i &&
            J &&
            s.jsx(o("ReactKonva").Circle, {
              x: v[4],
              y: v[5],
              radius: g / n,
              stroke: "black",
              strokeWidth: h / n,
              fill: "white",
              draggable: !0,
              dragBoundFunc: z,
              onDragMove: function (t) {
                return K(4, t);
              },
              onDragEnd: X,
            })),
          (t[49] = n),
          (t[50] = z),
          (t[51] = X),
          (t[52] = K),
          (t[53] = J),
          (t[54] = v),
          (t[55] = i),
          (t[56] = te))
        : (te = t[56]);
      var ne = te,
        re;
      t[57] !== n ||
      t[58] !== z ||
      t[59] !== X ||
      t[60] !== K ||
      t[61] !== J ||
      t[62] !== v ||
      t[63] !== i
        ? ((re =
            i &&
            J &&
            s.jsx(o("ReactKonva").Circle, {
              x: v[2],
              y: v[3],
              radius: (g * 0.8) / n,
              stroke: "black",
              strokeWidth: h / n,
              fill: "white",
              draggable: !0,
              dragBoundFunc: z,
              onDragMove: function (t) {
                return K(2, t);
              },
              onDragEnd: X,
            })),
          (t[57] = n),
          (t[58] = z),
          (t[59] = X),
          (t[60] = K),
          (t[61] = J),
          (t[62] = v),
          (t[63] = i),
          (t[64] = re))
        : (re = t[64]);
      var oe = re,
        ae;
      t[65] !== r || t[66] !== H
        ? ((ae =
            r.isRectangle() &&
            s.jsx(o("ReactKonva").Rect, babelHelpers.extends({}, H))),
          (t[65] = r),
          (t[66] = H),
          (t[67] = ae))
        : (ae = t[67]);
      var ie;
      t[68] !== M || t[69] !== r || t[70] !== H || t[71] !== N
        ? ((ie =
            r.isCircle() &&
            s.jsx(
              o("ReactKonva").Ellipse,
              babelHelpers.extends({ offset: { x: -N / 2, y: -M / 2 } }, H),
            )),
          (t[68] = M),
          (t[69] = r),
          (t[70] = H),
          (t[71] = N),
          (t[72] = ie))
        : (ie = t[72]);
      var le;
      t[73] !== n || t[74] !== r || t[75] !== v || t[76] !== O || t[77] !== W
        ? ((le =
            r.isArrow() &&
            s.jsx(o("ReactKonva").Arrow, {
              points: v,
              stroke: O,
              strokeWidth: W,
              fill: O,
              strokeScaleEnabled: !1,
              hitStrokeWidth: f,
              pointerLength: _ / n,
              pointerWidth: _ / n,
              tension: 0.4,
            })),
          (t[73] = n),
          (t[74] = r),
          (t[75] = v),
          (t[76] = O),
          (t[77] = W),
          (t[78] = le))
        : (le = t[78]);
      var se;
      t[79] !== r || t[80] !== v || t[81] !== O || t[82] !== W
        ? ((se =
            r.isLine() &&
            s.jsx(o("ReactKonva").Line, {
              points: v,
              stroke: O,
              strokeWidth: W,
              strokeScaleEnabled: !1,
              hitStrokeWidth: f,
              tension: 0.4,
            })),
          (t[79] = r),
          (t[80] = v),
          (t[81] = O),
          (t[82] = W),
          (t[83] = se))
        : (se = t[83]);
      var ue;
      return (
        t[84] !== ee ||
        t[85] !== ne ||
        t[86] !== oe ||
        t[87] !== ae ||
        t[88] !== ie ||
        t[89] !== le ||
        t[90] !== se
          ? ((ue = s.jsxs(s.Fragment, {
              children: [ae, ie, le, se, ee, oe, ne],
            })),
            (t[84] = ee),
            (t[85] = ne),
            (t[86] = oe),
            (t[87] = ae),
            (t[88] = ie),
            (t[89] = le),
            (t[90] = se),
            (t[91] = ue))
          : (ue = t[91]),
        ue
      );
    }
    l.default = y;
  },
  98,
);
