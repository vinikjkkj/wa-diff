__d(
  "WASmaxGroupsMembershipRequestsActionRPC",
  [
    "WAComms",
    "WASmaxInGroupsMembershipRequestsActionResponseClientError",
    "WASmaxInGroupsMembershipRequestsActionResponseServerError",
    "WASmaxInGroupsMembershipRequestsActionResponseSuccess",
    "WASmaxOutGroupsMembershipRequestsActionRequest",
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
              "WASmaxOutGroupsMembershipRequestsActionRequest",
            ).makeMembershipRequestsActionRequest(e),
            r = yield o("WAComms").sendSmaxStanza(n, t),
            a = o(
              "WASmaxInGroupsMembershipRequestsActionResponseSuccess",
            ).parseMembershipRequestsActionResponseSuccess(r, n);
          if (a.success)
            return {
              name: "MembershipRequestsActionResponseSuccess",
              value: a.value,
            };
          var i = o(
            "WASmaxInGroupsMembershipRequestsActionResponseClientError",
          ).parseMembershipRequestsActionResponseClientError(r, n);
          if (i.success)
            return {
              name: "MembershipRequestsActionResponseClientError",
              value: i.value,
            };
          var l = o(
            "WASmaxInGroupsMembershipRequestsActionResponseServerError",
          ).parseMembershipRequestsActionResponseServerError(r, n);
          if (l.success)
            return {
              name: "MembershipRequestsActionResponseServerError",
              value: l.value,
            };
          throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(
            o("WASmaxRpcUtils").errorMessageRpcParsing(
              "MembershipRequestsAction",
              { Success: a, ClientError: i, ServerError: l },
            ),
          );
        })),
        s.apply(this, arguments)
      );
    }
    l.sendMembershipRequestsActionRPC = e;
  },
  98,
);
