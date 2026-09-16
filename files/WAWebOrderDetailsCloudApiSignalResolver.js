__d(
  "WAWebOrderDetailsCloudApiSignalResolver",
  [
    "WALogger",
    "WAWebBizOrderDetailsParams",
    "WAWebOrderPaymentStatus",
    "WAWebWamEnumCloudApiSignalCtaAction",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(t, n) {
      var r = u(n);
      if (r == null) return null;
      var a = c(t, r.paymentSettingType);
      return a == null
        ? (o("WALogger")
            .ERROR(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "resolveOrderDetailsCloudApiSignal: ",
                  " does not map to exactly one delivered payment_settings entry",
                ])),
              n.valueOf(),
            )
            .sendLogs("cloud-api-signal-payment-setting-not-unique"),
          null)
        : { ctaAction: r.ctaAction, ctaButtonIndex: a };
    }
    function u(e) {
      switch (e) {
        case o("WAWebOrderPaymentStatus").OrderAcceptedPaymentMethods.PIX:
          return {
            ctaAction: o("WAWebWamEnumCloudApiSignalCtaAction")
              .CLOUD_API_SIGNAL_CTA_ACTION.COPY_PIX_CODE,
            paymentSettingType: o("WAWebBizOrderDetailsParams")
              .PaymentSettingType.PIX_DYNAMIC_CODE,
          };
        case o("WAWebOrderPaymentStatus").OrderAcceptedPaymentMethods.BOLETO:
          return {
            ctaAction: o("WAWebWamEnumCloudApiSignalCtaAction")
              .CLOUD_API_SIGNAL_CTA_ACTION.COPY_BOLETO_CODE,
            paymentSettingType: o("WAWebBizOrderDetailsParams")
              .PaymentSettingType.BOLETO,
          };
        case o("WAWebOrderPaymentStatus").OrderAcceptedPaymentMethods
          .PAYMENT_LINK:
          return {
            ctaAction: o("WAWebWamEnumCloudApiSignalCtaAction")
              .CLOUD_API_SIGNAL_CTA_ACTION.OPEN_PAYMENT_LINK,
            paymentSettingType: o("WAWebBizOrderDetailsParams")
              .PaymentSettingType.PAYMENT_LINK,
          };
        case o("WAWebOrderPaymentStatus").OrderAcceptedPaymentMethods.CPI:
        case o("WAWebOrderPaymentStatus").OrderAcceptedPaymentMethods.NATIVE:
          return null;
      }
    }
    function c(e, t) {
      var n,
        r = [];
      return (
        ((n = e.paymentSettings) != null ? n : []).forEach(function (e, n) {
          e[t] != null && r.push(n);
        }),
        r.length === 1 ? r[0] : null
      );
    }
    l.resolveOrderDetailsCloudApiSignal = s;
  },
  98,
);
