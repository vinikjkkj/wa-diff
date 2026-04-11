__d(
  "FlowMigrationUtilsForLegacyFiles",
  ["FBLogger"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = "flow_typing_for_legacy_code";
    function s(t) {
      return (
        r("FBLogger")(e)
          .blameToPreviousFile()
          .event(e + ".bad_call")
          .mustfix(t),
        new Error("[" + e + "] " + t)
      );
    }
    l.invariantViolation = s;
  },
  98,
);
