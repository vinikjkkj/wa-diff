__d(
  "WASmaxBizMarketingMessageGetBusinessEligibilityRPC",
  [
    "WAComms",
    "WASmaxInBizMarketingMessageGetBusinessEligibilityResponseError",
    "WASmaxInBizMarketingMessageGetBusinessEligibilityResponseSuccess",
    "WASmaxOutBizMarketingMessageGetBusinessEligibilityRequest",
    "WASmaxParsingFailure",
    "WASmaxRpcUtils",
  ],
  function (t, n, r, o, a, i, l) {
    async function e(e, t) {
      var n = o(
          "WASmaxOutBizMarketingMessageGetBusinessEligibilityRequest",
        ).makeGetBusinessEligibilityRequest(e),
        r = await o("WAComms").sendSmaxStanza(n, t),
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
        return { name: "GetBusinessEligibilityResponseError", value: i.value };
      throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(
        o("WASmaxRpcUtils").errorMessageRpcParsing("GetBusinessEligibility", {
          Success: a,
          Error: i,
        }),
      );
    }
    l.sendGetBusinessEligibilityRPC = e;
  },
  98,
);
