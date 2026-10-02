__d(
  "WASmaxInReceiptOrderStatusErrorTypeMixin",
  ["WAResultOrError", "WASmaxInReceiptEnums", "WASmaxParseUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "receipt");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(e, "error");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").flattenedChildWithTag(e, "biz");
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        e,
        "type",
        "error",
      );
      if (!a.success) return a;
      var i = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        n.value,
        "type",
        "order-status-update-failed",
      );
      if (!i.success) return i;
      var l = o("WASmaxParseUtils").attrStringEnum(
        r.value,
        "reason",
        o("WASmaxInReceiptEnums").ENUM_CANCELLATIONFAILED_INVALIDTRANSITION,
      );
      return l.success
        ? o("WAResultOrError").makeResult({
            type: a.value,
            errorType: i.value,
            bizReason: l.value,
          })
        : l;
    }
    l.parseOrderStatusErrorTypeMixin = e;
  },
  98,
);
