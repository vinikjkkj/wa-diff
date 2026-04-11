__d(
  "WASmaxInGroupsNamedSubjectMixin",
  ["WAResultOrError", "WASmaxParseUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").attrString(e, "subject");
      return t.success
        ? o("WAResultOrError").makeResult({ subject: t.value })
        : t;
    }
    l.parseNamedSubjectMixin = e;
  },
  98,
);
