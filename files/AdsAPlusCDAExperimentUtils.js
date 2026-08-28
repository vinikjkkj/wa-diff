__d(
  "AdsAPlusCDAExperimentUtils",
  [
    "AdsChildAttachmentsUtils",
    "AdsCollectionsAdUtils",
    "AdsCreativeFeaturesUtils",
    "AdsObjectTypeUtils",
    "AdsPCAUnifiedFormatEligibilityUtils",
    "AdsRegulatedCategory",
    "CatalogVertical",
    "ProductSetDataProvider",
    "adsACOVerticalValidationUtils",
    "adsIsDAACOEligibleForAdObjects",
    "isEligibleForAPlusCAdaptImages",
    "justknobx",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = [
      r("CatalogVertical").COMMERCE,
      r("CatalogVertical").VEHICLES,
      r("CatalogVertical").VEHICLE_OFFERS,
    ];
    function s(e) {
      var t,
        n = e.adgroup,
        a = e.campaign,
        i = e.campaignGroup;
      if (
        r("justknobx")._("4143") &&
        o("AdsCreativeFeaturesUtils").isAdsRegulatedCategory(i)
      ) {
        var l = i == null ? void 0 : i.special_ad_categories,
          s =
            l != null &&
            (l.includes(r("AdsRegulatedCategory").ISSUES_ELECTIONS_POLITICS) ||
              l.includes(r("AdsRegulatedCategory").SOCIAL_ISSUES) ||
              l.includes(r("AdsRegulatedCategory").ELECTIONS_POLITICS));
        if (s) return !1;
      }
      var u = (t = n.creative) == null ? void 0 : t.product_set_id;
      if (
        u == null ||
        o("AdsChildAttachmentsUtils").isDynamicAdCarouselMediaFormat(n) !== !0
      )
        return !1;
      var c = r("adsIsDAACOEligibleForAdObjects")(i, a);
      if (c !== !0) return !1;
      var d = r("ProductSetDataProvider")().get(u).getValue();
      return !!o(
        "adsACOVerticalValidationUtils",
      ).isValidCatalogVerticalForDAACO(d == null ? void 0 : d.vertical);
    }
    function u(t) {
      var n,
        a = t.adgroup,
        i = t.campaignGroup;
      if (
        r("justknobx")._("4143") &&
        o("AdsCreativeFeaturesUtils").isAdsRegulatedCategory(i)
      ) {
        var l = i == null ? void 0 : i.special_ad_categories,
          s =
            l != null &&
            (l.includes(r("AdsRegulatedCategory").ISSUES_ELECTIONS_POLITICS) ||
              l.includes(r("AdsRegulatedCategory").SOCIAL_ISSUES) ||
              l.includes(r("AdsRegulatedCategory").ELECTIONS_POLITICS));
        if (s) return !1;
      }
      var u = (n = a.creative) == null ? void 0 : n.product_set_id;
      if (
        u == null ||
        o("AdsPCAUnifiedFormatEligibilityUtils").isEligiblePCAUnifiedL1(i, a) ||
        !o("AdsObjectTypeUtils").isDynamicProductAd(a)
      )
        return !1;
      var c = r("ProductSetDataProvider")().get(u).getValue();
      return !!e.includes(c == null ? void 0 : c.vertical);
    }
    function c(e) {
      var t = e.adgroup,
        n = e.campaign,
        a = e.campaignGroup;
      if (
        r("justknobx")._("4143") &&
        o("AdsCreativeFeaturesUtils").isAdsRegulatedCategory(a)
      ) {
        var i = a == null ? void 0 : a.special_ad_categories,
          l =
            i != null &&
            (i.includes(r("AdsRegulatedCategory").ISSUES_ELECTIONS_POLITICS) ||
              i.includes(r("AdsRegulatedCategory").SOCIAL_ISSUES) ||
              i.includes(r("AdsRegulatedCategory").ELECTIONS_POLITICS));
        if (l) return !1;
      }
      if (
        !o("AdsObjectTypeUtils").isDynamicProductAd(t) ||
        o("AdsCollectionsAdUtils").isCollectionsAd(t.creative)
      )
        return !1;
      var s = n.targeting.facebook_positions,
        u = n.targeting.instagram_positions,
        c = (u == null ? void 0 : u.includes("story")) === !0,
        d = (u == null ? void 0 : u.includes("reels")) === !0,
        m = (s == null ? void 0 : s.includes("story")) === !0,
        p = (s == null ? void 0 : s.includes("facebook_reels")) === !0;
      return (c || d || m || p) && !r("isEligibleForAPlusCAdaptImages")();
    }
    function d(e) {
      var t = e.adgroup,
        n = e.campaignGroup;
      if (
        r("justknobx")._("4143") &&
        o("AdsCreativeFeaturesUtils").isAdsRegulatedCategory(n)
      ) {
        var a = n == null ? void 0 : n.special_ad_categories,
          i =
            a != null &&
            (a.includes(r("AdsRegulatedCategory").ISSUES_ELECTIONS_POLITICS) ||
              a.includes(r("AdsRegulatedCategory").SOCIAL_ISSUES) ||
              a.includes(r("AdsRegulatedCategory").ELECTIONS_POLITICS));
        if (i) return !1;
      }
      return !o("AdsObjectTypeUtils").isDynamicProductAd(t) ||
        o("AdsCollectionsAdUtils").isCollectionsAd(t.creative)
        ? !1
        : r("isEligibleForAPlusCAdaptImages")();
    }
    ((l.DA_DYNAMIC_DESCRIPTION_SUPPORTED_VERTICALS = e),
      (l.isEligibleForAPlusCDA = s),
      (l.isEligibleForDADynamicDescription = u),
      (l.isEligibleForDAAdaptToPlacement = c),
      (l.isEligibleForDAAdaptImages = d));
  },
  98,
);
