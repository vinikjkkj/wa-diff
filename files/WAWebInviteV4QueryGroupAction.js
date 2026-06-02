__d(
  "WAWebInviteV4QueryGroupAction",
  [
    "WAWebApiGroupInviteV4Store",
    "WAWebChatCollection",
    "WAWebContactCollection",
    "WAWebGroupInviteV4Job",
    "WAWebGroupMetadataCollection",
    "WAWebLidMappingUsernameLearnUtils",
    "WAWebPhashUtils",
    "WAWebWidFactory",
  ],
  function (t, n, r, o, a, i, l) {
    async function e(e, t, n, a) {
      var i = null,
        l = r("WAWebGroupMetadataCollection").get(n);
      return (
        l &&
          (i = await o("WAWebPhashUtils").phashV1(
            l.participants.map(function (e) {
              return e.id;
            }),
          )),
        o("WAWebGroupInviteV4Job")
          .queryGroupInviteV4(e, t, n, a, i)
          .then(function (e) {
            if (e.phashMatch === !0) return { status: 200, phashMatch: !0 };
            if (e.groupMetadata != null) {
              var t = babelHelpers.extends({}, e.groupMetadata);
              return o("WAWebLidMappingUsernameLearnUtils")
                .processParsedGroupInfosForLidMappingAndUsernames([t])
                .then(function () {
                  return t;
                });
            }
            return { status: e.status };
          })
          .then(function (e) {
            if (e.status != null && e.status > 0) return e;
            if (e.id != null)
              return (
                o("WAWebContactCollection").ContactCollection.gadd(e.id),
                e
              );
            var t = r("WAWebGroupMetadataCollection").assertGet(
                o("WAWebWidFactory").createWidFromWidLike(n),
              ),
              a = o("WAWebChatCollection").ChatCollection.assertGet(t.id)
                .contact.name;
            return {
              id: t.id,
              owner: t.owner,
              creation: t.creation,
              desc: t.desc,
              descId: t.descId,
              descOwner: t.descOwner,
              descTime: t.descTime,
              restrict: t.restrict,
              announce: t.announce,
              ephemeralDuration: t.ephemeralDuration,
              membershipApprovalMode: t.membershipApprovalMode,
              reportToAdminMode: t.reportToAdminMode,
              growthLockExpiration: t.growthLockExpiration,
              growthLockType: t.growthLockType,
              noFrequentlyForwarded: t.noFrequentlyForwarded,
              subject: a,
              participants: t.participants.map(function (e) {
                return {
                  id: e.id,
                  isAdmin: e.isAdmin,
                  isSuperAdmin: e.isSuperAdmin,
                };
              }),
            };
          })
      );
    }
    function s(e, t, n, r) {
      return o("WAWebGroupInviteV4Job").joinGroupViaInviteV4({
        from: r,
        inviteCode: e,
        inviteCodeExp: t,
        inviteGrp: n,
      });
    }
    function u(e, t) {
      return o("WAWebGroupInviteV4Job").revokeGroupInviteV4(e, t);
    }
    function c(e, t) {
      return o("WAWebApiGroupInviteV4Store").getPendingParticipants(e, t);
    }
    ((l.queryGroupInviteV4Info = e),
      (l.joinGroupViaInviteV4 = s),
      (l.revokeGroupInviteV4 = u),
      (l.getPendingParticipants = c));
  },
  98,
);
