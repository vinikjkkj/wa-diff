__d(
  "WAWebPaymentDetailsModelFactory",
  [
    "WAWebBizOrderDetailsParams",
    "WAWebBrazilPaymentState",
    "WAWebBrazilPaymentStateKeys",
    "WAWebOrderDetails",
    "WAWebPaymentDetailsModels",
    "WAWebUserPrefsTypes",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t,
        n,
        r,
        a,
        i = e.isPaymentFromMe,
        l = e.payload,
        s =
          (t = o("WAWebOrderDetails").paramsJsonToOrderInfo(
            o("WAWebBrazilPaymentStateKeys").PAYMENT_INFO_BUTTON_NAME,
            o("WAWebBrazilPaymentState").getPaymentInfoParamsJson(l),
          )) == null ||
          (t = t.paymentSettings) == null ||
          (t = t.find(function (e) {
            return (
              e.type ===
              o("WAWebBizOrderDetailsParams").PaymentSettingType.PIX_STATIC_CODE
            );
          })) == null
            ? void 0
            : t[
                o("WAWebBizOrderDetailsParams").PaymentSettingType
                  .PIX_STATIC_CODE
              ],
        u = o("WAWebBrazilPaymentState").getBrazilPaymentState(l);
      return {
        pov: o("WAWebPaymentDetailsModels").getPaymentDetailsPov(i),
        state: u,
        status: o("WAWebBrazilPaymentState").getPaymentDetailsStatus(u),
        recipientName:
          (n = s == null ? void 0 : s.merchant_name) != null ? n : "",
        pixKey: (r = s == null ? void 0 : s.key) != null ? r : "",
        pixKeyType:
          (a = o("WAWebUserPrefsTypes").PixKeyType.cast(
            s == null ? void 0 : s.key_type,
          )) != null
            ? a
            : null,
        note: o("WAWebBrazilPaymentState").getPaymentNote(l),
      };
    }
    l.getPaymentDetailsModel = e;
  },
  98,
);
