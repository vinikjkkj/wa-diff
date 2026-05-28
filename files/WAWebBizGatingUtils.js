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
      return o("WAWebABProps").getABPropConfigValue("commerce_sanctioned");
    }
    function _() {
      return o("WAWebABProps").getABPropConfigValue(
        "catalog_categories_enabled",
      );
    }
    function f() {
      return o("WAWebABProps").getABPropConfigValue(
        "web_enable_biz_catalog_view_ps_logging",
      );
    }
    function g() {
      return o("WAWebABProps").getABPropConfigValue("wa_web_fmx_agm_enabled");
    }
    function h() {
      return o("WAWebABProps").getABPropConfigValue(
        "wa_ctwa_log_user_journey_enabled",
      );
    }
    function y() {
      return r("justknobx")._("5593");
    }
    function C() {
      return o("WAWebABProps").getABPropConfigValue("wamo_agm_enabled");
    }
    function b() {
      return !0;
    }
    function v() {
      return o("WAWebABProps").getABPropConfigValue(
        "smb_hide_unsupported_currency_price",
      );
    }
    function S() {
      return o("WAWebMobilePlatforms").isSMB();
    }
    function R() {
      return o("WAWebABProps").getABPropConfigValue(
        "smb_catalog_graphql_verify_postcode",
      );
    }
    function L() {
      return o("WAWebABProps").getABPropConfigValue(
        "smb_catalog_graphql_get_public_key",
      );
    }
    function E() {
      return o("WAWebABProps").getABPropConfigValue(
        "utm_tracking_expiration_hours",
      );
    }
    function k() {
      return o("WAWebABProps").getABPropConfigValue("utm_tracking_enabled");
    }
    function I() {
      return (
        o("WAWebMobilePlatforms").isSMB() ||
        o("WAWebABProps").getABPropConfigValue(
          "wa_ctwa_web_thread_ad_attribution_enabled",
        )
      );
    }
    function T() {
      return o("WAWebABProps").getABPropConfigValue(
        "wa_ctwa_web_hide_ad_context_if_soft_dismissed_in_primary",
      );
    }
    function D() {
      return o("WAWebABProps").getABPropConfigValue("biz_ai_tos_variant") === 0;
    }
    function x() {
      return o("WAWebABProps").getABPropConfigValue("biz_ai_tos_variant") === 1;
    }
    function $() {
      return o("WAWebABProps").getABPropConfigValue("biz_ai_tos_variant") === 2;
    }
    function P() {
      return o("WAWebABProps").getABPropConfigValue("biz_ai_tos_variant") === 3;
    }
    function N() {
      return (
        o("WAWebMobilePlatforms").isSMB() &&
        o("WAWebABProps").getABPropConfigValue("ctwa_smb_data_sharing_consent")
      );
    }
    function M() {
      return o("WAWebABProps").getABPropConfigValue(
        "ctwa_smb_data_sharing_opt_in_cool_off_period",
      );
    }
    function w() {
      return o("WAWebMobilePlatforms").isSMB();
    }
    function A() {
      return o("WAWebMobilePlatforms").isSMB();
    }
    function F() {
      return (
        w() &&
        o("WAWebABProps").getABPropConfigValue(
          "in_app_comms_manage_ads_web_banner_campaign_enabled",
        )
      );
    }
    function O() {
      return (
        o("WAWebMobilePlatforms").isSMB() &&
        o("WAWebABProps").getABPropConfigValue(
          "wa_ctwa_web_entrypoint_home_header_enabled",
        )
      );
    }
    function B() {
      return (
        o("WAWebMobilePlatforms").isSMB() &&
        o("WAWebABProps").getABPropConfigValue(
          "wa_ctwa_web_entrypoint_home_header_dropdown_enabled",
        )
      );
    }
    function W() {
      return (
        o("WAWebMobilePlatforms").isSMB() &&
        o("WAWebABProps").getABPropConfigValue(
          "ctwa_ad_creation_entry_point_catalog_web",
        )
      );
    }
    function q() {
      return (
        o("WAWebMobilePlatforms").isSMB() &&
        o("WAWebABProps").getABPropConfigValue(
          "ctwa_ad_creation_entry_point_catalog_product_web",
        )
      );
    }
    function U() {
      return (
        o("WAWebMobilePlatforms").isSMB() &&
        o("WAWebABProps").getABPropConfigValue(
          "kill_switch_ctwa_ml_entry_point_config",
        ) === !1
      );
    }
    function V() {
      return o("WAWebABProps").getABPropConfigValue(
        "ctwa_entry_point_config_fetch_threshhold",
      );
    }
    function H() {
      return (
        U() &&
        o("WAWebABProps").getABPropConfigValue(
          "ctwa_long_term_holdout_content_enabled",
        )
      );
    }
    function G() {
      return (
        o("WAWebMobilePlatforms").isSMB() &&
        o("WAWebABProps").getABPropConfigValue(
          "ctwa_long_term_holdout_client_side_check",
        )
      );
    }
    function z(e) {
      return (
        o("WAWebMobilePlatforms").isSMB() &&
        (e == null ? void 0 : e.hasCreatedAd) === !0 &&
        o("WAWebABProps").getABPropConfigValue(
          "wa_ctwa_web_entrypoint_manage_ads_home_header_dropdown_enabled",
        ) &&
        !o("WAWebBizNativeAdsGatingUtils").nativeAdsDogfoodEnabled()
      );
    }
    function j() {
      return (
        o("WAWebMobilePlatforms").isSMB() &&
        o("WAWebABProps").getABPropConfigValue(
          "wa_ctwa_web_fetch_linked_accounts_enabled",
        )
      );
    }
    function K() {
      return (
        o("WAWebMobilePlatforms").isSMB() &&
        o("WAWebABProps").getABPropConfigValue(
          "ctwa_ad_account_token_storage_kill_switch_web",
        ) === !1
      );
    }
    function Q() {
      return o("WAWebABProps").getABPropConfigValue(
        "ctwa_ad_account_nonce_push_wait_timeout_web",
      );
    }
    function X() {
      return o("WAWebABProps").getABPropConfigValue(
        "ctwa_ad_account_nonce_retries_max_web",
      );
    }
    function Y() {
      return (
        o("WAWebMobilePlatforms").isSMB() &&
        o("WAWebABProps").getABPropConfigValue("smb_labels_ctwa_data_sharing")
      );
    }
    function J() {
      return (
        o("WAWebMobilePlatforms").isSMB() &&
        o("WAWebABProps").getABPropConfigValue(
          "ctwa_smb_data_sharing_settings_killswitch",
        ) === !1
      );
    }
    function Z() {
      return o("WAWebABProps").getABPropConfigValue(
        "ctwa_enable_biz_data_sharing_after_nux_dismiss",
      );
    }
    function ee() {
      return (
        o("WAWebMobilePlatforms").isSMB() &&
        o("WAWebABProps").getABPropConfigValue(
          "ctwa_important_label_sends_signals",
        )
      );
    }
    function te() {
      return o("WAWebABProps").getABPropConfigValue(
        "use_signed_shimmed_url_link",
      );
    }
    function ne() {
      return o("WAWebABProps").getABPropConfigValue(
        "smb_product_country_of_origin_m1",
      );
    }
    function re() {
      return o("WAWebABProps").getABPropConfigValue(
        "ctwa_download_3pd_signals",
      );
    }
    function oe(t) {
      return e(t) || ne();
    }
    function ae() {
      return e(o("WAWebUserPrefsMeUser").getMePnUserOrThrow_DO_NOT_USE());
    }
    function ie() {
      return o("WAWebABProps").getABPropConfigValue(
        "web_catalog_recovery_flow_enabled",
      );
    }
    function le(e) {
      var t = C(),
        n = g();
      return e != null && (t || (n && e.sourceApp !== "whatsapp"));
    }
    function se() {
      return o("WAWebABProps").getABPropConfigValue(
        "web_catalog_viewing_variants_enabled",
      );
    }
    function ue() {
      return o("WAWebABProps").getABPropConfigValue(
        "ctwa_3pd_opt_out_counter_optimization_enabled",
      );
    }
    function ce() {
      return o("WAWebABProps").getABPropConfigValue(
        "ctwa_3pd_data_sharing_title_change",
      );
    }
    function de() {
      return o("WAWebABProps").getABPropConfigValue(
        "ctwa_3pd_data_sharing_additional_logging",
      );
    }
    function me() {
      return o("WAWebABProps").getABPropConfigValue(
        "ctwa_3pd_data_sharing_cooldown_max_times_shown_for_opted_out",
      );
    }
    function pe() {
      return o("WAWebABProps").getABPropConfigValue(
        "ctwa_suppress_message_with_external_ad_reply_consumer_db_level_enabled",
      );
    }
    function _e() {
      return o("WAWebABProps").getABPropConfigValue(
        "per_customer_data_sharing_controls_eligible",
      );
    }
    function fe() {
      return o("WAWebABProps").getABPropConfigValue(
        "ctwa_per_customer_data_sharing_controls_do_not_show_msg_until_chosen",
      );
    }
    function ge() {
      return o("WAWebABProps").getABPropConfigValue("cci_compliance_ctwa");
    }
    function he() {
      return o("WAWebABProps").getABPropConfigValue(
        "ctwa_tos_filtering_enabled",
      );
    }
    function ye() {
      return o("WAWebABProps").getABPropConfigValue(
        "cci_compliance_ctwa_learn_more_hyperlink",
      );
    }
    function Ce() {
      return o("WAWebABProps").getABPropConfigValue(
        "ctwa_3pd_data_sharing_on_thread_entry",
      );
    }
    function be() {
      return o("WAWebABProps").getABPropConfigValue("smb_catkit_query_version");
    }
    ((l.canSeeECommerceComplianceIndiaSoftEnforcement = e),
      (l.canSeeECommerceComplianceIndiaHardEnforcementBusinessJourney = s),
      (l.canSeeECommerceComplianceIndiaCountryOriginExemptBusinessJourney = u),
      (l.blockCatalogCreationECommerceComplianceIndia = c),
      (l.commerceFeaturesDisabledBySanctions = p),
      (l.catalogCategoriesEnabled = _),
      (l.isPSForCatalogViewEnabled = f),
      (l.getFmxAgmEnabled = g),
      (l.getCtwaLogUserJourneyEnabled = h),
      (l.isCtwaAgmReportingEnabled = y),
      (l.getWamoAgmEnabled = C),
      (l.isQuantityControlsFeatureEnabled = b),
      (l.hideUnsupportedCurrency = v),
      (l.graphQLForGetProductListEnabled = S),
      (l.isGraphQLForVerifyPostcodeEnabled = R),
      (l.isGraphQLForGetPublicKeyEnabled = L),
      (l.utmTrackingExpirationInHours = E),
      (l.isUtmTrackingEnabled = k),
      (l.isAdsAttributionEnabled = I),
      (l.isHideAdContextIfSoftDismissed = T),
      (l.isUpdatedConsumerDisclosureUiRowEnabled = D),
      (l.isUpdatedConsumerDisclosureUiIndiaEnabled = x),
      (l.isUpdatedConsumerDisclosureUiBrazilEnabled = $),
      (l.isUpdatedConsumerDisclosureUiEuUkEnabled = P),
      (l.smbDataSharingConsentEnabled = N),
      (l.smbDataSharingOptInCoolOffSeconds = M),
      (l.adsActionBannersEnabled = w),
      (l.adsActionBannersLoggingEnabled = A),
      (l.adsActionBannersEnabledOnStartup = o("WAWebMobilePlatforms").isSMB),
      (l.adsActionManageAdsBannerEnabled = F),
      (l.shouldShowAdCreationIcon = O),
      (l.shouldShowAdCreationDropdown = B),
      (l.adCreationEntryPointCatalogEnabled = W),
      (l.adCreationEntryPointCatalogProductEnabled = q),
      (l.adEntryPointsConfigurationFetchEnabled = U),
      (l.adEntryPointsConfigurationFetchThreshold = V),
      (l.adEntryPointsConfigurationFetchM1Enabled = H),
      (l.isInLongTermHoldoutFallbackWhenAdEntryPointsConfigurationMissing = G),
      (l.shouldShowManageAdsDropdown = z),
      (l.shouldFetchLinkedAccounts = j),
      (l.adAccountTokenStoringEnabled = K),
      (l.adAccountTokenNoncePushWaitTimeoutSeconds = Q),
      (l.adAccountTokenNonceMaxRetries = X),
      (l.isSMBLabelsDataSharingEnabledForChats = Y),
      (l.shouldShowSMBDataSharingSettings = J),
      (l.showDataSharingInSettingsAfterNuxDismiss = Z),
      (l.is3pdImportantLabelSignalsEnabled = ee),
      (l.isUsingSignedShimmedLinkInCatalogueEnabled = te),
      (l.isCountryOfOriginEnabled = ne),
      (l.isDownload3PDSignalsEnabled = re),
      (l.showComplianceFieldsInEditProductDrawer = oe),
      (l.showImporterInformationInEditProductDrawer = ae),
      (l.catalogTokenRecoveryEnabled = ie),
      (l.shouldGenerateAGMMsgs = le),
      (l.isCatalogVariantsViewingEnabled = se),
      (l.isCTWA3pdOptOutCounterOptimizationEnabled = ue),
      (l.isCTWA3pdDataSharingTitleChangeEnabled = ce),
      (l.isCTWA3pdDataSharingAdditionalLoggingEnabled = de),
      (l.getCTWA3pdDataSharingMaxTimesShownForOptedOut = me),
      (l.suppressMessageWithExternalAdReplyConsumerEnabled = pe),
      (l.isPerCustomerDataSharingControlsEnabled = _e),
      (l.shouldSuppressDataSharingSystemMessageUntilGlobalChoiceMade = fe),
      (l.showCTWACCICompliantUI = ge),
      (l.isCTWATosFilteringEnabled = he),
      (l.getCTWALearnMoreHyperLinkForCCICompliantUI = ye),
      (l.showCTWA3pdDataSharingDisclosureOnThreadEntry = Ce),
      (l.getCatkitVersion = be));
  },
  98,
);
