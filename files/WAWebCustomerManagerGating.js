__d(
  "WAWebCustomerManagerGating",
  [
    "WAWebABProps",
    "WAWebContactGetters",
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
      return (
        s() &&
        o("WAWebABProps").getABPropConfigValue(
          "smb_web_customer_manager_date_range_filter_enabled",
        )
      );
    }
    function c() {
      return (
        s() &&
        o("WAWebABProps").getABPropConfigValue(
          "smb_web_customer_manager_export_enabled",
        )
      );
    }
    function d() {
      return (
        s() &&
        o("WAWebABProps").getABPropConfigValue(
          "smb_web_customer_management_import_export",
        )
      );
    }
    function m() {
      return (
        s() &&
        o("WAWebABProps").getABPropConfigValue(
          "smb_web_customer_management_custom_fields",
        )
      );
    }
    function p() {
      return (
        s() &&
        o("WAWebABProps").getABPropConfigValue(
          "smb_web_customer_manager_bulk_edit_enabled",
        )
      );
    }
    function _() {
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
    function f() {
      return e;
    }
    function g(e) {
      var t = e.id;
      return t != null && !o("WAWebContactGetters").getIsMe(e) && h(t);
    }
    function h(e) {
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
      (l.customerManagerDateRangeFilterEnabled = u),
      (l.customerManagerExportEnabled = c),
      (l.customerManagerImportExportEnabled = d),
      (l.customerManagerCustomFieldsEnabled = m),
      (l.customerManagerBulkEditEnabled = p),
      (l.customerManagerSublistEnabled = _),
      (l.customerManagerEducationBannerMaxViewDays = f),
      (l.isEligibleForCustomerFields = g),
      (l.isWidEligibleForCustomerFields = h));
  },
  98,
);
