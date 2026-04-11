__d(
  "WAWebProductCollectionLogEvents",
  [
    "WAWebBizCatalogUtils",
    "WAWebCatalogBizWamEvent",
    "WAWebProductCatalogContext",
    "WAWebProductCatalogEventUtils",
    "WAWebWamEnumCatalogBizAction",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.catalogContext,
        n = e.catalogOwnerJid,
        r = e.collectionId,
        a = o("WAWebBizCatalogUtils").getProductStatsInFetched(n, r),
        i = a == null ? void 0 : a.productIndex,
        l = a == null ? void 0 : a.collectionIndex;
      o("WAWebProductCatalogEventUtils").logCatalogViewOrBizEvent(
        babelHelpers.extends(
          {
            isOwner: o("WAWebProductCatalogEventUtils").isCatalogOwner({
              catalogOwnerJid: n,
            }),
            productIndex: i,
            collectionIndex: l,
          },
          o("WAWebProductCatalogContext").toDataForCatalogViewEvents(t),
          { catalogOwnerJid: n },
        ),
      );
    }
    function s(e) {
      var t = e.addedCount,
        n = e.catalogContext,
        r = e.collectionId,
        a = e.removedCount;
      (t > 0 &&
        new (o("WAWebCatalogBizWamEvent").CatalogBizWamEvent)({
          catalogBizAction: o("WAWebWamEnumCatalogBizAction").CATALOG_BIZ_ACTION
            .ACTION_COLLECTION_ASSIGN_ITEMS,
          catalogEntryPoint: n.entryPoint,
          catalogSessionId: n.session.toString(),
          productCount: t,
          collectionId: r,
        }).commit(),
        a > 0 &&
          new (o("WAWebCatalogBizWamEvent").CatalogBizWamEvent)({
            catalogBizAction: o("WAWebWamEnumCatalogBizAction")
              .CATALOG_BIZ_ACTION.ACTION_COLLECTION_UNASSIGN_ITEMS,
            catalogEntryPoint: n.entryPoint,
            catalogSessionId: n.session.toString(),
            productCount: a,
            collectionId: r,
          }).commit());
    }
    function u(e) {
      var t = e.catalogContext,
        n = e.collectionId;
      new (o("WAWebCatalogBizWamEvent").CatalogBizWamEvent)({
        catalogBizAction: o("WAWebWamEnumCatalogBizAction").CATALOG_BIZ_ACTION
          .ACTION_COLLECTION_DELETED,
        catalogEntryPoint: t.entryPoint,
        catalogSessionId: t.session.toString(),
        collectionId: n,
      }).commit();
    }
    function c(e) {
      var t = e.catalogContext,
        n = e.collectionId;
      new (o("WAWebCatalogBizWamEvent").CatalogBizWamEvent)({
        catalogBizAction: o("WAWebWamEnumCatalogBizAction").CATALOG_BIZ_ACTION
          .ACTION_COLLECTION_DELETED,
        catalogEntryPoint: t.entryPoint,
        catalogSessionId: t.session.toString(),
        collectionId: n,
      }).commit();
    }
    function d(e) {
      new (o("WAWebCatalogBizWamEvent").CatalogBizWamEvent)({
        catalogBizAction: o("WAWebWamEnumCatalogBizAction").CATALOG_BIZ_ACTION
          .ACTION_MENU_COLLECTIONS_CLICK,
        catalogEntryPoint: e.entryPoint,
        catalogSessionId: e.session.toString(),
      }).commit();
    }
    function m(e) {
      var t = e.catalogContext,
        n = e.productCount;
      new (o("WAWebCatalogBizWamEvent").CatalogBizWamEvent)({
        catalogBizAction: o("WAWebWamEnumCatalogBizAction").CATALOG_BIZ_ACTION
          .ACTION_COLLECTION_CREATED,
        catalogEntryPoint: t.entryPoint,
        catalogSessionId: t.session.toString(),
        productCount: n,
      }).commit();
    }
    function p(e) {
      new (o("WAWebCatalogBizWamEvent").CatalogBizWamEvent)({
        catalogBizAction: o("WAWebWamEnumCatalogBizAction").CATALOG_BIZ_ACTION
          .ACTION_COLLECTION_CREATE_CLICKED,
        catalogEntryPoint: e.entryPoint,
        catalogSessionId: e.session.toString(),
      }).commit();
    }
    function _(e) {
      var t = e.catalogContext,
        n = e.movesCount;
      new (o("WAWebCatalogBizWamEvent").CatalogBizWamEvent)({
        catalogBizAction: o("WAWebWamEnumCatalogBizAction").CATALOG_BIZ_ACTION
          .ACTION_COLLECTION_CHANGE_ORDER,
        catalogEntryPoint: t.entryPoint,
        catalogSessionId: t.session.toString(),
        productCount: n,
      }).commit();
    }
    ((l.logCollectionSeeAllView = e),
      (l.logCollectionItemsAssignment = s),
      (l.logCollectionDeleted = u),
      (l.logCollectionRenamed = c),
      (l.logCollectionMenuClicked = d),
      (l.logCollectionCreated = m),
      (l.logCollectionCreateClicked = p),
      (l.logCollectionReorder = _));
  },
  98,
);
