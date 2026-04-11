__d(
  "useVideoPlayerXAPIOutsideVideoPlayerSurface",
  ["emptyObject", "react", "react-compiler-runtime", "useStable"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = s.useRef,
      c = s.useState;
    function d() {
      var e = o("react-compiler-runtime").c(4),
        t = c(r("emptyObject")),
        n = t[0],
        a = t[1],
        i = u(r("emptyObject")),
        l;
      e[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((l = function () {
            return function (e) {
              ((i.current = e != null ? e : r("emptyObject")),
                a(e != null ? e : r("emptyObject")));
            };
          }),
          (e[0] = l))
        : (l = e[0]);
      var s = r("useStable")(l),
        d = s,
        m;
      return (
        e[1] !== n || e[2] !== d
          ? ((m = [d, n, i]), (e[1] = n), (e[2] = d), (e[3] = m))
          : (m = e[3]),
        m
      );
    }
    l.useVideoPlayerXAPIOutsideVideoPlayerSurface = d;
  },
  98,
);
