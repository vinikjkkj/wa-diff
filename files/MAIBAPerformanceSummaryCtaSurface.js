__d(
  "MAIBAPerformanceSummaryCtaSurface",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = "none";
    function l(e) {
      return (e != null ? e : "")
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "_")
        .replace(/^_+|_+$/g, "");
    }
    function s(t, n) {
      var r,
        o = l((r = t.validator) != null ? r : n.actionName),
        a = l(t.level),
        i = l(n.elicitationId),
        s = l(n.actionName);
      return [
        o !== "" ? o : "unknown_action",
        a !== "" ? a : "unknown_level",
        i !== "" ? i : e,
        s !== "" ? s : e,
      ].join("_");
    }
    ((i.CTA_SEGMENT_MISSING = e),
      (i.toSurfaceToken = l),
      (i.getPerformanceSummaryCtaSurface = s));
  },
  66,
);
