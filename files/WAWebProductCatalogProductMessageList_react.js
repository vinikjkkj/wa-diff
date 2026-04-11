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
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = e,
      c = u.useCallback,
      d = u.useEffect;
    function m(e) {
      var t = o("react-compiler-runtime").c(7),
        n = e.item,
        a = e.onProductDetail,
        i;
      t[0] !== a
        ? ((i = function (t, n) {
            return (
              o("WAWebProductCatalogLogEvents").logCatalogListDetailClick({
                product: o("WAWebStateUtils").unproxy(t),
                catalogContext: n,
              }),
              o("WAWebUtilsLogQplEvents").qplStartProductView("PLM"),
              a(t)
            );
          }),
          (t[0] = a),
          (t[1] = i))
        : (i = t[1]);
      var l = i,
        u = null;
      e: switch (n.type) {
        case "section": {
          var c = n.label,
            d;
          (t[2] !== c
            ? ((d = s.jsx(r("WAWebSectionHeader.react"), { header: c })),
              (t[2] = c),
              (t[3] = d))
            : (d = t[3]),
            (u = d));
          break e;
        }
        case "product": {
          var m = n.product,
            p;
          (t[4] !== l || t[5] !== m
            ? ((p = s.jsx(o("WAWebDrawerContext").DrawerContext.Consumer, {
                children: function (t) {
                  return s.jsx(r("WAWebProductCatalogListItem.react"), {
                    product: m,
                    onClick: function () {
                      return l(
                        m,
                        o(
                          "WAWebProductCatalogContext",
                        ).getProductCatalogContext(t),
                      );
                    },
                    canManageCatalog: !1,
                  });
                },
              })),
              (t[4] = l),
              (t[5] = m),
              (t[6] = p))
            : (p = t[6]),
            (u = p));
        }
      }
      return u;
    }
    function p(e) {
      var t = o("react-compiler-runtime").c(23),
        n = e.flatListController,
        a = e.onProductDetail,
        i = e.productMessageList,
        l,
        u,
        c;
      if (t[0] !== i) {
        var p = i.productCollection.getProductModels(),
          f = i.getSections();
        l = i.getSectionsCount() > 0;
        var g = i.getTotalProductsFetchedOrFailed(),
          h = i.getProductSize();
        ((c = h === g && p.length === 0),
          (u = []),
          f.forEach(function (e, t) {
            var n = e.products,
              r = e.title,
              a = [];
            if (
              (n.forEach(function (e) {
                var n = e.productId,
                  r = p.find(function (e) {
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
              a.length > 0)
            ) {
              var i;
              (r != null &&
                r !== "" &&
                u.push({
                  itemKey: "header-" + t + "-" + r,
                  label: r,
                  type: "section",
                  height: 72,
                }),
                (i = u).push.apply(i, a));
            }
          }),
          (t[0] = i),
          (t[1] = l),
          (t[2] = u),
          (t[3] = c));
      } else ((l = t[1]), (u = t[2]), (c = t[3]));
      var y, C;
      (t[4] !== c
        ? ((y = function () {
            c &&
              o("WAWebModalManager").ModalManager.open(
                s.jsx(
                  r("WAWebProductCatalogProductMessageListNoProductModal"),
                  { onConfirm: _ },
                ),
              );
          }),
          (C = [c]),
          (t[4] = c),
          (t[5] = y),
          (t[6] = C))
        : ((y = t[5]), (C = t[6])),
        d(y, C));
      var b;
      t[7] !== l
        ? ((b = {
            0: { className: "x6ikm8r x10wlt62 x12xbjc7" },
            1: { className: "x6ikm8r x10wlt62 x12xbjc7 x1380le5" },
          }[!l << 0]),
          (t[7] = l),
          (t[8] = b))
        : (b = t[8]);
      var v;
      t[9] !== n ? ((v = [n]), (t[9] = n), (t[10] = v)) : (v = t[10]);
      var S;
      t[11] !== a
        ? ((S = function (t) {
            return s.jsx(m, { item: t, onProductDetail: a });
          }),
          (t[11] = a),
          (t[12] = S))
        : (S = t[12]);
      var R;
      t[13] !== n || t[14] !== u || t[15] !== S
        ? ((R = s.jsx(o("WAWebFlatList.react").FlatList, {
            flatListController: n,
            direction: "vertical",
            forceConsistentRenderCount: !1,
            data: u,
            renderItem: S,
            itemEnterAnimationsEnabled: !0,
          })),
          (t[13] = n),
          (t[14] = u),
          (t[15] = S),
          (t[16] = R))
        : (R = t[16]);
      var L;
      t[17] !== v || t[18] !== R
        ? ((L = s.jsx(r("WAWebFlatListContainer.react"), {
            flatListControllers: v,
            children: R,
          })),
          (t[17] = v),
          (t[18] = R),
          (t[19] = L))
        : (L = t[19]);
      var E;
      return (
        t[20] !== b || t[21] !== L
          ? ((E = s.jsx("div", babelHelpers.extends({}, b, { children: L }))),
            (t[20] = b),
            (t[21] = L),
            (t[22] = E))
          : (E = t[22]),
        E
      );
    }
    function _() {
      (o("WAWebDrawerManager").DrawerManager.closeDrawerRight(),
        o("WAWebModalManager").ModalManager.close());
    }
    l.default = p;
  },
  98,
);
