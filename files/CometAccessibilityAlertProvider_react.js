__d(
  "CometAccessibilityAlertProvider.react",
  [
    "CometTriggerAccessibilityAlertContext",
    "react",
    "react-compiler-runtime",
    "useCometAccessibilityAlerts",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = o("react-compiler-runtime").c(4),
        n = e.children,
        a = r("useCometAccessibilityAlerts")(),
        i = a.accessibilityAlerts,
        l = a.triggerAccessibilityAlert,
        u;
      return (
        t[0] !== i || t[1] !== n || t[2] !== l
          ? ((u = s.jsxs(r("CometTriggerAccessibilityAlertContext").Provider, {
              value: l,
              children: [n, i],
            })),
            (t[0] = i),
            (t[1] = n),
            (t[2] = l),
            (t[3] = u))
          : (u = t[3]),
        u
      );
    }
    l.default = u;
  },
  98,
);
