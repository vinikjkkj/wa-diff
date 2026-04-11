__d(
  "RSTIncidentID",
  ["RSTUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 0,
      s = Date.now(),
      u = o("RSTUtils").getExecutionContext();
    function c(t) {
      return t + "-" + s + "-" + u + "-" + e++;
    }
    l.getUniqueIncidentID = c;
  },
  98,
);
