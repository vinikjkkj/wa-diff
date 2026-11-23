__d(
  "WAWebPaymentRequestMsgAction",
  ["WAWebDBProcessPaymentMessages", "WAWebMsgCollection"],
  function (t, n, r, o, a, i, l) {
    async function e(e) {
      var t = new (o("WAWebMsgCollection").MsgCollection.constructor.model)(e),
        n = await o("WAWebDBProcessPaymentMessages").processPaymentMessages([
          t,
        ]);
      n &&
        n.forEach(function (t) {
          var n = o("WAWebMsgCollection").MsgCollection.get(t.id);
          n
            ? n.set(t, { merge: !0 })
            : t.id === e.id.toString() &&
              ((e.type = t.type), (e.templateParams = t.templateParams));
        });
    }
    async function s(e) {
      var t = new (o("WAWebMsgCollection").MsgCollection.constructor.model)(e),
        n = await o("WAWebDBProcessPaymentMessages").processPaymentMessages([
          t,
        ]);
      n &&
        n.forEach(function (e) {
          var t = o("WAWebMsgCollection").MsgCollection.get(e.id);
          t && t.set(e, { merge: !0 });
        });
    }
    ((l.cancelOrDeclinePaymentRequest = e), (l.fulfillPaymentRequest = s));
  },
  98,
);
