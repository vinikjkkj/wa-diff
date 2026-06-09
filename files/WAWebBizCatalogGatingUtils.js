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
      return o("WAWebABProps").getABPropConfigValue(
        "smb_hide_unsupported_currency_price",
      );
    }
    function f() {
      return o("WAWebABProps").getABPropConfigValue(
        "web_catalog_viewing_variants_enabled",
      );
    }
    function g() {
      return o("WAWebABProps").getABPropConfigValue(
        "smb_product_country_of_origin_m1",
      );
    }
    function h(e) {
      return b(e) || g();
    }
    function y() {
      return b(o("WAWebUserPrefsMeUser").getMePnUserOrThrow_DO_NOT_USE());
    }
    function C() {
      return o("WAWebABProps").getABPropConfigValue("commerce_sanctioned");
    }
    function b(e) {
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
      return L(t);
    }
    function v(e) {
      return E(e, function () {
        return o("WAWebABProps").getABPropConfigValue(
          "smb_ecommerce_compliance_india_m4",
        );
      });
    }
    function S(e) {
      return E(e, function () {
        return o("WAWebABProps").getABPropConfigValue(
          "smb_ecommerce_compliance_india_m4_5",
        );
      });
    }
    function R(e) {
      var t,
        n = E(e == null ? void 0 : e.id, function () {
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
    function L(e) {
      var t = o("WAWebL10NCountryCodes").getCountryShortcodeByPhone(e || ""),
        n = o("WAWebComplianceConstants").COMPLIANCE_INFO_CODES.INDIA;
      return (
        t === n ||
        o("WAWebClientFeatureFlags").isFeatureEnabled(
          "skip_compliance_phone_check",
        )
      );
    }
    function E(e, t) {
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
      return L(n) ? t() : !1;
    }
    ((l.catalogCategoriesEnabled = e),
      (l.isPSForCatalogViewEnabled = s),
      (l.graphQLForGetProductListEnabled = u),
      (l.isGraphQLForVerifyPostcodeEnabled = c),
      (l.graphQLForGetComplianceInfo = d),
      (l.graphQLForSetComplianceInfo = m),
      (l.isQuantityControlsFeatureEnabled = p),
      (l.hideUnsupportedCurrency = _),
      (l.isCatalogVariantsViewingEnabled = f),
      (l.isCountryOfOriginEnabled = g),
      (l.showComplianceFieldsInEditProductDrawer = h),
      (l.showImporterInformationInEditProductDrawer = y),
      (l.commerceFeaturesDisabledBySanctions = C),
      (l.canSeeECommerceComplianceIndiaSoftEnforcement = b),
      (l.canSeeECommerceComplianceIndiaHardEnforcementBusinessJourney = v),
      (l.canSeeECommerceComplianceIndiaCountryOriginExemptBusinessJourney = S),
      (l.blockCatalogCreationECommerceComplianceIndia = R));
  },
  98,
);
