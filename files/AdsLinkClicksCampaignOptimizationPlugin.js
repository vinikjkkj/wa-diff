__d(
  "AdsLinkClicksCampaignOptimizationPlugin",
  [
    "AdsAPIBillingEvents",
    "AdsAPIObjectives",
    "AdsAPIOptimizationGoals",
    "AdsDefaultCampaignOptimizationPlugin",
    "AdsEngagedPageViewsUtils",
    "AdsLandingPageViewsUtils",
    "AdsODAXUtils",
    "AdsUEditorMessagingDestinationUtils",
    "AdvertiserSiloedValueOptimizationGoalGating",
    "CTXTrafficRemoveLinkClicksUtils",
    "ClickToMessageAdoptionPerformanceLongTermHoldout",
    "ClickToMessageCTXMDFeatureGating",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      if (e == null) throw new TypeError("Cannot destructure " + e);
    }
    var s = 378,
      u = 500,
      c = babelHelpers.extends({}, r("AdsDefaultCampaignOptimizationPlugin"), {
        type: "campaign/optimization",
        key: "link_clicks",
        pivots: { objective: r("AdsAPIObjectives").LINK_CLICKS },
        getDefaultBidAmount: function (t, n) {
          return t === r("AdsAPIOptimizationGoals").LINK_CLICKS
            ? n === r("AdsAPIBillingEvents").IMPRESSIONS
              ? u
              : s
            : r("AdsDefaultCampaignOptimizationPlugin").getDefaultBidAmount(
                t,
                n,
              );
        },
        getSupportedOptimizationGoals: function (t) {
          var e = t.destinationType,
            n = t.enableConversationsOptimizationForWhatsApp,
            a = t.hasInStoreOffer,
            i = t.hasOffer,
            l = t.isODAXCampaignGroup,
            s = t.objective,
            u = t.promotedObjectType,
            c = o("AdsLandingPageViewsUtils").canSeeOptimizationGoalInDropdown(
              !!i,
              u,
              s,
            ),
            d = o("AdsUEditorMessagingDestinationUtils").isMultiDestination(e),
            m = o("AdsLandingPageViewsUtils").shouldUseUnifiedTrafficProduct(),
            p = o("AdsEngagedPageViewsUtils").canSeeOptimizationGoalInDropdown(
              u,
              s,
            );
          return d && o("AdsODAXUtils").isODAXTrafficCampaignGroup(l, s)
            ? o(
                "ClickToMessageAdoptionPerformanceLongTermHoldout",
              ).isAccountInEpdJurisdiction() &&
              o(
                "AdsUEditorMessagingDestinationUtils",
              ).destinationIncludesWhatsApp(e)
              ? [r("AdsAPIOptimizationGoals").LINK_CLICKS]
              : o(
                    "ClickToMessageCTXMDFeatureGating",
                  ).enableTrafficObjectiveReachAndImpressions(!0)
                ? [].concat(
                    o("CTXTrafficRemoveLinkClicksUtils").isCTXTrafficEligible(
                      e,
                      r("AdsAPIObjectives").LINK_CLICKS,
                      u,
                    ) &&
                      o(
                        "CTXTrafficRemoveLinkClicksUtils",
                      ).shouldRemoveLinkClicksOptimization(
                        !0,
                        "LinkClicksPlugin_mdReachImpressions",
                      )
                      ? []
                      : [r("AdsAPIOptimizationGoals").LINK_CLICKS],
                    [
                      r("AdsAPIOptimizationGoals").CONVERSATIONS,
                      r("AdsAPIOptimizationGoals").REACH,
                      r("AdsAPIOptimizationGoals").IMPRESSIONS,
                    ],
                  )
                : [].concat(
                    o("CTXTrafficRemoveLinkClicksUtils").isCTXTrafficEligible(
                      e,
                      r("AdsAPIObjectives").LINK_CLICKS,
                      u,
                    ) &&
                      o(
                        "CTXTrafficRemoveLinkClicksUtils",
                      ).shouldRemoveLinkClicksOptimization(
                        !0,
                        "LinkClicksPlugin_mdConversations",
                      )
                      ? []
                      : [r("AdsAPIOptimizationGoals").LINK_CLICKS],
                    [r("AdsAPIOptimizationGoals").CONVERSATIONS],
                  )
            : [].concat(
                o(
                  "AdvertiserSiloedValueOptimizationGoalGating",
                ).isAdvertiserSiloedValueOptimizationGoalEnabled()
                  ? [r("AdsAPIOptimizationGoals").ADVERTISER_SILOED_VALUE]
                  : [],
                n === !0 || o("AdsODAXUtils").isODAXTrafficCampaignGroup(l, s)
                  ? [r("AdsAPIOptimizationGoals").CONVERSATIONS]
                  : [],
                c ? [r("AdsAPIOptimizationGoals").LANDING_PAGE_VIEWS] : [],
                m ||
                  o(
                    "AdsLandingPageViewsUtils",
                  ).shouldUseLPVToVisitsRebranding() ||
                  (o("CTXTrafficRemoveLinkClicksUtils").isCTXTrafficEligible(
                    e,
                    r("AdsAPIObjectives").LINK_CLICKS,
                    u,
                  ) &&
                    o(
                      "CTXTrafficRemoveLinkClicksUtils",
                    ).shouldRemoveLinkClicksOptimization(
                      !0,
                      "LinkClicksPlugin_sdLinkClicks",
                    ))
                  ? []
                  : [r("AdsAPIOptimizationGoals").LINK_CLICKS],
                p ? [r("AdsAPIOptimizationGoals").ENGAGED_PAGE_VIEWS] : [],
                [
                  r("AdsAPIOptimizationGoals").IMPRESSIONS,
                  r("AdsAPIOptimizationGoals").REACH,
                ],
                a === !0 ? [r("AdsAPIOptimizationGoals").POST_ENGAGEMENT] : [],
              );
        },
        getDefaultOptimizationGoal: function (n) {
          var t,
            a = babelHelpers.extends({}, (e(n), n));
          return o("CTXTrafficRemoveLinkClicksUtils").isCTXTrafficEligible(
            (t = a.campaign) == null ? void 0 : t.destination_type,
            r("AdsAPIObjectives").LINK_CLICKS,
            a.promotedObjectType,
          ) &&
            o(
              "CTXTrafficRemoveLinkClicksUtils",
            ).shouldRemoveLinkClicksOptimization(
              !0,
              "LinkClicksPlugin_defaultOptGoal",
            )
            ? r("AdsAPIOptimizationGoals").CONVERSATIONS
            : r(
                "AdsDefaultCampaignOptimizationPlugin",
              ).getDefaultOptimizationGoal(
                babelHelpers.extends({}, a, {
                  objective: r("AdsAPIObjectives").LINK_CLICKS,
                }),
              );
        },
      }),
      d = c;
    l.default = d;
  },
  98,
);
