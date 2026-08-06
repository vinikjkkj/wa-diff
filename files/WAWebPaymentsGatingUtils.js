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
    function s() {
      var e,
        t =
          (e = o("WAWebUserPrefsMeUser").getMaybeMePnUser()) == null
            ? void 0
            : e.user;
      return (
        !o("WAWebMobilePlatforms").isSMB() &&
        t != null &&
        g(t) &&
        o("WAWebABProps").getABPropConfigValue(
          "br_consumer_payments_home_web_enabled",
        )
      );
    }
    function u() {
      var e,
        t =
          (e = o("WAWebUserPrefsMeUser").getMaybeMePnUser()) == null
            ? void 0
            : e.user;
      return (
        !o("WAWebMobilePlatforms").isSMB() &&
        t != null &&
        g(t) &&
        o("WAWebABProps").getABPropConfigValue(
          "br_consumer_pix_actions_web_enabled",
        )
      );
    }
    function c() {
      var e,
        t =
          (e = o("WAWebUserPrefsMeUser").getMaybeMePnUser()) == null
            ? void 0
            : e.user;
      return (
        !o("WAWebMobilePlatforms").isSMB() &&
        t != null &&
        g(t) &&
        o("WAWebABProps").getABPropConfigValue(
          "pix_payment_request_web_enabled",
        )
      );
    }
    function d() {
      var e,
        t =
          (e = o("WAWebUserPrefsMeUser").getMaybeMePnUser()) == null
            ? void 0
            : e.user;
      return (
        !o("WAWebMobilePlatforms").isSMB() &&
        t != null &&
        g(t) &&
        o("WAWebABProps").getABPropConfigValue(
          "br_consumer_transactions_date_filter_web_enabled",
        )
      );
    }
    function m() {
      var e,
        t =
          (e = o("WAWebUserPrefsMeUser").getMaybeMePnUser()) == null
            ? void 0
            : e.user;
      return (
        !o("WAWebMobilePlatforms").isSMB() &&
        t != null &&
        g(t) &&
        o("WAWebABProps").getABPropConfigValue(
          "br_consumer_pix_groups_web_enabled",
        )
      );
    }
    function p(e) {
      var t;
      if (!e) return !1;
      var n =
        (t = o("WAWebLidMigrationUtils").toPn(e)) == null ? void 0 : t.user;
      return n == null ? !1 : h(n) || g(n);
    }
    function _() {
      return o("WAWebABProps").getABPropConfigValue(
        "payments_link_to_lite_consumer_enabled",
      );
    }
    function f(e) {
      var t = o("WAWebUserPrefsMeUser").getMaybeMePnUser(),
        n = o("WAWebL10NCountryCodes").getCountryShortcodeByPhone(
          t == null ? void 0 : t.user,
        ),
        r = o("WAWebLidMigrationUtils").toPn(e.contact.id),
        a = o("WAWebL10NCountryCodes").getCountryShortcodeByPhone(
          r == null ? void 0 : r.user,
        );
      return n === "BR" && a === "BR";
    }
    function g(e) {
      var t = o("WAWebL10NCountryCodes").getCountryShortcodeByPhone(e);
      return t === "BR";
    }
    function h(e) {
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
      (l.consumerPaymentsHomeEnabled = s),
      (l.consumerPixActionsEnabled = u),
      (l.consumerSharePixEnabled = c),
      (l.consumerTransactionsDateFilterEnabled = d),
      (l.consumerSharePixGroupsEnabled = m),
      (l.isWidInPaymentsCountry = p),
      (l.isMessageWithLinkNfmEnabled = _),
      (l.isBrazilToBrazilOrder = f));
  },
  98,
);
