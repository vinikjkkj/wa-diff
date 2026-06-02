__d(
  "WAWebOrderCatalogFormProductsList",
  [
    "WAWebCatalogCollection",
    "WAWebFlatList.react",
    "WAWebFlatListContainer.react",
    "WAWebFlatListLoadingSpinnerItem.react",
    "WAWebFrontendConstants",
    "WAWebOrderCatalogFormProduct",
    "WAWebProductCatalogCatalogConstants",
    "WAWebUserPrefsMeUser",
    "react",
    "useWAWebDebouncedCallback",
    "useWAWebForceUpdate",
    "useWAWebListener",
    "useWAWebThrottledCallback",
    "useWAWebUnmountSignal",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = e,
      c = u.useEffect,
      d = u.useState,
      m = 100;
    function p(e) {
      "use no forget";
      var t = e.className,
        n = e.flatListController,
        a = e.onProductSelectChange,
        i = e.orderItems,
        l = e.productsSelection,
        u = r("useWAWebUnmountSignal")(),
        p = o("useWAWebForceUpdate").useForceUpdateDONOTUSE(),
        _ = r("useWAWebDebouncedCallback")(p, 100),
        f = o("WAWebUserPrefsMeUser").getMePnUserOrThrow_DO_NOT_USE(),
        g = o("WAWebCatalogCollection").CatalogCollection.assertGet(f),
        h = d(!1),
        y = h[0],
        C = h[1],
        b = d(0),
        v = b[0],
        S = b[1],
        R = d(!1),
        L = R[0],
        E = R[1],
        k = function () {
          var e = new Set(
              i.map(function (e) {
                var t = e.id;
                return t;
              }),
            ),
            t = g.productCollection.getProductModels();
          return t
            .filter(function (t) {
              return !e.has(t.id);
            })
            .map(function (e) {
              return { itemKey: e.id.toString(), product: e };
            });
        },
        I = function (t) {
          t.forEach(function (e) {
            var t = i.find(function (t) {
              var n = t.id;
              return n === e.product.id;
            });
            t !== void 0 && a(e.product, Number(t.quantity), !0);
          });
        },
        T = async function () {
          if (!L && g.afterCursor) {
            var e = g.productCollection.getProductModels().length;
            (C(!0), S(e));
            try {
              var t = await o(
                "WAWebCatalogCollection",
              ).CatalogCollection.update(f);
              if (u.aborted) return;
              C(!1);
              var n = Array.isArray(t) ? t[0] : t,
                r = n.productCollection.getProductModels().length;
              if (
                (I(k().slice(e)),
                r === v && E(!0),
                e *
                  o("WAWebProductCatalogCatalogConstants")
                    .PRODUCT_LIST_ITEM_HEIGHT <
                  window.innerHeight)
              )
                return T();
            } catch (e) {
              (C(!1), E(!0));
            }
          }
        };
      (c(function () {
        (I(k()), T());
      }, []),
        o("useWAWebListener").useListener(g.productCollection, "add", _));
      var D = r("useWAWebThrottledCallback")(function (e) {
          y ||
            (e.scrollTop + o("WAWebFrontendConstants").SCROLL_FUDGE >
              e.scrollHeight - e.clientHeight &&
              T());
        }, m),
        x = function (t) {
          t.currentTarget && D(t.currentTarget);
        };
      return s.jsxs(r("WAWebFlatListContainer.react"), {
        className: t,
        flatListControllers: [n],
        onScroll: x,
        children: [
          s.jsx(o("WAWebFlatList.react").FlatList, {
            flatListController: n,
            direction: "vertical",
            forceConsistentRenderCount: !1,
            data: k(),
            renderItem: function (t) {
              var e = t.product;
              return s.jsx(r("WAWebOrderCatalogFormProduct"), {
                product: e,
                productsSelection: l,
                onProductSelectChange: a,
              });
            },
            defaultItemHeight: o("WAWebProductCatalogCatalogConstants")
              .PRODUCT_LIST_ITEM_HEIGHT,
          }),
          y && s.jsx(r("WAWebFlatListLoadingSpinnerItem.react"), {}),
        ],
      });
    }
    ((p.displayName = p.name + " [from " + i.id + "]"), (l.default = p));
  },
  98,
);
