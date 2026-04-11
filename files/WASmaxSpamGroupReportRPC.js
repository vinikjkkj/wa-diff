__d(
  "WASmaxSpamGroupReportRPC",
  [
    "WAComms",
    "WASmaxInSpamGroupReportResponseError",
    "WASmaxInSpamGroupReportResponseSuccess",
    "WASmaxOutSpamGroupReportRequest",
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
          var n = o("WASmaxOutSpamGroupReportRequest").makeGroupReportRequest(
              e,
            ),
            r = yield o("WAComms").sendSmaxStanza(n, t),
            a = o(
              "WASmaxInSpamGroupReportResponseSuccess",
            ).parseGroupReportResponseSuccess(r, n);
          if (a.success)
            return { name: "GroupReportResponseSuccess", value: a.value };
          var i = o(
            "WASmaxInSpamGroupReportResponseError",
          ).parseGroupReportResponseError(r, n);
          if (i.success)
            return { name: "GroupReportResponseError", value: i.value };
          throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(
            o("WASmaxRpcUtils").errorMessageRpcParsing("GroupReport", {
              Success: a,
              Error: i,
            }),
          );
        })),
        s.apply(this, arguments)
      );
    }
    l.sendGroupReportRPC = e;
  },
  98,
);
