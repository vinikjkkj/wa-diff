__d(
  "WAWebBizOrderDetailsParams",
  ["$InternalEnum"],
  function (t, n, r, o, a, i) {
    var e = n("$InternalEnum")({
        PIX_STATIC_CODE: "pix_static_code",
        PIX_DYNAMIC_CODE: "pix_dynamic_code",
        CARDS: "cards",
        PAYMENT_GATEWAY: "payment_gateway",
        PAYMENT_LINK: "payment_link",
        BOLETO: "boleto",
        OFFSITE_CARD_PAY: "offsite_card_pay",
      }),
      l = n("$InternalEnum")({
        QUICK_REPLY: "quick_reply",
        CHAT_ATTACHMENT: "chat_attachment",
      });
    function s(e) {
      return JSON.parse(e);
    }
    function u(e) {
      return JSON.stringify(e);
    }
    function c(e) {
      return JSON.stringify(e);
    }
    ((i.PaymentSettingType = e),
      (i.OrderReferral = l),
      (i.parse = s),
      (i.stringify = u),
      (i.stringifyPaymentStatus = c));
  },
  66,
);
