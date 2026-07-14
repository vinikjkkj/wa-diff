__d(
  "WAWebBizProfileGatingUtils",
  ["WAWebABProps", "WAWebMobilePlatforms"],
  function (t, n, r, o, a, i, l) {
    function e() {
      return o("WAWebABProps").getABPropConfigValue("web_biz_profile_options");
    }
    function s() {
      return (
        o("WAWebMobilePlatforms").isSMB() &&
        o("WAWebABProps").getABPropConfigValue(
          "smb_core_biz_profile_ux_refreshed",
        )
      );
    }
    function u() {
      return (
        o("WAWebMobilePlatforms").isSMB() &&
        o("WAWebABProps").getABPropConfigValue(
          "smb_core_biz_profile_ux_refreshed_v2",
        )
      );
    }
    function c() {
      return (
        o("WAWebMobilePlatforms").isSMB() &&
        o("WAWebABProps").getABPropConfigValue("smb_core_biz_profile_preview")
      );
    }
    function d() {
      return o("WAWebABProps").getABPropConfigValue(
        "smb_waldo_service_offerings_selection_enabled",
      );
    }
    function m() {
      return o("WAWebABProps").getABPropConfigValue(
        "smb_project_waldo_set_price_tier_biz_profile_enabled",
      );
    }
    function p() {
      return (
        o("WAWebMobilePlatforms").isSMB() &&
        o("WAWebABProps").getABPropConfigValue(
          "wa_web_biz_profile_graphql_migration",
        )
      );
    }
    function _() {
      return (
        o("WAWebMobilePlatforms").isSMB() &&
        o("WAWebABProps").getABPropConfigValue("wa_web_biz_profile_preload")
      );
    }
    function f() {
      return o("WAWebABProps").getABPropConfigValue(
        "smb_temp_cover_photo_privacy_messaging",
      );
    }
    function g() {
      return o("WAWebABProps").getABPropConfigValue(
        "web_abprop_business_profile_refresh_linked_accounts_killswitch",
      );
    }
    function h() {
      return o("WAWebABProps").getABPropConfigValue(
        "web_abprop_business_profile_refresh_linked_account_enabled",
      );
    }
    function y() {
      return o("WAWebABProps").getABPropConfigValue("smb_catkit_query_version");
    }
    function C() {
      return o("WAWebABProps").getABPropConfigValue(
        "wa_web_biz_profile_google_integration_enabled",
      );
    }
    ((l.webBizProfileOptions = e),
      (l.businessProfileRefreshEnabled = s),
      (l.businessProfileRefreshV2Enabled = u),
      (l.businessProfilePreviewEnabled = c),
      (l.businessServiceOfferingsEnabled = d),
      (l.businessPriceTierEnabled = m),
      (l.bizProfileGraphQLMigrationEnabled = p),
      (l.isBizProfilePreloadEnabled = _),
      (l.coverPhotoPrivacyMessagingEnabled = f),
      (l.bizLinkedAccountsEnabled = g),
      (l.canViewBizLinkedAccounts = h),
      (l.getCatkitVersion = y),
      (l.isGoogleProfileIntegrationEnabled = C));
  },
  98,
);
