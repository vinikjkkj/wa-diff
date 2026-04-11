__d(
  "WAWebSchemaNewsletterMyVotes",
  [
    "WAWebModelStorageUtils",
    "WAWebModelStorageVersions",
    "WAWebStorageMutationBuilder",
  ],
  function (t, n, r, o, a, i, l) {
    function e() {
      var e = o("WAWebModelStorageUtils").getStorage(),
        t = o("WAWebStorageMutationBuilder").columnBuilder(e.config),
        n = t.addColumn,
        r = t.addCompositePrimaryKey;
      e.add("newsletter-my-votes")
        .version(
          o("WAWebModelStorageVersions").newsletterMyVotesCreateTable(),
          [
            r(["chatJid", "msgServerId"]),
            n("serverTimestampMs"),
            n("votes"),
            n("ack"),
            n("t"),
            n("read"),
            n("msgKey"),
          ],
        )
        .view(function (e) {
          return e;
        });
    }
    function s() {
      return o("WAWebModelStorageUtils")
        .getStorage()
        .table("newsletter-my-votes");
    }
    ((l.addTable = e), (l.getTable = s));
  },
  98,
);
