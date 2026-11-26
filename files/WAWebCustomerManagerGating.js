__d(
  "WAWebCustomerManagerGating",
  [
    "WAWebABProps",
    "WAWebContactGetters",
    "WAWebMetaOneGating",
    "WAWebMobilePlatforms",
    "WAWebPrimaryVersionGating",
    "WAWebUserUtils",
  ],
  function (t, n, r, o, a, i, l) {
    var e = 3,
      s = { smba: "2.26.47.2", smbi: "2.26.47.11" };
    function u() {
      return (
        o("WAWebMobilePlatforms").isSMB() &&
        (b() ||
          o("WAWebABProps").getABPropConfigValue(
            "wa_contact_manager_meta_one_rollout_enabled",
            { suppressExposure: !0 },
          ))
      );
    }
    function c(e) {
      return (
        e === void 0 && (e = o("WAWebMetaOneGating").getMetaOneEligibility()),
        o("WAWebMobilePlatforms").isSMB() &&
          o("WAWebMetaOneGating").isMetaOneEligible(e) &&
          (b() ||
            (v() &&
              o("WAWebABProps").getABPropConfigValue(
                "wa_contact_manager_meta_one_rollout_enabled",
              )))
      );
    }
    function d() {
      return (
        u() &&
        o("WAWebABProps").getABPropConfigValue(
          "smb_web_customer_manager_date_range_filter_enabled",
        )
      );
    }
    function m() {
      return (
        u() &&
        o("WAWebABProps").getABPropConfigValue(
          "smb_web_customer_manager_export_enabled",
        )
      );
    }
    function p() {
      return (
        u() &&
        o("WAWebABProps").getABPropConfigValue(
          "smb_web_customer_management_import_export",
        )
      );
    }
    function _() {
      return (
        u() &&
        o("WAWebABProps").getABPropConfigValue(
          "smb_web_customer_management_custom_fields",
        )
      );
    }
    function f() {
      return (
        u() &&
        o("WAWebABProps").getABPropConfigValue(
          "smb_web_customer_manager_nux_debug_tools_enabled",
        )
      );
    }
    function g() {
      return (
        u() &&
        o("WAWebABProps").getABPropConfigValue(
          "smb_web_customer_manager_bulk_edit_enabled",
        )
      );
    }
    function h() {
      return e;
    }
    function y(e) {
      var t = e.id;
      return t != null && !o("WAWebContactGetters").getIsMe(e) && C(t);
    }
    function C(e) {
      return (
        e.isUser() &&
        !o("WAWebUserUtils").isMeAccount(e) &&
        !e.isPSA() &&
        !e.isOfficialBizAccount() &&
        !e.isAiHub() &&
        !e.isIAS() &&
        !e.isSupportAccount() &&
        !e.isCAPISupportAccount() &&
        !e.isBot()
      );
    }
    function b() {
      return (
        o("WAWebABProps").getABPropConfigValue("contact_manager_mvp_enabled") ||
        o("WAWebABProps").getABPropConfigValue(
          "smb_web_customer_management_enabled",
        )
      );
    }
    function v() {
      var e = o("WAWebMobilePlatforms").getMaybeMobilePlatform(),
        t = e == null ? null : s[e];
      return (
        t != null && o("WAWebPrimaryVersionGating").primaryVersionIsAtLeast(t)
      );
    }
    ((l.customerManagerEnabled = u),
      (l.customerManagerPanelEnabled = c),
      (l.customerManagerDateRangeFilterEnabled = d),
      (l.customerManagerExportEnabled = m),
      (l.customerManagerImportExportEnabled = p),
      (l.customerManagerCustomFieldsEnabled = _),
      (l.customerManagerNuxDebugToolsEnabled = f),
      (l.customerManagerBulkEditEnabled = g),
      (l.customerManagerEducationBannerMaxViewDays = h),
      (l.isEligibleForCustomerFields = y),
      (l.isWidEligibleForCustomerFields = C));
  },
  98,
);
