__d(
  "WAWebOrderDetailStatusPill.react",
  [
    "fbt",
    "WAWebActionCheckCircleIcon.react",
    "WAWebAlertErrorIcon.react",
    "WAWebLocalShippingIcon.react",
    "WAWebOrderStatus",
    "WAWebStatusClockIcon.react",
    "WAWebText.react",
    "WAWebUISpacing",
    "WDSIconWdsIcCurrencyRealFilled.react",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = {
        canceledIcon: { marginTop: "xs0t0u8", $$css: !0 },
        container: {
          alignItems: "x6s0dn4",
          backgroundColor: "x4wrhlh",
          borderStartStartRadius: "x12ol6y4",
          borderStartEndRadius: "x180vkcf",
          borderEndEndRadius: "x1khw62d",
          borderEndStartRadius: "x709u02",
          display: "x3nfvp2",
          fontSize: "x1pg5gke",
          $$css: !0,
        },
        iconCipherText: { marginTop: "xav9cv8", $$css: !0 },
      };
    function d(e) {
      switch (e) {
        case o("WAWebOrderStatus").OrderStatus.Pending:
          return s._(/*BTDS*/ "Pending");
        case o("WAWebOrderStatus").OrderStatus.Processing:
          return s._(/*BTDS*/ "Processing");
        case o("WAWebOrderStatus").OrderStatus.PartiallyShipped:
          return s._(/*BTDS*/ "Partially shipped");
        case o("WAWebOrderStatus").OrderStatus.Shipped:
          return s._(/*BTDS*/ "Shipped");
        case o("WAWebOrderStatus").OrderStatus.Canceled:
          return s._(/*BTDS*/ "Canceled");
        case o("WAWebOrderStatus").OrderStatus.Complete:
          return s._(/*BTDS*/ "Complete");
        case o("WAWebOrderStatus").OrderStatus.PreparingToShip:
          return s._(/*BTDS*/ "Preparing to ship");
        case o("WAWebOrderStatus").OrderStatus.PaymentRequested:
          return s._(/*BTDS*/ "Payment requested");
        case o("WAWebOrderStatus").OrderStatus.Delivered:
          return s._(/*BTDS*/ "Delivered");
        case o("WAWebOrderStatus").OrderStatus.Confirmed:
          return s._(/*BTDS*/ "Confirmed");
        case o("WAWebOrderStatus").OrderStatus.Delayed:
          return s._(/*BTDS*/ "Delayed");
        case o("WAWebOrderStatus").OrderStatus.OutForDelivery:
          return s._(/*BTDS*/ "Out for delivery");
        case o("WAWebOrderStatus").OrderStatus.Failed:
          return s._(/*BTDS*/ "Failed");
        case o("WAWebOrderStatus").OrderStatus.Refunded:
          return s._(/*BTDS*/ "Refunded");
      }
    }
    function m(e) {
      switch (e) {
        case o("WAWebOrderStatus").OrderStatus.Pending:
        case o("WAWebOrderStatus").OrderStatus.Processing:
        case o("WAWebOrderStatus").OrderStatus.PartiallyShipped:
        case o("WAWebOrderStatus").OrderStatus.Shipped:
        case o("WAWebOrderStatus").OrderStatus.PreparingToShip:
        case o("WAWebOrderStatus").OrderStatus.PaymentRequested:
        case o("WAWebOrderStatus").OrderStatus.Confirmed:
        case o("WAWebOrderStatus").OrderStatus.OutForDelivery:
          return;
        case o("WAWebOrderStatus").OrderStatus.Canceled:
        case o("WAWebOrderStatus").OrderStatus.Delayed:
        case o("WAWebOrderStatus").OrderStatus.Failed:
          return "critical";
        case o("WAWebOrderStatus").OrderStatus.Complete:
        case o("WAWebOrderStatus").OrderStatus.Delivered:
        case o("WAWebOrderStatus").OrderStatus.Refunded:
          return "success";
      }
    }
    function p(e) {
      switch (e) {
        case o("WAWebOrderStatus").OrderStatus.Pending:
        case o("WAWebOrderStatus").OrderStatus.Processing:
        case o("WAWebOrderStatus").OrderStatus.PreparingToShip:
        case o("WAWebOrderStatus").OrderStatus.Delayed:
          return u.jsx(o("WAWebStatusClockIcon.react").StatusClockIcon, {
            width: 12,
            displayInline: !0,
            xstyle: [o("WAWebUISpacing").uiMargin.end4, c.iconCipherText],
          });
        case o("WAWebOrderStatus").OrderStatus.PaymentRequested:
          return u.jsx(r("WDSIconWdsIcCurrencyRealFilled.react"), {
            width: 18,
            displayInline: !0,
            xstyle: [o("WAWebUISpacing").uiMargin.end4, c.iconCipherText],
          });
        case o("WAWebOrderStatus").OrderStatus.PartiallyShipped:
        case o("WAWebOrderStatus").OrderStatus.Shipped:
        case o("WAWebOrderStatus").OrderStatus.OutForDelivery:
          return u.jsx(o("WAWebLocalShippingIcon.react").LocalShippingIcon, {
            width: 12,
            displayInline: !0,
            xstyle: [o("WAWebUISpacing").uiMargin.end4, c.iconCipherText],
          });
        case o("WAWebOrderStatus").OrderStatus.Canceled:
        case o("WAWebOrderStatus").OrderStatus.Failed:
          return u.jsx(o("WAWebAlertErrorIcon.react").AlertErrorIcon, {
            width: 12,
            displayInline: !0,
            xstyle: [o("WAWebUISpacing").uiMargin.end4, c.canceledIcon],
          });
        case o("WAWebOrderStatus").OrderStatus.Complete:
        case o("WAWebOrderStatus").OrderStatus.Delivered:
        case o("WAWebOrderStatus").OrderStatus.Confirmed:
        case o("WAWebOrderStatus").OrderStatus.Refunded:
          return u.jsx(
            o("WAWebActionCheckCircleIcon.react").ActionCheckCircleIcon,
            {
              width: 12,
              displayInline: !0,
              xstyle: [o("WAWebUISpacing").uiMargin.end4, c.iconCipherText],
            },
          );
      }
    }
    function _(e) {
      var t = o("react-compiler-runtime").c(13),
        n = e.orderStatus,
        r;
      t[0] !== n
        ? ((r =
            n === void 0 ? o("WAWebOrderStatus").getDefaultOrderStatus() : n),
          (t[0] = n),
          (t[1] = r))
        : (r = t[1]);
      var a = r,
        i;
      t[2] !== a ? ((i = m(a)), (t[2] = a), (t[3] = i)) : (i = t[3]);
      var l;
      if (t[4] === Symbol.for("react.memo_cache_sentinel")) {
        var s;
        ((l = [
          c.container,
          (s = o("WAWebUISpacing")).uiPadding.top8,
          s.uiPadding.bottom7,
          s.uiPadding.start8,
          s.uiPadding.end8,
        ]),
          (t[4] = l));
      } else l = t[4];
      var _;
      t[5] !== a ? ((_ = p(a)), (t[5] = a), (t[6] = _)) : (_ = t[6]);
      var f;
      t[7] !== a ? ((f = d(a)), (t[7] = a), (t[8] = f)) : (f = t[8]);
      var g;
      return (
        t[9] !== i || t[10] !== _ || t[11] !== f
          ? ((g = u.jsxs(o("WAWebText.react").WAWebTextSmall, {
              color: i,
              xstyle: l,
              children: [_, f],
            })),
            (t[9] = i),
            (t[10] = _),
            (t[11] = f),
            (t[12] = g))
          : (g = t[12]),
        g
      );
    }
    l.default = _;
  },
  226,
);
