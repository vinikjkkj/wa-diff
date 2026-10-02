__d(
  "WASmaxInMessageDeliverViewOnceMetaAttributeMixin",
  ["WAResultOrError", "WASmaxParseUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "message");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(e, "meta");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        n.value,
        "view_once",
        "true",
      );
      return r.success
        ? o("WAResultOrError").makeResult({ metaViewOnce: r.value })
        : r;
    }
    l.parseViewOnceMetaAttributeMixin = e;
  },
  98,
);
