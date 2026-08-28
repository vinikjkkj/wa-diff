__d(
  "AdsOutcomeSalesMessengerCampaignOptimizationPlugin",
  [
    "AdCampaignDestination",
    "AdsAPICampaignGroupRecordUtils",
    "AdsAPICampaignRecordUtils",
    "AdsAPIObjectives",
    "AdsAPIOptimizationGoals",
    "AdsCFFindEligiblePageStoreUtils",
    "AdsConversionsMessengerCampaignOptimizationPlugin",
    "AdsInterfacesLogger",
    "AdsLandingPageViewsUtils",
    "AdsPlacementAPISpecReaderUtils",
    "AdsPromotedObjectTypes",
    "AdsSmartDefaultPageUtils",
    "AdsUEditorMessagingDestinationUtils",
    "CTMAdsOptimizationStoreUtils",
    "CTMValueOptimizationStoreUtils",
    "CTXDefaultingStoreUtils",
    "CTXMDAdsOptimizationStoreUtils",
    "CallOptimizationGoalGating",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = babelHelpers.extends(
        {},
        r("AdsConversionsMessengerCampaignOptimizationPlugin"),
        {
          type: "campaign/optimization",
          key: "outcome_sales_messenger",
          pivots: {
            objective: r("AdsAPIObjectives").OUTCOME_SALES,
            promotedObjectType: r("AdsPromotedObjectTypes").MESSENGER,
          },
          getSupportedOptimizationGoals: function (t) {
            var e,
              n = t.account,
              a = t.destinationType,
              i = t.objective,
              l = t.pageID,
              s = t.promotedObject,
              u = o("AdsUEditorMessagingDestinationUtils").isMultiDestination(
                a,
              );
            if (u) {
              var c = l == null ? void 0 : l.getValueForIndex(0),
                d = o(
                  "CTXMDAdsOptimizationStoreUtils",
                ).getIsCTXMDPurchaseOptimizationGoalEligible(c, i, a, !0),
                m = d
                  ? [r("AdsAPIOptimizationGoals").MESSAGING_PURCHASE_CONVERSION]
                  : [];
              return [
                r("AdsAPIOptimizationGoals").CONVERSATIONS,
                r("AdsAPIOptimizationGoals").OFFSITE_CONVERSIONS,
              ].concat(
                o("AdsLandingPageViewsUtils").shouldUseLPVToVisitsRebranding()
                  ? []
                  : [r("AdsAPIOptimizationGoals").LINK_CLICKS],
                [
                  r("AdsAPIOptimizationGoals").REACH,
                  r("AdsAPIOptimizationGoals").IMPRESSIONS,
                ],
                m,
              );
            }
            if (
              (s == null || (e = s.partner_account_linking_id) == null
                ? void 0
                : e.getValueForIndex(0)) != null
            )
              return [r("AdsAPIOptimizationGoals").OFFSITE_CONVERSIONS];
            var p = l == null ? void 0 : l.getValueForIndex(0),
              _ =
                o("AdsUEditorMessagingDestinationUtils").isCTM(a) &&
                o(
                  "CTMValueOptimizationStoreUtils",
                ).getIsValueOptimizationGoalEligible(p, !0)
                  ? [r("AdsAPIOptimizationGoals").VALUE]
                  : [],
              f = [
                r("AdsAPIOptimizationGoals").CONVERSATIONS,
                r("AdsAPIOptimizationGoals").REPLIES,
                r("AdsAPIOptimizationGoals").OFFSITE_CONVERSIONS,
              ].concat(
                o("AdsLandingPageViewsUtils").shouldUseLPVToVisitsRebranding()
                  ? []
                  : [r("AdsAPIOptimizationGoals").LINK_CLICKS],
                [
                  r("AdsAPIOptimizationGoals").IMPRESSIONS,
                  r("AdsAPIOptimizationGoals").REACH,
                ],
                _,
              ),
              g =
                a === r("AdCampaignDestination").MESSENGER &&
                o(
                  "CTMAdsOptimizationStoreUtils",
                ).getIsCTMPurchaseConversionsOptimizationGoalEligible(p),
              h =
                !g &&
                o("AdsUEditorMessagingDestinationUtils").isCTM(a) &&
                (o(
                  "CTMAdsOptimizationStoreUtils",
                ).getIsCTMPurchaseConversionsOptimizationGoalDFOEverywhereEligible(
                  p,
                ) ||
                  (o(
                    "CTMAdsOptimizationStoreUtils",
                  ).getIsCTMPurchaseConversionsOptimizationGoalDFOEverywhereEligibleTier2(
                    p,
                  ) &&
                    o(
                      "CTMAdsOptimizationStoreUtils",
                    ).getIsPassingCTMPurchaseOptimizationDFOEverywhereTier2QE(
                      !0,
                      n == null ? void 0 : n.account_id,
                    )) ||
                  (o(
                    "CTMAdsOptimizationStoreUtils",
                  ).getIsCTMPurchaseConversionsOptimizationGoalPostUCDDOEligible(
                    p,
                  ) &&
                    o(
                      "CTMAdsOptimizationStoreUtils",
                    ).getIsPassingCTMPurchaseOptimizationPostUCDDOQE(!0)) ||
                  (o(
                    "CTMAdsOptimizationStoreUtils",
                  ).getIsCTMPurchaseConversionsOptimizationGoalDFOEverywhereEligibleTier2And3Only(
                    p,
                  ) &&
                    o(
                      "CTMAdsOptimizationStoreUtils",
                    ).getIsPassingCTMPurchaseOptimizationDFOEverywhereTier2And3QE(
                      !0,
                    )));
            return g === !0 || h === !0
              ? f.concat([
                  r("AdsAPIOptimizationGoals").MESSAGING_PURCHASE_CONVERSION,
                ])
              : f;
          },
          getCanUseConversionWindow: function (t) {
            return t === r("AdsAPIOptimizationGoals").VALUE
              ? !1
              : r(
                  "AdsConversionsMessengerCampaignOptimizationPlugin",
                ).getCanUseConversionWindow(t);
          },
          getDefaultOptimizationGoal: function (t) {
            var e = t.account,
              n = t.campaign,
              a = t.campaignGroup,
              i = t.pageID;
            if (n == null || a == null)
              return r("AdsAPIOptimizationGoals").CONVERSATIONS;
            var l = o("AdsUEditorMessagingDestinationUtils").isMultiDestination(
              n == null ? void 0 : n.destination_type,
            );
            if (l) return r("AdsAPIOptimizationGoals").CONVERSATIONS;
            var s = o("AdsAPICampaignRecordUtils").getDestinationType(n),
              u = o("AdsAPICampaignGroupRecordUtils").getObjective(a),
              c = o("AdsSmartDefaultPageUtils").getDefaultPageID(n, e, a),
              d = o(
                "CTXDefaultingStoreUtils",
              ).getDefaultOptimizationGoalByObjectiveAndPageID(
                u,
                n == null ? void 0 : n.destination_type,
                i != null ? i : c,
                null,
              );
            if (d != null) {
              var m,
                p = d[0],
                _ = d[1];
              return (
                r("AdsInterfacesLogger").log({
                  eventName: "ctx_optimization_goal_defaulting",
                  data:
                    ((m = {}),
                    (m.caller = "plugin_default_optimization_goal"),
                    (m.campaign_destination_type = s),
                    (m.objective = u),
                    (m.optimization_goal = p),
                    (m.page_id = i != null ? i : c),
                    (m.source = _),
                    (m.campaign_id = n == null ? void 0 : n.id),
                    m),
                }),
                p
              );
            }
            var f =
              (n == null ? void 0 : n.destination_type) ===
              r("AdCampaignDestination").MESSENGER;
            if (
              f &&
              o(
                "CTMAdsOptimizationStoreUtils",
              ).getIsPhase2PurchaseConversionsOptimizationEligible(i)
            ) {
              var g;
              return (
                r("AdsInterfacesLogger").log({
                  eventName: "ctx_optimization_goal_defaulting",
                  data:
                    ((g = {}),
                    (g.caller = "plugin_default_optimization_goal"),
                    (g.campaign_destination_type = s),
                    (g.objective = u),
                    (g.optimization_goal = r(
                      "AdsAPIOptimizationGoals",
                    ).MESSAGING_PURCHASE_CONVERSION),
                    (g.page_id = i),
                    (g.source = "ctm_po_rule_based_defaulting"),
                    (g.status = "legacy"),
                    g),
                }),
                r("AdsAPIOptimizationGoals").MESSAGING_PURCHASE_CONVERSION
              );
            }
            if (
              c != null &&
              o("AdsUEditorMessagingDestinationUtils").isCTM(
                n == null ? void 0 : n.destination_type,
              ) &&
              o(
                "CTMAdsOptimizationStoreUtils",
              ).getIsPhase2PurchaseConversionsOptimizationEligible(c)
            ) {
              var h;
              return (
                r("AdsInterfacesLogger").log({
                  eventName: "ctx_optimization_goal_defaulting",
                  data:
                    ((h = {}),
                    (h.caller = "plugin_default_optimization_goal"),
                    (h.campaign_destination_type = s),
                    (h.objective = u),
                    (h.optimization_goal = r(
                      "AdsAPIOptimizationGoals",
                    ).MESSAGING_PURCHASE_CONVERSION),
                    (h.page_id = c),
                    (h.source = "ctm_po_rule_based_defaulting"),
                    (h.status = "legacy"),
                    h),
                }),
                r("AdsAPIOptimizationGoals").MESSAGING_PURCHASE_CONVERSION
              );
            }
            var y =
                i != null
                  ? o("AdsCFFindEligiblePageStoreUtils").getPage(i)
                  : null,
              C = o(
                "AdsPlacementAPISpecReaderUtils",
              ).convertCampaignToPlacementSpec(n);
            return o(
              "CallOptimizationGoalGating",
            ).shouldDefaultForCallOptimization(e, y, u, s, [C])
              ? r("AdsAPIOptimizationGoals").MEANINGFUL_CALL_ATTEMPT
              : r("AdsAPIOptimizationGoals").CONVERSATIONS;
          },
        },
      ),
      s = e;
    l.default = s;
  },
  98,
);
