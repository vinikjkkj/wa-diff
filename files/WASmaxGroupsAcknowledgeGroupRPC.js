__d(
  "WASmaxGroupsAcknowledgeGroupRPC",
  [
    "WAComms",
    "WASmaxInGroupsAcknowledgeGroupResponseClientError",
    "WASmaxInGroupsAcknowledgeGroupResponseServerError",
    "WASmaxInGroupsAcknowledgeGroupResponseSuccess",
    "WASmaxOutGroupsAcknowledgeGroupRequest",
    "WASmaxParsingFailure",
    "WASmaxRpcUtils",
  ],
  function (t, n, r, o, a, i, l) {
    async function e(e, t) {
      var n = o(
          "WASmaxOutGroupsAcknowledgeGroupRequest",
        ).makeAcknowledgeGroupRequest(e),
        r = await o("WAComms").sendSmaxStanza(n, t),
        a = o(
          "WASmaxInGroupsAcknowledgeGroupResponseSuccess",
        ).parseAcknowledgeGroupResponseSuccess(r, n);
      if (a.success)
        return { name: "AcknowledgeGroupResponseSuccess", value: a.value };
      var i = o(
        "WASmaxInGroupsAcknowledgeGroupResponseClientError",
      ).parseAcknowledgeGroupResponseClientError(r, n);
      if (i.success)
        return { name: "AcknowledgeGroupResponseClientError", value: i.value };
      var l = o(
        "WASmaxInGroupsAcknowledgeGroupResponseServerError",
      ).parseAcknowledgeGroupResponseServerError(r, n);
      if (l.success)
        return { name: "AcknowledgeGroupResponseServerError", value: l.value };
      throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(
        o("WASmaxRpcUtils").errorMessageRpcParsing("AcknowledgeGroup", {
          Success: a,
          ClientError: i,
          ServerError: l,
        }),
      );
    }
    l.sendAcknowledgeGroupRPC = e;
  },
  98,
);
