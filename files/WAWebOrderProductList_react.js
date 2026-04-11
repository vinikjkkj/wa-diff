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
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = o("react-compiler-runtime").c(12),
        n = e.onProductDetail,
        a = e.order,
        i = e.sellerJid,
        l;
      t[0] !== a.id || t[1] !== a.orderItemCollection || t[2] !== i
        ? ((l = function (t) {
            var e = a.orderItemCollection.toArray();
            return (
              o("WAWebOrderLogEvents").logOrderListImpression({
                catalogContext: t,
                catalogOwnerJid: i,
                orderId: a.id,
                productCount: e.length,
              }),
              e.map(c)
            );
          }),
          (t[0] = a.id),
          (t[1] = a.orderItemCollection),
          (t[2] = i),
          (t[3] = l))
        : (l = t[3]);
      var u = l,
        d;
      t[4] !== n || t[5] !== e.order.id || t[6] !== i
        ? ((d = function (r, a) {
            var t = { businessOwnerJid: i, productId: r.product.id };
            (o("WAWebUtilsLogQplEvents").qplStartProductView("Order"),
              o("WAWebOrderLogEvents").logOrderListItemClick({
                catalogContext: a,
                catalogOwnerJid: i,
                orderId: e.order.id,
              }),
              n(t));
          }),
          (t[4] = n),
          (t[5] = e.order.id),
          (t[6] = i),
          (t[7] = d))
        : (d = t[7]);
      var m = d,
        p;
      return (
        t[8] !== u || t[9] !== m || t[10] !== e.flatListController
          ? ((p = s.jsx(o("WAWebDrawerContext").DrawerContext.Consumer, {
              children: function (n) {
                var t = o(
                  "WAWebProductCatalogContext",
                ).getProductCatalogContext(n);
                return s.jsx(r("WAWebFlatListContainer.react"), {
                  flatListControllers: [e.flatListController],
                  children: s.jsx(o("WAWebFlatList.react").FlatList, {
                    testid: void 0,
                    flatListController: e.flatListController,
                    direction: "vertical",
                    forceConsistentRenderCount: !1,
                    data: u(t),
                    renderItem: function (n) {
                      return s.jsx(r("WAWebOrderProductListItem.react"), {
                        product: n.product,
                        onClick: function () {
                          return m(n, t);
                        },
                      });
                    },
                    defaultItemHeight: o("WAWebProductCatalogCatalogConstants")
                      .PRODUCT_LIST_ITEM_HEIGHT,
                  }),
                });
              },
            })),
            (t[8] = u),
            (t[9] = m),
            (t[10] = e.flatListController),
            (t[11] = p))
          : (p = t[11]),
        p
      );
    }
    function c(e) {
      return { itemKey: e.id.toString(), product: e };
    }
    l.default = u;
  },
  98,
);
