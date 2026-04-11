__d(
  "WAWebSchemaPrivacyDisallowedList",
  [
    "$InternalEnum",
    "WAWebModelStorageUtils",
    "WAWebModelStorageVersions",
    "WAWebStorageMutationBuilder",
  ],
  function (t, n, r, o, a, i, l) {
    var e = n("$InternalEnum")({
      About: "status",
      GroupAdd: "groupadd",
      LastSeen: "last",
      ProfilePicture: "profile",
    });
    function s() {
      var e = o("WAWebModelStorageUtils").getStorage(),
        t = o("WAWebStorageMutationBuilder").columnBuilder(e.config),
        n = t.addColumn,
        r = t.addUserDefinedPrimaryKey;
      e.add("privacy-disallowed-list")
        .version(
          o("WAWebModelStorageVersions").privacyDisallowedListCreateTable(),
          [r("id"), n("disallowedList")],
        )
        .version(
          o("WAWebModelStorageVersions").privacyDisallowedListAddDhashField(),
          [n("dhash")],
        )
        .view(function (e) {
          return { id: e.id, disallowedList: e.disallowedList, dhash: e.dhash };
        });
    }
    function u() {
      return o("WAWebModelStorageUtils")
        .getStorage()
        .table("privacy-disallowed-list");
    }
    ((l.PrivacyDisallowedListType = e),
      (l.addTable = s),
      (l.getPrivacyDisallowedListTable = u));
  },
  98,
);
