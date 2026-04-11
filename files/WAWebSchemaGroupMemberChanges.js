__d(
  "WAWebSchemaGroupMemberChanges",
  [
    "$InternalEnum",
    "WAWebModelStorageUtils",
    "WAWebModelStorageVersions",
    "WAWebStorageMutationBuilder",
  ],
  function (t, n, r, o, a, i, l) {
    var e = n("$InternalEnum")({ JOINED_VIA_LINK: "joined_via_link" });
    function s() {
      var e = o("WAWebModelStorageUtils").getStorage(),
        t = o("WAWebStorageMutationBuilder").columnBuilder(e.config),
        n = t.addAutoIncrementingPrimaryKey,
        r = t.addColumn,
        a = t.addIndex;
      e.add("group-member-changes")
        .version(
          o("WAWebModelStorageVersions").groupMemberChangesCreateTable(),
          [
            n("id"),
            r("groupJid"),
            a("groupJid"),
            r("participantJid"),
            r("changeTimestamp"),
            r("changeAction"),
          ],
        )
        .view(function (e) {
          return e;
        });
    }
    function u() {
      return o("WAWebModelStorageUtils")
        .getStorage()
        .table("group-member-changes");
    }
    ((l.GroupMemberChangeAction = e),
      (l.addTable = s),
      (l.getGroupMemberChangesTable = u));
  },
  98,
);
