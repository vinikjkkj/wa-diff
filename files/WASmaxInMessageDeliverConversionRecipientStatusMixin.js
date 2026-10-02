__d(
  "WASmaxInMessageDeliverConversionRecipientStatusMixin",
  ["WAResultOrError", "WASmaxInMessageDeliverEnums", "WASmaxParseUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "message");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(e, "conversion");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").attrStringEnum(
        n.value,
        "recipient_status",
        o("WASmaxInMessageDeliverEnums").ENUM_MATCHED_UNMATCHED,
      );
      return r.success
        ? o("WAResultOrError").makeResult({
            conversionRecipientStatus: r.value,
          })
        : r;
    }
    l.parseConversionRecipientStatusMixin = e;
  },
  98,
);
