__d(
  "WAWebSchemaGroupHistoryParticipant",
  [
    "WAWebModelStorageUtils",
    "WAWebModelStorageVersions",
    "WAWebStorageMutationBuilder",
  ],
  function (t, n, r, o, a, i, l) {
    var e = "group-history-participant";
    function s() {
      var t = o("WAWebModelStorageUtils").getStorage(),
        n = o("WAWebStorageMutationBuilder").columnBuilder(t.config),
        r = n.addColumn,
        a = n.addUserDefinedPrimaryKey;
      t.add(e)
        .version(
          o("WAWebModelStorageVersions").groupHistoryParticipantCreateTable(),
          [a("chatId"), r("participantMetadataMap")],
        )
        .view(function (e) {
          return e;
        });
    }
    function u() {
      return o("WAWebModelStorageUtils").getStorage().table(e);
    }
    ((l.addTable = s), (l.getGroupHistoryParticipantTable = u));
  },
  98,
);
