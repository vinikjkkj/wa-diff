__d(
  "WAWebOrgAdminMemberJobs",
  [
    "WAWebDBOrg",
    "WAWebOrgAdminGraphQL",
    "WAWebOrgListSyncJob",
    "WAWebSchemaOrg",
  ],
  function (t, n, r, o, a, i, l) {
    async function e(e, t, n) {
      var r = await o("WAWebOrgAdminGraphQL").setOrgAdminMemberRole(e, t, n),
        a = r.status === "success" ? r.memberCount : null,
        i = o("WAWebSchemaOrg").OrgMemberRole.cast(n);
      return (
        i != null && (await o("WAWebDBOrg").updateOrgMemberRole(e, t, i, a)),
        c(e, t)
      );
    }
    async function s(e, t) {
      var n = await o("WAWebOrgAdminGraphQL").removeOrgAdminMember(e, t),
        r = n.status === "success" ? n.memberCount : null;
      return (await o("WAWebDBOrg").removeOrgMember(e, t, r), c(e, t));
    }
    async function u(e, t) {
      var n = await o("WAWebOrgAdminGraphQL").updateOrgAdminSettings(e, t);
      return { org: n, row: await o("WAWebOrgListSyncJob").storeServerOrg(n) };
    }
    async function c(e, t) {
      var n = await Promise.all([
          o("WAWebDBOrg").getOrgContactsByLids([t]),
          o("WAWebDBOrg").getOrgs(),
        ]),
        r = n[0],
        a = n[1];
      return {
        org: a.find(function (t) {
          return t.orgId === e;
        }),
        rows: r,
      };
    }
    ((l.changeOrgMemberRole = e),
      (l.removeOrgMember = s),
      (l.saveOrgSettings = u));
  },
  98,
);
