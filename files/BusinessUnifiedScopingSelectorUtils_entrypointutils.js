__d(
  "BusinessUnifiedScopingSelectorUtils.entrypointutils",
  [
    "BMToolsConsolidationUtils.entrypoint",
    "BusinessUnifiedScopeSelectorDynamicFields",
    "CurrentBusinessUser",
    "UnifiedScopeSelectorEntrypointGatingUtils.entrypoint",
    "gkx",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      switch (e) {
        case "BUSINESS_HOME":
          return "mbs_business_level_home";
        case "BUSINESS_LOCATIONS":
          return "mbs_store_locations";
        case "AD_LIMITS":
          return "mbs_ads_limit_per_page";
        case "COLLABORATION_CENTER":
          return "mbs_collaboration_center";
        case "TRAFFIC_ANALYSIS":
          return "mbs_traffic_analysis_report";
        case "BILLING_HUB":
          return "mbs_billing";
        case "EXPERIMENTS":
          return "mbs_experiments";
        case "CAMPAIGN_PLANNER":
          return "mbs_campaign_planner";
        case "CUSTOMER_EXPERIENCE":
          return "mbs_customer_experience";
        case "COLLABSMANAGER":
          return "mbs_brand_collabs_manager";
        case "CREATIVE_HUB":
          return "mbs_creative_hub";
        case "HOME":
          return "mbs_home";
        case "INSIGHTS":
          return "mbs_insights";
        case "INBOX_SETTINGS":
          return "mbs_inbox";
        case "MIX_ARTIST":
        case "MIX_TRACK":
        case "MIX_BREAKDOWN_SUBPAGE":
          return "mbs_insights";
        case "INBOX":
          return "mbs_inbox";
        case "CREATOR_MARKETPLACE":
          return "mbs_creator_marketplace_business_profile";
        case "APPOINTMENTS":
          return "mbs_appointment";
        case "ORDERS":
          return "mbs_orders";
        case "BUSINESS_FEED":
          return "mbs_business_feed";
        case "BUSINESS_APP_STORE":
          return "mbs_business_apps";
        case "INSTANT_FORMS":
          return "mbs_instant_forms";
        case "SETTINGS":
          return "mbs_setting";
        case "CONTENT_CALENDAR":
          return "mbs_planner";
        case "POSTS":
        case "CREATIVE_IDEAS":
          return "mbs_posts";
        case "FBM_CHANNELS":
          return "mbs_posts";
        case "MONETIZATION":
          return "mbs_monetization";
        case "ADS_CREATION":
        case "ADS_DRAFTS":
        case "ADS_EXPERIMENTS":
        case "AD_CENTER":
        case "AUTOMATED_ADS_CREATION":
        case "CONSOLIDATEDAD":
        case "COMPOSER":
        case "BOOSTED_ITEM_PICKER":
          return "mbs_ads";
        case "BOOST_AB_TEST_CREATION":
        case "BOOSTED_AB_TEST_ITEM_PICKER":
        case "BOOST_AUTOMOTIVE_INVENTORY_CREATION":
        case "BOOST_CATALOG_SALES_CREATION":
        case "BOOST_CTA_CREATION":
        case "BOOST_EVENT_CREATION":
        case "BOOST_INSTAGRAM_MEDIA_CREATION":
        case "BOOST_INTEGRATED_BUSINESS_CREATION":
        case "BOOST_LEAD_GEN_CREATION":
        case "BOOST_LOCAL_AWARENESS_CREATION":
        case "BOOST_PAGELIKE_CREATION":
        case "BOOST_POST_CREATION":
        case "BOOST_PURCHASE_CREATION":
        case "BOOST_WEBSITE_CREATION":
        case "CONSOLIDATED_PRODUCT_CREATION":
        case "INSTANT_ADS":
        case "BOOST_STORY_CREATION":
        case "BOOST_CALL_NOW":
          return "mbs_ads";
        case "STORY_COMPOSER":
        case "CHANNEL_COMPOSER":
        case "REELS_COMPOSER":
        case "BULK_EDIT_COMPOSER":
        case "BULK_UPLOAD_COMPOSER":
        case "REELS_BULK_UPLOAD_COMPOSER":
        case "AUTOMATIONS_COMPOSER":
        case "UNIFIED_VOD_AND_REELS_COMPOSER":
        case "EDIT_COMPOSER":
          return "mbs_composer";
        case "AGENCY_FEE":
          return "mbs_agency_fee";
        case "AGENCY_FEE_INTEREST_FORM":
          return "mbs_agency_fee_interest_form";
        case "INSPIRATION_HUB":
          return "mbs_inspiration_hub";
        case "LEADS_CENTER":
          return "mbs_leads_center";
        case "STREAMER_HOME":
          return "mbs_streamer_home";
        case "CREATIVE_ASSETS":
          return "mbs_creative_assets";
        case "WHATSAPP_MANAGER":
          return "whatsapp_manager";
        case "META_VERIFIED_LANDING":
          return "mbs_meta_verified_landing";
        case "BRAND_RIGHTS_PROTECTION":
          return "brand_rights_protection";
        case "BUSINESS_AI":
        case "BUSINESS_AI_WAITLIST":
        case "OMNI_AI":
          return "mbs_business_ai";
        case "CONSUMER_TRENDS":
          return "mbs_consumer_trends";
        case "MARKETING_MESSAGES":
        case "MARKETING_MESSAGE_COMPOSER":
        case "MARKETING_MESSAGE_ONBOARDING":
        case "MARKETING_MESSAGE_OPTIN_SURFACE":
        case "MM_LWI":
        case "MM_LWI_COMPOSER":
          return "mbs_marketing_messages";
        case "LICENSED_MUSIC":
          return "mbs_licensed_music";
        case "RIGHTS_MANAGER":
          return "mbs_rights_manager";
        case "SOUND_COLLECTION_MBS":
          return "mbs_sound_collection";
        case "PAYMENTS":
          return "mbs_payments";
        case "GET_STARTED":
          return "mbs_get_started";
        case "BUSINESS_MESSAGING_HUB":
          return "mbs_bizm_hub";
        default:
          return null;
      }
    }
    function s(e) {
      return o("BMToolsConsolidationUtils.entrypoint").isBMMigratedTool(e) ||
        (e === "mbs_meta_verified_landing" &&
          (o("BusinessUnifiedScopeSelectorDynamicFields")
            .is_fb_non_creator_login ||
            o("BusinessUnifiedScopeSelectorDynamicFields")
              .is_fb_creator_login)) ||
        ((r("CurrentBusinessUser").shouldShowAccountSwitchComponents ||
          o("BusinessUnifiedScopeSelectorDynamicFields").is_mma_login) &&
          o(
            "UnifiedScopeSelectorEntrypointGatingUtils.entrypoint",
          ).isBusinessToolNameInMBS(e))
        ? 2
        : r("CurrentBusinessUser").shouldShowAccountSwitchComponents
          ? 0
          : (o("BusinessUnifiedScopeSelectorDynamicFields").is_ig_login &&
                o(
                  "UnifiedScopeSelectorEntrypointGatingUtils.entrypoint",
                ).isBusinessToolNameInMBS(e)) ||
              ((o("BusinessUnifiedScopeSelectorDynamicFields")
                .is_fb_non_creator_login ||
                (r("gkx")("6562") &&
                  !["mbs_posts", "mbs_monetization", "mbs_insights"].includes(
                    e,
                  )) ||
                u(e)) &&
                o(
                  "UnifiedScopeSelectorEntrypointGatingUtils.entrypoint",
                ).isBusinessToolNameInMBS(e) &&
                r("gkx")("880"))
            ? 2
            : 0;
    }
    function u(e) {
      return (
        o("BusinessUnifiedScopeSelectorDynamicFields").is_fb_creator_login &&
        [
          "mbs_posts",
          "mbs_monetization",
          "mbs_insights",
          "mbs_posts_workspace",
        ].includes(e)
      );
    }
    ((l.mapRouteNameToBusinessToolName = e),
      (l.getScopingSelectorTypeForMBSTools = s),
      (l.shouldEnableMultiSelectorForCreatorsInMBSTools = u));
  },
  98,
);
