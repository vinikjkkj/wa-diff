__d(
  "WAWebOrgManagedGroupListAdapter",
  ["WAWebOrgAdminGraphQL", "asyncToGeneratorRuntime"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          return yield o("WAWebOrgAdminGraphQL").loadOrgAdminManagedGroups(e);
        })),
        s.apply(this, arguments)
      );
    }
    l.loadOrgManagedGroupList = e;
  },
  98,
);
