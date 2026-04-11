__d(
  "WAWebUserPrefsMerchantPaymentPartner",
  [
    "WAWebProtobufSyncAction.pb",
    "WAWebUserPrefsCustomPaymentMethods",
    "WAWebUserPrefsKeys",
    "WAWebUserPrefsLocalStorage",
    "WAWebUserPrefsTypes",
  ],
  function (t, n, r, o, a, i, l) {
    function e() {
      var e =
        r("WAWebUserPrefsLocalStorage") == null
          ? void 0
          : r("WAWebUserPrefsLocalStorage").getItemFromLocalStorage(
              o("WAWebUserPrefsKeys").KEYS.MERCHANT_PAYMENT_PARTNER,
            );
      return e;
    }
    function s() {
      var t = e();
      return u(t) && t ? t : null;
    }
    function u(e) {
      if (!e) return !1;
      var t = e.country,
        n = e.credential_id,
        r = e.gateway_name,
        a = e.status;
      return a === o("WAWebUserPrefsTypes").PaymentPartnerStatusType.ACTIVE
        ? o("WAWebUserPrefsCustomPaymentMethods").isStringFieldValid(t) &&
            o("WAWebUserPrefsCustomPaymentMethods").isStringFieldValid(n) &&
            o("WAWebUserPrefsCustomPaymentMethods").isStringFieldValid(r)
        : a === o("WAWebUserPrefsTypes").PaymentPartnerStatusType.INACTIVE
          ? o("WAWebUserPrefsCustomPaymentMethods").isStringFieldValid(t) &&
            o("WAWebUserPrefsCustomPaymentMethods").isStringFieldValid(n, !0) &&
            o("WAWebUserPrefsCustomPaymentMethods").isStringFieldValid(r, !0)
          : !1;
    }
    function c(e) {
      var t =
          e.status ===
          o("WAWebProtobufSyncAction.pb")
            .SyncActionValue$MerchantPaymentPartnerAction$Status.ACTIVE
            ? o("WAWebUserPrefsTypes").PaymentPartnerStatusType.ACTIVE
            : o("WAWebUserPrefsTypes").PaymentPartnerStatusType.INACTIVE,
        n = {
          status: t,
          country: e.country,
          gateway_name: e.gatewayName,
          credential_id: e.credentialId,
        };
      r("WAWebUserPrefsLocalStorage").setItemToLocalStorage(
        o("WAWebUserPrefsKeys").KEYS.MERCHANT_PAYMENT_PARTNER,
        n,
      );
    }
    function d() {
      var t = e();
      return u(t);
    }
    var m = {
      getPaymentPartner: s,
      isPaymentPartnerValid: d,
      setMerchantPaymentPartner: c,
    };
    l.default = m;
  },
  98,
);
