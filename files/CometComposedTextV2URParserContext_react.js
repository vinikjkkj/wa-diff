__d(
  "CometComposedTextV2URParserContext.react",
  ["react", "react-compiler-runtime"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = e,
      c = u.useContext,
      d = u.useMemo,
      m = { markedTokenizeOptions: null, renderers: {} },
      p = s.createContext(m);
    function _(e) {
      var t = o("react-compiler-runtime").c(8),
        n = e.children,
        r = e.markedTokenizeOptions,
        a = e.renderers,
        i = r != null ? r : null,
        l;
      t[0] !== a
        ? ((l = a != null ? a : {}), (t[0] = a), (t[1] = l))
        : (l = t[1]);
      var u;
      t[2] !== i || t[3] !== l
        ? ((u = { markedTokenizeOptions: i, renderers: l }),
          (t[2] = i),
          (t[3] = l),
          (t[4] = u))
        : (u = t[4]);
      var c = u,
        d;
      return (
        t[5] !== n || t[6] !== c
          ? ((d = s.jsx(p.Provider, { value: c, children: n })),
            (t[5] = n),
            (t[6] = c),
            (t[7] = d))
          : (d = t[7]),
        d
      );
    }
    function f() {
      return c(p);
    }
    ((l.CometComposedTextV2URParserContextProvider = _),
      (l.useCometComposedTextV2URParserContext = f));
  },
  98,
);
