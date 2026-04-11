__d(
  "WASmaxInGroupsDisplayNameMixin",
  ["WAResultOrError", "WASmaxParseUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").attrString(e, "display_name");
      return t.success
        ? o("WAResultOrError").makeResult({ displayName: t.value })
        : t;
    }
    l.parseDisplayNameMixin = e;
  },
  98,
);
