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
  ],
  function (t, n, r, o, a, i, l) {
    async function e(e, t) {
      var n = o(
          "WASmaxOutGroupsMembershipRequestsActionRequest",
        ).makeMembershipRequestsActionRequest(e),
        r = await o("WAComms").sendSmaxStanza(n, t),
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
        o("WASmaxRpcUtils").errorMessageRpcParsing("MembershipRequestsAction", {
          Success: a,
          ClientError: i,
          ServerError: l,
        }),
      );
    }
    l.sendMembershipRequestsActionRPC = e;
  },
  98,
);
