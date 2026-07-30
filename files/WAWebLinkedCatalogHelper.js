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
      var e = o("WAWebUserPrefsMeUser").getMeUserOrThrow();
      return s(e);
    }
    function s(e) {
      var t;
      if (
        o("WAWebMobilePlatforms").isSMB() &&
        o("WAWebUserPrefsMeUser").isMeAccount(e)
      ) {
        var n = o("WAWebCatalogCollection").CatalogCollection.get(e);
        return (
          (n == null ? void 0 : n.catalogType) ===
          o("WAWebOrderRequestMsg.flow").CatalogType.SMB_META_CATALOG
        );
      }
      var r = o("WAWebBusinessProfileCollection").BusinessProfileCollection.get(
        e,
      );
      return (
        (r == null || (t = r.profileOptions) == null
          ? void 0
          : t.commerceExperience) ===
        o("WAWebBusinessProfileTypes").CommerceExperienceTypes.META_CATALOG
      );
    }
    ((l.shouldHideComponentForSMBLinkedCatalog = e), (l.isLinkedCatalog = s));
  },
  98,
);
