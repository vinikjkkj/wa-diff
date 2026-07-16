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
        "smb_project_waldo_set_price_tier_biz_profile_enabled",
      );
    }
    function m() {
      return (
        o("WAWebMobilePlatforms").isSMB() &&
        o("WAWebABProps").getABPropConfigValue(
          "wa_web_biz_profile_graphql_migration",
        )
      );
    }
    function p() {
      return (
        o("WAWebMobilePlatforms").isSMB() &&
        o("WAWebABProps").getABPropConfigValue("wa_web_biz_profile_preload")
      );
    }
    function _() {
      return o("WAWebABProps").getABPropConfigValue(
        "web_abprop_business_profile_refresh_linked_accounts_killswitch",
      );
    }
    function f() {
      return o("WAWebABProps").getABPropConfigValue("smb_catkit_query_version");
    }
    function g() {
      return o("WAWebABProps").getABPropConfigValue(
        "wa_web_biz_profile_google_integration_enabled",
      );
    }
    ((l.webBizProfileOptions = e),
      (l.businessProfileRefreshEnabled = s),
      (l.businessProfileRefreshV2Enabled = u),
      (l.businessProfilePreviewEnabled = c),
      (l.businessPriceTierEnabled = d),
      (l.bizProfileGraphQLMigrationEnabled = m),
      (l.isBizProfilePreloadEnabled = p),
      (l.bizLinkedAccountsEnabled = _),
      (l.getCatkitVersion = f),
      (l.isGoogleProfileIntegrationEnabled = g));
  },
  98,
);
