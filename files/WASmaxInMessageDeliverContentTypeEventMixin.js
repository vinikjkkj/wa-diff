__d(
  "WASmaxInMessageDeliverContentTypeEventMixin",
  ["WAResultOrError", "WASmaxInMessageDeliverEnums", "WASmaxParseUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "message");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(e, "meta");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        e,
        "type",
        "event",
      );
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").attrStringEnum(
        n.value,
        "event_type",
        o("WASmaxInMessageDeliverEnums").ENUM_CREATION_EDIT_RESPONSE,
      );
      return a.success
        ? o("WAResultOrError").makeResult({
            type: r.value,
            metaEventType: a.value,
          })
        : a;
    }
    l.parseContentTypeEventMixin = e;
  },
  98,
);
