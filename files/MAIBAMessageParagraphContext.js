__d(
  "MAIBAMessageParagraphContext",
  ["react"],
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
      var t = e.children,
        n = e.isLastBlock,
        r = m(
          function () {
            return { isLastBlock: n };
          },
          [n],
        );
      return s.jsx(_.Provider, { value: r, children: t });
    }
    f.displayName = f.name + " [from " + i.id + "]";
    function g() {
      return d(_);
    }
    ((l.MAIBAMessageParagraphContextProvider = f),
      (l.useMAIBAMessageParagraphContext = g));
  },
  98,
);
