__d(
  "WAWebCustomerManagerGating",
  [
    "WAWebABProps",
    "WAWebContactGetters",
    "WAWebMetaOneGating",
    "WAWebMobilePlatforms",
    "WAWebUserUtils",
  ],
  function (t, n, r, o, a, i, l) {
    var e = 3;
    function s() {
      return (
        o("WAWebMobilePlatforms").isSMB() &&
        (o("WAWebABProps").getABPropConfigValue(
          "contact_manager_mvp_enabled",
        ) ||
          o("WAWebABProps").getABPropConfigValue(
            "smb_web_customer_management_enabled",
          ))
      );
    }
    function u() {
      return s() && o("WAWebMetaOneGating").isMetaOneRolloutEnabled();
    }
    function c() {
      return (
        s() &&
        o("WAWebABProps").getABPropConfigValue(
          "smb_web_customer_manager_date_range_filter_enabled",
        )
      );
    }
    function d() {
      return (
        s() &&
        o("WAWebABProps").getABPropConfigValue(
          "smb_web_customer_manager_export_enabled",
        )
      );
    }
    function m() {
      return (
        s() &&
        o("WAWebABProps").getABPropConfigValue(
          "smb_web_customer_management_import_export",
        )
      );
    }
    function p() {
      return (
        s() &&
        o("WAWebABProps").getABPropConfigValue(
          "smb_web_customer_management_custom_fields",
        )
      );
    }
    function _() {
      return (
        s() &&
        o("WAWebABProps").getABPropConfigValue(
          "smb_web_customer_manager_nux_debug_tools_enabled",
        )
      );
    }
    function f() {
      return (
        s() &&
        o("WAWebABProps").getABPropConfigValue(
          "smb_web_customer_manager_bulk_edit_enabled",
        )
      );
    }
    function g() {
      return (
        s() &&
        (o("WAWebABProps").getABPropConfigValue(
          "contact_manager_mvp_enabled",
        ) ||
          o("WAWebABProps").getABPropConfigValue(
            "smb_contact_manager_sublist_enabled",
          ))
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
    ((l.customerManagerEnabled = s),
      (l.customerManagerPanelEnabled = u),
      (l.customerManagerDateRangeFilterEnabled = c),
      (l.customerManagerExportEnabled = d),
      (l.customerManagerImportExportEnabled = m),
      (l.customerManagerCustomFieldsEnabled = p),
      (l.customerManagerNuxDebugToolsEnabled = _),
      (l.customerManagerBulkEditEnabled = f),
      (l.customerManagerSublistEnabled = g),
      (l.customerManagerEducationBannerMaxViewDays = h),
      (l.isEligibleForCustomerFields = y),
      (l.isWidEligibleForCustomerFields = C));
  },
  98,
);
