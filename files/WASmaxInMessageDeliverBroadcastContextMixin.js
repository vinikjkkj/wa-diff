__d(
  "WASmaxInMessageDeliverBroadcastContextMixin",
  ["WAResultOrError", "WASmaxInMessageDeliverEnums", "WASmaxParseUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "message");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(e, "meta");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").attrStringEnum(
        n.value,
        "context_source",
        o("WASmaxInMessageDeliverEnums")
          .ENUM_CHANNELSINVITATION_EVENTINVITATION,
      );
      return r.success
        ? o("WAResultOrError").makeResult({ metaContextSource: r.value })
        : r;
    }
    l.parseBroadcastContextMixin = e;
  },
  98,
);
