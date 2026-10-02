__d(
  "WASmaxInMessageDeliverSMBBroadcastSourceMixin",
  ["WAResultOrError", "WASmaxInMessageDeliverEnums", "WASmaxParseUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "message");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(e, "meta");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").attrStringEnum(
        n.value,
        "biz_source",
        o("WASmaxInMessageDeliverEnums").ENUM_SMBMM_SMBPROMO,
      );
      return r.success
        ? o("WAResultOrError").makeResult({ metaBizSource: r.value })
        : r;
    }
    l.parseSMBBroadcastSourceMixin = e;
  },
  98,
);
