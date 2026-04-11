__d(
  "qplTimingsServerJS",
  ["UserTimingUtils", "nowServerJS", "performanceNow"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = {};
    function u(t, n, a) {
      if (t == null) return s;
      (s[t] == null && (s[t] = {}),
        n != null &&
          ((s[t][n] = a != null ? a : r("nowServerJS")()),
          o("UserTimingUtils").measureModern(
            n,
            { start: 0, end: (e || (e = r("performanceNow")))() },
            "ServerJS",
          )));
    }
    l.default = u;
  },
  98,
);
