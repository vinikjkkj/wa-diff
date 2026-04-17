__d(
  "CometFeedStoryHideElementsContext",
  ["react", "react-compiler-runtime"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = e.useContext,
      c = { hideFooter: !1 },
      d = s.createContext(c);
    function m(e) {
      var t = o("react-compiler-runtime").c(3),
        n = e.children,
        r = e.value,
        a;
      return (
        t[0] !== n || t[1] !== r
          ? ((a = s.jsx(d.Provider, { value: r, children: n })),
            (t[0] = n),
            (t[1] = r),
            (t[2] = a))
          : (a = t[2]),
        a
      );
    }
    function p() {
      return u(d);
    }
    ((l.CometFeedStoryHideElementsContextProvider = m),
      (l.useCometFeedStoryHideElementsContext = p));
  },
  98,
);
