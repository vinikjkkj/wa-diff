__d(
  "WAWebSchemaGroupMembershipFormRequest",
  [
    "WAWebModelStorageUtils",
    "WAWebModelStorageVersions",
    "WAWebStorageMutationBuilder",
    "WAWebStorageSchema",
  ],
  function (t, n, r, o, a, i, l) {
    var e = "group-membership-form-request";
    function s() {
      var t = o("WAWebModelStorageUtils").getStorage(),
        n = o("WAWebStorageMutationBuilder").columnBuilder(t.config),
        r = n.addColumn,
        a = n.addEncryptedColumn,
        i = n.addIndex,
        l = n.addUserDefinedPrimaryKey;
      t.add(e)
        .version(
          o(
            "WAWebModelStorageVersions",
          ).groupMembershipFormRequestCreateTable(),
          [
            l("groupId"),
            r("inviteCode"),
            a(
              "answers",
              o("WAWebStorageSchema").EncryptedValueType.ARRAY_BUFFER,
            ),
            a("requestId", o("WAWebStorageSchema").EncryptedValueType.STRING),
            r("keyId"),
            r("createdAt"),
            i("inviteCode"),
          ],
        )
        .view(function (e) {
          return e;
        });
    }
    function u() {
      return o("WAWebModelStorageUtils").getStorage().table(e);
    }
    function c() {
      return o("WAWebModelStorageUtils")
        .getStorage()
        .doesLocalSchemaIncludeVersion(
          o(
            "WAWebModelStorageVersions",
          ).groupMembershipFormRequestCreateTable(),
        );
    }
    ((l.addTable = s),
      (l.getGroupMembershipFormRequestTable = u),
      (l.canUseGroupMembershipFormRequestTable = c));
  },
  98,
);
