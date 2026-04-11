__d(
  "useTriggerAccessibilityAlert",
  [
    "fbt",
    "CometTriggerAccessibilityAlertContext",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react")),
      c = u.useCallback,
      d = u.useContext;
    function m() {
      var e = o("react-compiler-runtime").c(2),
        t = d(r("CometTriggerAccessibilityAlertContext")),
        n;
      return (
        e[0] !== t
          ? ((n = function (n) {
              (typeof n == "string" || s.isFbtInstance(n)) && t(n);
            }),
            (e[0] = t),
            (e[1] = n))
          : (n = e[1]),
        n
      );
    }
    l.default = m;
  },
  98,
);
