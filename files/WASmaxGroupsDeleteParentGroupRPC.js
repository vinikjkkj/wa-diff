__d(
  "WASmaxGroupsDeleteParentGroupRPC",
  [
    "WAComms",
    "WASmaxInGroupsDeleteParentGroupResponseClientError",
    "WASmaxInGroupsDeleteParentGroupResponseServerError",
    "WASmaxInGroupsDeleteParentGroupResponseSuccess",
    "WASmaxOutGroupsDeleteParentGroupRequest",
    "WASmaxParsingFailure",
    "WASmaxRpcUtils",
  ],
  function (t, n, r, o, a, i, l) {
    async function e(e, t) {
      var n = o(
          "WASmaxOutGroupsDeleteParentGroupRequest",
        ).makeDeleteParentGroupRequest(e),
        r = await o("WAComms").sendSmaxStanza(n, t),
        a = o(
          "WASmaxInGroupsDeleteParentGroupResponseSuccess",
        ).parseDeleteParentGroupResponseSuccess(r, n);
      if (a.success)
        return { name: "DeleteParentGroupResponseSuccess", value: a.value };
      var i = o(
        "WASmaxInGroupsDeleteParentGroupResponseClientError",
      ).parseDeleteParentGroupResponseClientError(r, n);
      if (i.success)
        return { name: "DeleteParentGroupResponseClientError", value: i.value };
      var l = o(
        "WASmaxInGroupsDeleteParentGroupResponseServerError",
      ).parseDeleteParentGroupResponseServerError(r, n);
      if (l.success)
        return { name: "DeleteParentGroupResponseServerError", value: l.value };
      throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(
        o("WASmaxRpcUtils").errorMessageRpcParsing("DeleteParentGroup", {
          Success: a,
          ClientError: i,
          ServerError: l,
        }),
      );
    }
    l.sendDeleteParentGroupRPC = e;
  },
  98,
);
