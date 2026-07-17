__d(
  "WAWebProductCatalogMetaLinkingGatingUtils",
  [
    "WAWebABProps",
    "WAWebBizCatalogGatingUtils",
    "WAWebBusinessProfileCollection",
    "WAWebBusinessProfileTypes",
    "WAWebUserPrefsMeUser",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      if (!c()) return !1;
      var e = o("WAWebBusinessProfileCollection").BusinessProfileCollection.get(
        o("WAWebUserPrefsMeUser").getMePnUserOrThrow_DO_NOT_USE(),
      );
      return d(e);
    }
    function s() {
      if (
        o("WAWebBizCatalogGatingUtils").isCatalogVariantsViewingEnabled() ||
        c()
      )
        return !1;
      var e = o("WAWebBusinessProfileCollection").BusinessProfileCollection.get(
        o("WAWebUserPrefsMeUser").getMePnUserOrThrow_DO_NOT_USE(),
      );
      return d(e);
    }
    function u(e) {
      return d(e);
    }
    function c() {
      return o("WAWebABProps").getABPropConfigValue(
        "meta_catalog_linking_m2_enabled",
      );
    }
    function d(e) {
      var t;
      return m()
        ? !0
        : o("WAWebBizCatalogGatingUtils").isCatalogVariantsViewingEnabled()
          ? !1
          : (e == null || (t = e.profileOptions) == null
              ? void 0
              : t.commerceExperience) ===
            o("WAWebBusinessProfileTypes").CommerceExperienceTypes.META_CATALOG;
    }
    function m() {
      var e = window.location.search,
        t = new URLSearchParams(e);
      return t.get("force_disable_catalog") === "1";
    }
    ((l.shouldShowMetaLinkedDisabledCatalogTooltipForSelf = e),
      (l.shouldDisableCatalogDueToMetaLinkingForSelf = s),
      (l.shouldDisableCatalogDueToMetaLinkingForProfile = u),
      (l.linkedCatalogDisabledTooltipEnabled = c));
  },
  98,
);
