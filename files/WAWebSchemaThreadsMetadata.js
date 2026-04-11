__d(
  "WAWebSchemaThreadsMetadata",
  [
    "WAWebModelStorageUtils",
    "WAWebModelStorageVersions",
    "WAWebStorageMutationBuilder",
  ],
  function (t, n, r, o, a, i, l) {
    var e = "thread-metadata";
    function s() {
      var t = o("WAWebModelStorageUtils").getStorage(),
        n = o("WAWebStorageMutationBuilder").columnBuilder(t.config),
        r = n.addColumn,
        a = n.addIndex,
        i = n.addUserDefinedPrimaryKey;
      t.add(e)
        .version(o("WAWebModelStorageVersions").threadsMetadataCreateTable(), [
          i("id"),
          r("aiThreadInfo"),
        ])
        .version(
          o(
            "WAWebModelStorageVersions",
          ).addThreadsMetadataTableInternalIdIndex(),
          [
            r("internalId"),
            a("internalId"),
            r("creationTimestamp"),
            r("lastMessageTimestamp"),
            r("pinThreadTimestamp"),
            r("unreadCount"),
            r("botModeSelection"),
            r("botModeOverride"),
            r("lastReceivedKey"),
            r("unreadEditTimestampMs"),
          ],
        )
        .view(function (e) {
          return e;
        });
    }
    function u() {
      return o("WAWebModelStorageUtils").getStorage().table(e);
    }
    ((l.addTable = s), (l.getThreadsMetadataTable = u));
  },
  98,
);
