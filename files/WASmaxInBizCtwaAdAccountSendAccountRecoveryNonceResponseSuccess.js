__d(
  "WASmaxInBizCtwaAdAccountSendAccountRecoveryNonceResponseSuccess",
  [
    "WAResultOrError",
    "WASmaxInBizCtwaAdAccountHackBaseIQResultResponseMixin",
    "WASmaxInBizCtwaAdAccountSendAccountRecoveryNonceResponseMixin",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      var n = o("WASmaxParseUtils").assertTag(e, "iq");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").flattenedChildWithTag(e, "Result");
      if (!r.success) return r;
      var a = o(
        "WASmaxInBizCtwaAdAccountSendAccountRecoveryNonceResponseMixin",
      ).parseSendAccountRecoveryNonceResponseMixin(r.value);
      if (!a.success) return a;
      var i = o(
        "WASmaxInBizCtwaAdAccountHackBaseIQResultResponseMixin",
      ).parseHackBaseIQResultResponseMixin(e, t);
      return i.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends(
              { resultSendAccountRecoveryNonceResponseMixin: a.value },
              i.value,
            ),
          )
        : i;
    }
    l.parseSendAccountRecoveryNonceResponseSuccess = e;
  },
  98,
);
