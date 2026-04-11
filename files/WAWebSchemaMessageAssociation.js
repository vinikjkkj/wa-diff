__d(
  "WAWebSchemaMessageAssociation",
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
        r = t.addCompositePrimaryKey,
        a = t.addIndex;
      e.add("message-association")
        .version(
          o("WAWebModelStorageVersions").messageAssociationCreateTable(),
          [
            r(["msgKey", "associationType"]),
            n("parentMsgKey"),
            n("msgKeyInternalId"),
            a("parentMsgKey"),
          ],
        )
        .view(function (e) {
          return e;
        });
    }
    function s() {
      return o("WAWebModelStorageUtils")
        .getStorage()
        .table("message-association");
    }
    ((l.addTable = e), (l.getMessageAssociationTable = s));
  },
  98,
);
