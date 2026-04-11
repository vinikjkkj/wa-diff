__d(
  "WASmaxInGroupsUnnamedSubjectFallbackMixin",
  ["WAResultOrError", "WASmaxParseUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        e,
        "subject",
      );
      return t.success
        ? o("WAResultOrError").makeResult({ subject: t.value })
        : t;
    }
    l.parseUnnamedSubjectFallbackMixin = e;
  },
  98,
);
