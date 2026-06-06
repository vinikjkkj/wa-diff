__d(
  "WASmaxBizMarketingMessageGetBusinessEligibilityRPC",
  [
    "WAComms",
    "WASmaxInBizMarketingMessageGetBusinessEligibilityResponseError",
    "WASmaxInBizMarketingMessageGetBusinessEligibilityResponseSuccess",
    "WASmaxOutBizMarketingMessageGetBusinessEligibilityRequest",
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
              "WASmaxOutBizMarketingMessageGetBusinessEligibilityRequest",
            ).makeGetBusinessEligibilityRequest(e),
            r = yield o("WAComms").sendSmaxStanza(n, t),
            a = o(
              "WASmaxInBizMarketingMessageGetBusinessEligibilityResponseSuccess",
            ).parseGetBusinessEligibilityResponseSuccess(r, n);
          if (a.success)
            return {
              name: "GetBusinessEligibilityResponseSuccess",
              value: a.value,
            };
          var i = o(
            "WASmaxInBizMarketingMessageGetBusinessEligibilityResponseError",
          ).parseGetBusinessEligibilityResponseError(r, n);
          if (i.success)
            return {
              name: "GetBusinessEligibilityResponseError",
              value: i.value,
            };
          throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(
            o("WASmaxRpcUtils").errorMessageRpcParsing(
              "GetBusinessEligibility",
              { Success: a, Error: i },
            ),
          );
        })),
        s.apply(this, arguments)
      );
    }
    l.sendGetBusinessEligibilityRPC = e;
  },
  98,
);
