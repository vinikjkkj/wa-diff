__d(
  "WAWebPremiumMessageSchema",
  [
    "WAWebModelStorageUtils",
    "WAWebModelStorageVersions",
    "WAWebStorageMutationBuilder",
  ],
  function (t, n, r, o, a, i, l) {
    var e = o("WAWebStorageMutationBuilder").columnBuilder(),
      s = e.addColumn,
      u = e.addUserDefinedPrimaryKey;
    function c() {
      o("WAWebModelStorageUtils")
        .getStorage()
        .add("premium-message")
        .version(o("WAWebModelStorageVersions").premiumMessageCreateTable(), [
          u("id"),
          s("name"),
          s("type"),
          s("message"),
          s("isDeleted"),
          s("mediaId"),
          s("sentMessageIds"),
        ])
        .version(o("WAWebModelStorageVersions").featureFlagCreateTable(), [])
        .view(function (e) {
          return e;
        });
    }
    function d() {
      return o("WAWebModelStorageUtils").getStorage().table("premium-message");
    }
    ((l.addTable = c), (l.getPremiumMessageTable = d));
  },
  98,
);
