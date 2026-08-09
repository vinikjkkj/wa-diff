__d(
  "LSDeleteThenInsertCommunityFolder",
  [],
  function (t, n, r, o, a, i) {
    function e() {
      var e = arguments,
        t = e[e.length - 1],
        n = [],
        r = [];
      return t.sequence([
        function (n) {
          return t
            .filter(t.db.table(162).fetch([[[e[0]]]]), function (n) {
              return (
                t.i64.eq(n.folderId, e[0]) &&
                t.i64.gt(t.i64.cast([0, 80]), e[54])
              );
            })
            .next()
            .then(function (n) {
              var r = n.done,
                o = n.value;
              return r
                ? t.db
                    .table(162)
                    .put({
                      folderId: e[0],
                      fbGroupId: e[1],
                      name: e[2],
                      memberCount: e[4],
                      description: e[3],
                      pictureUrl: e[5],
                      pictureUrlFallback: e[6],
                      pictureUrlExpirationTimestampMs: e[7],
                      joiningChannelTaskId: e[8],
                      afterJoiningOpenChannelId: e[10],
                      capabilities: e[11],
                      capabilities2: e[12],
                      capabilities3: e[13],
                      notificationSetting: e[14],
                      notificationMutedUntil: e[15],
                      sendsBlockedUntil: e[17],
                      isHidden: e[18],
                      hasSeenDisablingAlert: e[19],
                      inviteLink: e[21],
                      communityType: e[22],
                      directInviteLink: e[23],
                      enableState: e[24],
                      takedownState: e[25],
                      fbGroupType: e[28],
                      threadCount: e[29],
                      disableTimestamp: e[32],
                      readTimestampMs: e[33],
                      inviteStatus: e[37],
                      blockedFromCommunityMemberCount: e[40],
                      categoryCount: e[41],
                      snippetText: e[42],
                      coverPicUrl: e[43],
                      coverPicUrlFallback: e[44],
                      coverPicUrlExpirationTimestampMs: e[45],
                      invitedThreadId: e[47],
                      fbGroupUserParticipationApprovalStatus: e[48],
                      ccAdminAssistRegistrationStatus: e[49],
                      pauseStatus: e[50],
                      isMember: e[51],
                      latestThreadId: e[52],
                      latestThreadActivityTimestampMs: e[53],
                    })
                : 0;
            });
        },
        function (e) {
          return t.resolve(r);
        },
      ]);
    }
    ((e.__sproc_name__ =
      "LSMailboxDeleteThenInsertCommunityFolderStoredProcedure"),
      (e.__tables__ = ["community_folders"]),
      (a.exports = e));
  },
  null,
);
