__d(
  "WASmaxInMessageDeliverContentTypeMixin",
  ["WAResultOrError", "WASmaxInMessageDeliverEnums", "WASmaxParseUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "message");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(e, "meta");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").attrStringEnum(
        n.value,
        "content_type",
        o("WASmaxInMessageDeliverEnums").ENUM_ADDON_STATUSNOTIFY,
      );
      return r.success
        ? o("WAResultOrError").makeResult({ metaContentType: r.value })
        : r;
    }
    l.parseContentTypeMixin = e;
  },
  98,
);
