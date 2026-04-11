__d(
  "WAWebBizOrderStatusLabels",
  ["fbt", "WAWebOrderStatus"],
  function (t, n, r, o, a, i, l, s) {
    function e(e) {
      switch (e) {
        case o("WAWebOrderStatus").OrderStatus.Pending:
          return s._(/*BTDS*/ "Pending");
        case o("WAWebOrderStatus").OrderStatus.Processing:
          return s._(/*BTDS*/ "Processing");
        case o("WAWebOrderStatus").OrderStatus.PartiallyShipped:
          return s._(/*BTDS*/ "Partially shipped");
        case o("WAWebOrderStatus").OrderStatus.Shipped:
          return s._(/*BTDS*/ "Shipped");
        case o("WAWebOrderStatus").OrderStatus.Complete:
          return s._(/*BTDS*/ "Completed");
        case o("WAWebOrderStatus").OrderStatus.Canceled:
          return s._(/*BTDS*/ "Canceled");
        case o("WAWebOrderStatus").OrderStatus.PaymentRequested:
          return s._(/*BTDS*/ "Payment requested");
        case o("WAWebOrderStatus").OrderStatus.PreparingToShip:
          return s._(/*BTDS*/ "Preparing to ship");
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
    l.getWAWebBizOrderStatusLabel = e;
  },
  226,
);
