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
    "useWAWebModelValues",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = e.useState;
    function c(e) {
      var t = e.canManageCatalog,
        n = e.onCartOpen,
        a = e.onProductDetail,
        i = e.onProductShare,
        l = e.shareLinks,
        c = u(void 0),
        d = c[0],
        m = c[1],
        p = o("useWAWebModelValues").useModelValues(e.catalog, [
          "productCollection",
          "afterCursor",
          "id",
          "index",
        ]),
        _ = function (t, n) {
          return (
            o("WAWebProductCatalogLogEvents").logCatalogListDetailClick({
              product: o("WAWebStateUtils").unproxy(t),
              catalogContext: n,
            }),
            m(t.id.toString()),
            a(t)
          );
        },
        f = function (t) {
          i && i(t);
        },
        g = function (t, n) {
          o("WAWebManageActions")
            .handleProductDelete(p, t, n, "Catalog")
            .then(function (e) {
              t.id === d &&
                (o("WAWebDrawerManager").DrawerManager.closeDrawerMid(),
                m(void 0));
            });
        },
        h = function (t, n) {
          o("WAWebManageActions").handleProductVisibilityChange(
            p,
            t,
            n,
            "Catalog",
          );
        },
        y = function () {
          var e = n !== void 0,
            r = p.productCollection.getProductModels(t);
          return r.map(function (t) {
            return {
              itemKey: t.id.toString() + "_" + e.toString(),
              product: t,
            };
          });
        };
      return !p.productCollection ||
        !p.productCollection.getProductModels(e.canManageCatalog).length
        ? null
        : s.jsx(r("WAWebFlatListContainer.react"), {
            flatListControllers: [e.flatListController],
            children: s.jsx(o("WAWebFlatList.react").FlatList, {
              flatListController: e.flatListController,
              direction: "vertical",
              forceConsistentRenderCount: !1,
              data: y(),
              renderItem: function (a) {
                var e = a.product;
                return s.jsx(o("WAWebDrawerContext").DrawerContext.Consumer, {
                  children: function (i) {
                    var a = o(
                      "WAWebProductCatalogContext",
                    ).getProductCatalogContext(i);
                    return s.jsx(r("WAWebProductCatalogListItem.react"), {
                      product: e,
                      onCartOpen: n,
                      onClick: function () {
                        return _(e, a);
                      },
                      onProductShare: l ? f : null,
                      onProductDelete: function (t) {
                        return g(t, a);
                      },
                      onProductHideShow: function (t) {
                        return h(t, a);
                      },
                      canManageCatalog: t,
                    });
                  },
                });
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
