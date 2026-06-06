__d(
  "WASmaxAbPropsGetExperimentConfigRPC",
  [
    "WAComms",
    "WASmaxInAbPropsGetExperimentConfigResponseErrorNoRetry",
    "WASmaxInAbPropsGetExperimentConfigResponseErrorRetry",
    "WASmaxInAbPropsGetExperimentConfigResponseSuccess",
    "WASmaxOutAbPropsGetExperimentConfigRequest",
    "WASmaxParsingFailure",
    "WASmaxRpcUtils",
  ],
  function (t, n, r, o, a, i, l) {
    async function e(e, t) {
      var n = o(
          "WASmaxOutAbPropsGetExperimentConfigRequest",
        ).makeGetExperimentConfigRequest(e),
        r = await o("WAComms").sendSmaxStanza(n, t),
        a = o(
          "WASmaxInAbPropsGetExperimentConfigResponseSuccess",
        ).parseGetExperimentConfigResponseSuccess(r, n);
      if (a.success)
        return { name: "GetExperimentConfigResponseSuccess", value: a.value };
      var i = o(
        "WASmaxInAbPropsGetExperimentConfigResponseErrorNoRetry",
      ).parseGetExperimentConfigResponseErrorNoRetry(r, n);
      if (i.success)
        return {
          name: "GetExperimentConfigResponseErrorNoRetry",
          value: i.value,
        };
      var l = o(
        "WASmaxInAbPropsGetExperimentConfigResponseErrorRetry",
      ).parseGetExperimentConfigResponseErrorRetry(r, n);
      if (l.success)
        return {
          name: "GetExperimentConfigResponseErrorRetry",
          value: l.value,
        };
      throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(
        o("WASmaxRpcUtils").errorMessageRpcParsing("GetExperimentConfig", {
          Success: a,
          ErrorNoRetry: i,
          ErrorRetry: l,
        }),
      );
    }
    l.sendGetExperimentConfigRPC = e;
  },
  98,
);
