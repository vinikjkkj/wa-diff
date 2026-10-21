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
        E(t) &&
        (o("WAWebABProps").getABPropConfigValue(
          "br_consumer_payments_web_enabled",
        ) ||
          o("WAWebABProps").getABPropConfigValue(
            "br_consumer_payments_home_web_enabled",
          ))
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
        E(t) &&
        (o("WAWebABProps").getABPropConfigValue(
          "br_consumer_payments_web_enabled",
        ) ||
          o("WAWebABProps").getABPropConfigValue(
            "br_consumer_pix_actions_web_enabled",
          ))
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
        E(t) &&
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
        E(t) &&
        (o("WAWebABProps").getABPropConfigValue(
          "br_consumer_payments_web_enabled",
        ) ||
          o("WAWebABProps").getABPropConfigValue(
            "br_consumer_transactions_date_filter_web_enabled",
          ))
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
        E(t) &&
        (o("WAWebABProps").getABPropConfigValue(
          "br_consumer_payments_web_enabled",
        ) ||
          o("WAWebABProps").getABPropConfigValue(
            "br_consumer_pix_groups_web_enabled",
          ))
      );
    }
    function p() {
      return !o("WAWebABProps").getABPropConfigValue(
        "payments_receipt_and_state_web_state_hide_kill_switch",
      );
    }
    function _() {
      var e,
        t =
          (e = o("WAWebUserPrefsMeUser").getMaybeMePnUser()) == null
            ? void 0
            : e.user;
      return t != null && E(t) && p();
    }
    function f() {
      return (
        _() &&
        !o("WAWebABProps").getABPropConfigValue(
          "payments_receipt_and_state_details_kill_switch",
        )
      );
    }
    function g(e) {
      return (
        !o("WAWebMobilePlatforms").isSMB() &&
        v(e) &&
        o("WAWebABProps").getABPropConfigValue(
          "payments_receipt_and_state_copy_pix_key_p2p",
        )
      );
    }
    function h(e) {
      return (
        !o("WAWebMobilePlatforms").isSMB() &&
        v(e) &&
        o("WAWebABProps").getABPropConfigValue(
          "payments_receipt_and_state_copy_pix_code_p2p",
        )
      );
    }
    function y(e) {
      return o("WAWebMobilePlatforms").isSMB() && v(e);
    }
    function C() {
      return o("WAWebABProps").getABPropConfigValue(
        "payments_receipt_and_state_copy_pix_key_p2m",
      );
    }
    function b() {
      return o("WAWebABProps").getABPropConfigValue(
        "payments_receipt_and_state_copy_pix_code_p2m",
      );
    }
    function v(e) {
      return e.id.isUser() && !e.id.isBot() && !e.contact.isBusiness && f();
    }
    function S(e) {
      var t;
      if (!e) return !1;
      var n =
        (t = o("WAWebLidMigrationUtils").toPn(e)) == null ? void 0 : t.user;
      return n == null ? !1 : k(n) || E(n);
    }
    function R() {
      return o("WAWebABProps").getABPropConfigValue(
        "payments_link_to_lite_consumer_enabled",
      );
    }
    function L(e) {
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
    function E(e) {
      var t = o("WAWebL10NCountryCodes").getCountryShortcodeByPhone(e);
      return t === "BR";
    }
    function k(e) {
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
      (l.isBrazilPaymentStateUpdateSupported = p),
      (l.isBrazilPaymentStateSyncAvailable = _),
      (l.isBrazilPaymentDetailsAvailable = f),
      (l.isPixKeyReceiptAndStateAssignedOnSend = g),
      (l.isPixCodeReceiptAndStateAssignedOnSend = h),
      (l.isReceiptAndStateP2mEligibleChat = y),
      (l.isPixKeyReceiptAndStateP2mEnabled = C),
      (l.isPixCodeReceiptAndStateP2mEnabled = b),
      (l.isWidInPaymentsCountry = S),
      (l.isMessageWithLinkNfmEnabled = R),
      (l.isBrazilToBrazilOrder = L));
  },
  98,
);
