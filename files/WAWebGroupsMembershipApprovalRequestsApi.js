__d(
  "WAWebGroupsMembershipApprovalRequestsApi",
  ["WAWebDBGroupMembeshipApprovalRequest"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.group,
        n = e.isOffline,
        r = e.requests;
      return o(
        "WAWebDBGroupMembeshipApprovalRequest",
      ).removeMembershipApprovalRequests(t, r, n);
    }
    l.removeMembershipApprovalRequests = e;
  },
  98,
);
