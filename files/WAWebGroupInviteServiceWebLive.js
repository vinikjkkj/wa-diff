__d(
  "WAWebGroupInviteServiceWebLive",
  [
    "JSResourceForInteraction",
    "Promise",
    "WAWebGroupInviteService",
    "WebDi.Async",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = (s = r("JSResourceForInteraction"))("WAWebGroupInviteJob").__setRef(
        "WAWebGroupInviteServiceWebLive",
      ),
      c = s("WAWebGroupInviteV4QueryJoinJob").__setRef(
        "WAWebGroupInviteServiceWebLive",
      ),
      d = s("WAWebGroupMembershipFormRequestStore").__setRef(
        "WAWebGroupInviteServiceWebLive",
      ),
      m = s("WAWebGroupMembershipFormJoinJob").__setRef(
        "WAWebGroupInviteServiceWebLive",
      ),
      p = s("WAWebMexFetchGroupMembershipFormForJoinJob").__setRef(
        "WAWebGroupInviteServiceWebLive",
      ),
      _ = s("WAWebMexFetchGroupInviteCodeJob").__setRef(
        "WAWebGroupInviteServiceWebLive",
      ),
      f = o("WAWebGroupInviteService").GroupInviteService.make(function* () {
        var t = yield* o("WebDi.Async").fromPromise(function () {
            return (e || (e = n("Promise"))).all([
              u.load(),
              c.load(),
              _.load(),
              p.load(),
              d.load(),
              m.load(),
            ]);
          }),
          r = t[0],
          a = r.joinGroupViaInvite,
          i = r.resetGroupInviteCode,
          l = t[1].queryGroupInviteV4,
          s = t[2].fetchMexGroupInviteCode,
          f = t[3].fetchGroupMembershipFormForJoinJob,
          g = t[4],
          h = g.deleteGroupMembershipFormStoredRequest,
          y = g.getGroupMembershipFormStoredRequest,
          C = t[5].submitGroupMembershipFormJoinJob,
          b = {
            joinGroupViaInvite: function (t, n, r) {
              return o("WebDi.Async").fromPromise(function () {
                return a(t, n, r);
              });
            },
            resetGroupInviteCode: function (t) {
              return o("WebDi.Async").fromPromise(function () {
                return i(t);
              });
            },
            queryGroupInviteV4: function (t) {
              return o("WebDi.Async").fromPromise(function () {
                return l(t);
              });
            },
            fetchMexGroupInviteCode: function (t) {
              return o("WebDi.Async").fromPromise(function () {
                return s(t);
              });
            },
            fetchGroupMembershipFormForJoin: function (t, n) {
              return o("WebDi.Async").fromPromise(function () {
                return f(t, n);
              });
            },
            getGroupMembershipFormStoredRequest: function (t) {
              return o("WebDi.Async").fromPromise(function () {
                return y(t);
              });
            },
            deleteGroupMembershipFormStoredRequest: function (t) {
              return o("WebDi.Async").fromPromise(function () {
                return h(t);
              });
            },
            submitGroupMembershipFormJoin: function (t) {
              return o("WebDi.Async").fromPromise(function () {
                return C(t);
              });
            },
          };
        return b;
      });
    l.GroupInviteServiceWebLive = f;
  },
  98,
);
