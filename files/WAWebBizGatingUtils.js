__d(
  "WAWebBizGatingUtils",
  [
    "$InternalEnum",
    "WALogger",
    "WAWebABProps",
    "WAWebBizNativeAdsGatingUtils",
    "WAWebBoolFunc",
    "WAWebBusinessProfileTypes",
    "WAWebClientFeatureFlags",
    "WAWebComplianceConstants",
    "WAWebL10NCountryCodes",
    "WAWebLidMigrationUtils",
    "WAWebMobilePlatforms",
    "WAWebPaymentsGatingUtils",
    "WAWebUserPrefsMeUser",
    "justknobx",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(e) {
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
      return m(t);
    }
    function u(e) {
      return p(e, function () {
        return o("WAWebABProps").getABPropConfigValue(
          "smb_ecommerce_compliance_india_m4",
        );
      });
    }
    function c(e) {
      return p(e, function () {
        return o("WAWebABProps").getABPropConfigValue(
          "smb_ecommerce_compliance_india_m4_5",
        );
      });
    }
    function d(e) {
      var t,
        n = p(e == null ? void 0 : e.id, function () {
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
    function m(e) {
      var t = o("WAWebL10NCountryCodes").getCountryShortcodeByPhone(e || ""),
        n = o("WAWebComplianceConstants").COMPLIANCE_INFO_CODES.INDIA;
      return (
        t === n ||
        o("WAWebClientFeatureFlags").isFeatureEnabled(
          "skip_compliance_phone_check",
        )
      );
    }
    function p(e, t) {
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
      return m(n) ? t() : !1;
    }
    function _() {
      return o("WAWebABProps").getABPropConfigValue("banned_shops_ux_enabled");
    }
    function f() {
      return o("WAWebABProps").getABPropConfigValue("commerce_sanctioned");
    }
    function g() {
      return o("WAWebABProps").getABPropConfigValue(
        "catalog_categories_enabled",
      );
    }
    var h = n("$InternalEnum")({
      DIGITAL_GOODS: "digital-goods",
      PHYSICAL_GOODS: "physical-goods",
      ANY: "any",
      NONE: "none",
    });
    function y(t) {
      t === void 0 && (t = h.NONE);
      try {
        var n = JSON.parse(
            o("WAWebABProps").getABPropConfigValue("order_details_quick_pay"),
          ),
          r = n.allowed_product_type;
        if (r && r !== h.NONE) return r === h.ANY || r === t;
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
    function C() {
      return o("WAWebABProps").getABPropConfigValue(
        "web_enable_biz_catalog_view_ps_logging",
      );
    }
    function b() {
      return o("WAWebABProps").getABPropConfigValue(
        "order_messages_ephemeral_exception_enabled",
      );
    }
    function v() {
      return o("WAWebABProps").getABPropConfigValue("wa_web_fmx_agm_enabled");
    }
    function S() {
      return o("WAWebABProps").getABPropConfigValue(
        "wa_ctwa_log_user_journey_enabled",
      );
    }
    function R() {
      return r("justknobx")._("5593");
    }
    function L() {
      return o("WAWebABProps").getABPropConfigValue("wamo_agm_enabled");
    }
    function E() {
      return !0;
    }
    function k() {
      return o("WAWebABProps").getABPropConfigValue(
        "smb_hide_unsupported_currency_price",
      );
    }
    function I() {
      return o("WAWebMobilePlatforms").isSMB();
    }
    function T() {
      return o("WAWebABProps").getABPropConfigValue(
        "smb_catalog_graphql_verify_postcode",
      );
    }
    function D() {
      return o("WAWebABProps").getABPropConfigValue(
        "smb_catalog_graphql_get_public_key",
      );
    }
    function x() {
      return o("WAWebABProps").getABPropConfigValue(
        "smb_orders_graphql_get_order_info",
      );
    }
    function $() {
      return o("WAWebABProps").getABPropConfigValue(
        "smb_graphql_merchant_info_get_compliance",
      );
    }
    function P() {
      return o("WAWebABProps").getABPropConfigValue(
        "smb_graphql_merchant_info_set_compliance",
      );
    }
    function N() {
      return o("WAWebABProps").getABPropConfigValue(
        "order_details_custom_item_enabled",
      );
    }
    function M() {
      return o("WAWebABProps").getABPropConfigValue(
        "order_details_from_catalog_enabled",
      );
    }
    function w() {
      return o("WAWebABProps").getABPropConfigValue(
        "order_details_from_cart_enabled",
      );
    }
    function A() {
      return o("WAWebABProps").getABPropConfigValue(
        "order_details_total_order_minimum_value",
      );
    }
    function F(e) {
      return o("WAWebPaymentsGatingUtils").isBrazilToBrazilOrder(e)
        ? 5e3
        : o("WAWebABProps").getABPropConfigValue(
            "order_details_total_maximum_value",
          );
    }
    function O() {
      return o("WAWebABProps").getABPropConfigValue("order_management_enabled");
    }
    function B() {
      return o("WAWebABProps").getABPropConfigValue(
        "utm_tracking_expiration_hours",
      );
    }
    function W() {
      return o("WAWebABProps").getABPropConfigValue("utm_tracking_enabled");
    }
    function q() {
      return (
        o("WAWebMobilePlatforms").isSMB() ||
        o("WAWebABProps").getABPropConfigValue(
          "wa_ctwa_web_thread_ad_attribution_enabled",
        )
      );
    }
    function U() {
      return o("WAWebABProps").getABPropConfigValue(
        "wa_ctwa_web_hide_ad_context_if_soft_dismissed_in_primary",
      );
    }
    function V() {
      return o("WAWebABProps").getABPropConfigValue("biz_ai_tos_variant") === 0;
    }
    function H() {
      return o("WAWebABProps").getABPropConfigValue("biz_ai_tos_variant") === 1;
    }
    function G() {
      return o("WAWebABProps").getABPropConfigValue("biz_ai_tos_variant") === 2;
    }
    function z() {
      return o("WAWebABProps").getABPropConfigValue("biz_ai_tos_variant") === 3;
    }
    function j() {
      return (
        o("WAWebMobilePlatforms").isSMB() &&
        o("WAWebABProps").getABPropConfigValue("ctwa_smb_data_sharing_consent")
      );
    }
    function K() {
      return o("WAWebABProps").getABPropConfigValue(
        "ctwa_smb_data_sharing_opt_in_cool_off_period",
      );
    }
    function Q() {
      return o("WAWebMobilePlatforms").isSMB();
    }
    function X() {
      return o("WAWebMobilePlatforms").isSMB();
    }
    function Y() {
      return (
        Q() &&
        o("WAWebABProps").getABPropConfigValue(
          "in_app_comms_manage_ads_web_banner_campaign_enabled",
        )
      );
    }
    function J() {
      return (
        o("WAWebMobilePlatforms").isSMB() &&
        o("WAWebABProps").getABPropConfigValue(
          "wa_ctwa_web_entrypoint_home_header_enabled",
        )
      );
    }
    function Z() {
      return (
        o("WAWebMobilePlatforms").isSMB() &&
        o("WAWebABProps").getABPropConfigValue(
          "wa_ctwa_web_entrypoint_home_header_dropdown_enabled",
        )
      );
    }
    function ee() {
      return (
        o("WAWebMobilePlatforms").isSMB() &&
        o("WAWebABProps").getABPropConfigValue(
          "ctwa_ad_creation_entry_point_catalog_web",
        )
      );
    }
    function te() {
      return (
        o("WAWebMobilePlatforms").isSMB() &&
        o("WAWebABProps").getABPropConfigValue(
          "ctwa_ad_creation_entry_point_catalog_product_web",
        )
      );
    }
    function ne() {
      return (
        o("WAWebMobilePlatforms").isSMB() &&
        o("WAWebABProps").getABPropConfigValue(
          "kill_switch_ctwa_ml_entry_point_config",
        ) === !1
      );
    }
    function re() {
      return o("WAWebABProps").getABPropConfigValue(
        "ctwa_entry_point_config_fetch_threshhold",
      );
    }
    function oe() {
      return (
        ne() &&
        o("WAWebABProps").getABPropConfigValue(
          "ctwa_long_term_holdout_content_enabled",
        )
      );
    }
    function ae() {
      return (
        o("WAWebMobilePlatforms").isSMB() &&
        o("WAWebABProps").getABPropConfigValue(
          "ctwa_long_term_holdout_client_side_check",
        )
      );
    }
    function ie(e) {
      return (
        o("WAWebMobilePlatforms").isSMB() &&
        (e == null ? void 0 : e.hasCreatedAd) === !0 &&
        o("WAWebABProps").getABPropConfigValue(
          "wa_ctwa_web_entrypoint_manage_ads_home_header_dropdown_enabled",
        ) &&
        !o("WAWebBizNativeAdsGatingUtils").nativeAdsDogfoodEnabled()
      );
    }
    function le() {
      return (
        o("WAWebMobilePlatforms").isSMB() &&
        o("WAWebABProps").getABPropConfigValue(
          "wa_ctwa_web_fetch_linked_accounts_enabled",
        )
      );
    }
    function se() {
      return (
        o("WAWebMobilePlatforms").isSMB() &&
        o("WAWebABProps").getABPropConfigValue(
          "ctwa_ad_account_token_storage_kill_switch_web",
        ) === !1
      );
    }
    function ue() {
      return o("WAWebABProps").getABPropConfigValue(
        "ctwa_ad_account_nonce_push_wait_timeout_web",
      );
    }
    function ce() {
      return o("WAWebABProps").getABPropConfigValue(
        "ctwa_ad_account_nonce_retries_max_web",
      );
    }
    function de() {
      return (
        o("WAWebMobilePlatforms").isSMB() &&
        o("WAWebABProps").getABPropConfigValue("smb_labels_ctwa_data_sharing")
      );
    }
    function me() {
      return (
        o("WAWebABProps").getABPropConfigValue(
          "payments_br_content_optimization_variant",
        ) !== 0
      );
    }
    function pe() {
      return (
        o("WAWebMobilePlatforms").isSMB() &&
        o("WAWebABProps").getABPropConfigValue(
          "ctwa_smb_data_sharing_settings_killswitch",
        ) === !1
      );
    }
    function _e() {
      return o("WAWebABProps").getABPropConfigValue(
        "ctwa_enable_biz_data_sharing_after_nux_dismiss",
      );
    }
    function fe() {
      return o("WAWebABProps").getABPropConfigValue(
        "row_buyer_order_revamp_m0_enabled",
      );
    }
    function ge() {
      return o("WAWebABProps").getABPropConfigValue(
        "seller_orders_management_revamp",
      );
    }
    function he() {
      return (
        fe() &&
        o("WAWebABProps").getABPropConfigValue(
          "buyer_initiated_order_request_variant_enabled",
        )
      );
    }
    function ye() {
      return o("WAWebABProps").getABPropConfigValue(
        "order_statuses_revamp_m1_enabled",
      );
    }
    function Ce() {
      return (
        o("WAWebMobilePlatforms").isSMB() &&
        o("WAWebABProps").getABPropConfigValue(
          "ctwa_important_label_sends_signals",
        )
      );
    }
    function be() {
      return o("WAWebABProps").getABPropConfigValue(
        "use_signed_shimmed_url_link",
      );
    }
    function ve() {
      return o("WAWebABProps").getABPropConfigValue(
        "smb_product_country_of_origin_m1",
      );
    }
    function Se() {
      return o("WAWebABProps").getABPropConfigValue(
        "ctwa_download_3pd_signals",
      );
    }
    function Re(e) {
      return s(e) || ve();
    }
    function Le() {
      return s(o("WAWebUserPrefsMeUser").getMePnUserOrThrow_DO_NOT_USE());
    }
    function Ee() {
      return o("WAWebABProps").getABPropConfigValue(
        "web_catalog_recovery_flow_enabled",
      );
    }
    function ke(e) {
      var t = L(),
        n = v();
      return e != null && (t || (n && e.sourceApp !== "whatsapp"));
    }
    function Ie() {
      return o("WAWebABProps").getABPropConfigValue(
        "web_catalog_viewing_variants_enabled",
      );
    }
    function Te() {
      return o("WAWebABProps").getABPropConfigValue(
        "ctwa_custom_label_signals_enabled",
      );
    }
    function De() {
      return o("WAWebABProps").getABPropConfigValue(
        "ctwa_web_custom_label_signals_enabled",
      );
    }
    function xe() {
      return o("WAWebABProps").getABPropConfigValue(
        "ctwa_custom_label_algorithm",
      );
    }
    function $e() {
      return o("WAWebABProps").getABPropConfigValue(
        "ctwa_3pd_opt_out_counter_optimization_enabled",
      );
    }
    function Pe() {
      return o("WAWebABProps").getABPropConfigValue(
        "ctwa_3pd_data_sharing_title_change",
      );
    }
    function Ne() {
      return o("WAWebABProps").getABPropConfigValue(
        "ctwa_3pd_data_sharing_additional_logging",
      );
    }
    function Me() {
      return o("WAWebABProps").getABPropConfigValue(
        "ctwa_3pd_data_sharing_cooldown_max_times_shown_for_opted_out",
      );
    }
    function we() {
      return o("WAWebABProps").getABPropConfigValue(
        "ctwa_smb_label_chat_header_enabled_web",
      );
    }
    function Ae() {
      return o("WAWebABProps").getABPropConfigValue(
        "ctwa_suppress_message_with_external_ad_reply_consumer_db_level_enabled",
      );
    }
    function Fe() {
      return o("WAWebABProps").getABPropConfigValue(
        "per_customer_data_sharing_controls_eligible",
      );
    }
    function Oe() {
      return o("WAWebABProps").getABPropConfigValue(
        "ctwa_per_customer_data_sharing_controls_do_not_show_msg_until_chosen",
      );
    }
    function Be() {
      return o("WAWebABProps").getABPropConfigValue("cci_compliance_ctwa");
    }
    function We() {
      return o("WAWebABProps").getABPropConfigValue(
        "ctwa_tos_filtering_enabled",
      );
    }
    function qe() {
      return o("WAWebABProps").getABPropConfigValue(
        "cci_compliance_ctwa_learn_more_hyperlink",
      );
    }
    function Ue() {
      return o("WAWebABProps").getABPropConfigValue(
        "ctwa_3pd_data_sharing_on_thread_entry",
      );
    }
    function Ve() {
      return o("WAWebABProps").getABPropConfigValue(
        "smb_web_category_search_via_graph_enabled",
      );
    }
    function He() {
      return o("WAWebABProps").getABPropConfigValue("smb_catkit_query_version");
    }
    ((l.canSeeECommerceComplianceIndiaSoftEnforcement = s),
      (l.canSeeECommerceComplianceIndiaHardEnforcementBusinessJourney = u),
      (l.canSeeECommerceComplianceIndiaCountryOriginExemptBusinessJourney = c),
      (l.blockCatalogCreationECommerceComplianceIndia = d),
      (l.bannedShopsEnabled = _),
      (l.commerceFeaturesDisabledBySanctions = f),
      (l.catalogCategoriesEnabled = g),
      (l.QuickPayProductTypeGating = h),
      (l.isOrderDetailsQuickPayEnabled = y),
      (l.isPSForCatalogViewEnabled = C),
      (l.inOrderMessagesEphemeralExceptionEnabled = b),
      (l.getFmxAgmEnabled = v),
      (l.getCtwaLogUserJourneyEnabled = S),
      (l.isCtwaAgmReportingEnabled = R),
      (l.getWamoAgmEnabled = L),
      (l.isQuantityControlsFeatureEnabled = E),
      (l.hideUnsupportedCurrency = k),
      (l.graphQLForGetProductListEnabled = I),
      (l.isGraphQLForVerifyPostcodeEnabled = T),
      (l.isGraphQLForGetPublicKeyEnabled = D),
      (l.graphQLForGetOrderInfoEnabled = x),
      (l.graphQLForGetComplianceInfo = $),
      (l.graphQLForSetComplianceInfo = P),
      (l.orderDetailsCustomItemEnabled = N),
      (l.orderDetailsFromCatalogEnabled = M),
      (l.orderDetailsFromCartEnabled = w),
      (l.orderDetailsTotalOrderMinimumValue = A),
      (l.orderDetailsTotalMaxValue = F),
      (l.orderManagementEnabled = O),
      (l.utmTrackingExpirationInHours = B),
      (l.isUtmTrackingEnabled = W),
      (l.isAdsAttributionEnabled = q),
      (l.isHideAdContextIfSoftDismissed = U),
      (l.isUpdatedConsumerDisclosureUiRowEnabled = V),
      (l.isUpdatedConsumerDisclosureUiIndiaEnabled = H),
      (l.isUpdatedConsumerDisclosureUiBrazilEnabled = G),
      (l.isUpdatedConsumerDisclosureUiEuUkEnabled = z),
      (l.smbDataSharingConsentEnabled = j),
      (l.smbDataSharingOptInCoolOffSeconds = K),
      (l.adsActionBannersEnabled = Q),
      (l.adsActionBannersLoggingEnabled = X),
      (l.adsActionBannersEnabledOnStartup = o("WAWebMobilePlatforms").isSMB),
      (l.adsActionManageAdsBannerEnabled = Y),
      (l.shouldShowAdCreationIcon = J),
      (l.shouldShowAdCreationDropdown = Z),
      (l.adCreationEntryPointCatalogEnabled = ee),
      (l.adCreationEntryPointCatalogProductEnabled = te),
      (l.adEntryPointsConfigurationFetchEnabled = ne),
      (l.adEntryPointsConfigurationFetchThreshold = re),
      (l.adEntryPointsConfigurationFetchM1Enabled = oe),
      (l.isInLongTermHoldoutFallbackWhenAdEntryPointsConfigurationMissing = ae),
      (l.shouldShowManageAdsDropdown = ie),
      (l.shouldFetchLinkedAccounts = le),
      (l.adAccountTokenStoringEnabled = se),
      (l.adAccountTokenNoncePushWaitTimeoutSeconds = ue),
      (l.adAccountTokenNonceMaxRetries = ce),
      (l.isSMBLabelsDataSharingEnabledForChats = de),
      (l.isOrderContentOptimizationEnabled = me),
      (l.shouldShowSMBDataSharingSettings = pe),
      (l.showDataSharingInSettingsAfterNuxDismiss = _e),
      (l.isBuyerOrderRevampEnabled = fe),
      (l.isSellerOrderRevampEnabled = ge),
      (l.isBuyerOrderRequestVariantEnabled = he),
      (l.isOrderStatusM1Enabled = ye),
      (l.is3pdImportantLabelSignalsEnabled = Ce),
      (l.isUsingSignedShimmedLinkInCatalogueEnabled = be),
      (l.isCountryOfOriginEnabled = ve),
      (l.isDownload3PDSignalsEnabled = Se),
      (l.showComplianceFieldsInEditProductDrawer = Re),
      (l.showImporterInformationInEditProductDrawer = Le),
      (l.catalogTokenRecoveryEnabled = Ee),
      (l.shouldGenerateAGMMsgs = ke),
      (l.isCatalogVariantsViewingEnabled = Ie),
      (l.isCTWACustomLabelsSignalsEnabled = Te),
      (l.isCTWAWebCustomLabelsSignalsEnabled = De),
      (l.getCTWACustomLabelAlgorithmGroup = xe),
      (l.isCTWA3pdOptOutCounterOptimizationEnabled = $e),
      (l.isCTWA3pdDataSharingTitleChangeEnabled = Pe),
      (l.isCTWA3pdDataSharingAdditionalLoggingEnabled = Ne),
      (l.getCTWA3pdDataSharingMaxTimesShownForOptedOut = Me),
      (l.isCTWASMBLabelChatHeaderEnabledWeb = we),
      (l.suppressMessageWithExternalAdReplyConsumerEnabled = Ae),
      (l.isPerCustomerDataSharingControlsEnabled = Fe),
      (l.shouldSuppressDataSharingSystemMessageUntilGlobalChoiceMade = Oe),
      (l.showCTWACCICompliantUI = Be),
      (l.isCTWATosFilteringEnabled = We),
      (l.getCTWALearnMoreHyperLinkForCCICompliantUI = qe),
      (l.showCTWA3pdDataSharingDisclosureOnThreadEntry = Ue),
      (l.isCategorySearchViaGraphEnabled = Ve),
      (l.getCatkitVersion = He));
  },
  98,
);
