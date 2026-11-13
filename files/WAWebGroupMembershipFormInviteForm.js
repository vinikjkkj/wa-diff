__d(
  "WAWebGroupMembershipFormInviteForm",
  [
    "WAWebGroupMembershipFormDevStore",
    "WAWebPonyfillsCryptoRandomUUID",
    "WAWebWidFactory",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      if (o("WAWebGroupMembershipFormDevStore").isGMFDevMode()) {
        var t;
        return (t = o(
          "WAWebGroupMembershipFormDevStore",
        ).getDevInviteMembershipFormInfo(
          o("WAWebWidFactory").asGroupWidOrThrow(e),
        )) == null
          ? void 0
          : t.record;
      }
      return null;
    }
    function s(e) {
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
            "WAWebGroupMembershipFormDevStore",
          ).setDevStoredMembershipFormRequest(l, {
            inviteCode: i,
            answers: n,
            requestId: r("WAWebPonyfillsCryptoRandomUUID")(),
            keyId: s.keyId,
          }),
          !0);
    }
    ((l.getInviteGroupMembershipFormRecord = e),
      (l.sendDevInviteMembershipFormRequest = s));
  },
  98,
);
