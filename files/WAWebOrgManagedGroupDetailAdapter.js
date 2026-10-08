__d(
  "WAWebOrgManagedGroupDetailAdapter",
  ["WAWebOrgAdminGraphQL", "asyncToGeneratorRuntime"],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          return yield o("WAWebOrgAdminGraphQL").loadOrgAdminGroup(e, t);
        })),
        s.apply(this, arguments)
      );
    }
    l.loadOrgManagedGroupDetail = e;
  },
  98,
);
