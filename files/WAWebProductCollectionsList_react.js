__d(
  "WAWebProductCollectionsList.react",
  [
    "WAWebDrawerContext",
    "WAWebFlatList.react",
    "WAWebFlatListContainer.react",
    "WAWebFlatListController",
    "WAWebManageActions",
    "WAWebManageCollectionIntegrityBanner.react",
    "WAWebNonEmptyString",
    "WAWebProductCatalogCatalogConstants",
    "WAWebProductCatalogContext",
    "WAWebProductCatalogListItem.react",
    "WAWebProductCatalogLogEvents",
    "WAWebProductCollection",
    "WAWebProductCollectionCollectionListItem.react",
    "WAWebStateUtils",
    "WAWebUtilsLogQplEvents",
    "react",
    "useWAWebForceUpdate",
    "useWAWebListener",
    "useWAWebModelValues",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = e,
      c = u.useContext,
      d = u.useMemo;
    function m(e) {
      "use no forget";
      var t = e.canManageCatalog,
        n = e.onCartOpen,
        a = e.onCollectionSeeAll,
        i = e.onEditCollection,
        l = e.onProductDetail,
        u = e.onProductShare,
        m = e.shareLinks,
        p = m === void 0 ? !1 : m,
        _ = o("useWAWebForceUpdate").useForceUpdateDONOTUSE(),
        f = o("useWAWebModelValues").useModelValues(e.catalog, [
          "productCollection",
          "collections",
          "afterCursor",
          "id",
          "index",
        ]),
        g = c(o("WAWebDrawerContext").DrawerContext),
        h = d(function () {
          return new Set();
        }, []),
        y = d(function () {
          return new (r("WAWebFlatListController"))();
        }, []),
        C = function () {
          var t = n !== void 0,
            r = e.data || [],
            a = [];
          return (
            r.forEach(function (n) {
              var r = n.collection,
                i = n.product,
                l = n.allItems;
              if (r && i) {
                var s = r.id;
                a.push({
                  itemKey:
                    s.toString() + "_" + i.id.toString() + "_" + t.toString(),
                  product: i,
                  collectionId: s,
                });
              } else if (r)
                (h.has(r) || h.add(r),
                  a.push({
                    itemKey: r.id.toString() + "_" + r.reviewStatus.toString(),
                    collection: r,
                  }),
                  (r.reviewStatus ===
                    o("WAWebProductCollection").PRODUCT_REVIEW_STATUS.PENDING ||
                    r.reviewStatus ===
                      o("WAWebProductCollection").PRODUCT_REVIEW_STATUS
                        .REJECTED) &&
                    a.push({
                      itemKey: r.id.toString() + "_reviewBanner",
                      collection: r,
                      height: o(
                        "WAWebManageCollectionIntegrityBanner.react",
                      ).getCollectionIntegrityHeight(r),
                      reviewBanner: !0,
                    }));
              else if (l) a.push({ itemKey: "view_all", allItems: l });
              else if (i) {
                var u = {
                    itemKey: i.id.toString() + "_" + t.toString(),
                    product: i,
                  },
                  c = o("WAWebNonEmptyString").asMaybeNonEmptyString(
                    e.collectionId,
                  );
                (c != null && (u.collectionId = c), a.push(u));
              }
            }),
            a
          );
        },
        b = function (t, n) {
          return (
            o("WAWebUtilsLogQplEvents").qplStartProductView("Collection"),
            o("WAWebProductCatalogLogEvents").logCatalogListDetailClick({
              product: o("WAWebStateUtils").unproxy(t),
              catalogContext: o(
                "WAWebProductCatalogContext",
              ).getProductCatalogContext(g),
            }),
            l(t, n)
          );
        },
        v = function (t) {
          u == null || u(t);
        },
        S = function (t) {
          o("WAWebManageActions").handleProductDelete(
            f,
            t,
            o("WAWebProductCatalogContext").getProductCatalogContext(g),
            "Collection",
          );
        },
        R = function (t) {
          o("WAWebManageActions").handleProductVisibilityChange(
            f,
            t,
            o("WAWebProductCatalogContext").getProductCatalogContext(g),
            "Collections",
          );
        };
      return (
        o("useWAWebListener").useListeners(
          Array.from(h, function (e) {
            return {
              source: e,
              eventOrEvents: ["change:reviewStatus", "canAppeal"],
              callback: _,
            };
          }),
        ),
        s.jsx(r("WAWebFlatListContainer.react"), {
          flatListControllers: [y],
          children: s.jsx(o("WAWebFlatList.react").FlatList, {
            flatListController: y,
            direction: "vertical",
            forceConsistentRenderCount: !1,
            data: C(),
            renderItem: function (l) {
              var e = l.allItems,
                u = l.collection,
                c = l.collectionId,
                d = l.product,
                m = l.reviewBanner,
                _ = m === void 0 ? !1 : m;
              return u
                ? _
                  ? s.jsx(
                      o("WAWebManageCollectionIntegrityBanner.react")
                        .CollectionIntegrityBanner,
                      { collection: u, onEditCollection: i },
                    )
                  : s.jsx(r("WAWebProductCollectionCollectionListItem.react"), {
                      collection: u,
                      onSeeAll: a,
                    })
                : e
                  ? s.jsx(r("WAWebProductCollectionCollectionListItem.react"), {
                      allItems: e,
                      onSeeAll: a,
                    })
                  : d
                    ? s.jsx(r("WAWebProductCatalogListItem.react"), {
                        collectionId: c,
                        product: d,
                        onCartOpen: n,
                        onClick: function () {
                          return b(d, c);
                        },
                        onProductShare: p ? v : null,
                        onProductDelete: S,
                        onProductHideShow: R,
                        theme: "product-of-collection",
                        canManageCatalog: t,
                      })
                    : null;
            },
            defaultItemHeight: o("WAWebProductCatalogCatalogConstants")
              .PRODUCT_LIST_ITEM_HEIGHT,
          }),
        })
      );
    }
    ((m.displayName = m.name + " [from " + i.id + "]"), (l.default = m));
  },
  98,
);
