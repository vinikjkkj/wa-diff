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
      if (!_()) return !1;
      var e = o("WAWebBusinessProfileCollection").BusinessProfileCollection.get(
        o("WAWebUserPrefsMeUser").getMePnUserOrThrow_DO_NOT_USE(),
      );
      return f(e);
    }
    function s(e) {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          return _() ? d(e) : !1;
        })),
        u.apply(this, arguments)
      );
    }
    function c() {
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
    function d(e) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield o(
            "WAWebBusinessProfileCollection",
          ).BusinessProfileCollection.fetchBizProfile(e);
          return f(t);
        })),
        m.apply(this, arguments)
      );
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
    ((l.shouldShowMetaLinkedDisabledCatalogTooltipForSelf = e),
      (l.shouldShowMetaLinkedDisabledCatalogTooltip = s),
      (l.shouldDisableCatalogDueToMetaLinkingForSelf = c),
      (l.shouldDisableCatalogDueToMetaLinking = d),
      (l.shouldDisableCatalogDueToMetaLinkingForProfile = p),
      (l.linkedCatalogDisabledTooltipEnabled = _));
  },
  98,
);
