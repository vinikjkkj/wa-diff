__d(
  "MAIBAConversionTrafficPerformanceGoals",
  [
    "AdCampaignDestination",
    "AdsAPIObjectives",
    "AdsAPIOptimizationGoals",
    "AdsAppUrlUtils",
    "AdsUEditorMessagingDestinationUtils",
    "AppAndWebLPVUtils",
    "CTXTrafficRemoveLinkClicksUtils",
    "ClickToMessageAdoptionPerformanceLongTermHoldout",
    "ClickToMessageCTXMDFeatureGating",
    "qex",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = "MESSAGE_DESTINATIONS",
      u = "IG_PROFILE_AND_FB_PAGE",
      c = [
        (e = r("AdsAPIOptimizationGoals")).LANDING_PAGE_VIEWS,
        e.LINK_CLICKS,
        e.REACH,
        e.CONVERSATIONS,
        e.IMPRESSIONS,
      ],
      d = [e.PROFILE_VISIT],
      m = [e.QUALITY_CALL],
      p = [e.LANDING_PAGE_VIEWS];
    function _(e) {
      return r("AdsAppUrlUtils").isCanvasLink(e)
        ? [
            r("AdsAPIOptimizationGoals").ENGAGED_USERS,
            r("AdsAPIOptimizationGoals").POST_ENGAGEMENT,
            r("AdsAPIOptimizationGoals").REACH,
          ]
        : o("AppAndWebLPVUtils").shouldUseAppLpv()
          ? [
              r("AdsAPIOptimizationGoals").LINK_CLICKS,
              r("AdsAPIOptimizationGoals").LANDING_PAGE_VIEWS,
              r("AdsAPIOptimizationGoals").REACH,
            ]
          : [
              r("AdsAPIOptimizationGoals").LINK_CLICKS,
              r("AdsAPIOptimizationGoals").REACH,
            ];
    }
    function f(e) {
      var t;
      return e.includes(r("AdsAPIOptimizationGoals").CONVERSATIONS) &&
        (t = r("qex")._("4206")) != null &&
        t
        ? e.filter(function (e) {
            return e !== r("AdsAPIOptimizationGoals").CONVERSATIONS;
          })
        : e;
    }
    function g() {
      var e = r(
        "AdCampaignDestination",
      ).MESSAGING_INSTAGRAM_DIRECT_MESSENGER_WHATSAPP;
      if (
        o(
          "ClickToMessageAdoptionPerformanceLongTermHoldout",
        ).isAccountInEpdJurisdiction() &&
        o("AdsUEditorMessagingDestinationUtils").destinationIncludesWhatsApp(e)
      )
        return [r("AdsAPIOptimizationGoals").LINK_CLICKS];
      var t = o(
          "ClickToMessageCTXMDFeatureGating",
        ).enableTrafficObjectiveReachAndImpressions(!0),
        n =
          o("CTXTrafficRemoveLinkClicksUtils").isCTXTrafficEligible(
            e,
            r("AdsAPIObjectives").LINK_CLICKS,
          ) &&
          o(
            "CTXTrafficRemoveLinkClicksUtils",
          ).shouldRemoveLinkClicksOptimization(
            t
              ? "LinkClicksPlugin_mdReachImpressions"
              : "LinkClicksPlugin_mdConversations",
          ),
        a = n ? [] : [r("AdsAPIOptimizationGoals").LINK_CLICKS];
      return t
        ? [].concat(a, [
            r("AdsAPIOptimizationGoals").CONVERSATIONS,
            r("AdsAPIOptimizationGoals").REACH,
            r("AdsAPIOptimizationGoals").IMPRESSIONS,
          ])
        : [].concat(a, [r("AdsAPIOptimizationGoals").CONVERSATIONS]);
    }
    function h(e) {
      return (
        e === r("AdsAPIObjectives").LINK_CLICKS ||
        e === r("AdsAPIObjectives").OUTCOME_TRAFFIC
      );
    }
    function y(e, t, n, r) {
      if (t === "PHONE_CALL") return m;
      if (!h(e)) return n;
      switch (t) {
        case "WEBSITE":
          return f(n);
        case "MOBILE_APP":
          return _(r);
        case s:
          return g();
        case u:
          return d;
        case "WEBSITE_AND_PHONE_CALL":
          return p;
        default:
          return n;
      }
    }
    function C(e) {
      switch (e) {
        case "WEBSITE":
          return r("AdCampaignDestination").WEBSITE;
        case s:
          return r("AdCampaignDestination")
            .MESSAGING_INSTAGRAM_DIRECT_MESSENGER_WHATSAPP;
        case u:
          return r("AdCampaignDestination").INSTAGRAM_PROFILE_AND_FACEBOOK_PAGE;
        case "PHONE_CALL":
          return r("AdCampaignDestination").PHONE_CALL;
        case "WEBSITE_AND_PHONE_CALL":
          return r("AdCampaignDestination").WEBSITE_AND_PHONE_CALL;
        default:
          return null;
      }
    }
    ((l.TRAFFIC_MESSAGE_DESTINATIONS_LOCATION = s),
      (l.TRAFFIC_PROFILE_LOCATION = u),
      (l.TRAFFIC_WEBSITE_PERFORMANCE_GOALS = c),
      (l.getPerformanceGoalsForConversionLocation = y),
      (l.getAdCampaignDestinationForConversionLocation = C));
  },
  98,
);
