__d(
  "WAWebSchemaInAppBanner",
  [
    "WAWebModelStorageUtils",
    "WAWebModelStorageVersions",
    "WAWebStorageMutationBuilder",
  ],
  function (t, n, r, o, a, i, l) {
    function e() {
      var e = o("WAWebModelStorageUtils").getStorage(),
        t = o("WAWebStorageMutationBuilder").columnBuilder(e.config),
        n = t.addColumn,
        r = t.addUserDefinedPrimaryKey;
      e.add("in-app-banner")
        .version(o("WAWebModelStorageVersions").inAppBannerCreateTable(), [
          r("id"),
          n("type"),
          n("surfaceId"),
          n("title"),
          n("text"),
          n("actionText"),
          n("actionLink"),
          n("iconDescription"),
          n("iconLight"),
          n("iconDark"),
          n("backgroundColor"),
          n("highlightColor"),
          n("pacing"),
          n("ts"),
        ])
        .view(function (e) {
          return e;
        });
    }
    l.addTable = e;
  },
  98,
);
