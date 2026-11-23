__d(
  "WAWebBizOrderStatusLabels",
  ["fbt", "WAWebOrderStatus"],
  function (t, n, r, o, a, i, l, s) {
    function e(e) {
      switch (e) {
        case o("WAWebOrderStatus").OrderStatus.Pending:
          return s._(/*BTDS*/ "");
        case o("WAWebOrderStatus").OrderStatus.Processing:
          return s._(/*BTDS*/ "");
        case o("WAWebOrderStatus").OrderStatus.PartiallyShipped:
          return s._(/*BTDS*/ "");
        case o("WAWebOrderStatus").OrderStatus.Shipped:
          return s._(/*BTDS*/ "");
        case o("WAWebOrderStatus").OrderStatus.Complete:
          return s._(/*BTDS*/ "");
        case o("WAWebOrderStatus").OrderStatus.Canceled:
          return s._(/*BTDS*/ "");
        case o("WAWebOrderStatus").OrderStatus.PaymentRequested:
          return s._(/*BTDS*/ "");
        case o("WAWebOrderStatus").OrderStatus.PreparingToShip:
          return s._(/*BTDS*/ "");
        case o("WAWebOrderStatus").OrderStatus.Delivered:
          return s._(/*BTDS*/ "");
        case o("WAWebOrderStatus").OrderStatus.Confirmed:
          return s._(/*BTDS*/ "");
        case o("WAWebOrderStatus").OrderStatus.Delayed:
          return s._(/*BTDS*/ "");
        case o("WAWebOrderStatus").OrderStatus.OutForDelivery:
          return s._(/*BTDS*/ "");
        case o("WAWebOrderStatus").OrderStatus.Failed:
          return s._(/*BTDS*/ "");
        case o("WAWebOrderStatus").OrderStatus.Refunded:
          return s._(/*BTDS*/ "");
      }
    }
    l.getWAWebBizOrderStatusLabel = e;
  },
  226,
);
