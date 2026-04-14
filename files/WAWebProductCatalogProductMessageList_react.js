__d(
  "WAWebProductCatalogProductMessageList.react",
  [
    "WAWebDrawerContext",
    "WAWebDrawerManager",
    "WAWebFlatList.react",
    "WAWebFlatListContainer.react",
    "WAWebModalManager",
    "WAWebProductCatalogCatalogConstants",
    "WAWebProductCatalogContext",
    "WAWebProductCatalogListItem.react",
    "WAWebProductCatalogLogEvents",
    "WAWebProductCatalogProductMessageListNoProductModal",
    "WAWebSectionHeader.react",
    "WAWebStateUtils",
    "WAWebUtilsLogQplEvents",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = e,
      c = u.useCallback,
      d = u.useEffect;
    function m(e) {
      var t = e.item,
        n = e.onProductDetail,
        a = c(
          function (e, t) {
            return (
              o("WAWebProductCatalogLogEvents").logCatalogListDetailClick({
                product: o("WAWebStateUtils").unproxy(e),
                catalogContext: t,
              }),
              o("WAWebUtilsLogQplEvents").qplStartProductView("PLM"),
              n(e)
            );
          },
          [n],
        ),
        i = null;
      switch (t.type) {
        case "section": {
          var l = t.label;
          i = s.jsx(r("WAWebSectionHeader.react"), { header: l });
          break;
        }
        case "product": {
          var u = t.product;
          i = s.jsx(o("WAWebDrawerContext").DrawerContext.Consumer, {
            children: function (t) {
              return s.jsx(r("WAWebProductCatalogListItem.react"), {
                product: u,
                onClick: function () {
                  return a(
                    u,
                    o("WAWebProductCatalogContext").getProductCatalogContext(t),
                  );
                },
                canManageCatalog: !1,
              });
            },
          });
          break;
        }
      }
      return i;
    }
    m.displayName = m.name + " [from " + i.id + "]";
    function p(e) {
      var t = e.flatListController,
        n = e.onProductDetail,
        a = e.productMessageList,
        i = a.productCollection.getProductModels(),
        l = a.getSections(),
        u = a.getSectionsCount() > 0,
        c = a.getTotalProductsFetchedOrFailed(),
        p = a.getProductSize(),
        _ = p === c && i.length === 0,
        f = [];
      return (
        l.forEach(function (e, t) {
          var n = e.products,
            r = e.title,
            a = [];
          (n.forEach(function (e) {
            var n = e.productId,
              r = i.find(function (e) {
                return e.id === n;
              });
            r != null &&
              a.push({
                itemKey: "section-" + t + "-" + r.id.toString(),
                product: r,
                type: "product",
                height: o("WAWebProductCatalogCatalogConstants")
                  .PRODUCT_LIST_ITEM_HEIGHT,
              });
          }),
            a.length > 0 &&
              (r != null &&
                r !== "" &&
                f.push({
                  itemKey: "header-" + t + "-" + r,
                  label: r,
                  type: "section",
                  height: 72,
                }),
              f.push.apply(f, a)));
        }),
        d(
          function () {
            _ &&
              o("WAWebModalManager").ModalManager.open(
                s.jsx(
                  r("WAWebProductCatalogProductMessageListNoProductModal"),
                  {
                    onConfirm: function () {
                      (o("WAWebDrawerManager").DrawerManager.closeDrawerRight(),
                        o("WAWebModalManager").ModalManager.close());
                    },
                  },
                ),
              );
          },
          [_],
        ),
        s.jsx(
          "div",
          babelHelpers.extends(
            {},
            {
              0: { className: "x6ikm8r x10wlt62 x12xbjc7" },
              1: { className: "x6ikm8r x10wlt62 x12xbjc7 x1380le5" },
            }[!u << 0],
            {
              children: s.jsx(r("WAWebFlatListContainer.react"), {
                flatListControllers: [t],
                children: s.jsx(o("WAWebFlatList.react").FlatList, {
                  flatListController: t,
                  direction: "vertical",
                  forceConsistentRenderCount: !1,
                  data: f,
                  renderItem: function (t) {
                    return s.jsx(m, { item: t, onProductDetail: n });
                  },
                  itemEnterAnimationsEnabled: !0,
                }),
              }),
            },
          ),
        )
      );
    }
    ((p.displayName = p.name + " [from " + i.id + "]"), (l.default = p));
  },
  98,
);
