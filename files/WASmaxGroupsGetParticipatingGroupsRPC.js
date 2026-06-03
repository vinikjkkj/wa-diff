__d(
  "WASmaxGroupsGetParticipatingGroupsRPC",
  [
    "WAComms",
    "WASmaxInGroupsGetParticipatingGroupsResponseClientError",
    "WASmaxInGroupsGetParticipatingGroupsResponseServerError",
    "WASmaxInGroupsGetParticipatingGroupsResponseSuccess",
    "WASmaxOutGroupsGetParticipatingGroupsRequest",
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
              "WASmaxOutGroupsGetParticipatingGroupsRequest",
            ).makeGetParticipatingGroupsRequest(e),
            r = yield o("WAComms").sendSmaxStanza(n, t),
            a = o(
              "WASmaxInGroupsGetParticipatingGroupsResponseSuccess",
            ).parseGetParticipatingGroupsResponseSuccess(r, n);
          if (a.success)
            return {
              name: "GetParticipatingGroupsResponseSuccess",
              value: a.value,
            };
          var i = o(
            "WASmaxInGroupsGetParticipatingGroupsResponseClientError",
          ).parseGetParticipatingGroupsResponseClientError(r, n);
          if (i.success)
            return {
              name: "GetParticipatingGroupsResponseClientError",
              value: i.value,
            };
          var l = o(
            "WASmaxInGroupsGetParticipatingGroupsResponseServerError",
          ).parseGetParticipatingGroupsResponseServerError(r, n);
          if (l.success)
            return {
              name: "GetParticipatingGroupsResponseServerError",
              value: l.value,
            };
          throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(
            o("WASmaxRpcUtils").errorMessageRpcParsing(
              "GetParticipatingGroups",
              { Success: a, ClientError: i, ServerError: l },
            ),
          );
        })),
        s.apply(this, arguments)
      );
    }
    l.sendGetParticipatingGroupsRPC = e;
  },
  98,
);
