__d(
  "HeroComponent.react",
  [
    "HeroInteractionContext",
    "HeroInteractionIDContext",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = e,
      c = u.useContext,
      d = u.useLayoutEffect;
    function m(e) {
      var t = o("react-compiler-runtime").c(5),
        n = e.description,
        a = c(o("HeroInteractionContext").Context),
        i = c(r("HeroInteractionIDContext")),
        l,
        s;
      return (
        t[0] !== n || t[1] !== a || t[2] !== i
          ? ((l = function () {
              i != null && a.logHeroRender(i, n, a.pageletStack);
            }),
            (s = [n, a, i]),
            (t[0] = n),
            (t[1] = a),
            (t[2] = i),
            (t[3] = l),
            (t[4] = s))
          : ((l = t[3]), (s = t[4])),
        d(l, s),
        null
      );
    }
    m.displayName = "HeroComponent";
    var p = s.memo(m);
    l.default = p;
  },
  98,
);
