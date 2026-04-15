__d(
  "useWAWebOnScreen",
  ["react", "react-compiler-runtime"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = s.useEffect,
      c = s.useMemo,
      d = s.useState;
    function m(e) {
      return e.isIntersecting != null
        ? e.isIntersecting
        : e.intersectionRatio > 0 ||
            (e.intersectionRect &&
              (e.intersectionRect.height > 0 || e.intersectionRect.width > 0));
    }
    function p(e, t) {
      var n = o("react-compiler-runtime").c(5),
        r = d(!1),
        a = r[0],
        i = r[1],
        l;
      n[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((l = new IntersectionObserver(function (e) {
            var t = e[0];
            return i(m(t));
          })),
          (n[0] = l))
        : (l = n[0]);
      var s = l,
        c,
        p;
      return (
        n[1] !== t || n[2] !== e
          ? ((c = function () {
              if (!(e == null || e.current == null))
                return (
                  s.observe(e.current),
                  function () {
                    (t(), s.disconnect());
                  }
                );
            }),
            (p = [e, s, t]),
            (n[1] = t),
            (n[2] = e),
            (n[3] = c),
            (n[4] = p))
          : ((c = n[3]), (p = n[4])),
        u(c, p),
        a
      );
    }
    l.default = p;
  },
  98,
);
