__d(
  "WAWebContactManagerGating",
  ["WAWebABProps", "WAWebContactGetters", "WAWebMobilePlatforms"],
  function (t, n, r, o, a, i, l) {
    function e() {
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
    function s() {
      return (
        e() &&
        o("WAWebABProps").getABPropConfigValue(
          "smb_web_customer_manager_date_range_filter_enabled",
        )
      );
    }
    function u() {
      return (
        e() &&
        o("WAWebABProps").getABPropConfigValue(
          "smb_web_customer_manager_export_enabled",
        )
      );
    }
    function c() {
      return (
        e() &&
        o("WAWebABProps").getABPropConfigValue(
          "smb_web_customer_management_import_export",
        )
      );
    }
    function d() {
      return (
        e() &&
        o("WAWebABProps").getABPropConfigValue(
          "smb_web_customer_manager_bulk_edit_enabled",
        )
      );
    }
    function m() {
      return (
        e() &&
        (o("WAWebABProps").getABPropConfigValue(
          "contact_manager_mvp_enabled",
        ) ||
          o("WAWebABProps").getABPropConfigValue(
            "smb_contact_manager_sublist_enabled",
          ))
      );
    }
    function p(e) {
      var t = e.id;
      return (
        t != null &&
        t.isUser() &&
        !o("WAWebContactGetters").getIsMe(e) &&
        !t.isPSA() &&
        !t.isOfficialBizAccount() &&
        !t.isAiHub() &&
        !t.isIAS() &&
        !t.isSupportAccount() &&
        !t.isCAPISupportAccount() &&
        !t.isBot()
      );
    }
    ((l.contactManagerEnabled = e),
      (l.contactManagerDateRangeFilterEnabled = s),
      (l.contactManagerExportEnabled = u),
      (l.contactManagerImportExportEnabled = c),
      (l.contactManagerBulkEditEnabled = d),
      (l.contactManagerSublistEnabled = m),
      (l.isEligibleForCustomerFields = p));
  },
  98,
);
