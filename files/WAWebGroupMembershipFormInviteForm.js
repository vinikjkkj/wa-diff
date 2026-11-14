__d(
  "WAWebGroupMembershipFormInviteForm",
  [
    "JSResourceForInteraction",
    "Promise",
    "WAWebBackendRuntime",
    "WAWebGroupInviteService",
    "WAWebGroupMembershipFormDevStore",
    "WAWebGroupMembershipFormGating",
    "WAWebGroupMembershipFormStoredRequests",
    "WAWebPonyfillsCryptoRandomUUID",
    "WAWebWidFactory",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = r("JSResourceForInteraction")(
        "WAWebMexFetchGroupMembershipFormForJoinJob",
      ).__setRef("WAWebGroupMembershipFormInviteForm");
    function u(t, r) {
      var a = o("WAWebWidFactory").asGroupWidOrThrow(t);
      if (o("WAWebGroupMembershipFormDevStore").isGMFDevMode()) {
        var i;
        return (e || (e = n("Promise"))).resolve(
          (i = o(
            "WAWebGroupMembershipFormDevStore",
          ).getDevInviteMembershipFormInfo(a)) == null
            ? void 0
            : i.record,
        );
      }
      if (
        !o("WAWebGroupMembershipFormGating").isGroupMembershipFormJoinEnabled()
      )
        return (e || (e = n("Promise"))).resolve(null);
      var l = { type: "inviteCode", inviteCode: r };
      return o("WAWebBackendRuntime").isWebDiBackendEnabled()
        ? o("WAWebBackendRuntime")
            .runtime(o("WAWebGroupInviteService").GroupInviteService)
            .fetchGroupMembershipFormForJoin(a, l)
        : s.load().then(function (e) {
            var t = e.fetchGroupMembershipFormForJoinJob;
            return t(a, l);
          });
    }
    function c(e) {
      var t,
        n = e.answers,
        a = e.groupId,
        i = e.inviteCode,
        l = o("WAWebWidFactory").asGroupWidOrThrow(a),
        s =
          (t = o(
            "WAWebGroupMembershipFormDevStore",
          ).getDevInviteMembershipFormInfo(l)) == null
            ? void 0
            : t.key;
      return s == null
        ? !1
        : (o(
            "WAWebGroupMembershipFormStoredRequests",
          ).saveStoredGroupMembershipFormRequest(l, {
            inviteCode: i,
            answers: n,
            requestId: r("WAWebPonyfillsCryptoRandomUUID")(),
            keyId: s.keyId,
          }),
          !0);
    }
    ((l.fetchInviteGroupMembershipFormRecord = u),
      (l.sendDevInviteMembershipFormRequest = c));
  },
  98,
);
