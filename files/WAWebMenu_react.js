__d(
  "WAWebMenu.react",
  [
    "WAWebMenuController.react",
    "asyncToGeneratorRuntime",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    var e = ["ref"],
      s,
      u = s || (s = o("react")),
      c = s.useState;
    function d(t) {
      var r = o("react-compiler-runtime").c(12),
        a,
        i;
      r[0] !== t
        ? ((i = t.ref),
          (a = babelHelpers.objectWithoutPropertiesLoose(t, e)),
          (r[0] = t),
          (r[1] = a),
          (r[2] = i))
        : ((a = r[1]), (i = r[2]));
      var l;
      r[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((l = new Map()), (r[3] = l))
        : (l = r[3]);
      var s = c(l),
        d = s[0],
        m = s[1],
        p;
      r[4] === Symbol.for("react.memo_cache_sentinel")
        ? ((p = {
            onChange: (function () {
              var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                function* (e) {
                  yield m(e);
                },
              );
              function t(t) {
                return e.apply(this, arguments);
              }
              return t;
            })(),
            onOrderChange: (function () {
              var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                function* (e) {
                  yield m(e);
                },
              );
              function t(t) {
                return e.apply(this, arguments);
              }
              return t;
            })(),
          }),
          (r[4] = p))
        : (p = r[4]);
      var _ = o("WAWebMenuController.react").useRegister(p),
        f;
      r[5] !== d || r[6] !== a || r[7] !== i
        ? ((f = u.jsx(
            o("WAWebMenuController.react").WAWebMenuController,
            babelHelpers.extends({ data: d }, a, { ref: i }),
          )),
          (r[5] = d),
          (r[6] = a),
          (r[7] = i),
          (r[8] = f))
        : (f = r[8]);
      var g;
      return (
        r[9] !== _ || r[10] !== f
          ? ((g = u.jsx(o("WAWebMenuController.react").Register, {
              registerRef: _,
              children: f,
            })),
            (r[9] = _),
            (r[10] = f),
            (r[11] = g))
          : (g = r[11]),
        g
      );
    }
    l.WAWebMenu = d;
  },
  98,
);
