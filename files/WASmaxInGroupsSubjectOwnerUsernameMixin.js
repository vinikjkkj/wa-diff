__d(
  "WASmaxInGroupsSubjectOwnerUsernameMixin",
  ["WAResultOrError", "WASmaxParseUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").attrString(e, "s_o_username");
      return t.success
        ? o("WAResultOrError").makeResult({ sOUsername: t.value })
        : t;
    }
    l.parseSubjectOwnerUsernameMixin = e;
  },
  98,
);
