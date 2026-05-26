__d(
  "WAWebBizGatingUtils",
  [
    "$InternalEnum",
    "WALogger",
    "WAWebABProps",
    "WAWebBoolFunc",
    "WAWebBusinessProfileTypes",
    "WAWebClientFeatureFlags",
    "WAWebComplianceConstants",
    "WAWebL10NCountryCodes",
    "WAWebLidMigrationUtils",
    "WAWebListsGatingUtils",
    "WAWebMobilePlatforms",
    "WAWebPaymentsGatingUtils",
    "WAWebPrimaryFeatures",
    "WAWebUserPrefsMeUser",
    "justknobx",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s() {
      return o("WAWebMobilePlatforms").isSMB();
    }
    function u() {
      return o("WAWebMobilePlatforms").isSMB();
    }
    function c() {
      return o("WAWebABProps").getABPropConfigValue("web_biz_profile_options");
    }
    function d(e) {
      var t;
      if (e != null) {
        var n;
        if (
          ((t =
            (n = o("WAWebLidMigrationUtils").toPn(e)) == null
              ? void 0
              : n.user),
          t == null)
        )
          return !0;
      }
      return f(t);
    }
    function m(e) {
      return g(e, function () {
        return o("WAWebABProps").getABPropConfigValue(
          "smb_ecommerce_compliance_india_m4",
        );
      });
    }
    function p(e) {
      return g(e, function () {
        return o("WAWebABProps").getABPropConfigValue(
          "smb_ecommerce_compliance_india_m4_5",
        );
      });
    }
    function _(e) {
      var t,
        n = g(e == null ? void 0 : e.id, function () {
          return o("WAWebABProps").getABPropConfigValue(
            "web_abprop_block_catalog_creation_ecommerce_compliance_india",
          );
        });
      return (
        n &&
        (e == null || (t = e.profileOptions) == null
          ? void 0
          : t.commerceExperience) ===
          o("WAWebBusinessProfileTypes").CommerceExperienceTypes.NONE
      );
    }
    function f(e) {
      var t = o("WAWebL10NCountryCodes").getCountryShortcodeByPhone(e || ""),
        n = o("WAWebComplianceConstants").COMPLIANCE_INFO_CODES.INDIA;
      return (
        t === n ||
        o("WAWebClientFeatureFlags").isFeatureEnabled(
          "skip_compliance_phone_check",
        )
      );
    }
    function g(e, t) {
      t === void 0 && (t = o("WAWebBoolFunc").returnFalse);
      var n;
      if (e != null) {
        var r;
        if (
          ((n =
            (r = o("WAWebLidMigrationUtils").toPn(e)) == null
              ? void 0
              : r.user),
          n == null)
        )
          return !0;
      }
      return f(n) ? t() : !1;
    }
    function h() {
      return o("WAWebABProps").getABPropConfigValue("banned_shops_ux_enabled");
    }
    function y() {
      return o("WAWebABProps").getABPropConfigValue(
        "web_abprop_business_profile_refresh_linked_accounts_killswitch",
      );
    }
    function C() {
      return o("WAWebABProps").getABPropConfigValue(
        "web_abprop_business_profile_refresh_linked_account_enabled",
      );
    }
    function b() {
      return o("WAWebABProps").getABPropConfigValue("commerce_sanctioned");
    }
    function v() {
      return o("WAWebABProps").getABPropConfigValue(
        "catalog_categories_enabled",
      );
    }
    var S = n("$InternalEnum")({
      DIGITAL_GOODS: "digital-goods",
      PHYSICAL_GOODS: "physical-goods",
      ANY: "any",
      NONE: "none",
    });
    function R(t) {
      t === void 0 && (t = S.NONE);
      try {
        var n = JSON.parse(
            o("WAWebABProps").getABPropConfigValue("order_details_quick_pay"),
          ),
          r = n.allowed_product_type;
        if (r && r !== S.NONE) return r === S.ANY || r === t;
      } catch (t) {
        o("WALogger").WARN(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "[isOrderDetailsQuickPayEnabled] config parse failed ",
              "",
            ])),
          t,
        );
      }
      return !1;
    }
    function L() {
      return o("WAWebABProps").getABPropConfigValue(
        "web_enable_biz_catalog_view_ps_logging",
      );
    }
    function E() {
      return (
        (o("WAWebMobilePlatforms").isSMB() &&
          o("WAWebABProps").getABPropConfigValue("smart_filters_enabled")) ||
        (!o("WAWebMobilePlatforms").isSMB() &&
          o("WAWebABProps").getABPropConfigValue(
            "smart_filters_enabled_consumer",
          ))
      );
    }
    function k() {
      return o("WAWebABProps").getABPropConfigValue(
        "order_messages_ephemeral_exception_enabled",
      );
    }
    function I() {
      return o("WAWebABProps").getABPropConfigValue(
        "smb_biz_profile_custom_url",
      );
    }
    function T() {
      return o("WAWebABProps").getABPropConfigValue("wa_web_fmx_agm_enabled");
    }
    function D() {
      return o("WAWebABProps").getABPropConfigValue(
        "wa_ctwa_log_user_journey_enabled",
      );
    }
    function x() {
      return r("justknobx")._("5593");
    }
    function $() {
      return o("WAWebABProps").getABPropConfigValue("wamo_agm_enabled");
    }
    function P() {
      return !0;
    }
    function N() {
      return o("WAWebABProps").getABPropConfigValue(
        "smb_temp_cover_photo_privacy_messaging",
      );
    }
    function M() {
      return o("WAWebABProps").getABPropConfigValue(
        "smb_hide_unsupported_currency_price",
      );
    }
    function w() {
      return o("WAWebMobilePlatforms").isSMB();
    }
    function A() {
      return o("WAWebABProps").getABPropConfigValue(
        "smb_catalog_graphql_verify_postcode",
      );
    }
    function F() {
      return o("WAWebABProps").getABPropConfigValue(
        "smb_catalog_graphql_get_public_key",
      );
    }
    function O() {
      return o("WAWebABProps").getABPropConfigValue(
        "smb_orders_graphql_get_order_info",
      );
    }
    function B() {
      return o("WAWebABProps").getABPropConfigValue(
        "smb_graphql_merchant_info_get_compliance",
      );
    }
    function W() {
      return o("WAWebABProps").getABPropConfigValue(
        "smb_graphql_merchant_info_set_compliance",
      );
    }
    function q() {
      return o("WAWebABProps").getABPropConfigValue(
        "order_details_custom_item_enabled",
      );
    }
    function U() {
      return o("WAWebABProps").getABPropConfigValue(
        "order_details_from_catalog_enabled",
      );
    }
    function V() {
      return o("WAWebABProps").getABPropConfigValue(
        "order_details_from_cart_enabled",
      );
    }
    function H() {
      return o("WAWebABProps").getABPropConfigValue(
        "order_details_total_order_minimum_value",
      );
    }
    function G(e) {
      return o("WAWebPaymentsGatingUtils").isBrazilToBrazilOrder(e)
        ? 5e3
        : o("WAWebABProps").getABPropConfigValue(
            "order_details_total_maximum_value",
          );
    }
    function z() {
      return o("WAWebABProps").getABPropConfigValue("order_management_enabled");
    }
    function j() {
      return o("WAWebABProps").getABPropConfigValue(
        "utm_tracking_expiration_hours",
      );
    }
    function K() {
      return o("WAWebABProps").getABPropConfigValue("utm_tracking_enabled");
    }
    function Q() {
      return (
        o("WAWebMobilePlatforms").isSMB() ||
        o("WAWebABProps").getABPropConfigValue(
          "wa_ctwa_web_thread_ad_attribution_enabled",
        )
      );
    }
    function X() {
      return o("WAWebABProps").getABPropConfigValue(
        "wa_ctwa_web_hide_ad_context_if_soft_dismissed_in_primary",
      );
    }
    function Y() {
      return o("WAWebABProps").getABPropConfigValue("biz_ai_tos_variant") === 0;
    }
    function J() {
      return o("WAWebABProps").getABPropConfigValue("biz_ai_tos_variant") === 1;
    }
    function Z() {
      return o("WAWebABProps").getABPropConfigValue("biz_ai_tos_variant") === 2;
    }
    function ee() {
      return o("WAWebABProps").getABPropConfigValue("biz_ai_tos_variant") === 3;
    }
    function te() {
      return (
        o("WAWebMobilePlatforms").isSMB() &&
        o("WAWebABProps").getABPropConfigValue("ctwa_smb_data_sharing_consent")
      );
    }
    function ne() {
      return o("WAWebABProps").getABPropConfigValue(
        "ctwa_smb_data_sharing_opt_in_cool_off_period",
      );
    }
    function re() {
      return o("WAWebMobilePlatforms").isSMB();
    }
    function oe() {
      return o("WAWebMobilePlatforms").isSMB();
    }
    function ae() {
      return (
        re() &&
        o("WAWebABProps").getABPropConfigValue(
          "in_app_comms_manage_ads_web_banner_campaign_enabled",
        )
      );
    }
    function ie() {
      return (
        o("WAWebMobilePlatforms").isSMB() &&
        o("WAWebABProps").getABPropConfigValue(
          "wa_ctwa_web_entrypoint_home_header_enabled",
        )
      );
    }
    function le() {
      return (
        o("WAWebMobilePlatforms").isSMB() &&
        o("WAWebABProps").getABPropConfigValue(
          "wa_ctwa_web_entrypoint_home_header_dropdown_enabled",
        )
      );
    }
    function se() {
      return (
        o("WAWebMobilePlatforms").isSMB() &&
        o("WAWebABProps").getABPropConfigValue(
          "ctwa_ad_creation_entry_point_catalog_web",
        )
      );
    }
    function ue() {
      return (
        o("WAWebMobilePlatforms").isSMB() &&
        o("WAWebABProps").getABPropConfigValue(
          "ctwa_ad_creation_entry_point_catalog_product_web",
        )
      );
    }
    function ce() {
      return (
        o("WAWebMobilePlatforms").isSMB() &&
        o("WAWebABProps").getABPropConfigValue(
          "kill_switch_ctwa_ml_entry_point_config",
        ) === !1
      );
    }
    function de() {
      return o("WAWebABProps").getABPropConfigValue(
        "ctwa_entry_point_config_fetch_threshhold",
      );
    }
    function me() {
      return (
        ce() &&
        o("WAWebABProps").getABPropConfigValue(
          "ctwa_long_term_holdout_content_enabled",
        )
      );
    }
    function pe() {
      return (
        o("WAWebMobilePlatforms").isSMB() &&
        o("WAWebABProps").getABPropConfigValue(
          "ctwa_long_term_holdout_client_side_check",
        )
      );
    }
    function _e(e) {
      return (
        o("WAWebMobilePlatforms").isSMB() &&
        (e == null ? void 0 : e.hasCreatedAd) === !0 &&
        o("WAWebABProps").getABPropConfigValue(
          "wa_ctwa_web_entrypoint_manage_ads_home_header_dropdown_enabled",
        ) &&
        !ge()
      );
    }
    function fe() {
      return (
        o("WAWebMobilePlatforms").isSMB() &&
        o("WAWebABProps").getABPropConfigValue(
          "wa_ctwa_web_fetch_linked_accounts_enabled",
        )
      );
    }
    function ge() {
      return (
        o("WAWebMobilePlatforms").isSMB() &&
        o("WAWebABProps").getABPropConfigValue(
          "ctwa_native_ads_creation_web_enabled",
        )
      );
    }
    function he() {
      return (
        o("WAWebMobilePlatforms").isSMB() &&
        o("WAWebABProps").getABPropConfigValue(
          "ctwa_native_ads_creation_web_hawk_tool_enabled",
        )
      );
    }
    function ye() {
      return (
        o("WAWebMobilePlatforms").isSMB() &&
        o("WAWebABProps").getABPropConfigValue(
          "ctwa_native_ads_creation_web_targeting_modal_hawk_tool_enabled",
        )
      );
    }
    function Ce() {
      return (
        o("WAWebMobilePlatforms").isSMB() &&
        o("WAWebABProps").getABPropConfigValue(
          "ctwa_web_native_ads_mvp_qe1_enabled",
        )
      );
    }
    function be() {
      return (
        o("WAWebMobilePlatforms").isSMB() &&
        o("WAWebABProps").getABPropConfigValue(
          "ctwa_web_native_ads_mvp_qe1_enabled_no_exposure",
        )
      );
    }
    function ve() {
      return (
        o("WAWebMobilePlatforms").isSMB() &&
        o("WAWebABProps").getABPropConfigValue(
          "ctwa_web_native_ads_mvp_qe2_enabled",
        )
      );
    }
    function Se() {
      return o("WAWebMobilePlatforms").isSMB() && r("justknobx")._("4196");
    }
    function Re() {
      return (
        o("WAWebMobilePlatforms").isSMB() &&
        o("WAWebABProps").getABPropConfigValue(
          "smb_core_biz_profile_ux_refreshed",
        )
      );
    }
    function Le() {
      return (
        o("WAWebMobilePlatforms").isSMB() &&
        o("WAWebABProps").getABPropConfigValue(
          "smb_core_biz_profile_ux_refreshed_v2",
        )
      );
    }
    function Ee() {
      return (
        o("WAWebMobilePlatforms").isSMB() &&
        o("WAWebABProps").getABPropConfigValue("smb_core_biz_profile_preview")
      );
    }
    function ke() {
      return o("WAWebABProps").getABPropConfigValue(
        "smb_waldo_service_offerings_selection_enabled",
      );
    }
    function Ie() {
      return o("WAWebABProps").getABPropConfigValue(
        "smb_project_waldo_set_price_tier_biz_profile_enabled",
      );
    }
    function Te() {
      return (
        o("WAWebMobilePlatforms").isSMB() &&
        o("WAWebABProps").getABPropConfigValue(
          "wa_web_biz_profile_graphql_migration",
        )
      );
    }
    function De() {
      return (
        o("WAWebMobilePlatforms").isSMB() &&
        o("WAWebABProps").getABPropConfigValue(
          "ctwa_ad_account_token_storage_kill_switch_web",
        ) === !1
      );
    }
    function xe() {
      return o("WAWebABProps").getABPropConfigValue(
        "ctwa_ad_account_nonce_push_wait_timeout_web",
      );
    }
    function $e() {
      return o("WAWebABProps").getABPropConfigValue(
        "ctwa_ad_account_nonce_retries_max_web",
      );
    }
    function Pe() {
      return (
        o("WAWebMobilePlatforms").isSMB() &&
        o("WAWebABProps").getABPropConfigValue("business_tool_enhanced_logging")
      );
    }
    function Ne() {
      return (
        o("WAWebMobilePlatforms").isSMB() &&
        o("WAWebABProps").getABPropConfigValue("smb_labels_ctwa_data_sharing")
      );
    }
    function Me() {
      return (
        o("WAWebABProps").getABPropConfigValue(
          "payments_br_content_optimization_variant",
        ) !== 0
      );
    }
    function we() {
      return (
        o("WAWebMobilePlatforms").isSMB() &&
        o("WAWebABProps").getABPropConfigValue(
          "ctwa_smb_data_sharing_settings_killswitch",
        ) === !1
      );
    }
    function Ae() {
      return o("WAWebABProps").getABPropConfigValue(
        "ctwa_enable_biz_data_sharing_after_nux_dismiss",
      );
    }
    function Fe() {
      return o("WAWebABProps").getABPropConfigValue(
        "row_buyer_order_revamp_m0_enabled",
      );
    }
    function Oe() {
      return o("WAWebABProps").getABPropConfigValue(
        "seller_orders_management_revamp",
      );
    }
    function Be() {
      return (
        Fe() &&
        o("WAWebABProps").getABPropConfigValue(
          "buyer_initiated_order_request_variant_enabled",
        )
      );
    }
    function We() {
      return o("WAWebABProps").getABPropConfigValue(
        "order_statuses_revamp_m1_enabled",
      );
    }
    function qe() {
      return (
        (o("WAWebMobilePlatforms").isSMB() &&
          o("WAWebPrimaryFeatures").primaryFeatureEnabled(
            "companion_biz_label_sync_support",
          )) ||
        o("WAWebListsGatingUtils").isListsEnabled()
      );
    }
    function Ue() {
      return (
        o("WAWebMobilePlatforms").isSMB() &&
        o("WAWebABProps").getABPropConfigValue(
          "ctwa_important_label_sends_signals",
        )
      );
    }
    function Ve() {
      return o("WAWebABProps").getABPropConfigValue(
        "lid_migration_for_vname_enabled",
      );
    }
    function He() {
      return o("WAWebABProps").getABPropConfigValue(
        "use_signed_shimmed_url_link",
      );
    }
    function Ge() {
      return o("WAWebABProps").getABPropConfigValue(
        "lid_migration_for_biz_profile_enabled",
      );
    }
    function ze() {
      return o("WAWebABProps").getABPropConfigValue(
        "smb_product_country_of_origin_m1",
      );
    }
    function je() {
      return o("WAWebABProps").getABPropConfigValue(
        "ctwa_download_3pd_signals",
      );
    }
    function Ke(e) {
      return d(e) || ze();
    }
    function Qe() {
      return d(o("WAWebUserPrefsMeUser").getMePnUserOrThrow_DO_NOT_USE());
    }
    function Xe() {
      return o("WAWebABProps").getABPropConfigValue(
        "web_catalog_recovery_flow_enabled",
      );
    }
    function Ye(e) {
      var t = $(),
        n = T();
      return e != null && (t || (n && e.sourceApp !== "whatsapp"));
    }
    function Je() {
      return o("WAWebABProps").getABPropConfigValue(
        "web_catalog_viewing_variants_enabled",
      );
    }
    function Ze() {
      return o("WAWebABProps").getABPropConfigValue(
        "ctwa_custom_label_signals_enabled",
      );
    }
    function et() {
      return o("WAWebABProps").getABPropConfigValue(
        "ctwa_web_custom_label_signals_enabled",
      );
    }
    function tt() {
      return o("WAWebABProps").getABPropConfigValue(
        "ctwa_custom_label_algorithm",
      );
    }
    function nt() {
      return o("WAWebABProps").getABPropConfigValue(
        "ctwa_3pd_opt_out_counter_optimization_enabled",
      );
    }
    function rt() {
      return o("WAWebABProps").getABPropConfigValue(
        "ctwa_3pd_data_sharing_title_change",
      );
    }
    function ot() {
      return o("WAWebABProps").getABPropConfigValue(
        "ctwa_3pd_data_sharing_additional_logging",
      );
    }
    function at() {
      return o("WAWebABProps").getABPropConfigValue(
        "ctwa_3pd_data_sharing_cooldown_max_times_shown_for_opted_out",
      );
    }
    function it() {
      return o("WAWebABProps").getABPropConfigValue(
        "ctwa_smb_label_chat_header_enabled_web",
      );
    }
    function lt() {
      return o("WAWebABProps").getABPropConfigValue(
        "ctwa_suppress_message_with_external_ad_reply_consumer_db_level_enabled",
      );
    }
    function st() {
      return o("WAWebABProps").getABPropConfigValue(
        "per_customer_data_sharing_controls_eligible",
      );
    }
    function ut() {
      return o("WAWebABProps").getABPropConfigValue(
        "ctwa_per_customer_data_sharing_controls_do_not_show_msg_until_chosen",
      );
    }
    function ct() {
      return o("WAWebABProps").getABPropConfigValue("cci_compliance_ctwa");
    }
    function dt() {
      return o("WAWebABProps").getABPropConfigValue(
        "ctwa_tos_filtering_enabled",
      );
    }
    function mt() {
      return o("WAWebABProps").getABPropConfigValue(
        "cci_compliance_ctwa_learn_more_hyperlink",
      );
    }
    function pt() {
      return o("WAWebABProps").getABPropConfigValue(
        "ctwa_3pd_data_sharing_on_thread_entry",
      );
    }
    function _t() {
      return o("WAWebABProps").getABPropConfigValue(
        "smb_web_category_search_via_graph_enabled",
      );
    }
    function ft() {
      return o("WAWebABProps").getABPropConfigValue("smb_catkit_query_version");
    }
    ((l.canDisplayLabel = s),
      (l.canEditLabelAssociation = u),
      (l.webBizProfileOptions = c),
      (l.canSeeECommerceComplianceIndiaSoftEnforcement = d),
      (l.canSeeECommerceComplianceIndiaHardEnforcementBusinessJourney = m),
      (l.canSeeECommerceComplianceIndiaCountryOriginExemptBusinessJourney = p),
      (l.blockCatalogCreationECommerceComplianceIndia = _),
      (l.bannedShopsEnabled = h),
      (l.bizLinkedAccountsEnabled = y),
      (l.canViewBizLinkedAccounts = C),
      (l.commerceFeaturesDisabledBySanctions = b),
      (l.catalogCategoriesEnabled = v),
      (l.QuickPayProductTypeGating = S),
      (l.isOrderDetailsQuickPayEnabled = R),
      (l.isPSForCatalogViewEnabled = L),
      (l.smartFiltersEnabled = E),
      (l.inOrderMessagesEphemeralExceptionEnabled = k),
      (l.isCustomURLViaBizProfileEnabled = I),
      (l.getFmxAgmEnabled = T),
      (l.getCtwaLogUserJourneyEnabled = D),
      (l.isCtwaAgmReportingEnabled = x),
      (l.getWamoAgmEnabled = $),
      (l.isQuantityControlsFeatureEnabled = P),
      (l.coverPhotoPrivacyMessagingEnabled = N),
      (l.hideUnsupportedCurrency = M),
      (l.graphQLForGetProductListEnabled = w),
      (l.isGraphQLForVerifyPostcodeEnabled = A),
      (l.isGraphQLForGetPublicKeyEnabled = F),
      (l.graphQLForGetOrderInfoEnabled = O),
      (l.graphQLForGetComplianceInfo = B),
      (l.graphQLForSetComplianceInfo = W),
      (l.orderDetailsCustomItemEnabled = q),
      (l.orderDetailsFromCatalogEnabled = U),
      (l.orderDetailsFromCartEnabled = V),
      (l.orderDetailsTotalOrderMinimumValue = H),
      (l.orderDetailsTotalMaxValue = G),
      (l.orderManagementEnabled = z),
      (l.utmTrackingExpirationInHours = j),
      (l.isUtmTrackingEnabled = K),
      (l.isAdsAttributionEnabled = Q),
      (l.isHideAdContextIfSoftDismissed = X),
      (l.isUpdatedConsumerDisclosureUiRowEnabled = Y),
      (l.isUpdatedConsumerDisclosureUiIndiaEnabled = J),
      (l.isUpdatedConsumerDisclosureUiBrazilEnabled = Z),
      (l.isUpdatedConsumerDisclosureUiEuUkEnabled = ee),
      (l.smbDataSharingConsentEnabled = te),
      (l.smbDataSharingOptInCoolOffSeconds = ne),
      (l.adsActionBannersEnabled = re),
      (l.adsActionBannersLoggingEnabled = oe),
      (l.adsActionBannersEnabledOnStartup = o("WAWebMobilePlatforms").isSMB),
      (l.adsActionManageAdsBannerEnabled = ae),
      (l.shouldShowAdCreationIcon = ie),
      (l.shouldShowAdCreationDropdown = le),
      (l.adCreationEntryPointCatalogEnabled = se),
      (l.adCreationEntryPointCatalogProductEnabled = ue),
      (l.adEntryPointsConfigurationFetchEnabled = ce),
      (l.adEntryPointsConfigurationFetchThreshold = de),
      (l.adEntryPointsConfigurationFetchM1Enabled = me),
      (l.isInLongTermHoldoutFallbackWhenAdEntryPointsConfigurationMissing = pe),
      (l.shouldShowManageAdsDropdown = _e),
      (l.shouldFetchLinkedAccounts = fe),
      (l.nativeAdsDogfoodEnabled = ge),
      (l.nativeAdsCreationHawkToolEnabled = he),
      (l.nativeAdsCreationTargetingModalHawkToolEnabled = ye),
      (l.nativeAdsMvpQE1Enabled = Ce),
      (l.nativeAdsMvpQE1EnabledNoExposure = be),
      (l.nativeAdsMvpQE2Enabled = ve),
      (l.nativeAdsAdvantagePlusAudienceEnabled = Se),
      (l.businessProfileRefreshEnabled = Re),
      (l.businessProfileRefreshV2Enabled = Le),
      (l.businessProfilePreviewEnabled = Ee),
      (l.businessServiceOfferingsEnabled = ke),
      (l.businessPriceTierEnabled = Ie),
      (l.bizProfileGraphQLMigrationEnabled = Te),
      (l.adAccountTokenStoringEnabled = De),
      (l.adAccountTokenNoncePushWaitTimeoutSeconds = xe),
      (l.adAccountTokenNonceMaxRetries = $e),
      (l.isSMBEnhancedLoggingEnabled = Pe),
      (l.isSMBLabelsDataSharingEnabledForChats = Ne),
      (l.isOrderContentOptimizationEnabled = Me),
      (l.shouldShowSMBDataSharingSettings = we),
      (l.showDataSharingInSettingsAfterNuxDismiss = Ae),
      (l.isBuyerOrderRevampEnabled = Fe),
      (l.isSellerOrderRevampEnabled = Oe),
      (l.isBuyerOrderRequestVariantEnabled = Be),
      (l.isOrderStatusM1Enabled = We),
      (l.labelsEditingEnabled = qe),
      (l.is3pdImportantLabelSignalsEnabled = Ue),
      (l.isLidMigrationForVnameEnabled = Ve),
      (l.isUsingSignedShimmedLinkInCatalogueEnabled = He),
      (l.isLidMigrationForBusinessProfileEnabled = Ge),
      (l.isCountryOfOriginEnabled = ze),
      (l.isDownload3PDSignalsEnabled = je),
      (l.showComplianceFieldsInEditProductDrawer = Ke),
      (l.showImporterInformationInEditProductDrawer = Qe),
      (l.catalogTokenRecoveryEnabled = Xe),
      (l.shouldGenerateAGMMsgs = Ye),
      (l.isCatalogVariantsViewingEnabled = Je),
      (l.isCTWACustomLabelsSignalsEnabled = Ze),
      (l.isCTWAWebCustomLabelsSignalsEnabled = et),
      (l.getCTWACustomLabelAlgorithmGroup = tt),
      (l.isCTWA3pdOptOutCounterOptimizationEnabled = nt),
      (l.isCTWA3pdDataSharingTitleChangeEnabled = rt),
      (l.isCTWA3pdDataSharingAdditionalLoggingEnabled = ot),
      (l.getCTWA3pdDataSharingMaxTimesShownForOptedOut = at),
      (l.isCTWASMBLabelChatHeaderEnabledWeb = it),
      (l.suppressMessageWithExternalAdReplyConsumerEnabled = lt),
      (l.isPerCustomerDataSharingControlsEnabled = st),
      (l.shouldSuppressDataSharingSystemMessageUntilGlobalChoiceMade = ut),
      (l.showCTWACCICompliantUI = ct),
      (l.isCTWATosFilteringEnabled = dt),
      (l.getCTWALearnMoreHyperLinkForCCICompliantUI = mt),
      (l.showCTWA3pdDataSharingDisclosureOnThreadEntry = pt),
      (l.isCategorySearchViaGraphEnabled = _t),
      (l.getCatkitVersion = ft));
  },
  98,
);
