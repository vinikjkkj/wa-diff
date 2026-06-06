__d(
  "WASmaxSpamGroupReportRPC",
  [
    "WAComms",
    "WASmaxInSpamGroupReportResponseError",
    "WASmaxInSpamGroupReportResponseSuccess",
    "WASmaxOutSpamGroupReportRequest",
    "WASmaxParsingFailure",
    "WASmaxRpcUtils",
  ],
  function (t, n, r, o, a, i, l) {
    async function e(e, t) {
      var n = o("WASmaxOutSpamGroupReportRequest").makeGroupReportRequest(e),
        r = await o("WAComms").sendSmaxStanza(n, t),
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
    }
    l.sendGroupReportRPC = e;
  },
  98,
);
