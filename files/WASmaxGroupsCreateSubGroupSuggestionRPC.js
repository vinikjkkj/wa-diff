__d(
  "WASmaxGroupsCreateSubGroupSuggestionRPC",
  [
    "WAComms",
    "WASmaxInGroupsCreateSubGroupSuggestionResponseClientError",
    "WASmaxInGroupsCreateSubGroupSuggestionResponseExistingGroupsSuggestionSuccess",
    "WASmaxInGroupsCreateSubGroupSuggestionResponseNewGroupSuggestionSuccess",
    "WASmaxInGroupsCreateSubGroupSuggestionResponseServerError",
    "WASmaxOutGroupsCreateSubGroupSuggestionRequest",
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
              "WASmaxOutGroupsCreateSubGroupSuggestionRequest",
            ).makeCreateSubGroupSuggestionRequest(e),
            r = yield o("WAComms").sendSmaxStanza(n, t),
            a = o(
              "WASmaxInGroupsCreateSubGroupSuggestionResponseNewGroupSuggestionSuccess",
            ).parseCreateSubGroupSuggestionResponseNewGroupSuggestionSuccess(
              r,
              n,
            );
          if (a.success)
            return {
              name: "CreateSubGroupSuggestionResponseNewGroupSuggestionSuccess",
              value: a.value,
            };
          var i = o(
            "WASmaxInGroupsCreateSubGroupSuggestionResponseExistingGroupsSuggestionSuccess",
          ).parseCreateSubGroupSuggestionResponseExistingGroupsSuggestionSuccess(
            r,
            n,
          );
          if (i.success)
            return {
              name: "CreateSubGroupSuggestionResponseExistingGroupsSuggestionSuccess",
              value: i.value,
            };
          var l = o(
            "WASmaxInGroupsCreateSubGroupSuggestionResponseClientError",
          ).parseCreateSubGroupSuggestionResponseClientError(r, n);
          if (l.success)
            return {
              name: "CreateSubGroupSuggestionResponseClientError",
              value: l.value,
            };
          var s = o(
            "WASmaxInGroupsCreateSubGroupSuggestionResponseServerError",
          ).parseCreateSubGroupSuggestionResponseServerError(r, n);
          if (s.success)
            return {
              name: "CreateSubGroupSuggestionResponseServerError",
              value: s.value,
            };
          throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(
            o("WASmaxRpcUtils").errorMessageRpcParsing(
              "CreateSubGroupSuggestion",
              {
                NewGroupSuggestionSuccess: a,
                ExistingGroupsSuggestionSuccess: i,
                ClientError: l,
                ServerError: s,
              },
            ),
          );
        })),
        s.apply(this, arguments)
      );
    }
    l.sendCreateSubGroupSuggestionRPC = e;
  },
  98,
);
