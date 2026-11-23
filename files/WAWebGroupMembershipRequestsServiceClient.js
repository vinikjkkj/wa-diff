__d(
  "WAWebGroupMembershipRequestsServiceClient",
  ["WAWebGroupMembershipRequestsService"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return {
        getMembershipApprovalRequests: function (n) {
          return e(
            o("WAWebGroupMembershipRequestsService")
              .GroupMembershipRequestsService,
            function (e) {
              return e.getMembershipApprovalRequests(n);
            },
          );
        },
        queryAndUpdateGroupMembershipApprovalRequests: function (n) {
          return e(
            o("WAWebGroupMembershipRequestsService")
              .GroupMembershipRequestsService,
            function (e) {
              return e.queryAndUpdateGroupMembershipApprovalRequests(n);
            },
          );
        },
        membershipApprovalRequestAction: function (n, r, a) {
          return e(
            o("WAWebGroupMembershipRequestsService")
              .GroupMembershipRequestsService,
            function (e) {
              return e.membershipApprovalRequestAction(n, r, a);
            },
          );
        },
        cancelMembershipApprovalRequestJob: function (n, r) {
          return e(
            o("WAWebGroupMembershipRequestsService")
              .GroupMembershipRequestsService,
            function (e) {
              return e.cancelMembershipApprovalRequestJob(n, r);
            },
          );
        },
        scheduleGroupMembershipFormAnswersRefetch: function (n, r) {
          return e(
            o("WAWebGroupMembershipRequestsService")
              .GroupMembershipRequestsService,
            function (e) {
              return e.scheduleGroupMembershipFormAnswersRefetch(n, r);
            },
          );
        },
        decodeStoredGroupMembershipFormAnswers: function (n, r) {
          return e(
            o("WAWebGroupMembershipRequestsService")
              .GroupMembershipRequestsService,
            function (e) {
              return e.decodeStoredGroupMembershipFormAnswers(n, r);
            },
          );
        },
      };
    }
    l.groupMembershipRequestsServiceClient = e;
  },
  98,
);
