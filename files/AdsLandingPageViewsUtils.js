__d(
  "AdsLandingPageViewsUtils",
  [
    "AdCampaignDestination",
    "AdsAPIObjectives",
    "AdsAPIOptimizationGoals",
    "AdsLinkClicksDeprecationDuplicationUtils",
    "AdsPromotedObjectTypes",
    "gkx",
    "qex",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = "control",
      s = "test_no_lc_no_comms",
      u = "test_no_lc_with_comms";
    function c(e) {
      return (
        e === r("AdsAPIObjectives").LINK_CLICKS ||
        e === r("AdsAPIObjectives").CONVERSIONS
      );
    }
    function d(e) {
      return (
        e === r("AdsPromotedObjectTypes").WEBSITE ||
        e === r("AdsPromotedObjectTypes").PIXEL ||
        e === r("AdsPromotedObjectTypes").NONE
      );
    }
    function m(e, t, n) {
      return !e && c(n) && d(t);
    }
    function p() {
      var t;
      return (t = r("qex")._("2281")) != null ? t : e;
    }
    function _() {
      var e = p();
      return e === s || e === u;
    }
    function f(e) {
      return (
        e === r("AdsAPIObjectives").LINK_CLICKS ||
        e === r("AdsAPIObjectives").OUTCOME_ENGAGEMENT ||
        e === r("AdsAPIObjectives").OUTCOME_SALES ||
        e === r("AdsAPIObjectives").OUTCOME_LEADS
      );
    }
    function g() {
      var e;
      return ((e = r("qex")._("5341")) != null ? e : !1) || r("gkx")("19195");
    }
    function h() {
      var e;
      return r("gkx")("4583") || ((e = r("qex")._("500")) != null ? e : !1);
    }
    function y(e, t, n, o) {
      return (
        h() &&
        (e === r("AdsAPIObjectives").OUTCOME_TRAFFIC ||
          e === r("AdsAPIObjectives").LINK_CLICKS) &&
        (t === r("AdCampaignDestination").WEBSITE ||
          n === r("AdsPromotedObjectTypes").WEBSITE) &&
        o === r("AdsAPIOptimizationGoals").LANDING_PAGE_VIEWS
      );
    }
    function C(e, t, n) {
      return (
        h() &&
        n &&
        o(
          "AdsLinkClicksDeprecationDuplicationUtils",
        ).isTrafficMessagingDestination(e, t)
      );
    }
    function b(e, t, n) {
      if (
        !h() ||
        !t ||
        !o("AdsLinkClicksDeprecationDuplicationUtils").isMessagingDestination(e)
      )
        return !1;
      var a = n();
      return (
        a.length === 1 && a[0] === r("AdsAPIOptimizationGoals").CONVERSATIONS
      );
    }
    ((l.canSeeOptimizationGoalInDropdown = m),
      (l.getUTPQEGroup = p),
      (l.shouldUseUnifiedTrafficProduct = _),
      (l.isObjectiveValidForUTP = f),
      (l.shouldUseLpvRebrandingAnnouncement = g),
      (l.shouldUseLPVToVisitsRebranding = h),
      (l.isTrafficWebsiteVisitsLockedForRebranding = y),
      (l.shouldRestrictTrafficMessagingToConversations = C),
      (l.isMessagingConversationsOnlyLockedForRebranding = b));
  },
  98,
);
