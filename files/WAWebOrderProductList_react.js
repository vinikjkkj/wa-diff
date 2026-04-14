__d(
  "WAWebOrderProductList.react",
  [
    "WAWebDrawerContext",
    "WAWebFlatList.react",
    "WAWebFlatListContainer.react",
    "WAWebOrderLogEvents",
    "WAWebOrderProductListItem.react",
    "WAWebProductCatalogCatalogConstants",
    "WAWebProductCatalogContext",
    "WAWebUtilsLogQplEvents",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = e.onProductDetail,
        n = e.order,
        a = e.sellerJid,
        i = function (t) {
          var e = n.orderItemCollection.toArray();
          return (
            o("WAWebOrderLogEvents").logOrderListImpression({
              catalogContext: t,
              catalogOwnerJid: a,
              orderId: n.id,
              productCount: e.length,
            }),
            e.map(function (e) {
              return { itemKey: e.id.toString(), product: e };
            })
          );
        },
        l = function (r, i) {
          var n = { businessOwnerJid: a, productId: r.product.id };
          (o("WAWebUtilsLogQplEvents").qplStartProductView("Order"),
            o("WAWebOrderLogEvents").logOrderListItemClick({
              catalogContext: i,
              catalogOwnerJid: a,
              orderId: e.order.id,
            }),
            t(n));
        };
      return s.jsx(o("WAWebDrawerContext").DrawerContext.Consumer, {
        children: function (n) {
          var t = o("WAWebProductCatalogContext").getProductCatalogContext(n);
          return s.jsx(r("WAWebFlatListContainer.react"), {
            flatListControllers: [e.flatListController],
            children: s.jsx(o("WAWebFlatList.react").FlatList, {
              testid: void 0,
              flatListController: e.flatListController,
              direction: "vertical",
              forceConsistentRenderCount: !1,
              data: i(t),
              renderItem: function (n) {
                return s.jsx(r("WAWebOrderProductListItem.react"), {
                  product: n.product,
                  onClick: function () {
                    return l(n, t);
                  },
                });
              },
              defaultItemHeight: o("WAWebProductCatalogCatalogConstants")
                .PRODUCT_LIST_ITEM_HEIGHT,
            }),
          });
        },
      });
    }
    ((u.displayName = u.name + " [from " + i.id + "]"), (l.default = u));
  },
  98,
);
