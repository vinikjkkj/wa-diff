__d(
  "WAFlowsScreenAnimationContext",
  ["invariant", "WAFlowsNoop", "react"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react")),
      c = e,
      d = c.createContext,
      m = c.useContext,
      p = d({ animatingScreen: !1, setAnimatingScreen: r("WAFlowsNoop") });
    function _() {
      var e = m(p);
      return (e != null || s(0, 73577), e);
    }
    ((l.WAFlowsScreenAnimationContext = p), (l.useWAFlowsScreenAnimation = _));
  },
  98,
);
