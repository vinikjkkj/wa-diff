__d(
  "useWAWebInterval",
  ["react", "react-compiler-runtime", "useWAWebStableCallback"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = s.useCallback,
      c = s.useEffect,
      d = s.useRef;
    function m(e, t, n) {
      var a = o("react-compiler-runtime").c(12),
        i = t === void 0 ? 0 : t,
        l;
      a[0] !== n
        ? ((l = n != null ? n : {}), (a[0] = n), (a[1] = l))
        : (l = a[1]);
      var s = l,
        u = s.immediate,
        m = u === void 0 ? !1 : u,
        p = r("useWAWebStableCallback")(e),
        _ = d(),
        f;
      a[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((f = function () {
            _.current && self.clearInterval(_.current);
          }),
          (a[2] = f))
        : (f = a[2]);
      var g = f,
        h;
      a[3] !== i || a[4] !== p
        ? ((h = function () {
            (g(), (_.current = self.setInterval(p, i)));
          }),
          (a[3] = i),
          (a[4] = p),
          (a[5] = h))
        : (h = a[5]);
      var y = h,
        C,
        b;
      (a[6] !== m || a[7] !== y
        ? ((C = function () {
            return (m && y(), g);
          }),
          (b = [m, y, g]),
          (a[6] = m),
          (a[7] = y),
          (a[8] = C),
          (a[9] = b))
        : ((C = a[8]), (b = a[9])),
        c(C, b));
      var v;
      return (
        a[10] !== y ? ((v = [y, g]), (a[10] = y), (a[11] = v)) : (v = a[11]),
        v
      );
    }
    l.default = m;
  },
  98,
);
