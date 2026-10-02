__d(
  "WASmaxInMessageDeliverMetaIsGroupStatusMixin",
  ["WAResultOrError", "WASmaxInMessageDeliverEnums", "WASmaxParseUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "message");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(e, "meta");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").attrStringEnum(
        n.value,
        "is_group_status",
        o("WASmaxInMessageDeliverEnums").ENUM_FALSE_TRUE,
      );
      return r.success
        ? o("WAResultOrError").makeResult({ metaIsGroupStatus: r.value })
        : r;
    }
    l.parseMetaIsGroupStatusMixin = e;
  },
  98,
);
