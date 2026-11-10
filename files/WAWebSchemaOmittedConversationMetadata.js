__d(
  "WAWebSchemaOmittedConversationMetadata",
  [
    "WAWebModelStorageUtils",
    "WAWebModelStorageVersions",
    "WAWebStorageMutationBuilder",
    "WAWebStorageSchema",
  ],
  function (t, n, r, o, a, i, l) {
    function e() {
      var e = o("WAWebModelStorageUtils").getStorage(),
        t = o("WAWebStorageMutationBuilder").columnBuilder(e.config),
        n = t.addColumn,
        r = t.addEncryptedColumn,
        a = t.addIndex,
        i = t.addUserDefinedPrimaryKey;
      e.add("omitted-conversation-metadata")
        .version(
          o(
            "WAWebModelStorageVersions",
          ).omittedConversationMetadataCreateTable(),
          [
            i("id"),
            n("snapshotId"),
            n("kind"),
            n("accountLid"),
            r(
              "payload",
              o("WAWebStorageSchema").EncryptedValueType.ARRAY_BUFFER,
            ),
            r("fingerprint", o("WAWebStorageSchema").EncryptedValueType.STRING),
            n("batchIndex"),
            n("transportOrder"),
            a("accountLid"),
            a("kind"),
          ],
        )
        .view(function (e) {
          return e;
        });
    }
    function s() {
      return o("WAWebModelStorageUtils")
        .getStorage()
        .table("omitted-conversation-metadata");
    }
    function u() {
      return o("WAWebModelStorageUtils")
        .getStorage()
        .doesLocalSchemaIncludeVersion(
          o(
            "WAWebModelStorageVersions",
          ).omittedConversationMetadataCreateTable(),
        );
    }
    ((l.addTable = e),
      (l.getOmittedConversationMetadataTable = s),
      (l.canUseOmittedConversationMetadataTable = u));
  },
  98,
);
