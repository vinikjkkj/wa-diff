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
    var e,
      s,
      u = [!1, !0];
    function c(e, t) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n) {
          var r = yield p(t, n),
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
              { paymentMsg: null, isPending: r.every(m) })
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
        d.apply(this, arguments)
      );
    }
    function m(e) {
      return (
        o("WAWebCommonMsgUtils").isPlaceholderMsg(e.type) ||
        o("WAWebCommonMsgUtils").isFutureproofMsg(e.type)
      );
    }
    function p(e, t) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = u.map(function (n) {
              return new (r("WAWebMsgKey"))({ fromMe: n, remote: e, id: t });
            }),
            a = yield o("WAWebAddonQueryUtils").getParentMsgsByMsgKey(n);
          return n
            .map(function (e) {
              return a.get(e.toString());
            })
            .filter(Boolean);
        })),
        _.apply(this, arguments)
      );
    }
    l.findBrazilPaymentRequestMsg = c;
  },
  98,
);
