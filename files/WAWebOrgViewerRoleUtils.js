__d(
  "WAWebOrgViewerRoleUtils",
  ["WAWebSchemaOrg"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.viewerRole;
      return (
        t === o("WAWebSchemaOrg").OrgMemberRole.Creator ||
        t === o("WAWebSchemaOrg").OrgMemberRole.Admin
      );
    }
    l.canViewerAdministerOrg = e;
  },
  98,
);
