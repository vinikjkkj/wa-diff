__d(
  "WAWebBizGatingUtils",
  [
    "WAWebABProps",
    "WAWebBizNativeAdsGatingUtils",
    "WAWebBoolFunc",
    "WAWebBusinessProfileTypes",
    "WAWebClientFeatureFlags",
    "WAWebComplianceConstants",
    "WAWebL10NCountryCodes",
    "WAWebLidMigrationUtils",
    "WAWebMobilePlatforms",
    "WAWebUserPrefsMeUser",
    "justknobx",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
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
      return d(t);
    }
    function s(e) {
      return m(e, function () {
        return o("WAWebABProps").getABPropConfigValue(
          "smb_ecommerce_compliance_india_m4",
        );
      });
    }
    function u(e) {
      return m(e, function () {
        return o("WAWebABProps").getABPropConfigValue(
          "smb_ecommerce_compliance_india_m4_5",
        );
      });
    }
    function c(e) {
      var t,
        n = m(e == null ? void 0 : e.id, function () {
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
    function d(e) {
      var t = o("WAWebL10NCountryCodes").getCountryShortcodeByPhone(e || ""),
        n = o("WAWebComplianceConstants").COMPLIANCE_INFO_CODES.INDIA;
      return (
        t === n ||
        o("WAWebClientFeatureFlags").isFeatureEnabled(
          "skip_compliance_phone_check",
        )
      );
    }
    function m(e, t) {
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
      return d(n) ? t() : !1;
    }
    function p() {
      return o("WAWebABProps").getABPropConfigValue("banned_shops_ux_enabled");
    }
    function _() {
      return o("WAWebABProps").getABPropConfigValue("commerce_sanctioned");
    }
    function f() {
      return o("WAWebABProps").getABPropConfigValue(
        "catalog_categories_enabled",
      );
    }
    function g() {
      return o("WAWebABProps").getABPropConfigValue(
        "web_enable_biz_catalog_view_ps_logging",
      );
    }
    function h() {
      return o("WAWebABProps").getABPropConfigValue("wa_web_fmx_agm_enabled");
    }
    function y() {
      return o("WAWebABProps").getABPropConfigValue(
        "wa_ctwa_log_user_journey_enabled",
      );
    }
    function C() {
      return r("justknobx")._("5593");
    }
    function b() {
      return o("WAWebABProps").getABPropConfigValue("wamo_agm_enabled");
    }
    function v() {
      return !0;
    }
    function S() {
      return o("WAWebABProps").getABPropConfigValue(
        "smb_hide_unsupported_currency_price",
      );
    }
    function R() {
      return o("WAWebMobilePlatforms").isSMB();
    }
    function L() {
      return o("WAWebABProps").getABPropConfigValue(
        "smb_catalog_graphql_verify_postcode",
      );
    }
    function E() {
      return o("WAWebABProps").getABPropConfigValue(
        "smb_catalog_graphql_get_public_key",
      );
    }
    function k() {
      return o("WAWebABProps").getABPropConfigValue(
        "utm_tracking_expiration_hours",
      );
    }
    function I() {
      return o("WAWebABProps").getABPropConfigValue("utm_tracking_enabled");
    }
    function T() {
      return (
        o("WAWebMobilePlatforms").isSMB() ||
        o("WAWebABProps").getABPropConfigValue(
          "wa_ctwa_web_thread_ad_attribution_enabled",
        )
      );
    }
    function D() {
      return o("WAWebABProps").getABPropConfigValue(
        "wa_ctwa_web_hide_ad_context_if_soft_dismissed_in_primary",
      );
    }
    function x() {
      return o("WAWebABProps").getABPropConfigValue("biz_ai_tos_variant") === 0;
    }
    function $() {
      return o("WAWebABProps").getABPropConfigValue("biz_ai_tos_variant") === 1;
    }
    function P() {
      return o("WAWebABProps").getABPropConfigValue("biz_ai_tos_variant") === 2;
    }
    function N() {
      return o("WAWebABProps").getABPropConfigValue("biz_ai_tos_variant") === 3;
    }
    function M() {
      return (
        o("WAWebMobilePlatforms").isSMB() &&
        o("WAWebABProps").getABPropConfigValue("ctwa_smb_data_sharing_consent")
      );
    }
    function w() {
      return o("WAWebABProps").getABPropConfigValue(
        "ctwa_smb_data_sharing_opt_in_cool_off_period",
      );
    }
    function A() {
      return o("WAWebMobilePlatforms").isSMB();
    }
    function F() {
      return o("WAWebMobilePlatforms").isSMB();
    }
    function O() {
      return (
        A() &&
        o("WAWebABProps").getABPropConfigValue(
          "in_app_comms_manage_ads_web_banner_campaign_enabled",
        )
      );
    }
    function B() {
      return (
        o("WAWebMobilePlatforms").isSMB() &&
        o("WAWebABProps").getABPropConfigValue(
          "wa_ctwa_web_entrypoint_home_header_enabled",
        )
      );
    }
    function W() {
      return (
        o("WAWebMobilePlatforms").isSMB() &&
        o("WAWebABProps").getABPropConfigValue(
          "wa_ctwa_web_entrypoint_home_header_dropdown_enabled",
        )
      );
    }
    function q() {
      return (
        o("WAWebMobilePlatforms").isSMB() &&
        o("WAWebABProps").getABPropConfigValue(
          "ctwa_ad_creation_entry_point_catalog_web",
        )
      );
    }
    function U() {
      return (
        o("WAWebMobilePlatforms").isSMB() &&
        o("WAWebABProps").getABPropConfigValue(
          "ctwa_ad_creation_entry_point_catalog_product_web",
        )
      );
    }
    function V() {
      return (
        o("WAWebMobilePlatforms").isSMB() &&
        o("WAWebABProps").getABPropConfigValue(
          "kill_switch_ctwa_ml_entry_point_config",
        ) === !1
      );
    }
    function H() {
      return o("WAWebABProps").getABPropConfigValue(
        "ctwa_entry_point_config_fetch_threshhold",
      );
    }
    function G() {
      return (
        V() &&
        o("WAWebABProps").getABPropConfigValue(
          "ctwa_long_term_holdout_content_enabled",
        )
      );
    }
    function z() {
      return (
        o("WAWebMobilePlatforms").isSMB() &&
        o("WAWebABProps").getABPropConfigValue(
          "ctwa_long_term_holdout_client_side_check",
        )
      );
    }
    function j(e) {
      return (
        o("WAWebMobilePlatforms").isSMB() &&
        (e == null ? void 0 : e.hasCreatedAd) === !0 &&
        o("WAWebABProps").getABPropConfigValue(
          "wa_ctwa_web_entrypoint_manage_ads_home_header_dropdown_enabled",
        ) &&
        !o("WAWebBizNativeAdsGatingUtils").nativeAdsDogfoodEnabled()
      );
    }
    function K() {
      return (
        o("WAWebMobilePlatforms").isSMB() &&
        o("WAWebABProps").getABPropConfigValue(
          "wa_ctwa_web_fetch_linked_accounts_enabled",
        )
      );
    }
    function Q() {
      return (
        o("WAWebMobilePlatforms").isSMB() &&
        o("WAWebABProps").getABPropConfigValue(
          "ctwa_ad_account_token_storage_kill_switch_web",
        ) === !1
      );
    }
    function X() {
      return o("WAWebABProps").getABPropConfigValue(
        "ctwa_ad_account_nonce_push_wait_timeout_web",
      );
    }
    function Y() {
      return o("WAWebABProps").getABPropConfigValue(
        "ctwa_ad_account_nonce_retries_max_web",
      );
    }
    function J() {
      return (
        o("WAWebMobilePlatforms").isSMB() &&
        o("WAWebABProps").getABPropConfigValue("smb_labels_ctwa_data_sharing")
      );
    }
    function Z() {
      return (
        o("WAWebMobilePlatforms").isSMB() &&
        o("WAWebABProps").getABPropConfigValue(
          "ctwa_smb_data_sharing_settings_killswitch",
        ) === !1
      );
    }
    function ee() {
      return o("WAWebABProps").getABPropConfigValue(
        "ctwa_enable_biz_data_sharing_after_nux_dismiss",
      );
    }
    function te() {
      return (
        o("WAWebMobilePlatforms").isSMB() &&
        o("WAWebABProps").getABPropConfigValue(
          "ctwa_important_label_sends_signals",
        )
      );
    }
    function ne() {
      return o("WAWebABProps").getABPropConfigValue(
        "use_signed_shimmed_url_link",
      );
    }
    function re() {
      return o("WAWebABProps").getABPropConfigValue(
        "smb_product_country_of_origin_m1",
      );
    }
    function oe() {
      return o("WAWebABProps").getABPropConfigValue(
        "ctwa_download_3pd_signals",
      );
    }
    function ae(t) {
      return e(t) || re();
    }
    function ie() {
      return e(o("WAWebUserPrefsMeUser").getMePnUserOrThrow_DO_NOT_USE());
    }
    function le() {
      return o("WAWebABProps").getABPropConfigValue(
        "web_catalog_recovery_flow_enabled",
      );
    }
    function se(e) {
      var t = b(),
        n = h();
      return e != null && (t || (n && e.sourceApp !== "whatsapp"));
    }
    function ue() {
      return o("WAWebABProps").getABPropConfigValue(
        "web_catalog_viewing_variants_enabled",
      );
    }
    function ce() {
      return o("WAWebABProps").getABPropConfigValue(
        "ctwa_custom_label_signals_enabled",
      );
    }
    function de() {
      return o("WAWebABProps").getABPropConfigValue(
        "ctwa_web_custom_label_signals_enabled",
      );
    }
    function me() {
      return o("WAWebABProps").getABPropConfigValue(
        "ctwa_custom_label_algorithm",
      );
    }
    function pe() {
      return o("WAWebABProps").getABPropConfigValue(
        "ctwa_3pd_opt_out_counter_optimization_enabled",
      );
    }
    function _e() {
      return o("WAWebABProps").getABPropConfigValue(
        "ctwa_3pd_data_sharing_title_change",
      );
    }
    function fe() {
      return o("WAWebABProps").getABPropConfigValue(
        "ctwa_3pd_data_sharing_additional_logging",
      );
    }
    function ge() {
      return o("WAWebABProps").getABPropConfigValue(
        "ctwa_3pd_data_sharing_cooldown_max_times_shown_for_opted_out",
      );
    }
    function he() {
      return o("WAWebABProps").getABPropConfigValue(
        "ctwa_smb_label_chat_header_enabled_web",
      );
    }
    function ye() {
      return o("WAWebABProps").getABPropConfigValue(
        "ctwa_suppress_message_with_external_ad_reply_consumer_db_level_enabled",
      );
    }
    function Ce() {
      return o("WAWebABProps").getABPropConfigValue(
        "per_customer_data_sharing_controls_eligible",
      );
    }
    function be() {
      return o("WAWebABProps").getABPropConfigValue(
        "ctwa_per_customer_data_sharing_controls_do_not_show_msg_until_chosen",
      );
    }
    function ve() {
      return o("WAWebABProps").getABPropConfigValue("cci_compliance_ctwa");
    }
    function Se() {
      return o("WAWebABProps").getABPropConfigValue(
        "ctwa_tos_filtering_enabled",
      );
    }
    function Re() {
      return o("WAWebABProps").getABPropConfigValue(
        "cci_compliance_ctwa_learn_more_hyperlink",
      );
    }
    function Le() {
      return o("WAWebABProps").getABPropConfigValue(
        "ctwa_3pd_data_sharing_on_thread_entry",
      );
    }
    function Ee() {
      return o("WAWebABProps").getABPropConfigValue(
        "smb_web_category_search_via_graph_enabled",
      );
    }
    function ke() {
      return o("WAWebABProps").getABPropConfigValue("smb_catkit_query_version");
    }
    ((l.canSeeECommerceComplianceIndiaSoftEnforcement = e),
      (l.canSeeECommerceComplianceIndiaHardEnforcementBusinessJourney = s),
      (l.canSeeECommerceComplianceIndiaCountryOriginExemptBusinessJourney = u),
      (l.blockCatalogCreationECommerceComplianceIndia = c),
      (l.bannedShopsEnabled = p),
      (l.commerceFeaturesDisabledBySanctions = _),
      (l.catalogCategoriesEnabled = f),
      (l.isPSForCatalogViewEnabled = g),
      (l.getFmxAgmEnabled = h),
      (l.getCtwaLogUserJourneyEnabled = y),
      (l.isCtwaAgmReportingEnabled = C),
      (l.getWamoAgmEnabled = b),
      (l.isQuantityControlsFeatureEnabled = v),
      (l.hideUnsupportedCurrency = S),
      (l.graphQLForGetProductListEnabled = R),
      (l.isGraphQLForVerifyPostcodeEnabled = L),
      (l.isGraphQLForGetPublicKeyEnabled = E),
      (l.utmTrackingExpirationInHours = k),
      (l.isUtmTrackingEnabled = I),
      (l.isAdsAttributionEnabled = T),
      (l.isHideAdContextIfSoftDismissed = D),
      (l.isUpdatedConsumerDisclosureUiRowEnabled = x),
      (l.isUpdatedConsumerDisclosureUiIndiaEnabled = $),
      (l.isUpdatedConsumerDisclosureUiBrazilEnabled = P),
      (l.isUpdatedConsumerDisclosureUiEuUkEnabled = N),
      (l.smbDataSharingConsentEnabled = M),
      (l.smbDataSharingOptInCoolOffSeconds = w),
      (l.adsActionBannersEnabled = A),
      (l.adsActionBannersLoggingEnabled = F),
      (l.adsActionBannersEnabledOnStartup = o("WAWebMobilePlatforms").isSMB),
      (l.adsActionManageAdsBannerEnabled = O),
      (l.shouldShowAdCreationIcon = B),
      (l.shouldShowAdCreationDropdown = W),
      (l.adCreationEntryPointCatalogEnabled = q),
      (l.adCreationEntryPointCatalogProductEnabled = U),
      (l.adEntryPointsConfigurationFetchEnabled = V),
      (l.adEntryPointsConfigurationFetchThreshold = H),
      (l.adEntryPointsConfigurationFetchM1Enabled = G),
      (l.isInLongTermHoldoutFallbackWhenAdEntryPointsConfigurationMissing = z),
      (l.shouldShowManageAdsDropdown = j),
      (l.shouldFetchLinkedAccounts = K),
      (l.adAccountTokenStoringEnabled = Q),
      (l.adAccountTokenNoncePushWaitTimeoutSeconds = X),
      (l.adAccountTokenNonceMaxRetries = Y),
      (l.isSMBLabelsDataSharingEnabledForChats = J),
      (l.shouldShowSMBDataSharingSettings = Z),
      (l.showDataSharingInSettingsAfterNuxDismiss = ee),
      (l.is3pdImportantLabelSignalsEnabled = te),
      (l.isUsingSignedShimmedLinkInCatalogueEnabled = ne),
      (l.isCountryOfOriginEnabled = re),
      (l.isDownload3PDSignalsEnabled = oe),
      (l.showComplianceFieldsInEditProductDrawer = ae),
      (l.showImporterInformationInEditProductDrawer = ie),
      (l.catalogTokenRecoveryEnabled = le),
      (l.shouldGenerateAGMMsgs = se),
      (l.isCatalogVariantsViewingEnabled = ue),
      (l.isCTWACustomLabelsSignalsEnabled = ce),
      (l.isCTWAWebCustomLabelsSignalsEnabled = de),
      (l.getCTWACustomLabelAlgorithmGroup = me),
      (l.isCTWA3pdOptOutCounterOptimizationEnabled = pe),
      (l.isCTWA3pdDataSharingTitleChangeEnabled = _e),
      (l.isCTWA3pdDataSharingAdditionalLoggingEnabled = fe),
      (l.getCTWA3pdDataSharingMaxTimesShownForOptedOut = ge),
      (l.isCTWASMBLabelChatHeaderEnabledWeb = he),
      (l.suppressMessageWithExternalAdReplyConsumerEnabled = ye),
      (l.isPerCustomerDataSharingControlsEnabled = Ce),
      (l.shouldSuppressDataSharingSystemMessageUntilGlobalChoiceMade = be),
      (l.showCTWACCICompliantUI = ve),
      (l.isCTWATosFilteringEnabled = Se),
      (l.getCTWALearnMoreHyperLinkForCCICompliantUI = Re),
      (l.showCTWA3pdDataSharingDisclosureOnThreadEntry = Le),
      (l.isCategorySearchViaGraphEnabled = Ee),
      (l.getCatkitVersion = ke));
  },
  98,
);
