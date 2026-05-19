__d(
  "CometSetSimplifiedUFICommentCountContextProvider",
  ["react", "react-compiler-runtime"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = e,
      c = u.useContext,
      d = u.useMemo,
      m = s.createContext({ setSimplifiedUFICommentCount: function () {} });
    function p(e) {
      var t = o("react-compiler-runtime").c(5),
        n = e.children,
        r = e.setSimplifiedUFICommentCount,
        a;
      t[0] !== r
        ? ((a = { setSimplifiedUFICommentCount: r }), (t[0] = r), (t[1] = a))
        : (a = t[1]);
      var i = a,
        l;
      return (
        t[2] !== n || t[3] !== i
          ? ((l = s.jsx(m.Provider, { value: i, children: n })),
            (t[2] = n),
            (t[3] = i),
            (t[4] = l))
          : (l = t[4]),
        l
      );
    }
    function _() {
      return c(m).setSimplifiedUFICommentCount;
    }
    ((l.CometSetSimplifiedUFICommentCountContext = m),
      (l.CometSetSimplifiedUFICommentCountContextProvider = p),
      (l.useCometSetSimplifiedUFICommentCountContext = _));
  },
  98,
);
