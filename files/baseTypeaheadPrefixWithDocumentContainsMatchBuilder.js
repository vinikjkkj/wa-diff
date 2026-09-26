__d(
  "baseTypeaheadPrefixWithDocumentContainsMatchBuilder",
  ["baseTypeaheadContainsMatchBuilder", "baseTypeaheadStartsWithMatchBuilder"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = e.query;
      return function (e) {
        return e.key.includes("diff:") ||
          e.key.includes("task:") ||
          e.key.includes("gdocs:") ||
          e.key.includes("quip:") ||
          e.key.includes("notes:") ||
          e.key.includes("wiki:")
          ? r("baseTypeaheadContainsMatchBuilder")({ query: t })(e)
          : r("baseTypeaheadStartsWithMatchBuilder")({ query: t })(e);
      };
    }
    l.default = e;
  },
  98,
);
