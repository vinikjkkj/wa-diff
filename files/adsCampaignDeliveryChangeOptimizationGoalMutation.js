__d(
  "adsCampaignDeliveryChangeOptimizationGoalMutation",
  [
    "AdCampaignDestination",
    "AdsAPIBidConstraints",
    "AdsAPIBidStrategies",
    "AdsAPICampaignRecordUtils",
    "AdsAPIObjectives",
    "AdsAPIOptimizationGoals",
    "AdsAppUtils",
    "AdsBuyingTypes",
    "AdsCampaignGroupUtils",
    "AdsCampaignLiveVideoAdsUtils",
    "AdsCampaignOptimizationPluginResolver",
    "AdsCampaignRecordAccessors",
    "AdsConversionWindowUtils",
    "AdsCostStrategyUtils",
    "AdsDeliveryContainerUtils",
    "AdsFrequencyControlGKUtils",
    "AdsMutators",
    "AdsOptimizationUtils",
    "AdsRecommendationIaaExperimentUtils",
    "AdsRecommendationIapExperimentUtils",
    "AdsThruPlayDurationUtils",
    "AdsUEditorCampaignBasicSectionCTXBusinessHourDaypartingUtils",
    "AdsValueOptimizationUtils",
    "CampaignDefaultBudgetConfig",
    "adsBillingEventGetDefaultDEPRECATED",
    "adsCampaignConvertUSDBudgetToCurrency",
    "adsCampaignGetBudgetMode",
    "adsCampaignGetISODateTimeString",
    "adsTargetFrequencyInAuctionMutationUtils",
    "gkx",
    "immutable",
    "shouldPreserveMinROASSettingsOnOptimizationGoalChange",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = new Date(2019, 6, 31),
      s = function (t, n, a, i) {
        var e =
          t.bid_amount != null
            ? r("AdsCampaignRecordAccessors").bid_amount.set(null, t)
            : t;
        if (
          e.bid_strategy !==
            r("AdsAPIBidStrategies").LOWEST_COST_WITH_BID_CAP &&
          e.bid_strategy !== r("AdsAPIBidStrategies").TARGET_COST &&
          e.bid_strategy !== r("AdsAPIBidStrategies").COST_CAP
        )
          return e;
        var l = r("AdsCampaignOptimizationPluginResolver")
            .resolve({
              objective: n,
              promotedObjectType: a,
              destinationType: o(
                "AdsAPICampaignRecordUtils",
              ).getDestinationType(e),
            })
            .getDefaultBidAmount(
              e.optimization_goal,
              e.billing_event,
              e,
              i.currency,
              i.business_country_code,
            ),
          s = o("AdsOptimizationUtils").changeUSDCentToLocalCurrency(
            l,
            i.account_currency_ratio_to_usd,
            i.currency,
          );
        return r("AdsCampaignRecordAccessors").bid_amount.set(s, e);
      },
      u = function (t, n) {
        var e;
        if (t.optimization_goal !== r("AdsAPIOptimizationGoals").QUALITY_LEAD)
          return n;
        var a = (e = n.promoted_object) == null ? void 0 : e.page_id;
        return o("AdsMutators").chain(
          r("AdsCampaignRecordAccessors").promoted_object.delete,
          r("AdsCampaignRecordAccessors").promoted_object.page_id.set(a),
        )(n);
      },
      c = function (t) {
        var e = t.bid_constraints;
        if (e == null) return t;
        var n = e.deleteIn([r("AdsAPIBidConstraints").ROAS_AVERAGE_FLOOR]);
        return r("AdsCampaignRecordAccessors").bid_constraints.set(n, t);
      },
      d = function (t, n, a) {
        var e,
          i = o("AdsCostStrategyUtils").getBidLegacyFieldsValueByBidStrategy(n),
          l = i.MappedIsAutobid,
          s = i.MappedIsAveragePricePacing;
        return o("AdsMutators").chain(
          (e = r("AdsCampaignRecordAccessors")).bid_strategy.set(n),
          e.pacing_type.set(a),
          e.is_autobid.set(l),
          e.is_average_price_pacing.set(s),
        )(t);
      },
      m = function (t) {
        var e = t;
        return (
          o(
            "AdsCampaignGroupUtils",
          ).CAMPAIGN_GROUP_BUDGET_ROLL_DOWN_FIELD_PATHS.forEach(function (t) {
            var n = t.campaignPath;
            e = e.deleteIn(n);
          }),
          e
        );
      },
      p = function (t, n, a, i, l, s) {
        var e = t.optimization_goal;
        if (
          (e === r("AdsAPIOptimizationGoals").VIDEO_VIEWS ||
            e === r("AdsAPIOptimizationGoals").THRUPLAY) &&
          !l
        )
          return t;
        var u = r("AdsCampaignOptimizationPluginResolver")
          .resolve({
            objective: n,
            promotedObjectType: a,
            destinationType: o("AdsAPICampaignRecordUtils").getDestinationType(
              t,
            ),
          })
          .getDefaultFrequencyControlSpecs(e, a, i, s);
        return r("AdsCampaignRecordAccessors").frequency_control_specs.set(
          r("immutable").fromJS(u),
          t,
        );
      },
      _ = function (t) {
        if (t.pacing_type == null) return t;
        var e = t.pacing_type.includes("day_parting")
          ? ["day_parting"]
          : ["standard"];
        return r("AdsCampaignRecordAccessors").pacing_type.set(
          r("immutable").List(e),
          t,
        );
      };
    function f(e, t, n, a, i, l, s, u) {
      if (
        (o("AdsDeliveryContainerUtils").isConversionsRoasOptimization(
          t,
          e.optimization_goal,
          n,
        ) &&
          !i) ||
        (r("AdsAppUtils").isRoasOptimization(t, e.optimization_goal, n) &&
          !a &&
          !(
            (o("AdsRecommendationIapExperimentUtils").shouldShowIapPfrByAccount(
              !0,
            ) &&
              o(
                "AdsRecommendationIapExperimentUtils",
              ).shouldShowNestedRecoveryQeByAccount(!0)) ||
            o("AdsRecommendationIaaExperimentUtils").shouldShowIaaPfrByAccount(
              !0,
            )
          ))
      )
        return r(
          "AdsCampaignRecordAccessors",
        ).promoted_object.custom_event_type.set("PURCHASE", e);
      if (r("AdsAppUtils").isInAppValueOptimization(t, e.optimization_goal, n))
        return r(
          "AdsCampaignRecordAccessors",
        ).promoted_object.custom_event_type.set("AD_IMPRESSION", e);
      if (
        t === r("AdsAPIObjectives").APP_INSTALLS &&
        e.optimization_goal === r("AdsAPIOptimizationGoals").VALUE &&
        l != null &&
        o(
          "AdsValueOptimizationUtils",
        ).shouldDefaultValueOptimizationForAppInstallsObjective(u, t, l, s)
      ) {
        if (
          l.includes("AdImpression") &&
          o("AdsRecommendationIaaExperimentUtils").shouldShowIaaPfrByAccount(!0)
        )
          return r(
            "AdsCampaignRecordAccessors",
          ).promoted_object.custom_event_type.set("AD_IMPRESSION", e);
        if (
          l.includes("Purchase") &&
          o("AdsRecommendationIapExperimentUtils").shouldShowIapPfrByAccount(
            !0,
          ) &&
          o(
            "AdsRecommendationIapExperimentUtils",
          ).shouldShowNestedRecoveryQeByAccount(!0)
        )
          return r(
            "AdsCampaignRecordAccessors",
          ).promoted_object.custom_event_type.set("PURCHASE", e);
      } else {
        if (
          t === r("AdsAPIObjectives").APP_INSTALLS &&
          e.optimization_goal === r("AdsAPIOptimizationGoals").VALUE &&
          l != null &&
          l.includes("Purchase")
        )
          return r(
            "AdsCampaignRecordAccessors",
          ).promoted_object.custom_event_type.set("PURCHASE", e);
        if (
          t === r("AdsAPIObjectives").APP_INSTALLS &&
          e.optimization_goal === r("AdsAPIOptimizationGoals").VALUE &&
          l != null &&
          l.includes("AdImpression")
        )
          return r(
            "AdsCampaignRecordAccessors",
          ).promoted_object.custom_event_type.set("AD_IMPRESSION", e);
      }
      var c = r("AdsCampaignOptimizationPluginResolver").resolve({
        objective: t,
        promotedObjectType: n,
        destinationType: o("AdsAPICampaignRecordUtils").getDestinationType(e),
      });
      return c.getCanHaveCustomEventType()
        ? e
        : o("AdsMutators").chain(
            r("AdsCampaignRecordAccessors").promoted_object.custom_event_type
              .delete,
            r("AdsCampaignRecordAccessors").promoted_object.custom_event_str
              .delete,
          )(e);
    }
    function g(t, n, a, i) {
      if (t.end_time != null || !i) return t;
      var l = o("AdsDeliveryContainerUtils").isEligibleForVVDeprecationChange(
        n,
        t.optimization_goal,
      );
      if (l) {
        var s = a.timezone_offset_hours_utc,
          u = r("adsCampaignGetISODateTimeString")(e, s);
        r("AdsCampaignRecordAccessors").end_time.set(u, t);
      }
      return t;
    }
    function h(e, t) {
      var n = t === r("AdsBuyingTypes").AUCTION,
        o = e.rf_prediction_id != null,
        a = n && o;
      return a ? r("AdsCampaignRecordAccessors").rf_prediction_id.delete(e) : e;
    }
    function y(e, t, n, a, i, l, y, C, b, v, S, R) {
      var L,
        E = e,
        k =
          r("adsCampaignGetBudgetMode")(E.daily_budget, E.lifetime_budget) ==
          null,
        I = a.budget_strategy === "CAMPAIGN_FLEX_BUDGET";
      k &&
        a.bid_strategy &&
        a.pacing_type &&
        (E = d(E, a.bid_strategy, a.pacing_type));
      var T = t;
      if (
        t ===
        r("AdsAPIOptimizationGoals").MESSAGING_DEEP_CONVERSATION_AND_FOLLOW
      ) {
        T = r("AdsAPIOptimizationGoals").REPLIES;
        var D =
          E.destination_type === r("AdCampaignDestination").INSTAGRAM_DIRECT;
        E = r("AdsCampaignRecordAccessors").is_dc_follow_optimized.set(D, E);
      } else
        t !== r("AdsAPIOptimizationGoals").REPLIES &&
          (E = r("AdsCampaignRecordAccessors").is_dc_follow_optimized.set(
            !1,
            E,
          ));
      var x = r("shouldPreserveMinROASSettingsOnOptimizationGoalChange")(
        E,
        I,
        T,
      );
      ((E = r("AdsCampaignRecordAccessors").optimization_goal.set(T, E)),
        !k &&
          !I &&
          !x &&
          ((E = r("AdsCampaignRecordAccessors").is_autobid.set(!0, E)),
          (E = r("AdsCampaignRecordAccessors").is_average_price_pacing.set(
            !1,
            E,
          )),
          (E = r("AdsCampaignRecordAccessors").bid_strategy.set(
            r("AdsAPIBidStrategies").LOWEST_COST_WITHOUT_CAP,
            E,
          ))));
      var $ = r("adsBillingEventGetDefaultDEPRECATED")(
          a.buying_type,
          a.objective,
          E.optimization_goal,
          i,
          n,
          E.bid_strategy,
        ),
        P = o("AdsThruPlayDurationUtils").getCpvBillingEventForGoal(
          E.optimization_goal,
        ),
        N =
          P != null &&
          o("AdsThruPlayDurationUtils").isCpvBillingEvent(e.billing_event) &&
          r("gkx")("18778")
            ? P
            : $;
      E = r("AdsCampaignRecordAccessors").billing_event.set(N, E);
      var M = a.budget_strategy === "CAMPAIGN_FLEX_BUDGET";
      if (
        (M || (E = s(E, a.objective, i, n)),
        (E = p(
          E,
          a.objective,
          i,
          n,
          l,
          (L = a.frequency_control_specs) == null ? void 0 : L.toJS(),
        )),
        (E = h(E, a.buying_type)),
        E.bid_strategy === r("AdsAPIBidStrategies").LOWEST_COST_WITHOUT_CAP &&
          (E = _(E)),
        (E = o("AdsConversionWindowUtils").setDefaultClickConversionWindow(
          E,
          y,
        )),
        (E = o("AdsConversionWindowUtils").setDefaultViewConversionWindow(
          E,
          C,
        )),
        (E = o(
          "AdsConversionWindowUtils",
        ).setDefaultEngagedViewConversionWindow(E, b)),
        (E = f(E, a.objective, i, v, S, R, a.bid_strategy, n)),
        (E = g(E, a.objective, n, l)),
        (E = u(e, E)),
        a.objective === "OUTCOME_AWARENESS")
      ) {
        var w;
        E = o("AdsCampaignLiveVideoAdsUtils").maybeSetLiveVideoAdType(
          E,
          a == null || (w = a.promoted_object) == null
            ? void 0
            : w.live_video_destination,
        );
      }
      if ((x || (E = c(E)), I)) {
        var A,
          F,
          O =
            (A =
              (F = r("AdsCampaignRecordAccessors").adset_schedule.get(E)) ==
              null
                ? void 0
                : F.size) != null
              ? A
              : 0;
        if (O > 0) {
          var B,
            W =
              o(
                "AdsUEditorCampaignBasicSectionCTXBusinessHourDaypartingUtils",
              ).enableCTXAMBusinessHourDaypartingOrganicHours(!1) &&
              o(
                "AdsUEditorCampaignBasicSectionCTXBusinessHourDaypartingUtils",
              ).eligibleForCTXAMBusinessHourDaypartingForL2(
                a.objective,
                !1,
                "lifetime",
                o("AdsAPICampaignRecordUtils").getDestinationType(E),
                (B = E.promoted_object) == null ? void 0 : B.page_id,
                T,
              );
          W ||
            (E = o("AdsMutators").chain(
              r("AdsCampaignRecordAccessors").adset_schedule.set(
                r("immutable").List(),
              ),
              r("AdsCampaignRecordAccessors").pacing_type.set(
                r("immutable").List(["standard"]),
              ),
            )(E));
        }
      }
      if (
        !k &&
        !I &&
        T === r("AdsAPIOptimizationGoals").REACH &&
        a.objective === r("AdsAPIObjectives").OUTCOME_AWARENESS &&
        o(
          "AdsFrequencyControlGKUtils",
        ).isAccountEligibleForTargetFrequencyAuctionDefaulting()
      ) {
        var q = r("adsCampaignConvertUSDBudgetToCurrency")(
          n.currency,
          r("CampaignDefaultBudgetConfig").default_budget.lifetime,
        );
        ((E = r("AdsCampaignRecordAccessors").daily_budget.set(0, E)),
          (E = r("AdsCampaignRecordAccessors").lifetime_budget.set(q, E)),
          (E = o(
            "adsTargetFrequencyInAuctionMutationUtils",
          ).maybeDefaultScheduleForTargetFrequencyAuction(E, n.timezone_id)));
      }
      return k || I ? m(E) : E;
    }
    l.default = y;
  },
  98,
);
