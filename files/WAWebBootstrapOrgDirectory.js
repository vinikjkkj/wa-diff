__d(
  "WAWebBootstrapOrgDirectory",
  [
    "WAWebOrgCollection",
    "WAWebOrgFetchDirectoryAction",
    "WAWebOrgRefreshListAction",
  ],
  function (t, n, r, o, a, i, l) {
    async function e() {
      (await o("WAWebOrgRefreshListAction").restoreCachedOrgList(),
        await o("WAWebOrgRefreshListAction").refreshOrgList({
          bypassCooldown: !1,
        }));
      var e = o("WAWebOrgCollection").OrgCollection.getViewerPrimaryOrgId();
      e != null &&
        (await o("WAWebOrgFetchDirectoryAction").fetchOrgDirectory(e, {
          createModels: !0,
        }));
    }
    l.bootstrapOrgs = e;
  },
  98,
);
