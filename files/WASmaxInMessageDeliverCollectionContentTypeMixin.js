__d(
  "WASmaxInMessageDeliverCollectionContentTypeMixin",
  ["WAResultOrError", "WASmaxInMessageDeliverEnums", "WASmaxParseUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "message");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(e, "meta");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").attrStringEnum(
        n.value,
        "collection_type",
        o("WASmaxInMessageDeliverEnums").ENUM_DOCUMENT_IMAGE_MIXED_VIDEO,
      );
      return r.success
        ? o("WAResultOrError").makeResult({ metaCollectionType: r.value })
        : r;
    }
    l.parseCollectionContentTypeMixin = e;
  },
  98,
);
