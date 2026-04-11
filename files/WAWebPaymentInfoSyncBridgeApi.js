__d(
  "WAWebPaymentInfoSyncBridgeApi",
  ["WAWebPaymentInfo"],
  function (t, n, r, o, a, i, l) {
    var e = {
      setCPIInfo: function (t) {
        var e = t.cpiInfo;
        o("WAWebPaymentInfo").PaymentInfo.setCPIInfo(e);
      },
    };
    l.PaymentInfoSyncBridgeApi = e;
  },
  98,
);
