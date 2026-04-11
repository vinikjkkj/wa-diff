__d(
  "WAWebRenderPaymentPreviewIcon",
  [
    "WAWebMessageFailIcon.react",
    "WAWebMsgGetters",
    "WAWebPaymentIcon.react",
    "react",
    "react-compiler-runtime",
    "useWAWebMsgValues",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = o("react-compiler-runtime").c(7),
        n = e.msg,
        a;
      if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
        var i;
        ((a = [
          (i = o("WAWebMsgGetters")).getSubtype,
          i.getPaymentAmount1000,
          i.getPaymentCurrency,
          i.getPaymentStatus,
          i.getPaymentTxnStatus,
        ]),
          (t[0] = a));
      } else a = t[0];
      var l = o("useWAWebMsgValues").useMsgValues(n.id, a),
        u = l[0],
        c = l[1],
        d = l[2],
        m = l[3],
        p = l[4],
        _ = c && d;
      if (_) {
        var f;
        return (
          t[1] !== d || t[2] !== m || t[3] !== p || t[4] !== u
            ? ((f = s.jsx(r("WAWebPaymentIcon.react"), {
                currency: d,
                subtype: u,
                paymentStatus: m,
                paymentTxnStatus: p,
                isCompact: !0,
                ariaHidden: !0,
              })),
              (t[1] = d),
              (t[2] = m),
              (t[3] = p),
              (t[4] = u),
              (t[5] = f))
            : (f = t[5]),
          f
        );
      }
      var g;
      return (
        t[6] === Symbol.for("react.memo_cache_sentinel")
          ? ((g = s.jsx(o("WAWebMessageFailIcon.react").MessageFailIcon, {})),
            (t[6] = g))
          : (g = t[6]),
        g
      );
    }
    l.default = u;
  },
  98,
);
