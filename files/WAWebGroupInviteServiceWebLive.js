__d(
  "WAWebGroupInviteServiceWebLive",
  [
    "JSResourceForInteraction",
    "WAWebGroupInviteJob",
    "WAWebGroupInviteService",
    "WAWebGroupInviteV4QueryJoinJob",
    "WAWebMexFetchGroupInviteCodeJob",
    "WAWebMexFetchGroupMembershipFormForJoinJob",
    "WebDi.Async",
  ],
  function (t, n, r, o, a, i, l) {
    var e = r("JSResourceForInteraction")(
        "WAWebGroupMembershipFormRequestStore",
      ).__setRef("WAWebGroupInviteServiceWebLive"),
      s = r("JSResourceForInteraction")(
        "WAWebGroupMembershipFormJoinJob",
      ).__setRef("WAWebGroupInviteServiceWebLive"),
      u = o("WAWebGroupInviteService").GroupInviteService.make(function* () {
        var t = {
          joinGroupViaInvite: function (t, n, r) {
            return o("WebDi.Async").fromPromise(function () {
              return o("WAWebGroupInviteJob").joinGroupViaInvite(t, n, r);
            });
          },
          resetGroupInviteCode: function (t) {
            return o("WebDi.Async").fromPromise(function () {
              return o("WAWebGroupInviteJob").resetGroupInviteCode(t);
            });
          },
          queryGroupInviteV4: function (t) {
            return o("WebDi.Async").fromPromise(function () {
              return o("WAWebGroupInviteV4QueryJoinJob").queryGroupInviteV4(t);
            });
          },
          fetchMexGroupInviteCode: function (t) {
            return o("WebDi.Async").fromPromise(function () {
              return o(
                "WAWebMexFetchGroupInviteCodeJob",
              ).fetchMexGroupInviteCode(t);
            });
          },
          fetchGroupMembershipFormForJoin: function (t, n) {
            return o("WebDi.Async").fromPromise(function () {
              return o(
                "WAWebMexFetchGroupMembershipFormForJoinJob",
              ).fetchGroupMembershipFormForJoinJob(t, n);
            });
          },
          getGroupMembershipFormStoredRequest: function (n) {
            return o("WebDi.Async").fromPromise(function () {
              return e.load().then(function (e) {
                var t = e.getGroupMembershipFormStoredRequest;
                return t(n);
              });
            });
          },
          deleteGroupMembershipFormStoredRequest: function (n) {
            return o("WebDi.Async").fromPromise(function () {
              return e.load().then(function (e) {
                var t = e.deleteGroupMembershipFormStoredRequest;
                return t(n);
              });
            });
          },
          submitGroupMembershipFormJoin: function (t) {
            return o("WebDi.Async").fromPromise(function () {
              return s.load().then(function (e) {
                var n = e.submitGroupMembershipFormJoinJob;
                return n(t);
              });
            });
          },
        };
        return t;
      });
    l.GroupInviteServiceWebLive = u;
  },
  98,
);
