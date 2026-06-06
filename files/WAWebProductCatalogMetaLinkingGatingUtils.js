__d(
  "WAWebProductCatalogMetaLinkingGatingUtils",
  [
    "fbt",
    "WAWebABProps",
    "WAWebBizCatalogGatingUtils",
    "WAWebBusinessProfileCollection",
    "WAWebBusinessProfileTypes",
    "WAWebUserPrefsMeUser",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    function e() {
      return s._(/*BTDS*/ "Connected catalog. View with WhatsApp mobile app.");
    }
    function u() {
      if (!_()) return !1;
      var e = o("WAWebBusinessProfileCollection").BusinessProfileCollection.get(
        o("WAWebUserPrefsMeUser").getMePnUserOrThrow_DO_NOT_USE(),
      );
      return f(e);
    }
    async function c(e) {
      return _() ? m(e) : !1;
    }
    function d() {
      if (
        o("WAWebBizCatalogGatingUtils").isCatalogVariantsViewingEnabled() ||
        _()
      )
        return !1;
      var e = o("WAWebBusinessProfileCollection").BusinessProfileCollection.get(
        o("WAWebUserPrefsMeUser").getMePnUserOrThrow_DO_NOT_USE(),
      );
      return f(e);
    }
    async function m(e) {
      var t = await o(
        "WAWebBusinessProfileCollection",
      ).BusinessProfileCollection.fetchBizProfile(e);
      return f(t);
    }
    function p(e) {
      return f(e);
    }
    function _() {
      return o("WAWebABProps").getABPropConfigValue(
        "meta_catalog_linking_m2_enabled",
      );
    }
    function f(e) {
      var t;
      return g()
        ? !0
        : o("WAWebBizCatalogGatingUtils").isCatalogVariantsViewingEnabled()
          ? !1
          : (e == null || (t = e.profileOptions) == null
              ? void 0
              : t.commerceExperience) ===
            o("WAWebBusinessProfileTypes").CommerceExperienceTypes.META_CATALOG;
    }
    function g() {
      var e = window.location.search,
        t = new URLSearchParams(e);
      return t.get("force_disable_catalog") === "1";
    }
    ((l.getDisabledMetaLinkedCatalogTooltipText = e),
      (l.shouldShowMetaLinkedDisabledCatalogTooltipForSelf = u),
      (l.shouldShowMetaLinkedDisabledCatalogTooltip = c),
      (l.shouldDisableCatalogDueToMetaLinkingForSelf = d),
      (l.shouldDisableCatalogDueToMetaLinking = m),
      (l.shouldDisableCatalogDueToMetaLinkingForProfile = p),
      (l.linkedCatalogDisabledTooltipEnabled = _));
  },
  226,
);
