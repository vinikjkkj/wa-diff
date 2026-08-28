__d(
  "MAIBAStreamingRevealContext",
  ["react", "react-compiler-runtime"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = e,
      c = u.createContext,
      d = u.useContext,
      m = {
        hasFrontier: !1,
        isAnimated: !1,
        isRevealing: !1,
        revealedCodePoints: 0,
      },
      p = c(m);
    function _(e) {
      var t = o("react-compiler-runtime").c(3),
        n = e.children,
        r = e.value,
        a;
      return (
        t[0] !== n || t[1] !== r
          ? ((a = s.jsx(p.Provider, { value: r, children: n })),
            (t[0] = n),
            (t[1] = r),
            (t[2] = a))
          : (a = t[2]),
        a
      );
    }
    function f() {
      return d(p);
    }
    ((l.MAIBAStreamingRevealDefaultValue = m),
      (l.MAIBAStreamingRevealProvider = _),
      (l.useMAIBAStreamingReveal = f));
  },
  98,
);
