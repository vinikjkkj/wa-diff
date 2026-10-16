__d(
  "WAWebOrderDetailsCreationActionWamEventUtilCreateClickAddItemWamEvent",
  [
    "WAWebOrderDetailsActionCategory",
    "WAWebOrderDetailsActionsSmbWamEvent",
    "WAWebWamEnumOrderDetailsCreationAction",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.entryPoint,
        n = e.hasAddedPrice,
        a = e.hasCatalog;
      return new (o(
        "WAWebOrderDetailsActionsSmbWamEvent",
      ).OrderDetailsActionsSmbWamEvent)({
        actionCategory: r("WAWebOrderDetailsActionCategory")
          .ORDER_DETAILS_MANAGEMENT,
        hasAddedPrice: n,
        hasCatalog: a,
        orderDetailEntryPoint: t,
        orderDetailsCreationAction: o("WAWebWamEnumOrderDetailsCreationAction")
          .ORDER_DETAILS_CREATION_ACTION.CLICK_ADD_ITEM,
      });
    }
    l.createClickAddItemWamEvent = e;
  },
  98,
);
