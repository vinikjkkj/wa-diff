__d(
  "WAWebProductCatalogProductMessageListDrawer.react",
  [
    "WATypeUtils",
    "WAWebCartCollection",
    "WAWebCommonCartIconMenuBarItem.react",
    "WAWebContactGetters",
    "WAWebDrawer.react",
    "WAWebDrawerBody.react",
    "WAWebDrawerContext",
    "WAWebDrawerHeader.react",
    "WAWebEmojiText.react",
    "WAWebFlatListController",
    "WAWebFlatListLoadingSpinnerItem.react",
    "WAWebFrontendConstants",
    "WAWebProductCatalogCatalogConstants",
    "WAWebProductCatalogCheckCartEnabled",
    "WAWebProductCatalogContext",
    "WAWebProductCatalogFetchState",
    "WAWebProductCatalogFetchStateTopBar.react",
    "WAWebProductCatalogLogEvents",
    "WAWebProductCatalogProductMessageList.react",
    "WAWebProductMessageListCollection",
    "WAWebQplFlowWrapper",
    "WAWebUtilsLogQplEvents",
    "asyncToGeneratorRuntime",
    "qpl",
    "react",
    "useLazyRef",
    "useWAWebContactValues",
    "useWAWebListener",
    "useWAWebUnmountSignal",
  ],
  function (t, n, r, o, a, i, l) {
    var e = ["ref"],
      s,
      u = s || (s = o("react")),
      c = s,
      d = c.useContext,
      m = c.useEffect,
      p = c.useState,
      _ = r("qpl")._(774777097, "3431"),
      f = r("qpl")._(774777097, "3431");
    function g(e) {
      var t = e.loadingMore,
        n = e.onProductDetail,
        o = e.productListFlatListControllerRef,
        a = e.productMessageList,
        i = e.productMessageListFetchState;
      return a
        ? u.jsxs("div", {
            children: [
              u.jsx(r("WAWebProductCatalogProductMessageList.react"), {
                productMessageList: a,
                flatListController: o.current,
                onProductDetail: n,
              }),
              t && u.jsx(r("WAWebFlatListLoadingSpinnerItem.react"), {}),
            ],
          })
        : u.jsx(r("WAWebProductCatalogFetchStateTopBar.react"), {
            fetchState: i,
          });
    }
    g.displayName = g.name + " [from " + i.id + "]";
    function h(t) {
      var a = t.ref,
        i = babelHelpers.objectWithoutPropertiesLoose(t, e),
        l = i.catalogWid,
        s = i.onCartClick,
        c = i.onProductDetail,
        h = i.productListId,
        y = i.setScrollOffset,
        C = r("useWAWebUnmountSignal")(),
        b = d(o("WAWebDrawerContext").DrawerContext),
        v = r("useLazyRef")(function () {
          return new (r("WAWebFlatListController"))();
        }),
        S = o("useWAWebContactValues").useContactValues(i.contact.id, [
          o("WAWebContactGetters").getId,
        ]),
        R = S[0],
        L = p(!1),
        E = L[0],
        k = L[1],
        I = p(0),
        T = I[0],
        D = I[1],
        x = p(!1),
        $ = x[0],
        P = x[1],
        N = p(function () {
          return o(
            "WAWebProductMessageListCollection",
          ).ProductMessageListCollection.get(h);
        }),
        M = N[0],
        w = N[1],
        A = p(function () {
          return o("WAWebCartCollection").CartCollection.findCart(R.toString());
        }),
        F = A[0],
        O = p(F.itemCount),
        B = O[0],
        W = O[1],
        q = p(!1),
        U = q[0],
        V = q[1],
        H = p(M ? "SUCCESS" : "NONE"),
        G = H[0],
        z = H[1],
        j = function (t) {
          var e = t === !0,
            n = o(
              "WAWebProductMessageListCollection",
            ).ProductMessageListCollection.assertGet(h),
            r = n.getTotalProductsFetchedOrFailed(),
            a = n.getProductSize();
          if ($ || r === a) {
            (e &&
              (o("WAWebQplFlowWrapper").QPL.markerAnnotate(f, {
                int: { ProductsCount: r },
              }),
              o("WAWebQplFlowWrapper").QPL.markerEnd(f, 2)),
              P(!0));
            return;
          }
          (k(!0), D(r));
          var i = e ? _ : void 0;
          o("WAWebProductMessageListCollection")
            .ProductMessageListCollection.update(h, { markerId: i })
            .then(function (t) {
              if (C.aborted) {
                e && o("WAWebQplFlowWrapper").QPL.markerDrop(f);
                return;
              }
              k(!1);
              var n = Array.isArray(t) ? t[0] : t,
                a = n.getTotalProductsFetchedOrFailed();
              (a === T && P(!0),
                e &&
                  (o("WAWebQplFlowWrapper").QPL.markerAnnotate(f, {
                    int: { ProductsCount: a },
                  }),
                  o("WAWebQplFlowWrapper").QPL.markerEnd(f, 2)),
                r *
                  o("WAWebProductCatalogCatalogConstants")
                    .PRODUCT_LIST_ITEM_HEIGHT <
                  window.innerHeight && j());
            })
            .catch(function () {
              (k(!1), P(!0), e && o("WAWebQplFlowWrapper").QPL.markerEnd(f, 3));
            });
        },
        K = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            try {
              var e = yield o(
                "WAWebProductMessageListCollection",
              ).ProductMessageListCollection.find(h);
              if (C.aborted) {
                o("WAWebQplFlowWrapper").QPL.markerDrop(f);
                return;
              }
              (w(e), z("SUCCESS"), j(!0));
            } catch (e) {
              (o("WAWebProductCatalogFetchState").parseErrorState(
                e,
                function (e) {
                  return z(e);
                },
              ),
                o("WAWebQplFlowWrapper").QPL.markerEnd(f, 3));
            }
          });
          return function () {
            return e.apply(this, arguments);
          };
        })();
      (m(function () {
        (M ? j() : K(),
          r("WAWebProductCatalogCheckCartEnabled")(R).then(function (e) {
            C.aborted ||
              (V(e),
              o("WAWebProductCatalogLogEvents").logCatalogListView({
                catalogOwnerWid: l,
                catalogContext: o(
                  "WAWebProductCatalogContext",
                ).getProductCatalogContext(b),
                cartToggle: e,
              }));
          }));
      }, []),
        o("useWAWebListener").useListener(F, "all", function () {
          W(F.itemCount);
        }));
      var Q = function (t) {
          E ||
            (t.scrollTop + o("WAWebFrontendConstants").SCROLL_FUDGE >
              t.scrollHeight - t.clientHeight &&
              j());
        },
        X = function (t) {
          (Q(t.currentTarget), y == null || y(t.currentTarget.scrollTop));
        },
        Y = function () {
          (o("WAWebUtilsLogQplEvents").qplStartCartView("PLM"),
            s == null || s(R.toString()));
        },
        J =
          s != null && U
            ? u.jsx(r("WAWebCommonCartIconMenuBarItem.react"), {
                cartCountText:
                  o("WATypeUtils").isNumber(B) && B > 0 ? B.toString() : void 0,
                onClick: Y,
                catalogOwnerJid: R.toString(),
              })
            : null;
      return u.jsxs(r("WAWebDrawer.react"), {
        ref: a,
        theme: "products",
        onDrop: i.onBack,
        tsNavigationData: {
          surface: "unknown",
          viewName: "catalog-product-messages",
        },
        children: [
          u.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
            title: u.jsx("div", {
              className: "x78zum5",
              children: u.jsx(o("WAWebEmojiText.react").EmojiText, {
                text: M == null ? void 0 : M.title,
                ellipsify: !0,
              }),
            }),
            titleStr: M == null ? void 0 : M.title,
            type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
            onBack: i.onBack,
            menu: J,
          }),
          u.jsx(r("WAWebDrawerBody.react"), {
            onScroll: X,
            flatListControllers: [v.current],
            scrollOffset: i.scrollOffset,
            children: u.jsx(g, {
              productMessageList: M,
              loadingMore: E,
              productMessageListFetchState: G,
              onProductDetail: c,
              productListFlatListControllerRef: v,
            }),
          }),
        ],
      });
    }
    ((h.displayName = h.name + " [from " + i.id + "]"),
      (h.displayName = "ProductMessageListDrawer"),
      (l.default = h));
  },
  98,
);
