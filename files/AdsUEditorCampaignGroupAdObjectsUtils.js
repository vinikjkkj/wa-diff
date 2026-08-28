__d(
  "AdsUEditorCampaignGroupAdObjectsUtils",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e) {
      return e.campaignGroup.buying_type;
    }
    function l(e) {
      var t,
        n =
          (t = e.campaign) == null || (t = t.promoted_object) == null
            ? void 0
            : t.full_funnel_objective;
      return n != null ? n : s(e.campaignGroup);
    }
    function s(e) {
      return e.objective;
    }
    function u(e) {
      return e.campaignGroup.bid_strategy;
    }
    function c(e) {
      return e.campaignGroup.budget_strategy;
    }
    function d(e) {
      return e.campaignGroup.pacing_type;
    }
    function m(e) {
      return e.campaignGroup;
    }
    function p(e) {
      return e.campaignGroup;
    }
    function _(e) {
      return e.campaignGroup.special_ad_categories;
    }
    function f(e) {
      var t;
      return (
        ((t = e.campaignGroup.promoted_object) == null
          ? void 0
          : t.application_id) != null
      );
    }
    function g(e) {
      var t;
      return (t = e.campaignGroup.promoted_object) == null
        ? void 0
        : t.live_video_destination;
    }
    function h(e) {
      return e.campaignGroup.frequency_control_specs;
    }
    ((i.getBuyingType = e),
      (i.getObjective = l),
      (i.getObjectiveFromCampaignGroup = s),
      (i.getBidStrategy = u),
      (i.getBudgetStrategy = c),
      (i.getPacingType = d),
      (i.getCampaignGroup = m),
      (i.getPlainCampaignGroup = p),
      (i.getRegulatedCategories = _),
      (i.getHasCampaignGroupPromotedApp = f),
      (i.getLiveVideoDestination = g),
      (i.getFrequencyControlSpecs = h));
  },
  66,
);
