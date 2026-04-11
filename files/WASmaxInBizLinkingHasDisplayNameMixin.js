__d(
  "WASmaxInBizLinkingHasDisplayNameMixin",
  ["WAResultOrError", "WASmaxParseUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").flattenedChildWithTag(e, "display_name");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").contentString(t.value);
      return n.success
        ? o("WAResultOrError").makeResult({ displayNameElementValue: n.value })
        : n;
    }
    l.parseHasDisplayNameMixin = e;
  },
  98,
);
