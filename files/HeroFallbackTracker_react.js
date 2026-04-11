__d(
  "HeroFallbackTracker.react",
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
      u = s.useContext,
      c = s.useLayoutEffect;
    function d(e) {
      var t = o("react-compiler-runtime").c(5),
        n = e.uuid,
        a = u(o("HeroInteractionContext").Context),
        i = u(r("HeroInteractionIDContext")),
        l,
        s;
      return (
        t[0] !== a || t[1] !== i || t[2] !== n
          ? ((l = function () {
              if (i != null)
                return (
                  a.registerPlaceholder(i, n, a.pageletStack),
                  function () {
                    a.removePlaceholder(i, n);
                  }
                );
            }),
            (s = [a, i, n]),
            (t[0] = a),
            (t[1] = i),
            (t[2] = n),
            (t[3] = l),
            (t[4] = s))
          : ((l = t[3]), (s = t[4])),
        c(l, s),
        null
      );
    }
    ((d.displayName = "HeroFallbackTracker"), (l.default = d));
  },
  98,
);
