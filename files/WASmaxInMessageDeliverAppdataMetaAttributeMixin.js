__d(
  "WASmaxInMessageDeliverAppdataMetaAttributeMixin",
  ["WAResultOrError", "WASmaxInMessageDeliverEnums", "WASmaxParseUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "message");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(e, "meta");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").attrStringEnum(
        n.value,
        "appdata",
        o("WASmaxInMessageDeliverEnums")
          .ENUM_DEFAULTP_GROUPHISTORY_HISTORY_MEMBERTAG,
      );
      return r.success
        ? o("WAResultOrError").makeResult({ metaAppdata: r.value })
        : r;
    }
    l.parseAppdataMetaAttributeMixin = e;
  },
  98,
);
