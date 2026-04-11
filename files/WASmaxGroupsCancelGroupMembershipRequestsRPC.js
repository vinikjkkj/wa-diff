__d(
  "WASmaxGroupsCancelGroupMembershipRequestsRPC",
  [
    "WAComms",
    "WASmaxInGroupsCancelGroupMembershipRequestsResponseClientError",
    "WASmaxInGroupsCancelGroupMembershipRequestsResponseServerError",
    "WASmaxInGroupsCancelGroupMembershipRequestsResponseSuccess",
    "WASmaxOutGroupsCancelGroupMembershipRequestsRequest",
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
              "WASmaxOutGroupsCancelGroupMembershipRequestsRequest",
            ).makeCancelGroupMembershipRequestsRequest(e),
            r = yield o("WAComms").sendSmaxStanza(n, t),
            a = o(
              "WASmaxInGroupsCancelGroupMembershipRequestsResponseSuccess",
            ).parseCancelGroupMembershipRequestsResponseSuccess(r, n);
          if (a.success)
            return {
              name: "CancelGroupMembershipRequestsResponseSuccess",
              value: a.value,
            };
          var i = o(
            "WASmaxInGroupsCancelGroupMembershipRequestsResponseClientError",
          ).parseCancelGroupMembershipRequestsResponseClientError(r, n);
          if (i.success)
            return {
              name: "CancelGroupMembershipRequestsResponseClientError",
              value: i.value,
            };
          var l = o(
            "WASmaxInGroupsCancelGroupMembershipRequestsResponseServerError",
          ).parseCancelGroupMembershipRequestsResponseServerError(r, n);
          if (l.success)
            return {
              name: "CancelGroupMembershipRequestsResponseServerError",
              value: l.value,
            };
          throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(
            o("WASmaxRpcUtils").errorMessageRpcParsing(
              "CancelGroupMembershipRequests",
              { Success: a, ClientError: i, ServerError: l },
            ),
          );
        })),
        s.apply(this, arguments)
      );
    }
    l.sendCancelGroupMembershipRequestsRPC = e;
  },
  98,
);
