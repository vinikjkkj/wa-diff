__d(
  "WAWebProductCatalogList.react",
  [
    "WAWebDrawerContext",
    "WAWebDrawerManager",
    "WAWebFlatList.react",
    "WAWebFlatListContainer.react",
    "WAWebManageActions",
    "WAWebProductCatalogCatalogConstants",
    "WAWebProductCatalogContext",
    "WAWebProductCatalogListItem.react",
    "WAWebProductCatalogLogEvents",
    "WAWebStateUtils",
    "react",
    "react-compiler-runtime",
    "useWAWebModelValues",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = e.useState;
    function c(e) {
      var t = o("react-compiler-runtime").c(33),
        n = e.canManageCatalog,
        a = e.onCartOpen,
        i = e.onProductDetail,
        l = e.onProductShare,
        c = e.shareLinks,
        d = u(void 0),
        m = d[0],
        p = d[1],
        _;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((_ = ["productCollection", "afterCursor", "id", "index"]),
          (t[0] = _))
        : (_ = t[0]);
      var f = o("useWAWebModelValues").useModelValues(e.catalog, _),
        g;
      t[1] !== i
        ? ((g = function (t, n) {
            return (
              o("WAWebProductCatalogLogEvents").logCatalogListDetailClick({
                product: o("WAWebStateUtils").unproxy(t),
                catalogContext: n,
              }),
              p(t.id.toString()),
              i(t)
            );
          }),
          (t[1] = i),
          (t[2] = g))
        : (g = t[2]);
      var h = g,
        y;
      t[3] !== l
        ? ((y = function (t) {
            l && l(t);
          }),
          (t[3] = l),
          (t[4] = y))
        : (y = t[4]);
      var C = y,
        b;
      t[5] !== f || t[6] !== m
        ? ((b = function (t, n) {
            o("WAWebManageActions")
              .handleProductDelete(f, t, n, "Catalog")
              .then(function (e) {
                t.id === m &&
                  (o("WAWebDrawerManager").DrawerManager.closeDrawerMid(),
                  p(void 0));
              });
          }),
          (t[5] = f),
          (t[6] = m),
          (t[7] = b))
        : (b = t[7]);
      var v = b,
        S;
      t[8] !== f
        ? ((S = function (t, n) {
            o("WAWebManageActions").handleProductVisibilityChange(
              f,
              t,
              n,
              "Catalog",
            );
          }),
          (t[8] = f),
          (t[9] = S))
        : (S = t[9]);
      var R = S,
        L;
      t[10] !== n || t[11] !== f.productCollection || t[12] !== a
        ? ((L = function () {
            var e = a !== void 0,
              t = f.productCollection.getProductModels(n);
            return t.map(function (t) {
              return {
                itemKey: t.id.toString() + "_" + e.toString(),
                product: t,
              };
            });
          }),
          (t[10] = n),
          (t[11] = f.productCollection),
          (t[12] = a),
          (t[13] = L))
        : (L = t[13]);
      var E = L;
      if (
        !f.productCollection ||
        !f.productCollection.getProductModels(e.canManageCatalog).length
      )
        return null;
      var k;
      t[14] !== e.flatListController
        ? ((k = [e.flatListController]),
          (t[14] = e.flatListController),
          (t[15] = k))
        : (k = t[15]);
      var I = e.flatListController,
        T;
      t[16] !== E ? ((T = E()), (t[16] = E), (t[17] = T)) : (T = t[17]);
      var D;
      t[18] !== n ||
      t[19] !== v ||
      t[20] !== h ||
      t[21] !== R ||
      t[22] !== C ||
      t[23] !== a ||
      t[24] !== c
        ? ((D = function (t) {
            var e = t.product;
            return s.jsx(o("WAWebDrawerContext").DrawerContext.Consumer, {
              children: function (i) {
                var t = o(
                  "WAWebProductCatalogContext",
                ).getProductCatalogContext(i);
                return s.jsx(r("WAWebProductCatalogListItem.react"), {
                  product: e,
                  onCartOpen: a,
                  onClick: function () {
                    return h(e, t);
                  },
                  onProductShare: c ? C : null,
                  onProductDelete: function (n) {
                    return v(n, t);
                  },
                  onProductHideShow: function (n) {
                    return R(n, t);
                  },
                  canManageCatalog: n,
                });
              },
            });
          }),
          (t[18] = n),
          (t[19] = v),
          (t[20] = h),
          (t[21] = R),
          (t[22] = C),
          (t[23] = a),
          (t[24] = c),
          (t[25] = D))
        : (D = t[25]);
      var x;
      t[26] !== e.flatListController || t[27] !== T || t[28] !== D
        ? ((x = s.jsx(o("WAWebFlatList.react").FlatList, {
            flatListController: I,
            direction: "vertical",
            forceConsistentRenderCount: !1,
            data: T,
            renderItem: D,
            defaultItemHeight: o("WAWebProductCatalogCatalogConstants")
              .PRODUCT_LIST_ITEM_HEIGHT,
          })),
          (t[26] = e.flatListController),
          (t[27] = T),
          (t[28] = D),
          (t[29] = x))
        : (x = t[29]);
      var $;
      return (
        t[30] !== x || t[31] !== k
          ? (($ = s.jsx(r("WAWebFlatListContainer.react"), {
              flatListControllers: k,
              children: x,
            })),
            (t[30] = x),
            (t[31] = k),
            (t[32] = $))
          : ($ = t[32]),
        $
      );
    }
    l.default = c;
  },
  98,
);
