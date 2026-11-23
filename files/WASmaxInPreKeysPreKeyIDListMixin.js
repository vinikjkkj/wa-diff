__d(
  "WASmaxInPreKeysPreKeyIDListMixin",
  ["WAResultOrError", "WASmaxInPreKeysKeyIDMixin", "WASmaxParseUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "id");
      if (!t.success) return t;
      var n = o("WASmaxInPreKeysKeyIDMixin").parseKeyIDMixin(e);
      return (n.success, n);
    }
    function s(t) {
      var n = o("WASmaxParseUtils").flattenedChildWithTag(t, "list");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").mapChildrenWithTag(
        n.value,
        "id",
        0,
        2e4,
        e,
      );
      return r.success
        ? o("WAResultOrError").makeResult({ listId: r.value })
        : r;
    }
    ((l.parsePreKeyIDListListId = e), (l.parsePreKeyIDListMixin = s));
  },
  98,
);
