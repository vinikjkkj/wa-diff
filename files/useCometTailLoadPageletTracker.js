__d(
  "useCometTailLoadPageletTracker",
  [
    "CometTailLoadLogger",
    "intersectionObserverEntryIsIntersecting",
    "react",
    "useCometRouteTracePolicy",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = s.useCallback,
      c = s.useRef;
    function d(e, t, n) {
      var a = c(null),
        i = c(!1),
        l = c(null),
        s = r("useCometRouteTracePolicy")();
      return u(
        function (u) {
          if (u == null) {
            (l.current == null || l.current(), (l.current = null));
            return;
          }
          if (n === !0 && e != null && t != null && a.current !== u) {
            a.current = u;
            var c = function (a) {
                Array.prototype.forEach.call(a, function (n) {
                  r("intersectionObserverEntryIsIntersecting")(n) &&
                    !i.current &&
                    ((i.current = !0),
                    l.current == null || l.current(),
                    (l.current = null),
                    o("CometTailLoadLogger").logMarkerEnd(e, t, n.time, 2, s));
                });
              },
              d = new IntersectionObserver(c);
            (d.observe(u),
              (l.current = function () {
                ((a.current = null), d.disconnect());
              }));
          }
        },
        [e, t, n],
      );
    }
    l.default = d;
  },
  98,
);
