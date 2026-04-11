__d(
  "useHeroBootloadedComponent",
  ["CometHeroInteractionContext", "react", "react-compiler-runtime"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = s.useContext,
      c = s.useEffect;
    function d(e) {
      var t = o("react-compiler-runtime").c(4),
        n = u(r("CometHeroInteractionContext").Context),
        a,
        i;
      (t[0] !== n || t[1] !== e
        ? ((a = function () {
            n.consumeBootload(e.getModuleId());
          }),
          (i = [n, e]),
          (t[0] = n),
          (t[1] = e),
          (t[2] = a),
          (t[3] = i))
        : ((a = t[2]), (i = t[3])),
        c(a, i));
    }
    l.default = d;
  },
  98,
);
