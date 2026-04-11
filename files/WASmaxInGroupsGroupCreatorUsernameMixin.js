__d(
  "WASmaxInGroupsGroupCreatorUsernameMixin",
  ["WAResultOrError", "WASmaxParseUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").attrString(e, "creator_username");
      return t.success
        ? o("WAResultOrError").makeResult({ creatorUsername: t.value })
        : t;
    }
    l.parseGroupCreatorUsernameMixin = e;
  },
  98,
);
