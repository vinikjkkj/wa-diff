__d(
  "WASmaxSpamStatusReportV2RPC",
  [
    "WAComms",
    "WASmaxInSpamStatusReportV2ResponseError",
    "WASmaxInSpamStatusReportV2ResponseSuccess",
    "WASmaxOutSpamStatusReportV2Request",
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
              "WASmaxOutSpamStatusReportV2Request",
            ).makeStatusReportV2Request(e),
            r = yield o("WAComms").sendSmaxStanza(n, t),
            a = o(
              "WASmaxInSpamStatusReportV2ResponseSuccess",
            ).parseStatusReportV2ResponseSuccess(r, n);
          if (a.success)
            return { name: "StatusReportV2ResponseSuccess", value: a.value };
          var i = o(
            "WASmaxInSpamStatusReportV2ResponseError",
          ).parseStatusReportV2ResponseError(r, n);
          if (i.success)
            return { name: "StatusReportV2ResponseError", value: i.value };
          throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(
            o("WASmaxRpcUtils").errorMessageRpcParsing("StatusReportV2", {
              Success: a,
              Error: i,
            }),
          );
        })),
        s.apply(this, arguments)
      );
    }
    l.sendStatusReportV2RPC = e;
  },
  98,
);
