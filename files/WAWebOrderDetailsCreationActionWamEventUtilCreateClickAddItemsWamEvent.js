__d(
  "WAWebOrderDetailsCreationActionWamEventUtilCreateClickAddItemsWamEvent",
  [
    "WAWebOrderDetailsActionCategory",
    "WAWebOrderDetailsActionsSmbWamEvent",
    "WAWebWamEnumOrderDetailsCreationAction",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t, n) {
      return new (o(
        "WAWebOrderDetailsActionsSmbWamEvent",
      ).OrderDetailsActionsSmbWamEvent)({
        actionCategory: r("WAWebOrderDetailsActionCategory")
          .ORDER_DETAILS_MANAGEMENT,
        hasAddedPrice: n,
        hasCatalog: t,
        orderDetailEntryPoint: e,
        orderDetailsCreationAction: o("WAWebWamEnumOrderDetailsCreationAction")
          .ORDER_DETAILS_CREATION_ACTION.CLICK_ADD_ITEMS,
      });
    }
    l.createClickAddItemsWamEvent = e;
  },
  98,
);
