__d(
  "WAWebProductCatalogMetaLinkingGatingUtils",
  [
    "fbt",
    "WAWebABProps",
    "WAWebBizGatingUtils",
    "WAWebBusinessProfileCollection",
    "WAWebBusinessProfileTypes",
    "WAWebUserPrefsMeUser",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    function e() {
      return s._(/*BTDS*/ "Connected catalog. View with WhatsApp mobile app.");
    }
    function u() {
      if (!g()) return !1;
      var e = o("WAWebBusinessProfileCollection").BusinessProfileCollection.get(
        o("WAWebUserPrefsMeUser").getMePnUserOrThrow_DO_NOT_USE(),
      );
      return h(e);
    }
    function c(e) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          return g() ? p(e) : !1;
        })),
        d.apply(this, arguments)
      );
    }
    function m() {
      if (o("WAWebBizGatingUtils").isCatalogVariantsViewingEnabled() || g())
        return !1;
      var e = o("WAWebBusinessProfileCollection").BusinessProfileCollection.get(
        o("WAWebUserPrefsMeUser").getMePnUserOrThrow_DO_NOT_USE(),
      );
      return h(e);
    }
    function p(e) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield o(
            "WAWebBusinessProfileCollection",
          ).BusinessProfileCollection.fetchBizProfile(e);
          return h(t);
        })),
        _.apply(this, arguments)
      );
    }
    function f(e) {
      return h(e);
    }
    function g() {
      return o("WAWebABProps").getABPropConfigValue(
        "meta_catalog_linking_m2_enabled",
      );
    }
    function h(e) {
      var t;
      return y()
        ? !0
        : o("WAWebBizGatingUtils").isCatalogVariantsViewingEnabled()
          ? !1
          : (e == null || (t = e.profileOptions) == null
              ? void 0
              : t.commerceExperience) ===
            o("WAWebBusinessProfileTypes").CommerceExperienceTypes.META_CATALOG;
    }
    function y() {
      var e = window.location.search,
        t = new URLSearchParams(e);
      return t.get("force_disable_catalog") === "1";
    }
    ((l.getDisabledMetaLinkedCatalogTooltipText = e),
      (l.shouldShowMetaLinkedDisabledCatalogTooltipForSelf = u),
      (l.shouldShowMetaLinkedDisabledCatalogTooltip = c),
      (l.shouldDisableCatalogDueToMetaLinkingForSelf = m),
      (l.shouldDisableCatalogDueToMetaLinking = p),
      (l.shouldDisableCatalogDueToMetaLinkingForProfile = f),
      (l.linkedCatalogDisabledTooltipEnabled = g));
  },
  226,
);
