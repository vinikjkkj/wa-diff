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
      return o("WAWebMobilePlatforms").isSMB();
    }
    function s() {
      return !0;
    }
    function u() {
      return o("WAWebABProps").getABPropConfigValue(
        "smb_product_country_of_origin_m1",
      );
    }
    function c(e) {
      return p(e) || u();
    }
    function d() {
      return p(o("WAWebUserPrefsMeUser").getMeUserOrThrow());
    }
    function m() {
      return o("WAWebABProps").getABPropConfigValue("commerce_sanctioned");
    }
    function p(e) {
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
    function _(e) {
      return R(e);
    }
    function f(e) {
      return v(e, function () {
        return o("WAWebABProps").getABPropConfigValue(
          "smb_ecommerce_compliance_india_m4",
        );
      });
    }
    function g(e) {
      return S(e, function () {
        return o("WAWebABProps").getABPropConfigValue(
          "smb_ecommerce_compliance_india_m4",
        );
      });
    }
    function h(e) {
      return v(e, function () {
        return o("WAWebABProps").getABPropConfigValue(
          "smb_ecommerce_compliance_india_m4_5",
        );
      });
    }
    function y(e) {
      return S(e, function () {
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
      return R(o("WAWebL10NCountryCodes").getCountryShortcodeByPhone(e || ""));
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
    function S(e, t) {
      return (
        t === void 0 && (t = o("WAWebBoolFunc").returnFalse),
        R(e) ? t() : !1
      );
    }
    function R(e) {
      return (
        e === o("WAWebComplianceConstants").COMPLIANCE_INFO_CODES.INDIA ||
        o("WAWebClientFeatureFlags").isFeatureEnabled(
          "skip_compliance_phone_check",
        )
      );
    }
    ((l.graphQLForGetProductListEnabled = e),
      (l.isQuantityControlsFeatureEnabled = s),
      (l.isCountryOfOriginEnabled = u),
      (l.showComplianceFieldsInEditProductDrawer = c),
      (l.showImporterInformationInEditProductDrawer = d),
      (l.commerceFeaturesDisabledBySanctions = m),
      (l.canSeeECommerceComplianceIndiaSoftEnforcement = p),
      (l.canSeeECommerceComplianceIndiaSoftEnforcementForCountry = _),
      (l.canSeeECommerceComplianceIndiaHardEnforcementBusinessJourney = f),
      (l.canSeeECommerceComplianceIndiaHardEnforcementBusinessJourneyForCountry =
        g),
      (l.canSeeECommerceComplianceIndiaCountryOriginExemptBusinessJourney = h),
      (l.canSeeECommerceComplianceIndiaCountryOriginExemptBusinessJourneyForCountry =
        y),
      (l.blockCatalogCreationECommerceComplianceIndia = C));
  },
  98,
);
