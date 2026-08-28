__d(
  "AdsMessagesCampaignOptimizationPlugin",
  [
    "AdsAPICampaignGroupRecordUtils",
    "AdsAPICampaignRecordUtils",
    "AdsAPIObjectives",
    "AdsAPIOptimizationGoals",
    "AdsCFFindEligiblePageStoreUtils",
    "AdsDCFollowJOUtils",
    "AdsDefaultCampaignOptimizationPlugin",
    "AdsMessagesCampaignOptimizationPluginUtils",
    "AdsPlacementAPISpecReaderUtils",
    "AdsSmartDefaultPageUtils",
    "AdsUEditorMessagingDestinationUtils",
    "CTDAdsOptimizationStoreUtils",
    "CTMAdsOptimizationStoreUtils",
    "CTMValueOptimizationStoreUtils",
    "CTXDefaultingStoreUtils",
    "CTXMDAdsOptimizationStoreUtils",
    "CTXUnstructuredLeadsAdsStoreUtils",
    "CallOptimizationGoalGating",
    "ClickToMessageCTMPerformanceFeatureGating",
    "CtxDfoEngagementRemovalNoticeUtils",
    "CtxDfoOdaxUtils",
    "gkx",
    "isFalsey",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 1e3,
      s = babelHelpers.extends({}, r("AdsDefaultCampaignOptimizationPlugin"), {
        type: "campaign/optimization",
        key: "messages",
        pivots: { objective: r("AdsAPIObjectives").MESSAGES },
        getSupportedOptimizationGoals: function (t) {
          var e = t.account,
            n = t.destinationType,
            a = t.objective,
            i = t.pageID,
            l =
              a !== r("AdsAPIObjectives").OUTCOME_ENGAGEMENT
                ? [r("AdsAPIOptimizationGoals").LEAD_GENERATION]
                : [],
            s = o(
              "AdsMessagesCampaignOptimizationPluginUtils",
            ).getSupportedGoalsForEpdJurisdiction(n, l);
          if (s != null) return s;
          var u = i == null ? void 0 : i.getValueForIndex(0),
            c =
              o("AdsUEditorMessagingDestinationUtils").isCTM(n) &&
              o(
                "CTMAdsOptimizationStoreUtils",
              ).getIsCTMPurchaseConversionsOptimizationGoalEligible(u),
            d =
              !c &&
              o("AdsUEditorMessagingDestinationUtils").isCTM(n) &&
              o(
                "AdsMessagesCampaignOptimizationPluginUtils",
              ).isConversionOptimizationEligibleObjective(a) &&
              (o(
                "CTMAdsOptimizationStoreUtils",
              ).getIsCTMPurchaseConversionsOptimizationGoalDFOEverywhereEligible(
                u,
              ) ||
                (o(
                  "CTMAdsOptimizationStoreUtils",
                ).getIsCTMPurchaseConversionsOptimizationGoalDFOEverywhereEligibleTier2(
                  u,
                ) &&
                  o(
                    "CTMAdsOptimizationStoreUtils",
                  ).getIsPassingCTMPurchaseOptimizationDFOEverywhereTier2QE(
                    !0,
                    e == null ? void 0 : e.account_id,
                  )) ||
                (o(
                  "CTMAdsOptimizationStoreUtils",
                ).getIsCTMPurchaseConversionsOptimizationGoalPostUCDDOEligible(
                  u,
                ) &&
                  o(
                    "CTMAdsOptimizationStoreUtils",
                  ).getIsPassingCTMPurchaseOptimizationPostUCDDOQE(!0)) ||
                (o(
                  "CTMAdsOptimizationStoreUtils",
                ).getIsCTMPurchaseConversionsOptimizationGoalDFOEverywhereEligibleTier2And3Only(
                  u,
                ) &&
                  o(
                    "CTMAdsOptimizationStoreUtils",
                  ).getIsPassingCTMPurchaseOptimizationDFOEverywhereTier2And3QE(
                    !0,
                  ))),
            m =
              o("AdsUEditorMessagingDestinationUtils").isIGDirect(n) &&
              (r("gkx")("4720") ||
                o(
                  "CTDAdsOptimizationStoreUtils",
                ).getIsCTDPurchaseOptimizationGoalEligible(u)),
            p = o(
              "CTXMDAdsOptimizationStoreUtils",
            ).getIsCTXMDPurchaseOptimizationGoalEligible(u, a, n, !0),
            _ = o(
              "CTXMDAdsOptimizationStoreUtils",
            ).getIsCTXMDLeadsOptimizationGoalEligible(u, a, n, !0),
            f =
              o(
                "AdsMessagesCampaignOptimizationPluginUtils",
              ).isConversionOptimizationEligibleObjective(a) &&
              (c || m || p || d)
                ? [r("AdsAPIOptimizationGoals").MESSAGING_PURCHASE_CONVERSION]
                : [];
          a === r("AdsAPIObjectives").OUTCOME_ENGAGEMENT &&
            (l =
              o(
                "CTXUnstructuredLeadsAdsStoreUtils",
              ).enableUnstructuredLeadsOptimization(u, a, n, !0, !0) || _
                ? [r("AdsAPIOptimizationGoals").LEAD_GENERATION]
                : []);
          var g =
            o("AdsUEditorMessagingDestinationUtils").isCTM(n) &&
            o(
              "CTMValueOptimizationStoreUtils",
            ).getIsValueOptimizationGoalEligible(u, !0)
              ? [r("AdsAPIOptimizationGoals").VALUE]
              : [];
          a === r("AdsAPIObjectives").OUTCOME_ENGAGEMENT &&
            o("AdsUEditorMessagingDestinationUtils").isCTM(n) &&
            o("CtxDfoOdaxUtils").getIsCtmDfoOdaxPhase2Enabled(
              a,
              n,
              o("CtxDfoEngagementRemovalNoticeUtils")
                .OdaxCtxDfoRemovalQEEntrypoint.DFO_GOAL_REMOVAL,
              !1,
            ) &&
            ((l = []), (f = []), (g = []));
          var h =
            o("AdsUEditorMessagingDestinationUtils").isIGDirect(n) &&
            o("AdsDCFollowJOUtils").getIsDCFollowJOEnabled()
              ? [
                  r("AdsAPIOptimizationGoals")
                    .MESSAGING_DEEP_CONVERSATION_AND_FOLLOW,
                ]
              : [];
          return [r("AdsAPIOptimizationGoals").CONVERSATIONS].concat(
            h,
            l,
            f,
            g,
            [r("AdsAPIOptimizationGoals").LINK_CLICKS],
          );
        },
        getDefaultOptimizationGoal: function (t) {
          var e,
            n = t.account,
            a = t.campaign,
            i = t.campaignGroup,
            l = t.pageID;
          if (a == null || i == null)
            return r("AdsAPIOptimizationGoals").CONVERSATIONS;
          var s = o("AdsAPICampaignRecordUtils").getDestinationType(a),
            u = o("AdsAPICampaignGroupRecordUtils").getObjective(i),
            c = o("AdsSmartDefaultPageUtils").getDefaultPageID(a, n, i),
            d = o("CtxDfoOdaxUtils").getIsCtmDfoOdaxPhase2Enabled(
              u,
              s,
              o("CtxDfoEngagementRemovalNoticeUtils")
                .OdaxCtxDfoRemovalQEEntrypoint.DFO_DEFAULTING_REMOVAL,
              !1,
            ),
            m = o(
              "CTXDefaultingStoreUtils",
            ).getDefaultOptimizationGoalByObjectiveAndPageID(
              u,
              s,
              l != null ? l : c,
              i == null ? void 0 : i.bid_strategy,
            );
          if (m != null && !d) {
            var p = m[0],
              _ = m[1];
            return (
              o(
                "AdsMessagesCampaignOptimizationPluginUtils",
              ).logOptimizationGoalDefaulting(
                s,
                u,
                p,
                l != null ? l : c,
                _,
                void 0,
                a == null ? void 0 : a.id,
              ),
              p
            );
          }
          var f =
              l != null
                ? o("AdsCFFindEligiblePageStoreUtils").getPage(l)
                : null,
            g = o(
              "AdsPlacementAPISpecReaderUtils",
            ).convertCampaignToPlacementSpec(a),
            h =
              r("isFalsey")(a == null ? void 0 : a.daily_budget) &&
              r("isFalsey")(a == null ? void 0 : a.lifetime_budget),
            y = o(
              "ClickToMessageCTMPerformanceFeatureGating",
            ).isEligibleForCostCapPurchaseOptimization(
              !0,
              a == null ? void 0 : a.destination_type,
              a == null ? void 0 : a.optimization_goal,
              u,
              h,
              i == null ? void 0 : i.bid_strategy,
            ),
            C =
              (e = o(
                "AdsMessagesCampaignOptimizationPluginUtils",
              ).getPhase2PurchaseDefault(
                l,
                s,
                u,
                i == null ? void 0 : i.bid_strategy,
                y,
                d,
              )) != null
                ? e
                : o(
                    "AdsMessagesCampaignOptimizationPluginUtils",
                  ).getPhase2PurchaseDefault(
                    c,
                    s,
                    u,
                    i == null ? void 0 : i.bid_strategy,
                    y,
                    d,
                  );
          return C != null
            ? C
            : o("CallOptimizationGoalGating").shouldDefaultForCallOptimization(
                  n,
                  f,
                  u,
                  s,
                  [g],
                )
              ? r("AdsAPIOptimizationGoals").MEANINGFUL_CALL_ATTEMPT
              : r("AdsAPIOptimizationGoals").CONVERSATIONS;
        },
        getDefaultBidAmount: function (n, o, a, i, l) {
          return n === r("AdsAPIOptimizationGoals").REPLIES ||
            n === r("AdsAPIOptimizationGoals").CONVERSATIONS ||
            n ===
              r("AdsAPIOptimizationGoals")
                .MESSAGING_DEEP_CONVERSATION_AND_FOLLOW
            ? e
            : r("AdsDefaultCampaignOptimizationPlugin").getDefaultBidAmount(
                n,
                o,
              );
        },
      }),
      u = s;
    l.default = u;
  },
  98,
);
