__d(
  "LSDeleteThenInsertCommunityUnjoinedThread",
  [],
  function (t, n, r, o, a, i) {
    function e() {
      var e = arguments,
        t = e[e.length - 1],
        n = [],
        r = [];
      return t.sequence([
        function (r) {
          return (
            (n[1] = e[12] == null ? t.i64.cast([0, 19]) : e[12]),
            (n[2] = "community"),
            (n[3] =
              t.i64.cast([0, 0]) == null
                ? t.i64.cast([0, 0])
                : t.i64.cast([0, 0])),
            t.db
              .table(9)
              .fetch([[[e[0]]]])
              .next()
              .then(function (r, o) {
                var a,
                  i,
                  l = r.done,
                  s = r.value;
                return l
                  ? t.db
                      .table(9)
                      .put({
                        threadKey: e[0],
                        parentThreadKey: e[1],
                        mailboxType: t.i64.cast([0, 0]),
                        threadType: n[1],
                        threadName: e[2],
                        folderName: n[2],
                        threadPictureUrl: e[3],
                        threadPictureUrlFallback: e[4],
                        threadPictureUrlExpirationTimestampMs: e[5],
                        authorityLevel: e[6],
                        lastActivityTimestampMs: e[7],
                        lastReadWatermarkTimestampMs: e[8],
                        muteExpireTimeMs: n[3],
                        removeWatermarkTimestampMs: t.i64.cast([
                          -1, 4294967295,
                        ]),
                        ongoingCallState: t.i64.cast([0, 0]),
                        threadDescription: e[9],
                        snippet: e[10],
                        hasPendingInvitation: e[13],
                        eventStartTimestampMs: e[14],
                        eventEndTimestampMs: e[15],
                        takedownState: e[16],
                        cannotReplyReason: e[17],
                        themeFbid: e[18],
                        threadStatus: e[19],
                        needsAdminApprovalForNewParticipant: e[20],
                        joinRequestApprovalSetting: e[21],
                        snippetText: e[24],
                        hasPendingJoinRequest: e[25],
                        capabilities: t.i64.cast([0, 0]),
                        capabilities2: t.i64.cast([0, 0]),
                        capabilities3: t.i64.cast([0, 0]),
                        capabilities4: t.i64.cast([0, 0]),
                        capabilities5: t.i64.cast([0, 0]),
                        syncSource: e[26],
                        syncGroup: t.i64.cast([0, 104]),
                      })
                  : ((o = s.item),
                    (n[4] = o.lastActivityTimestampMs),
                    (n[6] = o.parentThreadKey),
                    (n[5] = o.disappearingThreadKey),
                    (n[7] = o.isDisappearingMode),
                    t.i64.le(o.authorityLevel, e[6])
                      ? t.i64.gt(n[4], e[7]) && t.i64.neq(n[5], void 0)
                        ? (t.i64.eq(e[1], t.i64.cast([-1, 4294967286])) &&
                          t.i64.eq(n[6], t.i64.cast([0, 0]))
                            ? ((a = [n[6], o.folderName]),
                              (n[8] = a[0]),
                              (n[9] = a[1]))
                            : ((i = [e[1], n[2]]),
                              (n[8] = i[0]),
                              (n[9] = i[1])),
                          t.db
                            .table(9)
                            .put({
                              threadKey: e[0],
                              parentThreadKey: n[8],
                              mailboxType: t.i64.cast([0, 0]),
                              threadType: n[1],
                              threadName: e[2],
                              folderName: n[9],
                              threadPictureUrl: e[3],
                              threadPictureUrlFallback: e[4],
                              threadPictureUrlExpirationTimestampMs: e[5],
                              authorityLevel: e[6],
                              lastActivityTimestampMs: n[4],
                              lastReadWatermarkTimestampMs:
                                o.lastReadWatermarkTimestampMs,
                              muteExpireTimeMs: n[3],
                              removeWatermarkTimestampMs: t.i64.cast([
                                -1, 4294967295,
                              ]),
                              ongoingCallState: t.i64.cast([0, 0]),
                              threadDescription: e[9],
                              snippet: e[10],
                              hasPendingInvitation: e[13],
                              eventStartTimestampMs: e[14],
                              eventEndTimestampMs: e[15],
                              takedownState: e[16],
                              cannotReplyReason: e[17],
                              themeFbid: e[18],
                              threadStatus: e[19],
                              needsAdminApprovalForNewParticipant: e[20],
                              joinRequestApprovalSetting: e[21],
                              snippetText: e[24],
                              hasPendingJoinRequest: e[25],
                              capabilities: t.i64.cast([0, 0]),
                              capabilities2: t.i64.cast([0, 0]),
                              capabilities3: t.i64.cast([0, 0]),
                              capabilities4: t.i64.cast([0, 0]),
                              capabilities5: t.i64.cast([0, 0]),
                              syncSource: e[26],
                              syncGroup: t.i64.cast([0, 104]),
                              disappearingThreadKey: n[5],
                              isDisappearingMode: n[7],
                            }))
                        : t.db
                            .table(9)
                            .put({
                              threadKey: e[0],
                              parentThreadKey: e[1],
                              mailboxType: t.i64.cast([0, 0]),
                              threadType: n[1],
                              threadName: e[2],
                              folderName: n[2],
                              threadPictureUrl: e[3],
                              threadPictureUrlFallback: e[4],
                              threadPictureUrlExpirationTimestampMs: e[5],
                              authorityLevel: e[6],
                              lastActivityTimestampMs: e[7],
                              lastReadWatermarkTimestampMs: e[8],
                              muteExpireTimeMs: n[3],
                              removeWatermarkTimestampMs: t.i64.cast([
                                -1, 4294967295,
                              ]),
                              ongoingCallState: t.i64.cast([0, 0]),
                              threadDescription: e[9],
                              snippet: e[10],
                              hasPendingInvitation: e[13],
                              eventStartTimestampMs: e[14],
                              eventEndTimestampMs: e[15],
                              takedownState: e[16],
                              cannotReplyReason: e[17],
                              themeFbid: e[18],
                              threadStatus: e[19],
                              needsAdminApprovalForNewParticipant: e[20],
                              joinRequestApprovalSetting: e[21],
                              snippetText: e[24],
                              hasPendingJoinRequest: e[25],
                              capabilities: t.i64.cast([0, 0]),
                              capabilities2: t.i64.cast([0, 0]),
                              capabilities3: t.i64.cast([0, 0]),
                              capabilities4: t.i64.cast([0, 0]),
                              capabilities5: t.i64.cast([0, 0]),
                              syncSource: e[26],
                              syncGroup: t.i64.cast([0, 104]),
                              disappearingThreadKey: n[5],
                              isDisappearingMode: n[7],
                            })
                      : t.resolve());
              })
          );
        },
        function (e) {
          return t.resolve(r);
        },
      ]);
    }
    ((e.__sproc_name__ =
      "LSMailboxDeleteThenInsertCommunityUnjoinedThreadStoredProcedure"),
      (e.__tables__ = ["threads"]),
      (a.exports = e));
  },
  null,
);
