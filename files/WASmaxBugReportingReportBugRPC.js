__d(
  "WASmaxBugReportingReportBugRPC",
  [
    "WAComms",
    "WASmaxInBugReportingReportBugResponseError",
    "WASmaxInBugReportingReportBugResponseSuccess",
    "WASmaxOutBugReportingReportBugRequest",
    "WASmaxParsingFailure",
    "WASmaxRpcUtils",
  ],
  function (t, n, r, o, a, i, l) {
    async function e(e, t) {
      var n = o("WASmaxOutBugReportingReportBugRequest").makeReportBugRequest(
          e,
        ),
        r = await o("WAComms").sendSmaxStanza(n, t),
        a = o(
          "WASmaxInBugReportingReportBugResponseSuccess",
        ).parseReportBugResponseSuccess(r, n);
      if (a.success)
        return { name: "ReportBugResponseSuccess", value: a.value };
      var i = o(
        "WASmaxInBugReportingReportBugResponseError",
      ).parseReportBugResponseError(r, n);
      if (i.success) return { name: "ReportBugResponseError", value: i.value };
      throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(
        o("WASmaxRpcUtils").errorMessageRpcParsing("ReportBug", {
          Success: a,
          Error: i,
        }),
      );
    }
    l.sendReportBugRPC = e;
  },
  98,
);
