__d(
  "AdsUEditorCampaignAdObjectsUtils",
  [
    "AdsAPICampaignRecordUtils",
    "AdsAudienceDirectConfig",
    "AdsODAXUtils",
    "AdsUEditorCampaignGroupAdObjectsUtils",
    "adsCampaignGetOfferStateType",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t,
        n,
        a = o("AdsUEditorCampaignGroupAdObjectsUtils").getObjective(e),
        i = c(e),
        l =
          (t = e.campaign) == null || (t = t.promoted_object) == null
            ? void 0
            : t.full_funnel_objective,
        s = o("AdsODAXUtils").maybeTranslateObjective(
          l || a,
          i,
          (n = e.campaign) == null ? void 0 : n.optimization_goal,
        );
      return {
        accountType: r("AdsAudienceDirectConfig").accountType,
        objective: s,
        promotedObjectType: i,
      };
    }
    function s(e) {
      return r("adsCampaignGetOfferStateType")(e.campaign);
    }
    function u(e) {
      var t;
      return (t = e.campaign.promoted_object) == null
        ? void 0
        : t.product_set_id;
    }
    function c(e) {
      return o("AdsAPICampaignRecordUtils").getPromotedObjectType(
        o("AdsUEditorCampaignGroupAdObjectsUtils").getObjective(e),
        e.campaign,
        null,
        e.adgroup,
      );
    }
    function d(e) {
      var t = e.campaign,
        n = e.campaignGroupObjective;
      return o("AdsAPICampaignRecordUtils").getPromotedObjectType(n, t);
    }
    function m(e) {
      return o(
        "AdsAPICampaignRecordUtils",
      ).getDerivedPromotedObjectTypeWithVariation(e.campaign);
    }
    function p(e) {
      return o("AdsAPICampaignRecordUtils").getOptimizationGoal(e.campaign);
    }
    function _(e) {
      return e.campaign.destination_type;
    }
    function f(e) {
      var t;
      return (t = e.campaign.targeting) == null
        ? void 0
        : t.targeting_optimization;
    }
    ((l.getCommonPivots = e),
      (l.getOfferStateType = s),
      (l.getProductSetID = u),
      (l.getPromotedObjectType = c),
      (l.getPromotedObjectType_NEW = d),
      (l.getPromotedObjectTypeVariation = m),
      (l.getOptimizationGoal = p),
      (l.getCampaignDestinationType = _),
      (l.getCampaignTargetingOptimization = f));
  },
  98,
);
