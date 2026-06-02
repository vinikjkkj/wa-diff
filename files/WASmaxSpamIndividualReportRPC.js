__d(
  "WASmaxSpamIndividualReportRPC",
  [
    "WAComms",
    "WASmaxInSpamIndividualReportResponseError",
    "WASmaxInSpamIndividualReportResponseSuccess",
    "WASmaxOutSpamIndividualReportRequest",
    "WASmaxParsingFailure",
    "WASmaxRpcUtils",
  ],
  function (t, n, r, o, a, i, l) {
    async function e(e, t) {
      var n = o(
          "WASmaxOutSpamIndividualReportRequest",
        ).makeIndividualReportRequest(e),
        r = await o("WAComms").sendSmaxStanza(n, t),
        a = o(
          "WASmaxInSpamIndividualReportResponseSuccess",
        ).parseIndividualReportResponseSuccess(r, n);
      if (a.success)
        return { name: "IndividualReportResponseSuccess", value: a.value };
      var i = o(
        "WASmaxInSpamIndividualReportResponseError",
      ).parseIndividualReportResponseError(r, n);
      if (i.success)
        return { name: "IndividualReportResponseError", value: i.value };
      throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(
        o("WASmaxRpcUtils").errorMessageRpcParsing("IndividualReport", {
          Success: a,
          Error: i,
        }),
      );
    }
    l.sendIndividualReportRPC = e;
  },
  98,
);
