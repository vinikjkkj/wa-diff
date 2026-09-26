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
        "web_enable_biz_catalog_view_ps_logging",
      );
    }
    function s() {
      return o("WAWebMobilePlatforms").isSMB();
    }
    function u() {
      return !0;
    }
    function c() {
      return o("WAWebABProps").getABPropConfigValue(
        "web_catalog_viewing_variants_enabled",
      );
    }
    function d() {
      return o("WAWebABProps").getABPropConfigValue(
        "smb_product_country_of_origin_m1",
      );
    }
    function m(e) {
      return f(e) || d();
    }
    function p() {
      return f(o("WAWebUserPrefsMeUser").getMeUserOrThrow());
    }
    function _() {
      return o("WAWebABProps").getABPropConfigValue("commerce_sanctioned");
    }
    function f(e) {
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
      return S(t);
    }
    function g(e) {
      return E(e);
    }
    function h(e) {
      return R(e, function () {
        return o("WAWebABProps").getABPropConfigValue(
          "smb_ecommerce_compliance_india_m4",
        );
      });
    }
    function y(e) {
      return L(e, function () {
        return o("WAWebABProps").getABPropConfigValue(
          "smb_ecommerce_compliance_india_m4",
        );
      });
    }
    function C(e) {
      return R(e, function () {
        return o("WAWebABProps").getABPropConfigValue(
          "smb_ecommerce_compliance_india_m4_5",
        );
      });
    }
    function b(e) {
      return L(e, function () {
        return o("WAWebABProps").getABPropConfigValue(
          "smb_ecommerce_compliance_india_m4_5",
        );
      });
    }
    function v(e) {
      var t,
        n = R(e == null ? void 0 : e.id, function () {
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
    function S(e) {
      return E(o("WAWebL10NCountryCodes").getCountryShortcodeByPhone(e || ""));
    }
    function R(e, t) {
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
      return S(n) ? t() : !1;
    }
    function L(e, t) {
      return (
        t === void 0 && (t = o("WAWebBoolFunc").returnFalse),
        E(e) ? t() : !1
      );
    }
    function E(e) {
      return (
        e === o("WAWebComplianceConstants").COMPLIANCE_INFO_CODES.INDIA ||
        o("WAWebClientFeatureFlags").isFeatureEnabled(
          "skip_compliance_phone_check",
        )
      );
    }
    ((l.isPSForCatalogViewEnabled = e),
      (l.graphQLForGetProductListEnabled = s),
      (l.isQuantityControlsFeatureEnabled = u),
      (l.isCatalogVariantsViewingEnabled = c),
      (l.isCountryOfOriginEnabled = d),
      (l.showComplianceFieldsInEditProductDrawer = m),
      (l.showImporterInformationInEditProductDrawer = p),
      (l.commerceFeaturesDisabledBySanctions = _),
      (l.canSeeECommerceComplianceIndiaSoftEnforcement = f),
      (l.canSeeECommerceComplianceIndiaSoftEnforcementForCountry = g),
      (l.canSeeECommerceComplianceIndiaHardEnforcementBusinessJourney = h),
      (l.canSeeECommerceComplianceIndiaHardEnforcementBusinessJourneyForCountry =
        y),
      (l.canSeeECommerceComplianceIndiaCountryOriginExemptBusinessJourney = C),
      (l.canSeeECommerceComplianceIndiaCountryOriginExemptBusinessJourneyForCountry =
        b),
      (l.blockCatalogCreationECommerceComplianceIndia = v));
  },
  98,
);
