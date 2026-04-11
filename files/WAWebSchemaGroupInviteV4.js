__d(
  "WAWebSchemaGroupInviteV4",
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
        r = t.addCompositeIndex,
        a = t.addUserDefinedPrimaryKey;
      e.add("group-invite-v4")
        .version(o("WAWebModelStorageVersions").groupInviteV4CreateTable(), [
          a("id"),
          n("from"),
          n("to"),
          n("groupId"),
          n("expiration"),
          n("expired"),
          r(["from", "to", "groupId"]),
        ])
        .version(
          o("WAWebModelStorageVersions").addGroupFromKeyToGroupInviteV4(),
          [r(["from", "groupId"])],
        )
        .view(function (e) {
          return e;
        });
    }
    function s() {
      return o("WAWebModelStorageUtils").getStorage().table("group-invite-v4");
    }
    ((l.addTable = e), (l.getGroupInviteV4Table = s));
  },
  98,
);
