__d(
  "WAWebMediaEditorCanvasBackground.react",
  [
    "ReactKonva",
    "WAWebCanvasUtils",
    "WAWebMediaEditorCanvasImage.react",
    "WAWebMediaEditorCanvasOutline.react",
    "WAWebStickerConstants",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = e,
      c = u.useImperativeHandle,
      d = u.useRef;
    function m(e) {
      var t = o("react-compiler-runtime").c(45),
        n = e.activeFilter,
        a = e.layer,
        i = e.outlineLayer,
        l = e.ref,
        u = e.scale,
        m = e.visible,
        p = d(),
        _ = d(),
        f;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((f = function () {
            var e;
            (e = _.current) == null || e.show();
          }),
          (t[0] = f))
        : (f = t[0]);
      var g = f,
        h;
      t[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((h = function () {
            var e;
            (e = _.current) == null || e.hide();
          }),
          (t[1] = h))
        : (h = t[1]);
      var y = h,
        C;
      if (
        (t[2] !== u
          ? ((C = function () {
              return {
                toCanvas: function () {
                  var e,
                    t = (e = _.current) == null ? void 0 : e.getBoundingRect(),
                    n = p.current;
                  if (!(!t || !n || t.getSize().isEmpty())) {
                    var r = t.getX(),
                      a = t.getY(),
                      i = t.getWidth(),
                      l = t.getHeight();
                    g();
                    var s = n.toCanvas({
                      x: r,
                      y: a,
                      width: i,
                      height: l,
                      pixelRatio: 1 / u.x,
                    });
                    y();
                    var c = Math.max(s.width, s.height),
                      d = c / o("WAWebStickerConstants").STICKER_DIMENSION,
                      m = o("WAWebStickerConstants").STICKER_BORDER_WIDTH * d,
                      f = Math.max(Math.ceil(m), 2),
                      h = o("WAWebCanvasUtils").addBorder(s, f),
                      C = o("WAWebCanvasUtils").trim(h);
                    return C;
                  }
                },
              };
            }),
            (t[2] = u),
            (t[3] = C))
          : (C = t[3]),
        c(l, C),
        !a || !i)
      )
        return null;
      var b, v, S, R, L, E;
      if (t[4] !== a || t[5] !== m) {
        var k = a.getFrame().getCenter();
        ((v = o("ReactKonva").Group),
          (L = p),
          (E = m),
          (b = o("ReactKonva").Group),
          (S = k.getX()),
          (R = k.getY()),
          (t[4] = a),
          (t[5] = m),
          (t[6] = b),
          (t[7] = v),
          (t[8] = S),
          (t[9] = R),
          (t[10] = L),
          (t[11] = E));
      } else
        ((b = t[6]),
          (v = t[7]),
          (S = t[8]),
          (R = t[9]),
          (L = t[10]),
          (E = t[11]));
      var I = a.getWidth() / 2,
        T = a.getHeight() / 2,
        D;
      t[12] !== a
        ? ((D = a.getWidth()), (t[12] = a), (t[13] = D))
        : (D = t[13]);
      var x;
      t[14] !== a
        ? ((x = a.getHeight()), (t[14] = a), (t[15] = x))
        : (x = t[15]);
      var $;
      t[16] !== a
        ? (($ = a.getRotation()), (t[16] = a), (t[17] = $))
        : ($ = t[17]);
      var P;
      t[18] !== a
        ? ((P = a.getScale()), (t[18] = a), (t[19] = P))
        : (P = t[19]);
      var N = P.x,
        M;
      t[20] !== a
        ? ((M = a.getScale()), (t[20] = a), (t[21] = M))
        : (M = t[21]);
      var w;
      t[22] !== n || t[23] !== a
        ? ((w = s.jsx(r("WAWebMediaEditorCanvasImage.react"), {
            layer: a,
            activeFilter: n,
          })),
          (t[22] = n),
          (t[23] = a),
          (t[24] = w))
        : (w = t[24]);
      var A;
      t[25] !== b ||
      t[26] !== D ||
      t[27] !== x ||
      t[28] !== $ ||
      t[29] !== P.x ||
      t[30] !== M.y ||
      t[31] !== w ||
      t[32] !== S ||
      t[33] !== R ||
      t[34] !== I ||
      t[35] !== T
        ? ((A = s.jsx(b, {
            x: S,
            y: R,
            offsetX: I,
            offsetY: T,
            width: D,
            height: x,
            rotation: $,
            scaleX: N,
            scaleY: M.y,
            children: w,
          })),
          (t[25] = b),
          (t[26] = D),
          (t[27] = x),
          (t[28] = $),
          (t[29] = P.x),
          (t[30] = M.y),
          (t[31] = w),
          (t[32] = S),
          (t[33] = R),
          (t[34] = I),
          (t[35] = T),
          (t[36] = A))
        : (A = t[36]);
      var F;
      t[37] !== i
        ? ((F = s.jsx(o("WAWebMediaEditorCanvasOutline.react").Outline, {
            ref: _,
            layer: i,
          })),
          (t[37] = i),
          (t[38] = F))
        : (F = t[38]);
      var O;
      return (
        t[39] !== v || t[40] !== A || t[41] !== F || t[42] !== L || t[43] !== E
          ? ((O = s.jsxs(v, { ref: L, visible: E, children: [A, F] })),
            (t[39] = v),
            (t[40] = A),
            (t[41] = F),
            (t[42] = L),
            (t[43] = E),
            (t[44] = O))
          : (O = t[44]),
        O
      );
    }
    l.default = m;
  },
  98,
);
