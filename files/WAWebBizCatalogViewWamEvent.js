__d(
  "WAWebBizCatalogViewWamEvent",
  [
    "WAWebWamCodegenUtils",
    "WAWebWamEnumBizPlatform",
    "WAWebWamEnumCatalogEntryPoint",
    "WAWebWamEnumCatalogViewAction",
    "WAWebWamEnumDeepLinkOpenFrom",
    "WAWebWamEnumEntryPointConversationInitiated",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e = o("WAWebWamCodegenUtils")).defineEvents(
        {
          BizCatalogView: [
            3006,
            {
              adId: [26, e.TYPES.STRING],
              bizPlatform: [14, o("WAWebWamEnumBizPlatform").BIZ_PLATFORM],
              cartToggle: [13, e.TYPES.BOOLEAN],
              catalogCategoryId: [19, e.TYPES.STRING],
              catalogEntryPoint: [
                2,
                o("WAWebWamEnumCatalogEntryPoint").CATALOG_ENTRY_POINT,
              ],
              catalogEventSampled: [11, e.TYPES.BOOLEAN],
              catalogOwnerJid: [10, e.TYPES.STRING],
              catalogReportReasonCode: [8, e.TYPES.STRING],
              catalogSessionId: [3, e.TYPES.STRING],
              catalogViewAction: [
                1,
                o("WAWebWamEnumCatalogViewAction").CATALOG_VIEW_ACTION,
              ],
              collectionId: [15, e.TYPES.STRING],
              collectionIndex: [16, e.TYPES.STRING],
              deepLinkOpenFrom: [
                12,
                o("WAWebWamEnumDeepLinkOpenFrom").DEEP_LINK_OPEN_FROM,
              ],
              entryPointConversationInitiated: [
                22,
                o("WAWebWamEnumEntryPointConversationInitiated")
                  .ENTRY_POINT_CONVERSATION_INITIATED,
              ],
              entryPointConversionApp: [20, e.TYPES.STRING],
              entryPointConversionSource: [21, e.TYPES.STRING],
              hasVariants: [23, e.TYPES.BOOLEAN],
              isNewProductAddedToCart: [7, e.TYPES.BOOLEAN],
              isOrderMsgAttached: [5, e.TYPES.BOOLEAN],
              orderId: [4, e.TYPES.STRING],
              productId: [9, e.TYPES.STRING],
              productIndex: [17, e.TYPES.STRING],
              quantity: [6, e.TYPES.INTEGER],
              sequenceNumber: [18, e.TYPES.INTEGER],
              variantTypes: [24, e.TYPES.STRING],
              variantsExtraAttributes: [25, e.TYPES.STRING],
            },
            [1, 1, 1],
            "private",
            0,
          ],
        },
        { BizCatalogView: [] },
      );
    l.BizCatalogViewWamEvent = s;
  },
  98,
);
