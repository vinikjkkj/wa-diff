__d(
  "AdsMessagesDefaultDestinationUtils",
  [
    "$InternalEnum",
    "AdCampaignDestination",
    "AdsAPIObjectives",
    "AdsAccountUtils",
    "AdsCampaignBizAIUtils",
    "AdsInterfacesLogger",
    "AdsInterfacesRouter",
    "AdsLoadStateUtils_LEGACY",
    "AdsPageUtils",
    "AdsPromotedObjectTypes",
    "AdsUnifiedCreationWhatsAppDropdownMultipleNumberUtils",
    "CTDAdsOptimizationStoreUtils",
    "ClickToMessageAdoptionPerformanceLongTermHoldout",
    "ClickToMessageAdsUnifiedDefaultingFalcoEvent",
    "ClickToMessageBusinessRuleUtils",
    "ClickToMessageCTXMDFeatureGating",
    "CtxDfoEngagementRemovalNoticeUtils",
    "FBLogger",
    "LoadObject",
    "ODS",
    "igAccessAdsManagerUtils",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = n("$InternalEnum").Mirrored([
        "OdaxSmartDefault",
        "DestinationDefaultingSelector",
      ]),
      u = n("$InternalEnum")({
        RiskyAdvertiser: "risky_advertiser",
        EpdAccount: "epd_account",
        CtmDefaultingOdaxPhase2: "ctm_defaulting_odax_phase_2",
        CtdSdMDExpansion: "ctd_sd_md_expansion",
        HighIntentCtd: "high_intent_ctd",
        HighIntentCtdCtwa: "high_intent_ctd_ctwa",
        AccountConnected: "account_connected",
        StickyMLDestination: "sticky_ml_destination",
        TrafficBusinessWA: "traffic_business_wa",
        TrafficIG: "traffic_ig",
        FallBackPage: "fallback_page",
        NoConnectedIgOrWa: "no_connected_ig_or_wa",
        BizAIAgent: "biz_ai_agent",
        BizAIAgentWhatsApp: "biz_ai_agent_whatsapp",
        CTWADogfood: "ctwa_dogfood",
      }),
      c = n("$InternalEnum").Mirrored([
        "LongTermHoldout",
        "NoConnectedIgOrWa",
        "NoDefaultOrFallbackPage",
        "FallbackPage",
        "BizAIAgent",
        "BizAIAgentWhatsApp",
        "RiskyAdvertiser",
        "EpdAccount",
        "CtmDefaultingOdaxPhase2",
        "HighIntentForCTD",
        "HighIntentForPurchaseOptimizationAdvertiser",
        "CTDSDMDExpansionAdvertiser",
        "StickyMLDestination",
        "PagelessAdvertiser",
        "PartnerAppConnector",
        "CTWADogfoodSkipAutoDest",
        "CatchAll",
      ]);
    function d(e) {
      var t = e != null,
        n = t
          ? r("AdCampaignDestination").INSTAGRAM_DIRECT
          : r("AdCampaignDestination").UNDEFINED;
      return { defaultDestination: n, factor: c.PagelessAdvertiser };
    }
    function m(e, t, n, a, i, l, s) {
      if (!e) return !1;
      if (t) return !0;
      if (a != null && a.length > 0) {
        var u = a.some(function (e) {
          return o(
            "AdsUnifiedCreationWhatsAppDropdownMultipleNumberUtils",
          ).getIsWhatsAppNumberPlatformTypeCloudAPI(e);
        });
        if (u) {
          if (n === !0 || s === r("AdsAPIObjectives").OUTCOME_ENGAGEMENT)
            return !0;
        } else return !0;
      }
      return !!(
        (a == null || a.length === 0) &&
        l !== !0 &&
        o("ClickToMessageBusinessRuleUtils").eligibleForCTWADaisyChainFromIG(i)
      );
    }
    function p(t, n, a, i, l, s, d, p, g) {
      var y = h(t),
        b = o(
          "ClickToMessageCTXMDFeatureGating",
        ).shouldCheckWhatsAppNumberType(),
        v = o("AdsPageUtils").hasWhatsAppBusinessNumber(n, b),
        S = m(y, v, d, p, g, n.has_whatsapp_number, i);
      if (!a && S !== !0) {
        (e || (e = o("ODS"))).bumpEntityKey(
          1967,
          "ctwa",
          "bizai_default_on.waterfall.no_ig_wa_exit",
        );
        var R = r("AdCampaignDestination").MESSENGER;
        return (
          n.is_instagram_account_backed_page === !0 &&
            o("igAccessAdsManagerUtils").isIGAccessParityEnabled() &&
            (R = r("AdCampaignDestination").INSTAGRAM_DIRECT),
          _(u.NoConnectedIgOrWa, l, R, i, n.id),
          { defaultDestination: R, factor: c.NoConnectedIgOrWa }
        );
      }
      if (o("AdsCampaignBizAIUtils").shouldDefaultToMessengerForBizAI(i, n, !0))
        return (
          (e || (e = o("ODS"))).bumpEntityKey(
            1967,
            "ctwa",
            "bizai_default_on.waterfall.messenger_intercepted",
          ),
          _(u.BizAIAgent, l, r("AdCampaignDestination").MESSENGER, i, n.id),
          {
            defaultDestination: r("AdCampaignDestination").MESSENGER,
            factor: c.BizAIAgent,
          }
        );
      if (o("AdsCampaignBizAIUtils").shouldDefaultToWhatsAppForBizAI(i, n, !0))
        return (
          _(
            u.BizAIAgentWhatsApp,
            l,
            r("AdCampaignDestination").WHATSAPP,
            i,
            n.id,
          ),
          {
            defaultDestination: r("AdCampaignDestination").WHATSAPP,
            factor: c.BizAIAgentWhatsApp,
          }
        );
      var L =
          n.ctx_traffic_high_intent_default_messsage_destination_with_mtml_v4,
        E = r("AdsAccountUtils").hasCapability(
          t,
          "CLICK_TO_MESSAGE_RISKY_ADVERTISER",
        );
      if (E) {
        var k = C(!0, !1, a);
        return (
          _(u.RiskyAdvertiser, l, k, i, n.id),
          { defaultDestination: k, factor: c.RiskyAdvertiser }
        );
      }
      var I = o(
        "ClickToMessageAdoptionPerformanceLongTermHoldout",
      ).isAccountInEpdJurisdiction();
      if (I || n.is_messaging_light_switch_enabled === !0) {
        var T = C(!0, !1, a);
        return (
          _(u.EpdAccount, l, T, i, n.id),
          { defaultDestination: T, factor: c.EpdAccount }
        );
      }
      if (
        i === r("AdsAPIObjectives").OUTCOME_ENGAGEMENT &&
        o("CtxDfoEngagementRemovalNoticeUtils").isInPhase1QEUniverse(
          o("CtxDfoEngagementRemovalNoticeUtils").OdaxCtxDfoRemovalQEEntrypoint
            .MESSENGER_SINGLE_DESTINATION_DEFAULTING,
        )
      )
        return (
          _(
            u.CtmDefaultingOdaxPhase2,
            l,
            r("AdCampaignDestination").MESSENGER,
            i,
            n.id,
          ),
          {
            defaultDestination: r("AdCampaignDestination").MESSENGER,
            factor: c.CtmDefaultingOdaxPhase2,
          }
        );
      if (
        S === !0 &&
        o("ClickToMessageCTXMDFeatureGating").shouldSkipAutoDestForCTWADogfood()
      )
        return {
          defaultDestination: r("AdCampaignDestination").WHATSAPP,
          factor: c.CTWADogfoodSkipAutoDest,
        };
      if (
        a &&
        o(
          "CTDAdsOptimizationStoreUtils",
        ).getIsEligibleForCTDSDDefaultingBasedOnPurchases(n)
      )
        return (
          _(
            u.HighIntentCtd,
            l,
            r("AdCampaignDestination").INSTAGRAM_DIRECT,
            i,
            n.id,
          ),
          {
            defaultDestination: r("AdCampaignDestination").INSTAGRAM_DIRECT,
            factor: c.HighIntentForPurchaseOptimizationAdvertiser,
          }
        );
      var D =
        a &&
        o(
          "CTDAdsOptimizationStoreUtils",
        ).getIsEligibleForCTDSDDefaultingMDExpansion(n);
      if (D)
        return (
          _(
            u.CtdSdMDExpansion,
            l,
            r("AdCampaignDestination").INSTAGRAM_DIRECT,
            i,
            n.id,
          ),
          {
            defaultDestination: r("AdCampaignDestination").INSTAGRAM_DIRECT,
            factor: c.CTDSDMDExpansionAdvertiser,
          }
        );
      var x = null;
      if (
        (i === r("AdsAPIObjectives").LINK_CLICKS &&
          !o(
            "ClickToMessageCTXMDFeatureGating",
          ).enableTrafficObjectiveCatchAllDefaulting(!0) &&
          (x = L),
        x != null && x !== r("AdCampaignDestination").UNDEFINED)
      )
        switch ((f("mtml_test", l, x, i, n.id), x)) {
          case r("AdCampaignDestination").INSTAGRAM_DIRECT:
            return {
              defaultDestination: "INSTAGRAM_DIRECT",
              factor: c.StickyMLDestination,
            };
          case r("AdCampaignDestination").WHATSAPP:
            return {
              defaultDestination: "WHATSAPP",
              factor: c.StickyMLDestination,
            };
          case r("AdCampaignDestination").MESSENGER:
            return {
              defaultDestination: "MESSENGER",
              factor: c.StickyMLDestination,
            };
          case r("AdCampaignDestination").MESSAGING_INSTAGRAM_DIRECT_MESSENGER:
            return {
              defaultDestination: "MESSAGING_INSTAGRAM_DIRECT_MESSENGER",
              factor: c.StickyMLDestination,
            };
          case r("AdCampaignDestination").MESSAGING_INSTAGRAM_DIRECT_WHATSAPP:
            return {
              defaultDestination: "MESSAGING_INSTAGRAM_DIRECT_WHATSAPP",
              factor: c.StickyMLDestination,
            };
          case r("AdCampaignDestination").MESSAGING_MESSENGER_WHATSAPP:
            return {
              defaultDestination: "MESSAGING_MESSENGER_WHATSAPP",
              factor: c.StickyMLDestination,
            };
          case r("AdCampaignDestination")
            .MESSAGING_INSTAGRAM_DIRECT_MESSENGER_WHATSAPP:
            return {
              defaultDestination:
                "MESSAGING_INSTAGRAM_DIRECT_MESSENGER_WHATSAPP",
              factor: c.StickyMLDestination,
            };
        }
      var $ = C(!0, S === !0, a);
      return (
        _(u.AccountConnected, l, $, i, n.id),
        { defaultDestination: $, factor: c.CatchAll }
      );
    }
    function _(e, t, n, o, a) {
      var i,
        l =
          ((i = {}),
          (i.campaign_destination_type = n),
          (i.new_value = e),
          (i.old_value = t),
          (i.objective = o),
          (i.page_id = a),
          i);
      r("AdsInterfacesLogger").log({
        eventName: "ctx_default_conversion_location_advertiser_type",
        data: l,
      });
    }
    function f(e, t, n, o, a) {
      var i;
      r("AdsInterfacesLogger").log({
        eventName: "ctx_default_conversion_location_advertiser_type",
        data:
          ((i = {}),
          (i.campaign_destination_type = n),
          (i.new_value = e),
          (i.old_value = t),
          (i.objective = o),
          (i.page_id = a),
          i),
      });
    }
    function g(e) {
      var t,
        n = new Set(e),
        o = [
          {
            name: "has_wa_biz_number",
            destination: (t = r("AdCampaignDestination")).WHATSAPP,
          },
          { name: "is_igd_mamba", destination: t.INSTAGRAM_DIRECT },
          { name: "is_wacta", destination: t.WHATSAPP },
          { name: "has_ctx_ads_in_past_28_days", destination: t.MESSENGER },
          { name: "is_smcta", destination: t.MESSENGER },
          { name: "has_ig_linked", destination: t.INSTAGRAM_DIRECT },
          { name: "is_responsive_75_on_messenger", destination: t.MESSENGER },
        ],
        a = o.find(function (e) {
          return n.has(e.name);
        });
      return a == null ? void 0 : a.destination;
    }
    function h(e) {
      var t = r("AdsAccountUtils").hasCapability(e, "WHATSAPP_DESTINATION_ADS"),
        n = r("AdsAccountUtils").hasCapability(
          e,
          "CTW_ADS_DISABLED_FOR_AD_ACCOUNT",
        );
      return t && !n;
    }
    function y(e, t) {
      var n;
      if (o("AdsLoadStateUtils_LEGACY").isLoading(t))
        return r("LoadObject").loading({ creatorModuleID: i.id });
      var a = (n = t.instagram_accounts) == null ? void 0 : n.data[0];
      return (a == null ? void 0 : a.is_published) !== !0
        ? r("LoadObject").withValue(!1, { creatorModuleID: i.id })
        : r("LoadObject").withValue(!0, { creatorModuleID: i.id });
    }
    function C(e, t, n) {
      var o;
      return (
        e && t && n
          ? (o = r(
              "AdCampaignDestination",
            ).MESSAGING_INSTAGRAM_DIRECT_MESSENGER_WHATSAPP)
          : e && t
            ? (o = r("AdCampaignDestination").MESSAGING_MESSENGER_WHATSAPP)
            : e && n
              ? (o = r(
                  "AdCampaignDestination",
                ).MESSAGING_INSTAGRAM_DIRECT_MESSENGER)
              : t && n
                ? (o = r(
                    "AdCampaignDestination",
                  ).MESSAGING_INSTAGRAM_DIRECT_WHATSAPP)
                : e
                  ? (o = r("AdCampaignDestination").MESSENGER)
                  : t
                    ? (o = r("AdCampaignDestination").WHATSAPP)
                    : n
                      ? (o = r("AdCampaignDestination").INSTAGRAM_DIRECT)
                      : (r("FBLogger")("unified_creation").warn(
                          "No destinations defaulted. Fall back to Messenger.",
                        ),
                        (o = r("AdCampaignDestination").MESSENGER)),
        o
      );
    }
    function b(e) {
      switch (e) {
        case r("AdCampaignDestination").MESSENGER:
          return { ctd: !1, ctm: !0, ctwa: !1 };
        case r("AdCampaignDestination").WHATSAPP:
          return { ctd: !1, ctm: !1, ctwa: !0 };
        case r("AdCampaignDestination").INSTAGRAM_DIRECT:
          return { ctd: !0, ctm: !1, ctwa: !1 };
        case r("AdCampaignDestination").MESSAGING_MESSENGER_WHATSAPP:
          return { ctd: !1, ctm: !0, ctwa: !0 };
        case r("AdCampaignDestination").MESSAGING_INSTAGRAM_DIRECT_MESSENGER:
          return { ctd: !0, ctm: !0, ctwa: !1 };
        case r("AdCampaignDestination").MESSAGING_INSTAGRAM_DIRECT_WHATSAPP:
          return { ctd: !0, ctm: !1, ctwa: !0 };
        case r("AdCampaignDestination")
          .MESSAGING_INSTAGRAM_DIRECT_MESSENGER_WHATSAPP:
          return { ctd: !0, ctm: !0, ctwa: !0 };
        default:
          return { ctd: !1, ctm: !1, ctwa: !1 };
      }
    }
    function v(e, t, n, o, a, i, l, s) {
      (r("FBLogger")("unified_creation").info(
        "Default message destination: %s, in objective: %s, from source: %s",
        e,
        l,
        s,
      ),
        r("ClickToMessageAdsUnifiedDefaultingFalcoEvent").log(function () {
          return {
            event: "unified_creation_default_message_destination",
            campaign_group_id: n,
            campaign_id: o,
            page_id: t,
            objective: l,
            extra_data: {
              new_value: e != null ? e : "",
              defaulting_factor: i,
              is_fallback_page: a.toString(),
              source: s,
            },
          };
        }));
    }
    function S() {
      var e = r("AdsInterfacesRouter").get(),
        t = e.getParams(),
        n = t.creative_page_id,
        o = t.nav_entry_point;
      return o === "ctx_high_intent_am_upsell"
        ? {
            conversion_location: r("AdsPromotedObjectTypes").MESSENGER,
            default_page_id: n + "",
            source: "ctx_upsell_source",
          }
        : null;
    }
    function R() {
      var e = r("AdsInterfacesRouter").get(),
        t = e.getParams(),
        n = t.creative_page_id,
        o = t.nav_entry_point;
      return o === "ctmlg_high_ads_intent_upsell"
        ? {
            conversion_location: r("AdsPromotedObjectTypes").MESSENGER,
            default_page_id: n + "",
            source: "ctmlg_upsell_source",
          }
        : null;
    }
    function L() {
      var e = r("AdsInterfacesRouter").get(),
        t = e.getParams(),
        n = t.creative_page_id,
        o = t.nav_entry_point;
      if (
        o === "ad_4_ad_am_landing_entrypoint" ||
        o === "wam_ctwa_feature_setup_am_landing_entrypoint" ||
        o === "wam_ctwa_sidebar_create_ads_entrypoint"
      ) {
        var a =
          o === "wam_ctwa_sidebar_create_ads_entrypoint"
            ? "wam_ctwa_sidebar"
            : "ctwa_ad_upsell_source";
        return {
          conversion_location: r("AdsPromotedObjectTypes").WHATSAPP,
          default_page_id: n != null ? n + "" : "",
          source: a,
        };
      }
      return null;
    }
    function E() {
      var e = r("AdsInterfacesRouter").get(),
        t = e.getParams(),
        n = t.creative_page_id,
        o = t.nav_entry_point,
        a = null;
      return (
        o === "ad_4_ad_wtwa_am_landing_entrypoint"
          ? (a = "wtwa_upsell_am_landing")
          : o === "wtwa_wam_upsell_am_landing_entrypoint"
            ? (a = "wtwa_wam_upsell_am_landing")
            : o === "aymt_wtwa_email_upsell_am_landing_entrypoint" &&
              (a = "aymt_wtwa_email_upsell_am_landing"),
        a == null
          ? null
          : {
              conversion_location: r("AdsPromotedObjectTypes").PIXEL,
              default_page_id: n + "",
              source: a,
            }
      );
    }
    function k() {
      var e = r("AdsInterfacesRouter").get(),
        t = e.getParams(),
        n = t.creative_page_id,
        o = t.nav_entry_point;
      if (
        o === "wtm_ad4ad_am_landing_entrypoint" ||
        o === "wtx_metrics_ad4ad_wtm_am_landing_entrypoint" ||
        o === "wtm_aymt_coldstart_am_landing_entrypoint" ||
        o === "wtx_create_ad_tofu_wtm_am_landing_entrypoint" ||
        o === "wtx_create_ad_tofu_wtm_no_insight_am_landing_entrypoint"
      ) {
        var a;
        return (
          o === "wtm_ad4ad_am_landing_entrypoint"
            ? (a = "wtm_ad4ad_am_landing")
            : o === "wtx_metrics_ad4ad_wtm_am_landing_entrypoint"
              ? (a = "wtx_metrics_ad4ad_wtm_am_landing")
              : o === "wtx_create_ad_tofu_wtm_am_landing_entrypoint"
                ? (a = "wtx_create_ad_tofu_wtm_am_landing")
                : o ===
                    "wtx_create_ad_tofu_wtm_no_insight_am_landing_entrypoint"
                  ? (a = "wtx_create_ad_tofu_wtm_no_insight_am_landing")
                  : (a = "wtm_aymt_coldstart_am_landing"),
          {
            conversion_location: r("AdsPromotedObjectTypes").PIXEL,
            default_page_id: n + "",
            source: a,
          }
        );
      }
      return null;
    }
    function I(e) {
      return e.find(function (e) {
        var t = e.source;
        return t === "spend";
      });
    }
    function T(e) {
      var t = e.find(function (e) {
        var t = e.source;
        return t === "wa_api_user_source";
      });
      return t || null;
    }
    function D(e, t) {
      return e != null && e !== r("AdCampaignDestination").UNDEFINED && e !== t;
    }
    ((l.DefaultMessageDestinationSource = s),
      (l.DefaultingFactor = c),
      (l.getDefaultMessagingDestinationResultForPagelessAdvertiser = d),
      (l.hasWhatsAppHelper = m),
      (l.getDefaultMessageDestinationResult = p),
      (l.getCTXDefaultDestinationFromSource = g),
      (l.pageHasIGAccountConnected = y),
      (l.getDefaultMessageDestination = C),
      (l.getDefaultedDestinationFromAdCampaignDestinationType = b),
      (l.logDefaultMessageDestination = v),
      (l.getDefaultDataFromCTXUpsellSource = S),
      (l.getDefaultDataFromCTXLGUpsellSource = R),
      (l.getDefaultDataFromCTWAAdUpsell = L),
      (l.getDefaultDataFromWTWAAdUpsell = E),
      (l.getDefaultDataFromWTMAAdUpsell = k),
      (l.getDefaultDataFromSpend = I),
      (l.getDefaultDataForWAApiUsersEngagement = T),
      (l.canUseMtmlResult = D));
  },
  98,
);
