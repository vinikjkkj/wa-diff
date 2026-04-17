__d(
  "CometFeedStoryRootRectGetter",
  ["react", "react-compiler-runtime", "react-strict-dom"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = e,
      c = u.useCallback,
      d = u.useContext,
      m = u.useRef,
      p = function () {
        return null;
      },
      _ = s.createContext(p);
    function f(e) {
      var t = o("react-compiler-runtime").c(3),
        n = e.children,
        r = m(null),
        a;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((a = function () {
            var e;
            return (e = r.current) == null ? void 0 : e.getBoundingClientRect();
          }),
          (t[0] = a))
        : (a = t[0]);
      var i = a,
        l;
      return (
        t[1] !== n
          ? ((l = s.jsx(_.Provider, {
              value: i,
              children: s.jsx(o("react-strict-dom").html.div, {
                ref: r,
                children: n,
              }),
            })),
            (t[1] = n),
            (t[2] = l))
          : (l = t[2]),
        l
      );
    }
    function g() {
      return d(_);
    }
    ((l.CometFeedStoryRootRectGetterProvider = f),
      (l.useCometFeedStoryRootRectGetter = g));
  },
  98,
);
