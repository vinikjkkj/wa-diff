__d(
  "WASmaxDecisionTreeUtils",
  ["WAResultOrError", "WASmaxParseUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = o("WASmaxParseUtils").maybeChildren(e);
      if (!t.success) return t;
      var n = t.value;
      return n == null || n.length === 0
        ? o("WASmaxParseUtils").errorMessage(
            e,
            "to have at least 1 child, but found 0",
          )
        : o("WAResultOrError").makeResult(n[0]);
    }
    l.firstChild = e;
  },
  98,
);
