__d(
  "WAWebSchemaMembershipApprovalRequest",
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
      e.add("pending-membership-approval-request")
        .version(
          o("WAWebModelStorageVersions").membershipApprovalRequestCreateTable(),
          [
            r(["groupId", "id"]),
            a("groupId"),
            n("t"),
            n("addedBy"),
            n("requestMethod"),
            n("parentGroupId"),
          ],
        )
        .view(function (e) {
          return e;
        });
    }
    function s() {
      return o("WAWebModelStorageUtils")
        .getStorage()
        .table("pending-membership-approval-request");
    }
    ((l.addTable = e), (l.getMembershipApprovalRequestTable = s));
  },
  98,
);
