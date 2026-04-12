__d(
  "useWAWebOnScreen",
  ["react"],
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
      var n = d(!1),
        r = n[0],
        o = n[1],
        a = c(function () {
          return new IntersectionObserver(function (e) {
            var t = e[0];
            return o(m(t));
          });
        }, []);
      return (
        u(
          function () {
            if (!(e == null || e.current == null))
              return (
                a.observe(e.current),
                function () {
                  (t(), a.disconnect());
                }
              );
          },
          [e, a, t],
        ),
        r
      );
    }
    l.default = p;
  },
  98,
);
