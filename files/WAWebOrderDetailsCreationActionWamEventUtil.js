__d(
  "WAWebOrderDetailsCreationActionWamEventUtil",
  [
    "WAWebOrderDetailsActionCategory",
    "WAWebOrderDetailsActionsSmbWamEvent",
    "WAWebOrderDetailsCreationActionWamEventUtilCreateSendOrderDetailsExtraAttributes",
    "WAWebWamEnumOrderDetailsCreationAction",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.acceptedPayMethods,
        n = e.chat,
        a = e.entryPoint,
        i = e.flatAmounts,
        l = e.hasAddedPrice,
        s = e.hasCatalog,
        u = e.orderCurrency,
        c = e.orderItems,
        d = o(
          "WAWebOrderDetailsCreationActionWamEventUtilCreateSendOrderDetailsExtraAttributes",
        ).createSendOrderDetailsExtraAttributes(n, c, i, u);
      return new (o(
        "WAWebOrderDetailsActionsSmbWamEvent",
      ).OrderDetailsActionsSmbWamEvent)({
        acceptedPayMethods: JSON.stringify(t),
        actionCategory: r("WAWebOrderDetailsActionCategory")
          .ORDER_DETAILS_CREATION,
        extraAttributes: JSON.stringify(d),
        hasAddedPrice: l,
        hasCatalog: s,
        orderDetailEntryPoint: a,
        orderDetailsCreationAction: o("WAWebWamEnumOrderDetailsCreationAction")
          .ORDER_DETAILS_CREATION_ACTION.SEND_ORDER_DETAILS,
      });
    }
    l.createSendOrderDetailsWamEvent = e;
  },
  98,
);
