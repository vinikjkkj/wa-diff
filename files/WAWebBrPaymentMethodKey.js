__d(
  "WAWebBrPaymentMethodKey",
  ["$InternalEnum", "WAWebBizOrderDetailsParams"],
  function (t, n, r, o, a, i, l) {
    var e = n("$InternalEnum").Mirrored([
      "PIX",
      "PIX_APPSWITCH",
      "PIX_COPYPASTE",
      "PIX_REDIRECT",
      "PIX_DIRECT",
      "BOLETO",
      "PAYMENT_LINK",
      "OFFSITE_CARD_PAY",
    ]);
    function s(e) {
      return e.toUpperCase();
    }
    function u(t) {
      var n = t == null ? e.PIX_REDIRECT : m(t);
      return n;
    }
    function c(e) {
      var t;
      return (t = d(
        e,
        o("WAWebBizOrderDetailsParams").PaymentSettingType.PIX_DYNAMIC_CODE,
        "flow_type",
      )) != null
        ? t
        : d(
            e,
            o("WAWebBizOrderDetailsParams").PaymentSettingType.PIX_STATIC_CODE,
            "flow_type",
          );
    }
    function d(e, t, n) {
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
    function m(t) {
      return (function (t) {
        return t === "APPSWITCH"
          ? e.PIX_APPSWITCH
          : t === "COPYPASTE"
            ? e.PIX_COPYPASTE
            : t === "REDIRECT"
              ? e.PIX_REDIRECT
              : t === "DIRECT"
                ? e.PIX_DIRECT
                : e.PIX;
      })(t.toUpperCase());
    }
    ((l.BrPaymentMethodKey = e),
      (l.normalizeServerMethodKey = s),
      (l.getPixMethodKeyForServerOrdering = u),
      (l.getPixFlowType = c));
  },
  98,
);
