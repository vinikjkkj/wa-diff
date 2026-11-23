__d(
  "WAWebGroupMembershipRequestsServiceWebLive",
  [
    "JSResourceForInteraction",
    "Promise",
    "WAWebGroupMembershipRequestsService",
    "WebDi.Async",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = (s = r("JSResourceForInteraction"))(
        "WAWebApiMembershipApprovalRequestStore",
      ).__setRef("WAWebGroupMembershipRequestsServiceWebLive"),
      c = s("WAWebGroupCancelMembershipRequestJob").__setRef(
        "WAWebGroupMembershipRequestsServiceWebLive",
      ),
      d = s("WAWebGroupGetMembershipApprovalRequestsJob").__setRef(
        "WAWebGroupMembershipRequestsServiceWebLive",
      ),
      m = s("WAWebGroupMembershipFormAnswersJob").__setRef(
        "WAWebGroupMembershipRequestsServiceWebLive",
      ),
      p = s("WAWebGroupMembershipRequestsActionJob").__setRef(
        "WAWebGroupMembershipRequestsServiceWebLive",
      ),
      _ = o(
        "WAWebGroupMembershipRequestsService",
      ).GroupMembershipRequestsService.make(function* () {
        var t = yield* o("WebDi.Async").fromPromise(function () {
            return (e || (e = n("Promise"))).all([
              u.load(),
              c.load(),
              d.load(),
              p.load(),
              m.load(),
            ]);
          }),
          r = t[0].getMembershipApprovalRequests,
          a = t[1].cancelMembershipApprovalRequestJob,
          i = t[2].queryAndUpdateGroupMembershipApprovalRequests,
          l = t[3].membershipApprovalRequestAction,
          s = t[4],
          _ = s.decodeStoredGroupMembershipFormAnswers,
          f = s.scheduleGroupMembershipFormAnswersRefetch,
          g = {
            getMembershipApprovalRequests: function (t) {
              return o("WebDi.Async").fromPromise(function () {
                return r(t);
              });
            },
            queryAndUpdateGroupMembershipApprovalRequests: function (t) {
              return o("WebDi.Async").fromPromise(function () {
                return i(t);
              });
            },
            membershipApprovalRequestAction: function (t, n, r) {
              return o("WebDi.Async").fromPromise(function () {
                return l(t, n, r);
              });
            },
            cancelMembershipApprovalRequestJob: function (t, n) {
              return o("WebDi.Async").fromPromise(function () {
                return a(t, n);
              });
            },
            scheduleGroupMembershipFormAnswersRefetch: function (t, n) {
              return o("WebDi.Async").fromPromise(function () {
                return f(t, n);
              });
            },
            decodeStoredGroupMembershipFormAnswers: function (t, n) {
              return o("WebDi.Async").fromPromise(function () {
                return _(t, n);
              });
            },
          };
        return g;
      });
    l.GroupMembershipRequestsServiceWebLive = _;
  },
  98,
);
