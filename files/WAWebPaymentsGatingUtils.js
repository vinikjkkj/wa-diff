__d(
  "WAWebPaymentsGatingUtils",
  [
    "WAWebABProps",
    "WAWebBrazilPaymentStateKeys",
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
        T(t) &&
        o("WAWebABProps").getABPropConfigValue(
          "br_consumer_payments_web_enabled",
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
        T(t) &&
        o("WAWebABProps").getABPropConfigValue(
          "br_consumer_payments_web_enabled",
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
        T(t) &&
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
        T(t) &&
        o("WAWebABProps").getABPropConfigValue(
          "br_consumer_payments_web_enabled",
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
        T(t) &&
        o("WAWebABProps").getABPropConfigValue(
          "br_consumer_payments_web_enabled",
        )
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
      return t != null && T(t) && p();
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
      return o("WAWebMobilePlatforms").isSMB() || !R(e)
        ? null
        : y(
            o("WAWebABProps").getABPropConfigValue(
              "payments_receipt_and_state_copy_pix_key_p2p",
            ),
          );
    }
    function h(e) {
      return o("WAWebMobilePlatforms").isSMB() || !R(e)
        ? null
        : y(
            o("WAWebABProps").getABPropConfigValue(
              "payments_receipt_and_state_copy_pix_code_p2p",
            ),
          );
    }
    function y(e) {
      return e
        ? o("WAWebABProps").getABPropConfigValue(
            "payments_receipt_and_state_bubble_version",
          )
        : o("WAWebBrazilPaymentStateKeys").CONTROL_BUBBLE_VERSION;
    }
    function C(e) {
      return (
        e != null &&
        e !== o("WAWebBrazilPaymentStateKeys").CONTROL_BUBBLE_VERSION
      );
    }
    function b(e) {
      return o("WAWebMobilePlatforms").isSMB() && R(e);
    }
    function v() {
      return o("WAWebABProps").getABPropConfigValue(
        "payments_receipt_and_state_copy_pix_key_p2m",
      );
    }
    function S() {
      return o("WAWebABProps").getABPropConfigValue(
        "payments_receipt_and_state_copy_pix_code_p2m",
      );
    }
    function R(e) {
      return e.id.isUser() && !e.id.isBot() && !e.contact.isBusiness && f();
    }
    function L(e) {
      var t;
      if (!e) return !1;
      var n =
        (t = o("WAWebLidMigrationUtils").toPn(e)) == null ? void 0 : t.user;
      return n == null ? !1 : D(n) || T(n);
    }
    function E() {
      return o("WAWebABProps").getABPropConfigValue(
        "payments_link_to_lite_consumer_enabled",
      );
    }
    function k(e) {
      return I(e.contact.id);
    }
    function I(e) {
      var t = o("WAWebUserPrefsMeUser").getMaybeMePnUser(),
        n = o("WAWebL10NCountryCodes").getCountryShortcodeByPhone(
          t == null ? void 0 : t.user,
        ),
        r = o("WAWebLidMigrationUtils").toPn(e),
        a = o("WAWebL10NCountryCodes").getCountryShortcodeByPhone(
          r == null ? void 0 : r.user,
        );
      return n === "BR" && a === "BR";
    }
    function T(e) {
      var t = o("WAWebL10NCountryCodes").getCountryShortcodeByPhone(e);
      return t === "BR";
    }
    function D(e) {
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
      (l.getPixKeyReceiptAndStateBubbleVersionOnSend = g),
      (l.getPixCodeReceiptAndStateBubbleVersionOnSend = h),
      (l.getReceiptAndStateBubbleVersionOnSend = y),
      (l.isTreatmentBubbleVersion = C),
      (l.isReceiptAndStateP2mEligibleChat = b),
      (l.isPixKeyReceiptAndStateP2mEnabled = v),
      (l.isPixCodeReceiptAndStateP2mEnabled = S),
      (l.isWidInPaymentsCountry = L),
      (l.isMessageWithLinkNfmEnabled = E),
      (l.isBrazilToBrazilOrder = k),
      (l.isBrazilToBrazilOrderFor = I));
  },
  98,
);
