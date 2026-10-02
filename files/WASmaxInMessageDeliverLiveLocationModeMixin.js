__d(
  "WASmaxInMessageDeliverLiveLocationModeMixin",
  ["WAResultOrError", "WASmaxInMessageDeliverEnums", "WASmaxParseUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "message");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(e, "meta");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").attrStringEnum(
        n.value,
        "liveloc_mode",
        o("WASmaxInMessageDeliverEnums").ENUM_LID_PN,
      );
      return r.success
        ? o("WAResultOrError").makeResult({ metaLivelocMode: r.value })
        : r;
    }
    l.parseLiveLocationModeMixin = e;
  },
  98,
);
