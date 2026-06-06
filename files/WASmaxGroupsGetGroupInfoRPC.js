__d(
  "WASmaxGroupsGetGroupInfoRPC",
  [
    "WAComms",
    "WASmaxInGroupsGetGroupInfoResponseClientError",
    "WASmaxInGroupsGetGroupInfoResponseServerError",
    "WASmaxInGroupsGetGroupInfoResponseSuccess",
    "WASmaxOutGroupsGetGroupInfoRequest",
    "WASmaxParsingFailure",
    "WASmaxRpcUtils",
  ],
  function (t, n, r, o, a, i, l) {
    async function e(e, t) {
      var n = o("WASmaxOutGroupsGetGroupInfoRequest").makeGetGroupInfoRequest(
          e,
        ),
        r = await o("WAComms").sendSmaxStanza(n, t),
        a = o(
          "WASmaxInGroupsGetGroupInfoResponseSuccess",
        ).parseGetGroupInfoResponseSuccess(r, n);
      if (a.success)
        return { name: "GetGroupInfoResponseSuccess", value: a.value };
      var i = o(
        "WASmaxInGroupsGetGroupInfoResponseClientError",
      ).parseGetGroupInfoResponseClientError(r, n);
      if (i.success)
        return { name: "GetGroupInfoResponseClientError", value: i.value };
      var l = o(
        "WASmaxInGroupsGetGroupInfoResponseServerError",
      ).parseGetGroupInfoResponseServerError(r, n);
      if (l.success)
        return { name: "GetGroupInfoResponseServerError", value: l.value };
      throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(
        o("WASmaxRpcUtils").errorMessageRpcParsing("GetGroupInfo", {
          Success: a,
          ClientError: i,
          ServerError: l,
        }),
      );
    }
    l.sendGetGroupInfoRPC = e;
  },
  98,
);
