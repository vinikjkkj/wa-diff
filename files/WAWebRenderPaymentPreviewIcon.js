__d(
  "WAWebRenderPaymentPreviewIcon",
  [
    "WAWebMessageFailIcon.react",
    "WAWebMsgGetters",
    "WAWebPaymentIcon.react",
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
        : s.jsx(o("WAWebMessageFailIcon.react").MessageFailIcon, {});
    }
    ((u.displayName = u.name + " [from " + i.id + "]"), (l.default = u));
  },
  98,
);
