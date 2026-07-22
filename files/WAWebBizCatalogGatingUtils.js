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
      return !1;
    }
    function c() {
      return !0;
    }
    function d() {
      return o("WAWebABProps").getABPropConfigValue(
        "web_catalog_viewing_variants_enabled",
      );
    }
    function m() {
      return o("WAWebABProps").getABPropConfigValue(
        "smb_product_country_of_origin_m1",
      );
    }
    function p(e) {
      return g(e) || m();
    }
    function _() {
      return g(o("WAWebUserPrefsMeUser").getMeUserOrThrow());
    }
    function f() {
      return o("WAWebABProps").getABPropConfigValue("commerce_sanctioned");
    }
    function g(e) {
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
      return b(t);
    }
    function h(e) {
      return v(e, function () {
        return o("WAWebABProps").getABPropConfigValue(
          "smb_ecommerce_compliance_india_m4",
        );
      });
    }
    function y(e) {
      return v(e, function () {
        return o("WAWebABProps").getABPropConfigValue(
          "smb_ecommerce_compliance_india_m4_5",
        );
      });
    }
    function C(e) {
      var t,
        n = v(e == null ? void 0 : e.id, function () {
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
    function b(e) {
      var t = o("WAWebL10NCountryCodes").getCountryShortcodeByPhone(e || ""),
        n = o("WAWebComplianceConstants").COMPLIANCE_INFO_CODES.INDIA;
      return (
        t === n ||
        o("WAWebClientFeatureFlags").isFeatureEnabled(
          "skip_compliance_phone_check",
        )
      );
    }
    function v(e, t) {
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
      return b(n) ? t() : !1;
    }
    ((l.isPSForCatalogViewEnabled = e),
      (l.graphQLForGetProductListEnabled = s),
      (l.graphQLForSetComplianceInfo = u),
      (l.isQuantityControlsFeatureEnabled = c),
      (l.isCatalogVariantsViewingEnabled = d),
      (l.isCountryOfOriginEnabled = m),
      (l.showComplianceFieldsInEditProductDrawer = p),
      (l.showImporterInformationInEditProductDrawer = _),
      (l.commerceFeaturesDisabledBySanctions = f),
      (l.canSeeECommerceComplianceIndiaSoftEnforcement = g),
      (l.canSeeECommerceComplianceIndiaHardEnforcementBusinessJourney = h),
      (l.canSeeECommerceComplianceIndiaCountryOriginExemptBusinessJourney = y),
      (l.blockCatalogCreationECommerceComplianceIndia = C));
  },
  98,
);
