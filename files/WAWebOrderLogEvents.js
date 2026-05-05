__d(
  "WAWebOrderLogEvents",
  [
    "WAWebProductCatalogContext",
    "WAWebProductCatalogEventUtils",
    "WAWebWamEnumCatalogBizAction",
    "WAWebWamEnumCatalogViewAction",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.catalogContext,
        n = e.catalogOwnerJid;
      o("WAWebProductCatalogEventUtils").logCatalogViewOrBizEvent(
        babelHelpers.extends(
          {
            catalogBizAction: o("WAWebWamEnumCatalogBizAction")
              .CATALOG_BIZ_ACTION.ACTION_ORDER_MESSAGE_CLICK,
          },
          o("WAWebProductCatalogContext").toDataForCatalogViewEvents(t),
          {
            catalogOwnerJid: n,
            isOwner: o("WAWebProductCatalogEventUtils").isCatalogOwner({
              catalogOwnerJid: n,
            }),
          },
        ),
      );
    }
    function s(e) {
      var t = e.catalogContext,
        n = e.catalogOwnerJid,
        r = e.orderId,
        a = e.productCount;
      o("WAWebProductCatalogEventUtils").logCatalogViewOrBizEvent(
        babelHelpers.extends(
          {
            bizActionConfig: { orderId: r, productCount: a },
            catalogBizAction: o("WAWebWamEnumCatalogBizAction")
              .CATALOG_BIZ_ACTION.ACTION_ORDER_LIST_IMPRESSION,
            catalogOwnerJid: n,
            catalogViewAction: o("WAWebWamEnumCatalogViewAction")
              .CATALOG_VIEW_ACTION.ACTION_ORDER_LIST_IMPRESSION,
          },
          o("WAWebProductCatalogContext").toDataForCatalogViewEvents(t),
          {
            isOwner: o("WAWebProductCatalogEventUtils").isCatalogOwner({
              catalogOwnerJid: n,
            }),
          },
        ),
      );
    }
    function u(e) {
      var t = e.catalogContext,
        n = e.catalogOwnerJid,
        r = e.orderId;
      o("WAWebProductCatalogEventUtils").logCatalogViewOrBizEvent(
        babelHelpers.extends(
          {
            bizActionConfig: { orderId: r },
            catalogBizAction: o("WAWebWamEnumCatalogBizAction")
              .CATALOG_BIZ_ACTION.ACTION_ORDER_LIST_ITEM_CLICK,
            catalogOwnerJid: n,
            catalogViewAction: o("WAWebWamEnumCatalogViewAction")
              .CATALOG_VIEW_ACTION.ACTION_ORDER_LIST_ITEM_CLICK,
          },
          o("WAWebProductCatalogContext").toDataForCatalogViewEvents(t),
          {
            isOwner: o("WAWebProductCatalogEventUtils").isCatalogOwner({
              catalogOwnerJid: n,
            }),
          },
        ),
      );
    }
    function c(e) {
      var t = e.catalogContext,
        n = e.catalogOwnerJid,
        r = e.isOrderMsgAttached,
        a = e.orderId,
        i = e.quantity;
      o("WAWebProductCatalogEventUtils").logCatalogViewOrBizEvent(
        babelHelpers.extends(
          {
            bizActionConfig: { orderId: a, quantity: i },
            catalogBizAction: o("WAWebWamEnumCatalogBizAction")
              .CATALOG_BIZ_ACTION.ACTION_SEND_ORDER_MESSAGE,
            catalogOwnerJid: n,
            catalogViewAction: o("WAWebWamEnumCatalogViewAction")
              .CATALOG_VIEW_ACTION.ACTION_SEND_ORDER_MESSAGE,
          },
          o("WAWebProductCatalogContext").toDataForCatalogViewEvents(t),
          {
            isOrderMsgAttached: r,
            isOwner: o("WAWebProductCatalogEventUtils").isCatalogOwner({
              catalogOwnerJid: n,
            }),
          },
        ),
      );
    }
    ((l.logOrderMessageClick = e),
      (l.logOrderListImpression = s),
      (l.logOrderListItemClick = u),
      (l.logSendOrderMessage = c));
  },
  98,
);
