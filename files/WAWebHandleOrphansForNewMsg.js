__d(
  "WAWebHandleOrphansForNewMsg",
  [
    "WAWebDBAssociatedMsgsAttachDetachAPI",
    "WAWebDBProcessOrphansForNewMsg",
    "WAWebMessageAssociationGatingUtils",
  ],
  function (t, n, r, o, a, i, l) {
    async function e(e) {
      var t = [o("WAWebDBProcessOrphansForNewMsg").processOrphansForNewMsg(e)];
      (o(
        "WAWebMessageAssociationGatingUtils",
      ).isMessageAssociationInfraEnabled() &&
        t.push(
          o(
            "WAWebDBAssociatedMsgsAttachDetachAPI",
          ).processOrphansFromAssociationsTableForNewMsg([e]),
        ),
        await Promise.all(t));
    }
    l.handleOrphansForNewMsg = e;
  },
  98,
);
