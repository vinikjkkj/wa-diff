__d(
  "useWAWebLogEventOnce",
  ["react", "react-compiler-runtime", "useWAWebStableCallback"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = s.useEffect,
      c = s.useRef;
    function d(e) {
      var t = o("react-compiler-runtime").c(3),
        n = c(!1),
        a = r("useWAWebStableCallback")(e),
        i,
        l;
      (t[0] !== a
        ? ((i = function () {
            n.current || ((n.current = !0), a());
          }),
          (l = [a]),
          (t[0] = a),
          (t[1] = i),
          (t[2] = l))
        : ((i = t[1]), (l = t[2])),
        u(i, l));
    }
    l.useLogEventOnce = d;
  },
  98,
);
