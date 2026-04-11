__d(
  "WAWebSchemaVerifiedBusinessName",
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
        r = t.addUserDefinedPrimaryKey,
        a = t.removeColumn;
      e.add("verified-business-name")
        .version(
          o("WAWebModelStorageVersions").verifiedBusinessNameCreateTable(),
          [
            r("id"),
            n("serial"),
            n("name"),
            n("isApi"),
            n("level"),
            n("actualActors"),
            n("hostStorage"),
            n("privacyModeTs"),
          ],
        )
        .version(
          o("WAWebModelStorageVersions").verifiedBusinessNameAddPrivacyMode(),
          [
            n("privacyMode"),
            a("actualActors"),
            a("hostStorage"),
            a("privacyModeTs"),
          ],
        )
        .version(
          o("WAWebModelStorageVersions").verifiedBusinessNameAddSmbColumn(),
          [n("isSmb")],
        )
        .view(function (e) {
          return e;
        });
    }
    function s() {
      return o("WAWebModelStorageUtils")
        .getStorage()
        .table("verified-business-name");
    }
    ((l.addTable = e), (l.getVerifiedBusinessNameTable = s));
  },
  98,
);
