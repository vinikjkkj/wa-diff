__d(
  "WASmaxInGroupsSubGroupSuggestionsActionSubGroupSuggestionNotFoundMixin",
  ["WAResultOrError", "WASmaxParseUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "sub_group_suggestion");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        e,
        "error",
        "404",
      );
      return n.success
        ? o("WAResultOrError").makeResult({ error: n.value })
        : n;
    }
    l.parseSubGroupSuggestionsActionSubGroupSuggestionNotFoundMixin = e;
  },
  98,
);
