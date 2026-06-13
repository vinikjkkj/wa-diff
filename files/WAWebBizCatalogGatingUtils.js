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
      return !1;
    }
    function d() {
      return !1;
    }
    function m() {
      return !0;
    }
    function p() {
      return o("WAWebABProps").getABPropConfigValue(
        "smb_hide_unsupported_currency_price",
      );
    }
    function _() {
      return o("WAWebABProps").getABPropConfigValue(
        "web_catalog_viewing_variants_enabled",
      );
    }
    function f() {
      return o("WAWebABProps").getABPropConfigValue(
        "smb_product_country_of_origin_m1",
      );
    }
    function g(e) {
      return C(e) || f();
    }
    function h() {
      return C(o("WAWebUserPrefsMeUser").getMePnUserOrThrow_DO_NOT_USE());
    }
    function y() {
      return o("WAWebABProps").getABPropConfigValue("commerce_sanctioned");
    }
    function C(e) {
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
      return R(t);
    }
    function b(e) {
      return L(e, function () {
        return o("WAWebABProps").getABPropConfigValue(
          "smb_ecommerce_compliance_india_m4",
        );
      });
    }
    function v(e) {
      return L(e, function () {
        return o("WAWebABProps").getABPropConfigValue(
          "smb_ecommerce_compliance_india_m4_5",
        );
      });
    }
    function S(e) {
      var t,
        n = L(e == null ? void 0 : e.id, function () {
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
    function R(e) {
      var t = o("WAWebL10NCountryCodes").getCountryShortcodeByPhone(e || ""),
        n = o("WAWebComplianceConstants").COMPLIANCE_INFO_CODES.INDIA;
      return (
        t === n ||
        o("WAWebClientFeatureFlags").isFeatureEnabled(
          "skip_compliance_phone_check",
        )
      );
    }
    function L(e, t) {
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
      return R(n) ? t() : !1;
    }
    ((l.catalogCategoriesEnabled = e),
      (l.isPSForCatalogViewEnabled = s),
      (l.graphQLForGetProductListEnabled = u),
      (l.graphQLForGetComplianceInfo = c),
      (l.graphQLForSetComplianceInfo = d),
      (l.isQuantityControlsFeatureEnabled = m),
      (l.hideUnsupportedCurrency = p),
      (l.isCatalogVariantsViewingEnabled = _),
      (l.isCountryOfOriginEnabled = f),
      (l.showComplianceFieldsInEditProductDrawer = g),
      (l.showImporterInformationInEditProductDrawer = h),
      (l.commerceFeaturesDisabledBySanctions = y),
      (l.canSeeECommerceComplianceIndiaSoftEnforcement = C),
      (l.canSeeECommerceComplianceIndiaHardEnforcementBusinessJourney = b),
      (l.canSeeECommerceComplianceIndiaCountryOriginExemptBusinessJourney = v),
      (l.blockCatalogCreationECommerceComplianceIndia = S));
  },
  98,
);
