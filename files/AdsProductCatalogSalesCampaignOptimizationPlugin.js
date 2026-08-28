__d(
  "AdsProductCatalogSalesCampaignOptimizationPlugin",
  [
    "AccountAttributionEvent",
    "AdAccountDpaEligibleProductCatalogListStore_RELAY",
    "AdCampaignDestination",
    "AdsAPIBidStrategies",
    "AdsAPICampaignGroupRecordUtils",
    "AdsAPIObjectives",
    "AdsAPIOptimizationGoals",
    "AdsBulkValueUtils",
    "AdsBwIUtils",
    "AdsDefaultCampaignOptimizationPlugin",
    "AdsDeliveryAttributionUtils",
    "AdsFullFunnelUtils",
    "AdsUEditorCampaignShopAdsUtils",
    "AdsUEditorMessagingDestinationUtils",
    "AdsValueOptimizationUtils",
    "AdvertiserSiloedValueOptimizationGoalGating",
    "AppAndWebLPVUtils",
    "ProductCatalogOptimizationGoalUtils",
    "adsConvertAdObjectRecordToPlainJS",
    "gkx",
    "isStringNullOrEmpty",
    "isTruthy",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 1e4,
      s = babelHelpers.extends({}, r("AdsDefaultCampaignOptimizationPlugin"), {
        type: "campaign/optimization",
        key: "product_catalog_sales",
        pivots: { objective: r("AdsAPIObjectives").PRODUCT_CATALOG_SALES },
        getCanUseAveragePricePacing: function (t, n) {
          return t === r("AdsAPIOptimizationGoals").OFFSITE_CONVERSIONS;
        },
        getCanUseConversionWindow: function (t) {
          return (
            t ===
              r("AdsAPIOptimizationGoals").INCREMENTAL_OFFSITE_CONVERSIONS ||
            t === r("AdsAPIOptimizationGoals").OFFSITE_CONVERSIONS ||
            t === r("AdsAPIOptimizationGoals").VALUE
          );
        },
        getCanUseSuggestedBid: function () {
          return !1;
        },
        getClickConversionWindowOptions: function () {
          return [1, 7];
        },
        getDefaultBidAmount: function (n, o) {
          switch (n) {
            case r("AdsAPIOptimizationGoals").OFFSITE_CONVERSIONS:
              return e;
            default:
              return r(
                "AdsDefaultCampaignOptimizationPlugin",
              ).getDefaultBidAmount(n, o);
          }
        },
        getViewConversionWindowOptions: function (t) {
          return t === r("AdsAPIOptimizationGoals").OFFSITE_CONVERSIONS
            ? [1]
            : t === r("AdsAPIOptimizationGoals").VALUE
              ? [1]
              : [];
        },
        getEngagedVideoViewWindowOptions: function (t) {
          return t === r("AdsAPIOptimizationGoals").OFFSITE_CONVERSIONS
            ? [0, 1]
            : t === r("AdsAPIOptimizationGoals").VALUE
              ? [0, 1]
              : [];
        },
        getDefaultEngagedVideoViewWindowLength: function (t, n) {
          return t === r("AdsAPIOptimizationGoals").OFFSITE_CONVERSIONS
            ? 1
            : r(
                "AdsDefaultCampaignOptimizationPlugin",
              ).getDefaultEngagedVideoViewWindowLength(t, n);
        },
        getDefaultConversionWindowLength: function (t, n) {
          if (
            t === r("AdsAPIOptimizationGoals").OFFSITE_CONVERSIONS ||
            t === r("AdsAPIOptimizationGoals").VALUE
          ) {
            var e = n != null,
              a = n == null ? void 0 : n.default_unified_attribution_spec;
            if (e && a && t) {
              var i = s.getClickConversionWindowOptions(t, n),
                l = a.find(function (e) {
                  return (
                    e.event_type === r("AccountAttributionEvent").CLICK_THROUGH
                  );
                });
              if (l != null)
                return o("AdsDeliveryAttributionUtils").findNearestWindowDays(
                  l.window_days,
                  i,
                );
            }
            return 7;
          }
          return 1;
        },
        getDefaultViewConversionWindowLength: function (t, n) {
          if (t === r("AdsAPIOptimizationGoals").VALUE)
            return o(
              "AdsValueOptimizationUtils",
            ).isViewThroughDefaultEnabledForVOQE()
              ? 1
              : null;
          var e = n != null,
            a = n == null ? void 0 : n.default_unified_attribution_spec;
          if (!t || !e || !a) return null;
          var i = a.find(function (e) {
            return e.event_type === r("AccountAttributionEvent").VIEW_THROUGH;
          });
          if (i == null) return null;
          var l = o("AdsDeliveryAttributionUtils").findNearestWindowDays(
            i.window_days,
            s.getViewConversionWindowOptions(t),
          );
          return l === 0 || l === 1 || l === 7 ? l : null;
        },
        getSupportedOptimizationGoals: function (t) {
          var e = t.hasShopAds,
            n = t.isASACampaign,
            a = t.isCatalogEligibleForReplies,
            i = t.isFullFunnelBeta,
            l = t.promotedObject,
            s = t.valueOptimizationOptionUIState;
          if (i === !0)
            return [r("AdsAPIOptimizationGoals").OFFSITE_CONVERSIONS];
          var u = o("AdsBulkValueUtils").getUniformValueOrDefault(
              l == null ? void 0 : l.variation,
            ),
            c = u === "PRODUCT_SET_AND_PHONE_CALL";
          if (c) return [r("AdsAPIOptimizationGoals").QUALITY_CALL];
          var d = o("AdsValueOptimizationUtils").showVOBasedOnVOUIState(s),
            m = u === "PRODUCT_SET_AND_APP",
            p = u === "PRODUCT_SET_AND_IN_STORE",
            _ = u === "PRODUCT_SET_WEBSITE_APP_AND_INSTORE",
            f = r("gkx")("6471"),
            g = m || (p && !f) || _,
            h = d && !g,
            y = a
              ? o("AdsBulkValueUtils").getUniformValueOrDefault(
                  a,
                  o("AdsBulkValueUtils").MIXED,
                )
              : !1;
          return e != null && e.getValue() === !0
            ? [r("AdsAPIOptimizationGoals").OFFSITE_CONVERSIONS]
            : n === !0 || p || _
              ? [].concat(
                  h ? [r("AdsAPIOptimizationGoals").VALUE] : [],
                  o(
                    "AdvertiserSiloedValueOptimizationGoalGating",
                  ).isAdvertiserSiloedValueOptimizationGoalOnSalesEnabled()
                    ? [r("AdsAPIOptimizationGoals").ADVERTISER_SILOED_VALUE]
                    : [],
                  [r("AdsAPIOptimizationGoals").OFFSITE_CONVERSIONS],
                )
              : y === o("AdsBulkValueUtils").MIXED
                ? []
                : y
                  ? [r("AdsAPIOptimizationGoals").CONVERSATIONS]
                  : [].concat(
                      h ? [r("AdsAPIOptimizationGoals").VALUE] : [],
                      o(
                        "AdvertiserSiloedValueOptimizationGoalGating",
                      ).isAdvertiserSiloedValueOptimizationGoalOnSalesEnabled()
                        ? [r("AdsAPIOptimizationGoals").ADVERTISER_SILOED_VALUE]
                        : [],
                      [
                        r("AdsAPIOptimizationGoals").OFFSITE_CONVERSIONS,
                        r("AdsAPIOptimizationGoals").LINK_CLICKS,
                      ],
                      o("AppAndWebLPVUtils").shouldUseAppLpvGA()
                        ? [r("AdsAPIOptimizationGoals").LANDING_PAGE_VIEWS]
                        : [],
                      o("AdsFullFunnelUtils").isAccountFullFunnelEligible()
                        ? [r("AdsAPIOptimizationGoals").REACH]
                        : [],
                      m ? [] : [r("AdsAPIOptimizationGoals").IMPRESSIONS],
                    );
        },
        getDefaultOptimizationGoal: function (t) {
          var e = t.account,
            n = t.campaign,
            a = t.campaignGroup,
            i = t.canUseVOForCatalogSales,
            l = t.haveIncrementalConversionOptimization;
          if (a != null && o("AdsBwIUtils").isBwICampaignGroup(a))
            return r("AdsAPIOptimizationGoals").OFFSITE_CONVERSIONS;
          var s =
            a != null &&
            o("AdsAPICampaignGroupRecordUtils").isUnifiedAutomatedShoppingAds(
              a,
            );
          if (
            o("AdsUEditorCampaignShopAdsUtils").isShopsAdsIncentiveProgram(
              r("adsConvertAdObjectRecordToPlainJS")(n),
            ) ||
            s
          )
            return r("AdsAPIOptimizationGoals").OFFSITE_CONVERSIONS;
          if (n && r("gkx")("21761")) {
            var u = n == null ? void 0 : n.optimization_goal;
            if (
              l === !0 ||
              u === r("AdsAPIOptimizationGoals").INCREMENTAL_OFFSITE_CONVERSIONS
            )
              return r("AdsAPIOptimizationGoals")
                .INCREMENTAL_OFFSITE_CONVERSIONS;
          }
          var c = t.productCatalogID,
            d = t.productSet,
            m =
              i != null
                ? i
                : o(
                    "AdsValueOptimizationUtils",
                  ).shouldDefaultValueForProductCatalogSales(e),
            p = (a == null ? void 0 : a.collaborative_ads_partner_info) != null;
          if (p && m) return r("AdsAPIOptimizationGoals").VALUE;
          if (a && o("AdsAPICampaignGroupRecordUtils").hasBudgetBeta(a)) {
            var _ = a.bid_strategy;
            if (_ === r("AdsAPIBidStrategies").LOWEST_COST_WITH_MIN_ROAS)
              return r("AdsAPIOptimizationGoals").VALUE;
            if (
              _ === r("AdsAPIBidStrategies").TARGET_COST ||
              _ === r("AdsAPIBidStrategies").COST_CAP
            )
              return r("AdsAPIOptimizationGoals").OFFSITE_CONVERSIONS;
          }
          if (d && !r("isStringNullOrEmpty")(c) && m)
            return r("AdsAPIOptimizationGoals").VALUE;
          if (r("isTruthy")(c) && e) {
            var f = r(
                "AdAccountDpaEligibleProductCatalogListStore_RELAY",
              ).getAll(e.account_id),
              g = f.hasValue()
                ? f.getValueEnforcing().map(function (e) {
                    return e.catalog;
                  })
                : null,
              h = null;
            if (
              (g &&
                (h = g.find(function (e) {
                  return e.id === c;
                })),
              h)
            ) {
              if (
                o(
                  "ProductCatalogOptimizationGoalUtils",
                ).isCatalogEligibleForReplies(h) &&
                o(
                  "AdsUEditorMessagingDestinationUtils",
                ).isClickToMessageAdDestination(
                  n == null ? void 0 : n.destination_type,
                )
              )
                return r("AdsAPIOptimizationGoals").CONVERSATIONS;
              if (
                (n == null ? void 0 : n.destination_type) ===
                  r("AdCampaignDestination").FACEBOOK ||
                (h.suggested_conversion_event != null &&
                  h.suggested_conversion_event !== "")
              )
                return r("AdsAPIOptimizationGoals").OFFSITE_CONVERSIONS;
            }
          }
          return o("AdsValueOptimizationUtils").shouldDefaultVOOptimizationGoal(
            n,
            e,
            a,
            !0,
            "catalog_default_opt_goal",
            !0,
          )
            ? r("AdsAPIOptimizationGoals").VALUE
            : r("AdsAPIOptimizationGoals").LINK_CLICKS;
        },
        supportsCustomEventTypeField: function (t) {
          return (
            t === r("AdsAPIOptimizationGoals").OFFSITE_CONVERSIONS ||
            t === r("AdsAPIOptimizationGoals").VALUE
          );
        },
        getCanUseOmniChannelOfflineAttribution: function () {
          return !0;
        },
      }),
      u = s;
    l.default = u;
  },
  98,
);
