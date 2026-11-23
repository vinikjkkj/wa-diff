__d(
  "WAWebQueryAndUpdateCommunityParticipantsAction",
  [
    "WAWebBackendRuntime",
    "WAWebGroupDatabaseJob",
    "WAWebGroupGetCommunityParticipantsJob",
    "WAWebGroupMetadataCollection",
    "WAWebGroupQueryService",
    "WAWebGroupStoreService",
  ],
  function (t, n, r, o, a, i, l) {
    async function e(e) {
      var t = await (
          o("WAWebBackendRuntime").isWebDiBackendEnabled()
            ? o("WAWebBackendRuntime").runtime(
                o("WAWebGroupQueryService").GroupQueryService,
              ).getCommunityParticipants
            : o("WAWebGroupGetCommunityParticipantsJob")
                .getCommunityParticipants
        )(e),
        n = r("WAWebGroupMetadataCollection").get(e);
      if (n) {
        var a = n.participants,
          i = t.map(function (e) {
            var t = a.get(e),
              n = !1,
              r = !1;
            return (
              t && ((n = t.isAdmin), (r = t.isSuperAdmin)),
              { id: e, isAdmin: n, isSuperAdmin: r }
            );
          }),
          l = {
            id: e,
            announce: !1,
            participants: i.map(function (e) {
              return e;
            }),
            owner: n.owner,
            subject: n.subject,
            creation: n.creation,
            membershipApprovalMode: n.membershipApprovalMode,
            reportToAdminMode: n.reportToAdminMode,
            noFrequentlyForwarded: n.noFrequentlyForwarded,
            restrict: n.restrict,
          };
        (await (
          o("WAWebBackendRuntime").isWebDiBackendEnabled()
            ? o("WAWebBackendRuntime").runtime(
                o("WAWebGroupStoreService").GroupStoreService,
              ).updateGroupParticipantTableWithoutDeviceSyncJob
            : o("WAWebGroupDatabaseJob")
                .updateGroupParticipantTableWithoutDeviceSyncJob
        )([l]),
          a.set(i));
      }
    }
    l.queryAndUpdateCommunityParticipants = e;
  },
  98,
);
