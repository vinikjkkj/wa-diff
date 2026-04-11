__d(
  "WAWebSchemaNewsletterReactions",
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
      e.add("newsletter-reactions")
        .version(
          o("WAWebModelStorageVersions").newsletterReactionsCreateTable(),
          [r("parentMsgKey"), n("emojiCountMap"), n("serverTimestamp")],
        )
        .view(function (e) {
          return e;
        });
    }
    function s() {
      return o("WAWebModelStorageUtils")
        .getStorage()
        .table("newsletter-reactions");
    }
    ((l.addTable = e), (l.getTable = s));
  },
  98,
);
