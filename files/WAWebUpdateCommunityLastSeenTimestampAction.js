__d(
  "WAWebUpdateCommunityLastSeenTimestampAction",
  ["WATimeUtils", "WAWebDBGroupsGroupMetadata"],
  function (t, n, r, o, a, i, l) {
    async function e(e) {
      var t = o("WATimeUtils").unixTime();
      (await o("WAWebDBGroupsGroupMetadata").persistGroupMetadata(e.id, {
        lastSeenActivityTimestamp: t,
      }),
        (e.lastSeenActivityTimestamp = t));
    }
    l.updateLastSeenTimestamp = e;
  },
  98,
);
