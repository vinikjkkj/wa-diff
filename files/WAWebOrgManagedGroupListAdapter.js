__d(
  "WAWebOrgManagedGroupListAdapter",
  ["WAWebOrgAdminGraphQL"],
  function (t, n, r, o, a, i, l) {
    async function e(e) {
      return await o("WAWebOrgAdminGraphQL").loadOrgAdminManagedGroups(e);
    }
    l.loadOrgManagedGroupList = e;
  },
  98,
);
