__d(
  "WASmaxBizLinkingGetAccountNonceRPC",
  [
    "WAComms",
    "WASmaxInBizLinkingGetAccountNonceResponseError",
    "WASmaxInBizLinkingGetAccountNonceResponseSuccess",
    "WASmaxOutBizLinkingGetAccountNonceRequest",
    "WASmaxParsingFailure",
    "WASmaxRpcUtils",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = o(
              "WASmaxOutBizLinkingGetAccountNonceRequest",
            ).makeGetAccountNonceRequest(e),
            r = yield o("WAComms").sendSmaxStanza(n, t),
            a = o(
              "WASmaxInBizLinkingGetAccountNonceResponseSuccess",
            ).parseGetAccountNonceResponseSuccess(r, n);
          if (a.success)
            return { name: "GetAccountNonceResponseSuccess", value: a.value };
          var i = o(
            "WASmaxInBizLinkingGetAccountNonceResponseError",
          ).parseGetAccountNonceResponseError(r, n);
          if (i.success)
            return { name: "GetAccountNonceResponseError", value: i.value };
          throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(
            o("WASmaxRpcUtils").errorMessageRpcParsing("GetAccountNonce", {
              Success: a,
              Error: i,
            }),
          );
        })),
        s.apply(this, arguments)
      );
    }
    l.sendGetAccountNonceRPC = e;
  },
  98,
);
