__d(
  "WAWebContactManagerGating",
  ["WAWebABProps", "WAWebContactGetters", "WAWebMobilePlatforms"],
  function (t, n, r, o, a, i, l) {
    function e() {
      return (
        o("WAWebMobilePlatforms").isSMB() &&
        o("WAWebABProps").getABPropConfigValue("lists_smb_web_enabled") &&
        o("WAWebABProps").getABPropConfigValue(
          "smb_web_customer_management_enabled",
        )
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
          "smb_web_customer_manager_bulk_edit_enabled",
        )
      );
    }
    function d(e) {
      var t = e.id;
      return (
        t != null &&
        t.isUser() &&
        !o("WAWebContactGetters").getIsMe(e) &&
        !t.isPSA() &&
        !t.isOfficialBizAccount() &&
        !t.isIAS() &&
        !t.isSupportAccount() &&
        !t.isCAPISupportAccount() &&
        !t.isBot()
      );
    }
    ((l.contactManagerEnabled = e),
      (l.contactManagerDateRangeFilterEnabled = s),
      (l.contactManagerExportEnabled = u),
      (l.contactManagerBulkEditEnabled = c),
      (l.isEligibleForCustomerFields = d));
  },
  98,
);
