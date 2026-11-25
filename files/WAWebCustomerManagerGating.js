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
        (o("WAWebABProps").getABPropConfigValue(
          "contact_manager_mvp_enabled",
        ) ||
          o("WAWebABProps").getABPropConfigValue(
            "smb_web_customer_management_enabled",
          ) ||
          o("WAWebABProps").getABPropConfigValue(
            "wa_contact_manager_meta_one_rollout_enabled",
          ))
      );
    }
    function c(e) {
      return (
        e === void 0 && (e = o("WAWebMetaOneGating").getMetaOneEligibility()),
        u() &&
          o("WAWebMetaOneGating").isMetaOneEligible(e) &&
          (o("WAWebABProps").getABPropConfigValue(
            "contact_manager_mvp_enabled",
          ) ||
            o("WAWebABProps").getABPropConfigValue(
              "smb_web_customer_management_enabled",
            ) ||
            d())
      );
    }
    function d() {
      var e = o("WAWebMobilePlatforms").getMaybeMobilePlatform(),
        t = e == null ? null : s[e];
      return (
        t != null && o("WAWebPrimaryVersionGating").primaryVersionIsAtLeast(t)
      );
    }
    function m() {
      return (
        u() &&
        o("WAWebABProps").getABPropConfigValue(
          "smb_web_customer_manager_date_range_filter_enabled",
        )
      );
    }
    function p() {
      return (
        u() &&
        o("WAWebABProps").getABPropConfigValue(
          "smb_web_customer_manager_export_enabled",
        )
      );
    }
    function _() {
      return (
        u() &&
        o("WAWebABProps").getABPropConfigValue(
          "smb_web_customer_management_import_export",
        )
      );
    }
    function f() {
      return (
        u() &&
        o("WAWebABProps").getABPropConfigValue(
          "smb_web_customer_management_custom_fields",
        )
      );
    }
    function g() {
      return (
        u() &&
        o("WAWebABProps").getABPropConfigValue(
          "smb_web_customer_manager_nux_debug_tools_enabled",
        )
      );
    }
    function h() {
      return (
        u() &&
        o("WAWebABProps").getABPropConfigValue(
          "smb_web_customer_manager_bulk_edit_enabled",
        )
      );
    }
    function y() {
      return e;
    }
    function C(e) {
      var t = e.id;
      return t != null && !o("WAWebContactGetters").getIsMe(e) && b(t);
    }
    function b(e) {
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
    ((l.customerManagerEnabled = u),
      (l.customerManagerPanelEnabled = c),
      (l.customerManagerDateRangeFilterEnabled = m),
      (l.customerManagerExportEnabled = p),
      (l.customerManagerImportExportEnabled = _),
      (l.customerManagerCustomFieldsEnabled = f),
      (l.customerManagerNuxDebugToolsEnabled = g),
      (l.customerManagerBulkEditEnabled = h),
      (l.customerManagerEducationBannerMaxViewDays = y),
      (l.isEligibleForCustomerFields = C),
      (l.isWidEligibleForCustomerFields = b));
  },
  98,
);
