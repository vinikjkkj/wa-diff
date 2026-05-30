__d(
  "WAWebBizCatalogGatingUtils",
  [
    "WAWebABProps",
    "WAWebBoolFunc",
    "WAWebBusinessProfileTypes",
    "WAWebClientFeatureFlags",
    "WAWebComplianceConstants",
    "WAWebL10NCountryCodes",
    "WAWebLidMigrationUtils",
    "WAWebMobilePlatforms",
    "WAWebUserPrefsMeUser",
  ],
  function (t, n, r, o, a, i, l) {
    function e() {
      return o("WAWebABProps").getABPropConfigValue(
        "catalog_categories_enabled",
      );
    }
    function s() {
      return o("WAWebABProps").getABPropConfigValue(
        "web_enable_biz_catalog_view_ps_logging",
      );
    }
    function u() {
      return o("WAWebMobilePlatforms").isSMB();
    }
    function c() {
      return o("WAWebABProps").getABPropConfigValue(
        "smb_catalog_graphql_verify_postcode",
      );
    }
    function d() {
      return o("WAWebABProps").getABPropConfigValue(
        "smb_catalog_graphql_get_public_key",
      );
    }
    function m() {
      return !1;
    }
    function p() {
      return !1;
    }
    function _() {
      return !0;
    }
    function f() {
      return (
        o("WAWebMobilePlatforms").isSMB() &&
        o("WAWebABProps").getABPropConfigValue(
          "ctwa_ad_creation_entry_point_catalog_web",
        )
      );
    }
    function g() {
      return (
        o("WAWebMobilePlatforms").isSMB() &&
        o("WAWebABProps").getABPropConfigValue(
          "ctwa_ad_creation_entry_point_catalog_product_web",
        )
      );
    }
    function h() {
      return o("WAWebABProps").getABPropConfigValue(
        "smb_hide_unsupported_currency_price",
      );
    }
    function y() {
      return o("WAWebABProps").getABPropConfigValue(
        "use_signed_shimmed_url_link",
      );
    }
    function C() {
      return o("WAWebABProps").getABPropConfigValue(
        "web_catalog_viewing_variants_enabled",
      );
    }
    function b() {
      return o("WAWebABProps").getABPropConfigValue(
        "web_catalog_recovery_flow_enabled",
      );
    }
    function v() {
      return o("WAWebABProps").getABPropConfigValue(
        "smb_product_country_of_origin_m1",
      );
    }
    function S(e) {
      return E(e) || v();
    }
    function R() {
      return E(o("WAWebUserPrefsMeUser").getMePnUserOrThrow_DO_NOT_USE());
    }
    function L() {
      return o("WAWebABProps").getABPropConfigValue("commerce_sanctioned");
    }
    function E(e) {
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
      return x(t);
    }
    function k(e) {
      return $(e, function () {
        return o("WAWebABProps").getABPropConfigValue(
          "smb_ecommerce_compliance_india_m4",
        );
      });
    }
    function I(e) {
      return $(e, function () {
        return o("WAWebABProps").getABPropConfigValue(
          "smb_ecommerce_compliance_india_m4_5",
        );
      });
    }
    function T(e) {
      var t,
        n = $(e == null ? void 0 : e.id, function () {
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
    function D() {
      return o("WAWebABProps").getABPropConfigValue("smb_catkit_query_version");
    }
    function x(e) {
      var t = o("WAWebL10NCountryCodes").getCountryShortcodeByPhone(e || ""),
        n = o("WAWebComplianceConstants").COMPLIANCE_INFO_CODES.INDIA;
      return (
        t === n ||
        o("WAWebClientFeatureFlags").isFeatureEnabled(
          "skip_compliance_phone_check",
        )
      );
    }
    function $(e, t) {
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
      return x(n) ? t() : !1;
    }
    ((l.catalogCategoriesEnabled = e),
      (l.isPSForCatalogViewEnabled = s),
      (l.graphQLForGetProductListEnabled = u),
      (l.isGraphQLForVerifyPostcodeEnabled = c),
      (l.isGraphQLForGetPublicKeyEnabled = d),
      (l.graphQLForGetComplianceInfo = m),
      (l.graphQLForSetComplianceInfo = p),
      (l.isQuantityControlsFeatureEnabled = _),
      (l.adCreationEntryPointCatalogEnabled = f),
      (l.adCreationEntryPointCatalogProductEnabled = g),
      (l.hideUnsupportedCurrency = h),
      (l.isUsingSignedShimmedLinkInCatalogueEnabled = y),
      (l.isCatalogVariantsViewingEnabled = C),
      (l.catalogTokenRecoveryEnabled = b),
      (l.isCountryOfOriginEnabled = v),
      (l.showComplianceFieldsInEditProductDrawer = S),
      (l.showImporterInformationInEditProductDrawer = R),
      (l.commerceFeaturesDisabledBySanctions = L),
      (l.canSeeECommerceComplianceIndiaSoftEnforcement = E),
      (l.canSeeECommerceComplianceIndiaHardEnforcementBusinessJourney = k),
      (l.canSeeECommerceComplianceIndiaCountryOriginExemptBusinessJourney = I),
      (l.blockCatalogCreationECommerceComplianceIndia = T),
      (l.getCatkitVersion = D));
  },
  98,
);
