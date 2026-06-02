__d(
  "WASmaxGroupsGetInviteGroupInfoRPC",
  [
    "WAComms",
    "WASmaxInGroupsGetInviteGroupInfoResponseClientError",
    "WASmaxInGroupsGetInviteGroupInfoResponseServerError",
    "WASmaxInGroupsGetInviteGroupInfoResponseSuccess",
    "WASmaxOutGroupsGetInviteGroupInfoRequest",
    "WASmaxParsingFailure",
    "WASmaxRpcUtils",
  ],
  function (t, n, r, o, a, i, l) {
    async function e(e, t) {
      var n = o(
          "WASmaxOutGroupsGetInviteGroupInfoRequest",
        ).makeGetInviteGroupInfoRequest(e),
        r = await o("WAComms").sendSmaxStanza(n, t),
        a = o(
          "WASmaxInGroupsGetInviteGroupInfoResponseSuccess",
        ).parseGetInviteGroupInfoResponseSuccess(r, n);
      if (a.success)
        return { name: "GetInviteGroupInfoResponseSuccess", value: a.value };
      var i = o(
        "WASmaxInGroupsGetInviteGroupInfoResponseClientError",
      ).parseGetInviteGroupInfoResponseClientError(r, n);
      if (i.success)
        return {
          name: "GetInviteGroupInfoResponseClientError",
          value: i.value,
        };
      var l = o(
        "WASmaxInGroupsGetInviteGroupInfoResponseServerError",
      ).parseGetInviteGroupInfoResponseServerError(r, n);
      if (l.success)
        return {
          name: "GetInviteGroupInfoResponseServerError",
          value: l.value,
        };
      throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(
        o("WASmaxRpcUtils").errorMessageRpcParsing("GetInviteGroupInfo", {
          Success: a,
          ClientError: i,
          ServerError: l,
        }),
      );
    }
    l.sendGetInviteGroupInfoRPC = e;
  },
  98,
);
