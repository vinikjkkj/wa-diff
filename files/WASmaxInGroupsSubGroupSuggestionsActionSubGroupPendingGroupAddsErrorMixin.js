__d(
  "WASmaxInGroupsSubGroupSuggestionsActionSubGroupPendingGroupAddsErrorMixin",
  ["WAResultOrError", "WASmaxParseUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "sub_group_suggestion");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        e,
        "error",
        "433",
      );
      return n.success
        ? o("WAResultOrError").makeResult({ error: n.value })
        : n;
    }
    l.parseSubGroupSuggestionsActionSubGroupPendingGroupAddsErrorMixin = e;
  },
  98,
);
