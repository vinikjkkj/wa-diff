__d(
  "WASmaxGroupsGetMembershipApprovalRequestsRPC",
  [
    "WAComms",
    "WASmaxInGroupsGetMembershipApprovalRequestsResponseClientError",
    "WASmaxInGroupsGetMembershipApprovalRequestsResponseServerError",
    "WASmaxInGroupsGetMembershipApprovalRequestsResponseSuccess",
    "WASmaxOutGroupsGetMembershipApprovalRequestsRequest",
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
              "WASmaxOutGroupsGetMembershipApprovalRequestsRequest",
            ).makeGetMembershipApprovalRequestsRequest(e),
            r = yield o("WAComms").sendSmaxStanza(n, t),
            a = o(
              "WASmaxInGroupsGetMembershipApprovalRequestsResponseSuccess",
            ).parseGetMembershipApprovalRequestsResponseSuccess(r, n);
          if (a.success)
            return {
              name: "GetMembershipApprovalRequestsResponseSuccess",
              value: a.value,
            };
          var i = o(
            "WASmaxInGroupsGetMembershipApprovalRequestsResponseClientError",
          ).parseGetMembershipApprovalRequestsResponseClientError(r, n);
          if (i.success)
            return {
              name: "GetMembershipApprovalRequestsResponseClientError",
              value: i.value,
            };
          var l = o(
            "WASmaxInGroupsGetMembershipApprovalRequestsResponseServerError",
          ).parseGetMembershipApprovalRequestsResponseServerError(r, n);
          if (l.success)
            return {
              name: "GetMembershipApprovalRequestsResponseServerError",
              value: l.value,
            };
          throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(
            o("WASmaxRpcUtils").errorMessageRpcParsing(
              "GetMembershipApprovalRequests",
              { Success: a, ClientError: i, ServerError: l },
            ),
          );
        })),
        s.apply(this, arguments)
      );
    }
    l.sendGetMembershipApprovalRequestsRPC = e;
  },
  98,
);
