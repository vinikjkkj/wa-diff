__d(
  "WAWebBrPaymentMethodKey",
  ["$InternalEnum", "WAWebBizOrderDetailsParams"],
  function (t, n, r, o, a, i, l) {
    var e = n("$InternalEnum").Mirrored([
      "PIX",
      "PIX_APPSWITCH",
      "PIX_COPYPASTE",
      "NATIVE",
      "PIX_REDIRECT",
      "PIX_DIRECT",
      "BOLETO",
      "PAYMENT_LINK",
      "OFFSITE_CARD_PAY",
    ]);
    function s(t) {
      var n = e.cast(t);
      return n == null
        ? null
        : n === e.BOLETO
          ? "boleto"
          : n === e.PAYMENT_LINK
            ? "payment_link"
            : n === e.OFFSITE_CARD_PAY
              ? "offsite_card"
              : "pix";
    }
    function u(e) {
      return e.toUpperCase();
    }
    function c(t) {
      var n = t == null ? e.PIX_REDIRECT : p(t);
      return n;
    }
    function d(e) {
      var t;
      return (t = m(
        e,
        o("WAWebBizOrderDetailsParams").PaymentSettingType.PIX_DYNAMIC_CODE,
        "flow_type",
      )) != null
        ? t
        : m(
            e,
            o("WAWebBizOrderDetailsParams").PaymentSettingType.PIX_STATIC_CODE,
            "flow_type",
          );
    }
    function m(e, t, n) {
      var r,
        o =
          e == null
            ? void 0
            : e.find(function (e) {
                return e.type === t;
              }),
        a = o == null ? void 0 : o[t];
      return (r = a == null ? void 0 : a[n]) != null ? r : null;
    }
    function p(t) {
      return (function (t) {
        return t === "APPSWITCH"
          ? e.PIX_APPSWITCH
          : t === "COPYPASTE"
            ? e.PIX_COPYPASTE
            : t === "NATIVE"
              ? e.NATIVE
              : t === "REDIRECT"
                ? e.PIX_REDIRECT
                : t === "DIRECT"
                  ? e.PIX_DIRECT
                  : e.PIX;
      })(t.toUpperCase());
    }
    ((l.BrPaymentMethodKey = e),
      (l.getGenericPaymentMethodName = s),
      (l.normalizeServerMethodKey = u),
      (l.getPixMethodKeyForServerOrdering = c),
      (l.getPixFlowType = d));
  },
  98,
);
