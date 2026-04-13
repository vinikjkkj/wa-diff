__d(
  "WAWebProductCatalogProductListDrawer.react",
  [
    "fbt",
    "WAFilteredCatch",
    "WATypeUtils",
    "WAWebBackendErrors",
    "WAWebCartCollection",
    "WAWebCatalogCollection",
    "WAWebCommonCartIconMenuBarItem.react",
    "WAWebContactGetters",
    "WAWebDrawer.react",
    "WAWebDrawerBody.react",
    "WAWebDrawerContext",
    "WAWebDrawerHeader.react",
    "WAWebDropdown.react",
    "WAWebDropdownItem.react",
    "WAWebFlatListController",
    "WAWebFlatListLoadingSpinnerItem.react",
    "WAWebFrontendConstants",
    "WAWebManageAddItemCta.react",
    "WAWebMenuBar.react",
    "WAWebProductCatalogCatalogConstants",
    "WAWebProductCatalogCheckCartEnabled",
    "WAWebProductCatalogContext",
    "WAWebProductCatalogFetchState",
    "WAWebProductCatalogFetchStateTopBar.react",
    "WAWebProductCatalogLinkIcon.react",
    "WAWebProductCatalogList.react",
    "WAWebProductCatalogLogEvents",
    "WAWebProductCatalogProductListDrawerHeader.react",
    "WDSIconIcMoreVert.react",
    "react",
    "react-compiler-runtime",
    "useWAWebContactValues",
    "useWAWebDebouncedCallback",
    "useWAWebForceUpdate",
    "useWAWebListener",
    "useWAWebThrottledCallback",
    "useWAWebUnmountSignal",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e = ["ref"],
      u,
      c = u || (u = o("react")),
      d = u,
      m = d.useContext,
      p = d.useEffect,
      _ = d.useMemo,
      f = d.useState;
    function g(e) {
      var t = o("react-compiler-runtime").c(17),
        n = e.businessProfile,
        a = e.canManageCatalog,
        i = e.contact,
        l = e.loadingMore,
        s = e.onAddProduct,
        u = e.productCatalogList,
        d;
      if (a && s) {
        var m;
        (t[0] !== s
          ? ((m = c.jsx(r("WAWebManageAddItemCta.react"), {
              onClick: s,
              theme: "in-list",
              testid: void 0,
            })),
            (t[0] = s),
            (t[1] = m))
          : (m = t[1]),
          (d = m));
      }
      var p;
      t[2] !== n || t[3] !== i
        ? ((p =
            n &&
            c.jsx("div", {
              "data-testid": void 0,
              className: "x1okw0bk",
              children: c.jsx(
                r("WAWebProductCatalogProductListDrawerHeader.react"),
                {
                  profilePicThumb: i.getProfilePicThumb(),
                  contact: i,
                  businessProfile: n,
                },
              ),
            })),
          (t[2] = n),
          (t[3] = i),
          (t[4] = p))
        : (p = t[4]);
      var _;
      t[5] !== n
        ? ((_ = {
            0: { className: "x1okw0bk x6ikm8r x10wlt62 x12xbjc7" },
            1: { className: "x1okw0bk x6ikm8r x10wlt62 x12xbjc7 x1380le5" },
          }[!!n << 0]),
          (t[5] = n),
          (t[6] = _))
        : (_ = t[6]);
      var f;
      t[7] !== l
        ? ((f = l && c.jsx(r("WAWebFlatListLoadingSpinnerItem.react"), {})),
          (t[7] = l),
          (t[8] = f))
        : (f = t[8]);
      var g;
      t[9] !== d || t[10] !== u || t[11] !== _ || t[12] !== f
        ? ((g = c.jsxs(
            "div",
            babelHelpers.extends({ "data-testid": void 0 }, _, {
              children: [d, u, f],
            }),
          )),
          (t[9] = d),
          (t[10] = u),
          (t[11] = _),
          (t[12] = f),
          (t[13] = g))
        : (g = t[13]);
      var h;
      return (
        t[14] !== p || t[15] !== g
          ? ((h = c.jsxs(c.Fragment, { children: [p, g] })),
            (t[14] = p),
            (t[15] = g),
            (t[16] = h))
          : (h = t[16]),
        h
      );
    }
    function h(e) {
      var t = e.canManageCatalog,
        n = e.cartCount,
        a = e.cartEnabled,
        i = e.catalogId,
        l = e.handleCartClick,
        u = e.handleCatalogLinkClick,
        d = e.onCartClick,
        m = e.onOpenSettings,
        p = t
          ? c.jsx(o("WAWebMenuBar.react").MenuBarItem, {
              testid: void 0,
              icon: c.jsx(r("WDSIconIcMoreVert.react"), {}),
              title: s._(/*BTDS*/ "Menu"),
              dropdownMenu: {
                menu: c.jsxs(c.Fragment, {
                  children: [
                    c.jsx(o("WAWebDropdownItem.react").DropdownItem, {
                      testid: void 0,
                      action: u,
                      children: s._(/*BTDS*/ "Forward"),
                    }),
                    m &&
                      c.jsx(o("WAWebDropdownItem.react").DropdownItem, {
                        testid: void 0,
                        action: m,
                        children: s._(/*BTDS*/ "Settings"),
                      }),
                  ],
                }),
                type: o("WAWebDropdown.react").MenuType.DropdownMenu,
                flipOnRTL: !0,
                dirX: o("WAWebDropdown.react").DirX.LEFT,
              },
            })
          : c.jsx(o("WAWebMenuBar.react").MenuBarItem, {
              testid: void 0,
              icon: c.jsx(r("WAWebProductCatalogLinkIcon.react"), {
                theme: null,
              }),
              title: s._(/*BTDS*/ "Catalog link"),
              onClick: u,
            }),
        _ =
          a && d
            ? c.jsx(r("WAWebCommonCartIconMenuBarItem.react"), {
                cartIconTheme: null,
                cartCountText:
                  o("WATypeUtils").isNumber(n) && n > 0 ? n.toString() : void 0,
                onClick: l,
                catalogOwnerJid: i.toString(),
              })
            : null;
      return [_, p];
    }
    function y(t) {
      "use no forget";
      var n = t.ref,
        a = babelHelpers.objectWithoutPropertiesLoose(t, e),
        i = a.autoUpdate,
        l = i === void 0 ? !1 : i,
        u = a.businessProfile,
        d = a.canManageCatalog,
        y = a.catalogId,
        C = a.contact,
        b = a.onAddProduct,
        v = a.onCartClick,
        S = a.onCatalogLinkClick,
        R = a.onOpenSettings,
        L = a.onProductDetail,
        E = a.onProductShare,
        k = a.setScrollOffset,
        I = r("useWAWebUnmountSignal")(),
        T = m(o("WAWebDrawerContext").DrawerContext),
        D = o("useWAWebForceUpdate").useForceUpdateDONOTUSE(),
        x = r("useWAWebDebouncedCallback")(D, 100),
        $ = o("useWAWebContactValues").useContactValues(C.id, [
          o("WAWebContactGetters").getId,
        ]),
        P = $[0],
        N = _(function () {
          return new (r("WAWebFlatListController"))();
        }, []),
        M = function () {
          var e = o("WAWebCatalogCollection").CatalogCollection.get(y);
          return !e || e.stale ? null : e;
        },
        w = _(
          function () {
            return o("WAWebCartCollection").CartCollection.findCart(
              P.toString(),
            );
          },
          [P],
        ),
        A = f(!1),
        F = A[0],
        O = A[1],
        B = f(0),
        W = B[0],
        q = B[1],
        U = f(!1),
        V = U[0],
        H = U[1],
        G = f(!1),
        z = G[0],
        j = G[1],
        K = f(M),
        Q = K[0],
        X = K[1],
        Y = f(function () {
          return w.itemCount;
        }),
        J = Y[0],
        Z = Y[1],
        ee = f(function () {
          return M() ? "SUCCESS" : "NONE";
        }),
        te = ee[0],
        ne = ee[1],
        re = function () {
          var e = w.itemCount;
          J !== e && Z(e);
        };
      o("useWAWebListener").useListener(w, "all", re);
      var oe = function () {
          if (!V) {
            var e = o("WAWebCatalogCollection").CatalogCollection.assertGet(y);
            if (e.afterCursor) {
              var t = e.productCollection.getProductModels().length;
              (O(!0),
                q(t),
                o("WAWebCatalogCollection")
                  .CatalogCollection.update(y)
                  .then(function (e) {
                    if (!I.aborted) {
                      O(!1);
                      var n = Array.isArray(e) ? e[0] : e,
                        r = n.productCollection.getProductModels().length;
                      (r === W && H(!0),
                        t *
                          o("WAWebProductCatalogCatalogConstants")
                            .PRODUCT_LIST_ITEM_HEIGHT <
                          window.innerHeight && oe());
                    }
                  })
                  .catch(function () {
                    (O(!1), H(!0));
                  }));
            }
          }
        },
        ae = r("useWAWebDebouncedCallback")(function () {
          (a.onRemoveProduct == null || a.onRemoveProduct(), D());
        }, 100),
        ie = l ? (Q == null ? void 0 : Q.productCollection) : null;
      (o("useWAWebListener").useListener(ie, "add", x),
        o("useWAWebListener").useListener(ie, "remove", ae));
      var le = function () {
        return o("WAWebCatalogCollection")
          .CatalogCollection.find(y)
          .then(function (e) {
            (X(e), ne("SUCCESS"), oe());
          })
          .catch(
            o("WAFilteredCatch").filteredCatch(
              o("WAWebBackendErrors").ServerStatusCodeError,
              function (e) {
                (e.status === 403 || e.status === 404) &&
                  (X(null), ne("NOT_FOUND"));
              },
            ),
          )
          .catch(function (e) {
            o("WAWebProductCatalogFetchState").parseErrorState(e, function (e) {
              return ne(e);
            });
          });
      };
      p(function () {
        (Q ? oe() : le(),
          r("WAWebProductCatalogCheckCartEnabled")(y).then(function (e) {
            (j(e),
              o("WAWebProductCatalogLogEvents").logCatalogListView({
                catalogOwnerWid: y,
                catalogContext: o(
                  "WAWebProductCatalogContext",
                ).getProductCatalogContext(T),
                cartToggle: e,
              }));
          }));
      }, []);
      var se = r("useWAWebThrottledCallback")(function (e) {
          F ||
            (e.scrollTop + o("WAWebFrontendConstants").SCROLL_FUDGE >
              e.scrollHeight - e.clientHeight &&
              oe());
        }, 100),
        ue = function (t) {
          var e, n;
          (t.currentTarget && se(t.currentTarget),
            k == null ||
              k(
                (e = (n = t.currentTarget) == null ? void 0 : n.scrollTop) !=
                  null
                  ? e
                  : 0,
              ));
        },
        ce = function () {
          v == null || v(P.toString());
        },
        de = function () {
          Q &&
            (S(Q, C),
            o("WAWebProductCatalogLogEvents").logCatalogShareLinkClick({
              catalogOwnerWid: y,
              catalogContext: o(
                "WAWebProductCatalogContext",
              ).getProductCatalogContext(T),
            }));
        },
        me = z && v ? ce : void 0,
        pe = Q
          ? c.jsx(g, {
              canManageCatalog: d,
              onAddProduct: b,
              businessProfile: u,
              contact: C,
              loadingMore: F,
              productCatalogList: c.jsx(r("WAWebProductCatalogList.react"), {
                onCartOpen: me,
                onProductDetail: L,
                flatListController: N,
                catalog: Q,
                canManageCatalog: d,
                shareLinks: d,
                onProductShare: E,
              }),
            })
          : c.jsx(r("WAWebProductCatalogFetchStateTopBar.react"), {
              fetchState: te,
            }),
        _e = h({
          canManageCatalog: d,
          handleCatalogLinkClick: de,
          onOpenSettings: R,
          cartEnabled: z,
          onCartClick: v,
          cartCount: J,
          handleCartClick: ce,
          catalogId: y,
        });
      return c.jsxs(r("WAWebDrawer.react"), {
        ref: n,
        theme: "products",
        onDrop: a.onBack,
        tsNavigationData: {
          surface: "unknown",
          viewName: "catalog-product-list",
        },
        children: [
          c.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
            title: s._(/*BTDS*/ "Catalog"),
            type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
            onBack: a.onBack,
            menu: _e,
            focusBackOrCancel: !0,
          }),
          c.jsx(r("WAWebDrawerBody.react"), {
            onScroll: ue,
            flatListControllers: [N],
            scrollOffset: a.scrollOffset,
            children: pe,
          }),
        ],
      });
    }
    ((y.displayName = y.name + " [from " + i.id + "]"), (l.default = y));
  },
  226,
);
