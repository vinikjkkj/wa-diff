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
        D(t) &&
        o("WAWebABProps").getABPropConfigValue(
          "br_consumer_payments_web_enabled",
        )
      );
    }
    function u() {
      return (
        s() &&
        o("WAWebABProps").getABPropConfigValue(
          "br_consumer_promotions_in_purchase_hub_enabled",
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
        D(t) &&
        o("WAWebABProps").getABPropConfigValue(
          "br_consumer_payments_web_enabled",
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
        D(t) &&
        o("WAWebABProps").getABPropConfigValue(
          "pix_payment_request_web_enabled",
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
        D(t) &&
        o("WAWebABProps").getABPropConfigValue(
          "br_consumer_payments_web_enabled",
        )
      );
    }
    function p() {
      var e,
        t =
          (e = o("WAWebUserPrefsMeUser").getMaybeMePnUser()) == null
            ? void 0
            : e.user;
      return (
        !o("WAWebMobilePlatforms").isSMB() &&
        t != null &&
        D(t) &&
        o("WAWebABProps").getABPropConfigValue(
          "br_consumer_payments_web_enabled",
        )
      );
    }
    function _() {
      return !o("WAWebABProps").getABPropConfigValue(
        "payments_receipt_and_state_web_state_hide_kill_switch",
      );
    }
    function f() {
      var e,
        t =
          (e = o("WAWebUserPrefsMeUser").getMaybeMePnUser()) == null
            ? void 0
            : e.user;
      return t != null && D(t) && _();
    }
    function g() {
      return (
        f() &&
        !o("WAWebABProps").getABPropConfigValue(
          "payments_receipt_and_state_details_kill_switch",
        )
      );
    }
    function h(e) {
      return o("WAWebMobilePlatforms").isSMB() || !L(e)
        ? null
        : C(
            o("WAWebABProps").getABPropConfigValue(
              "payments_receipt_and_state_copy_pix_key_p2p",
            ),
          );
    }
    function y(e) {
      return o("WAWebMobilePlatforms").isSMB() || !L(e)
        ? null
        : C(
            o("WAWebABProps").getABPropConfigValue(
              "payments_receipt_and_state_copy_pix_code_p2p",
            ),
          );
    }
    function C(e) {
      return e
        ? o("WAWebABProps").getABPropConfigValue(
            "payments_receipt_and_state_bubble_version",
          )
        : o("WAWebBrazilPaymentStateKeys").CONTROL_BUBBLE_VERSION;
    }
    function b(e) {
      return (
        e != null &&
        e !== o("WAWebBrazilPaymentStateKeys").CONTROL_BUBBLE_VERSION
      );
    }
    function v(e) {
      return o("WAWebMobilePlatforms").isSMB() && L(e);
    }
    function S() {
      return o("WAWebABProps").getABPropConfigValue(
        "payments_receipt_and_state_copy_pix_key_p2m",
      );
    }
    function R() {
      return o("WAWebABProps").getABPropConfigValue(
        "payments_receipt_and_state_copy_pix_code_p2m",
      );
    }
    function L(e) {
      return e.id.isUser() && !e.id.isBot() && !e.contact.isBusiness && g();
    }
    function E(e) {
      var t;
      if (!e) return !1;
      var n =
        (t = o("WAWebLidMigrationUtils").toPn(e)) == null ? void 0 : t.user;
      return n == null ? !1 : x(n) || D(n);
    }
    function k() {
      return o("WAWebABProps").getABPropConfigValue(
        "payments_link_to_lite_consumer_enabled",
      );
    }
    function I(e) {
      return T(e.contact.id);
    }
    function T(e) {
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
    function D(e) {
      var t = o("WAWebL10NCountryCodes").getCountryShortcodeByPhone(e);
      return t === "BR";
    }
    function x(e) {
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
      (l.consumerPromotionsEnabled = u),
      (l.consumerPixActionsEnabled = c),
      (l.consumerSharePixEnabled = d),
      (l.consumerTransactionsDateFilterEnabled = m),
      (l.consumerSharePixGroupsEnabled = p),
      (l.isBrazilPaymentStateUpdateSupported = _),
      (l.isBrazilPaymentStateSyncAvailable = f),
      (l.isBrazilPaymentDetailsAvailable = g),
      (l.getPixKeyReceiptAndStateBubbleVersionOnSend = h),
      (l.getPixCodeReceiptAndStateBubbleVersionOnSend = y),
      (l.getReceiptAndStateBubbleVersionOnSend = C),
      (l.isTreatmentBubbleVersion = b),
      (l.isReceiptAndStateP2mEligibleChat = v),
      (l.isPixKeyReceiptAndStateP2mEnabled = S),
      (l.isPixCodeReceiptAndStateP2mEnabled = R),
      (l.isWidInPaymentsCountry = E),
      (l.isMessageWithLinkNfmEnabled = k),
      (l.isBrazilToBrazilOrder = I),
      (l.isBrazilToBrazilOrderFor = T));
  },
  98,
);
