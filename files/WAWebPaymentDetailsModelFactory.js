__d(
  "WAWebPaymentDetailsModelFactory",
  [
    "WAWebBizOrderDetailsParams",
    "WAWebBrazilPaymentState",
    "WAWebBrazilPaymentStateKeys",
    "WAWebCurrencyUtils",
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
        u = o("WAWebOrderDetails").paramsJsonToOrderInfo(
          o("WAWebBrazilPaymentState").getPaymentRequestButtonName(l),
          o("WAWebBrazilPaymentState").getPaymentRequestParamsJson(l),
        ),
        c =
          u == null ||
          (t = u.paymentSettings) == null ||
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
        d = o("WAWebBrazilPaymentState").getBrazilPaymentState(l),
        m = s(u);
      return {
        pov: o("WAWebPaymentDetailsModels").getPaymentDetailsPov(i),
        state: d,
        status: o("WAWebBrazilPaymentState").getPaymentDetailsStatus(d),
        recipientName:
          (n = c == null ? void 0 : c.merchant_name) != null ? n : "",
        pixKey: (r = c == null ? void 0 : c.key) != null ? r : "",
        pixKeyType:
          (a = o("WAWebUserPrefsTypes").PixKeyType.cast(
            c == null ? void 0 : c.key_type,
          )) != null
            ? a
            : null,
        note: o("WAWebBrazilPaymentState").getPaymentNote(l),
        amount:
          m != null
            ? o("WAWebCurrencyUtils").formatAmount1000({
                amount: m.amount1000,
                currency: m.currency,
              })
            : null,
        requestedAmount: m,
      };
    }
    function s(e) {
      return e == null ||
        e.buttonName !==
          o("WAWebBrazilPaymentStateKeys").PIX_CODE_REQUEST_BUTTON_NAME ||
        !o("WAWebCurrencyUtils").isSupportedCurrency(e.currency) ||
        !Number.isFinite(e.totalAmount) ||
        e.totalAmount <= 0
        ? null
        : { amount1000: Math.round(e.totalAmount * 1e3), currency: e.currency };
    }
    l.getPaymentDetailsModel = e;
  },
  98,
);
