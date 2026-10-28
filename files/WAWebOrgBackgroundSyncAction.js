__d(
  "WAWebOrgBackgroundSyncAction",
  [
    "WALogger",
    "WAWebOrgCollection",
    "WAWebOrgFetchDirectoryAction",
    "WAWebOrgRefreshListAction",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s;
    function u(e) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
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
            yield o("WAWebOrgRefreshListAction").restoreCachedOrgList());
          var a = yield o("WAWebOrgRefreshListAction").refreshOrgList({
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
            (yield o("WAWebOrgFetchDirectoryAction").fetchOrgDirectory(i, {
              createModels: !0,
              force: r,
            }));
        })),
        c.apply(this, arguments)
      );
    }
    l.syncOrgsInBackground = u;
  },
  98,
);
