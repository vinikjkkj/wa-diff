__d(
  "WAWebBootstrapOrgDirectory",
  [
    "WAWebOrgCollection",
    "WAWebOrgFetchDirectoryAction",
    "WAWebOrgRefreshListAction",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    function e() {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          (yield o("WAWebOrgRefreshListAction").restoreCachedOrgList(),
            yield o("WAWebOrgRefreshListAction").refreshOrgList({
              bypassCooldown: !1,
            }));
          var e = o("WAWebOrgCollection").OrgCollection.getViewerPrimaryOrgId();
          e != null &&
            (yield o("WAWebOrgFetchDirectoryAction").fetchOrgDirectory(e, {
              createModels: !0,
            }));
        })),
        s.apply(this, arguments)
      );
    }
    l.bootstrapOrgs = e;
  },
  98,
);
