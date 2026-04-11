__d(
  "WAWebCartProductList.react",
  [
    "WAWebCartProductListItem.react",
    "WAWebFlatList.react",
    "WAWebFlatListContainer.react",
    "WAWebProductCatalogCatalogConstants",
    "react",
    "react-compiler-runtime",
    "uniqueID",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = o("react-compiler-runtime").c(14),
        n = e.cartProductItems,
        a = e.onProductDetail,
        i = e.sellerJid,
        l;
      t[0] !== e.flatListController
        ? ((l = [e.flatListController]),
          (t[0] = e.flatListController),
          (t[1] = l))
        : (l = t[1]);
      var u = e.flatListController,
        d;
      t[2] !== n ? ((d = n.map(c)), (t[2] = n), (t[3] = d)) : (d = t[3]);
      var m;
      t[4] !== a || t[5] !== i
        ? ((m = function (t) {
            return s.jsx(r("WAWebCartProductListItem.react"), {
              cartId: i,
              product: t.product,
              quantity: t.cartItem.quantity,
              onClick: function () {
                return a({ businessOwnerJid: i, productId: t.cartItem.id });
              },
            });
          }),
          (t[4] = a),
          (t[5] = i),
          (t[6] = m))
        : (m = t[6]);
      var p;
      t[7] !== e.flatListController || t[8] !== d || t[9] !== m
        ? ((p = s.jsx(o("WAWebFlatList.react").FlatList, {
            flatListController: u,
            direction: "vertical",
            forceConsistentRenderCount: !1,
            data: d,
            renderItem: m,
            defaultItemHeight: o("WAWebProductCatalogCatalogConstants")
              .CART_PRODUCT_LIST_ITEM_HEIGHT,
          })),
          (t[7] = e.flatListController),
          (t[8] = d),
          (t[9] = m),
          (t[10] = p))
        : (p = t[10]);
      var _;
      return (
        t[11] !== l || t[12] !== p
          ? ((_ = s.jsx(r("WAWebFlatListContainer.react"), {
              flatListControllers: l,
              children: p,
            })),
            (t[11] = l),
            (t[12] = p),
            (t[13] = _))
          : (_ = t[13]),
        _
      );
    }
    function c(e) {
      return {
        cartItem: e.cartItem,
        contentKey: r("uniqueID")("cartItem"),
        itemKey: e.cartItem.id,
        product: e.product,
      };
    }
    l.default = u;
  },
  98,
);
