__d(
  "WASmaxInReceiptSenderAggregatedDeliverServerIDMixin",
  ["WAResultOrError", "WASmaxParseUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "item");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").attrIntRange(
        e,
        "server_id",
        99,
        2147476647,
      );
      return n.success
        ? o("WAResultOrError").makeResult({ serverId: n.value })
        : n;
    }
    function s(t) {
      var n = o("WASmaxParseUtils").assertTag(t, "receipt");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").flattenedChildWithTag(t, "list");
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").attrStanzaId(t, "id");
      if (!a.success) return a;
      var i = o("WASmaxParseUtils").mapChildrenWithTag(
        r.value,
        "item",
        0,
        128e3,
        e,
      );
      return i.success
        ? o("WAResultOrError").makeResult({ id: a.value, listItem: i.value })
        : i;
    }
    ((l.parseSenderAggregatedDeliverServerIDListItem = e),
      (l.parseSenderAggregatedDeliverServerIDMixin = s));
  },
  98,
);
