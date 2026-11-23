__d(
  "WASmaxInPreKeysPQPreKeyIDListMixin",
  ["WAResultOrError", "WASmaxInPreKeysKeyIDMixin", "WASmaxParseUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "id");
      if (!t.success) return t;
      var n = o("WASmaxInPreKeysKeyIDMixin").parseKeyIDMixin(e);
      return (n.success, n);
    }
    function s(t) {
      var n = o("WASmaxParseUtils").flattenedChildWithTag(t, "pq_list");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").mapChildrenWithTag(
        n.value,
        "id",
        0,
        5e3,
        e,
      );
      return r.success
        ? o("WAResultOrError").makeResult({ pqListId: r.value })
        : r;
    }
    ((l.parsePQPreKeyIDListPqListId = e), (l.parsePQPreKeyIDListMixin = s));
  },
  98,
);
