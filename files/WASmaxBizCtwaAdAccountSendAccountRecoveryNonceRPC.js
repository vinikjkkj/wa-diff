__d(
  "WASmaxBizCtwaAdAccountSendAccountRecoveryNonceRPC",
  [
    "WAComms",
    "WAResultOrError",
    "WASmaxInBizCtwaAdAccountCommonAdAccountErrors",
    "WASmaxInBizCtwaAdAccountEnums",
    "WASmaxInBizCtwaAdAccountHackBaseIQErrorResponseMixin",
    "WASmaxInBizCtwaAdAccountHackBaseIQResultResponseMixin",
    "WASmaxJsx",
    "WASmaxOutBizCtwaAdAccountHackBaseIQGetRequestMixin",
    "WASmaxParseUtils",
    "WASmaxParsingFailure",
    "WASmaxRpcUtils",
    "WAWap",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = d(e),
            r = yield o("WAComms").sendSmaxStanza(n, t),
            a = c(r, n);
          if (a.success)
            return {
              name: "SendAccountRecoveryNonceResponseSuccess",
              value: a.value,
            };
          var i = u(r, n);
          if (i.success)
            return {
              name: "SendAccountRecoveryNonceResponseError",
              value: i.value,
            };
          throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(
            o("WASmaxRpcUtils").errorMessageRpcParsing(
              "SendAccountRecoveryNonce",
              { Success: a, Error: i },
            ),
          );
        })),
        s.apply(this, arguments)
      );
    }
    function u(e, t) {
      var n = o("WASmaxParseUtils").assertTag(e, "iq");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").flattenedChildWithTag(e, "error");
      if (!r.success) return r;
      var a = o(
        "WASmaxInBizCtwaAdAccountHackBaseIQErrorResponseMixin",
      ).parseHackBaseIQErrorResponseMixin(e, t);
      if (!a.success) return a;
      var i = o(
        "WASmaxInBizCtwaAdAccountCommonAdAccountErrors",
      ).parseCommonAdAccountErrors(r.value);
      return i.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends({}, a.value, {
              errorCommonAdAccountErrors: i.value,
            }),
          )
        : i;
    }
    function c(e, t) {
      var n = o("WASmaxParseUtils").assertTag(e, "iq");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").flattenedChildWithTag(e, "Result");
      if (!r.success) return r;
      var a = m(r.value);
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
    function d(e) {
      var t = o(
        "WASmaxOutBizCtwaAdAccountHackBaseIQGetRequestMixin",
      ).mergeHackBaseIQGetRequestMixin(
        o("WASmaxJsx").smax("iq", {
          xmlns: "fb:thrift_iq",
          smax_id: o("WAWap").INT(112),
        }),
        e,
      );
      return t;
    }
    function m(e) {
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
    ((l.sendSendAccountRecoveryNonceRPC = e),
      (l.parseSendAccountRecoveryNonceResponseError = u),
      (l.parseSendAccountRecoveryNonceResponseSuccess = c),
      (l.makeSendAccountRecoveryNonceRequest = d),
      (l.parseSendAccountRecoveryNonceResponseMixin = m));
  },
  98,
);
