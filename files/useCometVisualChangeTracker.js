__d(
  "useCometVisualChangeTracker",
  ["CometVisualCompletion", "react", "react-compiler-runtime"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = s.useCallback,
      c = s.useEffect,
      d = s.useRef;
    function m() {
      var e = o("react-compiler-runtime").c(3),
        t = d(null),
        n = d(null),
        a,
        i;
      (e[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((a = function () {
            return function () {
              (n.current && n.current(),
                (n.current = null),
                (t.current = null));
            };
          }),
          (i = []),
          (e[0] = a),
          (e[1] = i))
        : ((a = e[0]), (i = e[1])),
        c(a, i));
      var l;
      return (
        e[2] === Symbol.for("react.memo_cache_sentinel")
          ? ((l = function (o) {
              if (
                t.current !== o &&
                (n.current && (n.current(), (n.current = null)),
                (t.current = o),
                o)
              ) {
                var e = r("CometVisualCompletion").getCurrentNavigationTrace();
                e && (n.current = e.addMutationRoot(o));
              }
            }),
            (e[2] = l))
          : (l = e[2]),
        l
      );
    }
    l.default = m;
  },
  98,
);
