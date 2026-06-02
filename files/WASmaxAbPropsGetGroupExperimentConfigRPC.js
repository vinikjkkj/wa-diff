__d(
  "WASmaxAbPropsGetGroupExperimentConfigRPC",
  [
    "WAComms",
    "WASmaxInAbPropsGetGroupExperimentConfigResponseErrorNoRetry",
    "WASmaxInAbPropsGetGroupExperimentConfigResponseErrorRetry",
    "WASmaxInAbPropsGetGroupExperimentConfigResponseSuccess",
    "WASmaxOutAbPropsGetGroupExperimentConfigRequest",
    "WASmaxParsingFailure",
    "WASmaxRpcUtils",
  ],
  function (t, n, r, o, a, i, l) {
    async function e(e, t) {
      var n = o(
          "WASmaxOutAbPropsGetGroupExperimentConfigRequest",
        ).makeGetGroupExperimentConfigRequest(e),
        r = await o("WAComms").sendSmaxStanza(n, t),
        a = o(
          "WASmaxInAbPropsGetGroupExperimentConfigResponseSuccess",
        ).parseGetGroupExperimentConfigResponseSuccess(r, n);
      if (a.success)
        return {
          name: "GetGroupExperimentConfigResponseSuccess",
          value: a.value,
        };
      var i = o(
        "WASmaxInAbPropsGetGroupExperimentConfigResponseErrorNoRetry",
      ).parseGetGroupExperimentConfigResponseErrorNoRetry(r, n);
      if (i.success)
        return {
          name: "GetGroupExperimentConfigResponseErrorNoRetry",
          value: i.value,
        };
      var l = o(
        "WASmaxInAbPropsGetGroupExperimentConfigResponseErrorRetry",
      ).parseGetGroupExperimentConfigResponseErrorRetry(r, n);
      if (l.success)
        return {
          name: "GetGroupExperimentConfigResponseErrorRetry",
          value: l.value,
        };
      throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(
        o("WASmaxRpcUtils").errorMessageRpcParsing("GetGroupExperimentConfig", {
          Success: a,
          ErrorNoRetry: i,
          ErrorRetry: l,
        }),
      );
    }
    l.sendGetGroupExperimentConfigRPC = e;
  },
  98,
);
