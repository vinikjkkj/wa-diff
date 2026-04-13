__d(
  "WAWebSquircleShape.react",
  ["WAWebShapeContainer.react", "react", "react-compiler-runtime"],
  function (t, n, r, o, a, i, l) {
    var e = ["xstyle"],
      s,
      u = s || (s = o("react")),
      c = { container: { clipPath: "x1f2iure", $$css: !0 } };
    function d(t) {
      var n = o("react-compiler-runtime").c(8),
        a,
        i;
      n[0] !== t
        ? ((i = t.xstyle),
          (a = babelHelpers.objectWithoutPropertiesLoose(t, e)),
          (n[0] = t),
          (n[1] = a),
          (n[2] = i))
        : ((a = n[1]), (i = n[2]));
      var l;
      n[3] !== i
        ? ((l = [c.container, i]), (n[3] = i), (n[4] = l))
        : (l = n[4]);
      var s;
      return (
        n[5] !== a || n[6] !== l
          ? ((s = u.jsx(
              r("WAWebShapeContainer.react"),
              babelHelpers.extends({ xstyle: l }, a),
            )),
            (n[5] = a),
            (n[6] = l),
            (n[7] = s))
          : (s = n[7]),
        s
      );
    }
    l.default = d;
  },
  98,
);
