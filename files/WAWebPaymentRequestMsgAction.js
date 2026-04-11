__d(
  "WAWebPaymentRequestMsgAction",
  [
    "WAWebDBProcessPaymentMessages",
    "WAWebMsgCollection",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = new (o("WAWebMsgCollection").MsgCollection.constructor.model)(
              e,
            ),
            n = yield o("WAWebDBProcessPaymentMessages").processPaymentMessages(
              [t],
            );
          n &&
            n.forEach(function (t) {
              var n = o("WAWebMsgCollection").MsgCollection.get(t.id);
              n
                ? n.set(t, { merge: !0 })
                : t.id === e.id.toString() &&
                  ((e.type = t.type), (e.templateParams = t.templateParams));
            });
        })),
        s.apply(this, arguments)
      );
    }
    function u(e) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = new (o("WAWebMsgCollection").MsgCollection.constructor.model)(
              e,
            ),
            n = yield o("WAWebDBProcessPaymentMessages").processPaymentMessages(
              [t],
            );
          n &&
            n.forEach(function (e) {
              var t = o("WAWebMsgCollection").MsgCollection.get(e.id);
              t && t.set(e, { merge: !0 });
            });
        })),
        c.apply(this, arguments)
      );
    }
    ((l.cancelOrDeclinePaymentRequest = e), (l.fulfillPaymentRequest = u));
  },
  98,
);
