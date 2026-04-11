__d(
  "WAWebSchemaChatAssignment",
  [
    "WAWebModelStorageUtils",
    "WAWebModelStorageVersions",
    "WAWebStorageMutationBuilder",
  ],
  function (t, n, r, o, a, i, l) {
    var e = "chat-assignment";
    function s() {
      var t = o("WAWebModelStorageUtils").getStorage(),
        n = o("WAWebStorageMutationBuilder").columnBuilder(t.config),
        r = n.addColumn,
        a = n.addUserDefinedPrimaryKey;
      t.add(e)
        .version(o("WAWebModelStorageVersions").chatAssignmentCreateTable(), [
          a("id"),
          r("chatId"),
          r("agentId"),
          r("chatOpenedByAgent"),
        ])
        .view(function (e) {
          return e;
        });
    }
    function u() {
      return o("WAWebModelStorageUtils").getStorage().table(e);
    }
    ((l.addTable = s), (l.getChatAssignmentTable = u));
  },
  98,
);
