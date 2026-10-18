__d(
  "WAWebOrgBackgroundSyncAction",
  [
    "WAWebOrgCollection",
    "WAWebOrgFetchDirectoryAction",
    "WAWebOrgRefreshListAction",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.bypassCooldown,
            n = e.forceDirectory;
          yield o("WAWebOrgRefreshListAction").restoreCachedOrgList();
          var r = yield o("WAWebOrgRefreshListAction").refreshOrgList({
            bypassCooldown: t,
          });
          if (r.status !== "failed") {
            var a =
              o("WAWebOrgCollection").OrgCollection.getViewerPrimaryOrgId();
            a != null &&
              (yield o("WAWebOrgFetchDirectoryAction").fetchOrgDirectory(a, {
                createModels: !0,
                force: n,
              }));
          }
        })),
        s.apply(this, arguments)
      );
    }
    l.syncOrgsInBackground = e;
  },
  98,
);
