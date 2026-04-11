__d(
  "WAWebSchemaDirectConnectionKeys",
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
      e.add("direct-connection-keys")
        .version(
          o("WAWebModelStorageVersions").directConnectionKeysCreateTable(),
          [
            r("id"),
            n("certificateChain"),
            n("cypher"),
            n("cypherExpirationTimestamp"),
          ],
        )
        .version(
          o(
            "WAWebModelStorageVersions",
          ).directConnectionKeysAddPostcodeColumns(),
          [
            n("cypherType"),
            n("postcode"),
            n("postcodeSetByUser"),
            n("postcodeLocationName"),
          ],
        )
        .view(function (e) {
          return e;
        });
    }
    function s() {
      return o("WAWebModelStorageUtils")
        .getStorage()
        .table("direct-connection-keys");
    }
    ((l.addTable = e), (l.getDirectConnectionKeysTable = s));
  },
  98,
);
