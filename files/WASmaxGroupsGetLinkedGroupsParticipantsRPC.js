__d(
  "WASmaxGroupsGetLinkedGroupsParticipantsRPC",
  [
    "WAComms",
    "WASmaxInGroupsGetLinkedGroupsParticipantsResponseClientError",
    "WASmaxInGroupsGetLinkedGroupsParticipantsResponseServerError",
    "WASmaxInGroupsGetLinkedGroupsParticipantsResponseSuccess",
    "WASmaxOutGroupsGetLinkedGroupsParticipantsRequest",
    "WASmaxParsingFailure",
    "WASmaxRpcUtils",
  ],
  function (t, n, r, o, a, i, l) {
    async function e(e, t) {
      var n = o(
          "WASmaxOutGroupsGetLinkedGroupsParticipantsRequest",
        ).makeGetLinkedGroupsParticipantsRequest(e),
        r = await o("WAComms").sendSmaxStanza(n, t),
        a = o(
          "WASmaxInGroupsGetLinkedGroupsParticipantsResponseSuccess",
        ).parseGetLinkedGroupsParticipantsResponseSuccess(r, n);
      if (a.success)
        return {
          name: "GetLinkedGroupsParticipantsResponseSuccess",
          value: a.value,
        };
      var i = o(
        "WASmaxInGroupsGetLinkedGroupsParticipantsResponseClientError",
      ).parseGetLinkedGroupsParticipantsResponseClientError(r, n);
      if (i.success)
        return {
          name: "GetLinkedGroupsParticipantsResponseClientError",
          value: i.value,
        };
      var l = o(
        "WASmaxInGroupsGetLinkedGroupsParticipantsResponseServerError",
      ).parseGetLinkedGroupsParticipantsResponseServerError(r, n);
      if (l.success)
        return {
          name: "GetLinkedGroupsParticipantsResponseServerError",
          value: l.value,
        };
      throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(
        o("WASmaxRpcUtils").errorMessageRpcParsing(
          "GetLinkedGroupsParticipants",
          { Success: a, ClientError: i, ServerError: l },
        ),
      );
    }
    l.sendGetLinkedGroupsParticipantsRPC = e;
  },
  98,
);
