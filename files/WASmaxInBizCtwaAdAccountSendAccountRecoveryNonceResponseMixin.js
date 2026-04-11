__d(
  "WASmaxInBizCtwaAdAccountSendAccountRecoveryNonceResponseMixin",
  ["WAResultOrError", "WASmaxInBizCtwaAdAccountEnums", "WASmaxParseUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "Result");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(e, "status");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").contentStringEnum(
        n.value,
        o("WASmaxInBizCtwaAdAccountEnums").ENUM_FAIL_SUCCESS,
      );
      return r.success
        ? o("WAResultOrError").makeResult({ statusElementValue: r.value })
        : r;
    }
    l.parseSendAccountRecoveryNonceResponseMixin = e;
  },
  98,
);
