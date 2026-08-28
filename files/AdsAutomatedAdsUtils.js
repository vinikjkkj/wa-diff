__d(
  "AdsAutomatedAdsUtils",
  [
    "AdsAPIObjectives",
    "AdsBulkValueUtils",
    "AdsCampaignDerivedPaths",
    "AdsCampaignGroupDerivedPaths",
    "AdsPECrepePackages",
    "AdsSmartPromotion",
    "getByPath",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      if (!e) return !1;
      var t = e.boosted_component_product;
      return (
        !!t &&
        t.getValues().some(function (e) {
          return e === "boosted_automated_ads";
        })
      );
    }
    function s(e) {
      return e === "boosted_automated_ads";
    }
    function u(e) {
      if (!e) return !1;
      var t = o("AdsBulkValueUtils").getUniformValue(
        e.boosted_component_product,
      );
      if (t == null || t !== "boosted_automated_ads") return !1;
      var n = e.objective;
      return (
        !!n &&
        n.getValues().some(function (e) {
          return e === r("AdsAPIObjectives").LEAD_GENERATION;
        })
      );
    }
    function c(e, t) {
      return (
        e === "boosted_automated_ads" &&
        t === r("AdsAPIObjectives").LEAD_GENERATION
      );
    }
    function d(e, t, n) {
      var o = p(e);
      if (!o) return n;
      var a = t.filter(function (e) {
        return r("getByPath")(e, o) !== "boosted_automated_ads";
      });
      return a.map(function (e) {
        return e.id;
      });
    }
    function m(e, t, n, r) {
      return e ? d(n, r, t) : t;
    }
    function p(e) {
      switch (e) {
        case "campaign":
          return r("AdsCampaignGroupDerivedPaths").BOOSTED_COMPONENT_PRODUCT;
        case "ad_set":
          return r("AdsCampaignDerivedPaths").BOOSTED_COMPONENT_PRODUCT;
        default:
          return null;
      }
    }
    function _(e) {
      var t = e == null ? void 0 : e.smart_promotion_type;
      return (
        !!t &&
        t.getValues().some(function (e) {
          return e === r("AdsSmartPromotion").SMART_APP_PROMOTION;
        })
      );
    }
    function f(e) {
      var t;
      if (!_(e)) return !1;
      var n =
        e == null || (t = e.ad_creation_package_config) == null ? void 0 : t.id;
      return (
        !!n &&
        !n.getValues().every(function (e) {
          return (
            e ===
            o("AdsPECrepePackages")
              .ADVANTAGE_PLUS_APP_CAMPAIGN_PGD_PACKAGE_CONFIG_ID
          );
        })
      );
    }
    ((l.isAutomatedAdsCampaignGroupBulkSpec = e),
      (l.isAutomatedAdsCampaignGroup = s),
      (l.isAutomatedAdsLeadGen = u),
      (l.isAutomatedAdsLeadGenByCombinedCampaignGroup = c),
      (l.getFilteredSelectedIDs = m),
      (l.getBoostedComponentProductPathForObjectLevel = p),
      (l.hasSAPCampaign = _),
      (l.hasSAPPreUnificationCampaign = f));
  },
  98,
);
