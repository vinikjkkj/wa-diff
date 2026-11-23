__d(
  "WAWebOrgManagedGroupDetailAdapter",
  ["WAWebOrgAdminGraphQL"],
  function (t, n, r, o, a, i, l) {
    async function e(e, t) {
      return await o("WAWebOrgAdminGraphQL").loadOrgAdminGroup(e, t);
    }
    l.loadOrgManagedGroupDetail = e;
  },
  98,
);
