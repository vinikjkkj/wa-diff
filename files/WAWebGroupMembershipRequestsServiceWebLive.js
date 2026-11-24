__d(
  "WAWebGroupMembershipRequestsServiceWebLive",
  [
    "JSResourceForInteraction",
    "WAWebApiMembershipApprovalRequestStore",
    "WAWebGroupCancelMembershipRequestJob",
    "WAWebGroupGetMembershipApprovalRequestsJob",
    "WAWebGroupMembershipRequestsActionJob",
    "WAWebGroupMembershipRequestsService",
    "WebDi.Async",
  ],
  function (t, n, r, o, a, i, l) {
    var e = r("JSResourceForInteraction")(
        "WAWebGroupMembershipFormAnswersJob",
      ).__setRef("WAWebGroupMembershipRequestsServiceWebLive"),
      s = o(
        "WAWebGroupMembershipRequestsService",
      ).GroupMembershipRequestsService.make(function* () {
        var t = {
          getMembershipApprovalRequests: function (t) {
            return o("WebDi.Async").fromPromise(function () {
              return o(
                "WAWebApiMembershipApprovalRequestStore",
              ).getMembershipApprovalRequests(t);
            });
          },
          queryAndUpdateGroupMembershipApprovalRequests: function (t) {
            return o("WebDi.Async").fromPromise(function () {
              return o(
                "WAWebGroupGetMembershipApprovalRequestsJob",
              ).queryAndUpdateGroupMembershipApprovalRequests(t);
            });
          },
          membershipApprovalRequestAction: function (t, n, r) {
            return o("WebDi.Async").fromPromise(function () {
              return o(
                "WAWebGroupMembershipRequestsActionJob",
              ).membershipApprovalRequestAction(t, n, r);
            });
          },
          cancelMembershipApprovalRequestJob: function (t, n) {
            return o("WebDi.Async").fromPromise(function () {
              return o(
                "WAWebGroupCancelMembershipRequestJob",
              ).cancelMembershipApprovalRequestJob(t, n);
            });
          },
          scheduleGroupMembershipFormAnswersRefetch: function (n, r) {
            return o("WebDi.Async").fromPromise(function () {
              return e.load().then(function (e) {
                var t = e.scheduleGroupMembershipFormAnswersRefetch;
                return t(n, r);
              });
            });
          },
          decodeStoredGroupMembershipFormAnswers: function (n, r) {
            return o("WebDi.Async").fromPromise(function () {
              return e.load().then(function (e) {
                var t = e.decodeStoredGroupMembershipFormAnswers;
                return t(n, r);
              });
            });
          },
        };
        return t;
      });
    l.GroupMembershipRequestsServiceWebLive = s;
  },
  98,
);
