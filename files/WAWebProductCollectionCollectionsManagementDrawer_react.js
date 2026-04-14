__d(
  "WAWebProductCollectionCollectionsManagementDrawer.react",
  [
    "fbt",
    "WAArrayDiff",
    "WAArrayMove",
    "WAArraysShallowEqual",
    "WAWebBizCatalogUtils",
    "WAWebButton.react",
    "WAWebCatalogCollection",
    "WAWebDrawer.react",
    "WAWebDrawerBody.react",
    "WAWebDrawerContext",
    "WAWebDrawerHeader.react",
    "WAWebFlatListController",
    "WAWebFlatListLoadingSpinnerItem.react",
    "WAWebFlex.react",
    "WAWebFlexItem.react",
    "WAWebLinkedCatalogHelper",
    "WAWebManageActions",
    "WAWebManageAddItemCta.react",
    "WAWebProductCatalogCatalogConstants",
    "WAWebProductCatalogContext",
    "WAWebProductCollectionCollectionsList.react",
    "WAWebProductCollectionCollectionsManagementDrawerMenu",
    "WAWebSpinner.react",
    "WAWebUA",
    "WAWebUserPrefsMeUser",
    "WAWebUtilsLogQplEvents",
    "asyncToGeneratorRuntime",
    "react",
    "useWAWebOnUnmount",
    "useWAWebStableCallback",
    "useWAWebThrottledCallback",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e = ["ref"],
      u,
      c = u || (u = o("react")),
      d = u,
      m = d.useCallback,
      p = d.useContext,
      _ = d.useEffect,
      f = d.useMemo,
      g = d.useRef,
      h = d.useState,
      y = {
        footer: { backgroundColor: "xhjsbib", $$css: !0 },
        reorderLoadingScreen: {
          minWidth: "xgqtt45",
          minHeight: "x1us19tq",
          position: "x10l6tqk",
          zIndex: "xjhb59c",
          backgroundColor: "x1nuwr84",
          transitionProperty: "x15406qy",
          transitionDuration: "x1d8287x",
          transitionTimingFunction: "xwji4o3",
          $$css: !0,
        },
        paddingAll12: {
          paddingTop: "x1xrf6ya",
          paddingInlineEnd: "xde1mab",
          paddingBottom: "xscbp6u",
          paddingInlineStart: "x1iw51ew",
          $$css: !0,
        },
        paddingBottom20: { paddingBottom: "xv6tirj", $$css: !0 },
      };
    function C(e) {
      var t = e.disableBtn,
        n = t === void 0 ? !1 : t,
        r = e.isLoading,
        a = e.onClick;
      return c.jsx(o("WAWebFlex.react").FlexContainer, {
        xstyle: [y.footer, y.paddingAll12, y.paddingBottom20],
        direction: "horizontal",
        justify: "end",
        children: c.jsx(o("WAWebButton.react").WAWebButtonPrimary, {
          onClick: a,
          disabled: n,
          spinner: r,
          children: s._(/*BTDS*/ "Save"),
        }),
      });
    }
    C.displayName = C.name + " [from " + i.id + "]";
    function b() {
      return c.jsx(o("WAWebFlex.react").FlexRow, {
        xstyle: y.reorderLoadingScreen,
        align: "center",
        justify: "center",
        testid: void 0,
        children: c.jsx(r("WAWebFlexItem.react"), {
          children: c.jsx(o("WAWebSpinner.react").Spinner, {
            size: 50,
            stroke: 4,
            color: "accent",
          }),
        }),
      });
    }
    b.displayName = b.name + " [from " + i.id + "]";
    function v(e) {
      var t = e.catalog,
        n = e.catalogFlatListController,
        a = e.checkIfCollectionIsDirty,
        i = e.drawerRef,
        l = e.editCollection,
        u = e.handleReorderMove,
        d = e.isLoadingMore,
        m = e.isReorder,
        p = e.onSeeCollection,
        _ = e.reorderedCollection;
      return t
        ? c.jsxs("div", {
            children: [
              !m &&
                !o(
                  "WAWebLinkedCatalogHelper",
                ).shouldHideComponentForSMBLinkedCatalog() &&
                c.jsx(r("WAWebManageAddItemCta.react"), {
                  onClick: function () {
                    l(null);
                  },
                  theme: "collections",
                  title: s._(/*BTDS*/ "New collection"),
                }),
              _.length !== 0 &&
                c.jsx(r("WAWebProductCollectionCollectionsList.react"), {
                  canManage: !0,
                  catalog: t,
                  onEditCollection: l,
                  data: _,
                  flatListController: n,
                  onSeeCollection: p,
                  isReorder: m,
                  handleReorderMove: u,
                  containerRef: i,
                  onFinalDropOfItem: a,
                }),
              d &&
                c.jsx("div", {
                  className: "xrvj5dj xl56j7k x1qx5ct2",
                  children: c.jsx(
                    r("WAWebFlatListLoadingSpinnerItem.react"),
                    {},
                  ),
                }),
            ],
          })
        : null;
    }
    v.displayName = v.name + " [from " + i.id + "]";
    function S(t) {
      var a = t.ref,
        i = babelHelpers.objectWithoutPropertiesLoose(t, e),
        l = i.editCollection,
        u = i.isReorder,
        d = u === void 0 ? !1 : u,
        y = i.onBack,
        S = i.onReorderCollection,
        R = i.onSeeCollection,
        L = i.setScrollOffset,
        E = f(function () {
          return new (r("WAWebFlatListController"))();
        }, []),
        k = g(null),
        I = h(!0),
        T = I[0],
        D = I[1],
        x = g(null),
        $ = h(null),
        P = $[0],
        N = $[1],
        M = h([]),
        w = M[0],
        A = M[1],
        F = h(!1),
        O = F[0],
        B = F[1],
        W = h(!1),
        q = W[0],
        U = W[1],
        V = g(!0),
        H = p(o("WAWebDrawerContext").DrawerContext),
        G = f(function () {
          var e = o("WAWebUserPrefsMeUser").getMePnUserOrThrow_DO_NOT_USE();
          return o("WAWebCatalogCollection").CatalogCollection.get(e);
        }, []),
        z = m(
          function (e) {
            var t = (function () {
              var t = n("asyncToGeneratorRuntime").asyncToGenerator(
                function* () {
                  if (G)
                    try {
                      var t = new (o(
                        "WAWebBizCatalogUtils",
                      ).CollectionsDataSource)(
                        G,
                        !0,
                        o("WAWebProductCatalogCatalogConstants")
                          .PRODUCT_LIST_ITEM_HEIGHT,
                        e,
                      );
                      if (
                        (yield t == null ? void 0 : t.loadInitialItems(),
                        !V.current || !t)
                      )
                        return;
                      var n = new (o(
                        "WAWebBizCatalogUtils",
                      ).CatalogListItemScrollHelper)(t);
                      ((x.current = t),
                        N(n),
                        A(t.getData()),
                        D(!1),
                        e &&
                          o(
                            "WAWebUtilsLogQplEvents",
                          ).qplEndCollectionsManagementView(2));
                    } catch (t) {
                      e &&
                        o(
                          "WAWebUtilsLogQplEvents",
                        ).qplEndCollectionsManagementView(3);
                    }
                },
              );
              return function () {
                return t.apply(this, arguments);
              };
            })();
            t();
          },
          [G],
        );
      _(function () {
        if (G) {
          var e = i.isPushed,
            t = e === void 0 ? !0 : e;
          (G.collections.on("add remove", function () {
            !V.current ||
              !x.current ||
              A(function (e) {
                var t,
                  n = ((t = x.current) == null ? void 0 : t.getData()) || [];
                return d ? [].concat(e, n.slice(e.length)) : n;
              });
          }),
            z(t && !d));
        }
      }, []);
      var j = r("useWAWebThrottledCallback")(function (e, t) {
          (L == null || L(t.scrollTop),
            P != null && P.willLoadMore(t) && D(!0),
            P == null ||
              P.onScroll(e, t)
                .then(function (e) {
                  e && D(!1);
                })
                .catch(function (e) {
                  throw (D(!1), e);
                }));
        }, 100),
        K = function (t) {
          t.currentTarget && j(t, t.currentTarget);
        },
        Q = m(function (e, t) {
          A(function (n) {
            return o("WAArrayMove").arrayMove(n, e, t);
          });
        }, []),
        X = r("useWAWebStableCallback")(function () {
          var e =
              (G == null
                ? void 0
                : G.collections.map(function (e) {
                    return e.id;
                  })) || [],
            t = w.reduce(function (e, t) {
              return (t.collection && e.push(t.collection.id), e);
            }, []);
          B(!r("WAArraysShallowEqual")(e, t));
        });
      r("useWAWebOnUnmount")(function () {
        V.current = !1;
      });
      var Y = m(
        function () {
          var e = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              try {
                var e;
                if (!G) return;
                U(!0);
                var t = o(
                    "WAWebProductCatalogContext",
                  ).getProductCatalogContext(H),
                  n =
                    (G == null
                      ? void 0
                      : G.collections.map(function (e) {
                          return e.id;
                        })) || [],
                  r = w.reduce(function (e, t) {
                    return (t.collection && e.push(t.collection.id), e);
                  }, []),
                  a = o("WAArrayDiff").findArrayDiff(n, r),
                  i = a.moved;
                if (!i.length) {
                  (U(!1), B(!1));
                  return;
                }
                var l = yield o("WAWebManageActions").handleCollectionReorder(
                  i,
                  t,
                );
                if (!V.current || !x.current) return;
                if (((e = x.current) == null || e.resetData(), l)) {
                  y();
                  return;
                }
                (yield z(!1), B(!1));
              } finally {
                V.current && U(!1);
              }
            });
            return function () {
              return e.apply(this, arguments);
            };
          })();
          e();
        },
        [w, G, y, H, z],
      );
      return c.jsxs(r("WAWebDrawer.react"), {
        ref: a,
        theme: "products",
        tsNavigationData: {
          surface: "unknown",
          viewName: "catalog-collections-management",
        },
        children: [
          c.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
            title: d ? s._(/*BTDS*/ "Reorder") : s._(/*BTDS*/ "Collections"),
            type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
            onBack: i.onBack,
            menu: c.jsx(
              r("WAWebProductCollectionCollectionsManagementDrawerMenu"),
              {
                isReorderEnabled:
                  !o("WAWebUA").UA.isSafari && !d && w.length > 1,
                onReorder: S,
              },
            ),
          }),
          c.jsx(r("WAWebDrawerBody.react"), {
            ref: k,
            onScroll: K,
            flatListControllers: [E],
            scrollOffset: i.scrollOffset,
            children: c.jsx(v, {
              catalog: G,
              isReorder: d,
              isLoadingMore: T,
              reorderedCollection: w,
              editCollection: l,
              onSeeCollection: R,
              handleReorderMove: Q,
              checkIfCollectionIsDirty: X,
              catalogFlatListController: E,
              drawerRef: k.current,
            }),
          }),
          d && c.jsx(C, { disableBtn: !O || q, isLoading: q, onClick: Y }),
          q && c.jsx(b, {}),
        ],
      });
    }
    ((S.displayName = S.name + " [from " + i.id + "]"), (l.default = S));
  },
  226,
);
