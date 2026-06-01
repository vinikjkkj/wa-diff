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
      return !1;
    }
    function m() {
      return !1;
    }
    function p() {
      return !0;
    }
    function _() {
      return (
        o("WAWebMobilePlatforms").isSMB() &&
        o("WAWebABProps").getABPropConfigValue(
          "ctwa_ad_creation_entry_point_catalog_web",
        )
      );
    }
    function f() {
      return (
        o("WAWebMobilePlatforms").isSMB() &&
        o("WAWebABProps").getABPropConfigValue(
          "ctwa_ad_creation_entry_point_catalog_product_web",
        )
      );
    }
    function g() {
      return o("WAWebABProps").getABPropConfigValue(
        "smb_hide_unsupported_currency_price",
      );
    }
    function h() {
      return o("WAWebABProps").getABPropConfigValue(
        "web_catalog_viewing_variants_enabled",
      );
    }
    function y() {
      return o("WAWebABProps").getABPropConfigValue(
        "web_catalog_recovery_flow_enabled",
      );
    }
    function C() {
      return o("WAWebABProps").getABPropConfigValue(
        "smb_product_country_of_origin_m1",
      );
    }
    function b(e) {
      return R(e) || C();
    }
    function v() {
      return R(o("WAWebUserPrefsMeUser").getMePnUserOrThrow_DO_NOT_USE());
    }
    function S() {
      return o("WAWebABProps").getABPropConfigValue("commerce_sanctioned");
    }
    function R(e) {
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
      return T(t);
    }
    function L(e) {
      return D(e, function () {
        return o("WAWebABProps").getABPropConfigValue(
          "smb_ecommerce_compliance_india_m4",
        );
      });
    }
    function E(e) {
      return D(e, function () {
        return o("WAWebABProps").getABPropConfigValue(
          "smb_ecommerce_compliance_india_m4_5",
        );
      });
    }
    function k(e) {
      var t,
        n = D(e == null ? void 0 : e.id, function () {
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
    function I() {
      return o("WAWebABProps").getABPropConfigValue("smb_catkit_query_version");
    }
    function T(e) {
      var t = o("WAWebL10NCountryCodes").getCountryShortcodeByPhone(e || ""),
        n = o("WAWebComplianceConstants").COMPLIANCE_INFO_CODES.INDIA;
      return (
        t === n ||
        o("WAWebClientFeatureFlags").isFeatureEnabled(
          "skip_compliance_phone_check",
        )
      );
    }
    function D(e, t) {
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
      return T(n) ? t() : !1;
    }
    ((l.catalogCategoriesEnabled = e),
      (l.isPSForCatalogViewEnabled = s),
      (l.graphQLForGetProductListEnabled = u),
      (l.isGraphQLForVerifyPostcodeEnabled = c),
      (l.graphQLForGetComplianceInfo = d),
      (l.graphQLForSetComplianceInfo = m),
      (l.isQuantityControlsFeatureEnabled = p),
      (l.adCreationEntryPointCatalogEnabled = _),
      (l.adCreationEntryPointCatalogProductEnabled = f),
      (l.hideUnsupportedCurrency = g),
      (l.isCatalogVariantsViewingEnabled = h),
      (l.catalogTokenRecoveryEnabled = y),
      (l.isCountryOfOriginEnabled = C),
      (l.showComplianceFieldsInEditProductDrawer = b),
      (l.showImporterInformationInEditProductDrawer = v),
      (l.commerceFeaturesDisabledBySanctions = S),
      (l.canSeeECommerceComplianceIndiaSoftEnforcement = R),
      (l.canSeeECommerceComplianceIndiaHardEnforcementBusinessJourney = L),
      (l.canSeeECommerceComplianceIndiaCountryOriginExemptBusinessJourney = E),
      (l.blockCatalogCreationECommerceComplianceIndia = k),
      (l.getCatkitVersion = I));
  },
  98,
);
