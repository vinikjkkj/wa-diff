__d(
  "WAWebOrderDetailsActionsSmbWamEvent",
  [
    "WAWebWamCodegenUtils",
    "WAWebWamEnumLastMessageDirection",
    "WAWebWamEnumOrderDetailsCreationAction",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e = o("WAWebWamCodegenUtils")).defineEvents(
        {
          OrderDetailsActionsSmb: [
            3456,
            {
              acceptedPayMethods: [1, e.TYPES.STRING],
              actionCategory: [2, e.TYPES.STRING],
              entryPointConversionSource: [13, e.TYPES.STRING],
              extraAttributes: [3, e.TYPES.STRING],
              hasAddedPrice: [4, e.TYPES.BOOLEAN],
              hasCatalog: [5, e.TYPES.BOOLEAN],
              hasNote: [6, e.TYPES.BOOLEAN],
              lastMessageDirection: [
                14,
                o("WAWebWamEnumLastMessageDirection").LAST_MESSAGE_DIRECTION,
              ],
              messageDepth: [15, e.TYPES.INTEGER],
              orderDetailEntryPoint: [7, e.TYPES.STRING],
              orderDetailsCreationAction: [
                8,
                o("WAWebWamEnumOrderDetailsCreationAction")
                  .ORDER_DETAILS_CREATION_ACTION,
              ],
              orderEligibleToSend: [11, e.TYPES.BOOLEAN],
              paymentStatus: [9, e.TYPES.BOOLEAN],
              paymentType: [10, e.TYPES.STRING],
              sharingOrderStatusEvents: [12, e.TYPES.BOOLEAN],
              threadIdHmac: [16, e.TYPES.STRING],
            },
            [1, 1, 1],
            "regular",
          ],
        },
        { OrderDetailsActionsSmb: [] },
      );
    l.OrderDetailsActionsSmbWamEvent = s;
  },
  98,
);
