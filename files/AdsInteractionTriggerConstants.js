__d(
  "AdsInteractionTriggerConstants",
  ["AdsInteractionTriggerEvent"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c = 1,
      d = 0.1,
      m =
        ((e = {}),
        (e[(u = r("AdsInteractionTriggerEvent")).CODE] = "CODE_EVENT"),
        (e[u.CLICK] = "MOUSE_CLICK_EVENT"),
        (e[u.MOUSEDOWN] = "MOUSE_DOWN_EVENT"),
        (e[u.MOUSEOVER] = "MOUSE_OVER_EVENT"),
        e),
      p =
        ((s = {}),
        (s[u.CODE] = c),
        (s[u.CLICK] = 0.91),
        (s[u.MOUSEDOWN] = 0.73),
        (s[u.MOUSEOVER] = 0.3),
        s);
    ((l.REAL_INTERACTION_CONFIDENCE = c),
      (l.MIN_SPECULATIVE_INTERACTION_CONFIDENCE = d),
      (l.EVENT_QPL_POINT = m),
      (l.EVENT_CONFIDENCE_RATIO = p));
  },
  98,
);
