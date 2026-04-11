__d(
  "WAWebStrictMode.react",
  ["StrictMode", "gkx", "react", "react-compiler-runtime"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = o("react-compiler-runtime").c(2),
        n = e.children;
      if (r("gkx")("18530")) {
        var a;
        return (
          t[0] !== n
            ? ((a = s.jsx(r("StrictMode"), { children: n })),
              (t[0] = n),
              (t[1] = a))
            : (a = t[1]),
          a
        );
      }
      return n;
    }
    l.default = u;
  },
  98,
);
