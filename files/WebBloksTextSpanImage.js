__d(
  "WebBloksTextSpanImage",
  ["WebBloksImageSpan", "react", "react-compiler-runtime"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = "B",
      c = "D",
      d = ";",
      m = "=",
      p = "E",
      _ = ">";
    function f(e) {
      var t = o("react-compiler-runtime").c(21),
        n = e.externalStyle,
        a = e.node,
        i;
      t[0] !== a ? ((i = a.get(u)), (t[0] = a), (t[1] = i)) : (i = t[1]);
      var l;
      t[2] !== a ? ((l = a.get(c)), (t[2] = a), (t[3] = l)) : (l = t[3]);
      var f;
      t[4] !== a ? ((f = a.getSubNode(d)), (t[4] = a), (t[5] = f)) : (f = t[5]);
      var g;
      t[6] !== a ? ((g = a.get(m)), (t[6] = a), (t[7] = g)) : (g = t[7]);
      var h;
      t[8] !== a ? ((h = a.getSubNode(p)), (t[8] = a), (t[9] = h)) : (h = t[9]);
      var y;
      t[10] !== a ? ((y = a.get(_)), (t[10] = a), (t[11] = y)) : (y = t[11]);
      var C;
      return (
        t[12] !== n ||
        t[13] !== a ||
        t[14] !== i ||
        t[15] !== l ||
        t[16] !== f ||
        t[17] !== g ||
        t[18] !== h ||
        t[19] !== y
          ? ((C = s.jsx(r("WebBloksImageSpan"), {
              accessibilityLabel: i,
              externalStyle: n,
              imageAlign: l,
              imageComponent: f,
              imageHeight: g,
              imageMargin: h,
              imageWidth: y,
              node: a,
              spanStyles: null,
            })),
            (t[12] = n),
            (t[13] = a),
            (t[14] = i),
            (t[15] = l),
            (t[16] = f),
            (t[17] = g),
            (t[18] = h),
            (t[19] = y),
            (t[20] = C))
          : (C = t[20]),
        C
      );
    }
    l.default = f;
  },
  98,
);
