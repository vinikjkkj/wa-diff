__d(
  "WAWebSchemaMembershipApprovalRequest",
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
        r = t.addCompositePrimaryKey,
        a = t.addEncryptedColumn,
        i = t.addIndex;
      e.add("pending-membership-approval-request")
        .version(
          o("WAWebModelStorageVersions").membershipApprovalRequestCreateTable(),
          [
            r(["groupId", "id"]),
            i("groupId"),
            n("t"),
            n("addedBy"),
            n("requestMethod"),
            n("parentGroupId"),
            a(
              "membershipFormPayload",
              o("WAWebStorageSchema").EncryptedValueType.ARRAY_BUFFER,
            ),
            n("membershipFormKeyId"),
            a(
              "membershipFormRequestId",
              o("WAWebStorageSchema").EncryptedValueType.STRING,
            ),
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
