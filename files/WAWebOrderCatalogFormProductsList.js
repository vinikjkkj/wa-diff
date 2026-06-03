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
    "asyncToGeneratorRuntime",
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
        a = e.flatListController,
        i = e.onProductSelectChange,
        l = e.orderItems,
        u = e.productsSelection,
        p = r("useWAWebUnmountSignal")(),
        _ = o("useWAWebForceUpdate").useForceUpdateDONOTUSE(),
        f = r("useWAWebDebouncedCallback")(_, 100),
        g = o("WAWebUserPrefsMeUser").getMePnUserOrThrow_DO_NOT_USE(),
        h = o("WAWebCatalogCollection").CatalogCollection.assertGet(g),
        y = d(!1),
        C = y[0],
        b = y[1],
        v = d(0),
        S = v[0],
        R = v[1],
        L = d(!1),
        E = L[0],
        k = L[1],
        I = function () {
          var e = new Set(
              l.map(function (e) {
                var t = e.id;
                return t;
              }),
            ),
            t = h.productCollection.getProductModels();
          return t
            .filter(function (t) {
              return !e.has(t.id);
            })
            .map(function (e) {
              return { itemKey: e.id.toString(), product: e };
            });
        },
        T = function (t) {
          t.forEach(function (e) {
            var t = l.find(function (t) {
              var n = t.id;
              return n === e.product.id;
            });
            t !== void 0 && i(e.product, Number(t.quantity), !0);
          });
        },
        D = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            if (!E && h.afterCursor) {
              var e = h.productCollection.getProductModels().length;
              (b(!0), R(e));
              try {
                var t = yield o(
                  "WAWebCatalogCollection",
                ).CatalogCollection.update(g);
                if (p.aborted) return;
                b(!1);
                var n = Array.isArray(t) ? t[0] : t,
                  r = n.productCollection.getProductModels().length;
                if (
                  (T(I().slice(e)),
                  r === S && k(!0),
                  e *
                    o("WAWebProductCatalogCatalogConstants")
                      .PRODUCT_LIST_ITEM_HEIGHT <
                    window.innerHeight)
                )
                  return D();
              } catch (e) {
                (b(!1), k(!0));
              }
            }
          });
          return function () {
            return e.apply(this, arguments);
          };
        })();
      (c(function () {
        (T(I()), D());
      }, []),
        o("useWAWebListener").useListener(h.productCollection, "add", f));
      var x = r("useWAWebThrottledCallback")(function (e) {
          C ||
            (e.scrollTop + o("WAWebFrontendConstants").SCROLL_FUDGE >
              e.scrollHeight - e.clientHeight &&
              D());
        }, m),
        $ = function (t) {
          t.currentTarget && x(t.currentTarget);
        };
      return s.jsxs(r("WAWebFlatListContainer.react"), {
        className: t,
        flatListControllers: [a],
        onScroll: $,
        children: [
          s.jsx(o("WAWebFlatList.react").FlatList, {
            flatListController: a,
            direction: "vertical",
            forceConsistentRenderCount: !1,
            data: I(),
            renderItem: function (t) {
              var e = t.product;
              return s.jsx(r("WAWebOrderCatalogFormProduct"), {
                product: e,
                productsSelection: u,
                onProductSelectChange: i,
              });
            },
            defaultItemHeight: o("WAWebProductCatalogCatalogConstants")
              .PRODUCT_LIST_ITEM_HEIGHT,
          }),
          C && s.jsx(r("WAWebFlatListLoadingSpinnerItem.react"), {}),
        ],
      });
    }
    ((p.displayName = p.name + " [from " + i.id + "]"), (l.default = p));
  },
  98,
);
