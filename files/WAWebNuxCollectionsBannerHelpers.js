__d(
  "WAWebNuxCollectionsBannerHelpers",
  ["WAWebSelfCatalogLookup"],
  function (t, n, r, o, a, i, l) {
    function e() {
      var e = o("WAWebSelfCatalogLookup").getSelfCatalog();
      if (e == null || e.collections == null) return !1;
      var t = e.collections.getCollectionModels(!0),
        n = e.productCollection.getProductModels(!0).some(function (e) {
          return !e.isHidden && e.reviewStatus !== "REJECTED";
        });
      return n && t.length === 0;
    }
    l.hasItemsNoProductColl = e;
  },
  98,
);
