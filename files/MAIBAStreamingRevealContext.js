__d(
  "MAIBAStreamingRevealContext",
  ["react"],
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
      var t = e.children,
        n = e.value;
      return s.jsx(p.Provider, { value: n, children: t });
    }
    _.displayName = _.name + " [from " + i.id + "]";
    function f() {
      return d(p);
    }
    ((l.MAIBAStreamingRevealDefaultValue = m),
      (l.MAIBAStreamingRevealProvider = _),
      (l.useMAIBAStreamingReveal = f));
  },
  98,
);
