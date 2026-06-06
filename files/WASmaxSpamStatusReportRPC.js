__d(
  "WASmaxSpamStatusReportRPC",
  [
    "WAComms",
    "WASmaxInSpamStatusReportResponseError",
    "WASmaxInSpamStatusReportResponseSuccess",
    "WASmaxOutSpamStatusReportRequest",
    "WASmaxParsingFailure",
    "WASmaxRpcUtils",
  ],
  function (t, n, r, o, a, i, l) {
    async function e(e, t) {
      var n = o("WASmaxOutSpamStatusReportRequest").makeStatusReportRequest(e),
        r = await o("WAComms").sendSmaxStanza(n, t),
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
    }
    l.sendStatusReportRPC = e;
  },
  98,
);
