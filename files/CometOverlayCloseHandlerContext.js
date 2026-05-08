__d(
  "CometOverlayCloseHandlerContext",
  ["react", "react-compiler-runtime"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = e,
      c = u.useContext,
      d = u.useEffect,
      m = s.createContext(null);
    function p(e) {
      var t = o("react-compiler-runtime").c(4),
        n = c(m),
        r,
        a;
      (t[0] !== e || t[1] !== n
        ? ((r = function () {
            if (!(n == null || e == null)) {
              var t = n(e);
              return t;
            }
          }),
          (a = [n, e]),
          (t[0] = e),
          (t[1] = n),
          (t[2] = r),
          (t[3] = a))
        : ((r = t[2]), (a = t[3])),
        d(r, a));
    }
    ((l.CometOverlayCloseHandlerContext = m),
      (l.useCometOverlayCloseHandler = p));
  },
  98,
);
