__d(
  "WAWebCustomerManagerGating",
  [
    "WAWebABProps",
    "WAWebContactGetters",
    "WAWebMobilePlatforms",
    "WAWebUserPrefsMeUser",
  ],
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
      return t != null && !o("WAWebContactGetters").getIsMe(e) && _(t);
    }
    function _(e) {
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
    ((l.customerManagerEnabled = e),
      (l.customerManagerDateRangeFilterEnabled = s),
      (l.customerManagerExportEnabled = u),
      (l.customerManagerImportExportEnabled = c),
      (l.customerManagerBulkEditEnabled = d),
      (l.customerManagerSublistEnabled = m),
      (l.isEligibleForCustomerFields = p),
      (l.isWidEligibleForCustomerFields = _));
  },
  98,
);
