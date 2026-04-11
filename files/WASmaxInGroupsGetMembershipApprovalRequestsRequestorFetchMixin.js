__d(
  "WASmaxInGroupsGetMembershipApprovalRequestsRequestorFetchMixin",
  ["WAResultOrError", "WASmaxParseUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        e,
        "requestor_fetch",
        "true",
      );
      return t.success
        ? o("WAResultOrError").makeResult({ requestorFetch: t.value })
        : t;
    }
    l.parseGetMembershipApprovalRequestsRequestorFetchMixin = e;
  },
  98,
);
