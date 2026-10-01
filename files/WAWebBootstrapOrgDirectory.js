__d(
  "WAWebBootstrapOrgDirectory",
  ["WAWebOrgDirectoryRepository", "asyncToGeneratorRuntime"],
  function (t, n, r, o, a, i, l) {
    var e = null;
    function s() {
      return (
        e != null ||
          (e = c().finally(function () {
            e = null;
          })),
        e
      );
    }
    function u() {
      e = null;
    }
    function c() {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e;
          yield o("WAWebOrgDirectoryRepository").restoreCachedOrganizations();
          var t =
            (e = o(
              "WAWebOrgDirectoryRepository",
            ).getOrgDirectoryRepositorySnapshot().organizations[0]) == null
              ? void 0
              : e.id;
          yield o("WAWebOrgDirectoryRepository").refreshOrganizations();
          var n = o(
              "WAWebOrgDirectoryRepository",
            ).getOrgDirectoryRepositorySnapshot().orderedOrgIDs,
            r = n == null ? t : n[0];
          r != null &&
            (yield o("WAWebOrgDirectoryRepository").restoreCachedOrgDirectory(
              r,
            ));
        })),
        d.apply(this, arguments)
      );
    }
    ((l.bootstrapOrgDirectory = s), (l.resetOrgDirectoryBootstrap = u));
  },
  98,
);
