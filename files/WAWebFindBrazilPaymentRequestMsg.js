__d(
  "WAWebFindBrazilPaymentRequestMsg",
  [
    "WALogger",
    "WAWebAddonQueryUtils",
    "WAWebCommonMsgUtils",
    "WAWebMsgKey",
    "WAWebPaymentDetailsGating",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s;
    async function u(t, n) {
      var r = await d(t, n),
        a = r.find(function (e) {
          return (
            o("WAWebPaymentDetailsGating").getPaymentRequestPayload(e) != null
          );
        });
      return a == null
        ? (o("WALogger").WARN(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[br-payment-state] no payment message for the update",
              ])),
          ),
          { paymentMsg: null, isPending: r.every(c) })
        : o("WAWebPaymentDetailsGating").isPaymentStateSyncEnabledForMsg(a)
          ? { paymentMsg: a, isPending: !1 }
          : (o("WALogger").WARN(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "[br-payment-state] ignoring an update for a payment outside the experiment",
                ])),
            ),
            { paymentMsg: null, isPending: !1 });
    }
    function c(e) {
      return (
        o("WAWebCommonMsgUtils").isPlaceholderMsg(e.type) ||
        o("WAWebCommonMsgUtils").isFutureproofMsg(e.type)
      );
    }
    async function d(e, t) {
      var n = [!1, !0].map(function (n) {
          return new (r("WAWebMsgKey"))({ fromMe: n, remote: e, id: t });
        }),
        a = await o("WAWebAddonQueryUtils").getParentMsgsByMsgKey(n);
      return n
        .map(function (e) {
          return a.get(e.toString());
        })
        .filter(Boolean);
    }
    l.findBrazilPaymentRequestMsg = u;
  },
  98,
);
