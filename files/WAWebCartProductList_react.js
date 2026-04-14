__d(
  "WAWebCartProductList.react",
  [
    "WAWebCartProductListItem.react",
    "WAWebFlatList.react",
    "WAWebFlatListContainer.react",
    "WAWebProductCatalogCatalogConstants",
    "react",
    "uniqueID",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = e.cartProductItems,
        n = e.onProductDetail,
        a = e.sellerJid;
      return s.jsx(r("WAWebFlatListContainer.react"), {
        flatListControllers: [e.flatListController],
        children: s.jsx(o("WAWebFlatList.react").FlatList, {
          flatListController: e.flatListController,
          direction: "vertical",
          forceConsistentRenderCount: !1,
          data: t.map(function (e) {
            return {
              cartItem: e.cartItem,
              contentKey: r("uniqueID")("cartItem"),
              itemKey: e.cartItem.id,
              product: e.product,
            };
          }),
          renderItem: function (t) {
            return s.jsx(r("WAWebCartProductListItem.react"), {
              cartId: a,
              product: t.product,
              quantity: t.cartItem.quantity,
              onClick: function () {
                return n({ businessOwnerJid: a, productId: t.cartItem.id });
              },
            });
          },
          defaultItemHeight: o("WAWebProductCatalogCatalogConstants")
            .CART_PRODUCT_LIST_ITEM_HEIGHT,
        }),
      });
    }
    ((u.displayName = u.name + " [from " + i.id + "]"), (l.default = u));
  },
  98,
);
