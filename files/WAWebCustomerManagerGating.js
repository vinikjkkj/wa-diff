__d(
  "WAWebCustomerManagerGating",
  [
    "WAWebABProps",
    "WAWebContactGetters",
    "WAWebMetaOneGating",
    "WAWebMobilePlatforms",
    "WAWebUserPrefsMeUser",
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
          "smb_web_customer_manager_bulk_edit_enabled",
        )
      );
    }
    function f() {
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
    function g() {
      return e;
    }
    function h(e) {
      var t = e.id;
      return t != null && !o("WAWebContactGetters").getIsMe(e) && y(t);
    }
    function y(e) {
      return (
        e.isUser() &&
        !o("WAWebUserPrefsMeUser").isMeAccount(e) &&
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
      (l.customerManagerBulkEditEnabled = _),
      (l.customerManagerSublistEnabled = f),
      (l.customerManagerEducationBannerMaxViewDays = g),
      (l.isEligibleForCustomerFields = h),
      (l.isWidEligibleForCustomerFields = y));
  },
  98,
);
