__d(
  "WAWebSchemaOrg",
  [
    "$InternalEnum",
    "WAWebModelStorageUtils",
    "WAWebModelStorageVersions",
    "WAWebStorageMutationBuilder",
  ],
  function (t, n, r, o, a, i, l) {
    var e = n("$InternalEnum")({
      Creator: "CREATOR",
      Admin: "ADMIN",
      Member: "MEMBER",
    });
    function s() {
      var e = o("WAWebModelStorageUtils").getStorage(),
        t = o("WAWebStorageMutationBuilder").columnBuilder(e.config),
        n = t.addColumn,
        r = t.addUserDefinedPrimaryKey;
      e.add("org")
        .version(o("WAWebModelStorageVersions").orgCreateTable(), [
          r("orgId"),
          n("name"),
          n("description"),
          n("memberCount"),
          n("iconHandle"),
          n("iconThumbUrl"),
          n("iconFullUrl"),
          n("viewerRole"),
          n("managedGroups"),
          n("managedChannels"),
        ])
        .view(function (e) {
          return e;
        });
    }
    function u() {
      return o("WAWebModelStorageUtils").getStorage().table("org");
    }
    ((l.OrgMemberRole = e), (l.addTable = s), (l.getOrgTable = u));
  },
  98,
);
