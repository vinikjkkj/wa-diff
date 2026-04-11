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
              "WASmaxOutAbPropsGetGroupExperimentConfigRequest",
            ).makeGetGroupExperimentConfigRequest(e),
            r = yield o("WAComms").sendSmaxStanza(n, t),
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
            o("WASmaxRpcUtils").errorMessageRpcParsing(
              "GetGroupExperimentConfig",
              { Success: a, ErrorNoRetry: i, ErrorRetry: l },
            ),
          );
        })),
        s.apply(this, arguments)
      );
    }
    l.sendGetGroupExperimentConfigRPC = e;
  },
  98,
);
