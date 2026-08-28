__d(
  "AdsManagerDeliverySubstatus",
  [],
  function (t, n, r, o, a, i) {
    var e = Object.freeze({
      AAA_BID_LIMITED: "aaa_bid_limited",
      ACCOUNT_CLOSED: "account_closed",
      ACCOUNT_DISABLED: "account_disabled",
      ACCOUNT_NEEDS_CREDIT: "account_needs_credit",
      ACCOUNT_NEEDS_TAX_NUMBER: "account_needs_tax_number",
      ACCOUNT_SPEND_LIMIT_REACHED: "account_spend_limit_reached",
      ACTIVE: "active",
      AD_CAMPAIGN_OPTIMIZED_ON_INACTIVE_EVENT:
        "ad_campaign_optimized_on_inactive_event",
      AD_COMPLETED: "ad_completed",
      AD_HAS_LOW_FAILURE_RATIO_DEAD_LINK: "has_low_failure_ratio_dead_link",
      AD_LIMIT_REACHED: "ad_limit_reached",
      AD_NOT_APPROVED: "ad_not_approved",
      AD_NOT_APPROVED_CREDIT: "ad_not_approved_credit",
      AD_NOT_APPROVED_CTWA_NUMBER: "ad_not_approved_ctwa_number",
      AD_NOT_APPROVED_EMPLOYMENT: "ad_not_approved_employment",
      AD_NOT_APPROVED_HOUSING: "ad_not_approved_housing",
      AD_PARTIAL_ACTIVE: "ad_partial_active",
      AD_SCHEDULED: "ad_scheduled",
      AD_SET_AFFECTED_BY_CBO_BID_STRATEGY_CHANGE:
        "ad_set_affected_by_cbo_bid_strategy_change",
      AD_SET_COMPLETED: "ad_set_completed",
      AD_SET_DATA_SOURCE_DISCONNECTED: "ad_set_data_source_disconnected",
      AD_SET_HOLDOUT_LEARNING_EXIT: "ad_set_holdout_learning_exit",
      AD_SET_IN_LEARNING_PHASE: "ad_set_in_learning_phase",
      AD_SET_INCONSISTENT_BID_STRATEGY_IN_CBO:
        "ad_set_inconsistent_bid_strategy_in_cbo",
      AD_SET_LEARNING_EXIT_UNSUCCESSFULLY:
        "ad_set_learning_exit_unsuccessfully",
      AD_SET_OFF: "ad_set_off",
      AD_SET_SCHEDULED: "ad_set_scheduled",
      AD_SET_UNSUPPORTED_EVENT: "ad_set_unsupported_event",
      AD_SET_UNSUPPORTED_EVENT_DYNAMIC_ADS:
        "ad_set_unsupported_event_dynamic_ads",
      AD_SET_WITH_ISSUES: "ad_set_with_issues",
      ADPRO4__ADS_TARGETING_EU_WITHOUT_IDENTITIES:
        "ads_targeting_eu_without_identities",
      ADPRO4__ADS_TARGETING_ONLY_SINGAPORE_WITHOUT_VERIFIED_IDENTITIES:
        "ads_targeting_only_singapore_without_verified_identities",
      ADPRO4__ADS_TARGETING_ONLY_TAIWAN_WITHOUT_VERIFIED_IDENTITIES:
        "ads_targeting_only_taiwan_without_verified_identities",
      ADPRO4__ADS_TARGETING_SINGAPORE_WITHOUT_VERIFIED_IDENTITIES:
        "ads_targeting_singapore_without_verified_identities",
      ADPRO4__ADS_TARGETING_TAIWAN_WITHOUT_FIDO_AUTHENTICATION:
        "ads_targeting_taiwan_without_fido_authentication",
      ADPRO4__ADS_TARGETING_TAIWAN_WITHOUT_VERIFIED_IDENTITIES:
        "ad_targeting_taiwan_without_verified_identities",
      ADPRO4__ADVERTISER_IDENTITY_NOT_YET_REVIEWED_FOR_SINGAPORE_ADS:
        "advertiser_identity_not_yet_reviewed_for_singapore_ads",
      ADPRO4__ADVERTISER_IDENTITY_PENDING_FOR_SINGAPORE_ADS:
        "advertiser_identity_pending_for_singapore_ads",
      ADPRO4__ADVERTISER_IDENTITY_PENDING_FOR_SINGAPORE_ONLY_ADS:
        "advertiser_identity_pending_for_singapore_only_ads",
      ADPRO4__ADVERTISER_IDENTITY_REJECTED_FOR_SINGAPORE_ADS:
        "advertiser_identity_rejected_for_singapore_ads",
      ADPRO4__ADVERTISER_IDENTITY_REJECTED_FOR_SINGAPORE_ONLY_ADS:
        "advertiser_identity_rejected_for_singapore_only_ads",
      ADPRO4__ADVERTISER_IDENTITY_VERIFICATION_NOT_INITIALIZED_FOR_SINGAPORE_ADS:
        "advertiser_identity_verification_not_initialized_for_singapore_ads",
      ADPRO4__FIN_SERV_ADS_TARGETING_AUSTRALIA_WITHOUT_VERIFIED_IDENTITIES:
        "fin_serv_ads_targeting_australia_without_verified_identities",
      ADPRO4__FIN_SERV_ADS_TARGETING_INDIA_WITHOUT_VERIFIED_IDENTITIES:
        "fin_serv_ads_targeting_india_without_verified_identities",
      ADPRO4__FIN_SERV_ADS_TARGETING_ONLY_AUSTRALIA_WITHOUT_VERIFIED_IDENTITIES:
        "fin_serv_ads_targeting_only_australia_without_verified_identities",
      ADPRO4__FIN_SERV_ADS_TARGETING_TAIWAN_ONLY_WITHOUT_VERIFIED_IDENTITIES:
        "fin_serv_ads_targeting_taiwan_only_without_verified_identities",
      ADPRO4__FIN_SERV_ADS_TARGETING_TAIWAN_WITHOUT_VERIFIED_IDENTITIES:
        "fin_serv_ads_targeting_taiwan_without_verified_identities",
      ADPRO4__FINANCIAL_SERVICE_ADS_WITHOUT_DECLARATION:
        "financial_service_ads_without_declaration",
      ADPRO4__FINANCIAL_SERVICE_ADS_WITHOUT_DECLARATION_TARGETS_ONLY_AUSTRALIA:
        "financial_service_ads_without_declaration_targets_only_australia",
      ADPRO4__FINANCIAL_SERVICE_ADS_WITHOUT_DECLARATION_TARGETS_ONLY_TAIWAN:
        "financial_service_ads_without_declaration_targets_only_taiwan",
      AEM_CONVERSION_LOCATION_LIMITED: "aem_conversion_location_limited",
      AEM_LIMITED: "aem_limited",
      AEMV2_DYNAMIC_AD_OE_ELIGIBILITY_WARNING:
        "aemv2_dynamic_ad_oe_eligibility_warning",
      AEMV2_MAI_ELIGIBILITY_WARNING: "aemv2_mai_eligibility_warning",
      AEMV2_RO_MAE_ELIGIBILITY_WARNING: "aemv2_ro_mae_eligibility_warning",
      AEMV2_SKAN_CHANNEL_DISCREPANCY: "aemv2_skan_channel_discrepancy",
      AEMV2_WEB_AND_APP_CONVERSION_LOCATION_LIMITED:
        "aemv2_web_and_app_conversion_location_limited",
      AEMV2_WEB_AND_APP_LIMITED: "aemv2_web_and_app_limited",
      AGE_BLOCK_PARTIAL_DELIVERY: "age_block_partial_delivery",
      AGE_GEO_BLOCK_FIPS_PARTIAL_DELIVERY:
        "age_geo_block_fips_partial_delivery",
      ALCOHOL_BLOCK_PARTIAL_DELIVERY: "alcohol_block_partial_delivery",
      ALL_AD_SETS_COMPLETED: "all_ad_sets_completed",
      ALL_AD_SETS_IN_ERROR: "all_ad_sets_in_error",
      ALL_AD_SETS_IN_UPDATING_CONVERSION_EVENT:
        "all_ad_sets_in_updating_conversion_event",
      ALL_ADS_IN_ERROR: "all_ads_in_error",
      ALL_ADS_IN_UPDATING_CONVERSION_EVENT:
        "all_ads_in_updating_conversion_event",
      ARCHIVED: "archived",
      AUCTION_OVERLAP_LIMITED_LEARNING_FAIL:
        "auction_overlap_limited_learning_fail",
      AUDIENCE_LEARNING_LIMITED: "audience_learning_limited",
      AUDIENCE_LIMITED: "audience_limited",
      BASIC_ADS_IMPACTED: "basic_ads_impacted",
      BID_LIMITED: "bid_limited",
      BID_LIMITED_LEARNING_FAIL: "bid_limited_learning_fail",
      BID_LIMITED_LEARNING_SUCCESS: "bid_limited_learning_success",
      BUDGET_LIMITED_LEARNING_FAIL: "budget_limited_learning_fail",
      CAMPAIGN_GROUP_HAS_NO_CAMPAIGNS: "campaign_group_has_no_campaigns",
      CAMPAIGN_HAS_NO_ADS: "campaign_has_no_ads",
      CAMPAIGN_INCONSISTENT_BID_STRATEGY_CHANGE:
        "campaign_inconsistent_bid_strategy_change",
      CAMPAIGN_OFF: "campaign_off",
      CAMPAIGN_WARNING_STATUS: "campaign_warning_status",
      CAMPAIGN_WITH_ISSUES: "campaign_with_issues",
      COMMON_CAMPAIGN_MARKETING_MESSAGE_ACCOUNT_BANNED:
        "common_campaign_marketing_message_account_banned",
      COMMON_CAMPAIGN_MARKETING_MESSAGE_ACCOUNT_POLICY_WARNING:
        "common_campaign_marketing_message_account_policy_warning",
      COMMON_CAMPAIGN_MARKETING_MESSAGE_ACCOUNT_RESTRICTED:
        "common_campaign_marketing_message_account_restricted",
      COMMON_CAMPAIGN_MARKETING_MESSAGE_CHARACTER_LIMIT_EXCEEDED:
        "common_campaign_marketing_message_character_limit_exceeded",
      COMMON_CAMPAIGN_MARKETING_MESSAGE_CHARACTER_LIMIT_EXCEEDED_ALL:
        "common_campaign_marketing_message_character_limit_exceeded_all",
      COMMON_CAMPAIGN_MARKETING_MESSAGE_CHARACTER_LIMIT_EXCEEDED_BODY:
        "common_campaign_marketing_message_character_limit_exceeded_body",
      COMMON_CAMPAIGN_MARKETING_MESSAGE_CHARACTER_LIMIT_EXCEEDED_CAROUSEL_CARD_BODY:
        "common_campaign_marketing_message_character_limit_exceeded_carousel_card_body",
      COMMON_CAMPAIGN_MARKETING_MESSAGE_CHARACTER_LIMIT_EXCEEDED_FOOTER:
        "common_campaign_marketing_message_character_limit_exceeded_footer",
      COMMON_CAMPAIGN_MARKETING_MESSAGE_CHARACTER_LIMIT_EXCEEDED_GREETING:
        "common_campaign_marketing_message_character_limit_exceeded_greeting",
      COMMON_CAMPAIGN_MARKETING_MESSAGE_CHARACTER_LIMIT_EXCEEDED_HEADLINE:
        "common_campaign_marketing_message_character_limit_exceeded_headline",
      COMMON_CAMPAIGN_MARKETING_MESSAGE_CHARACTER_LIMIT_EXCEEDED_SOME:
        "common_campaign_marketing_message_character_limit_exceeded_some",
      COMMON_CAMPAIGN_MARKETING_MESSAGE_DEFAULT_PHONE_NUMBER_REMOVED:
        "common_campaign_marketing_message_default_phone_number_removed",
      COMMON_CAMPAIGN_MARKETING_MESSAGE_DISABLED:
        "common_campaign_marketing_message_disabled",
      COMMON_CAMPAIGN_MARKETING_MESSAGE_EMPTY_SUBSCRIBER_POOL:
        "common_campaign_marketing_message_empty_subscriber_pool",
      COMMON_CAMPAIGN_MARKETING_MESSAGE_IN_REVIEW:
        "common_campaign_marketing_message_in_review",
      COMMON_CAMPAIGN_MARKETING_MESSAGE_LIMIT_REACHED:
        "common_campaign_marketing_message_limit_reached",
      COMMON_CAMPAIGN_MARKETING_MESSAGE_MEDIUM_QUALITY:
        "common_campaign_marketing_message_medium_quality",
      COMMON_CAMPAIGN_MARKETING_MESSAGE_MISSING_FIELD:
        "common_campaign_marketing_message_missing_field",
      COMMON_CAMPAIGN_MARKETING_MESSAGE_MISSING_FIELD_BODY:
        "common_campaign_marketing_message_missing_field_body",
      COMMON_CAMPAIGN_MARKETING_MESSAGE_MISSING_FIELD_GREETING:
        "common_campaign_marketing_message_missing_field_greeting",
      COMMON_CAMPAIGN_MARKETING_MESSAGE_PAUSED:
        "common_campaign_marketing_message_paused",
      COMMON_CAMPAIGN_MARKETING_MESSAGE_PHONE_NUMBER_REMOVED:
        "common_campaign_marketing_message_phone_number_removed",
      COMMON_CAMPAIGN_MARKETING_MESSAGE_PHONE_NUMBER_UNAVAILABLE:
        "common_campaign_marketing_message_phone_number_unavailable",
      COMMON_CAMPAIGN_MARKETING_MESSAGE_PHONE_NUMBER_UNVERIFIED:
        "common_campaign_marketing_message_phone_number_unverified",
      COMMON_CAMPAIGN_MARKETING_MESSAGE_REAL_PHONE_NUMBER_DISPLAY_NAME_UNAPPROVED:
        "common_campaign_marketing_message_real_phone_number_display_name_unapproved",
      COMMON_CAMPAIGN_MARKETING_MESSAGE_REJECTED:
        "common_campaign_marketing_message_rejected",
      COMMON_CAMPAIGN_MARKETING_MESSAGE_SUBSCRIBER_POOL_AUTOMATION_OFF:
        "common_campaign_marketing_message_subscriber_pool_automation_off",
      COMMON_CAMPAIGN_MARKETING_MESSAGE_SUBSCRIBER_POOL_CONTACT_SYNC_OFF:
        "common_campaign_marketing_message_subscriber_pool_contact_sync_off",
      COMMON_CAMPAIGN_MARKETING_MESSAGE_SUBSCRIBER_POOL_CONVERSION_SYNC_OFF:
        "common_campaign_marketing_message_subscriber_pool_conversion_sync_off",
      COMMON_CAMPAIGN_MARKETING_MESSAGE_SUBSCRIBER_POOL_NO_LIFT_CRM_OFF:
        "common_campaign_marketing_message_subscriber_pool_no_lift_crm_off",
      COMMON_CAMPAIGN_MARKETING_MESSAGE_SUBSCRIBER_POOL_SIZE_BELOW_50K:
        "common_campaign_marketing_message_subscriber_pool_size_below_50k",
      COMMON_CAMPAIGN_MARKETING_MESSAGE_SUBSCRIBER_POOL_SIZE_BELOW_THRESHOLD:
        "common_campaign_marketing_message_subscriber_pool_size_below_threshold",
      COMMON_CAMPAIGN_MARKETING_MESSAGE_SUBSCRIBER_POOL_SIZE_BELOW_THRESHOLD_AUTOMATION_AVAILABLE:
        "common_campaign_marketing_message_subscriber_pool_size_below_threshold_automation_available",
      COMMON_CAMPAIGN_MARKETING_MESSAGE_VIRTUAL_PHONE_NUMBER_DISPLAY_NAME_UNAPPROVED:
        "common_campaign_marketing_message_virtual_phone_number_display_name_unapproved",
      COMPLETED: "completed",
      COMPLIANCE_LOCATION_LIMITED_ERROR: "compliance_location_limited_error",
      COMPLIANCE_LOCATION_LIMITED_WARNING:
        "compliance_location_limited_warning",
      COST_LIMITED_LEARNING_FAIL: "cost_limited_learning_fail",
      COST_LIMITED_LEARNING_SUCCESS: "cost_limited_learning_success",
      CREATIVE_FATIGUE: "creative_fatigue",
      CREATIVE_FATIGUE_PREDICTION: "creative_fatigue_prediction",
      CUSTOM_AUDIENCE_RESTRICTED: "custom_audience_restricted",
      CUSTOM_CONVERSION_RESTRICTED: "custom_conversion_restricted",
      DELETED: "deleted",
      DELIVERY_LIMITED: "delivery_limited",
      DRAFT_VALIDATION_ERROR: "draft_validation_error",
      DYNAMIC_ADS_NO_VALID_ITEMS: "dynamic_ads_no_valid_items",
      EAS_LOW_REACH_WARNING: "eas_low_reach_warning",
      ECOSYSTEM_BID_REDUCE_L1_CARDINALITY:
        "ecosystem_bid_reduce_l1_cardinality",
      EU_SENSITIVE_DATA_CUSTOM_AUDIENCE_VIOLATION_ERROR:
        "eu_sensitive_data_custom_audience_violation_error",
      EU_SENSITIVE_DATA_LOCATION_LIMITED_AD_CONTENT_VIOLATION:
        "eu_sensitive_data_location_limited_ad_content_violation",
      EU_SENSITIVE_DATA_LOCATION_LIMITED_CUSTOM_AUDIENCE_VIOLATION:
        "eu_sensitive_data_location_limited_custom_audience_violation",
      EU_SENSITIVE_DATA_LOCATION_LIMITED_PAGE_VIOLATION:
        "eu_sensitive_data_location_limited_page_violation",
      EU_SENSITIVE_DATA_PAGE_VIOLATION_ERROR:
        "eu_sensitive_data_page_violation_error",
      EU_YOUTH_AUDIENCE_LIMITED: "eu_youth_audience_limited",
      EU_YOUTH_ONLY_DELIVERY_ERROR: "eu_youth_only_delivery_error",
      EVENT_DATA_RESTRICTED: "event_data_restricted",
      EXISTING_CUSTOMER_BUDGET_PERCENTAGE_LIMITED:
        "existing_customer_budget_percentage_limited",
      FINANCIAL_SERVICE_VALUE_BLOCKED_LIMITED_DELIVERY:
        "financial_service_value_blocked_limited_delivery",
      GCR_ID_VERIFICATION_FAILED: "gcr_id_verification_failed",
      GCR_ID_VERIFICATION_PENDING: "gcr_id_verification_pending",
      GCR_ID_VERIFICATION_REQUIRED: "gcr_id_verification_required",
      GEO_BLOCK_FIPS_PARTIAL_DELIVERY: "geo_block_fips_partial_delivery",
      HAS_AD_CREATIVE_FATIGUE: "has_ad_creative_fatigue",
      HAS_AD_IN_REVIEW: "has_ad_in_review",
      HAS_AD_SET_SCHEDULED: "has_ad_set_scheduled",
      HOLDOUT_LEARNING_EXIT: "holdout_learning_exit",
      IN_DRAFT: "in_draft",
      IN_LEARNING_PHASE: "in_learning_phase",
      IN_REVIEW: "in_review",
      INFORMATION_MISSING: "information_missing",
      INVALID_ITERATIVE_SPLIT_TEST: "invalid_iterative_split_test",
      INVALID_SPLIT_TEST: "invalid_split_test",
      IOS_CAMPAIGN_IN_COOLDOWN: "ios_campaign_in_cooldown",
      IS_AD_FARM_PENALIZED: "is_ad_farm_penalized",
      IS_CLICKBAIT_PENALIZED: "is_clickbait_penalized",
      IS_ENGAGEMENT_BAIT_PENALIZED: "is_engagement_bait_penalized",
      IS_LQWE_PENALIZED: "is_lqwe_penalized",
      IS_SENSATIONALISM_PENALIZED: "is_sensationalism_penalized",
      LEARNING_EXIT_UNSUCCESSFULLY: "learning_exit_unsuccessfully",
      LIVE_VIDEO_NO_LIVE_YET: "live_video_no_live_yet",
      LVA_MISSING_PAID_PARTNERSHIP_LABEL: "lva_missing_paid_partnership_label",
      MARKETING_MESSAGE_ALL_ERROR: "marketing_message_all_error",
      MARKETING_MESSAGE_DISABLED: "marketing_message_disabled",
      MARKETING_MESSAGE_HAS_WARNING: "marketing_message_has_warning",
      MARKETING_MESSAGE_PAUSED: "marketing_message_paused",
      MARKETING_MESSAGE_QUALITY_HIGH: "marketing_message_quality_high",
      MARKETING_MESSAGE_QUALITY_MEDIUM: "marketing_message_quality_medium",
      MARKETING_MESSAGE_QUALITY_PENDING: "marketing_message_quality_pending",
      MARKETING_MESSAGE_REJECTED: "marketing_message_rejected",
      MARKETING_MESSAGES_ONLY_DISABLED: "marketing_messages_only_disabled",
      MARKETING_MESSAGES_ONLY_EMPTY_SUBSCRIBER_POOL:
        "marketing_messages_only_empty_subscriber_pool",
      MARKETING_MESSAGES_ONLY_LIMIT_REACHED:
        "marketing_messages_only_limit_reached",
      MARKETING_MESSAGES_ONLY_MEDIUM_QUALITY:
        "marketing_messages_only_medium_quality",
      MARKETING_MESSAGES_ONLY_MISSING_TEMPLATE:
        "marketing_messages_only_missing_template",
      MARKETING_MESSAGES_ONLY_PAUSED: "marketing_messages_only_paused",
      MARKETING_MESSAGES_ONLY_PHONE_NUMBER_UNAVAILABLE:
        "marketing_messages_only_phone_number_unavailable",
      MARKETING_MESSAGES_ONLY_REAL_PHONE_NUMBER_DISPLAY_NAME_UNAPPROVED:
        "marketing_messages_only_real_phone_number_display_name_unapproved",
      MARKETING_MESSAGES_ONLY_REJECTED: "marketing_messages_only_rejected",
      MARKETING_MESSAGES_ONLY_SUBSCRIBER_POOL_SIZE_BELOW_THRESHOLD:
        "marketing_messages_only_subscriber_pool_size_below_threshold",
      MARKETING_MESSAGES_ONLY_VIRTUAL_PHONE_NUMBER_DISPLAY_NAME_UNAPPROVED:
        "marketing_messages_only_virtual_phone_number_display_name_unapproved",
      MESSAGING_RESTRICTED_WARNING: "messaging_restricted_warning",
      MMP_CONVERSION_BITS_NEED_UPDATE: "mmp_conversion_bits_need_update",
      MULTI_ALL_AD_SETS_OFF: "multi_all_ad_sets_off",
      MULTI_ALL_ADS_OFF: "multi_all_ads_off",
      NO_ACTIVE_AD: "no_active_ad",
      NO_ACTIVE_AD_SET: "no_active_ad_set",
      NO_ADS: "no_ads",
      NO_DELIVERY_DURING_PREPAY_AUTO_REFUND:
        "no_delivery_during_prepay_auto_refund",
      NO_DELIVERY_STATUS: "no_delivery_status",
      OFF: "off",
      OMNI_CAMPAIGN_LEARNING_LIMITED: "omni_campaign_learning_limited",
      OVER_IOS_CAMPAIGN_LIMIT: "over_ios_campaign_limit",
      PARTIAL_ACTIVE: "partial_active",
      PARTIAL_DELIVERY: "partial_delivery",
      PAUSED_INELIGIBLE_AFS_STATUS: "paused_ineligible_afs_status",
      PAUSED_INELIGIBLE_LPA_STATUS: "paused_ineligible_lpa_status",
      PENDING_PROCESS: "pending_process",
      PENDING_STATUS: "pending_status",
      PREPARING: "preparing",
      REACH_AND_FREQUENCY_UNDERDELIVERING_PACING_OFF_TRACK:
        "reach_and_frequency_underdelivering_pacing_off_track",
      REACH_AND_FREQUENCY_UNDERDELIVERING_PACING_ON_TRACK:
        "reach_and_frequency_underdelivering_pacing_on_track",
      REGIONAL_REGULATION_MULTI_GEO_ERROR:
        "regional_regulation_multi_geo_error",
      REGIONAL_REGULATION_MULTI_GEO_WARNING:
        "regional_regulation_multi_geo_warning",
      REGIONAL_REGULATION_SINGLE_GEO_ERROR:
        "regional_regulation_single_geo_error",
      REGIONAL_REGULATION_SINGLE_GEO_WARNING:
        "regional_regulation_single_geo_warning",
      SCHEDULED: "scheduled",
      SELF_REPORT_IN_REVIEW: "self_report_in_review",
      SETUP_ERROR: "setup_error",
      SHOPS_ADS_DISCONNECTED_IDENTITY: "shops_ads_disconnected_identity",
      SHOPS_ADS_INVALID_PRODUCT: "shops_ads_invalid_product",
      SHOPS_ADS_OFFSITE_PROMOTED_OBJECT: "SHOPS_ADS_OFFSITE_PROMOTED_OBJECT",
      SHOPS_ADS_SHOP_SETUP_FAILED: "shops_ads_shop_setup_failed",
      SIGNAL_DIAGNOSTIC_ISSUE: "signal_diagnostic_issue",
      SINGLE_ALL_AD_OFF: "single_all_ad_off",
      SINGLE_ALL_AD_SET_OFF: "single_all_ad_set_off",
      SOFT_ERROR_VALIDATION: "soft_error_validation",
      SOME_AD_SETS_IN_ERROR: "some_ad_sets_in_error",
      SOME_ADS_HAVE_WARNINGS: "some_ads_have_warnings",
      SOME_ADS_IN_ERROR: "some_ads_in_error",
      TEXT_PENALTY: "text_penalty",
      TEXT_PENALTY_HIGH: "text_penalty_high",
      UPDATING_CONVERSION_EVENT: "updating_conversion_event",
      WEB_ONLY_DEPRECATION_WARNING: "web_only_deprecation_warning",
      WITH_ISSUES: "with_issues",
      YOUTH_ADS_PAUSE_YOUTH_ONLY_ERROR: "youth_ads_pause_youth_only_error",
      YOUTH_ADS_PAUSE_YOUTH_ONLY_WARNING: "youth_ads_pause_youth_only_warning",
    });
    i.default = e;
  },
  66,
);
