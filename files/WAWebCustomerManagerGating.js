__d(
  "WAWebCustomerManagerGating",
  ["WAWebABProps", "WAWebContactGetters", "WAWebMobilePlatforms"],
  function (t, n, r, o, a, i, l) {
    function e() {
      return (
        o("WAWebMobilePlatforms").isSMB() &&
        o("WAWebABProps").getABPropConfigValue(
          "smb_web_customer_management_enabled",
        )
      );
    }
    function s(e) {
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
    ((l.customerManagerEnabled = e), (l.isEligibleForCustomerFields = s));
  },
  98,
);
