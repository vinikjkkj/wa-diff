__d(
  "useCometAccessibilityAlerts",
  [
    "CometAccessibilityAnnouncement.react",
    "react",
    "react-compiler-runtime",
    "useAccessibilityAlerts",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = o("react-compiler-runtime").c(2),
        n = e.alerts,
        r;
      return (
        t[0] !== n ? ((r = n.map(c)), (t[0] = n), (t[1] = r)) : (r = t[1]),
        r
      );
    }
    function c(e) {
      var t = e.key,
        n = e.message,
        o = e.options;
      return s.createElement(
        r("CometAccessibilityAnnouncement.react"),
        babelHelpers.extends({}, o, { key: t }),
        n,
      );
    }
    c.displayName = c.name + " [from " + i.id + "]";
    function d() {
      var e = o("react-compiler-runtime").c(5),
        t = r("useAccessibilityAlerts")(),
        n = t[0],
        a = t[1],
        i;
      e[0] !== n
        ? ((i = s.jsx(u, { alerts: n })), (e[0] = n), (e[1] = i))
        : (i = e[1]);
      var l;
      return (
        e[2] !== i || e[3] !== a
          ? ((l = { accessibilityAlerts: i, triggerAccessibilityAlert: a }),
            (e[2] = i),
            (e[3] = a),
            (e[4] = l))
          : (l = e[4]),
        l
      );
    }
    l.default = d;
  },
  98,
);
