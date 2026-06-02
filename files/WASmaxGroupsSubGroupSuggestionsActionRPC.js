__d(
  "WASmaxGroupsSubGroupSuggestionsActionRPC",
  [
    "WAComms",
    "WASmaxInGroupsSubGroupSuggestionsActionResponseClientError",
    "WASmaxInGroupsSubGroupSuggestionsActionResponseServerError",
    "WASmaxInGroupsSubGroupSuggestionsActionResponseSuccess",
    "WASmaxOutGroupsSubGroupSuggestionsActionRequest",
    "WASmaxParsingFailure",
    "WASmaxRpcUtils",
  ],
  function (t, n, r, o, a, i, l) {
    async function e(e, t) {
      var n = o(
          "WASmaxOutGroupsSubGroupSuggestionsActionRequest",
        ).makeSubGroupSuggestionsActionRequest(e),
        r = await o("WAComms").sendSmaxStanza(n, t),
        a = o(
          "WASmaxInGroupsSubGroupSuggestionsActionResponseSuccess",
        ).parseSubGroupSuggestionsActionResponseSuccess(r, n);
      if (a.success)
        return {
          name: "SubGroupSuggestionsActionResponseSuccess",
          value: a.value,
        };
      var i = o(
        "WASmaxInGroupsSubGroupSuggestionsActionResponseClientError",
      ).parseSubGroupSuggestionsActionResponseClientError(r, n);
      if (i.success)
        return {
          name: "SubGroupSuggestionsActionResponseClientError",
          value: i.value,
        };
      var l = o(
        "WASmaxInGroupsSubGroupSuggestionsActionResponseServerError",
      ).parseSubGroupSuggestionsActionResponseServerError(r, n);
      if (l.success)
        return {
          name: "SubGroupSuggestionsActionResponseServerError",
          value: l.value,
        };
      throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(
        o("WASmaxRpcUtils").errorMessageRpcParsing(
          "SubGroupSuggestionsAction",
          { Success: a, ClientError: i, ServerError: l },
        ),
      );
    }
    l.sendSubGroupSuggestionsActionRPC = e;
  },
  98,
);
