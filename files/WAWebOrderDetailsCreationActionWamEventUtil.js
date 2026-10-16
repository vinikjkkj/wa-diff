__d(
  "WAWebOrderDetailsCreationActionWamEventUtil",
  [
    "WAWebOrderDetailsActionCategory",
    "WAWebOrderDetailsActionsSmbWamEvent",
    "WAWebOrderDetailsCreationActionWamEventUtilCreateSendOrderDetailsExtraAttributes",
    "WAWebWamEnumOrderDetailsCreationAction",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t, n, a, i, l, s, u) {
      var c = o(
        "WAWebOrderDetailsCreationActionWamEventUtilCreateSendOrderDetailsExtraAttributes",
      ).createSendOrderDetailsExtraAttributes(e, n, a, u);
      return new (o(
        "WAWebOrderDetailsActionsSmbWamEvent",
      ).OrderDetailsActionsSmbWamEvent)({
        acceptedPayMethods: JSON.stringify(s),
        actionCategory: r("WAWebOrderDetailsActionCategory")
          .ORDER_DETAILS_CREATION,
        extraAttributes: JSON.stringify(c),
        hasAddedPrice: l,
        hasCatalog: i,
        orderDetailEntryPoint: t,
        orderDetailsCreationAction: o("WAWebWamEnumOrderDetailsCreationAction")
          .ORDER_DETAILS_CREATION_ACTION.SEND_ORDER_DETAILS,
      });
    }
    l.createSendOrderDetailsWamEvent = e;
  },
  98,
);
