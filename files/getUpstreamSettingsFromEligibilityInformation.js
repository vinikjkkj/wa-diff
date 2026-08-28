__d(
  "getUpstreamSettingsFromEligibilityInformation",
  [
    "AdsMessageMarketingCompatibleSettingsPluginType",
    "gkx",
    "immutable",
    "isOptimizationGoalMessageMarketingCompatible",
    "isPromotedObjectTypeCompatibleWithMessageMarketing",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = o(
        "isOptimizationGoalMessageMarketingCompatible",
      ).getMessageMarketingCompatibleOptimizationGoals({
        channel: o("AdsMessageMarketingCompatibleSettingsPluginType")
          .AdsMessageMarketingCompatibleSettingsChannelType.WHATSAPP,
        hasProductCatalog: e.productCatalogID != null,
        objective: e.objective,
      });
      return t[0];
    }
    function s(t) {
      if (r("gkx")("1075")) {
        var n;
        return (n = t.optimizationGoal) != null ? n : void 0;
      } else {
        var o;
        return (o = t.optimizationGoal) != null ? o : e(t);
      }
    }
    function u(e) {
      var t = o(
        "isPromotedObjectTypeCompatibleWithMessageMarketing",
      ).getMessageMarketingCompatiblePromotedObjectTypes(e.objective);
      return t[0];
    }
    function c(e) {
      if (r("gkx")("1075")) {
        var t;
        return (t = e.promotedObjectType) != null ? t : void 0;
      } else {
        var n;
        return (n = e.promotedObjectType) != null ? n : u(e);
      }
    }
    function d(e) {
      return r("gkx")("1075") ? e.containsDCO === !0 : !1;
    }
    function m(e) {
      return typeof e != "object" || e == null || !("product_set_id" in e)
        ? !1
        : e.product_set_id != null;
    }
    function p(e) {
      return e.productCatalogID != null || m(e.promotedObject);
    }
    function _(e) {
      var t,
        n = {
          objective: e.objective,
          promotedObjectType: c(e),
          dynamicCreative: d(e),
          hasProductCatalog: p(e),
          hasIncompatibleProductCatalog: !1,
          appHasUnsupportedMMP: !1,
          optimizationGoal: s(e),
          smartPromotionType: (t = e.smartPromotionType) != null ? t : void 0,
          specialAdCategories: r("immutable").List(e.specialAdCategories),
        };
      return n;
    }
    l.getUpstreamSettingsFromEligibilityInformation = _;
  },
  98,
);
