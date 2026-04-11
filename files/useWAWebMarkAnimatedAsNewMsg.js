__d(
  "useWAWebMarkAnimatedAsNewMsg",
  ["react", "react-compiler-runtime"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = s.useEffect,
      c = s.useRef;
    function d(e, t) {
      var n = o("react-compiler-runtime").c(4),
        r = c(!1),
        a,
        i;
      (n[0] !== t || n[1] !== e
        ? ((a = function () {
            !r.current && e && ((r.current = !0), t(!0));
          }),
          (i = [e, t]),
          (n[0] = t),
          (n[1] = e),
          (n[2] = a),
          (n[3] = i))
        : ((a = n[2]), (i = n[3])),
        u(a, i));
    }
    l.useMarkAnimatedAsNewMsg = d;
  },
  98,
);
