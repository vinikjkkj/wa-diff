__d(
  "WAWebLinkedCatalogHelper",
  [
    "WAWebBusinessProfileCollection",
    "WAWebBusinessProfileTypes",
    "WAWebCatalogCollection",
    "WAWebMobilePlatforms",
    "WAWebOrderRequestMsg.flow",
    "WAWebUserPrefsMeUser",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      var e = o("WAWebUserPrefsMeUser").getMePnUserOrThrow_DO_NOT_USE();
      return s(e);
    }
    function s(e) {
      var t,
        n = o("WAWebUserPrefsMeUser").getMePnUserOrThrow_DO_NOT_USE();
      if (o("WAWebMobilePlatforms").isSMB() && n.equals(e)) {
        var r = o("WAWebCatalogCollection").CatalogCollection.get(e);
        return (
          (r == null ? void 0 : r.catalogType) ===
          o("WAWebOrderRequestMsg.flow").CatalogType.SMB_META_CATALOG
        );
      }
      var a = o("WAWebBusinessProfileCollection").BusinessProfileCollection.get(
        e,
      );
      return (
        (a == null || (t = a.profileOptions) == null
          ? void 0
          : t.commerceExperience) ===
        o("WAWebBusinessProfileTypes").CommerceExperienceTypes.META_CATALOG
      );
    }
    ((l.shouldHideComponentForSMBLinkedCatalog = e), (l.isLinkedCatalog = s));
  },
  98,
);
