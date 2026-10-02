__d(
  "WASmaxInReceiptSenderAggregatedDeliverMixin",
  ["WAResultOrError", "WASmaxInReceiptDeprecatedEditMixin", "WASmaxParseUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "item");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").attrStanzaId(e, "id");
      if (!n.success) return n;
      var r = o("WASmaxInReceiptDeprecatedEditMixin").parseDeprecatedEditMixin(
        e,
      );
      return o("WAResultOrError").makeResult({
        id: n.value,
        deprecatedEditMixin: r.success ? r.value : null,
      });
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
    ((l.parseSenderAggregatedDeliverListItem = e),
      (l.parseSenderAggregatedDeliverMixin = s));
  },
  98,
);
