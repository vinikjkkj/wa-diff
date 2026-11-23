__d(
  "WAWebUpdateLastCommunityPollTimestamp",
  ["WATimeUtils", "WAWebDBGroupsGroupMetadata"],
  function (t, n, r, o, a, i, l) {
    async function e(e) {
      if (e != null) {
        var t = o("WATimeUtils").unixTime();
        (await o("WAWebDBGroupsGroupMetadata").persistGroupMetadata(e.id, {
          lastCommunityPollTimestamp: t,
        }),
          (e.lastCommunityPollTimestamp = t));
      }
    }
    l.updateLastCommunityPollTimestamp = e;
  },
  98,
);
