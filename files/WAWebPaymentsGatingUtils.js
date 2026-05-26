__d(
  "WAWebPaymentsGatingUtils",
  [
    "WAWebABProps",
    "WAWebClientFeatureFlags",
    "WAWebComplianceConstants",
    "WAWebL10NCountryCodes",
    "WAWebLidMigrationUtils",
    "WAWebMobilePlatforms",
    "WAWebUserPrefsMeUser",
  ],
  function (t, n, r, o, a, i, l) {
    function e() {
      return (
        o("WAWebMobilePlatforms").isSMB() &&
        o("WAWebABProps").getABPropConfigValue("br_smb_paymentshome_enabled")
      );
    }
    function s(e) {
      var t;
      if (!e) return !1;
      var n =
        (t = o("WAWebLidMigrationUtils").toPn(e)) == null ? void 0 : t.user;
      return n == null ? !1 : m(n) || d(n);
    }
    function u() {
      return o("WAWebABProps").getABPropConfigValue(
        "payments_link_to_lite_consumer_enabled",
      );
    }
    function c(e) {
      var t = o("WAWebLidMigrationUtils").toPn(
          o("WAWebUserPrefsMeUser").getMePnUserOrThrow_DO_NOT_USE(),
        ),
        n = o("WAWebL10NCountryCodes").getCountryShortcodeByPhone(
          t == null ? void 0 : t.user,
        ),
        r = o("WAWebLidMigrationUtils").toPn(e.contact.id),
        a = o("WAWebL10NCountryCodes").getCountryShortcodeByPhone(
          r == null ? void 0 : r.user,
        );
      return n === "BR" && a === "BR";
    }
    function d(e) {
      var t = o("WAWebL10NCountryCodes").getCountryShortcodeByPhone(e);
      return t === "BR";
    }
    function m(e) {
      var t = o("WAWebL10NCountryCodes").getCountryShortcodeByPhone(e || ""),
        n = o("WAWebComplianceConstants").COMPLIANCE_INFO_CODES.INDIA;
      return (
        t === n ||
        o("WAWebClientFeatureFlags").isFeatureEnabled(
          "skip_compliance_phone_check",
        )
      );
    }
    ((l.paymentsHomeEnabled = e),
      (l.isWidInPaymentsCountry = s),
      (l.isMessageWithLinkNfmEnabled = u),
      (l.isBrazilToBrazilOrder = c));
  },
  98,
);
