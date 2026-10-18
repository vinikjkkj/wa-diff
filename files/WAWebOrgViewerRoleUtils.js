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
    function s(t) {
      return t != null && (t.isMemberDirectoryEnabled === !0 || e(t));
    }
    ((l.canViewerAdministerOrg = e), (l.canReadOrgDirectory = s));
  },
  98,
);
