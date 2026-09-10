__d(
  "WAWebSchemaOrgContact",
  [
    "WAWebModelStorageUtils",
    "WAWebModelStorageVersions",
    "WAWebStorageMutationBuilder",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.lid,
        n = e.orgId;
      return [n, t];
    }
    function s() {
      var e = o("WAWebModelStorageUtils").getStorage(),
        t = o("WAWebStorageMutationBuilder").columnBuilder(e.config),
        n = t.addColumn,
        r = t.addCompositePrimaryKey,
        a = t.addIndex;
      e.add("org-contacts")
        .version(o("WAWebModelStorageVersions").orgContactCreateTable(), [
          r(["orgId", "lid"]),
          n("memberName"),
          n("memberTag"),
          a("lid"),
        ])
        .view(function (e) {
          return e;
        });
    }
    function u() {
      return o("WAWebModelStorageUtils").getStorage().table("org-contacts");
    }
    ((l.createOrgContactPrimaryKey = e),
      (l.addTable = s),
      (l.getOrgContactTable = u));
  },
  98,
);
