__d(
  "IncentivesAdsManagerUtils",
  [
    "$InternalEnum",
    "AdsAPICampaignRecordUtilsShared",
    "AdsAPIDevicePlatform",
    "AdsAPIObjectives",
    "AdsAPIOptimizationGoals",
    "AdsCollectionsAdUtils",
    "AdsCreativeEndStateV2Utils",
    "AdsInterfacesLogger",
    "AdsODAXUtils",
    "AdsPromotedObjectTypes",
    "CreativeAssetGroupsFlowSafeUtils",
    "ads-lib-urllib",
    "adsConvertAdObjectRecordToPlainJS",
    "gkx",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c = [r("AdsAPIDevicePlatform").MOBILE],
      d = [
        r("AdsAPIOptimizationGoals").OFFSITE_CONVERSIONS,
        r("AdsAPIOptimizationGoals").RETURN_ON_AD_SPEND,
        r("AdsAPIOptimizationGoals").VALUE,
      ],
      m = [
        "AD_OPTIMIZATION_GOAL_OFFSITE_CONVERSIONS",
        "AD_OPTIMIZATION_GOAL_RETURN_ON_AD_SPEND",
        "AD_OPTIMIZATION_GOAL_VALUE",
      ],
      p = [
        (s = r("AdsPromotedObjectTypes")).PIXEL,
        s.PRODUCT_SET,
        s.WEBSITE_AND_IN_STORE,
      ],
      _ = [s.PIXEL, s.PRODUCT_SET, s.WEBSITE_AND_IN_STORE, s.WEB_AND_APP];
    function f(e) {
      var t = e.adgroup;
      return !!(
        o("AdsCollectionsAdUtils").isCollectionsAd(t.creative) ||
        o(
          "CreativeAssetGroupsFlowSafeUtils",
        ).isFormatCreativeAssetGroupsFromAdgroupRecord(t)
      );
    }
    function g(e) {
      return (
        e === r("AdsPromotedObjectTypes").WEBSITE_AND_IN_STORE &&
        r("gkx")("6787") === !0
      );
    }
    var h = [
        "PURCHASE",
        "ADD_TO_CART",
        "ADD_TO_WISHLIST",
        "ADD_PAYMENT_INFO",
        "INITIATED_CHECKOUT",
        "START_TRIAL",
        "SUBSCRIBE",
      ],
      y = [
        (u = r("AdsAPIObjectives")).CONVERSIONS,
        u.OUTCOME_SALES,
        u.PRODUCT_CATALOG_SALES,
        u.WEBSITE_CONVERSIONS,
      ],
      C = [
        "EMAIL_CAPTURE_GENERIC_CODE",
        "EMAIL_CAPTURE_NON_SHOPIFY",
        "EMAIL_CAPTURE_SHOPIFY",
      ],
      b = [
        "AD_CREATIVE_DESCRIPTION",
        "AD_CREATIVE_HEADLINE",
        "AD_CREATIVE_MANUAL_COUPON_CODES",
        "AD_CREATIVE_PRIMARY_TEXT",
        "DETECTED_FROM_MERCHANT_ADS",
        "DETECTED_FROM_MERCHANT_WEBSITE",
        "DETECTED_FROM_MERCHANT_WEBSITE_URL",
        "PROVIDED_BY_MERCHANT",
        "PROVIDED_BY_MERCHANT_OFFER_MANAGEMENT",
      ],
      v = (e = n("$InternalEnum"))({
        ELIGIBLE: "eligible",
        AD_ACCOUNT_LEVEL_OPT_IN: "ad_account_level_opt_in",
        AD_ACCOUNT_NOT_ELIGIBLE: "ad_account_not_eligible",
        AD_ACCOUNT_NOT_SUPPORT_DYNAMIC_AD_NOT_ELIGIBLE:
          "ad_account_not_support_dynamic_ad_not_eligible",
        OBJECTIVE_NOT_ELIGIBLE: "objective_not_eligible",
        PROMOTED_OBJECT_NOT_ELIGIBLE: "promoted_object_not_eligible",
        WEB_APP_PROMOTED_OBJECT_NOT_ELIGIBLE:
          "web_app_promoted_object_not_eligible",
        OPTIMIZATION_GOAL_NOT_ELIGIBLE: "optimization_goal_not_eligible",
        CONVERSION_EVENT_NOT_ELIGIBLE: "conversion_event_not_eligible",
        COUNTRY_NOT_ELIGIBLE: "country_not_eligible",
        COUNTRY_GROUP_NOT_ELIGIBLE: "country_group_not_eligible",
        PLACEMENT_NOT_ELIGIBLE: "placement_not_eligible",
        PLATFORM_NOT_ELIGIBLE: "platform_not_eligible",
        ONLY_SUPPORT_NEW_FIELD: "only_support_new_field",
        SPECIAL_AD_CATEGORIES: "special_ad_categories",
        CALL_ADD_ON_ENABLED: "call_add_on_enabled",
        MESSAGE_ADD_ON_ENABLED: "message_add_on_enabled",
        LEAD_GEN_FORM_ADD_ON_ENABLED: "lead_gen_form_add_on_enabled",
        UNSUPPORTED_OBJECTIVE: "unsupported_objective",
        EXPERIMENT_NOT_ELIGIBLE: "experiment_not_eligible",
        LANDING_DESTINATION_NOT_ELIGIBLE: "landing_destination_not_eligible",
        AD_ACCOUNT_IN_WA_CAPTURE_EXPERIMENT:
          "ad_account_in_wa_capture_experiment",
        BUY_WITH_INTEGRATION_NOT_ELIGIBLE: "buy_with_integration_not_eligible",
        COLLECTIONS_AD_NOT_ELIGIBLE: "collections_ad_not_eligible",
        CREATIVE_FORMAT_NOT_ELIGIBLE: "creative_format_not_eligible",
        CES_CONNECTED_SOURCES_MISMATCH: "ces_connected_sources_mismatch",
      }),
      S = e({
        ELIGIBLE_UNIQUE_CODE: "eligible_unique_code",
        ELIGIBLE_GENERIC_CODE: "eligible_generic_code",
        AD_ACCOUNT_NOT_ELIGIBLE: "ad_account_not_eligible",
        PAGE_NOT_ELIGIBLE: "page_not_eligible",
      }),
      R = e({
        AD_ACCOUNT_NOT_ELIGIBLE_FOR_INCENTIVE_ADVERTISER_EXPERIENCE:
          "ad_account_not_eligible_for_incentive_advertiser_experience",
        AD_ACCOUNT_NOT_ELIGIBLE_FOR_DEFAULT_OPT_IN:
          "ad_account_not_eligible_for_default_opt_in",
        AD_ACCOUNT_IS_BLOCKED: "ad_account_is_blocked",
        AD_ACCOUNT_IS_IN_COOLDOWN: "ad_account_is_in_cooldown",
        AD_ACCOUNT_STICKY_SETTING_IS_NOT_LOADED:
          "ad_account_sticky_setting_is_not_loaded",
        AD_ACCOUNT_TURN_OFF_DEFAULT_OPT_IN_BY_STICKY_SETTING:
          "ad_account_turn_off_default_opt_in_by_sticky_setting",
        AD_ACCOUNT_SHOULD_ENABLE_DEFAULT_OPT_IN:
          "ad_account_should_enable_default_opt_in",
        ADGROUP_TURN_OFF_DEFAULT_OPT_IN_BY_STICKY_SETTING:
          "adgroup_turn_off_default_opt_in_by_sticky_setting",
        ADGROUP_SHOULD_ENABLE_DEFAULT_OPT_IN:
          "adgroup_should_enable_default_opt_in",
        ADGROUP_TURN_OFF_DEFAULT_OPT_IN_BY_CREATION_TIME:
          "adgroup_turn_off_default_opt_in_by_creation_time",
        ADGROUP_SKIP_DEFAULT_OPT_IN_BY_LOADING_STATUS:
          "adgroup_skip_default_opt_in_by_loading_status",
      }),
      L = e({
        PAGE_NOT_ELIGIBLE_FOR_EMAIL_CAPTURE:
          "page_not_eligible_for_email_capture",
        PAGE_NOT_ELIGIBLE_FOR_EMAIL_CAPTURE_DEFAULT_OPT_IN:
          "page_not_eligible_for_email_capture_default_opt_in",
        AD_ACCOUNT_TURN_OFF_DEFAULT_OPT_IN_BY_STICKY_SETTING:
          "ad_account_turn_off_default_opt_in_by_sticky_setting",
        AD_ACCOUNT_SHOULD_ENABLE_EMAIL_CAPTURE_DEFAULT_OPT_IN:
          "ad_account_should_enable_email_capture_default_opt_in",
        AD_ACCOUNT_STICKY_SETTING_IS_NULL: "ad_account_sticky_setting_is_null",
      }),
      E = e({
        SHOULD_NOT_SHOW_PROMO_ADS_FIELD: "should_not_show_promo_ads_field",
        SHOULD_NOT_SHOW_EMAIL_CAPTURE_FIELD:
          "should_not_show_email_capture_field",
        CATALOG_LOAD_OBJECT_IS_LOADING: "catalog_load_object_is_loading",
        EMAIL_CAPTURE_SETTING_LOAD_OBJECT_NO_VALUE:
          "email_capture_setting_load_object_no_value",
        EMAIL_CAPTURE_SETTING_LOAD_OBJECT_IS_LOADING:
          "email_capture_setting_load_object_is_loading",
        NULL_PAGE_ID: "null_page_id",
        NULL_EMAIL_CAPTURE_SETTING: "null_email_capture_setting",
        EMAIL_CAPTURE_OFFER_NOT_ELIGIBLE_FOR_DEFAULT_OPT_IN:
          "email_capture_offer_not_eligible_for_default_opt_in",
        ADGROUP_STICKY_SETTING_NOT_ELIGIBLE_FOR_DEFAULT_OPT_IN:
          "adgroup_sticky_setting_not_eligible_for_default_opt_in",
        ADACCOUNT_STICKY_SETTING_LOAD_OBJECT_NO_VALUE:
          "adaccount_sticky_setting_load_object_no_value",
        ADACCOUNT_STICKY_SETTING_NOT_ELIGIBLE_FOR_DEFAULT_OPT_IN:
          "adaccount_sticky_setting_not_eligible_for_default_opt_in",
        ADACCOUNT_IN_BLOCKLIST: "adaccount_in_blocklist",
        ADACCOUNT_IN_COOLDOWN: "adaccount_in_cooldown",
        SUPPRESSED_DEFAULT_OPT_IN_ON_EDIT: "suppressed_default_opt_in_on_edit",
      }),
      k = e({
        UNSUPPORTED_FORMAT: "unsupported_format",
        INVALID_SETTING: "invalid_setting",
        EXPERIMENT_EXPOSURE: "experiment_exposure",
      }),
      I = e({ ON: "on", OFF: "off" }),
      T = e({ L1CreationPage: "l1_creation_page", CES: "ces" }),
      D = e({
        DIRECT_CREATION: "direct_creation",
        CREATION_AFTER_ERROR: "creation_after_error",
      }),
      x = e({ EDIT: "edit", CREATION: "creation" }),
      $ = e({ SUCCESS: "success", FAIL: "fail" });
    function P(e, t, n) {
      return (
        o(
          "AdsCreativeEndStateV2Utils",
        ).isCESV2TargetedAdsFormatFromAdgroupAndCampaign(t, e, n) &&
        o("AdsCreativeEndStateV2Utils").shouldRenderCESV2()
      );
    }
    function N() {
      return r("gkx")("20174");
    }
    function M(e, t) {
      return (
        e === r("AdsAPIObjectives").PRODUCT_CATALOG_SALES &&
        t === r("AdsPromotedObjectTypes").PRODUCT_SET
      );
    }
    function w(e, t) {
      var n = e.campaignGroup.objective,
        a = o("AdsAPICampaignRecordUtilsShared").getPromotedObjectType(
          t,
          n,
          r("adsConvertAdObjectRecordToPlainJS")(e.campaign),
        ),
        i = e.campaign.optimization_goal;
      return [o("AdsODAXUtils").maybeTranslateObjective(n, a, i), a, i];
    }
    function A(e) {
      var t, n, r;
      return (
        !!(
          (t = e.adgroup.creative) != null &&
          (t = t.object_story_spec) != null &&
          (t = t.link_data) != null &&
          t.phone_data_id
        ) ||
        !!(
          (n = e.adgroup.creative) != null &&
          (n = n.asset_feed_spec) != null &&
          n.phone_data_ids
        ) ||
        ((r = e.adgroup.creative) == null ||
        (r = r.asset_feed_spec) == null ||
        (r = r.call_ads_configuration) == null
          ? void 0
          : r.call_destination_type) === "WEBSITE_AND_CALL"
      );
    }
    function F(e) {
      var t;
      return !!(
        (t = e.adgroup.creative) != null &&
        (t = t.asset_feed_spec) != null &&
        t.message_extensions
      );
    }
    function O(e) {
      var t;
      return !!(
        (t = e.adgroup.creative) != null &&
        (t = t.object_story_spec) != null &&
        (t = t.link_data) != null &&
        (t = t.call_to_action) != null &&
        (t = t.value) != null &&
        t.lead_gen_form_id
      );
    }
    function B(e, t, n, o, a, i, l) {
      var s;
      (i === void 0 && (i = !1), l === void 0 && (l = null));
      var u =
        ((s = {}),
        (s.adgroup_id = n),
        (s.status = o != null ? o : ""),
        (s.message = a != null ? a : ""),
        s);
      if (t != null) {
        var c;
        u = babelHelpers.extends({}, u, ((c = {}), (c.ad_account_id = t), c));
      }
      (l != null && (u = babelHelpers.extends({}, u, l)),
        i
          ? r("AdsInterfacesLogger").logOnce({ eventName: e, data: u })
          : r("AdsInterfacesLogger").log({ eventName: e, data: u }));
    }
    function W(e) {
      return e == null || e.length === 0;
    }
    function q(e) {
      if (e == null || e === "") return null;
      var t = r("ads-lib-urllib").getDomain(e);
      return t != null && t.startsWith("www.") && t.lastIndexOf(".") > 4
        ? t.substring(4)
        : t;
    }
    ((l.SUPPORTED_DEVICE_PLATFORM = c),
      (l.SUPPORTED_AD_OPTIMIZATION_GOALS = d),
      (l.SUPPORTED_PROMO_ADS_OPTIMIZATION_GOALS_XFB = m),
      (l.COMMON_SUPPORTED_PROMOTED_OBJECT_TYPES = p),
      (l.PA_EXPANDED_SUPPORTED_PROMOTED_OBJECT_TYPES = _),
      (l.isCreativeFormatBlockedForPromoAds = f),
      (l.isOmniPromoAdExperience = g),
      (l.SUPPORTED_CUSTOM_CONVERSION_EVENTS = h),
      (l.SUPPORTED_AD_OBJECTIVES = y),
      (l.EMAIL_CATPURE_SOURCES = C),
      (l.PROMO_ADS_SOURCES = b),
      (l.ShouldShowIncentiveAdFieldSatus = v),
      (l.ShouldShowPromoEmailCaptureFieldSatus = S),
      (l.ShouldEnablePromoAdToggleByDefaultStatus = R),
      (l.ShouldEnableEmailCaptureByDefaultStatus = L),
      (l.EmailCaptureDefaultOptInAttemptFailureReason = E),
      (l.EmailCaptureMutateFromSettingAttemptFailureReason = k),
      (l.PromoAdToggleStatus = I),
      (l.EmailCaptureRenderPlace = T),
      (l.EmailCaptureOfferCreationStatus = D),
      (l.EmailCaptureOfferEditStatus = x),
      (l.EmailCaptureOfferSaveEventStatus = $),
      (l.isCreativeEndStateEligibleByExperiment = P),
      (l.isMovingAMStaticAdsPromoModuleEnabled = N),
      (l.isDynamicAd = M),
      (l.getAdOptimizationGoalsObjectivePromotedObjectType = w),
      (l.isCallAddOnEnabled = A),
      (l.isMessageAddOnEnabled = F),
      (l.isLeadgenInstantFormAddOnEnabled = O),
      (l.logEvent = B),
      (l.isArrayNullOrEmpty = W),
      (l.getDomainFromURL = q));
  },
  98,
);
