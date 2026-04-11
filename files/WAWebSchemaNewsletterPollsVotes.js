__d(
  "WAWebSchemaNewsletterPollsVotes",
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
        r = t.addUserDefinedPrimaryKey;
      e.add("newsletter-polls-votes")
        .version(
          o("WAWebModelStorageVersions").newsletterPollsVotesCreateTable(),
          [r("parentMsgKey"), n("serverTimestamp"), n("votesMap")],
        )
        .view(function (e) {
          return e;
        });
    }
    function s() {
      return o("WAWebModelStorageUtils")
        .getStorage()
        .table("newsletter-polls-votes");
    }
    ((l.addTable = e), (l.getTable = s));
  },
  98,
);
