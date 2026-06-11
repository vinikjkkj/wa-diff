__d(
  "WAWebGetFormattedCatalogJid",
  ["WAWebABProps", "WAWebLidMigrationUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      if (e.isLid()) return e.toString();
      try {
        if (
          o("WAWebABProps").getABPropConfigValue(
            "wa_catalog_graphql_use_lid_enabled",
          )
        ) {
          var t = o("WAWebLidMigrationUtils").toUserLid(e);
          if (t != null) return t.toString();
        }
      } catch (e) {}
      return null;
    }
    l.getFormattedCatalogJid = e;
  },
  98,
);
