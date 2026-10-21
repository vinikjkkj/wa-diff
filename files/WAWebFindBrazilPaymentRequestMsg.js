__d(
  "WAWebFindBrazilPaymentRequestMsg",
  [
    "WALogger",
    "WAWebAddonQueryUtils",
    "WAWebCommonMsgUtils",
    "WAWebMsgKey",
    "WAWebPaymentDetailsGating",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s;
    function u(e, t) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n) {
          var r = yield m(t, n),
            a = r.find(function (e) {
              return (
                o("WAWebPaymentDetailsGating").getPaymentRequestPayload(e) !=
                null
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
        })),
        c.apply(this, arguments)
      );
    }
    function d(e) {
      return (
        o("WAWebCommonMsgUtils").isPlaceholderMsg(e.type) ||
        o("WAWebCommonMsgUtils").isFutureproofMsg(e.type)
      );
    }
    function m(e, t) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = [!1, !0].map(function (n) {
              return new (r("WAWebMsgKey"))({ fromMe: n, remote: e, id: t });
            }),
            a = yield o("WAWebAddonQueryUtils").getParentMsgsByMsgKey(n);
          return n
            .map(function (e) {
              return a.get(e.toString());
            })
            .filter(Boolean);
        })),
        p.apply(this, arguments)
      );
    }
    l.findBrazilPaymentRequestMsg = u;
  },
  98,
);
