__d(
  "useWAWebToggle",
  ["react", "react-compiler-runtime", "useWAWebStableCallback"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = s.useCallback,
      c = s.useState;
    function d(e, t) {
      var n = o("react-compiler-runtime").c(5),
        a = r("useWAWebStableCallback")(t),
        i = c(e),
        l = i[0],
        s = i[1],
        u;
      n[0] !== a
        ? ((u = function () {
            return s(function (e) {
              var t = !e;
              return (a(t), t);
            });
          }),
          (n[0] = a),
          (n[1] = u))
        : (u = n[1]);
      var d = u,
        m;
      return (
        n[2] !== l || n[3] !== d
          ? ((m = [l, d]), (n[2] = l), (n[3] = d), (n[4] = m))
          : (m = n[4]),
        m
      );
    }
    l.default = d;
  },
  98,
);
