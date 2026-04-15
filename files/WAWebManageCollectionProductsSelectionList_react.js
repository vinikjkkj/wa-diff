__d(
  "WAWebManageCollectionProductsSelectionList.react",
  [
    "WAWebFlatList.react",
    "WAWebFlatListContainer.react",
    "WAWebProductCatalogCatalogConstants",
    "WAWebProductCatalogSelectableProductItem.react",
    "react",
    "react-compiler-runtime",
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
      var t = o("react-compiler-runtime").c(24),
        n = e.active,
        a = e.catalog,
        i = e.onProductSelect,
        l = e.onSelectionChanged,
        c = e.selections,
        m;
      t[0] !== n || t[1] !== i || t[2] !== l
        ? ((m = function (t, r, o) {
            (i(t, r, o), n.setVal(t, o), l());
          }),
          (t[0] = n),
          (t[1] = i),
          (t[2] = l),
          (t[3] = m))
        : (m = t[3]);
      var p = m,
        _;
      t[4] !== a.productCollection
        ? ((_ = function () {
            var e = a.productCollection.getProductModels(!0);
            return e.map(d);
          }),
          (t[4] = a.productCollection),
          (t[5] = _))
        : (_ = t[5]);
      var f = _,
        g;
      t[6] !== p || t[7] !== c
        ? ((g = function (t) {
            var e = u(t, c);
            p(t, !e, !1);
          }),
          (t[6] = p),
          (t[7] = c),
          (t[8] = g))
        : (g = t[8]);
      var h = g,
        y;
      t[9] !== e.flatListController
        ? ((y = [e.flatListController]),
          (t[9] = e.flatListController),
          (t[10] = y))
        : (y = t[10]);
      var C = e.flatListController,
        b;
      t[11] !== f ? ((b = f()), (t[11] = f), (t[12] = b)) : (b = t[12]);
      var v;
      t[13] !== n || t[14] !== h || t[15] !== c
        ? ((v = function (t) {
            var e = t.product;
            return s.jsx(
              r("WAWebProductCatalogSelectableProductItem.react"),
              {
                product: e,
                selections: c,
                onClick: function () {
                  return h(e);
                },
                active: n,
              },
              e.id.toString(),
            );
          }),
          (t[13] = n),
          (t[14] = h),
          (t[15] = c),
          (t[16] = v))
        : (v = t[16]);
      var S;
      t[17] !== e.flatListController || t[18] !== b || t[19] !== v
        ? ((S = s.jsx(o("WAWebFlatList.react").FlatList, {
            flatListController: C,
            direction: "vertical",
            forceConsistentRenderCount: !1,
            data: b,
            renderItem: v,
            defaultItemHeight: o("WAWebProductCatalogCatalogConstants")
              .PRODUCT_LIST_ITEM_HEIGHT,
          })),
          (t[17] = e.flatListController),
          (t[18] = b),
          (t[19] = v),
          (t[20] = S))
        : (S = t[20]);
      var R;
      return (
        t[21] !== y || t[22] !== S
          ? ((R = s.jsx(r("WAWebFlatListContainer.react"), {
              flatListControllers: y,
              children: S,
            })),
            (t[21] = y),
            (t[22] = S),
            (t[23] = R))
          : (R = t[23]),
        R
      );
    }
    function d(e) {
      return { itemKey: e.id.toString(), product: e };
    }
    l.default = c;
  },
  98,
);
