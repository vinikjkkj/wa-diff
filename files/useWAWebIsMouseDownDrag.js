__d(
  "useWAWebIsMouseDownDrag",
  ["react", "react-compiler-runtime", "useWAWebListener"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = s.useCallback,
      c = s.useRef;
    function d(e, t) {
      var n = o("react-compiler-runtime").c(4),
        r = e === void 0 ? 200 : e,
        a = t === void 0 ? window : t,
        i = c(null),
        l;
      (n[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((l = function () {
            i.current = self.performance.now();
          }),
          (n[0] = l))
        : (l = n[0]),
        o("useWAWebListener").useListener(a, "mousedown", l));
      var s;
      (n[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((s = function () {
            i.current = null;
          }),
          (n[1] = s))
        : (s = n[1]),
        o("useWAWebListener").useListener(a, "mouseup", s));
      var u;
      n[2] !== r
        ? ((u = function () {
            var e = i.current;
            return e != null && self.performance.now() - e >= r;
          }),
          (n[2] = r),
          (n[3] = u))
        : (u = n[3]);
      var d = u;
      return d;
    }
    l.default = d;
  },
  98,
);
