__d(
  "HeroHoldTrigger.react",
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
      var t = o("react-compiler-runtime").c(6),
        n = e.description,
        a = e.hold,
        i = u(o("HeroInteractionContext").Context),
        l = u(r("HeroInteractionIDContext")),
        s,
        d;
      return (
        t[0] !== n || t[1] !== i || t[2] !== a || t[3] !== l
          ? ((s = function () {
              if (a && l != null) {
                var e = i.hold(l, i.pageletStack, n);
                return function () {
                  i.unhold(l, e);
                };
              }
            }),
            (d = [n, i, l, a]),
            (t[0] = n),
            (t[1] = i),
            (t[2] = a),
            (t[3] = l),
            (t[4] = s),
            (t[5] = d))
          : ((s = t[4]), (d = t[5])),
        c(s, d),
        null
      );
    }
    ((d.displayName = "HeroHoldTrigger"), (l.default = d));
  },
  98,
);
