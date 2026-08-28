__d(
  "SignalsDiagnosticEventEnum",
  [],
  function (t, n, r, o, a, i) {
    var e = Object.freeze({
      PIXEL_ALMOST_STANDARD_EVENT: "pixel_almost_standard_event",
      PIXEL_ALMOST_STANDARD_EVENT_V2: "pixel_almost_standard_event_v2",
      PIXEL_INVALID_DELIVERY_CATEGORY: "pixel_invalid_delivery_category",
      PIXEL_MISSING_EVENT: "pixel_missing_event",
      PIXEL_LOW_EVENT_COVERAGE: "pixel_low_event_coverage",
      PIXEL_AAM_OR_MAM_NOT_SETUP: "pixel_aam_or_mam_not_setup",
      PIXEL_LOW_PII_COVERAGE_IN_MAM: "pixel_low_pii_coverage_in_mam",
      PIXEL_INVALID_PII_IN_MAM: "pixel_invalid_pii_in_mam",
      PIXEL_INVALID_VALUE_PARAMETER: "pixel_invalid_value_parameter",
      PIXEL_MISSING_VALUE_PARAMETER: "pixel_missing_value_parameter",
      PIXEL_MISSING_CURRENCY_PARAMETER: "pixel_missing_currency_parameter",
      PIXEL_MISSING_OR_INVALID_CURRENCY: "pixel_missing_or_invalid_currency",
      PIXEL_MISSING_OR_INVALID_VALUE: "pixel_missing_or_invalid_value",
      PIXEL_MISSING_OR_INVALID_VALUE_AND_CURRENCY:
        "pixel_missing_or_invalid_value_and_currency",
      PIXEL_MISSING_OR_INVALID_VALUE_AND_CURRENCY_SINGLE_EVENT:
        "pixel_missing_or_invalid_value_and_currency_single_event",
      PIXEL_MISMATCHED_VALUE_CURRENCY_SINGLE_EVENT:
        "pixel_mismatched_value_currency_single_event",
      PIXEL_APPEND_VALUE_LOW_LOOKBACK_RATE:
        "pixel_append_value_low_lookback_rate",
      PIXEL_APPEND_VALUE_OUT_OF_DATA_FRESHNESS:
        "pixel_append_value_out_of_data_freshness",
      PIXEL_PERCENT_OF_DROPPED_APPEND_VALUE_EVENTS:
        "pixel_percent_of_dropped_append_value_events",
      PIXEL_LOW_PROFIT_COVERAGE: "pixel_low_profit_coverage",
      PIXEL_LOW_PREDICTED_LTV_COVERAGE: "pixel_low_predicted_ltv_coverage",
      PIXEL_APPEND_VALUE_MISSING_OR_INVALID_CURRENCY:
        "pixel_append_value_missing_or_invalid_currency",
      PIXEL_APPEND_VALUE_A2A_JOIN_KEY_LOW_COVERAGE:
        "pixel_append_value_a2a_join_key_low_coverage",
      PIXEL_APPEND_VALUE_A2A_JOIN_KEY_LOW_EVENT_MATCH_RATE:
        "pixel_append_value_a2a_join_key_low_event_match_rate",
      PIXEL_APPEND_VALUE_A2A_JOIN_KEY_LOW_USER_MATCH_RATE:
        "pixel_append_value_a2a_join_key_low_user_match_rate",
      APP_APPEND_VALUE_LOW_LOOKBACK_RATE: "app_append_value_low_lookback_rate",
      APP_MISSING_OR_INVALID_VALUE: "app_missing_or_invalid_value",
      APP_MISSING_OR_INVALID_VALUE_AND_CURRENCY:
        "app_missing_or_invalid_value_and_currency",
      APP_MISSING_OR_INVALID_VALUE_AND_CURRENCY_SINGLE_EVENT:
        "app_missing_or_invalid_value_and_currency_single_event",
      APP_APPEND_VALUE_A2A_JOIN_KEY_LOW_COVERAGE:
        "app_append_value_a2a_join_key_low_coverage",
      APP_APPEND_VALUE_A2A_JOIN_KEY_LOW_EVENT_MATCH_RATE:
        "app_append_value_a2a_join_key_low_event_match_rate",
      APP_APPEND_VALUE_A2A_JOIN_KEY_LOW_USER_MATCH_RATE:
        "app_append_value_a2a_join_key_low_user_match_rate",
      APP_PURCHASE_LIKELY_IAA_HACKER: "app_purchase_likely_iaa_hacker",
      PIXEL_CATALOG_UNMATCHED_EVENTS: "pixel_catalog_unmatched_events",
      PIXEL_CATALOG_NO_CONTENT_ID: "pixel_catalog_no_content_id",
      PIXEL_CATALOG_LOW_PURCHASE_CONTENT_ID_MATCH_RATE:
        "pixel_catalog_low_purchase_content_id_match_rate",
      PIXEL_CATALOG_MISMATCHED_VALUE_CURRENCY:
        "pixel_catalog_mismatched_value_currency",
      APP_CATALOG_UNMATCHED_EVENTS: "app_catalog_unmatched_events",
      APP_CATALOG_NO_CONTENT_ID: "app_catalog_no_content_id",
      APP_CATALOG_LOW_PURCHASE_CONTENT_ID_MATCH_RATE:
        "app_catalog_low_purchase_content_id_match_rate",
      OFFLINE_CATALOG_LOW_CONTENT_ID_COVERAGE:
        "offline_catalog_low_content_id_coverage",
      PIXEL_FROM_MOBILE_WEBVIEW: "pixel_from_mobile_webview",
      PIXEL_EVENT_NOT_TRACKED: "pixel_event_not_tracked",
      PIXEL_MISMATCHED_VALUE_CURRENCY_PARAMETER:
        "pixel_mismatched_value_currency_parameter",
      PIXEL_OUTLIER_VALUE_PARAMETER: "pixel_outlier_value_parameter",
      PIXEL_ABNORMAL_DISTRIBUTION_VALUE_SINGLE_EVENT:
        "pixel_abnormal_distribution_value_single_event",
      PIXEL_PLACEHOLDER_VALUE_SINGLE_EVENT:
        "pixel_placeholder_value_single_event",
      PIXEL_AGGREGATED_SOT_MISSING_GA_EVENT_MAPPING:
        "pixel_aggregated_sot_missing_ga_event_mapping",
      PIXEL_AGGREGATED_SOT_TOO_MANY_MAPPED_GA_EVENTS:
        "pixel_aggregated_sot_too_many_mapped_ga_events",
      PIXEL_AGGREGATED_SOT_EVENT_MAPPING: "pixel_aggregated_sot_event_mapping",
      PIXEL_AGGREGATED_SOT_DATASET_MAPPING:
        "pixel_aggregated_sot_dataset_mapping",
      PIXEL_AGGREGATED_SOT_INCORRECT_URL_PARAMETERS:
        "pixel_aggregated_sot_incorrect_url_parameters",
      PIXEL_AGGREGATED_SOT_MISSING_GA_PROPERTY:
        "pixel_aggregated_sot_missing_ga_property",
      PIXEL_EVENT_NOT_RECEIVED: "pixel_event_not_received",
      PIXEL_MISSING_HOTEL_CONTENT_TYPE: "pixel_missing_hotel_content_type",
      PIXEL_MISSING_FLIGHT_CONTENT_TYPE: "pixel_missing_flight_content_type",
      PIXEL_MISSING_VEHICLE_CONTENT_TYPE: "pixel_missing_vehicle_content_type",
      APP_EVENT_NOT_RECEIVED: "app_event_not_received",
      APP_MISSING_FLIGHT_CONTENT_TYPE: "app_missing_flight_content_type",
      PIXEL_MISSING_CONTENT_IDS: "pixel_missing_content_ids",
      PIXEL_PURCHASE_ORDER_ID: "pixel_purchase_order_id",
      PIXEL_SEARCH_SEARCH_STRING: "pixel_search_search_string",
      PIXEL_ANY_CONTENTS_DYNAMIC_ADS: "pixel_any_contents_dynamic_ads",
      PIXEL_MISSING_BODY_STYLE_VEHICLE_OFFER_ADS:
        "pixel_missing_body_style_vehicle_offer_ads",
      PIXEL_MISSING_BODY_STYLE_AUTOMOTIVE_INVENTORY_ADS:
        "pixel_missing_body_style_automotive_inventory_ads",
      PIXEL_MISSING_MAKE_AUTOMOTIVE_INVENTORY_ADS:
        "pixel_missing_make_automotive_inventory_ads",
      PIXEL_MISSING_MODEL_AUTOMOTIVE_INVENTORY_ADS:
        "pixel_missing_model_automotive_inventory_ads",
      PIXEL_MISSING_YEAR_AUTOMOTIVE_INVENTORY_ADS:
        "pixel_missing_year_automotive_inventory_ads",
      PIXEL_MISSING_FUEL_TYPE_AUTOMOTIVE_INVENTORY_ADS:
        "pixel_missing_fuel_type_automotive_inventory_ads",
      PIXEL_MISSING_DRIVE_TRAIN_AUTOMOTIVE_INVENTORY_ADS:
        "pixel_missing_drive_train_automotive_inventory_ads",
      PIXEL_MISSING_TRANSMISSION_AUTOMOTIVE_INVENTORY_ADS:
        "pixel_missing_transmission_automotive_inventory_ads",
      PIXEL_MISSING_STATE_AUTOMOTIVE_INVENTORY_ADS:
        "pixel_missing_state_automotive_inventory_ads",
      PIXEL_INVALID_BODY_STYLE_AUTOMOTIVE_INVENTORY_ADS:
        "pixel_invalid_body_style_automotive_inventory_ads",
      PIXEL_INVALID_YEAR_AUTOMOTIVE_INVENTORY_ADS:
        "pixel_invalid_year_automotive_inventory_ads",
      PIXEL_INVALID_FUEL_TYPE_AUTOMOTIVE_INVENTORY_ADS:
        "pixel_invalid_fuel_type_automotive_inventory_ads",
      PIXEL_INVALID_DRIVE_TRAIN_AUTOMOTIVE_INVENTORY_ADS:
        "pixel_invalid_drive_train_automotive_inventory_ads",
      PIXEL_INVALID_TRANSMISSION_AUTOMOTIVE_INVENTORY_ADS:
        "pixel_invalid_transmission_automotive_inventory_ads",
      PIXEL_MISSING_REGION_HOTEL: "pixel_missing_region_hotel",
      PIXEL_MISSING_DEPARTING_DEPARTURE_DATE:
        "pixel_missing_departing_departure_date",
      PIXEL_MISSING_RETURNING_DEPARTURE_DATE:
        "pixel_missing_returning_departure_date",
      PIXEL_MISSING_DESTINATION_AIRPORT: "pixel_missing_destination_airport",
      PIXEL_MISSING_ORIGIN_AIRPORT: "pixel_missing_origin_airport",
      PIXEL_INVALID_REGION_HOTEL: "pixel_invalid_region_hotel",
      PIXEL_INVALID_DEPARTING_DEPARTURE_DATE:
        "pixel_invalid_departing_departure_date",
      PIXEL_INVALID_RETURNING_DEPARTURE_DATE:
        "pixel_invalid_returning_departure_date",
      PIXEL_INVALID_DESTINATION_AIRPORT: "pixel_invalid_destination_airport",
      PIXEL_INVALID_ORIGIN_AIRPORT: "pixel_invalid_origin_airport",
      OVERALL_TRAFFIC_ANOMALY: "overall_traffic_anomaly",
      PIXEL_EVENT_TRAFFIC_ANOMALY_V2: "pixel_event_traffic_anomaly_v2",
      APP_EVENT_TRAFFIC_ANOMALY: "app_event_traffic_anomaly",
      WEBSITE_EVENT_SESSION_MULTIPLE_EVENTS_FIRE:
        "website_event_session_multiple_events_fire",
      WEBSITE_EVENT_SESSION_MULTIPLE_PURCHASE_EVENTS_FIRE:
        "website_event_session_multiple_purchase_events_fire",
      OFFLINE_UPLOAD_DELAY: "offline_upload_delay",
      OFFLINE_NO_UPLOAD: "offline_no_upload",
      OFFLINE_UPLOAD_FREQUENCY: "offline_upload_frequency",
      OFFLINE_PRECISE_TIMESTAMPS: "offline_precise_timestamps",
      OFFLINE_NO_ACCOUNT_ASSIGNMENT: "offline_no_account_assignment",
      OFFLINE_DUPLICATE_EVENTS: "offline_duplicate_events",
      OFFLINE_NO_AUTO_TRACKING: "offline_no_auto_tracking",
      OFFLINE_NO_ORDERID: "offline_no_orderid",
      OFFLINE_ITEMNUM_NO_ORDERID: "offline_itemnum_no_orderid",
      OFFLINE_DUP_ORDERID_ITEMNUM: "offline_dup_orderid_itemnum",
      OFFLINE_ORDERID_ITEMNUM_DIFF_EVENT_TIMES:
        "offline_orderid_itemnum_diff_event_times",
      OFFLINE_ORDERID_DIFF_MATCHED_USERS: "offline_orderid_diff_matched_users",
      OFFLINE_API_INVALID_EVENT_VALUE: "offline_api_invalid_event_value",
      OFFLINE_API_EMPTY_DATA: "offline_api_empty_data",
      OFFLINE_API_NOT_ACCEPT_TOS: "offline_api_not_accept_tos",
      OFFLINE_API_EXCEED_MAX_ROW: "offline_api_exceed_max_row",
      OFFLINE_MIN_ATTRIBUTED_EVENTS: "offline_min_attributed_events",
      OFFLINE_ADVANCED_ATTRIBUTED_EVENTS: "offline_advanced_attributed_events",
      OFFLINE_UPLOAD_SUDDEN_DROP: "offline_upload_sudden_drop",
      OFFLINE_EVENTS_POST_API_ERRORS: "offline_events_post_api_errors",
      OFFLINE_UPLOAD_API_VERSION: "offline_upload_api_version",
      OFFLINE_MATCH_RATE_SUDDEN_DROP: "offline_match_rate_sudden_drop",
      OFFLINE_DUPLICATE_SUDDEN_RAISE: "offline_duplicate_sudden_raise",
      OFFLINE_STORE_INVALID_STORE_PAGE_ID:
        "offline_store_invalid_store_page_id",
      OFFLINE_STORE_INVALID_ACTION_SOURCE:
        "offline_store_invalid_action_source",
      OFFLINE_STORE_INVALID_BRAND_PAGE_ID:
        "offline_store_invalid_brand_page_id",
      OFFLINE_STORE_INVALID_STORE_CODE: "offline_store_invalid_store_code",
      OFFLINE_STORE_CODE_HAS_GEO_DATA: "offline_store_code_has_geo_data",
      OFFLINE_STORE_MISSING_BRAND_PAGE_ID_OR_STORE_CODE:
        "offline_store_missing_brand_page_id_or_store_code",
      OFFLINE_COUPON_INVALID_REEDEEMED_CODES:
        "offline_coupon_invalid_reedeemed_codes",
      OMNI_HTE_INVALID_DATA_FORMAT: "omni_hte_invalid_data_format",
      OMNI_HTE_INVALID_FIELD_VALUE: "omni_hte_invalid_field_value",
      OFFLINE_OMNI_BETA_ZERO_PURCHASE_VALUE_EVENT_COVERAGE:
        "offline_omni_beta_zero_purchase_value_event_coverage",
      BUSINESS_MESSAGING_EPD_API_ERROR: "business_messaging_epd_api_error",
      PIXEL_DUPLICATE_EVENT_BY_AUTO_RULE: "pixel_duplicate_event_by_auto_rule",
      PIXEL_CANNOT_DISABLE_RULE_FOR_DUPLICATE_EVENT:
        "pixel_cannot_disable_rule_for_duplicate_event",
      APP_ALMOST_STANDARD_EVENT: "app_almost_standard_event",
      APP_INVALID_CURRENCY: "app_invalid_currency",
      APP_MISSING_EVENT: "app_events_missing_event",
      APP_MISSING_CONVERSION_VALUE: "app_missing_conversion_value",
      APP_INVALID_VALUE_PARAMETER: "app_invalid_value_parameter",
      APP_MISSING_VALUE_PARAMETER: "app_missing_value_parameter",
      APP_MISSING_CURRENCY_PARAMETER: "app_missing_currency_parameter",
      APP_MISSING_OR_INVALID_CURRENCY_CODE:
        "app_missing_or_invalid_currency_code",
      APP_MISSING_CLIENT_IP_ADDRESS: "app_missing_client_ip_address",
      APP_OUTLIER_VALUE_PARAMETER: "app_outlier_value_parameter",
      APP_ABNORMAL_DISTRIBUTION_VALUE_SINGLE_EVENT:
        "app_abnormal_distribution_value_single_event",
      APP_PLACEHOLDER_VALUE_SINGLE_EVENT: "app_placeholder_value_single_event",
      APP_MISSING_CONTENT_IDS: "app_missing_content_ids",
      APP_INVALID_CONTENT_IDS: "app_invalid_content_ids",
      APP_INVALID_CONTENT_TYPE: "app_invalid_content_type",
      APP_PURCHASE_ORDER_ID: "app_purchase_order_id",
      APP_SEARCH_SEARCH_STRING: "app_search_search_string",
      APP_ANY_CONTENTS_DYNAMIC_ADS: "app_any_contents_dynamic_ads",
      APP_MISSING_CHECKIN_DATE_HOTEL: "app_missing_checkin_date_hotel",
      APP_MISSING_CHECKOUT_DATE_HOTEL: "app_missing_checkout_date_hotel",
      APP_MISSING_CITY_HOTEL: "app_missing_city_hotel",
      APP_MISSING_COUNTRY_HOTEL: "app_missing_country_hotel",
      APP_MISSING_REGION_HOTEL: "app_missing_region_hotel",
      APP_MISSING_DEPARTING_DEPARTURE_DATE:
        "app_missing_departing_departure_date",
      APP_MISSING_RETURNING_DEPARTURE_DATE:
        "app_missing_returning_departure_date",
      APP_MISSING_DESTINATION_AIRPORT: "app_missing_destination_airport",
      APP_MISSING_ORIGIN_AIRPORT: "app_missing_origin_airport",
      APP_INVALID_CHECKIN_DATE_HOTEL: "app_invalid_checkin_date_hotel",
      APP_INVALID_CHECKOUT_DATE_HOTEL: "app_invalid_checkout_date_hotel",
      APP_INVALID_CITY_HOTEL: "app_invalid_city_hotel",
      APP_INVALID_COUNTRY_HOTEL: "app_invalid_country_hotel",
      APP_INVALID_REGION_HOTEL: "app_invalid_region_hotel",
      APP_INVALID_DEPARTING_DEPARTURE_DATE:
        "app_invalid_departing_departure_date",
      APP_INVALID_RETURNING_DEPARTURE_DATE:
        "app_invalid_returning_departure_date",
      APP_INVALID_DESTINATION_AIRPORT: "app_invalid_destination_airport",
      APP_INVALID_ORIGIN_AIRPORT: "app_invalid_origin_airport",
      APP_MISSING_ID_IN_CONTENTS: "app_missing_id_in_contents",
      APP_MISSING_SUBSCRIPTION_ID_PARAMETER:
        "app_missing_subscription_id_parameter",
      APP_MISSING_PREDICTED_LTV_PARAMETER:
        "app_missing_predicted_ltv_parameter",
      APP_ATTRIBUTION_DISCREPANCY: "app_attribution_discrepancy",
      PIXEL_ANY_SENSITIVE_DATA: "pixel_any_sensitive_data",
      PIXEL_FROM_PROHIBITED_SOURCE: "pixel_from_prohibited_source",
      PIXEL_FROM_PROHIBITED_SOURCE_V2: "pixel_from_prohibited_source_v2",
      TIERED_ENFORCEMENT_PROHIBITED_SOURCE:
        "tiered_enforcement_prohibited_source",
      PIXEL_SENSITIVE_DATA_IN_EVENT_NAME: "pixel_sensitive_data_event_name",
      PIXEL_NEW_DOMAINS_DETECTED: "pixel_new_domains_detected",
      APP_FROM_PROHIBITED_DSO_ID: "app_from_prohibited_dso_id",
      SENSITIVE_DATA_DETECTED: "sensitive_data_detected",
      APP_HEALTH_SENSITIVE_DATA_DETECTED: "app_health_sensitive_data_detected",
      APP_PII_SENSITIVE_DATA_DETECTED: "app_pii_sensitive_data_detected",
      OFFLINE_PII_SENSITIVE_DATA_DETECTED:
        "offline_pii_sensitive_data_detected",
      PIXEL_PII_SENSITIVE_DATA_DETECTED: "pixel_pii_sensitive_data_detected",
      OFFLINE_HEALTH_SENSITIVE_DATA_DETECTED:
        "offline_health_sensitive_data_detected",
      FINANCE_RESTRICTED_SENSITIVE_DATA_DETECTED:
        "finance_restricted_sensitive_data_detected",
      PIXEL_HEALTH_SENSITIVE_DATA_DETECTED:
        "pixel_health_sensitive_data_detected",
      CONSOLIDATED_SENSITIVE_DATA_DETECTED:
        "consolidated_sensitive_data_detected",
      TIERED_ENFORCEMENT_PROHIBITED_SOURCE_WEB:
        "tiered_enforcement_prohibited_source_web",
      TIERED_ENFORCEMENT_PROHIBITED_SOURCE_APP:
        "tiered_enforcement_prohibited_source_app",
      TIERED_ENFORCEMENT_FULL_BLOCKING_WEB:
        "tiered_enforcement_full_blocking_web",
      TIERED_ENFORCEMENT_FULL_BLOCKING_APP:
        "tiered_enforcement_full_blocking_app",
      TIERED_ENFORCEMENT_EU_ONLY_FULL_BLOCKING_OFFLINE:
        "tiered_enforcement_eu_only_full_blocking_offline",
      TIERED_ENFORCEMENT_EU_ONLY_FULL_BLOCKING_WEB:
        "tiered_enforcement_eu_only_full_blocking_web",
      TIERED_ENFORCEMENT_EU_ONLY_FULL_BLOCKING_APP:
        "tiered_enforcement_eu_only_full_blocking_app",
      VALUE_PARAM_BLOCKED_FINANCE_CATEGORY:
        "value_param_blocked_finance_category",
      CAPI_NO_URL_ENFORCEMENT: "capi_no_url_enforcement",
      CUSTOM_CONVERSION_RESTRICTION_ENFORCEMENT:
        "custom_conversion_restriction_enforcement",
      CUSTOM_EVENT_NAME_RESTRICTION_ENFORCEMENT:
        "custom_event_name_restriction_enforcement",
      VVP_ENFORCEMENT: "vvp_enforcement",
      PIXEL_HELPER_DIAGNOSTIC: "pixel_helper_diagnostic",
      PIXEL_INVALID_PII_PARAMETER: "pixel_invalid_pii_parameter",
      PIXEL_INVALID_ARTICLE_CONTENT_TIER_NEWS_SUBS:
        "pixel_invalid_article_content_tier_news_subs",
      PIXEL_INVALID_SURFACE_NEWS_SUBS:
        "pixel_invalid_view_paywall_surface_news_subs",
      PIXEL_INVALID_SURFACE_IA_NEWS_SUBS:
        "pixel_invalid_view_paywall_surface_ia_news_subs",
      PIXEL_INVALID_SURFACE_MWEB_NEWS_SUBS:
        "pixel_invalid_view_paywall_surface_mweb_news_subs",
      PIXEL_INVALID_IS_SUBSCRIBER_NEWS_SUBS:
        "pixel_invalid_is_subscriber_news_subs",
      PIXEL_MISSING_OFFER_CODE_NEWS_SUBS:
        "pixel_initiate_checkout_missing_offer_code_news_subs",
      PIXEL_MISSING_SUBSCRIPTION_ID_NEWS_SUBS:
        "pixel_missing_subcription_id_news_subs",
      PIXEL_MISSING_ARTICLE_CONTENT_TIER_NEWS_SUBS:
        "pixel_missing_article_content_tier_news_subs",
      PIXEL_MISSING_SURFACE_NEWS_SUBS:
        "pixel_missing_view_paywall_surface_news_subs",
      PIXEL_MISSING_IS_SUBSCRIBER_NEWS_SUBS:
        "pixel_missing_is_subscriber_news_subs",
      PIXEL_CATALOG_MARGIN_SIGNAL_PURCHASE_EVENT:
        "pixel_catalog_margin_signal_purchase_event",
      APP_CATALOG_MARGIN_SIGNAL_PURCHASE_EVENT:
        "app_catalog_margin_signal_purchase_event",
      PIXEL_MISSING_OR_INVALID_NET_REVENUE:
        "pixel_missing_or_invalid_net_revenue",
      APP_MISSING_OR_INVALID_NET_REVENUE: "app_missing_or_invalid_net_revenue",
      PIXEL_MISSING_OR_INVALID_PREDICTED_LTV:
        "pixel_missing_or_invalid_predicted_ltv",
      APP_MISSING_OR_INVALID_PREDICTED_LTV:
        "app_missing_or_invalid_predicted_ltv",
      PIXEL_MISSING_ID_IN_CONTENTS: "pixel_missing_id_in_contents",
      S2S_INVALID_ORDER_ID_LENGTH: "s2s_invalid_order_id_length",
      S2S_NO_MATCH_KEY: "s2s_no_match_key",
      S2S_NO_VALID_MATCH_KEY: "s2s_no_valid_match_key",
      S2S_MISSING_MATCH_KEY: "s2s_missing_match_key",
      S2S_NONEXISTENT_AD_ID: "s2s_nonexistent_ad_id",
      S2S_PII_NOT_HASHED: "s2s_pii_not_hashed",
      S2S_INVALID_IP_ADDRESS: "s2s_invalid_ip_address",
      S2S_INVALID_USER_AGENT: "s2s_invalid_user_agent",
      S2S_INVALID_PURCHASE_EVENT: "s2s_invalid_purchase_event",
      S2S_INVALID_CONTENT_PARAM: "s2s_invalid_content_param",
      S2S_INVALID_FBP_COOKIE: "s2s_invalid_fbp_cookie",
      S2S_INVALID_CLICK_ID: "s2s_invalid_click_id",
      S2S_INVALID_LEAD_ID: "s2s_invalid_lead_id",
      S2S_INVALID_ATTRIBUTION_SHARE: "s2s_invalid_attribution_share",
      S2S_INVALID_TOTAL_CREDIT: "s2s_invalid_total_credit",
      S2S_TOTAL_CREDIT_LESS_THAN_ATTRIBUTION_SHARE:
        "s2s_total_credit_less_than_attribution_share",
      S2S_INVALID_VISIT_TIME: "s2s_invalid_visit_time",
      S2S_INVALID_CAMPAIGN_IDS: "s2s_invalid_campaign_ids",
      S2S_INCONSISTENT_CAMPAIGN_IDS: "s2s_inconsistent_campaign_ids",
      S2S_INCONSISTENT_CLICK_ID: "s2s_inconsistent_click_id",
      S2S_INCONSISTENT_CURRENCY: "s2s_inconsistent_currency",
      S2S_INCONSISTENT_NET_REVENUE: "s2s_inconsistent_net_revenue",
      S2S_INCONSISTENT_VALUE_DATA: "s2s_inconsistent_value_data",
      S2S_INVALID_APPEND_VALUE_EVENT: "s2s_invalid_append_value_event",
      S2S_FAILED_TO_PROCESS: "s2s_failed_to_process",
      S2S_API_VERSION_OUTDATED: "s2s_api_version_outdated",
      S2S_APP_PASSBACK_EVENT_DATA_SOURCE_NOT_CONSOLIDATED:
        "s2s_app_passback_event_data_source_not_consolidated",
      S2S_MISSING_PII_OR_EXTERNAL_ID: "s2s_missing_pii_or_external_id",
      S2S_EXTERN_ID_ASSOCIATIONS_NEVER_MADE:
        "s2s_extern_id_associations_never_made",
      S2S_EXTERN_ID_IN_CUSTOM_DATA: "s2s_extern_id_in_custom_data",
      S2S_ITEM_PRICE_WITHOUT_CURRENCY: "s2s_item_price_without_currency",
      S2S_MISSING_CURRENCY_FOR_VALUE_OR_ITEM_PRICE:
        "s2s_missing_currency_for_value_or_item_price",
      S2S_MISSING_VALUE_FOR_CURRENCY: "s2s_missing_value_for_currency",
      S2S_MISSING_WA_IMP_TOKEN_FOR_WA_MM_ONSITE:
        "s2s_missing_wa_imp_token_for_wa_mm_onsite",
      S2S_WA_IMP_TOKEN_SET_FOR_NON_WA_MM_ONSITE:
        "s2s_wa_imp_token_set_for_non_wa_mm_onsite",
      S2S_MISSING_WA_BIZ_MSG_ID_FOR_WA_MM_ONSITE:
        "s2s_missing_wa_biz_msg_id_for_wa_mm_onsite",
      S2S_WA_BIZ_MSG_ID_SET_FOR_NON_WA_MM_ONSITE:
        "s2s_wa_biz_msg_id_set_for_non_wa_mm_onsite",
      S2S_MISSING_CLICKID_FOR_WA_MM_ONSITE:
        "s2s_missing_clickid_for_wa_mm_onsite",
      S2S_MISSING_PHONE_NUMBER_FOR_WA_MM_ONSITE_CLOUDAPI:
        "s2s_missing_phone_number_for_wa_mm_onsite_cloudapi",
      S2S_MISSING_PRODUCT_CATEGORY_FOR_WA_MM_ONSITE_CLOUDAPI:
        "s2s_missing_product_category_for_wa_mm_onsite_cloudapi",
      S2S_MALFORMED_PASSBACK_EVENT_CUSTOM_DATA:
        "s2s_malformed_passback_event_custom_data",
      S2S_PASSBACK_EVENT_MISSING_ATTRIBUTION_DATA:
        "s2s_passback_event_missing_attribution_data",
      S2S_PASSBACK_EVENT_MISSING_ORIGINAL_EVENT_DATA:
        "s2s_passback_event_missing_original_data",
      S2S_PASSBACK_EVENT_MISSING_METADATA_CONFIG:
        "s2s_passback_event_missing_metadata_config",
      INVALID_CONTENT_TYPE: "invalid_content_type",
      INVALID_CURRENCY: "invalid_currency",
      INVALID_CONTENT_IDS: "invalid_content_ids",
      INVALID_USER_BUCKET: "invalid_user_bucket",
      INVALID_CUSTOMER_SEGMENTATION: "invalid_customer_segmentation",
      S2S_MISSING_IP: "s2s_missing_ip",
      S2S_USER_DATA_PARAMETER_INVALID: "s2s_user_data_parameter_invalid",
      S2S_MISSING_UA: "s2s_missing_ua",
      S2S_CLOUDBRIDGE_LOW_COVERAGE: "s2s_cloudbridge_low_coverage",
      S2S_REDUNDANT_EVENTS_NOT_DEDUPED: "s2s_redundant_events_not_deduped",
      S2S_EVENT_ID_IN_CUSTOM_DATA: "s2s_event_id_in_custom_data",
      S2S_DEDUPE_KEY_LOW_COVERAGE: "s2s_dedupe_key_low_coverage",
      S2S_DEDUPE_KEY_LOW_OVERLAP: "s2s_dedupe_key_low_overlap",
      S2S_DELAY_GREATER_THAN_TWO_HOURS: "s2s_delay_greater_than_two_hours",
      S2S_DELAY_GREATER_THAN_TWENTY_FOUR_HOURS:
        "s2s_delay_greater_than_twenty_four_hours",
      S2S_EVENT_TIME_IN_FUTURE: "s2s_event_time_in_future",
      S2S_EVENT_TIME_TOO_OLD: "s2s_event_time_too_old",
      S2S_ORIGINAL_EVENT_TIME_TOO_OLD: "s2s_original_event_time_too_old",
      S2S_LOW_EVENT_COVERAGE: "s2s_low_event_coverage",
      S2S_LOW_EVENT_COVERAGE_CAPIG_DEMO: "s2s_low_event_coverage_capig_demo",
      SIGNALS_GATEWAY_PIXEL_LOW_EVENT_COVERAGE:
        "signals_gateway_pixel_low_event_coverage",
      S2S_PASSBACK_ATTRIBUTION_EVENT_INVALID_ATTRIBUTION_MODEL:
        "s2s_passback_attribution_event_invalid_attribution_model",
      S2S_PASSBACK_ATTRIBUTION_EVENT_MISSING_OR_INVALID_PARAM:
        "s2s_passback_attribution_event_missing_or_invalid_param",
      S2S_PASSBACK_ATTRIBUTION_EVENT_MISSING_UA:
        "s2s_passback_attribution_event_missing_ua",
      S2S_PASSBACK_ATTRIBUTION_EVENT_MISSING_VISIT_TIME:
        "s2s_passback_attribution_event_missing_visit_time",
      S2S_PASSBACK_ATTRIBUTION_EVENT_MISSING_VISIT_TIME_APP:
        "s2s_passback_attribution_event_missing_visit_time_app",
      S2S_PASSBACK_ATTRIBUTION_EVENT_ANDROID_MISSING_MADID:
        "s2s_passback_attribution_event_android_missing_madid",
      S2S_PASSBACK_ATTRIBUTION_EVENT_MISSING_CURRENCY:
        "s2s_passback_attribution_event_missing_currency",
      S2S_PASSBACK_ATTRIBUTION_EVENT_MISSING_CURRENCY_APP:
        "s2s_passback_attribution_event_missing_currency_app",
      S2S_PASSBACK_ATTRIBUTION_EVENT_MISSING_EVENT_ID:
        "s2s_passback_attribution_event_missing_event_id",
      S2S_PASSBACK_ATTRIBUTION_EVENT_MISSING_EVENT_ID_APP:
        "s2s_passback_attribution_event_missing_event_id_app",
      S2S_PASSBACK_ATTRIBUTION_EVENT_MISSING_AD_ID:
        "s2s_passback_attribution_event_missing_ad_id",
      S2S_PASSBACK_ATTRIBUTION_EVENT_MISSING_AD_ID_APP:
        "s2s_passback_attribution_event_missing_ad_id_app",
      S2S_PASSBACK_ATTRIBUTION_EVENT_MISSING_ADSET_ID:
        "s2s_passback_attribution_event_missing_adset_id",
      S2S_PASSBACK_ATTRIBUTION_EVENT_MISSING_CAMPAIGN_ID:
        "s2s_passback_attribution_event_missing_campaign_id",
      S2S_PASSBACK_ATTRIBUTION_EVENT_MISSING_CLICK_ID:
        "s2s_passback_attribution_event_missing_click_id",
      S2S_PASSBACK_ATTRIBUTION_EVENT_MISSING_CLICK_ID_OR_AGGR_ID:
        "s2s_passback_attribution_event_missing_click_id_or_aggr_id",
      S2S_PASSBACK_ATTRIBUTION_WEB_EVENT_WITH_EXTINFO:
        "s2s_passback_attribution_web_event_with_extinfo",
      S2S_PASSBACK_ATTRIBUTION_APP_EVENT_MISSING_ADS_CLICK_INFO:
        "s2s_passback_attribution_app_event_missing_ads_click_info",
      S2S_PASSBACK_ATTRIBUTION_MISMATCHED_ADID_AND_FBC:
        "s2s_passback_attribution_mismatched_adid_and_fbc",
      S2S_PASSBACK_ATTRIBUTION_MISMATCHED_ADID_AND_FBC_APP:
        "s2s_passback_attribution_mismatched_adid_and_fbc_app",
      S2S_PASSBACK_ATTRIBUTION_MISMATCHED_ADID_AND_CAMPAIGN_IDS:
        "s2s_passback_attribution_mismatched_adid_and_campaign_ids",
      S2S_PASSBACK_ATTRIBUTION_MISMATCHED_ADID_AND_CAMPAIGN_IDS_APP:
        "s2s_passback_attribution_mismatched_adid_and_campaign_ids_app",
      S2S_PASSBACK_ATTRIBUTION_EVENT_DELAYED:
        "s2s_passback_attribution_event_delayed",
      S2S_PASSBACK_ATTRIBUTION_EVENT_DELAYED_APP:
        "s2s_passback_attribution_event_delayed_app",
      S2S_PASSBACK_ATTRIBUTION_EVENT_DELAYED_DEPRECATED:
        "s2s_passback_attribution_event_delayed_24hrs",
      S2S_PASSBACK_ATTRIBUTION_INVALID_FBC:
        "s2s_passback_attribution_invalid_fbc",
      S2S_PASSBACK_ATTRIBUTION_INVALID_FBC_APP:
        "s2s_passback_attribution_invalid_fbc_app",
      S2S_PASSBACK_ATTRIBUTION_INVALID_CAMPAIGN_IDS:
        "s2s_passback_attribution_invalid_campaign_ids",
      S2S_PASSBACK_ATTRIBUTION_INVALID_CAMPAIGN_IDS_APP:
        "s2s_passback_attribution_invalid_campaign_ids_app",
      S2S_PASSBACK_ATTRIBUTION_EVENT_MISSING_ATTRIBUTION_VALUE:
        "s2s_passback_attribution_event_missing_attribution_value",
      S2S_PASSBACK_ATTRIBUTION_EVENT_MISSING_ATTRIBUTION_VALUE_APP:
        "s2s_passback_attribution_event_missing_attribution_value_app",
      S2S_PASSBACK_ATTRIBUTION_EVENT_HIGH_DEDUP_RATE:
        "s2s_passback_attribution_event_high_dedup_rate",
      S2S_PASSBACK_ATTRIBUTION_EVENT_HIGH_DEDUP_RATE_APP:
        "s2s_passback_attribution_event_high_dedup_rate_app",
      S2S_PASSBACK_ATTRIBUTION_INSUFFICIENT_EVENT_VOLUME:
        "s2s_passback_attribution_insufficient_event_volume",
      S2S_PASSBACK_ATTRIBUTION_INSUFFICIENT_EVENT_VOLUME_APP:
        "s2s_passback_attribution_insufficient_event_volume_app",
      S2S_PASSBACK_ATTRIBUTION_INSUFFICIENT_EVENT_COVERAGE:
        "s2s_passback_attribution_insufficient_event_coverage",
      S2S_PASSBACK_ATTRIBUTION_INSUFFICIENT_EVENT_COVERAGE_APP:
        "s2s_passback_attribution_insufficient_event_coverage_app",
      S2S_PASSBACK_ATTRIBUTION_MISSING_IP_ADDRESS:
        "s2s_passback_attribution_missing_ip_address",
      S2S_PASSBACK_ATTRIBUTION_MISSING_IP_ADDRESS_APP:
        "s2s_passback_attribution_missing_ip_address_app",
      S2S_PASSBACK_ATTRIBUTION_EVENT_MISSING_TOUCHPOINT_TS:
        "s2s_passback_attribution_event_missing_touchpoint_ts",
      S2S_PASSBACK_ATTRIBUTION_INCONSISTENT_SHARE_AND_VALUE:
        "s2s_passback_attribution_inconsistent_share_and_value",
      S2S_PASSBACK_ATTRIBUTION_INVALID_ATTRIBUTION_VALUE_AND_SHARE:
        "s2s_passback_attribution_invalid_attribution_value_and_share",
      S2S_PASSBACK_ATTRIBUTION_SHARE_NONZERO_VALUE_ZERO:
        "s2s_passback_attribution_share_nonzero_value_zero",
      S2S_PASSBACK_ATTRIBUTION_MISSING_DATA_DISCARD:
        "s2s_passback_attribution_missing_data_discard",
      S2S_PASSBACK_ATTRIBUTION_MISSING_DATA_DISCARD_APP:
        "s2s_passback_attribution_missing_data_discard_app",
      S2S_PASSBACK_ATTRIBUTION_NON_POSITIVE_CREDIT_DISCARD:
        "s2s_passback_attribution_non_positive_credit_discard",
      S2S_PASSBACK_ATTRIBUTION_NON_POSITIVE_CREDIT_DISCARD_APP:
        "s2s_passback_attribution_non_positive_credit_discard_app",
      S2S_PASSBACK_ATTRIBUTION_EVENT_TIME_TOO_OLD:
        "s2s_passback_attribution_event_time_too_old",
      S2S_PASSBACK_ATTRIBUTION_EVENT_TIME_TOO_OLD_APP:
        "s2s_passback_attribution_event_time_too_old_app",
      S2S_PASSBACK_ATTRIBUTION_ORIGINAL_EVENT_TIME_TOO_OLD:
        "s2s_passback_attribution_original_event_time_too_old",
      S2S_PASSBACK_ATTRIBUTION_ORIGINAL_EVENT_TIME_TOO_OLD_APP:
        "s2s_passback_attribution_original_event_time_too_old_app",
      S2S_PASSBACK_ATTRIBUTION_NONEXISTENT_AD_ID:
        "s2s_passback_attribution_nonexistent_ad_id",
      S2S_PASSBACK_ATTRIBUTION_NONEXISTENT_AD_ID_APP:
        "s2s_passback_attribution_nonexistent_ad_id_app",
      S2S_PASSBACK_ATTRIBUTION_NO_MATCH_KEY:
        "s2s_passback_attribution_no_match_key",
      S2S_PASSBACK_ATTRIBUTION_NO_MATCH_KEY_APP:
        "s2s_passback_attribution_no_match_key_app",
      S2S_INVALID_TOUCHPOINT_TS: "s2s_invalid_touchpoint_ts",
      TEST: "test",
      TEST_2: "test_2",
      S2S_MISSING_ACTION_SOURCE: "s2s_missing_action_source",
      S2S_INVALID_ACTION_SOURCE: "s2s_invalid_action_source",
      S2S_MISSING_EVENT_SOURCE_URL: "s2s_missing_event_source_url",
      S2S_MALFORMED_STANDARD_EVENT_NAME: "s2s_malformed_standard_event_name",
      S2S_MISSING_MESSAGING_CHANNEL: "s2s_missing_messaging_channel",
      S2S_INVALID_MESSAGING_CHANNEL: "s2s_invalid_messaging_channel",
      S2S_INVALID_USE_OF_MESSAGING_LOGGING_SOURCE:
        "s2s_invalid_use_of_messaging_logging_source",
      S2S_ACTION_SOURCE_MESSAGING_CHANNEL_MISMATCH:
        "s2s_action_source_messaging_channel_mismatch",
      CRM_INTEGRATION_LOW_COVERAGE_DATA_ERROR:
        "crm_integrtion_low_coverage_data_error",
      CRM_INTEGRATION_ONE_STAGE_ONLY: "crm_integration_one_stage_only",
      CRM_INTEGRATION_NEW_STAGES_APPEAR_IN_EVENTS:
        "crm_integration_new_stages_appear_in_events",
      CRM_INVALID_LEAD_ID: "crm_invalid_lead_id",
      CRM_INTEGRATION_WRONG_QUALITY_LEAD_EVENT:
        "crm_integration_wrong_quality_lead_event",
      CRM_INTEGRATION_NO_QUALITY_LEAD_EVENT:
        "crm_integration_no_quality_lead_event",
      CRM_INTEGRATION_TOO_MANY_STAGES: "crm_integration_too_many_stages",
      CRM_EVENT_TIME_IN_FUTURE: "crm_event_time_in_future",
      CRM_EVENT_TIME_TOO_OLD: "crm_event_time_too_old",
      CRM_NO_MATCH_KEY: "crm_no_match_key",
      CRM_INTEGRATION_DATA_FRESHNESS: "crm_integration_data_freshness",
      S2S_MISSING_EVENT_NAME: "s2s_missing_event_name",
      S2S_INVALID_EVENT_NAME: "s2s_invalid_event_name",
      S2S_INVALID_CUSTOM_DATA_VALUE: "s2s_invalid_custom_data_value",
      S2S_MESSAGING_EVENT_INVALID_ARGUMENT:
        "s2s_messaging_event_invalid_argument",
      S2S_MESSAGING_EVENT_INVALID_EVENT_TYPE:
        "s2s_messaging_event_invalid_event_type",
      S2S_MESSAGING_EVENT_NO_CUSTOM_DATA: "s2s_messaging_event_no_custom_data",
      S2S_MESSAGING_EVENT_NO_USER_DATA: "s2s_messaging_event_no_user_data",
      S2S_MESSAGING_EVENT_MISSING_PAGE_SCOPED_USER_ID:
        "s2s_messaging_event_missing_page_scoped_user_id",
      S2S_MESSAGING_EVENT_INVALID_PAGE_SCOPED_USER_ID:
        "s2s_messaging_event_invalid_page_scoped_user_id",
      S2S_MESSAGING_EVENT_MISSING_PAGE_ID:
        "s2s_messaging_event_missing_page_id",
      S2S_MESSAGING_EVENT_INVALID_PAGE_ID:
        "s2s_messaging_event_invalid_page_id",
      S2S_MESSAGING_EVENT_MISSING_CTWA_CLID:
        "s2s_messaging_event_missing_ctwa_clid",
      S2S_MESSAGING_EVENT_MISMATCHING_PAGE_ID_AND_CTWA_CLID:
        "s2s_messaging_event_mismatching_page_id_and_ctwa_clid",
      S2S_MESSAGING_EVENT_MISMATCHING_WHATSAPP_BUSINESS_ACCOUNT_ID_AND_CTWA_CLID:
        "s2s_messaging_event_mismatching_whatsapp_business_account_id_and_ctwa_clid",
      S2S_MESSAGING_EVENT_INVALID_CTWA_CLID:
        "s2s_messaging_event_invalid_ctwa_clid",
      S2S_MESSAGING_EVENT_EXPIRED_CTWA_CLID:
        "s2s_messaging_event_expired_ctwa_clid",
      S2S_MESSAGING_EVENT_MISMATCHING_PAGE_ID_AND_PAGE_SCOPED_USER_ID:
        "s2s_messaging_event_mismatching_page_id_and_page_scoped_user_id",
      S2S_MESSAGING_EVENT_MISMATCHING_PAGE_AND_DATASET:
        "s2s_messaging_event_mismatching_page_and_dataset",
      S2S_MESSAGING_EVENT_MISMATCHING_WHATSAPP_BUSINESS_ACCOUNT_AND_DATASET:
        "s2s_messaging_event_mismatching_whatsapp_business_account_and_dataset",
      S2S_MESSAGING_EVENT_NO_PAGE_ASSOCIATED_TO_DATASET:
        "s2s_messaging_event_no_page_associated_to_dataset",
      S2S_MESSAGING_EVENT_NO_WABA_ASSOCIATED_TO_DATASET:
        "s2s_messaging_event_no_waba_associated_to_dataset",
      S2S_MESSAGING_EVENT_NO_LOGGING_TARGET:
        "s2s_messaging_event_no_logging_target",
      S2S_MESSAGING_EVENT_MISSING_IG_SID: "s2s_messaging_event_missing_ig_sid",
      S2S_MESSAGING_EVENT_INVALID_IG_SID: "s2s_messaging_event_invalid_ig_sid",
      S2S_MESSAGING_EVENT_MISMATCHING_IG_ACCOUNT_AND_DATASET:
        "s2s_messaging_event_mismatching_ig_account_and_dataset",
      S2S_MESSAGING_EVENT_NO_IG_ACCOUNT_ASSOCIATED_TO_DATASET:
        "s2s_messaging_event_no_ig_account_associated_to_dataset",
      S2S_MESSAGING_EVENT_MISSING_IG_ACCOUNT_ID:
        "s2s_messaging_event_missing_ig_account_id",
      S2S_MESSAGING_EVENT_INVALID_IG_ACCOUNT_ID:
        "s2s_messaging_event_invalid_ig_account_id",
      S2S_MESSAGING_EVENT_MISMATCHING_IG_ACCOUNT_ID_AND_IG_SID:
        "s2s_messaging_event_mismatching_ig_account_id_and_ig_sid",
      S2S_MESSAGING_EVENT_INVALID_ORDER_CREATED_EVENT:
        "s2s_messaging_event_invalid_order_created_event",
      S2S_MESSAGING_EVENT_INVALID_ORDER_SHIPPED_EVENT:
        "s2s_messaging_event_invalid_order_shipped_event",
      S2S_MESSAGING_EVENT_NO_MODEL_DATA_ALLOWED_FOR_REPORTED_OUTCOME:
        "s2s_messaging_event_no_model_data_allowed_for_reported_outcome",
      S2S_MESSAGING_EVENT_NO_MODEL_DATA_FOR_DETECTED_OUTCOME:
        "s2s_messaging_event_no_model_data_for_detected_outcome",
      S2S_MISSING_EVENT_TIME_OR_ORDER_ID: "s2s_missing_event_time_or_order_id",
      S2S_MISSING_ORIGINAL_EVENT_TIME: "s2s_missing_original_event_time",
      S2S_MISSING_ORIGINAL_EVENT_NAME: "s2s_missing_original_event_name",
      S2S_INVALID_ORIGINAL_EVENT_NAME: "s2s_invalid_original_event_name",
      S2S_MESSAGING_EVENT_MISSING_PAGE_ID_OR_WHATSAPP_BUSINESS_ACCOUNT_ID:
        "s2s_messaging_event_missing_page_id_or_whatsapp_business_account_id",
      S2S_MESSAGING_EVENT_INVALID_WHATSAPP_BUSINESS_ACCOUNT_ID:
        "s2s_messaging_event_invalid_whatsapp_business_account_id",
      S2S_MESSAGING_EVENT_INVALID_WHATSAPP_ACCOUNT_ID:
        "s2s_messaging_event_invalid_whatsapp_account_id",
      S2S_MESSAGING_EVENT_NO_WAAC_ASSOCIATED_TO_DATASET:
        "s2s_messaging_event_no_waac_associated_to_dataset",
      S2S_MESSAGING_EVENT_MISMATCHING_WHATSAPP_ACCOUNT_AND_DATASET:
        "s2s_messaging_event_mismatching_whatsapp_account_and_dataset",
      S2S_MESSAGING_EVENT_MISMATCHING_WHATSAPP_ACCOUNT_ID_AND_CTWA_CLID:
        "s2s_messaging_event_mismatching_whatsapp_account_id_and_ctwa_clid",
      S2S_MESSAGING_EVENT_EPD_FILTER: "s2s_messaging_event_epd_filter",
      CAPI_IP_ADDRESS_HOT_IP: "capi_ip_address_hot_ip",
      CAPI_IP_ADDRESS_FAKE_IP: "capi_ip_address_fake_ip",
      CAPI_IP_ADDRESS_EMPTY_IP: "capi_ip_address_empty_ip",
      CAPI_IP_ADDRESS_NAT_IP: "capi_ip_address_nat_ip",
      CAPI_IP_ADDRESS_IP_V4: "capi_ip_address_ip_v4",
      CAPI_IP_ADDRESS_IP_VALUE_MISMATCH: "capi_ip_address_ip_value_mismatch",
      CAPI_IP_ADDRESS_RELAY_IP: "capi_ip_address_relay_ip",
      CAPI_FBC_INVALID_CLICK_ID: "capi_fbc_invalid_click_id",
      CAPI_FBC_INVALID_CREATION_TIME: "capi_fbc_invalid_creation_time",
      CAPI_FBC_INVALID_SUBDOMAIN_INDEX: "capi_fbc_invalid_subdomain_index",
      CAPI_FBC_COVERAGE_ISSUE: "capi_fbc_coverage_issue",
      CAPI_FBC_EXPIRED_CLICK_ID: "capi_fbc_expired_click_id",
      CAPI_FBC_MATCHABILITY_ISSUE: "capi_fbc_matchability_issue",
      CAPI_PII_EMAIL_HOT_EMAIL: "capi_pii_email_hot_email",
      CAPI_PII_EMAIL_INVALID_EMAIL: "capi_pii_email_invalid_email",
      CAPI_PII_EMAIL_HOT_EMAIL_EMPTY: "capi_pii_email_hot_email_empty",
      CAPI_PII_EMAIL_HOT_EMAIL_NULL: "capi_pii_email_hot_email_null",
      CAPI_PII_EMAIL_HOT_EMAIL_FAKE: "capi_pii_email_hot_email_fake",
      CAPI_PII_PHONE_HOT_PHONE: "capi_pii_phone_hot_phone",
      CAPI_PII_PHONE_INVALID_PHONE: "capi_pii_phone_invalid_phone",
      CAPI_PII_PHONE_HOT_PHONE_EMPTY: "capi_pii_phone_hot_phone_empty",
      CAPI_PII_PHONE_HOT_PHONE_NULL: "capi_pii_phone_hot_phone_null",
      CAPI_PII_PHONE_HOT_PHONE_FAKE: "capi_pii_phone_hot_phone_fake",
      CAPI_EMAIL_INVALID_ISSUE: "capi_email_invalid_issue",
      CAPI_PHONE_INVALID_ISSUE: "capi_phone_invalid_issue",
      PIXEL_MISSING_QUANTITY_IN_CONTENTS: "pixel_missing_quantity_in_contents",
      APP_MISSING_QUANTITY_IN_CONTENTS: "app_missing_quantity_in_contents",
      PIXEL_MISSING_OR_INVALID_QUANTITY_IN_CONTENTS:
        "pixel_missing_or_invalid_quantity_in_contents",
      APP_MISSING_OR_INVALID_QUANTITY_IN_CONTENTS:
        "app_missing_or_invalid_quantity_in_contents",
      OFFLINE_CATALOG_LOW_MATCH_RATE_DIAGNOSTIC:
        "offline_catalog_low_match_rate_diagnostic",
      OFFLINE_CATALOG_LOW_MATCH_RATE_WARNING_DIAGNOSTIC:
        "offline_catalog_low_match_rate_warning_diagnostic",
      S2S_MISSING_ATTRIBUTION_DATA_TOUCHPOINT_ID:
        "s2s_missing_attribution_data_touchpoint_id",
      S2S_UNSUPPORTED_ATTRIBUTION_DATA_VISIT_TIME:
        "s2s_unsupported_attribution_data_visit_time",
      PIXEL_ACQUISITION_EVENT_A2A_JOIN_KEY_LOW_COVERAGE:
        "pixel_acquisition_event_a2a_join_key_low_coverage",
      APP_ACQUISITION_EVENT_A2A_JOIN_KEY_LOW_COVERAGE:
        "app_acquisition_event_a2a_join_key_low_coverage",
      ADD_MISSING_EVENTS: "add_missing_events",
      PIXEL_MISSING_OR_INVALID_CURRENCY_NON_REAL_TIME:
        "pixel_missing_or_invalid_currency_non_real_time",
      PIXEL_MISSING_OR_INVALID_VALUE_NON_REAL_TIME:
        "pixel_missing_or_invalid_value_non_real_time",
      APP_MISSING_OR_INVALID_VALUE_NON_REAL_TIME:
        "app_missing_or_invalid_value_non_real_time",
      APP_MISSING_OR_INVALID_CURRENCY_CODE_NON_REAL_TIME:
        "app_missing_or_invalid_currency_code_non_real_time",
      INVALID_LEAD_ID: "invalid_lead_id",
      PIXEL_MISSING_PROGRAM_NAME: "pixel_missing_program_name",
      PIXEL_MISSING_EDUCATION_CONTENT_IDS:
        "pixel_missing_education_content_ids",
      PIXEL_MISSING_PROGRAM_TYPE: "pixel_missing_program_type",
      PIXEL_MISSING_EDUCATION_CONTENT_TYPE:
        "pixel_missing_education_content_type",
      PIXEL_MISSING_EDUCATION_CURRENCY: "pixel_missing_education_currency",
      PIXEL_MISSING_EDUCATION_VALUE: "pixel_missing_education_value",
      SOURCE_CLASSIFICATION_NOTICE: "source_classification_notice",
      VALUE_MISSING_OR_INVALID_VALUE_AND_CURRENCY:
        "value_missing_or_invalid_value_and_currency",
      PIXEL_MISSING_VALUE_PARAMETER_V2: "pixel_missing_value_parameter_v2",
      PIXEL_INVALID_CURRENCY: "pixel_invalid_currency",
      PIXEL_INVALID_CONVERSION_VALUE: "pixel_invalid_conversion_value",
      PIXEL_MISSING_CONVERSION_VALUE: "pixel_missing_conversion_value",
      S2S_API_VERSION_DEPRECATION_SCHEDULED_ONE_MONTH:
        "s2s_api_version_deprecation_scheduled_one_month",
      S2S_PRIVATE_IP_ADDRESS: "s2s_private_ip_address",
      S2S_MISSING_ADEQUATE_USER_DATA: "s2s_missing_adequate_user_data",
      PIXEL_EVENT_TRAFFIC_ANOMALY: "pixel_event_traffic_anomaly",
      LOW_LEAD_ID_COVERAGE: "low_lead_id_coverage",
      CRM_INVALID_EVENT_NAME: "crm_invalid_event_name",
      CRM_INTEGRATION_LOW_VOLUME_DATA_ERROR:
        "crm_integrtion_low_volume_data_error",
      S2S_PASSBACK_ATTRIBUTION_EVENT_MISSING_NET_REVENUE:
        "s2s_passback_attribution_event_missing_net_revenue",
      S2S_PASSBACK_ATTRIBUTION_NET_REVENUE_GT_VALUE:
        "s2s_passback_attribution_net_revenue_gt_value",
      S2S_PASSBACK_ATTRIBUTION_EVENT_MISSING_VALUE:
        "s2s_passback_attribution_event_missing_value",
      OFFLINE_OMNI_BETA_LOW_PURCHASE_EVENT_COVERAGE:
        "offline_omni_beta_low_purchase_event_coverage",
      OFFLINE_ZERO_PURCHASE_VALUE_COVERAGE:
        "offline_zero_purchase_value_coverage",
      RMN_SIGNAL_QUALITY: "rmn_signal_quality",
      PIXEL_INVALID_MAKE_VEHICLE_OFFER_ADS:
        "pixel_invalid_make_vehicle_offer_ads",
      PIXEL_MISSING_CHECKIN_DATE_HOTEL: "pixel_missing_checkin_date_hotel",
      PIXEL_INVALID_ID_IN_CONTENTS: "pixel_invalid_id_in_contents",
      PIXEL_MISSING_CHECKOUT_DATE_HOTEL: "pixel_missing_checkout_date_hotel",
      APP_INVALID_ID_IN_CONTENTS: "app_invalid_id_in_contents",
      PIXEL_INVALID_CONTENT_TYPE: "pixel_invalid_content_type",
      PIXEL_INVALID_QUANTITY_IN_CONTENTS: "pixel_invalid_quantity_in_contents",
      PIXEL_INVALID_STATE_OF_VEHICLE_AUTOMOTIVE_INVENTORY_ADS:
        "pixel_invalid_state_of_vehicle_automotive_inventory_ads",
      PIXEL_INVALID_YEAR_VEHICLE_OFFER_ADS:
        "pixel_invalid_year_vehicle_offer_ads",
      APP_MISSING_CONTENT_TYPE: "app_missing_content_type",
      PIXEL_MISSING_CONTENT_TYPE: "pixel_missing_content_type",
      PIXEL_INVALID_CITY_HOTEL: "pixel_invalid_city_hotel",
      PIXEL_MISSING_SUBSCRIPTION_ID_PARAMETER:
        "pixel_missing_subscription_id_parameter",
      PIXEL_MISSING_PREDICTED_LTV_PARAMETER:
        "pixel_missing_predicted_ltv_parameter",
      PIXEL_INVALID_CHECKIN_DATE_HOTEL: "pixel_invalid_checkin_date_hotel",
      APP_INVALID_QUANTITY_IN_CONTENTS: "app_invalid_quantity_in_contents",
      PIXEL_INVALID_MAKE_AUTOMOTIVE_INVENTORY_ADS:
        "pixel_invalid_make_automotive_inventory_ads",
      PIXEL_MISSING_MAKE_VEHICLE_OFFER_ADS:
        "pixel_missing_make_vehicle_offer_ads",
      PIXEL_INVALID_CHECKOUT_DATE_HOTEL: "pixel_invalid_checkout_date_hotel",
      PIXEL_MISSING_CITY_HOTEL: "pixel_missing_city_hotel",
      PIXEL_INVALID_MODEL_AUTOMOTIVE_INVENTORY_ADS:
        "pixel_invalid_model_automotive_inventory_ads",
      PIXEL_INVALID_CONTENT_IDS: "pixel_invalid_content_ids",
      PIXEL_INVALID_MODEL_VEHICLE_OFFER_ADS:
        "pixel_invalid_model_vehicle_offer_ads",
      PIXEL_INVALID_COUNTRY_HOTEL: "pixel_invalid_country_hotel",
      PIXEL_MISSING_YEAR_VEHICLE_OFFER_ADS:
        "pixel_missing_year_vehicle_offer_ads",
      PIXEL_INVALID_BODY_STYLE_VEHICLE_OFFER_ADS:
        "pixel_invalid_body_style_vehicle_offer_ads",
      PIXEL_MISSING_MODEL_VEHICLE_OFFER_ADS:
        "pixel_missing_model_vehicle_offer_ads",
      PIXEL_MISSING_COUNTRY_HOTEL: "pixel_missing_country_hotel",
      CRM_INTEGRATION_LEAD_RETRIEVAL: "crm_integration_lead_retrieval",
      APP_INVALID_DELIVERY_CATEGORY: "app_invalid_delivery_category",
      APP_SENSITIVE_DATA_IN_EVENT_NAME: "app_sensitive_data_event_name",
      APP_INVALID_PII_PARAMETER: "app_invalid_pii_parameter",
    });
    i.default = e;
  },
  66,
);
