__d(
  "WAWebRenderPaymentPreviewIcon",
  [
    "WAWebMsgGetters",
    "WAWebPaymentIcon.react",
    "WDSIconWdsIcUnsupportedMessage.react",
    "react",
    "useWAWebMsgValues",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t,
        n = e.msg,
        a = o("useWAWebMsgValues").useMsgValues(n.id, [
          (t = o("WAWebMsgGetters")).getSubtype,
          t.getPaymentAmount1000,
          t.getPaymentCurrency,
          t.getPaymentStatus,
          t.getPaymentTxnStatus,
        ]),
        i = a[0],
        l = a[1],
        u = a[2],
        c = a[3],
        d = a[4],
        m = l && u;
      return m
        ? s.jsx(r("WAWebPaymentIcon.react"), {
            currency: u,
            subtype: i,
            paymentStatus: c,
            paymentTxnStatus: d,
            isCompact: !0,
            ariaHidden: !0,
          })
        : s.jsx(r("WDSIconWdsIcUnsupportedMessage.react"), {
            width: 20,
            height: 20,
            testid: "message-fail",
          });
    }
    ((u.displayName = u.name + " [from " + i.id + "]"), (l.default = u));
  },
  98,
);
