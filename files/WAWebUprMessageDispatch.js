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
    ((l.isUprPayload = e), (l.isUprMessage = s));
  },
  98,
);
