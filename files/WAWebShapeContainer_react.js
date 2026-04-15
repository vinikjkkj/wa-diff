__d(
  "WAWebShapeContainer.react",
  ["WAWebFlexBox.react", "react", "react-compiler-runtime"],
  function (t, n, r, o, a, i, l) {
    var e = ["align", "justify", "size", "transparent", "xstyle"],
      s,
      u = s || (s = o("react")),
      c = {
        shape: {
          width: "xh8yej3",
          height: "x5yr21d",
          overflowX: "x6ikm8r",
          overflowY: "x10wlt62",
          $$css: !0,
        },
        transparent: { backgroundColor: "xjbqb8w", $$css: !0 },
      };
    function d(t) {
      var n = o("react-compiler-runtime").c(18),
        r,
        a,
        i,
        l,
        s,
        d;
      n[0] !== t
        ? ((i = t.align),
          (l = t.justify),
          (a = t.size),
          (s = t.transparent),
          (d = t.xstyle),
          (r = babelHelpers.objectWithoutPropertiesLoose(t, e)),
          (n[0] = t),
          (n[1] = r),
          (n[2] = a),
          (n[3] = i),
          (n[4] = l),
          (n[5] = s),
          (n[6] = d))
        : ((r = n[1]),
          (a = n[2]),
          (i = n[3]),
          (l = n[4]),
          (s = n[5]),
          (d = n[6]));
      var m = i === void 0 ? "center" : i,
        p = l === void 0 ? "center" : l,
        _ = s === !0 && c.transparent,
        f;
      n[7] !== _ || n[8] !== d
        ? ((f = [c.shape, d, _]), (n[7] = _), (n[8] = d), (n[9] = f))
        : (f = n[9]);
      var g;
      n[10] !== a
        ? ((g = { width: a, height: a }), (n[10] = a), (n[11] = g))
        : (g = n[11]);
      var h;
      return (
        n[12] !== m || n[13] !== p || n[14] !== r || n[15] !== f || n[16] !== g
          ? ((h = u.jsx(
              o("WAWebFlexBox.react").FlexRow,
              babelHelpers.extends(
                { justify: p, align: m, xstyle: f, style: g },
                r,
              ),
            )),
            (n[12] = m),
            (n[13] = p),
            (n[14] = r),
            (n[15] = f),
            (n[16] = g),
            (n[17] = h))
          : (h = n[17]),
        h
      );
    }
    l.default = d;
  },
  98,
);
