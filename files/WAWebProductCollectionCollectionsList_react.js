__d(
  "WAWebProductCollectionCollectionsList.react",
  [
    "WAWebDrawerContext",
    "WAWebFlatList.react",
    "WAWebFlatListContainer.react",
    "WAWebListDragAndDropItem.react",
    "WAWebManageActions",
    "WAWebProductCatalogCatalogConstants",
    "WAWebProductCatalogContext",
    "WAWebProductCollectionCollectionManageListItem.react",
    "WAWebStateUtils",
    "compactMap",
    "react",
    "react-compiler-runtime",
    "useWAWebModelValues",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = e,
      c = u.useContext,
      d = u.useMemo;
    function m(e) {
      var t = o("react-compiler-runtime").c(29),
        n = e.canManage,
        a = e.containerRef,
        i = e.data,
        l = e.handleReorderMove,
        u = e.isReorder,
        d = e.onEditCollection,
        m = e.onFinalDropOfItem,
        _ = e.onSeeCollection,
        f;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((f = ["collections"]), (t[0] = f))
        : (f = t[0]);
      var g = o("useWAWebModelValues").useModelValues(e.catalog, f),
        h;
      t[1] !== i
        ? ((h = r("compactMap")(i, p)), (t[1] = i), (t[2] = h))
        : (h = t[2]);
      var y = h,
        C;
      t[3] !== g
        ? ((C = function (t, n) {
            o("WAWebManageActions").handleCollectionDelete(
              o("WAWebStateUtils").unproxy(g),
              t,
              n,
            );
          }),
          (t[3] = g),
          (t[4] = C))
        : (C = t[4]);
      var b = C,
        v = c(o("WAWebDrawerContext").DrawerContext),
        S;
      t[5] !== n ||
      t[6] !== v ||
      t[7] !== b ||
      t[8] !== u ||
      t[9] !== d ||
      t[10] !== _
        ? ((S = function (t) {
            return t
              ? s.jsx(
                  r("WAWebProductCollectionCollectionManageListItem.react"),
                  {
                    collection: t,
                    canManage: n,
                    onDelete: function () {
                      return b(
                        t,
                        o(
                          "WAWebProductCatalogContext",
                        ).getProductCatalogContext(v),
                      );
                    },
                    onEdit: d,
                    onSeeCollection: _,
                    isReorder: u,
                  },
                )
              : null;
          }),
          (t[5] = n),
          (t[6] = v),
          (t[7] = b),
          (t[8] = u),
          (t[9] = d),
          (t[10] = _),
          (t[11] = S))
        : (S = t[11]);
      var R = S,
        L;
      t[12] !== e.flatListController
        ? ((L = [e.flatListController]),
          (t[12] = e.flatListController),
          (t[13] = L))
        : (L = t[13]);
      var E;
      t[14] !== R || t[15] !== l || t[16] !== u || t[17] !== m
        ? ((E = function (t) {
            var e = t.catalogListItem,
              n = t.order,
              r = e.collection;
            return u
              ? s.jsx(o("WAWebListDragAndDropItem.react").DragAndDropItem, {
                  index: n,
                  onMove: l,
                  onFinalDrop: m,
                  children: R(r),
                })
              : R(r);
          }),
          (t[14] = R),
          (t[15] = l),
          (t[16] = u),
          (t[17] = m),
          (t[18] = E))
        : (E = t[18]);
      var k;
      t[19] !== y || t[20] !== e.flatListController || t[21] !== E
        ? ((k = s.jsx(o("WAWebFlatList.react").FlatList, {
            flatListController: e.flatListController,
            direction: "vertical",
            forceConsistentRenderCount: !1,
            data: y,
            renderItem: E,
            defaultItemHeight: o("WAWebProductCatalogCatalogConstants")
              .PRODUCT_LIST_ITEM_HEIGHT,
          })),
          (t[19] = y),
          (t[20] = e.flatListController),
          (t[21] = E),
          (t[22] = k))
        : (k = t[22]);
      var I;
      t[23] !== a || t[24] !== k
        ? ((I = s.jsx(o("WAWebListDragAndDropItem.react").DragAndDropWrapper, {
            containerRef: a,
            children: k,
          })),
          (t[23] = a),
          (t[24] = k),
          (t[25] = I))
        : (I = t[25]);
      var T;
      return (
        t[26] !== L || t[27] !== I
          ? ((T = s.jsx(r("WAWebFlatListContainer.react"), {
              flatListControllers: L,
              children: I,
            })),
            (t[26] = L),
            (t[27] = I),
            (t[28] = T))
          : (T = t[28]),
        T
      );
    }
    function p(e, t) {
      return e.collection
        ? { itemKey: e.collection.id, catalogListItem: e, order: t }
        : null;
    }
    l.default = m;
  },
  98,
);
