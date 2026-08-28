__d(
  "MAIBAMessageParagraphContext",
  ["react", "react-compiler-runtime"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = e,
      c = u.createContext,
      d = u.useContext,
      m = u.useMemo,
      p = { isLastBlock: !1 },
      _ = c(p);
    function f(e) {
      var t = o("react-compiler-runtime").c(5),
        n = e.children,
        r = e.isLastBlock,
        a;
      t[0] !== r
        ? ((a = { isLastBlock: r }), (t[0] = r), (t[1] = a))
        : (a = t[1]);
      var i = a,
        l;
      return (
        t[2] !== n || t[3] !== i
          ? ((l = s.jsx(_.Provider, { value: i, children: n })),
            (t[2] = n),
            (t[3] = i),
            (t[4] = l))
          : (l = t[4]),
        l
      );
    }
    function g() {
      return d(_);
    }
    ((l.MAIBAMessageParagraphContextProvider = f),
      (l.useMAIBAMessageParagraphContext = g));
  },
  98,
);
