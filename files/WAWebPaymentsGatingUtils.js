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
        x(t) &&
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
      return (
        o("WAWebABProps").getABPropConfigValue(
          "br_consumer_promotions_in_purchase_hub_variant",
        ) === 0
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
        x(t) &&
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
        x(t) &&
        o("WAWebABProps").getABPropConfigValue(
          "pix_payment_request_web_enabled",
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
        x(t) &&
        o("WAWebABProps").getABPropConfigValue(
          "br_consumer_payments_web_enabled",
        )
      );
    }
    function _() {
      var e,
        t =
          (e = o("WAWebUserPrefsMeUser").getMaybeMePnUser()) == null
            ? void 0
            : e.user;
      return (
        !o("WAWebMobilePlatforms").isSMB() &&
        t != null &&
        x(t) &&
        o("WAWebABProps").getABPropConfigValue(
          "br_consumer_payments_web_enabled",
        )
      );
    }
    function f() {
      return !o("WAWebABProps").getABPropConfigValue(
        "payments_receipt_and_state_web_state_hide_kill_switch",
      );
    }
    function g() {
      var e,
        t =
          (e = o("WAWebUserPrefsMeUser").getMaybeMePnUser()) == null
            ? void 0
            : e.user;
      return t != null && x(t) && f();
    }
    function h() {
      return (
        g() &&
        !o("WAWebABProps").getABPropConfigValue(
          "payments_receipt_and_state_details_kill_switch",
        )
      );
    }
    function y(e) {
      return o("WAWebMobilePlatforms").isSMB() || !E(e)
        ? null
        : b(
            o("WAWebABProps").getABPropConfigValue(
              "payments_receipt_and_state_copy_pix_key_p2p",
            ),
          );
    }
    function C(e) {
      return o("WAWebMobilePlatforms").isSMB() || !E(e)
        ? null
        : b(
            o("WAWebABProps").getABPropConfigValue(
              "payments_receipt_and_state_copy_pix_code_p2p",
            ),
          );
    }
    function b(e) {
      return e
        ? o("WAWebABProps").getABPropConfigValue(
            "payments_receipt_and_state_bubble_version",
          )
        : o("WAWebBrazilPaymentStateKeys").CONTROL_BUBBLE_VERSION;
    }
    function v(e) {
      return (
        e != null &&
        e !== o("WAWebBrazilPaymentStateKeys").CONTROL_BUBBLE_VERSION
      );
    }
    function S(e) {
      return o("WAWebMobilePlatforms").isSMB() && E(e);
    }
    function R() {
      return o("WAWebABProps").getABPropConfigValue(
        "payments_receipt_and_state_copy_pix_key_p2m",
      );
    }
    function L() {
      return o("WAWebABProps").getABPropConfigValue(
        "payments_receipt_and_state_copy_pix_code_p2m",
      );
    }
    function E(e) {
      return e.id.isUser() && !e.id.isBot() && !e.contact.isBusiness && h();
    }
    function k(e) {
      var t;
      if (!e) return !1;
      var n =
        (t = o("WAWebLidMigrationUtils").toPn(e)) == null ? void 0 : t.user;
      return n == null ? !1 : $(n) || x(n);
    }
    function I() {
      return o("WAWebABProps").getABPropConfigValue(
        "payments_link_to_lite_consumer_enabled",
      );
    }
    function T(e) {
      return D(e.contact.id);
    }
    function D(e) {
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
    function x(e) {
      var t = o("WAWebL10NCountryCodes").getCountryShortcodeByPhone(e);
      return t === "BR";
    }
    function $(e) {
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
      (l.isPromotionsAutoSaveVariant = c),
      (l.consumerPixActionsEnabled = d),
      (l.consumerSharePixEnabled = m),
      (l.consumerTransactionsDateFilterEnabled = p),
      (l.consumerSharePixGroupsEnabled = _),
      (l.isBrazilPaymentStateUpdateSupported = f),
      (l.isBrazilPaymentStateSyncAvailable = g),
      (l.isBrazilPaymentDetailsAvailable = h),
      (l.getPixKeyReceiptAndStateBubbleVersionOnSend = y),
      (l.getPixCodeReceiptAndStateBubbleVersionOnSend = C),
      (l.getReceiptAndStateBubbleVersionOnSend = b),
      (l.isTreatmentBubbleVersion = v),
      (l.isReceiptAndStateP2mEligibleChat = S),
      (l.isPixKeyReceiptAndStateP2mEnabled = R),
      (l.isPixCodeReceiptAndStateP2mEnabled = L),
      (l.isWidInPaymentsCountry = k),
      (l.isMessageWithLinkNfmEnabled = I),
      (l.isBrazilToBrazilOrder = T),
      (l.isBrazilToBrazilOrderFor = D));
  },
  98,
);
