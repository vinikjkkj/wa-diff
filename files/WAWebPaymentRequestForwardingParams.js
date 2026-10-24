__d(
  "WAWebPaymentRequestForwardingParams",
  ["WAWebBrPaymentRequest"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = s(e.payment_setting);
      if (
        t == null ||
        t.type !==
          o("WAWebBrPaymentRequest").PaymentRequestCtaType.PIX_DYNAMIC_CODE
      )
        return null;
      var n = s(t.pix_dynamic_code),
        r = n == null ? void 0 : n.code;
      return typeof r != "string" || r.trim() === ""
        ? null
        : {
            payment_setting: {
              type: o("WAWebBrPaymentRequest").PaymentRequestCtaType
                .PIX_DYNAMIC_CODE,
              pix_dynamic_code: { code: r },
            },
          };
    }
    function s(e) {
      return e != null && typeof e == "object" && !Array.isArray(e) ? e : null;
    }
    l.getForwardablePixParams = e;
  },
  98,
);
