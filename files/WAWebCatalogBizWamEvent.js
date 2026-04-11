__d(
  "WAWebCatalogBizWamEvent",
  [
    "WAWebWamCodegenUtils",
    "WAWebWamEnumCatalogBizAction",
    "WAWebWamEnumCatalogEntryPoint",
    "WAWebWamEnumDeepLinkOpenFrom",
    "WAWebWamEnumLastMessageDirection",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e = o("WAWebWamCodegenUtils")).defineEvents(
        {
          CatalogBiz: [
            1722,
            {
              adId: [19, e.TYPES.STRING],
              cartToggle: [13, e.TYPES.BOOLEAN],
              catalogAppealReason: [4, e.TYPES.STRING],
              catalogBizAction: [
                1,
                o("WAWebWamEnumCatalogBizAction").CATALOG_BIZ_ACTION,
              ],
              catalogEntryPoint: [
                7,
                o("WAWebWamEnumCatalogEntryPoint").CATALOG_ENTRY_POINT,
              ],
              catalogSessionId: [3, e.TYPES.STRING],
              collectionCount: [18, e.TYPES.INTEGER],
              collectionId: [14, e.TYPES.STRING],
              collectionIndex: [15, e.TYPES.STRING],
              deepLinkOpenFrom: [
                8,
                o("WAWebWamEnumDeepLinkOpenFrom").DEEP_LINK_OPEN_FROM,
              ],
              entryPointConversionSource: [20, e.TYPES.STRING],
              errorCode: [5, e.TYPES.INTEGER],
              extraAttributes: [24, e.TYPES.STRING],
              isOrderMsgAttached: [10, e.TYPES.BOOLEAN],
              lastMessageDirection: [
                21,
                o("WAWebWamEnumLastMessageDirection").LAST_MESSAGE_DIRECTION,
              ],
              messageDepth: [22, e.TYPES.INTEGER],
              orderId: [9, e.TYPES.STRING],
              productCount: [6, e.TYPES.INTEGER],
              productId: [2, e.TYPES.STRING],
              productIds: [12, e.TYPES.STRING],
              productIndex: [16, e.TYPES.STRING],
              quantity: [11, e.TYPES.INTEGER],
              threadIdHmac: [23, e.TYPES.STRING],
            },
            [1, 1, 1],
            "regular",
          ],
        },
        { CatalogBiz: [] },
      );
    l.CatalogBizWamEvent = s;
  },
  98,
);
