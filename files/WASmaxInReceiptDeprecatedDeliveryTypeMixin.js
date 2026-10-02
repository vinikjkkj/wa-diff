__d(
  "WASmaxInReceiptDeprecatedDeliveryTypeMixin",
  ["WAResultOrError", "WASmaxInReceiptEnums", "WASmaxParseUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "receipt");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").attrStringEnum(
        e,
        "type",
        o("WASmaxInReceiptEnums").ENUM_DELIVER_DELIVERY,
      );
      return n.success ? o("WAResultOrError").makeResult({ type: n.value }) : n;
    }
    l.parseDeprecatedDeliveryTypeMixin = e;
  },
  98,
);
