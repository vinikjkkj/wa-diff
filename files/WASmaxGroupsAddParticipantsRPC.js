__d(
  "WASmaxGroupsAddParticipantsRPC",
  [
    "WAComms",
    "WASmaxInGroupsAddParticipantsResponseClientError",
    "WASmaxInGroupsAddParticipantsResponseServerError",
    "WASmaxInGroupsAddParticipantsResponseSuccess",
    "WASmaxOutGroupsAddParticipantsRequest",
    "WASmaxParsingFailure",
    "WASmaxRpcUtils",
  ],
  function (t, n, r, o, a, i, l) {
    async function e(e, t) {
      var n = o(
          "WASmaxOutGroupsAddParticipantsRequest",
        ).makeAddParticipantsRequest(e),
        r = await o("WAComms").sendSmaxStanza(n, t),
        a = o(
          "WASmaxInGroupsAddParticipantsResponseSuccess",
        ).parseAddParticipantsResponseSuccess(r, n);
      if (a.success)
        return { name: "AddParticipantsResponseSuccess", value: a.value };
      var i = o(
        "WASmaxInGroupsAddParticipantsResponseClientError",
      ).parseAddParticipantsResponseClientError(r, n);
      if (i.success)
        return { name: "AddParticipantsResponseClientError", value: i.value };
      var l = o(
        "WASmaxInGroupsAddParticipantsResponseServerError",
      ).parseAddParticipantsResponseServerError(r, n);
      if (l.success)
        return { name: "AddParticipantsResponseServerError", value: l.value };
      throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(
        o("WASmaxRpcUtils").errorMessageRpcParsing("AddParticipants", {
          Success: a,
          ClientError: i,
          ServerError: l,
        }),
      );
    }
    l.sendAddParticipantsRPC = e;
  },
  98,
);
