__d(
  "WAWebOrgPrimaryDirectoryGating",
  ["WAWebOrgCollection", "WAWebOrgGatingUtils", "WAWebOrgViewerRoleUtils"],
  function (t, n, r, o, a, i, l) {
    function e() {
      var e = o("WAWebOrgCollection").OrgCollection.getViewerPrimaryOrgId();
      return (
        o("WAWebOrgGatingUtils").isOrgInfoDisplayEnabled() &&
        o("WAWebOrgViewerRoleUtils").canReadOrgDirectory(
          e == null ? null : o("WAWebOrgCollection").OrgCollection.get(e),
        )
      );
    }
    l.canViewPrimaryOrgDirectory = e;
  },
  98,
);
