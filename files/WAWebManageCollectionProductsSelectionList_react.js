__d(
  "WAWebManageCollectionProductsSelectionList.react",
  [
    "WAWebFlatList.react",
    "WAWebFlatListContainer.react",
    "WAWebProductCatalogCatalogConstants",
    "WAWebProductCatalogSelectableProductItem.react",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u(e, t) {
      var n = e.id.toString(),
        r = t.list.findIndex(function (e) {
          return e.id.toString() === n;
        });
      return r !== -1 && !!t.selected[r];
    }
    function c(e) {
      var t = e.active,
        n = e.catalog,
        a = e.onProductSelect,
        i = e.onSelectionChanged,
        l = e.selections,
        c = function (n, r, o) {
          (a(n, r, o), t.setVal(n, o), i());
        },
        d = function () {
          var e = n.productCollection.getProductModels(!0);
          return e.map(function (e) {
            return { itemKey: e.id.toString(), product: e };
          });
        },
        m = function (t) {
          var e = u(t, l);
          c(t, !e, !1);
        };
      return s.jsx(r("WAWebFlatListContainer.react"), {
        flatListControllers: [e.flatListController],
        children: s.jsx(o("WAWebFlatList.react").FlatList, {
          flatListController: e.flatListController,
          direction: "vertical",
          forceConsistentRenderCount: !1,
          data: d(),
          renderItem: function (n) {
            var e = n.product;
            return s.jsx(
              r("WAWebProductCatalogSelectableProductItem.react"),
              {
                product: e,
                selections: l,
                onClick: function () {
                  return m(e);
                },
                active: t,
              },
              e.id.toString(),
            );
          },
          defaultItemHeight: o("WAWebProductCatalogCatalogConstants")
            .PRODUCT_LIST_ITEM_HEIGHT,
        }),
      });
    }
    ((c.displayName = c.name + " [from " + i.id + "]"), (l.default = c));
  },
  98,
);
