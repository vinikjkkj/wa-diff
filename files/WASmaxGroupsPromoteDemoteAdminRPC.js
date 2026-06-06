__d(
  "WASmaxGroupsPromoteDemoteAdminRPC",
  [
    "WAComms",
    "WASmaxInGroupsPromoteDemoteAdminResponseClientError",
    "WASmaxInGroupsPromoteDemoteAdminResponseServerError",
    "WASmaxInGroupsPromoteDemoteAdminResponseSuccessMultiAdmin",
    "WASmaxOutGroupsPromoteDemoteAdminRequest",
    "WASmaxParsingFailure",
    "WASmaxRpcUtils",
  ],
  function (t, n, r, o, a, i, l) {
    async function e(e, t) {
      var n = o(
          "WASmaxOutGroupsPromoteDemoteAdminRequest",
        ).makePromoteDemoteAdminRequest(e),
        r = await o("WAComms").sendSmaxStanza(n, t),
        a = o(
          "WASmaxInGroupsPromoteDemoteAdminResponseSuccessMultiAdmin",
        ).parsePromoteDemoteAdminResponseSuccessMultiAdmin(r, n);
      if (a.success)
        return {
          name: "PromoteDemoteAdminResponseSuccessMultiAdmin",
          value: a.value,
        };
      var i = o(
        "WASmaxInGroupsPromoteDemoteAdminResponseClientError",
      ).parsePromoteDemoteAdminResponseClientError(r, n);
      if (i.success)
        return {
          name: "PromoteDemoteAdminResponseClientError",
          value: i.value,
        };
      var l = o(
        "WASmaxInGroupsPromoteDemoteAdminResponseServerError",
      ).parsePromoteDemoteAdminResponseServerError(r, n);
      if (l.success)
        return {
          name: "PromoteDemoteAdminResponseServerError",
          value: l.value,
        };
      throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(
        o("WASmaxRpcUtils").errorMessageRpcParsing("PromoteDemoteAdmin", {
          SuccessMultiAdmin: a,
          ClientError: i,
          ServerError: l,
        }),
      );
    }
    l.sendPromoteDemoteAdminRPC = e;
  },
  98,
);
