__d(
  "WASmaxSpamStatusReportRPC",
  [
    "WAComms",
    "WASmaxInSpamStatusReportResponseError",
    "WASmaxInSpamStatusReportResponseSuccess",
    "WASmaxOutSpamStatusReportRequest",
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
          var n = o("WASmaxOutSpamStatusReportRequest").makeStatusReportRequest(
              e,
            ),
            r = yield o("WAComms").sendSmaxStanza(n, t),
            a = o(
              "WASmaxInSpamStatusReportResponseSuccess",
            ).parseStatusReportResponseSuccess(r, n);
          if (a.success)
            return { name: "StatusReportResponseSuccess", value: a.value };
          var i = o(
            "WASmaxInSpamStatusReportResponseError",
          ).parseStatusReportResponseError(r, n);
          if (i.success)
            return { name: "StatusReportResponseError", value: i.value };
          throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(
            o("WASmaxRpcUtils").errorMessageRpcParsing("StatusReport", {
              Success: a,
              Error: i,
            }),
          );
        })),
        s.apply(this, arguments)
      );
    }
    l.sendStatusReportRPC = e;
  },
  98,
);
