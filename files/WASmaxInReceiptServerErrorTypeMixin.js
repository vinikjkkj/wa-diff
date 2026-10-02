__d(
  "WASmaxInReceiptServerErrorTypeMixin",
  [
    "WAResultOrError",
    "WASmaxInReceiptEncryptMixin",
    "WASmaxInReceiptEnums",
    "WASmaxInReceiptServerErrorRmrTypes",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "rmr");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").attrStringEnum(
        e,
        "from_me",
        o("WASmaxInReceiptEnums").ENUM_FALSE_TRUE,
      );
      if (!n.success) return n;
      var r = o("WASmaxInReceiptServerErrorRmrTypes").parseServerErrorRmrTypes(
        e,
      );
      return r.success
        ? o("WAResultOrError").makeResult({
            fromMe: n.value,
            serverErrorRmrTypes: r.value,
          })
        : r;
    }
    function s(t) {
      var n = o("WASmaxParseUtils").assertTag(t, "receipt");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").optionalChildWithTag(t, "rmr", e);
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        t,
        "type",
        "server-error",
      );
      if (!a.success) return a;
      var i = o("WASmaxInReceiptEncryptMixin").parseEncryptMixin(t);
      return o("WAResultOrError").makeResult({
        type: a.value,
        encryptMixin: i.success ? i.value : null,
        rmr: r.value,
      });
    }
    ((l.parseServerErrorTypeRmr = e), (l.parseServerErrorTypeMixin = s));
  },
  98,
);
