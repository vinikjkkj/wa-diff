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
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = o(
              "WASmaxOutGroupsSubGroupSuggestionsActionRequest",
            ).makeSubGroupSuggestionsActionRequest(e),
            r = yield o("WAComms").sendSmaxStanza(n, t),
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
        })),
        s.apply(this, arguments)
      );
    }
    l.sendSubGroupSuggestionsActionRPC = e;
  },
  98,
);
