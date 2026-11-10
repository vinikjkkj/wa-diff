__d(
  "WAWebSchemaOmittedConversationMetadataSnapshot",
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
        a = t.addUserDefinedPrimaryKey;
      e.add("omitted-conversation-metadata-snapshot")
        .version(
          o(
            "WAWebModelStorageVersions",
          ).omittedConversationMetadataSnapshotCreateTable(),
          [
            a("id"),
            n("snapshotId"),
            r("pairingId", o("WAWebStorageSchema").EncryptedValueType.STRING),
            n("nextBatchIndex"),
            n("expectedBatchCount"),
            n("snapshotTimestampMs"),
            n("ordinaryHistoryObserved"),
            n("complete"),
          ],
        )
        .view(function (e) {
          return e;
        });
    }
    function s() {
      return o("WAWebModelStorageUtils")
        .getStorage()
        .table("omitted-conversation-metadata-snapshot");
    }
    function u() {
      return o("WAWebModelStorageUtils")
        .getStorage()
        .doesLocalSchemaIncludeVersion(
          o(
            "WAWebModelStorageVersions",
          ).omittedConversationMetadataSnapshotCreateTable(),
        );
    }
    ((l.addTable = e),
      (l.getOmittedConversationMetadataSnapshotTable = s),
      (l.canUseOmittedConversationMetadataSnapshotTable = u));
  },
  98,
);
