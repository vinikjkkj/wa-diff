__d(
  "WAWebBizPaymentStatusLabels",
  ["fbt", "WAWebOrderPaymentStatus"],
  function (t, n, r, o, a, i, l, s) {
    function e(e) {
      switch (e) {
        case o("WAWebOrderPaymentStatus").OrderPaymentStatus.Pending:
          return s._(/*BTDS*/ "Requested");
        case o("WAWebOrderPaymentStatus").OrderPaymentStatus.Captured:
          return s._(/*BTDS*/ "Completed");
        case o("WAWebOrderPaymentStatus").OrderPaymentStatus.Failed:
          return s._(/*BTDS*/ "Failed");
      }
    }
    l.getWAWebBizOrderPaymentStatusLabel = e;
  },
  226,
);
