__d(
  "WebBloksDataImageSpan",
  ["WebBloksImageSpan", "react", "react-compiler-runtime"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = ",",
      c = "$",
      d = "&",
      m = "(",
      p = ")",
      _ = "*",
      f = "+";
    function g(e) {
      var t = o("react-compiler-runtime").c(24),
        n = e.externalStyle,
        a = e.node,
        i;
      t[0] !== a ? ((i = a.get(u)), (t[0] = a), (t[1] = i)) : (i = t[1]);
      var l;
      t[2] !== a ? ((l = a.get(c)), (t[2] = a), (t[3] = l)) : (l = t[3]);
      var g;
      t[4] !== a ? ((g = a.getSubNode(d)), (t[4] = a), (t[5] = g)) : (g = t[5]);
      var h;
      t[6] !== a ? ((h = a.get(m)), (t[6] = a), (t[7] = h)) : (h = t[7]);
      var y;
      t[8] !== a ? ((y = a.getSubNode(p)), (t[8] = a), (t[9] = y)) : (y = t[9]);
      var C;
      t[10] !== a ? ((C = a.get(_)), (t[10] = a), (t[11] = C)) : (C = t[11]);
      var b;
      t[12] !== a ? ((b = a.get(f)), (t[12] = a), (t[13] = b)) : (b = t[13]);
      var v;
      return (
        t[14] !== n ||
        t[15] !== a ||
        t[16] !== i ||
        t[17] !== l ||
        t[18] !== g ||
        t[19] !== h ||
        t[20] !== y ||
        t[21] !== C ||
        t[22] !== b
          ? ((v = s.jsx(r("WebBloksImageSpan"), {
              accessibilityLabel: i,
              externalStyle: n,
              imageAlign: l,
              imageComponent: g,
              imageHeight: h,
              imageMargin: y,
              imageWidth: C,
              node: a,
              spanStyles: b,
            })),
            (t[14] = n),
            (t[15] = a),
            (t[16] = i),
            (t[17] = l),
            (t[18] = g),
            (t[19] = h),
            (t[20] = y),
            (t[21] = C),
            (t[22] = b),
            (t[23] = v))
          : (v = t[23]),
        v
      );
    }
    l.default = g;
  },
  98,
);
