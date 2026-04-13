__d(
  "WAWebStaticCanvas.react",
  ["react", "react-compiler-runtime"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = e.memo;
    function c(e) {
      var t = o("react-compiler-runtime").c(3),
        n = e.className,
        r = e.ref,
        a;
      return (
        t[0] !== n || t[1] !== r
          ? ((a = s.jsx("canvas", { className: n, ref: r })),
            (t[0] = n),
            (t[1] = r),
            (t[2] = a))
          : (a = t[2]),
        a
      );
    }
    var d = u(c, function (t, n) {
      return t.className === n.className;
    });
    l.default = d;
  },
  98,
);
