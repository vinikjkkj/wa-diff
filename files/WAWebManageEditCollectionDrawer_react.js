__d(
  "WAWebManageEditCollectionDrawer.react",
  [
    "fbt",
    "WAAbortError",
    "WAWebBizCatalogUtils",
    "WAWebCheckmarkMediumIcon.react",
    "WAWebCollectionsFolderIcon.react",
    "WAWebDrawer.react",
    "WAWebDrawerBody.react",
    "WAWebDrawerContext",
    "WAWebDrawerHeader.react",
    "WAWebFlatListController",
    "WAWebFlatListLoadingSpinnerItem.react",
    "WAWebManageActions",
    "WAWebManageCollectionProductsSelectionList.react",
    "WAWebMultiSelection",
    "WAWebNoop",
    "WAWebProductCatalogCatalogConstants",
    "WAWebProductCatalogContext",
    "WAWebProductCollectionLogEvents",
    "WAWebQplFlowWrapper",
    "WAWebRichTextField.react",
    "WAWebRound.react",
    "WAWebSingleSelection",
    "WAWebSpinner.react",
    "WAWebUISpacing",
    "asyncToGeneratorRuntime",
    "qpl",
    "react",
    "react-compiler-runtime",
    "stylex",
    "useWAWebForceUpdate",
    "useWAWebThrottledCallback",
    "useWAWebUnmountSignal",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e = ["ref"],
      u,
      c,
      d = c || (c = o("react")),
      m = c,
      p = m.useEffect,
      _ = m.useMemo,
      f = m.useState,
      g = {
        footer: {
          zIndex: "xfo81ep",
          boxSizing: "x9f619",
          display: "x78zum5",
          alignItems: "x6s0dn4",
          justifyContent: "x1qughib",
          width: "xh8yej3",
          height: "xpyat2d",
          color: "x17t9dm2",
          backgroundColor: "x1280gxy",
          $$css: !0,
        },
        nameIcon: {
          position: "x1n2onr6",
          top: "xyc4j8s",
          display: "x1rg5ohu",
          width: "xni59qk",
          transform: "x1a33avv",
          $$css: !0,
        },
        nameEdit: {
          display: "x1rg5ohu",
          width: "x65xoit",
          height: "xnxb3zj",
          verticalAlign: "x16dsc37",
          $$css: !0,
        },
        operation: { color: "x1v5yvga", $$css: !0 },
      },
      h = r("qpl")._(774777483, "3443");
    function y(e) {
      var t = o("react-compiler-runtime").c(7),
        n = e.errorName,
        r = e.onChange,
        a = e.value,
        i;
      t[0] !== r
        ? ((i = function (t) {
            var e = t.text;
            r(e);
          }),
          (t[0] = r),
          (t[1] = i))
        : (i = t[1]);
      var l;
      t[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((l = s._(/*BTDS*/ "New collection")), (t[2] = l))
        : (l = t[2]);
      var u;
      return (
        t[3] !== n || t[4] !== i || t[5] !== a
          ? ((u = d.jsx(o("WAWebRichTextField.react").RichTextField, {
              editable: !0,
              focusOnMount: !0,
              showRemaining: !0,
              value: a,
              onChange: i,
              inputPlaceholder: l,
              theme: "text-input",
              error: n,
              maxLength: 30,
            })),
            (t[3] = n),
            (t[4] = i),
            (t[5] = a),
            (t[6] = u))
          : (u = t[6]),
        u
      );
    }
    function C(e) {
      var t = o("react-compiler-runtime").c(10),
        n = e.onClick,
        a = e.updated,
        i;
      t[0] !== a
        ? ((i = s._(
            /*BTDS*/ '_j{"*":"{updated} items updated","_1":"1 item updated"}',
            [s._plural(a, "updated")],
          )),
          (t[0] = a),
          (t[1] = i))
        : (i = t[1]);
      var l = i,
        c;
      t[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((c = (u || (u = r("stylex"))).props([
            g.footer,
            o("WAWebUISpacing").uiPadding.horiz24,
          ])),
          (t[2] = c))
        : (c = t[2]);
      var m;
      t[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((m = (u || (u = r("stylex"))).props(
            o("WAWebUISpacing").uiPadding.all12,
          )),
          (t[3] = m))
        : (m = t[3]);
      var p;
      t[4] === Symbol.for("react.memo_cache_sentinel")
        ? ((p = d.jsx(
            o("WAWebCheckmarkMediumIcon.react").CheckmarkMediumIcon,
            {},
          )),
          (t[4] = p))
        : (p = t[4]);
      var _;
      t[5] !== n
        ? ((_ = d.jsx(
            "div",
            babelHelpers.extends({}, m, {
              children: d.jsx(o("WAWebRound.react").Round, {
                large: !0,
                onClick: n,
                children: p,
              }),
            }),
          )),
          (t[5] = n),
          (t[6] = _))
        : (_ = t[6]);
      var f;
      return (
        t[7] !== l || t[8] !== _
          ? ((f = d.jsxs(
              "div",
              babelHelpers.extends({}, c, { children: [l, _] }),
            )),
            (t[7] = l),
            (t[8] = _),
            (t[9] = f))
          : (f = t[9]),
        f
      );
    }
    function b(e) {
      var t = o("react-compiler-runtime").c(13),
        n = e.collection,
        a = e.handleScroll,
        i = e.nameInfo,
        l = e.selectionList,
        c = e.syncInfo,
        m = i.errorName,
        p = i.handleNameChange,
        _ = i.name,
        f = c.handleSave,
        h = c.isUpdating,
        b = c.loadingMore,
        v = c.syncSelection,
        S;
      t[0] !== h
        ? ((S = h
            ? d.jsx("div", {
                className: "x10l6tqk xh0rhid xbudbmw xupqr0c x11lhmoz",
                children: d.jsx(o("WAWebSpinner.react").Spinner, {
                  size: 50,
                  stroke: 3,
                }),
              })
            : null),
          (t[0] = h),
          (t[1] = S))
        : (S = t[1]);
      var R = S,
        L = v(),
        E;
      return (
        t[2] !== n ||
        t[3] !== m ||
        t[4] !== p ||
        t[5] !== f ||
        t[6] !== a ||
        t[7] !== b ||
        t[8] !== _ ||
        t[9] !== l ||
        t[10] !== R ||
        t[11] !== L
          ? ((E = d.jsx(o("WAWebDrawerContext").DrawerContext.Consumer, {
              children: function (t) {
                var e = o(
                  "WAWebProductCatalogContext",
                ).getProductCatalogContext(t);
                return d.jsxs(d.Fragment, {
                  children: [
                    R,
                    d.jsxs("div", {
                      className: "x1n2onr6",
                      children: [
                        d.jsx(
                          "span",
                          babelHelpers.extends(
                            {},
                            (u || (u = r("stylex"))).props([
                              g.nameIcon,
                              o("WAWebUISpacing").uiMargin.start7,
                            ]),
                            {
                              children: d.jsx(
                                o("WAWebCollectionsFolderIcon.react")
                                  .CollectionsFolderIcon,
                                {},
                              ),
                            },
                          ),
                        ),
                        d.jsx(
                          "span",
                          babelHelpers.extends(
                            {},
                            u.props([
                              g.nameEdit,
                              o("WAWebUISpacing").uiPadding.top10,
                            ]),
                            {
                              children: d.jsx(y, {
                                onChange: p,
                                value: _,
                                errorName: m,
                              }),
                            },
                          ),
                        ),
                      ],
                    }),
                    d.jsx(
                      "div",
                      babelHelpers.extends(
                        {},
                        u.props([
                          g.operation,
                          o("WAWebUISpacing").uiPadding.top5,
                          o("WAWebUISpacing").uiPadding.end0,
                          o("WAWebUISpacing").uiPadding.bottom20,
                          o("WAWebUISpacing").uiPadding.start10,
                        ]),
                        {
                          children: n
                            ? s._(/*BTDS*/ "Update items")
                            : s._(/*BTDS*/ "Add items"),
                        },
                      ),
                    ),
                    d.jsxs("div", {
                      className: "xb8htw9 xw2csxc x1odjw0f",
                      onScroll: a,
                      children: [
                        l,
                        b &&
                          d.jsx("div", {
                            className: "xrvj5dj xl56j7k x1qx5ct2",
                            children: d.jsx(
                              r("WAWebFlatListLoadingSpinnerItem.react"),
                              {},
                            ),
                          }),
                      ],
                    }),
                    L > 0 || (n && _ !== n.name)
                      ? d.jsx(C, {
                          updated: L,
                          onClick: function () {
                            f(e);
                          },
                        })
                      : null,
                  ],
                });
              },
            })),
            (t[2] = n),
            (t[3] = m),
            (t[4] = p),
            (t[5] = f),
            (t[6] = a),
            (t[7] = b),
            (t[8] = _),
            (t[9] = l),
            (t[10] = R),
            (t[11] = L),
            (t[12] = E))
          : (E = t[12]),
        E
      );
    }
    function v(t) {
      "use no forget";
      var a,
        i = t.ref,
        l = babelHelpers.objectWithoutPropertiesLoose(t, e),
        u = l.catalog,
        c = l.collection,
        m = l.onBack,
        g = _(function () {
          return new (r("WAWebSingleSelection"))([], function (e) {
            return e.id.toString();
          });
        }, []),
        y = _(function () {
          return new (r("WAWebMultiSelection"))([], function (e) {
            return e.id.toString();
          });
        }, []),
        C = _(function () {
          return new (r("WAWebFlatListController"))();
        }, []),
        v = o("useWAWebForceUpdate").useForceUpdateDONOTUSE(),
        S = r("useWAWebUnmountSignal")(),
        R = f(null),
        L = R[0],
        E = R[1],
        k = f(c == null ? void 0 : c.name),
        I = k[0],
        T = k[1],
        D = f(c == null ? void 0 : c.name),
        x = D[0],
        $ = D[1],
        P = f(null),
        N = P[0],
        M = P[1],
        w = f(!1),
        A = w[0],
        F = w[1],
        O = f(!0),
        B = O[0],
        W = O[1],
        q = function () {
          var e = new (o("WAWebBizCatalogUtils").CollectionsContentDataSource)(
              u,
              o("WAWebProductCatalogCatalogConstants").PRODUCT_LIST_ITEM_HEIGHT,
              c == null ? void 0 : c.id,
            ),
            t = new (o("WAWebBizCatalogUtils").CatalogListItemScrollHelper)(e);
          (E(t),
            e
              .loadInitialItems()
              .then(function () {
                if (S.aborted) throw new (o("WAAbortError").AbortError)();
                (W(!1), v());
              })
              .catch(o("WAAbortError").catchAbort(r("WAWebNoop"))));
        };
      p(function () {
        q();
      }, []);
      var U = function (t) {
          (T(t), N != null && t && M(null));
        },
        V = r("useWAWebThrottledCallback")(function (e) {
          var t = e.currentTarget;
          (L != null && L.willLoadMore(t) && W(!0),
            L == null ||
              L.onScroll(e, t)
                .then(function (e) {
                  (W(!1), e && W(!1));
                })
                .catch(function (e) {
                  throw (W(!1), e);
                }));
        }, 100),
        H = function (t) {
          return y.list.findIndex(function (e) {
            return e.id.toString() === t;
          });
        },
        G = function (t) {
          return H(t) !== -1;
        },
        z = function (t) {
          var e = H(t);
          return e !== -1 && !!y.selected[e];
        },
        j = function (t, n, r) {
          r === void 0 && (r = !0);
          var e = t.id.toString(),
            o = H(e);
          o !== -1 ? y.set(o, n, r) : y.setVal(t, n, r);
        },
        K = function () {
          var e = u.productCollection.getProductModels(!0),
            t = 0;
          return (
            e.forEach(function (e) {
              var n = e.id.toString();
              G(n) ? e.checkmark !== z(n) && t++ : y.setVal(e, e.checkmark);
            }),
            t
          );
        },
        Q = function () {
          var e = u.productCollection.getProductModels(!0),
            t = [],
            n = [];
          return (
            e.forEach(function (e) {
              var r = z(e.id.toString());
              e.checkmark !== r && (r ? n.push(e) : t.push(e));
            }),
            { added: n, removed: t }
          );
        },
        X = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
            var t = o("WAWebProductCatalogContext").getProductCatalogContext(e);
            if (I == null || I.trim() === "") M(s._(/*BTDS*/ "Name required"));
            else {
              (o("WAWebQplFlowWrapper").QPL.markerStart(h), F(!0));
              var n = Q(),
                r = n.added,
                a = n.removed,
                i = I !== x;
              (o("WAWebQplFlowWrapper").QPL.markerAnnotate(h, {
                bool: { IsNew: !c },
                int: { ProductsAdded: r.length },
              }),
                c &&
                  o("WAWebQplFlowWrapper").QPL.markerAnnotate(h, {
                    bool: { Renamed: i },
                    int: { ProductsDeleted: a.length },
                  }));
              try {
                var l = yield o("WAWebManageActions").handleCollectionSave(
                  u,
                  c,
                  I,
                  r,
                  a,
                  t,
                );
                if (l) {
                  if ((m(), c)) {
                    var d = c.id;
                    (i &&
                      (o(
                        "WAWebProductCollectionLogEvents",
                      ).logCollectionRenamed({
                        catalogContext: t,
                        collectionId: d,
                      }),
                      $(I)),
                      o(
                        "WAWebProductCollectionLogEvents",
                      ).logCollectionItemsAssignment({
                        collectionId: d,
                        addedCount: r.length,
                        removedCount: a.length,
                        catalogContext: t,
                      }));
                  }
                  o("WAWebQplFlowWrapper").QPL.markerEnd(h, 2);
                } else (F(!1), o("WAWebQplFlowWrapper").QPL.markerDrop(h));
              } catch (e) {
                (F(!1), o("WAWebQplFlowWrapper").QPL.markerEnd(h, 3));
              }
            }
          });
          return function (n) {
            return e.apply(this, arguments);
          };
        })(),
        Y = {
          0: "x1n2onr6 xupqr0c x78zum5 x98rzlu xdt5ytf x6ikm8r x1odjw0f",
          1: "x1n2onr6 xupqr0c x78zum5 x98rzlu xdt5ytf x6ikm8r x1odjw0f x47corl xbyyjgo",
        }[!!A << 0],
        J =
          ((a = l.collection) == null ? void 0 : a.name) ||
          s._(/*BTDS*/ "New collection"),
        Z = function (t) {
          X(t);
        };
      return d.jsxs(r("WAWebDrawer.react"), {
        ref: i,
        theme: "products",
        onDrop: l.onBack,
        tsNavigationData: {
          surface: c
            ? "smb-catalog-edit-collection"
            : "smb-catalog-new-collection",
        },
        children: [
          d.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
            title: J,
            type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
            onBack: l.onBack,
          }),
          d.jsx(r("WAWebDrawerBody.react"), {
            className: Y,
            flatListControllers: [C],
            children: d.jsx(b, {
              nameInfo: { name: I, errorName: N, handleNameChange: U },
              syncInfo: {
                isUpdating: A,
                loadingMore: B,
                syncSelection: K,
                handleSave: Z,
              },
              collection: c,
              handleScroll: V,
              selectionList: d.jsx(
                r("WAWebManageCollectionProductsSelectionList.react"),
                {
                  catalog: u,
                  flatListController: C,
                  active: g,
                  selections: y,
                  onProductSelect: j,
                  onSelectionChanged: v,
                },
              ),
            }),
          }),
        ],
      });
    }
    ((v.displayName = v.name + " [from " + i.id + "]"), (l.default = v));
  },
  226,
);
