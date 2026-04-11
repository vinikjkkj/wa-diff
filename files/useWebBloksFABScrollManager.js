__d(
  "useWebBloksFABScrollManager",
  ["react", "react-compiler-runtime"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = e.useEffect,
      c = s.createContext("reset");
    function d(e, t) {
      var n,
        r = o("react-compiler-runtime").c(3),
        a,
        i;
      if (
        (r[0] !== e
          ? ((a = function () {
              if (e) {
                var t = window.history.scrollRestoration;
                window.history.scrollRestoration = "manual";
                var n = window.history.state;
                return (
                  n != null &&
                    !n.fabEnabled &&
                    window.history.replaceState(
                      babelHelpers.extends({}, n, { fabEnabled: !0 }),
                      "",
                    ),
                  function () {
                    window.history.scrollRestoration = t;
                  }
                );
              }
            }),
            (i = [e]),
            (r[0] = e),
            (r[1] = a),
            (r[2] = i))
          : ((a = r[1]), (i = r[2])),
        u(a, i),
        !e)
      )
        return "reset";
      var l = t.navigationManager.getNavigationDirection();
      return l === "back" &&
        ((n = window.history.state) == null ? void 0 : n.fabScrollY) != null
        ? "restore"
        : "reset";
    }
    ((l.FABScrollBehaviorContext = c), (l.useWebBloksFABScrollManager = d));
  },
  98,
);
