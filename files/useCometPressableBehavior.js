__d(
  "useCometPressableBehavior",
  [
    "BasePlaceholderContext",
    "CometDangerouslySuppressInteractiveElementsContext",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = (e || (e = o("react"))).useContext;
    function u() {
      var e = o("react-compiler-runtime").c(3),
        t = s(r("BasePlaceholderContext")),
        n = s(r("CometDangerouslySuppressInteractiveElementsContext")),
        a;
      return (
        e[0] !== t || e[1] !== n
          ? ((a = { isPlaceholder: t, suppressInteractiveElements: n }),
            (e[0] = t),
            (e[1] = n),
            (e[2] = a))
          : (a = e[2]),
        a
      );
    }
    l.default = u;
  },
  98,
);
