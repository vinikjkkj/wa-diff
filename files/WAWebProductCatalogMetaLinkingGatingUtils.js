__d(
  "WAWebProductCatalogMetaLinkingGatingUtils",
  [
    "WAWebABProps",
    "WAWebBizCatalogGatingUtils",
    "WAWebBusinessProfileCollection",
    "WAWebBusinessProfileTypes",
    "WAWebUserPrefsMeUser",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      if (!m()) return !1;
      var e = o("WAWebBusinessProfileCollection").BusinessProfileCollection.get(
        o("WAWebUserPrefsMeUser").getMePnUserOrThrow_DO_NOT_USE(),
      );
      return p(e);
    }
    function s() {
      if (
        o("WAWebBizCatalogGatingUtils").isCatalogVariantsViewingEnabled() ||
        m()
      )
        return !1;
      var e = o("WAWebBusinessProfileCollection").BusinessProfileCollection.get(
        o("WAWebUserPrefsMeUser").getMePnUserOrThrow_DO_NOT_USE(),
      );
      return p(e);
    }
    function u(e) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield o(
            "WAWebBusinessProfileCollection",
          ).BusinessProfileCollection.fetchBizProfile(e);
          return p(t);
        })),
        c.apply(this, arguments)
      );
    }
    function d(e) {
      return p(e);
    }
    function m() {
      return o("WAWebABProps").getABPropConfigValue(
        "meta_catalog_linking_m2_enabled",
      );
    }
    function p(e) {
      var t;
      return _()
        ? !0
        : o("WAWebBizCatalogGatingUtils").isCatalogVariantsViewingEnabled()
          ? !1
          : (e == null || (t = e.profileOptions) == null
              ? void 0
              : t.commerceExperience) ===
            o("WAWebBusinessProfileTypes").CommerceExperienceTypes.META_CATALOG;
    }
    function _() {
      var e = window.location.search,
        t = new URLSearchParams(e);
      return t.get("force_disable_catalog") === "1";
    }
    ((l.shouldShowMetaLinkedDisabledCatalogTooltipForSelf = e),
      (l.shouldDisableCatalogDueToMetaLinkingForSelf = s),
      (l.shouldDisableCatalogDueToMetaLinking = u),
      (l.shouldDisableCatalogDueToMetaLinkingForProfile = d),
      (l.linkedCatalogDisabledTooltipEnabled = m));
  },
  98,
);
