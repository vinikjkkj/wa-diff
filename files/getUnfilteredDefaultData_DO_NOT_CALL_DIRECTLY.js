__d(
  "getUnfilteredDefaultData_DO_NOT_CALL_DIRECTLY",
  [
    "AdsAPIObjectives",
    "AdsCallAdsPhoneCallRollbackUtils",
    "AdsCampaignLiveVideoAdsUtils",
    "AdsClickToCallAdsUtils",
    "AdsInterfacesRouter",
    "AdsLeadGenMCMDUtils",
    "AdsMessagesDefaultDestinationUtils",
    "AdsPCAUnifiedFormatAdSetupUtils",
    "AdsPromotedObjectTypes",
    "AdsSalesMessengerRollbackCohortStoreUtils",
    "AdsSignalChallengedSalesQEUtils",
    "AdsSmartDefaultConversionLocationUtils",
    "AdsSmartDefaultStore",
    "CTXAdsSmartDefaultConversionLocationStoreUtils",
    "CallAdsMLDefaultingUtils",
    "ClickToMessageCTXMDFeatureGating",
    "ClickToWhatsAppFeatureGating",
    "IGFAFeatureGating",
    "ODS",
    "SharedSmartDefaultVariables",
    "WebToWhatsappUtils",
    "castToEnum",
    "cr:39253",
    "getDefaultDataForOutcomeLeads",
    "getODAXSmartDefaultDataForEngagement",
    "getODAXSmartDefaultDataForLinkClicksFromInstagramSource",
    "getODAXSmartDefaultDataForSalesFromMessageCTAAndMessagingResponsiveSource",
    "getODAXSmartDefaultDataFromWhatsappSource",
    "gkx",
    "isAccountEligibleForThreeCOL2AdEx",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(t, a) {
      if (a.objective === r("AdsAPIObjectives").OUTCOME_SALES) {
        var i = o(
          "AdsMessagesDefaultDestinationUtils",
        ).getDefaultDataFromWTWAAdUpsell();
        if (i != null) return i;
        var l = o(
          "AdsMessagesDefaultDestinationUtils",
        ).getDefaultDataFromWTMAAdUpsell();
        if (l != null) return l;
      }
      if (a.objective === r("AdsAPIObjectives").OUTCOME_ENGAGEMENT) {
        var s = o(
          "AdsMessagesDefaultDestinationUtils",
        ).getDefaultDataFromCTWAAdUpsell();
        if (s != null) return s;
      }
      var u = r("AdsSmartDefaultStore").get(t.account_id).getValue();
      if (u == null) return null;
      switch (a.objective) {
        case r("AdsAPIObjectives").OUTCOME_LEADS:
          return r("getDefaultDataForOutcomeLeads")(u);
        case r("AdsAPIObjectives").OUTCOME_ENGAGEMENT: {
          var c = o(
            "CTXAdsSmartDefaultConversionLocationStoreUtils",
          ).getCTXMTMLConversionLocationDefaultDataForEngagement(t);
          return (
            c != null &&
              o(
                "SharedSmartDefaultVariables",
              ).setEligibleMessageCTXIntentModelSourceDefaultEngagement(!0),
            o(
              "ClickToMessageCTXMDFeatureGating",
            ).isEngagementMTMLUnifiedConversionLocationDefaultingEnabled(!1)
              ? (o(
                  "AdsSmartDefaultConversionLocationUtils",
                ).logDefaultConversionLocationEvent(
                  o("AdsSmartDefaultConversionLocationUtils")
                    .ConversionLocationDefaultingFactorEnum.MTMLDefaulting,
                  c == null ? void 0 : c.conversion_location,
                  a.objective,
                  t.account_id,
                ),
                c)
              : r("getODAXSmartDefaultDataForEngagement")(t, u, a)
          );
        }
        case r("AdsAPIObjectives").LINK_CLICKS: {
          var d,
            m,
            p = u.traffic;
          if (p == null || p.length === 0)
            return (
              o(
                "AdsSmartDefaultConversionLocationUtils",
              ).logDefaultConversionLocationEvent(
                o("AdsSmartDefaultConversionLocationUtils")
                  .ConversionLocationDefaultingFactorEnum.Null,
                null,
                a.objective,
                t.account_id,
              ),
              null
            );
          if (r("gkx")("7630")) return null;
          var _ = null,
            f = o("AdsSmartDefaultConversionLocationUtils")
              .ConversionLocationDefaultingFactorEnum.Null,
            g = o("SharedSmartDefaultVariables").getQADefault(p);
          g != null &&
            ((_ = g),
            (f = o("AdsSmartDefaultConversionLocationUtils")
              .ConversionLocationDefaultingFactorEnum.QADefault));
          var h = p.find(function (e) {
            var t = e.source;
            return t === "ig_live_ads_source";
          });
          if (h != null && _ === null) {
            var y;
            if (
              (o(
                "SharedSmartDefaultVariables",
              ).setEligibleIGLiveAdsSourceDefaultTraffic(!0),
              n("cr:39253") == null ||
                n("cr:39253").logIgLiveVideoAdsEvents(
                  "ig_lva_conversion_location_defaulting_get_data",
                  t.account_id,
                  {
                    objective: "LINK_CLICKS",
                    experiment_group: o(
                      "AdsCampaignLiveVideoAdsUtils",
                    ).shouldDefaultLiveVideoConversionLocation(!1)
                      ? "test"
                      : "control",
                  },
                ),
              ((y = a.promoted_object) == null
                ? void 0
                : y.live_video_destination) === "INSTAGRAM" ||
                o(
                  "AdsCampaignLiveVideoAdsUtils",
                ).shouldDefaultLiveVideoConversionLocation(!1))
            )
              return (
                (_ = h),
                (f = o("AdsSmartDefaultConversionLocationUtils")
                  .ConversionLocationDefaultingFactorEnum
                  .DefaultFromIGLiveAdsSource),
                _
              );
          }
          var C = p.find(function (e) {
            var t = e.source;
            return t === "ig_profile_visit_source";
          });
          (C != null &&
            _ === null &&
            ((e || (e = o("ODS"))).bumpEntityKey(
              68,
              "traffic_objective_conversion_location_defaulting",
              "eligible_ig_profile_visit",
            ),
            o(
              "SharedSmartDefaultVariables",
            ).setEligibleIGProfileVisitSourceDefaultTraffic(!0),
            o("IGFAFeatureGating").isIGProfileVisitDefaultingEnabled(!1) &&
              ((e || (e = o("ODS"))).bumpEntityKey(
                68,
                "traffic_objective_conversion_location_defaulting",
                "pass_ig_profile_visit",
              ),
              (_ = C),
              (f = o("AdsSmartDefaultConversionLocationUtils")
                .ConversionLocationDefaultingFactorEnum
                .DefaultFromIGProfileVisitSource))),
            (e || (e = o("ODS"))).bumpEntityKey(
              68,
              "traffic_objective_conversion_location_defaulting",
              "before_mtml",
            ));
          var b = o(
            "CTXAdsSmartDefaultConversionLocationStoreUtils",
          ).getCTXMTMLConversionLocationDefaultDataForTraffic(t);
          if (
            b !== null &&
            (b == null ? void 0 : b.conversion_location) !==
              ((d = _) == null ? void 0 : d.conversion_location) &&
            (o(
              "SharedSmartDefaultVariables",
            ).setEligibleMessageCTXIntentModelSourceDefaultTraffic(!0),
            o(
              "ClickToMessageCTXMDFeatureGating",
            ).isTrafficMTMLUnifiedConversionLocationDefaultingEnabled(!1))
          ) {
            var v;
            return (
              (e || (e = o("ODS"))).bumpEntityKey(
                68,
                "traffic_objective_conversion_location_defaulting",
                "pass_mtml." +
                  ((v = b == null ? void 0 : b.conversion_location) != null
                    ? v
                    : "unknown"),
              ),
              o(
                "AdsSmartDefaultConversionLocationUtils",
              ).logDefaultConversionLocationEvent(
                o("AdsSmartDefaultConversionLocationUtils")
                  .ConversionLocationDefaultingFactorEnum.MTMLDefaulting,
                b == null ? void 0 : b.conversion_location,
                a.objective,
                t.account_id,
              ),
              b
            );
          }
          var S = o("AdsClickToCallAdsUtils").getDefaultFromCallAdsSource(p),
            R = o("CallAdsMLDefaultingUtils").getCallAdsTrafficDefaultMLScore(
              t.account_id,
            );
          if ((S != null || R != null) && _ === null) {
            var L = S != null,
              E =
                R != null &&
                R >= o("CallAdsMLDefaultingUtils").TRAFFIC_THRESHOLD_A,
              k =
                R != null &&
                R >= o("CallAdsMLDefaultingUtils").TRAFFIC_THRESHOLD_B,
              I = L !== E || L !== k;
            if (I) {
              o(
                "SharedSmartDefaultVariables",
              ).setEligibleCallAdsMLDefaultingTraffic(!0);
              var T = o(
                  "CallAdsMLDefaultingUtils",
                ).getCallAdsMLGroupThresholdTraffic(),
                D = R != null && R >= T;
              (o(
                "CallAdsMLDefaultingUtils",
              ).isCallAdsMLDefaultingEnabledTraffic(!1) &&
                (S = D
                  ? o("CallAdsMLDefaultingUtils").CALL_ADS_ML_DEFAULT_DATA
                  : null),
                o("CallAdsMLDefaultingUtils").logCallAdsMLDefaultingDecision(
                  a.objective,
                  {
                    controlDefault: L,
                    finalDefault: S != null,
                    mlScore: R,
                    testDefault: D,
                  },
                ));
            }
          }
          S != null &&
            ((_ = S),
            (f = o("AdsSmartDefaultConversionLocationUtils")
              .ConversionLocationDefaultingFactorEnum.CallAdsDefault));
          var x = p.find(function (e) {
            var t = e.source;
            return t === "whatsapp_source";
          });
          x != null &&
            _ === null &&
            ((_ = r("getODAXSmartDefaultDataFromWhatsappSource")(
              x,
              t,
              a.objective,
              a.is_odax_campaign_group,
            )),
            (f = o("AdsSmartDefaultConversionLocationUtils")
              .ConversionLocationDefaultingFactorEnum.DefaultsFromWaSource));
          var $ = p.find(function (e) {
            var t = e.source;
            return t === "instagram_source";
          });
          $ != null &&
            _ === null &&
            ((_ = r("getODAXSmartDefaultDataForLinkClicksFromInstagramSource")(
              $,
              a.objective,
              a.is_odax_campaign_group,
            )),
            (f = o("AdsSmartDefaultConversionLocationUtils")
              .ConversionLocationDefaultingFactorEnum
              .DefaultFromInstagramSource));
          var P = p.find(function (e) {
            var t = e.source;
            return t === "web_ads_link_clicks_source";
          });
          return P != null &&
            o(
              "WebToWhatsappUtils",
            ).isInAdsManagerLinkClicksObjectiveWeblinkPrefillQEWizL2Defaulting(
              a.objective,
              !0,
            )
            ? (o(
                "AdsSmartDefaultConversionLocationUtils",
              ).logDefaultConversionLocationEvent(
                o("AdsSmartDefaultConversionLocationUtils")
                  .ConversionLocationDefaultingFactorEnum
                  .WebAdsLinkClicksSource,
                P == null ? void 0 : P.conversion_location,
                a.objective,
                t.account_id,
              ),
              P)
            : (o(
                "AdsSmartDefaultConversionLocationUtils",
              ).logDefaultConversionLocationEvent(
                f,
                (m = _) == null ? void 0 : m.conversion_location,
                a.objective,
                t.account_id,
              ),
              _);
        }
        case r("AdsAPIObjectives").CONVERSIONS: {
          var N = u.conversions;
          return N == null || N.length === 0
            ? null
            : o(
                  "isAccountEligibleForThreeCOL2AdEx",
                ).isAccountEligibleForThreeCOL2AdEx(a.objective) &&
                !o(
                  "AdsPCAUnifiedFormatAdSetupUtils",
                ).shouldSetupAdGroupAsPcaUnified(a) &&
                o(
                  "isAccountEligibleForThreeCOL2AdEx",
                ).isAccountEligibleForWebAndAppDefault()
              ? {
                  conversion_location: r("AdsPromotedObjectTypes").WEB_AND_APP,
                  source: "3co_default",
                }
              : null;
        }
        case r("AdsAPIObjectives").OUTCOME_SALES: {
          if (
            o("AdsPCAUnifiedFormatAdSetupUtils").shouldSetupAdGroupAsPcaUnified(
              a,
            )
          )
            return {
              conversion_location: r("AdsPromotedObjectTypes").PIXEL,
              source: "default",
            };
          var M = r("AdsInterfacesRouter").get(),
            w = M.getTypedParams(),
            A = w.conversion_location,
            F = w.nav_source,
            O = u.sales,
            B = o("SharedSmartDefaultVariables").getQADefault(O);
          if (B != null) return B;
          var W = O.find(function (e) {
            var t = e.source;
            return t === "ig_live_ads_source";
          });
          if (W != null) {
            var q;
            if (
              (o(
                "SharedSmartDefaultVariables",
              ).setEligibleIGLiveAdsSourceDefaultSales(!0),
              n("cr:39253") == null ||
                n("cr:39253").logIgLiveVideoAdsEvents(
                  "ig_lva_conversion_location_defaulting_get_data",
                  t.account_id,
                  {
                    objective: "OUTCOME_SALES",
                    experiment_group: o(
                      "AdsCampaignLiveVideoAdsUtils",
                    ).shouldDefaultLiveVideoConversionLocation(!1)
                      ? "test"
                      : "control",
                  },
                ),
              ((q = a.promoted_object) == null
                ? void 0
                : q.live_video_destination) === "INSTAGRAM" ||
                o(
                  "AdsCampaignLiveVideoAdsUtils",
                ).shouldDefaultLiveVideoConversionLocation(!1))
            )
              return W;
          }
          var U = o(
            "CTXAdsSmartDefaultConversionLocationStoreUtils",
          ).getCTXMTMLConversionLocationDefaultDataForSales(t);
          if (
            U != null &&
            (o(
              "SharedSmartDefaultVariables",
            ).setEligibleMessageCTXIntentModelSourceDefaultSales(!0),
            o(
              "ClickToMessageCTXMDFeatureGating",
            ).isSalesMTMLUnifiedConversionLocationDefaultingEnabled(!1))
          ) {
            if (
              (o(
                "AdsSmartDefaultConversionLocationUtils",
              ).logDefaultConversionLocationEvent(
                o("AdsSmartDefaultConversionLocationUtils")
                  .ConversionLocationDefaultingFactorEnum.MTMLDefaulting,
                U == null ? void 0 : U.conversion_location,
                r("AdsAPIObjectives").OUTCOME_SALES,
                t.account_id,
              ),
              U.conversion_location === r("AdsPromotedObjectTypes").MESSENGER)
            ) {
              var V, H;
              o(
                "AdsSalesMessengerRollbackCohortStoreUtils",
              ).isInSalesMessengerRollbackCohort(
                t,
                (V = a.promoted_object) == null ? void 0 : V.page_id,
              ) &&
                o(
                  "SharedSmartDefaultVariables",
                ).setEligibleSalesMessengerRollback(!0);
              var G = o(
                "AdsSalesMessengerRollbackCohortStoreUtils",
              ).maybeApplyMessengerRollback(
                t,
                (H = a.promoted_object) == null ? void 0 : H.page_id,
              );
              if (G != null) return G;
            }
            return U;
          }
          var z = O.find(function (e) {
            var t = e.source;
            return t === "3co_default";
          });
          if (z != null) return z;
          var j = O.find(function (e) {
            var t = e.source;
            return t === "omnichannel_default";
          });
          if (j != null) return j;
          var K = O.find(function (e) {
            var t = e.source;
            return t === "am_shell_pixel_default";
          });
          if (
            K != null &&
            o(
              "AdsSignalChallengedSalesQEUtils",
            ).shouldDefaultOptimizationGoalForShellPixel(!1)
          )
            return (
              o(
                "AdsSmartDefaultConversionLocationUtils",
              ).logDefaultConversionLocationEvent(
                o("AdsSmartDefaultConversionLocationUtils")
                  .ConversionLocationDefaultingFactorEnum.AMShellPixelDefault,
                K.conversion_location,
                r("AdsAPIObjectives").OUTCOME_SALES,
                t.account_id,
              ),
              K
            );
          var Q = O.find(function (e) {
            var t = e.source;
            return t === "am_no_pixel_default";
          });
          if (
            Q != null &&
            o(
              "AdsSignalChallengedSalesQEUtils",
            ).shouldDefaultOptimizationGoalForNoPixel(!1)
          )
            return (
              o(
                "AdsSmartDefaultConversionLocationUtils",
              ).logDefaultConversionLocationEvent(
                o("AdsSmartDefaultConversionLocationUtils")
                  .ConversionLocationDefaultingFactorEnum.AMNoPixelDefault,
                Q.conversion_location,
                r("AdsAPIObjectives").OUTCOME_SALES,
                t.account_id,
              ),
              Q
            );
          var X = o("AdsLeadGenMCMDUtils").getDefaultFromFcMdAdsSource(O);
          if (X != null) return X;
          var Y = r("castToEnum")(A, r("AdsPromotedObjectTypes"));
          if (Y != null)
            return {
              conversion_location: Y,
              source: F != null ? F : "loading",
            };
          var J = o("AdsClickToCallAdsUtils").getDefaultFromCallAdsSource(O),
            Z = o("CallAdsMLDefaultingUtils").getCallAdsSalesDefaultMLScore(
              t.account_id,
            );
          if (J != null || Z != null) {
            var ee = J != null,
              te =
                Z != null &&
                Z >= o("CallAdsMLDefaultingUtils").SALES_THRESHOLD_A,
              ne =
                Z != null &&
                Z >= o("CallAdsMLDefaultingUtils").SALES_THRESHOLD_B,
              re =
                Z != null &&
                Z >= o("CallAdsMLDefaultingUtils").SALES_THRESHOLD_C,
              oe = ee !== te || ee !== ne || ee !== re;
            if (oe) {
              o(
                "SharedSmartDefaultVariables",
              ).setEligibleCallAdsMLDefaultingSales(!0);
              var ae = o(
                  "CallAdsMLDefaultingUtils",
                ).getCallAdsMLGroupThresholdSales(),
                ie = Z != null && Z >= ae;
              (o("CallAdsMLDefaultingUtils").isCallAdsMLDefaultingEnabledSales(
                !1,
              ) &&
                (J = ie
                  ? o("CallAdsMLDefaultingUtils").CALL_ADS_ML_DEFAULT_DATA
                  : null),
                o("CallAdsMLDefaultingUtils").logCallAdsMLDefaultingDecision(
                  a.objective,
                  {
                    controlDefault: ee,
                    finalDefault: J != null,
                    mlScore: Z,
                    testDefault: ie,
                  },
                ));
            }
          }
          if (J != null) {
            o("SharedSmartDefaultVariables").setEligibleSalesPhoneCallRollback(
              !0,
            );
            var le = o(
              "AdsCallAdsPhoneCallRollbackUtils",
            ).maybeApplySalesPhoneCallRollback();
            return le != null ? le : J;
          }
          var se = O.find(function (e) {
            var t = e.source;
            return t.startsWith("message_ctx_intent_model_source");
          });
          if (
            se != null &&
            (o(
              "SharedSmartDefaultVariables",
            ).setEligibleMessageCTXIntentModelSourceDefaultSales(!0),
            o("ClickToWhatsAppFeatureGating").shouldDefaultToCTXForSalesL2(!1))
          ) {
            var ue, ce;
            o(
              "AdsSalesMessengerRollbackCohortStoreUtils",
            ).isInSalesMessengerRollbackCohort(
              t,
              (ue = a.promoted_object) == null ? void 0 : ue.page_id,
            ) &&
              o(
                "SharedSmartDefaultVariables",
              ).setEligibleSalesMessengerRollback(!0);
            var de = o(
              "AdsSalesMessengerRollbackCohortStoreUtils",
            ).maybeApplyMessengerRollback(
              t,
              (ce = a.promoted_object) == null ? void 0 : ce.page_id,
            );
            return de != null ? de : se;
          }
          var me = O.find(function (e) {
            var t = e.source;
            return t === "message_cta_messaging_responsive_source";
          });
          if (me != null) {
            o(
              "SharedSmartDefaultVariables",
            ).setEligibleMessageResponsiveForLogSalesMessageDefault(!0);
            var pe = r(
              "getODAXSmartDefaultDataForSalesFromMessageCTAAndMessagingResponsiveSource",
            )(me);
            if (pe != null) {
              var _e, fe;
              o(
                "AdsSalesMessengerRollbackCohortStoreUtils",
              ).isInSalesMessengerRollbackCohort(
                t,
                (_e = a.promoted_object) == null ? void 0 : _e.page_id,
              ) &&
                o(
                  "SharedSmartDefaultVariables",
                ).setEligibleSalesMessengerRollback(!0);
              var ge = o(
                "AdsSalesMessengerRollbackCohortStoreUtils",
              ).maybeApplyMessengerRollback(
                t,
                (fe = a.promoted_object) == null ? void 0 : fe.page_id,
              );
              if (ge != null) return ge;
            }
            return pe;
          }
          var he = O.find(function (e) {
            var t = e.source;
            return t === "web_ads_source";
          });
          return he != null && r("gkx")("1554") && r("gkx")("7572") ? he : null;
        }
        case r("AdsAPIObjectives").LEAD_GENERATION: {
          var ye = u.lead_gen;
          if (ye == null || ye.length === 0) return null;
          var Ce = o("SharedSmartDefaultVariables").getQADefault(ye);
          if (Ce != null) return Ce;
          var be = ye.find(function (e) {
            var t = e.source;
            return t === "ctmlg";
          });
          return be != null ? be : null;
        }
        case r("AdsAPIObjectives").APP_INSTALLS: {
          var ve = r("AdsInterfacesRouter").get(),
            Se = ve.getTypedParams(),
            Re = Se.conversion_location,
            Le = Se.nav_source,
            Ee = r("castToEnum")(Re, r("AdsPromotedObjectTypes"));
          return Ee != null
            ? {
                conversion_location: Ee,
                source: Le != null ? Le : "in_app_ads_setup",
              }
            : null;
        }
        default:
          return null;
      }
    }
    l.default = s;
  },
  98,
);
