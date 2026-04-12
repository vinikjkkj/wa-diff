__d(
  "WAWebProductCollectionCollectionsList.react",
  [
    "WAWebDrawerContext",
    "WAWebFlatList.react",
    "WAWebFlatListContainer.react",
    "WAWebListDragAndDropItem.react",
    "WAWebManageActions",
    "WAWebProductCatalogCatalogConstants",
    "WAWebProductCatalogContext",
    "WAWebProductCollectionCollectionManageListItem.react",
    "WAWebStateUtils",
    "compactMap",
    "react",
    "useWAWebModelValues",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = e,
      c = u.useContext,
      d = u.useMemo;
    function m(e) {
      var t = e.canManage,
        n = e.containerRef,
        a = e.data,
        i = e.handleReorderMove,
        l = e.isReorder,
        u = e.onEditCollection,
        m = e.onFinalDropOfItem,
        p = e.onSeeCollection,
        _ = o("useWAWebModelValues").useModelValues(e.catalog, ["collections"]),
        f = d(
          function () {
            return r("compactMap")(a, function (e, t) {
              return e.collection
                ? { itemKey: e.collection.id, catalogListItem: e, order: t }
                : null;
            });
          },
          [a],
        ),
        g = function (t, n) {
          o("WAWebManageActions").handleCollectionDelete(
            o("WAWebStateUtils").unproxy(_),
            t,
            n,
          );
        },
        h = c(o("WAWebDrawerContext").DrawerContext),
        y = function (n) {
          return n
            ? s.jsx(r("WAWebProductCollectionCollectionManageListItem.react"), {
                collection: n,
                canManage: t,
                onDelete: function () {
                  return g(
                    n,
                    o("WAWebProductCatalogContext").getProductCatalogContext(h),
                  );
                },
                onEdit: u,
                onSeeCollection: p,
                isReorder: l,
              })
            : null;
        };
      return s.jsx(r("WAWebFlatListContainer.react"), {
        flatListControllers: [e.flatListController],
        children: s.jsx(
          o("WAWebListDragAndDropItem.react").DragAndDropWrapper,
          {
            containerRef: n,
            children: s.jsx(o("WAWebFlatList.react").FlatList, {
              flatListController: e.flatListController,
              direction: "vertical",
              forceConsistentRenderCount: !1,
              data: f,
              renderItem: function (t) {
                var e = t.catalogListItem.collection,
                  n = t.order;
                return l
                  ? s.jsx(o("WAWebListDragAndDropItem.react").DragAndDropItem, {
                      index: n,
                      onMove: i,
                      onFinalDrop: m,
                      children: y(e),
                    })
                  : y(e);
              },
              defaultItemHeight: o("WAWebProductCatalogCatalogConstants")
                .PRODUCT_LIST_ITEM_HEIGHT,
            }),
          },
        ),
      });
    }
    ((m.displayName = m.name + " [from " + i.id + "]"), (l.default = m));
  },
  98,
);
