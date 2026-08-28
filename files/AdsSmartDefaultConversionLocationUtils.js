__d(
  "AdsSmartDefaultConversionLocationUtils",
  [
    "$InternalEnum",
    "AdCampaignDestination",
    "AdsAPICampaignGroupRecordUtils",
    "AdsAPIObjectives",
    "AdsAPIOptimizationGoals",
    "AdsApplicationIDs",
    "AdsCallAdsPhoneCallRollbackUtils",
    "AdsCampaignLiveVideoAdsUtils",
    "AdsCampaignRecordAccessors",
    "AdsDefaultPageDataProvider",
    "AdsFrequencyControlGKUtils",
    "AdsInterfacesLogger",
    "AdsLeadGenConversionValueExpressionUtils",
    "AdsLeadGenSmartDefaultUtils",
    "AdsManagerIGLoginUtils",
    "AdsMessagesDefaultDestinationUtils",
    "AdsODAXStoreUtils",
    "AdsODAXUtils",
    "AdsPromotedObjectTypes",
    "AdsSalesMessengerRollbackCohortStoreUtils",
    "AdsSmartDefaultPageUtils",
    "AdsSmartDefaultStore",
    "AdsUEditorCampaignCTXDestinationDefaultedAction",
    "AdsUEditorCampaignCreationSetOmnichannelCreationDefaultDataAction",
    "AdsUEditorCampaignWhatsAppDestinationDefaultedAction",
    "AdsUEditorHostIDs",
    "AdsUEditorMessagingDestinationUtils",
    "CTXAdsSmartDefaultConversionLocationStoreUtils",
    "CallAdsMLDefaultingUtils",
    "ClickToMessageAdoptionPerformanceLongTermHoldout",
    "ClickToMessageAdsUnifiedDefaultingFalcoEvent",
    "ClickToMessageCTMAdoptionFeatureGating",
    "ClickToMessageCTXMDFeatureGating",
    "ClickToWhatsAppAdsDetails",
    "ClickToWhatsAppAdsLoggerUtils",
    "ClickToWhatsAppFeatureGating",
    "IGFAFeatureGating",
    "SharedSmartDefaultVariables",
    "URIInitDataUtil",
    "adsCFCampaignIsNew",
    "adsShouldDefaultCTXFromGuidanceSourceInEngagementUtil",
    "cr:39253",
    "gkx",
    "immutable",
    "vulture",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c = r("immutable").Map(
        ((e = {}),
        (e[(s = r("AdsPromotedObjectTypes")).LEAD_FROM_IG_DIRECT] = (u = r(
          "AdCampaignDestination",
        )).LEAD_FROM_IG_DIRECT),
        (e[s.LEAD_FORM_MESSENGER] = u.LEAD_FORM_MESSENGER),
        (e[s.ON_AD] = u.ON_AD),
        (e[s.VIDEO] = u.ON_VIDEO),
        (e[s.MESSENGER] = u.MESSENGER),
        (e[s.PHONE_CALL] = u.PHONE_CALL),
        (e[s.WHATSAPP] = u.WHATSAPP),
        (e[s.WEBSITE] = u.WEBSITE),
        (e[s.WEBSITE_AND_PHONE_CALL] = u.WEBSITE_AND_PHONE_CALL),
        (e[s.WEBSITE_AND_INSTANT_FORM] = u.WEBSITE_AND_LEAD_FORM),
        (e[s.WEBSITE_AND_MESSAGES] = u.WEBSITE_AND_MESSAGES),
        e),
      ),
      d = n("$InternalEnum")({
        Null: "null",
        WebAdsLinkClicksSource: "web_ads_link_clicks_source",
        MTMLDefaulting: "mtml_defaulting",
        MTMLDefaultingV1: "mtml_defaulting_v1",
        MTMLDefaultingV2: "mtml_defaulting_v2",
        QADefault: "qa_default",
        CallAdsDefault: "call_ads_default",
        DefaultsFromWAApiUsersSource: "defaults_from_wa_api_users_source",
        DefaultsFromWaSource: "defaults_from_wa_source",
        DefaultFromInstagramSource: "default_from_instagram_source",
        DefaultFromIGProfileVisitSource: "default_from_ig_profile_visit_source",
        DefaultFromIGLiveAdsSource: "default_from_ig_live_ads_source",
        AMShellPixelDefault: "am_shell_pixel_default",
        AMNoPixelDefault: "am_no_pixel_default",
      });
    function m(e, t, n, a) {
      var i,
        l,
        s =
          (i = r("AdsDefaultPageDataProvider")()
            .get(t.account_id)
            .getValue()) == null
            ? void 0
            : i.pageID,
        u =
          (l = s != null ? s : a) != null
            ? l
            : o("AdsSmartDefaultPageUtils").getDefaultPageID(e, t, n);
      return u == null
        ? { defaultPageID: u, updatedCampaign: e }
        : {
            defaultPageID: u,
            updatedCampaign: r(
              "AdsCampaignRecordAccessors",
            ).promoted_object.page_id.set(u, e),
          };
    }
    function p(e, t, n, a) {
      var i = c.get(n);
      if (i == null) return null;
      if (
        n === r("AdsPromotedObjectTypes").MESSENGER &&
        a === r("AdCampaignDestination").INSTAGRAM_DIRECT
      )
        return r("AdsCampaignRecordAccessors").destination_type.set(a, e);
      var l = r("AdsCampaignRecordAccessors").destination_type.set(i, e);
      return (
        t.objective === r("AdsAPIObjectives").OUTCOME_LEADS &&
          n === r("AdsPromotedObjectTypes").WEBSITE_AND_PHONE_CALL &&
          o(
            "AdsLeadGenConversionValueExpressionUtils",
          ).isAccountEligibleForLeadGenConversionValueExpression() &&
          (l =
            o("AdsODAXStoreUtils").setCampaignConversionValueExpressionSpec(l)),
        l
      );
    }
    function _(e, t, n, a, i, l) {
      var s = o("SharedSmartDefaultVariables").getSmartDefaultLogData();
      (r("AdsInterfacesLogger").log({
        eventName: "ads_odax_smart_default",
        data: {
          objective: e.objective,
          message: n,
          campaign_id: t,
          source: s == null ? void 0 : s.source,
        },
      }),
        o("AdsUEditorMessagingDestinationUtils").isClickToMessageAdDestination(
          i,
        ) &&
          o("AdsMessagesDefaultDestinationUtils").logDefaultMessageDestination(
            i,
            l,
            e.id,
            t,
            !1,
            o("AdsMessagesDefaultDestinationUtils").DefaultingFactor.CatchAll,
            e.objective,
            o("AdsMessagesDefaultDestinationUtils")
              .DefaultMessageDestinationSource.OdaxSmartDefault,
          ));
    }
    function f(e, t) {
      if (t === r("AdsPromotedObjectTypes").ON_AD) {
        var n;
        r("AdsInterfacesLogger").log({
          eventName: "lead_gen_conversion_event_deselect_instant_form",
          data: ((n = {}), (n.campaign_destination_type = e), n),
        });
      }
    }
    function g(e, t, n, a, i, l, s, u) {
      if (e) {
        var c = r("AdsSmartDefaultStore").get(t.account_id).getValue(),
          d = c == null ? void 0 : c.sales,
          m =
            d == null
              ? void 0
              : d.find(function (e) {
                  var t = e.source;
                  return t === "message_cta_messaging_responsive_source";
                }),
          p =
            d == null
              ? void 0
              : d.find(function (e) {
                  var t = e.source;
                  return t.startsWith("message_ctx_intent_model_source");
                }),
          _ = c == null ? void 0 : c.engagement,
          f =
            _ == null
              ? void 0
              : _.find(function (e) {
                  var t = e.source;
                  return t === "holdout_default";
                }),
          g =
            _ == null
              ? void 0
              : _.find(function (e) {
                  var t = e.source;
                  return t === "ctx_guidance_source";
                });
        if (n === r("AdsAPIObjectives").OUTCOME_SALES) {
          if (
            (m != null &&
              o(
                "SharedSmartDefaultVariables",
              ).getEligibleMessageResponsiveForLogSalesMessageDefault() ===
                !0 &&
              o(
                "ClickToMessageCTMAdoptionFeatureGating",
              ).shouldDefaultMessengerInSalesForMessageCTAMessagingResponsive(
                !0,
              ),
            o(
              "SharedSmartDefaultVariables",
            ).getEligibleMessageCTXIntentModelSourceDefaultSales() &&
              o(
                "ClickToMessageCTXMDFeatureGating",
              ).isSalesMTMLUnifiedConversionLocationDefaultingEnabled(!0),
            o(
              "SharedSmartDefaultVariables",
            ).getEligibleSalesMessengerRollback())
          ) {
            var h,
              y = o(
                "AdsSalesMessengerRollbackCohortStoreUtils",
              ).isInSalesMessengerReDefaultQE(!0);
            r("AdsInterfacesLogger").log({
              eventName: "sales_messenger_redefault_preflight_exposure",
              data:
                ((h = {}),
                (h.ad_account_id = t.account_id),
                (h.campaign_id = s),
                (h.objective = n),
                (h.optimization_goal = i),
                (h.campaign_destination_type = a),
                (h.source = y ? "test" : "control"),
                h),
            });
          }
          if (
            (o(
              "SharedSmartDefaultVariables",
            ).getEligibleCallAdsMLDefaultingSales() &&
              o("CallAdsMLDefaultingUtils").isCallAdsMLDefaultingEnabledSales(
                !0,
              ),
            o(
              "SharedSmartDefaultVariables",
            ).getEligibleIGLiveAdsSourceDefaultSales() &&
              o(
                "AdsCampaignLiveVideoAdsUtils",
              ).shouldDefaultLiveVideoConversionLocation(!0),
            p != null &&
              o(
                "SharedSmartDefaultVariables",
              ).getEligibleMessageCTXIntentModelSourceDefaultSales() === !0)
          ) {
            var C = o(
              "ClickToWhatsAppFeatureGating",
            ).shouldDefaultToCTXForSalesL2(!0);
            C && r("vulture")("HAFuVb5Q-J83dcNeOa3YXLl3h_I=");
          }
        } else if (n === r("AdsAPIObjectives").OUTCOME_ENGAGEMENT)
          (f != null &&
            o("SharedSmartDefaultVariables").getEligibleCTXHoldout() === !0 &&
            o(
              "ClickToMessageAdoptionPerformanceLongTermHoldout",
            ).isUserInLongTermCTXDefaultingHoldout(!0),
            g != null &&
              o(
                "SharedSmartDefaultVariables",
              ).getEligibleCTXGuidanceSourceDefaultEngagement() === !0 &&
              r("adsShouldDefaultCTXFromGuidanceSourceInEngagementUtil")(t, !1),
            o(
              "SharedSmartDefaultVariables",
            ).getEligibleMessageCTXIntentModelSourceDefaultEngagement() &&
              o(
                "ClickToMessageCTXMDFeatureGating",
              ).isEngagementMTMLUnifiedConversionLocationDefaultingEnabled(!0),
            o(
              "SharedSmartDefaultVariables",
            ).getEligibleIGLiveAdsSourceDefaultEngagement() &&
              o(
                "AdsCampaignLiveVideoAdsUtils",
              ).shouldDefaultLiveVideoConversionLocation(!0),
            o(
              "SharedSmartDefaultVariables",
            ).getEligibleCallAdsMLDefaultingEngagement() &&
              o(
                "CallAdsMLDefaultingUtils",
              ).isCallAdsMLDefaultingEnabledEngagement(!0));
        else if (n === r("AdsAPIObjectives").LINK_CLICKS) {
          var b,
            v = c == null ? void 0 : c.traffic;
          (o(
            "SharedSmartDefaultVariables",
          ).getEligibleMessageCTXIntentModelSourceDefaultTraffic() &&
            o(
              "ClickToMessageCTXMDFeatureGating",
            ).isTrafficMTMLUnifiedConversionLocationDefaultingEnabled(!0),
            o(
              "SharedSmartDefaultVariables",
            ).getEligibleCallAdsMLDefaultingTraffic() &&
              o("CallAdsMLDefaultingUtils").isCallAdsMLDefaultingEnabledTraffic(
                !0,
              ),
            r("AdsInterfacesLogger").log({
              eventName:
                "unified_conversion_location_defaulting_factor_at_exposure_point",
              data:
                ((b = {}),
                (b.new_value = v),
                (b.objective = n),
                (b.ad_account_id = t.account_id),
                (b.page_id = l),
                b),
            }));
        } else
          n === r("AdsAPIObjectives").OUTCOME_AWARENESS &&
            o(
              "SharedSmartDefaultVariables",
            ).getEligibleMessageCTXIntentModelSourceDefaultAwareness() &&
            o(
              "ClickToMessageCTXMDFeatureGating",
            ).isAwarenessMTMLUnifiedConversionLocationDefaultingEnabled(!0);
      }
    }
    function h(e, t, n, r, a, i) {
      e &&
        (o("SharedSmartDefaultVariables").getEligibleSalesPhoneCallRollback() ||
          o(
            "SharedSmartDefaultVariables",
          ).getEligibleLeadsPhoneCallRollback()) &&
        o(
          "AdsCallAdsPhoneCallRollbackUtils",
        ).logCallAdsReDefaultPreflightExposure(t, n, r, a, i);
    }
    function y(e, t) {
      if (e) {
        var n = r("AdsSmartDefaultStore").get(t.account_id).getValue(),
          a = n == null ? void 0 : n.traffic,
          i =
            a == null
              ? void 0
              : a.find(function (e) {
                  var t = e.source;
                  return t === "ig_live_ads_source";
                });
        i != null &&
          o(
            "SharedSmartDefaultVariables",
          ).getEligibleIGLiveAdsSourceDefaultTraffic() === !0 &&
          o(
            "AdsCampaignLiveVideoAdsUtils",
          ).shouldDefaultLiveVideoConversionLocation(!0);
        var l = n == null ? void 0 : n.sales,
          s =
            l == null
              ? void 0
              : l.find(function (e) {
                  var t = e.source;
                  return t === "ig_live_ads_source";
                });
        s != null &&
          o(
            "SharedSmartDefaultVariables",
          ).getEligibleIGLiveAdsSourceDefaultSales() === !0 &&
          o(
            "AdsCampaignLiveVideoAdsUtils",
          ).shouldDefaultLiveVideoConversionLocation(!0);
      }
    }
    function C(e, t) {
      var n;
      if (e) {
        var a = r("AdsSmartDefaultStore").get(t.account_id).getValue(),
          i = a == null ? void 0 : a.traffic,
          l =
            i == null
              ? void 0
              : i.find(function (e) {
                  var t = e.source;
                  return t === "ig_profile_visit_source";
                });
        (l != null &&
          o(
            "SharedSmartDefaultVariables",
          ).getEligibleIGProfileVisitSourceDefaultTraffic() === !0 &&
          o("IGFAFeatureGating").isIGProfileVisitDefaultingEnabled(!0),
          r("AdsInterfacesLogger").log({
            eventName:
              "unified_conversion_location_defaulting_factor_at_exposure_point",
            data:
              ((n = {}),
              (n.new_value =
                l != null &&
                o(
                  "SharedSmartDefaultVariables",
                ).getEligibleIGProfileVisitSourceDefaultTraffic() === !0
                  ? d.DefaultFromIGProfileVisitSource
                  : null),
              (n.objective = r("AdsAPIObjectives").LINK_CLICKS),
              (n.ad_account_id = t.account_id),
              n),
          }));
      }
    }
    function b(e, t, n, o) {
      var a;
      r("AdsInterfacesLogger").log({
        eventName: "unified_conversion_location_defaulting_factor",
        data:
          ((a = {}),
          (a.new_value = e),
          (a.old_value = t),
          (a.objective = n),
          (a.ad_account_id = o),
          a),
      });
    }
    function v(e, t, n, a, l) {
      if (e) {
        var s, u, c, d;
        (o(
          "SharedSmartDefaultVariables",
        ).getLastObjectiveEligibleForWhatsAppDefault() === l &&
          (o(
            "ClickToWhatsAppAdsLoggerUtils",
          ).logClickToWhatsAppAdsUnifiedEventDetails(
            new (r("ClickToWhatsAppAdsDetails"))({
              adAccountID: t.account_id,
              appID: r("AdsApplicationIDs").ADS_POWER_EDITOR,
              productFlow: "quick_create_ads_manager",
              objective: o(
                "ClickToWhatsAppAdsLoggerUtils",
              ).getAdproObjectiveFromApiObjective(l),
              event: "default_to_whatsapp_destination",
            }),
          ),
          r("ClickToMessageAdsUnifiedDefaultingFalcoEvent").log(function () {
            return {
              event: "default_to_whatsapp_destination",
              objective: l,
              ad_account_id: t.account_id,
            };
          })),
          ((s = o("SharedSmartDefaultVariables").getSmartDefaultLogData()) ==
          null
            ? void 0
            : s.source) === "omnichannel_default" &&
            r(
              "AdsUEditorCampaignCreationSetOmnichannelCreationDefaultDataAction",
            ).dispatch(
              {
                hostID: r("AdsUEditorHostIDs").CREATION,
                defaultedCampaignIDs: [a],
              },
              {
                line: "572",
                module: "AdsSmartDefaultConversionLocationUtils.js",
                moduleID: i.id,
              },
            ),
          (u = o("SharedSmartDefaultVariables").getSmartDefaultLogData()) !=
            null &&
            (u = u.source) != null &&
            u.startsWith("message_ctx_intent_model_source") &&
            r("AdsUEditorCampaignCTXDestinationDefaultedAction").dispatch(
              { hostID: r("AdsUEditorHostIDs").EDITING, campaignIDs: [a] },
              {
                line: "584",
                module: "AdsSmartDefaultConversionLocationUtils.js",
                moduleID: i.id,
              },
            ),
          n === r("AdsPromotedObjectTypes").WHATSAPP &&
            (((c = o("SharedSmartDefaultVariables").getSmartDefaultLogData()) ==
            null
              ? void 0
              : c.source) === "whatsapp_source" ||
              ((d = o(
                "SharedSmartDefaultVariables",
              ).getSmartDefaultLogData()) == null
                ? void 0
                : d.source) === "ctwa_leads_defaulting") &&
            r("AdsUEditorCampaignWhatsAppDestinationDefaultedAction").dispatch(
              { hostID: r("AdsUEditorHostIDs").EDITING, campaignIDs: [a] },
              {
                line: "594",
                module: "AdsSmartDefaultConversionLocationUtils.js",
                moduleID: i.id,
              },
            ));
      }
    }
    function S(e, t, a) {
      var i, l, s;
      if (
        !r("adsCFCampaignIsNew")(e) ||
        o("AdsODAXUtils").isODAXSalesCatalogCampaignGroup(t) ||
        r("gkx")("17913")
      )
        return e;
      var u = o("URIInitDataUtil").getDefaultDestination();
      if (
        u === r("AdCampaignDestination").FACEBOOK_PAGE ||
        u === r("AdCampaignDestination").INSTAGRAM_PROFILE_AND_FACEBOOK_PAGE
      )
        return e;
      if (o("AdsAPICampaignGroupRecordUtils").isReachFrequency(t))
        return t.objective === r("AdsAPIObjectives").OUTCOME_ENGAGEMENT
          ? r("AdsCampaignRecordAccessors").destination_type.set(
              r("AdCampaignDestination").ON_VIDEO,
              e,
            )
          : e;
      if (
        t.objective === r("AdsAPIObjectives").OUTCOME_ENGAGEMENT &&
        t.frequency_control_specs != null &&
        t.frequency_control_specs.size > 0 &&
        o(
          "AdsFrequencyControlGKUtils",
        ).isAccountEligibleForTargetFrequencyAuctionCBOWriteExperience()
      )
        return r("AdsCampaignRecordAccessors").destination_type.set(
          r("AdCampaignDestination").ON_VIDEO,
          e,
        );
      if (t.objective === r("AdsAPIObjectives").OUTCOME_LEADS) {
        var d = o("AdsLeadGenSmartDefaultUtils").getDefaultFromPfrSource();
        if (d != null && c.has(d.conversion_location))
          return r("AdsCampaignRecordAccessors").destination_type.set(
            c.get(d.conversion_location),
            e,
          );
      }
      var _ = o("AdsSmartDefaultPageUtils").getDefaultData(a, t);
      if (
        (o("SharedSmartDefaultVariables").setSmartDefaultLogData({
          source: (i = _ == null ? void 0 : _.source) != null ? i : "loading",
          newCampaignCFID: e.id,
          defaultCommerceProductSetID:
            _ == null ? void 0 : _.default_commerce_product_set_id,
        }),
        _ == null)
      )
        return e;
      r("AdsInterfacesLogger").log({
        eventName: "cl_defaulting_exposed",
        data:
          ((l = {}),
          (l.new_value = _.conversion_location),
          (l.old_value = _.source),
          (l.objective = t.objective),
          (l.campaign_id = e.id),
          l),
      });
      var f = o("AdsManagerIGLoginUtils").getIsIGLogin(a)
        ? r("AdCampaignDestination").INSTAGRAM_DIRECT
        : r("AdCampaignDestination").MESSENGER;
      if (
        t.objective === r("AdsAPIObjectives").OUTCOME_ENGAGEMENT &&
        _.conversion_location === r("AdsPromotedObjectTypes").MESSENGER &&
        _.source === "ctx_upsell_source"
      ) {
        var g = _.default_page_id,
          h = r("AdsCampaignRecordAccessors").destination_type.set(f, e);
        return (
          g != null &&
            (h = r("AdsCampaignRecordAccessors").promoted_object.page_id.set(
              g,
              h,
            )),
          h
        );
      }
      if (
        _.source.startsWith("message_ctx_intent_model_source") &&
        (_.conversion_location === r("AdsPromotedObjectTypes").MESSENGER ||
          _.conversion_location === r("AdsPromotedObjectTypes").WHATSAPP ||
          _.conversion_location === r("AdsPromotedObjectTypes").INSTAGRAM)
      ) {
        var y,
          C,
          b = e,
          v = _.source.substring(32).split("_"),
          S =
            (y = r("AdsDefaultPageDataProvider")()
              .get(a.account_id)
              .getValue()) == null
              ? void 0
              : y.pageID;
        (S == null &&
          (S = o("AdsSmartDefaultPageUtils").getDefaultPageID(e, a, t)),
          S != null &&
            (b = r("AdsCampaignRecordAccessors").promoted_object.page_id.set(
              S,
              b,
            )));
        var R = e.campaign_creation_source === "CREATION_PACKAGE",
          L = o("AdsODAXStoreUtils").getMessagesMultiDestination(
            a,
            t.objective,
            _.conversion_location,
            S,
            e.optimization_goal,
            R,
          ),
          E = o(
            "AdsMessagesDefaultDestinationUtils",
          ).getDefaultedDestinationFromAdCampaignDestinationType(L),
          k = L;
        if (
          o(
            "AdsUEditorMessagingDestinationUtils",
          ).isClickToMessageAdDestination(L)
        ) {
          var I = {
            ctm: E.ctm && v.includes("ctm"),
            ctwa: E.ctwa && v.includes("ctwa"),
            ctd: E.ctd && v.includes("ctd"),
          };
          k = o(
            "AdsMessagesDefaultDestinationUtils",
          ).getDefaultMessageDestination(I.ctm, I.ctwa, I.ctd);
        }
        return (
          r("AdsInterfacesLogger").log({
            eventName: "ctx_default_conversion_location",
            data:
              ((C = {}),
              (C.campaign_destination_type = k),
              (C.new_value = _.conversion_location),
              (C.source = _.source),
              (C.objective = t.objective),
              (C.page_id = S),
              C),
          }),
          r("AdsCampaignRecordAccessors").destination_type.set(k, b)
        );
      }
      if (
        (t.objective === r("AdsAPIObjectives").OUTCOME_ENGAGEMENT &&
          _.conversion_location === r("AdsPromotedObjectTypes").MESSENGER) ||
        (t.objective === r("AdsAPIObjectives").OUTCOME_SALES &&
          _.conversion_location === r("AdsPromotedObjectTypes").MESSENGER) ||
        (t.objective === r("AdsAPIObjectives").LINK_CLICKS &&
          (_.conversion_location === r("AdsPromotedObjectTypes").MESSENGER ||
            _.conversion_location === r("AdsPromotedObjectTypes").WHATSAPP ||
            _.conversion_location === r("AdsPromotedObjectTypes").INSTAGRAM) &&
          o("AdsODAXUtils").isODAXTrafficCampaignGroup(
            t.is_odax_campaign_group,
            t.objective,
          ))
      ) {
        var T,
          D = m(e, a, t, _.default_page_id),
          x = D.defaultPageID,
          $ = D.updatedCampaign,
          P = e.campaign_creation_source === "CREATION_PACKAGE",
          N = o("AdsODAXStoreUtils").getMessagesMultiDestination(
            a,
            t.objective,
            _.conversion_location,
            x,
            e.optimization_goal,
            P,
          );
        if (
          t.objective === r("AdsAPIObjectives").OUTCOME_ENGAGEMENT &&
          _.source === "ctx_mtml_defaulting_conversion_universe"
        ) {
          var M = o(
            "CTXAdsSmartDefaultConversionLocationStoreUtils",
          ).getCTXMTMLDestinationDefaultDataForEngagement(a);
          M != null &&
            o(
              "ClickToMessageCTXMDFeatureGating",
            ).isEngagementMTMLDestinationDefaultingEnabled(!1) &&
            (N = M);
        }
        var w = r("gkx")("21036");
        if (w) {
          var A;
          r("AdsInterfacesLogger").log({
            eventName:
              "ctx_page_default_to_highest_spend_group_page_conversion_location",
            data:
              ((A = {}), (A.page_id = x), (A.ad_account_id = a.account_id), A),
          });
        }
        return (
          r("AdsInterfacesLogger").log({
            eventName: "ctx_default_conversion_location",
            data:
              ((T = {}),
              (T.campaign_destination_type = N),
              (T.new_value = _.conversion_location),
              (T.source = _.source),
              (T.objective = t.objective),
              (T.page_id = x),
              T),
          }),
          r("AdsCampaignRecordAccessors").destination_type.set(N, $)
        );
      }
      if (_.conversion_location === r("AdsPromotedObjectTypes").MOBILE_APP) {
        var F = r(
          "AdsCampaignRecordAccessors",
        ).promoted_object.application_id.set(null, e);
        return (
          (F = r(
            "AdsCampaignRecordAccessors",
          ).promoted_object.object_store_url.set(null, F)),
          F
        );
      }
      if (_.conversion_location === r("AdsPromotedObjectTypes").WEB_AND_APP)
        return r(
          "AdsCampaignRecordAccessors",
        ).promoted_object.omnichannel_object.pixel.set(
          r("immutable").List(),
          e,
        );
      if (
        _.conversion_location ===
        r("AdsPromotedObjectTypes").WEBSITE_AND_IN_STORE
      ) {
        var O = r("immutable")
          .Map()
          .set("offline_conversion_data_set_id", "")
          .set("custom_event_type", "PURCHASE");
        return r(
          "AdsCampaignRecordAccessors",
        ).promoted_object.omnichannel_object.offline.set(
          r("immutable").List([O]),
          e,
        );
      }
      if (
        _.conversion_location ===
        r("AdsPromotedObjectTypes").IG_PROFILE_AND_FB_PAGE
      ) {
        var B,
          W,
          q,
          U,
          V = (U = r("AdsCampaignRecordAccessors")).destination_type.set(
            r("AdCampaignDestination").INSTAGRAM_PROFILE_AND_FACEBOOK_PAGE,
            e,
          );
        ((V = U.optimization_goal.set(
          r("AdsAPIOptimizationGoals").PROFILE_VISIT,
          V,
        )),
          (V = U.is_dynamic_creative_optimization.set(!1, V)),
          (V = U.is_dynamic_creative.set(!1, V)));
        var H =
          (B =
            (W = _.default_page_id) != null
              ? W
              : (q = r("AdsDefaultPageDataProvider")()
                    .get(a.account_id)
                    .getValue()) == null
                ? void 0
                : q.pageID) != null
            ? B
            : o("AdsSmartDefaultPageUtils").getDefaultPageID(e, a, t);
        return (
          H != null &&
            (V = r("AdsCampaignRecordAccessors").promoted_object.page_id.set(
              H,
              V,
            )),
          V
        );
      }
      if (_.conversion_location === r("AdsPromotedObjectTypes").LIVE_VIDEO) {
        n("cr:39253") == null ||
          n("cr:39253").logIgLiveVideoAdsEvents(
            "ig_lva_conversion_location_defaulting_set_default",
            a.account_id,
            { objective: t.objective },
          );
        var G = r("AdsCampaignRecordAccessors").destination_type.set(
          r("AdCampaignDestination").INSTAGRAM_LIVE,
          e,
        );
        return G;
      }
      return (s = p(e, t, _.conversion_location, f)) != null ? s : e;
    }
    ((l.ConversionLocationDefaultingFactorEnum = d),
      (l.logSmartDefault = _),
      (l.logSwitchOutOfInstantForm = f),
      (l.maybeLogExposureForCTXDefaulting = g),
      (l.maybeLogExposureForDefaultRelevancyRollback = h),
      (l.maybeLogExposureForIGLiveVideoDefaulting = y),
      (l.maybeLogExposureForIGPVDefaulting = C),
      (l.logDefaultConversionLocationEvent = b),
      (l.maybeLogExposureAndMarkWADefaulted = v),
      (l.setSmartDefaultingField = S));
  },
  98,
);
