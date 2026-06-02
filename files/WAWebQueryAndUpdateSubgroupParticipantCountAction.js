__d(
  "WAWebQueryAndUpdateSubgroupParticipantCountAction",
  [
    "WAWebMexQuerySubgroupParticipantCountJob",
    "WAWebUpdateLastCommunityPollTimestamp",
    "WAWebUpdateSubgroupsCommunityAction",
  ],
  function (t, n, r, o, a, i, l) {
    async function e(e, t) {
      o(
        "WAWebUpdateLastCommunityPollTimestamp",
      ).updateLastCommunityPollTimestamp(e.groupMetadata);
      var n = await o(
          "WAWebMexQuerySubgroupParticipantCountJob",
        ).mexQuerySubgroupParticipantCountJob(e.id, t, "INTERACTIVE"),
        r = n.filter(function (t) {
          var n;
          return (n = e.groupMetadata) == null
            ? void 0
            : n.unjoinedSubgroups.includes(t.id);
        });
      o("WAWebUpdateSubgroupsCommunityAction").updateUnjoinedSubgroupSize(r);
    }
    l.queryAndUpdateSubgroupParticipantCount = e;
  },
  98,
);
