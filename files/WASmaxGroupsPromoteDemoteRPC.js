__d(
  "WASmaxGroupsPromoteDemoteRPC",
  [
    "WAComms",
    "WASmaxInGroupsPromoteDemoteResponseClientError",
    "WASmaxInGroupsPromoteDemoteResponseServerError",
    "WASmaxInGroupsPromoteDemoteResponseSuccessDemote",
    "WASmaxInGroupsPromoteDemoteResponseSuccessPromote",
    "WASmaxOutGroupsPromoteDemoteRequest",
    "WASmaxParsingFailure",
    "WASmaxRpcUtils",
  ],
  function (t, n, r, o, a, i, l) {
    async function e(e, t) {
      var n = o("WASmaxOutGroupsPromoteDemoteRequest").makePromoteDemoteRequest(
          e,
        ),
        r = await o("WAComms").sendSmaxStanza(n, t),
        a = o(
          "WASmaxInGroupsPromoteDemoteResponseSuccessPromote",
        ).parsePromoteDemoteResponseSuccessPromote(r, n);
      if (a.success)
        return { name: "PromoteDemoteResponseSuccessPromote", value: a.value };
      var i = o(
        "WASmaxInGroupsPromoteDemoteResponseSuccessDemote",
      ).parsePromoteDemoteResponseSuccessDemote(r, n);
      if (i.success)
        return { name: "PromoteDemoteResponseSuccessDemote", value: i.value };
      var l = o(
        "WASmaxInGroupsPromoteDemoteResponseClientError",
      ).parsePromoteDemoteResponseClientError(r, n);
      if (l.success)
        return { name: "PromoteDemoteResponseClientError", value: l.value };
      var s = o(
        "WASmaxInGroupsPromoteDemoteResponseServerError",
      ).parsePromoteDemoteResponseServerError(r, n);
      if (s.success)
        return { name: "PromoteDemoteResponseServerError", value: s.value };
      throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(
        o("WASmaxRpcUtils").errorMessageRpcParsing("PromoteDemote", {
          SuccessPromote: a,
          SuccessDemote: i,
          ClientError: l,
          ServerError: s,
        }),
      );
    }
    l.sendPromoteDemoteRPC = e;
  },
  98,
);
