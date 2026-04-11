__d(
  "WAWebQueryAndUpdateCommunityParticipantsAction",
  [
    "WAWebGroupDatabaseJob",
    "WAWebGroupGetCommunityParticipantsJob",
    "WAWebGroupMetadataCollection",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield o(
              "WAWebGroupGetCommunityParticipantsJob",
            ).getCommunityParticipants(e),
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
            (yield o(
              "WAWebGroupDatabaseJob",
            ).updateGroupParticipantTableWithoutDeviceSyncJob([l]),
              a.set(i));
          }
        })),
        s.apply(this, arguments)
      );
    }
    l.queryAndUpdateCommunityParticipants = e;
  },
  98,
);
