__d(
  "WAWebBizPaymentStatusInfoLabel.react",
  [
    "WAWebBizPaymentStatusLabels",
    "WAWebFlex.react",
    "WAWebOrderPaymentStatus",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = {
        canceled: { color: "x30a034", $$css: !0 },
        completed: { color: "x1du590y", $$css: !0 },
        orderStatusLabel: { fontWeight: "xk50ysn", $$css: !0 },
        pending: { color: "xhslqc4", $$css: !0 },
      };
    function c(e) {
      switch (e) {
        case o("WAWebOrderPaymentStatus").OrderPaymentStatus.Failed:
          return u.canceled;
        case o("WAWebOrderPaymentStatus").OrderPaymentStatus.Captured:
          return u.completed;
        case o("WAWebOrderPaymentStatus").OrderPaymentStatus.Pending:
          return u.pending;
      }
    }
    function d(e) {
      var t = o("react-compiler-runtime").c(9),
        n = e.orderPaymentStatusInfo,
        r =
          n === void 0
            ? o("WAWebOrderPaymentStatus").OrderPaymentStatus.Pending
            : n,
        a;
      t[0] !== r
        ? ((a = o(
            "WAWebBizPaymentStatusLabels",
          ).getWAWebBizOrderPaymentStatusLabel(r)),
          (t[0] = r),
          (t[1] = a))
        : (a = t[1]);
      var i = a,
        l;
      t[2] !== r ? ((l = c(r)), (t[2] = r), (t[3] = l)) : (l = t[3]);
      var d;
      t[4] !== l
        ? ((d = [u.orderStatusLabel, l]), (t[4] = l), (t[5] = d))
        : (d = t[5]);
      var m;
      return (
        t[6] !== i || t[7] !== d
          ? ((m = s.jsx(o("WAWebFlex.react").FlexRow, {
              xstyle: d,
              children: i,
            })),
            (t[6] = i),
            (t[7] = d),
            (t[8] = m))
          : (m = t[8]),
        m
      );
    }
    l.default = d;
  },
  98,
);
