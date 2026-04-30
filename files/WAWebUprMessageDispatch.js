__d(
  "WAWebUprMessageDispatch",
  ["WAWebUprGating", "WAWebUprPaymentRequest"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return o("WAWebUprPaymentRequest").parseUprPaymentInfo(e) != null;
    }
    function s(t, n) {
      return o("WAWebUprGating").isUprBubbleEnabledForSender(n) ? e(t) : !1;
    }
    function u(e) {
      var t = o("WAWebUprPaymentRequest").parseUprPaymentInfo(e);
      return t == null || t.paymentOptions.length === 0
        ? !1
        : t.paymentOptions.every(function (e) {
            return e.kind === "payment_link";
          });
    }
    ((l.isUprPayload = e), (l.isUprMessage = s), (l.isUprPlainLinkPayload = u));
  },
  98,
);
