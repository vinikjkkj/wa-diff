__d(
  "WAWebAccountLinkingSchema",
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
      e.add("account-linking")
        .version(o("WAWebModelStorageVersions").accountLinkingCreateTable(), [
          r("accountLinkKey"),
          n("linkState"),
          n("linkTimestamp"),
          n("nonce"),
          n("fbid"),
          n("accesstoken"),
          n("pingInterval"),
          n("fbCrosspostingDestinationId"),
          n("igCrosspostingDestinationId"),
          n("foAToWALinkEligibility"),
          n("accountLinkingOpaqueData"),
        ])
        .view(function (e) {
          return e;
        });
    }
    function s() {
      return o("WAWebModelStorageUtils").getStorage().table("account-linking");
    }
    ((l.addTable = e), (l.getTable = s));
  },
  98,
);
