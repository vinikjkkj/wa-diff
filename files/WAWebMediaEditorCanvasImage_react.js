__d(
  "WAWebMediaEditorCanvasImage.react",
  [
    "ReactKonva",
    "WAWebMediaEditorUtilsFilters",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    var e = ["composition", "overlay"],
      s,
      u = s || (s = o("react")),
      c = s,
      d = c.useEffect,
      m = c.useState;
    function p(t) {
      var n = o("react-compiler-runtime").c(45),
        r = t.layer,
        a = t.activeFilter,
        i =
          a === void 0 ? o("WAWebMediaEditorUtilsFilters").FilterType.NONE : a,
        l;
      n[0] !== r ? ((l = r.getImage()), (n[0] = r), (n[1] = l)) : (l = n[1]);
      var s = l,
        c = m(null),
        p = c[0],
        _ = c[1],
        f;
      n[2] !== p
        ? ((f = function () {
            p == null || p.cache();
          }),
          (n[2] = p),
          (n[3] = f))
        : (f = n[3]);
      var g;
      (n[4] !== s || n[5] !== p
        ? ((g = [s, p]), (n[4] = s), (n[5] = p), (n[6] = g))
        : (g = n[6]),
        d(f, g));
      var h;
      n[7] !== i
        ? ((h = o("WAWebMediaEditorUtilsFilters").getKonvaFilters(i)),
          (n[7] = i),
          (n[8] = h))
        : (h = n[8]);
      var y = h,
        C;
      n[9] !== i
        ? ((C = o("WAWebMediaEditorUtilsFilters").getFilterPresets(i)),
          (n[9] = i),
          (n[10] = C))
        : (C = n[10]);
      var b, v, S;
      if (n[11] !== C) {
        var R = C;
        ((b = R.composition),
          (S = R.overlay),
          (v = babelHelpers.objectWithoutPropertiesLoose(R, e)),
          (n[11] = C),
          (n[12] = b),
          (n[13] = v),
          (n[14] = S));
      } else ((b = n[12]), (v = n[13]), (S = n[14]));
      var L;
      n[15] !== r
        ? ((L = r.getWidth()), (n[15] = r), (n[16] = L))
        : (L = n[16]);
      var E;
      n[17] !== r
        ? ((E = r.getHeight()), (n[17] = r), (n[18] = E))
        : (E = n[18]);
      var k;
      n[19] !== r
        ? ((k = r.getWidth()), (n[19] = r), (n[20] = k))
        : (k = n[20]);
      var I;
      n[21] !== r
        ? ((I = r.getHeight()), (n[21] = r), (n[22] = I))
        : (I = n[22]);
      var T;
      n[23] !== r
        ? ((T = r.getImage()), (n[23] = r), (n[24] = T))
        : (T = n[24]);
      var D;
      n[25] !== v || n[26] !== y || n[27] !== T || n[28] !== k || n[29] !== I
        ? ((D = u.jsx(
            o("ReactKonva").Image,
            babelHelpers.extends(
              { ref: _, width: k, height: I, image: T, filters: y },
              v,
            ),
          )),
          (n[25] = v),
          (n[26] = y),
          (n[27] = T),
          (n[28] = k),
          (n[29] = I),
          (n[30] = D))
        : (D = n[30]);
      var x;
      n[31] !== r
        ? ((x = r.getWidth()), (n[31] = r), (n[32] = x))
        : (x = n[32]);
      var $;
      n[33] !== r
        ? (($ = r.getHeight()), (n[33] = r), (n[34] = $))
        : ($ = n[34]);
      var P;
      n[35] !== b || n[36] !== S || n[37] !== x || n[38] !== $
        ? ((P = u.jsx(o("ReactKonva").Rect, {
            width: x,
            height: $,
            fill: S,
            globalCompositeOperation: b,
          })),
          (n[35] = b),
          (n[36] = S),
          (n[37] = x),
          (n[38] = $),
          (n[39] = P))
        : (P = n[39]);
      var N;
      return (
        n[40] !== D || n[41] !== P || n[42] !== L || n[43] !== E
          ? ((N = u.jsxs(o("ReactKonva").Group, {
              width: L,
              height: E,
              children: [D, P],
            })),
            (n[40] = D),
            (n[41] = P),
            (n[42] = L),
            (n[43] = E),
            (n[44] = N))
          : (N = n[44]),
        N
      );
    }
    l.default = p;
  },
  98,
);
