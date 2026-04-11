__d(
  "WAWebProductCollectionCollectionContentDrawer.react",
  [
    "fbt",
    "WALogger",
    "WAWebBizCatalogUtils",
    "WAWebCartCollection",
    "WAWebCatalogCollection",
    "WAWebContactGetters",
    "WAWebDrawer.react",
    "WAWebDrawerBody.react",
    "WAWebDrawerContext",
    "WAWebDrawerHeader.react",
    "WAWebFlatListController",
    "WAWebFlatListLoadingSpinnerItem.react",
    "WAWebManageAddItemCta.react",
    "WAWebManageCollectionIntegrityBanner.react",
    "WAWebProductCatalogCatalogConstants",
    "WAWebProductCatalogCatalogDrawerMenu.react",
    "WAWebProductCatalogCheckCartEnabled",
    "WAWebProductCatalogContext",
    "WAWebProductCatalogFetchState",
    "WAWebProductCatalogFetchStateTopBar.react",
    "WAWebProductCollectionLogEvents",
    "WAWebProductCollectionsList.react",
    "WAWebQplFlowWrapper",
    "WAWebUtilsLogQplEvents",
    "asyncToGeneratorRuntime",
    "qpl",
    "react",
    "react-compiler-runtime",
    "useWAWebContactValues",
    "useWAWebDebouncedCallback",
    "useWAWebForceUpdate",
    "useWAWebListener",
    "useWAWebUnmountSignal",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = ["ref"],
      c,
      d = c || (c = o("react")),
      m = c,
      p = m.useContext,
      _ = m.useEffect,
      f = m.useMemo,
      g = m.useState,
      h = r("qpl")._(774780089, "3436");
    function y(e) {
      var t = o("react-compiler-runtime").c(32),
        n = e.canManageCatalog,
        a = e.cartEnabled,
        i = e.catalog,
        l = e.catalogFetchState,
        u = e.collection,
        c = e.collectionFlatListController,
        m = e.dataSource,
        p = e.handleCartClick,
        _ = e.loadingMore,
        f = e.onCartClick,
        g = e.onEditCollection,
        h = e.onProductDetail,
        y = e.onProductShare,
        C = a && f ? p : void 0;
      if (!i || !m) {
        var b;
        return (
          t[0] !== l
            ? ((b = d.jsx(r("WAWebProductCatalogFetchStateTopBar.react"), {
                fetchState: l,
              })),
              (t[0] = l),
              (t[1] = b))
            : (b = t[1]),
          b
        );
      }
      var v;
      t[2] !== m ? ((v = m.getData()), (t[2] = m), (t[3] = v)) : (v = t[3]);
      var S = v;
      if (S.length === 0 && !_ && n && u) {
        var R;
        t[4] === Symbol.for("react.memo_cache_sentinel")
          ? ((R = { className: "x1okw0bk x12xbjc7 x6ikm8r x10wlt62" }),
            (t[4] = R))
          : (R = t[4]);
        var L;
        t[5] !== u || t[6] !== g
          ? ((L = d.jsx(r("WAWebManageAddItemCta.react"), {
              theme: "collections",
              onClick: function () {
                g == null || g(u);
              },
              testid: void 0,
            })),
            (t[5] = u),
            (t[6] = g),
            (t[7] = L))
          : (L = t[7]);
        var E;
        t[8] === Symbol.for("react.memo_cache_sentinel")
          ? ((E = d.jsx("div", {
              className: "xqy66fx x1q3ajuy xr1496l x1gx403c x101yacv",
              children: s._(
                /*BTDS*/ "This collection won't be visible to customers until you add at least 1 item",
              ),
            })),
            (t[8] = E))
          : (E = t[8]);
        var k;
        return (
          t[9] !== L
            ? ((k = d.jsxs(
                "div",
                babelHelpers.extends({}, R, { children: [L, E] }),
              )),
              (t[9] = L),
              (t[10] = k))
            : (k = t[10]),
          k
        );
      }
      var I;
      t[11] !== (u == null ? void 0 : u.id)
        ? ((I = u == null ? void 0 : u.id.toString()),
          (t[11] = u == null ? void 0 : u.id),
          (t[12] = I))
        : (I = t[12]);
      var T;
      t[13] !== n ||
      t[14] !== i ||
      t[15] !== c ||
      t[16] !== S ||
      t[17] !== C ||
      t[18] !== h ||
      t[19] !== y ||
      t[20] !== I
        ? ((T = d.jsx(r("WAWebProductCollectionsList.react"), {
            onCartOpen: C,
            onProductDetail: h,
            flatListController: c,
            catalog: i,
            canManageCatalog: n,
            shareLinks: n,
            onProductShare: y,
            collectionId: I,
            data: S,
          })),
          (t[13] = n),
          (t[14] = i),
          (t[15] = c),
          (t[16] = S),
          (t[17] = C),
          (t[18] = h),
          (t[19] = y),
          (t[20] = I),
          (t[21] = T))
        : (T = t[21]);
      var D = T,
        x;
      t[22] !== u || t[23] !== g
        ? ((x = u
            ? d.jsx(
                o("WAWebManageCollectionIntegrityBanner.react")
                  .CollectionIntegrityBanner,
                { collection: u, onEditCollection: g },
              )
            : void 0),
          (t[22] = u),
          (t[23] = g),
          (t[24] = x))
        : (x = t[24]);
      var $ = x,
        P;
      t[25] === Symbol.for("react.memo_cache_sentinel")
        ? ((P = { className: "x1okw0bk x12xbjc7 x6ikm8r x10wlt62" }),
          (t[25] = P))
        : (P = t[25]);
      var N;
      t[26] !== _
        ? ((N = _ && d.jsx(r("WAWebFlatListLoadingSpinnerItem.react"), {})),
          (t[26] = _),
          (t[27] = N))
        : (N = t[27]);
      var M;
      return (
        t[28] !== $ || t[29] !== D || t[30] !== N
          ? ((M = d.jsxs(
              "div",
              babelHelpers.extends({}, P, { children: [$, D, N] }),
            )),
            (t[28] = $),
            (t[29] = D),
            (t[30] = N),
            (t[31] = M))
          : (M = t[31]),
        M
      );
    }
    function C(t) {
      "use no forget";
      var a,
        i = t.ref,
        l = babelHelpers.objectWithoutPropertiesLoose(t, u),
        c = l.canManageCatalog,
        m = l.catalogId,
        C = l.collection,
        b = l.contact,
        v = l.onCartClick,
        S = l.onCatalogLinkClick,
        R = l.onEditCollection,
        L = l.onProductDetail,
        E = l.onProductShare,
        k = l.scrollOffset,
        I = l.setScrollOffset,
        T = o("useWAWebForceUpdate").useForceUpdateDONOTUSE(),
        D = r("useWAWebUnmountSignal")(),
        x = p(o("WAWebDrawerContext").DrawerContext),
        $ = o("useWAWebContactValues").useContactValues(b.id, [
          o("WAWebContactGetters").getId,
        ]),
        P = $[0],
        N = f(
          function () {
            return o("WAWebCartCollection").CartCollection.findCart(
              P.toString(),
            );
          },
          [P],
        ),
        M = f(function () {
          return new (r("WAWebFlatListController"))();
        }, []),
        w = g(!1),
        A = w[0],
        F = w[1],
        O = g(null),
        B = O[0],
        W = O[1],
        q = g(N.itemCount),
        U = q[0],
        V = q[1],
        H = g("NONE"),
        G = H[0],
        z = H[1],
        j = g(null),
        K = j[0],
        Q = j[1],
        X = g(null),
        Y = X[0],
        J = X[1],
        Z = g(!0),
        ee = Z[0],
        te = Z[1];
      (o("useWAWebListener").useListener(
        C == null ? void 0 : C.productCollection,
        ["add", "remove"],
        T,
      ),
        o("useWAWebListener").useListener(
          B == null ? void 0 : B.productCollection,
          ["add", "remove"],
          T,
        ),
        o("useWAWebListener").useListener(
          B == null ? void 0 : B.collections,
          ["add", "remove"],
          T,
        ),
        o("useWAWebListener").useListener(
          C,
          ["change:reviewStatus", "canAppeal"],
          T,
        ));
      var ne = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
            (yield e == null ? void 0 : e.loadInitialItems(),
              te(!1),
              o("WAWebProductCollectionLogEvents").logCollectionSeeAllView({
                catalogOwnerJid: m.toString(),
                catalogContext: o(
                  "WAWebProductCatalogContext",
                ).getProductCatalogContext(x),
                collectionId: e == null ? void 0 : e.collectionId,
              }));
          });
          return function (n) {
            return e.apply(this, arguments);
          };
        })(),
        re = function () {
          o("WAWebCatalogCollection")
            .CatalogCollection.find(m)
            .then(function (e) {
              if (!D.aborted) {
                (W(e), z("SUCCESS"));
                var t = new (o(
                    "WAWebBizCatalogUtils",
                  ).SingleCollectionDataSource)(
                    e,
                    C == null ? void 0 : C.id.toString(),
                    c || !1,
                    o("WAWebProductCatalogCatalogConstants")
                      .PRODUCT_LIST_ITEM_HEIGHT,
                  ),
                  n = new (o(
                    "WAWebBizCatalogUtils",
                  ).CatalogListItemScrollHelper)(t);
                (Q(t),
                  J(n),
                  ne(t)
                    .then(function () {
                      o("WAWebQplFlowWrapper").QPL.markerEnd(h, 2);
                    })
                    .catch(function () {
                      o("WAWebQplFlowWrapper").QPL.markerEnd(h, 3);
                    }),
                  k !== void 0 && M.setScrollFromStart(k));
              }
            })
            .catch(function (e) {
              (o("WAWebQplFlowWrapper").QPL.markerEnd(h, 3),
                o("WAWebProductCatalogFetchState").parseErrorState(
                  e,
                  function (e) {
                    (z(e), te(!1));
                  },
                ));
            });
        },
        oe = function () {
          var e = N.itemCount;
          U !== e && V(e);
        };
      _(function () {
        (re(),
          r("WAWebProductCatalogCheckCartEnabled")(m)
            .then(function (e) {
              (F(e), e && N.on("all", oe));
            })
            .catch(function (t) {
              o("WALogger").ERROR(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[product-catalog] failed to check cart enabled",
                  ])),
              );
            }));
      }, []);
      var ae = function () {
          (o("WAWebUtilsLogQplEvents").qplStartCartView("Collection"),
            v == null || v(P.toString()));
        },
        ie = function () {
          B && S(B, b);
        },
        le = r("useWAWebDebouncedCallback")(function (e, t) {
          (I == null || I(t.scrollTop),
            Y != null && Y.willLoadMore(t) && te(!0),
            Y == null ||
              Y.onScroll(e, t)
                .then(function (e) {
                  e && te(!1);
                })
                .catch(function (e) {
                  throw (te(!1), e);
                }));
        }, 100),
        se = function (t) {
          le(t, t.currentTarget);
        },
        ue = o(
          "WAWebProductCatalogCatalogDrawerMenu.react",
        ).getCatalogDrawerMenu({
          onSendCatalog: ie,
          onCartClick: A ? ae : void 0,
          cartCount: N.itemCount,
          catalogId: m.toString(),
          canManageCatalog: c,
        }),
        ce =
          ((a = l.collection) == null ? void 0 : a.name) ||
          s._(/*BTDS*/ "All items"),
        de = f(
          function () {
            return {
              surface: c
                ? "smb-catalog-collection-products"
                : "catalog-collection",
            };
          },
          [c],
        );
      return d.jsxs(r("WAWebDrawer.react"), {
        ref: i,
        theme: "products",
        onDrop: l.onBack,
        tsNavigationData: de,
        children: [
          d.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
            title: ce,
            type:
              l.headerType ||
              o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
            onBack: l.onBack,
            menu: ue,
          }),
          d.jsx(r("WAWebDrawerBody.react"), {
            flatListControllers: [M],
            onScroll: se,
            children: d.jsx(y, {
              cartEnabled: A,
              onCartClick: v,
              handleCartClick: ae,
              catalog: B,
              dataSource: K,
              catalogFetchState: G,
              loadingMore: ee,
              canManageCatalog: c,
              collection: C,
              onProductDetail: L,
              onProductShare: E,
              onEditCollection: R,
              collectionFlatListController: M,
            }),
          }),
        ],
      });
    }
    ((C.displayName = C.name + " [from " + i.id + "]"), (l.default = C));
  },
  226,
);
