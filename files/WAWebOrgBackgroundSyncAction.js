__d(
  "WAWebOrgBackgroundSyncAction",
  [
    "WALogger",
    "WAWebOrgCollection",
    "WAWebOrgFetchDirectoryAction",
    "WAWebOrgRefreshListAction",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s;
    async function u(t) {
      var n = t.bypassCooldown,
        r = t.forceDirectory;
      (o("WALogger").LOG(
        e ||
          (e = babelHelpers.taggedTemplateLiteralLoose([
            "[org-sync] background sync bypass_cooldown=",
            " force_directory=",
            "",
          ])),
        String(n),
        String(r),
      ),
        await o("WAWebOrgRefreshListAction").restoreCachedOrgList());
      var a = await o("WAWebOrgRefreshListAction").refreshOrgList({
        bypassCooldown: n,
      });
      if (a.status === "failed") {
        o("WALogger").LOG(
          s ||
            (s = babelHelpers.taggedTemplateLiteralLoose([
              "[org-sync] stopped: the org list refresh failed",
            ])),
        );
        return;
      }
      var i = o("WAWebOrgCollection").OrgCollection.getViewerPrimaryOrgId();
      i != null &&
        (await o("WAWebOrgFetchDirectoryAction").fetchOrgDirectory(i, {
          createModels: !0,
          force: r,
        }));
    }
    l.syncOrgsInBackground = u;
  },
  98,
);
