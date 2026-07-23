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
      return C(t);
    }
    function g(e) {
      return b(e, function () {
        return o("WAWebABProps").getABPropConfigValue(
          "smb_ecommerce_compliance_india_m4",
        );
      });
    }
    function h(e) {
      return b(e, function () {
        return o("WAWebABProps").getABPropConfigValue(
          "smb_ecommerce_compliance_india_m4_5",
        );
      });
    }
    function y(e) {
      var t,
        n = b(e == null ? void 0 : e.id, function () {
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
    function C(e) {
      var t = o("WAWebL10NCountryCodes").getCountryShortcodeByPhone(e || ""),
        n = o("WAWebComplianceConstants").COMPLIANCE_INFO_CODES.INDIA;
      return (
        t === n ||
        o("WAWebClientFeatureFlags").isFeatureEnabled(
          "skip_compliance_phone_check",
        )
      );
    }
    function b(e, t) {
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
      return C(n) ? t() : !1;
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
      (l.canSeeECommerceComplianceIndiaHardEnforcementBusinessJourney = g),
      (l.canSeeECommerceComplianceIndiaCountryOriginExemptBusinessJourney = h),
      (l.blockCatalogCreationECommerceComplianceIndia = y));
  },
  98,
);
