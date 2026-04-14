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
      var t = e.orderStatus,
        n = t === void 0 ? o("WAWebOrderStatus").getDefaultOrderStatus() : t;
      return u.jsxs(o("WAWebText.react").WAWebTextSmall, {
        color: m(n),
        xstyle: [
          c.container,
          o("WAWebUISpacing").uiPadding.top8,
          o("WAWebUISpacing").uiPadding.bottom7,
          o("WAWebUISpacing").uiPadding.start8,
          o("WAWebUISpacing").uiPadding.end8,
        ],
        children: [p(n), d(n)],
      });
    }
    ((_.displayName = _.name + " [from " + i.id + "]"), (l.default = _));
  },
  226,
);
