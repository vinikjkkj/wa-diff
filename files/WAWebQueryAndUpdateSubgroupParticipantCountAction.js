__d(
  "WAWebQueryAndUpdateSubgroupParticipantCountAction",
  [
    "WAWebMexQuerySubgroupParticipantCountJob",
    "WAWebUpdateLastCommunityPollTimestamp",
    "WAWebUpdateSubgroupsCommunityAction",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          o(
            "WAWebUpdateLastCommunityPollTimestamp",
          ).updateLastCommunityPollTimestamp(e.groupMetadata);
          var n = yield o(
              "WAWebMexQuerySubgroupParticipantCountJob",
            ).mexQuerySubgroupParticipantCountJob(e.id, t, "INTERACTIVE"),
            r = n.filter(function (t) {
              var n;
              return (n = e.groupMetadata) == null
                ? void 0
                : n.unjoinedSubgroups.includes(t.id);
            });
          o("WAWebUpdateSubgroupsCommunityAction").updateUnjoinedSubgroupSize(
            r,
          );
        })),
        s.apply(this, arguments)
      );
    }
    l.queryAndUpdateSubgroupParticipantCount = e;
  },
  98,
);
