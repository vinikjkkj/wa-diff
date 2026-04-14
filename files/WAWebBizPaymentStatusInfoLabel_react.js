__d(
  "WAWebBizPaymentStatusInfoLabel.react",
  [
    "WAWebBizPaymentStatusLabels",
    "WAWebFlex.react",
    "WAWebOrderPaymentStatus",
    "react",
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
      var t = e.orderPaymentStatusInfo,
        n =
          t === void 0
            ? o("WAWebOrderPaymentStatus").OrderPaymentStatus.Pending
            : t,
        r = o("WAWebBizPaymentStatusLabels").getWAWebBizOrderPaymentStatusLabel(
          n,
        );
      return s.jsx(o("WAWebFlex.react").FlexRow, {
        xstyle: [u.orderStatusLabel, c(n)],
        children: r,
      });
    }
    ((d.displayName = d.name + " [from " + i.id + "]"), (l.default = d));
  },
  98,
);
