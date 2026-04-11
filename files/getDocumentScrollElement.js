__d(
  "getDocumentScrollElement",
  ["FlowMigrationUtilsForLegacyFiles"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e =
      typeof navigator != "undefined" &&
      navigator.userAgent.indexOf("AppleWebKit") > -1;
    function s(t) {
      var n = t || document;
      if (n.scrollingElement) return n.scrollingElement;
      var r = !e && n.compatMode === "CSS1Compat" ? n.documentElement : n.body;
      return (
        r ||
          o("FlowMigrationUtilsForLegacyFiles").invariantViolation(
            "null result in getDocumentScrollElement",
          ),
        r
      );
    }
    l.default = s;
  },
  98,
);
