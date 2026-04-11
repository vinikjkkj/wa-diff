__d(
  "useWebBloksRichTextDimensions",
  ["WebBloksTextStyle", "react", "react-compiler-runtime"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e || (e = o("react"))).useMemo;
    function u(e) {
      var t = o("react-compiler-runtime").c(32),
        n;
      t[0] !== e
        ? ((n = e.get("line_height_multiplier")), (t[0] = e), (t[1] = n))
        : (n = t[1]);
      var r = n,
        a;
      t[2] !== e
        ? ((a = e.get("use_composable_and_extensible_spans")),
          (t[2] = e),
          (t[3] = a))
        : (a = t[3]);
      var i = a,
        l;
      t[4] !== e
        ? ((l = e.getSubNodes("spans")), (t[4] = e), (t[5] = l))
        : (l = t[5]);
      var s = l,
        u;
      t[6] !== e
        ? ((u = e.getSubNodes("children")), (t[6] = e), (t[7] = u))
        : (u = t[7]);
      var c = u,
        d;
      t[8] !== e
        ? ((d = e.getSubNodes("spans_for_truncation")), (t[8] = e), (t[9] = d))
        : (d = t[9]);
      var m = d,
        p;
      t[10] !== e
        ? ((p = e.getSubNodes("truncation_spans")), (t[10] = e), (t[11] = p))
        : (p = t[11]);
      var _ = p,
        f;
      t[12] !== r
        ? ((f = o("WebBloksTextStyle").getLineHeight(r)),
          (t[12] = r),
          (t[13] = f))
        : (f = t[13]);
      var g = f,
        h;
      if (t[14] !== c || t[15] !== s || t[16] !== i) {
        var y;
        ((h = (y = i === !0 ? s : c) != null ? y : []),
          (t[14] = c),
          (t[15] = s),
          (t[16] = i),
          (t[17] = h));
      } else h = t[17];
      var C = h,
        b;
      if (t[18] !== m || t[19] !== _ || t[20] !== i) {
        var v;
        ((b = (v = i === !0 ? m : _) != null ? v : []),
          (t[18] = m),
          (t[19] = _),
          (t[20] = i),
          (t[21] = b));
      } else b = t[21];
      var S = b,
        R;
      t[22] !== C
        ? ((R = C != null ? C : []), (t[22] = C), (t[23] = R))
        : (R = t[23]);
      var L;
      if (t[24] !== R || t[25] !== S) {
        var E;
        (t[27] !== S
          ? ((E = S != null ? S : []), (t[27] = S), (t[28] = E))
          : (E = t[28]),
          (L = o("WebBloksTextStyle").getMaxTextSizePx(R.concat(E))),
          (t[24] = R),
          (t[25] = S),
          (t[26] = L));
      } else L = t[26];
      var k = L,
        I;
      return (
        t[29] !== g || t[30] !== k
          ? ((I = { lineHeight: g, textSizePx: k }),
            (t[29] = g),
            (t[30] = k),
            (t[31] = I))
          : (I = t[31]),
        I
      );
    }
    l.default = u;
  },
  98,
);
