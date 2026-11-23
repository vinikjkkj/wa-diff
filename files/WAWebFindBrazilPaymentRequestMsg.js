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
    var e,
      s,
      u = [!1, !0];
    async function c(t, n) {
      var r = await m(t, n),
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
          { paymentMsg: null, isPending: r.every(d) })
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
    function d(e) {
      return (
        o("WAWebCommonMsgUtils").isPlaceholderMsg(e.type) ||
        o("WAWebCommonMsgUtils").isFutureproofMsg(e.type)
      );
    }
    async function m(e, t) {
      var n = u.map(function (n) {
          return new (r("WAWebMsgKey"))({ fromMe: n, remote: e, id: t });
        }),
        a = await o("WAWebAddonQueryUtils").getParentMsgsByMsgKey(n);
      return n
        .map(function (e) {
          return a.get(e.toString());
        })
        .filter(Boolean);
    }
    l.findBrazilPaymentRequestMsg = c;
  },
  98,
);
