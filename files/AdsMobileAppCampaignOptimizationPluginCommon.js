__d(
  "AdsMobileAppCampaignOptimizationPluginCommon",
  [
    "AEMv2AdCampaignAttribution",
    "AccountAttributionEvent",
    "AdsAPIBidStrategies",
    "AdsAPIBillingEvents",
    "AdsAPICampaignGroupRecordUtils",
    "AdsAPIOptimizationGoals",
    "AdsAppCampaignOptimizationPluginCommon",
    "AdsAppUrlUtils",
    "AdsBidControlType",
    "AdsDeliveryAttributionUtils",
    "AdsEditingCampaignEditorContext",
    "AdsOptimizationStrings",
    "AdsValueOptimizationUtils",
    "CometPlaceholder.react",
    "GeoGlimmer.react",
    "JSResource",
    "adsConvertAdObjectRecordToPlainJS",
    "adsUEditorSelectedCampaignPlainObjectsSelector",
    "gkx",
    "isTruthy",
    "lazyLoadComponent",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = r("lazyLoadComponent")(
        r("JSResource")("AdsAppInstallWarning.react").__setRef(
          "AdsMobileAppCampaignOptimizationPluginCommon",
        ),
      );
    function c() {
      var e = r("adsUEditorSelectedCampaignPlainObjectsSelector")(
        r("AdsEditingCampaignEditorContext"),
      );
      return (
        e.length > 0 &&
        e.every(function (e) {
          return (
            e.campaign_attribution ===
            r("AEMv2AdCampaignAttribution").SKADNETWORK
          );
        })
      );
    }
    function d() {
      var e = r("adsUEditorSelectedCampaignPlainObjectsSelector")(
        r("AdsEditingCampaignEditorContext"),
      );
      return (
        e.length > 0 &&
        e.every(function (e) {
          return e.campaign_attribution === r("AEMv2AdCampaignAttribution").AEM;
        })
      );
    }
    var m = babelHelpers.extends(
        {},
        r("AdsAppCampaignOptimizationPluginCommon"),
        {
          getCanUseAveragePricePacing: function (t, n) {
            return (
              (t === r("AdsAPIOptimizationGoals").APP_INSTALLS ||
                t === r("AdsAPIOptimizationGoals").OFFSITE_CONVERSIONS) &&
              n !== r("AdsAPIBillingEvents").APP_INSTALLS
            );
          },
          getCanUseConversionWindow: function (t) {
            return (
              t === r("AdsAPIOptimizationGoals").APP_INSTALLS ||
              t === r("AdsAPIOptimizationGoals").OFFSITE_CONVERSIONS ||
              t === r("AdsAPIOptimizationGoals").VALUE ||
              t === r("AdsAPIOptimizationGoals").RETURN_ON_AD_SPEND ||
              t === r("AdsAPIOptimizationGoals").IN_APP_VALUE
            );
          },
          getDefaultConversionWindowLength: function (t, n) {
            var e,
              a,
              i = c(),
              l = d();
            switch (t) {
              case r("AdsAPIOptimizationGoals").OFFSITE_CONVERSIONS:
              case r("AdsAPIOptimizationGoals").VALUE:
                if (!t || i || l) return 1;
                if (
                  ((e = n != null),
                  (a = n == null ? void 0 : n.default_unified_attribution_spec),
                  e && a)
                ) {
                  var s = m.getClickConversionWindowOptions(t, n),
                    u = a.find(function (e) {
                      return (
                        e.event_type ===
                        r("AccountAttributionEvent").CLICK_THROUGH
                      );
                    });
                  if (u != null)
                    return o(
                      "AdsDeliveryAttributionUtils",
                    ).findNearestWindowDays(u.window_days, s);
                }
                return 7;
              default:
                return 1;
            }
          },
          getDefaultViewConversionWindowLength: function (t, n) {
            var e = n != null,
              a = n == null ? void 0 : n.default_unified_attribution_spec;
            if (!t || !e || !a) return null;
            var i = c(),
              l = d();
            if (i || l) return 0;
            var s = r("adsUEditorSelectedCampaignPlainObjectsSelector")(
                r("AdsEditingCampaignEditorContext"),
              ),
              u =
                s.length > 0 &&
                s.every(function (e) {
                  var t;
                  return r("AdsAppUrlUtils").isGooglePlayURL(
                    (t = e.promoted_object) == null
                      ? void 0
                      : t.object_store_url,
                  );
                });
            if (
              u &&
              t === r("AdsAPIOptimizationGoals").OFFSITE_CONVERSIONS &&
              r("gkx")("1003")
            )
              return 1;
            var p = a.find(function (e) {
              return e.event_type === r("AccountAttributionEvent").VIEW_THROUGH;
            });
            if (p == null) return null;
            var _ = o("AdsDeliveryAttributionUtils").findNearestWindowDays(
              p.window_days,
              m.getViewConversionWindowOptions(t),
            );
            switch (_) {
              case 0:
              case 1:
              case 7:
                return _;
              default:
                return null;
            }
          },
          getDefaultEngagedVideoViewWindowLength: function (t, n) {
            if (n == null) return 0;
            var e = r("adsUEditorSelectedCampaignPlainObjectsSelector")(
                r("AdsEditingCampaignEditorContext"),
              ),
              o =
                e.length > 0 &&
                e.every(function (e) {
                  var t;
                  return r("AdsAppUrlUtils").isGooglePlayURL(
                    (t = e.promoted_object) == null
                      ? void 0
                      : t.object_store_url,
                  );
                });
            if (!o) return 0;
            switch (t) {
              case r("AdsAPIOptimizationGoals").APP_INSTALLS:
                return 1;
              default:
                return 0;
            }
          },
          getClickConversionWindowOptions: function (t) {
            switch (t) {
              case r("AdsAPIOptimizationGoals").APP_INSTALLS:
                return [1];
              case r("AdsAPIOptimizationGoals").OFFSITE_CONVERSIONS:
              case r("AdsAPIOptimizationGoals").VALUE:
              case r("AdsAPIOptimizationGoals").RETURN_ON_AD_SPEND:
                return c() ? [1] : [1, 7];
              case r("AdsAPIOptimizationGoals").IN_APP_VALUE:
                return [1, 7];
              default:
                return [];
            }
          },
          getViewConversionWindowOptions: function (t) {
            switch (t) {
              case r("AdsAPIOptimizationGoals").APP_INSTALLS:
                return c() || d() ? [] : [1];
              default:
                return [];
            }
          },
          getSupportedOptimizationGoals: function (t) {
            var e = t.account,
              n = t.isIOS14CampaignGroup,
              a = t.isSmartAppPromotion,
              i = t.valueOptimizationOptionUIState,
              l = o("AdsValueOptimizationUtils").showVOBasedOnVOUIState(i),
              s = [
                r("AdsAPIOptimizationGoals").APP_INSTALLS,
                r("AdsAPIOptimizationGoals").OFFSITE_CONVERSIONS,
              ].concat(l ? [r("AdsAPIOptimizationGoals").VALUE] : []),
              u = a === !0;
            return (
              u &&
                s.push(
                  r("AdsAPIOptimizationGoals")
                    .APP_INSTALLS_AND_OFFSITE_CONVERSIONS,
                ),
              n === !0 ||
                ((a !== !0 || u) &&
                  s.push(r("AdsAPIOptimizationGoals").LINK_CLICKS)),
              s
            );
          },
          getDefaultOptimizationGoal: function (t) {
            var e = t.account,
              n = t.appData,
              a = t.appURL,
              i = t.campaignGroup,
              l = t.hasAdvertisableAppEvents,
              s = t.hasBackingApplication;
            if ((i == null ? void 0 : i.is_skadnetwork_attribution) === !0)
              return r("AdsAPIOptimizationGoals").APP_INSTALLS;
            var u = r("isTruthy")(i)
              ? o("AdsAPICampaignGroupRecordUtils").isSmartAppPromotion(
                  r("adsConvertAdObjectRecordToPlainJS")(i),
                )
              : !1;
            if (u) return r("AdsAPIOptimizationGoals").APP_INSTALLS;
            var c = i == null ? void 0 : i.bid_strategy;
            if (
              o(
                "AdsValueOptimizationUtils",
              ).shouldDefaultValueForMobileAppInstall(
                e,
                !!n && !!n.value_opt_eligible,
              ) ||
              c === r("AdsAPIBidStrategies").LOWEST_COST_WITH_MIN_ROAS
            )
              return r("AdsAPIOptimizationGoals").VALUE;
            if (l === !0)
              return r("AdsAPIOptimizationGoals").OFFSITE_CONVERSIONS;
            var d = !i || i.is_average_price_pacing;
            return d !== !0 &&
              (!s || (r("isTruthy")(a) && r("AdsAppUrlUtils").isWindowsURL(a)))
              ? r("AdsAPIOptimizationGoals").LINK_CLICKS
              : r("AdsAPIOptimizationGoals").APP_INSTALLS;
          },
          getBidControlType: function (t, n) {
            return t === r("AdsAPIOptimizationGoals").VALUE
              ? r("AdsBidControlType").AUTO_BID_ONLY
              : n === r("AdsAPIBillingEvents").APP_INSTALLS
                ? r("AdsBidControlType").MANUAL_BID_ONLY
                : r("AdsBidControlType").ANY;
          },
          getCanHaveCustomEventType: function () {
            return !1;
          },
          getOptimizationGoalWarning: function (t, n, o) {
            var e = o == null ? void 0 : o.optimization_goal;
            return t === r("AdsAPIOptimizationGoals").APP_INSTALLS && e != null
              ? s.jsx(r("CometPlaceholder.react"), {
                  fallback: s.jsx(r("GeoGlimmer.react"), {
                    height: 8,
                    width: 128,
                    loggingName: i.id,
                  }),
                  name: i.id,
                  children: s.jsx(u, {}),
                })
              : null;
          },
          getConversionWindowHelpText: function (t) {
            return t === r("AdsAPIOptimizationGoals").APP_INSTALLS
              ? o(
                  "AdsOptimizationStrings",
                ).getConversionWindowHelpTextForMobileAppInstalls()
              : t === r("AdsAPIOptimizationGoals").OFFSITE_CONVERSIONS
                ? o(
                    "AdsOptimizationStrings",
                  ).getConversionWindowHelpTextForMobileAppEvents()
                : o("AdsOptimizationStrings").getConversionWindowHelpText();
          },
        },
      ),
      p = m;
    l.default = p;
  },
  98,
);
