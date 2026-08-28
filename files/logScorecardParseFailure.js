__d(
  "logScorecardParseFailure",
  ["AdsHelpTrayUILogger", "FBLogger", "err"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n, a, i, l) {
      var s,
        u = e instanceof Error ? e.message : String(e),
        c = e instanceof Error ? e.name : "",
        d = e instanceof Error && (s = e.stack) != null ? s : "";
      (r("FBLogger")(a)
        .catching(e instanceof Error ? e : r("err")(u))
        .warn(i),
        o("AdsHelpTrayUILogger").logMAIBAScorecardParseError(t, n, u, c, d, l));
    }
    l.default = e;
  },
  98,
);
