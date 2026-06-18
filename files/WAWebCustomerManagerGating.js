__d(
  "WAWebCustomerManagerGating",
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
    function u(e) {
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
    ((l.customerManagerEnabled = e),
      (l.customerManagerDateRangeFilterEnabled = s),
      (l.isEligibleForCustomerFields = u));
  },
  98,
);
