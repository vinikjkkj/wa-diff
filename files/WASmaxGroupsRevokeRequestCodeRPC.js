__d(
  "WASmaxGroupsRevokeRequestCodeRPC",
  [
    "WAComms",
    "WASmaxInGroupsRevokeRequestCodeResponseClientError",
    "WASmaxInGroupsRevokeRequestCodeResponseServerError",
    "WASmaxInGroupsRevokeRequestCodeResponseSuccess",
    "WASmaxOutGroupsRevokeRequestCodeRequest",
    "WASmaxParsingFailure",
    "WASmaxRpcUtils",
  ],
  function (t, n, r, o, a, i, l) {
    async function e(e, t) {
      var n = o(
          "WASmaxOutGroupsRevokeRequestCodeRequest",
        ).makeRevokeRequestCodeRequest(e),
        r = await o("WAComms").sendSmaxStanza(n, t),
        a = o(
          "WASmaxInGroupsRevokeRequestCodeResponseSuccess",
        ).parseRevokeRequestCodeResponseSuccess(r, n);
      if (a.success)
        return { name: "RevokeRequestCodeResponseSuccess", value: a.value };
      var i = o(
        "WASmaxInGroupsRevokeRequestCodeResponseClientError",
      ).parseRevokeRequestCodeResponseClientError(r, n);
      if (i.success)
        return { name: "RevokeRequestCodeResponseClientError", value: i.value };
      var l = o(
        "WASmaxInGroupsRevokeRequestCodeResponseServerError",
      ).parseRevokeRequestCodeResponseServerError(r, n);
      if (l.success)
        return { name: "RevokeRequestCodeResponseServerError", value: l.value };
      throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(
        o("WASmaxRpcUtils").errorMessageRpcParsing("RevokeRequestCode", {
          Success: a,
          ClientError: i,
          ServerError: l,
        }),
      );
    }
    l.sendRevokeRequestCodeRPC = e;
  },
  98,
);
