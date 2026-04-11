__d(
  "WAWebCustomPaymentMethodsSyncBridgeApi",
  ["WAWebCustomPaymentMethods"],
  function (t, n, r, o, a, i, l) {
    var e = {
      setCustomPaymentMethods: function (t) {
        var e = t.customPaymentMethods;
        o(
          "WAWebCustomPaymentMethods",
        ).CustomPaymentMethods.setCustomPaymentMethods(e);
      },
    };
    l.CustomPaymentMethodsSyncBridgeApi = e;
  },
  98,
);
