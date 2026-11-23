__d(
  "WAWebHandleOrphansForNewMsg",
  ["WAWebDBAssociatedMsgsAttachDetachAPI", "WAWebDBProcessOrphansForNewMsg"],
  function (t, n, r, o, a, i, l) {
    async function e(e) {
      await Promise.all([
        o("WAWebDBProcessOrphansForNewMsg").processOrphansForNewMsg(e),
        o(
          "WAWebDBAssociatedMsgsAttachDetachAPI",
        ).processOrphansFromAssociationsTableForNewMsg([e]),
      ]);
    }
    l.handleOrphansForNewMsg = e;
  },
  98,
);
