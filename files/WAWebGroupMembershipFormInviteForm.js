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
    function u(e, t) {
      return c(o("WAWebWidFactory").asGroupWidOrThrow(e), {
        type: "inviteCode",
        inviteCode: t,
      });
    }
    function c(t, r) {
      if (o("WAWebGroupMembershipFormDevStore").isGMFDevMode()) {
        var a;
        return (e || (e = n("Promise"))).resolve(
          (a = o(
            "WAWebGroupMembershipFormDevStore",
          ).getDevInviteMembershipFormInfo(t)) == null
            ? void 0
            : a.record,
        );
      }
      return o(
        "WAWebGroupMembershipFormGating",
      ).isGroupMembershipFormJoinEnabled()
        ? o("WAWebBackendRuntime").isWebDiBackendEnabled()
          ? o("WAWebBackendRuntime")
              .runtime(o("WAWebGroupInviteService").GroupInviteService)
              .fetchGroupMembershipFormForJoin(t, r)
          : s.load().then(function (e) {
              var n = e.fetchGroupMembershipFormForJoinJob;
              return n(t, r);
            })
        : (e || (e = n("Promise"))).resolve(null);
    }
    function d(e) {
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
          ).saveDevStoredGroupMembershipFormRequest(l, {
            inviteCode: i,
            answers: n,
            requestId: r("WAWebPonyfillsCryptoRandomUUID")(),
            keyId: s.keyId,
          }),
          !0);
    }
    ((l.fetchInviteGroupMembershipFormRecord = u),
      (l.fetchGroupMembershipFormRecordForPreview = c),
      (l.sendDevInviteMembershipFormRequest = d));
  },
  98,
);
