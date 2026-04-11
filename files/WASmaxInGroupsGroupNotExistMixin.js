__d(
  "WASmaxInGroupsGroupNotExistMixin",
  ["WAResultOrError", "WASmaxParseUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "group");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").attrString(e, "id");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        e,
        "error",
        "404",
      );
      return r.success
        ? o("WAResultOrError").makeResult({ id: n.value, error: r.value })
        : r;
    }
    l.parseGroupNotExistMixin = e;
  },
  98,
);
