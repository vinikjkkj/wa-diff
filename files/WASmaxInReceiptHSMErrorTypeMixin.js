__d(
  "WASmaxInReceiptHSMErrorTypeMixin",
  ["WAResultOrError", "WASmaxInReceiptEnums", "WASmaxParseUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "receipt");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(e, "error");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        e,
        "type",
        "error",
      );
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").attrStringEnum(
        n.value,
        "type",
        o("WASmaxInReceiptEnums").ENUM_HSMENVELOPEMISMATCH_STRUCTUREUNAVAILABLE,
      );
      if (!a.success) return a;
      var i = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrStringEnum,
        n.value,
        "reason",
        o("WASmaxInReceiptEnums").ENUM_1002_1007_1008,
      );
      if (!i.success) return i;
      var l = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrStringEnum,
        n.value,
        "sub_type",
        o("WASmaxInReceiptEnums").ENUM_CONTENT_TITLE,
      );
      return l.success
        ? o("WAResultOrError").makeResult({
            type: r.value,
            errorType: a.value,
            errorReason: i.value,
            errorSubType: l.value,
          })
        : l;
    }
    l.parseHSMErrorTypeMixin = e;
  },
  98,
);
