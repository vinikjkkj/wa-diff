__d(
  "WAWebListIcon.react",
  ["react", "react-compiler-runtime", "stylex"],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = s || (s = o("react")),
      c = 12,
      d = {
        circle: {
          display: "x1rg5ohu",
          borderStartStartRadius: "x1c9tyrk",
          borderStartEndRadius: "xeusxvb",
          borderEndEndRadius: "x1pahc9y",
          borderEndStartRadius: "x1ertn4p",
          flexShrink: "x2lah0s",
          $$css: !0,
        },
        defaultColor: { backgroundColor: "x1518k6t", $$css: !0 },
      };
    function m(t) {
      var n = o("react-compiler-runtime").c(12),
        a = t.color,
        i = t.size,
        l = t.xstyle,
        s = i === void 0 ? c : i,
        m = a != null,
        p;
      n[0] !== m || n[1] !== l
        ? ((p = (e || (e = r("stylex"))).props(
            d.circle,
            !m && d.defaultColor,
            l,
          )),
          (n[0] = m),
          (n[1] = l),
          (n[2] = p))
        : (p = n[2]);
      var _;
      n[3] !== a || n[4] !== m
        ? ((_ = m ? { backgroundColor: a } : {}),
          (n[3] = a),
          (n[4] = m),
          (n[5] = _))
        : (_ = n[5]);
      var f;
      n[6] !== s || n[7] !== _
        ? ((f = babelHelpers.extends({}, _, { width: s, height: s })),
          (n[6] = s),
          (n[7] = _),
          (n[8] = f))
        : (f = n[8]);
      var g;
      return (
        n[9] !== p || n[10] !== f
          ? ((g = u.jsx(
              "span",
              babelHelpers.extends({ "data-testid": void 0 }, p, { style: f }),
            )),
            (n[9] = p),
            (n[10] = f),
            (n[11] = g))
          : (g = n[11]),
        g
      );
    }
    l.default = m;
  },
  98,
);
