__d(
  "CometOnRefresh",
  ["CometRouterRefreshKeyContext", "react", "react-compiler-runtime"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = s.useContext,
      c = s.useEffect,
      d = s.useRef;
    function m(e) {
      var t = o("react-compiler-runtime").c(4),
        n = u(r("CometRouterRefreshKeyContext")),
        a = d(n),
        i,
        l;
      (t[0] !== e || t[1] !== n
        ? ((i = function () {
            n != null && n !== a.current && ((a.current = n), e());
          }),
          (l = [n, e]),
          (t[0] = e),
          (t[1] = n),
          (t[2] = i),
          (t[3] = l))
        : ((i = t[2]), (l = t[3])),
        c(i, l));
    }
    l.useOnRefresh = m;
  },
  98,
);
