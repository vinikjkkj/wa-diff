__d(
  "WAWebBizMultiSelectProductList.react",
  [
    "WAFilteredCatch",
    "WAPromiseRaceAbort",
    "WATypeUtils",
    "WAWebBackendErrors",
    "WAWebCatalogCollection",
    "WAWebCatalogLoadErrorLoadable",
    "WAWebEmptyState.react",
    "WAWebFlatList.react",
    "WAWebFlatListLoadingSpinnerItem.react",
    "WAWebFocusTracer",
    "WAWebFrontendConstants",
    "WAWebMultiSelectListHotKeys.react",
    "WAWebProductCatalogCatalogConstants",
    "WAWebProductCatalogSelectableProductItem.react",
    "WAWebUserPrefsMeUser",
    "WAWebUtilsLogQplEvents",
    "WAWebWidFactory",
    "react",
    "useWAWebCatalogRecovery",
    "useWAWebUnmountSignal",
  ],
  function (t, n, r, o, a, i, l) {
    var e = ["ref"],
      s,
      u = s || (s = o("react")),
      c = s,
      d = c.useEffect,
      m = c.useImperativeHandle,
      p = c.useRef,
      _ = c.useState;
    function f(t) {
      var n = t.ref,
        a = babelHelpers.objectWithoutPropertiesLoose(t, e),
        i = a.active,
        l = a.flatListController,
        s = a.onProductsLoaded,
        c = a.onSelectionChanged,
        f = a.selections,
        g = r("useWAWebUnmountSignal")(),
        h = p(null),
        y = p(null),
        C = function () {
          var e = o("WAWebUserPrefsMeUser").getMePnUserOrThrow_DO_NOT_USE(),
            t = o("WATypeUtils").isString(e)
              ? o("WAWebWidFactory").createWid(e)
              : e;
          return t != null
            ? o("WAWebCatalogCollection").CatalogCollection.get(t)
            : null;
        },
        b = function () {
          var e = C();
          return e != null ? e.productCollection.getProductModels() : [];
        },
        v = o("useWAWebCatalogRecovery").useCatalogRecovery(),
        S = _(b),
        R = S[0],
        L = S[1],
        E = _(!1),
        k = E[0],
        I = E[1],
        T = _(function () {
          return b().length;
        }),
        D = T[0],
        x = T[1],
        $ = _(!0),
        P = $[0],
        N = $[1],
        M = _({ catalogExists: !0, catalogLoadError: !1 }),
        w = M[0],
        A = M[1],
        F = function (t) {
          t === void 0 && (t = !1);
          var e = C();
          if (e) {
            var n = !e.afterCursor || !P;
            if (
              (t && o("WAWebUtilsLogQplEvents").qplAnnotateCatalogView(n), n)
            ) {
              var a = e.productCollection.getProductModels();
              (L(a),
                I(!1),
                N(!1),
                s && s(a),
                t && o("WAWebUtilsLogQplEvents").qplEndCatalogView(2));
            } else
              (I(!0),
                r("WAPromiseRaceAbort")(
                  o(
                    "WAWebCatalogCollection",
                  ).CatalogCollection.findNextProductPage(e.id, t),
                  g,
                )
                  .then(function (e) {
                    var n = e.length;
                    (L(e),
                      I(!1),
                      x(n),
                      N(D !== n),
                      s && s(e),
                      i.init(e),
                      t && o("WAWebUtilsLogQplEvents").qplEndCatalogView(2));
                  })
                  .catch(function () {
                    (I(!1),
                      N(!0),
                      t && o("WAWebUtilsLogQplEvents").qplEndCatalogView(3));
                  }));
          }
        },
        O = function () {
          var e = o("WAWebUserPrefsMeUser").getMePnUserOrThrow_DO_NOT_USE();
          (I(!0),
            o("WAWebCatalogCollection")
              .CatalogCollection.find(e)
              .catch(
                o("WAFilteredCatch").filteredCatch(
                  o("WAWebBackendErrors").ServerStatusCodeError,
                  function (e) {
                    (e.status === "not_found" || e.status === 404
                      ? A({ catalogExists: !1, catalogLoadError: !0 })
                      : A({ catalogExists: !0, catalogLoadError: !0 }),
                      I(!1),
                      N(!1),
                      o("WAWebUtilsLogQplEvents").qplDropCatalogView());
                  },
                ),
              )
              .catch(
                o("WAFilteredCatch").filteredCatch(
                  o("WAWebBackendErrors").CatalogUnknownError,
                  function (e) {
                    (I(!1),
                      N(!1),
                      o("WAWebUtilsLogQplEvents").qplDropCatalogView());
                  },
                ),
              )
              .catch(
                o("WAFilteredCatch").filteredCatch(
                  o("WAWebBackendErrors").AdAccountRecoveryRequiredError,
                  function () {
                    (I(!1),
                      N(!1),
                      o("WAWebUtilsLogQplEvents").qplDropCatalogView());
                  },
                ),
              )
              .then(function () {
                return F(!0);
              }));
        };
      d(function () {
        (i.init(R), O());
      }, []);
      var B = function (t) {
          var e = t.currentTarget,
            n = e.clientHeight,
            r = e.scrollHeight,
            a = e.scrollTop,
            i = r - n - a,
            l = i < o("WAWebFrontendConstants").SCROLL_FUDGE;
          l && !k && F();
        },
        W = function (t, n, r) {
          (f.setVal(t, n, r), i.setVal(t, r), c && c(t, n));
        },
        q = function (t) {
          var e = f.isSelected(t);
          W(t, !e, !1);
        },
        U = function (t) {
          (t.stopPropagation(), t.preventDefault(), i.value && q(i.value));
        },
        V = function (t) {
          var e;
          (e = y.current) == null || e.scrollIntoViewIfNeeded(t);
        },
        H = function (t) {
          if (R.length !== 0) {
            var e = R[0],
              n = !f.isSelected(e);
            W(e, n, t);
          }
        },
        G = function () {
          h.current && r("WAWebFocusTracer").focus(h.current);
        };
      m(n, function () {
        return { focus: G, toggleFirst: H, updateForScrollEvent: B };
      });
      var z = u.jsx(o("WAWebFlatList.react").FlatList, {
        ref: y,
        direction: "vertical",
        forceConsistentRenderCount: !1,
        data: R.map(function (e) {
          return { data: e, itemKey: e.id.toString() };
        }),
        renderItem: function (t) {
          var e = t.data;
          return u.jsx(
            r("WAWebProductCatalogSelectableProductItem.react"),
            {
              product: e,
              selections: f,
              onClick: function () {
                return q(e);
              },
              active: i,
            },
            e.id.toString(),
          );
        },
        flatListController: l,
        defaultItemHeight: o("WAWebProductCatalogCatalogConstants")
          .PRODUCT_LIST_ITEM_HEIGHT,
      });
      return (
        R.length === 0 &&
          !k &&
          !P &&
          (v
            ? (z = u.jsx(
                o("WAWebCatalogLoadErrorLoadable").CatalogLoadErrorLoadable,
                {
                  ctaDisplayType: o("WAWebCatalogLoadErrorLoadable")
                    .CTADisplayType.BUTTON,
                },
              ))
            : (z = u.jsx(o("WAWebEmptyState.react").ListProducts, {
                hasCatalog: w == null ? void 0 : w.catalogExists,
                catalogLoadError: w.catalogLoadError,
              }))),
        u.jsxs(r("WAWebMultiSelectListHotKeys.react"), {
          active: a.active,
          onEnter: U,
          onLeave: a.onLeaveList,
          ref: h,
          onIndexChange: V,
          children: [
            z,
            k && u.jsx(r("WAWebFlatListLoadingSpinnerItem.react"), {}),
          ],
        })
      );
    }
    ((f.displayName = f.name + " [from " + i.id + "]"), (l.default = f));
  },
  98,
);
