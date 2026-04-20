__d(
  "WAWebOrderDetailItems",
  [
    "fbt",
    "WAWebBizGatingUtils",
    "WAWebCartDeleteIcon.react",
    "WAWebCellFrame.react",
    "WAWebCommonQuantityControls.react",
    "WAWebConfirmPopup.react",
    "WAWebFlex.react",
    "WAWebModalManager",
    "WAWebOrderAddItem",
    "WAWebOrderCatalogProductPrice",
    "WAWebOrderIcons",
    "WAWebOrderItemGetters",
    "WAWebText_DONOTUSE.react",
    "WAWebUISpacing",
    "react",
    "react-compiler-runtime",
    "stylex",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c = u || (u = o("react")),
      d = u,
      m = d.useCallback,
      p = d.useState,
      _ = {
        orderItemsContainer: {
          marginTop: "x7wgvq7",
          marginInlineEnd: "x14z9mp",
          marginBottom: "xh3wvx0",
          marginInlineStart: "x1lziwak",
          $$css: !0,
        },
      };
    function f(e, t) {
      o("WAWebModalManager").ModalManager.open(
        c.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
          tsNavigationData: {
            surface: "unknown",
            viewName: "order-detail-items",
          },
          title: s._(/*BTDS*/ "Delete {order_item_name} from order?", [
            s._param("order_item_name", t),
          ]),
          okText: s._(/*BTDS*/ "Delete"),
          onOK: function () {
            (e == null || e(), o("WAWebModalManager").ModalManager.close());
          },
          cancelText: s._(/*BTDS*/ "Cancel"),
          onCancel: o("WAWebModalManager").closeModalManager,
        }),
      );
    }
    function g(t) {
      var n = o("react-compiler-runtime").c(27),
        a = t.currency,
        i = t.details,
        l = t.items,
        u = t.onAddItem,
        d = t.onDeleteItem,
        m = t.onItemQuantityChange,
        g = t.onPriceChange,
        y = t.priceMap,
        C = p(null),
        b = C[0],
        v = C[1],
        S;
      n[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((S = {}), (n[0] = S))
        : (S = n[0]);
      var R = p(S),
        L = R[0],
        E = R[1],
        k;
      n[1] !== y
        ? ((k = function (t) {
            return t.price != null
              ? o("WAWebOrderCatalogProductPrice").PriceStage.Readonly
              : (y == null ? void 0 : y[t.id]) != null
                ? o("WAWebOrderCatalogProductPrice").PriceStage.EditableFilled
                : o("WAWebOrderCatalogProductPrice").PriceStage.EditableBlank;
          }),
          (n[1] = y),
          (n[2] = k))
        : (k = n[2]);
      var I = k,
        T;
      n[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((T = function (t, n) {
            E(function (e) {
              var r;
              return babelHelpers.extends({}, e, ((r = {}), (r[n.id] = t), r));
            });
          }),
          (n[3] = T))
        : (T = n[3]);
      var D = T,
        x = !!i,
        $;
      n[4] !== a ||
      n[5] !== I ||
      n[6] !== b ||
      n[7] !== d ||
      n[8] !== g ||
      n[9] !== y ||
      n[10] !== L
        ? (($ = function (n, i) {
            var t, l;
            return c.jsxs("div", {
              className: "x6s0dn4 x78zum5",
              children: [
                c.jsx(o("WAWebOrderCatalogProductPrice").CatalogProductPrice, {
                  price: (t = y == null ? void 0 : y[n.id]) != null ? t : null,
                  priceStage: (l = L[n.id]) != null ? l : I(n),
                  currency: a,
                  orderItem: n,
                  onPriceChange: function (t) {
                    return g == null ? void 0 : g(t, n.id);
                  },
                  onPriceStageChange: function (t) {
                    D(t, n);
                  },
                  onEnter: function () {
                    v(null);
                  },
                }),
                i === b &&
                  c.jsx(
                    "div",
                    babelHelpers.extends(
                      {},
                      (e || (e = r("stylex"))).props(
                        o("WAWebUISpacing").uiMargin.start5,
                      ),
                      {
                        children: c.jsx(r("WAWebCartDeleteIcon.react"), {
                          onClick: function (t) {
                            (t.stopPropagation(),
                              f(function () {
                                return d == null ? void 0 : d(i);
                              }, n.name));
                          },
                        }),
                      },
                    ),
                  ),
              ],
            });
          }),
          (n[4] = a),
          (n[5] = I),
          (n[6] = b),
          (n[7] = d),
          (n[8] = g),
          (n[9] = y),
          (n[10] = L),
          (n[11] = $))
        : ($ = n[11]);
      var P = $,
        N;
      n[12] !== u || n[13] !== x
        ? ((N =
            !x &&
            (o("WAWebBizGatingUtils").orderDetailsFromCatalogEnabled() ||
              o("WAWebBizGatingUtils").orderDetailsCustomItemEnabled()) &&
            c.jsx(r("WAWebOrderAddItem"), {
              title: s._(/*BTDS*/ "Add items"),
              onClick: function () {
                return u == null ? void 0 : u();
              },
            })),
          (n[12] = u),
          (n[13] = x),
          (n[14] = N))
        : (N = n[14]);
      var M;
      if (n[15] !== P || n[16] !== l || n[17] !== m || n[18] !== x) {
        var w;
        (n[20] !== P || n[21] !== m || n[22] !== x
          ? ((w = function (n, a) {
              var t,
                i,
                l =
                  (t = (i = n.properties) == null ? void 0 : i.map(h)) != null
                    ? t
                    : [],
                u = s._(/*BTDS*/ "Quantity {item-quantity}", [
                  s._param("item-quantity", n.quantity),
                ]),
                d = c.jsxs(o("WAWebFlex.react").FlexColumn, {
                  children: [
                    x
                      ? u
                      : c.jsx(r("WAWebCommonQuantityControls.react"), {
                          quantity: n.quantity,
                          onAddOneClick: function () {
                            return m == null ? void 0 : m(a, n.quantity + 1);
                          },
                          onRemoveOneClick: function () {
                            return m == null ? void 0 : m(a, n.quantity - 1);
                          },
                        }),
                    l.length > 0 &&
                      c.jsx(o("WAWebFlex.react").FlexColumn, { children: l }),
                  ],
                });
              return c.jsx(
                r("WAWebCellFrame.react"),
                babelHelpers.extends(
                  {
                    testid: "order-item-cell",
                    className: (e || (e = r("stylex")))(
                      a > 0 && o("WAWebUISpacing").uiPadding.top10,
                    ),
                    disabled: !0,
                    image: c.jsx(o("WAWebOrderIcons").OrderItemIcon, {
                      mediaData: n.thumbnailUrl
                        ? o("WAWebOrderItemGetters").getMediaData(n)
                        : null,
                      useCustomIcon: n.isCustomItem,
                    }),
                    primary: c.jsx("span", {
                      className: "x14ug900 x6ikm8r x10wlt62 xlyipyv xuxw1ft",
                      title: n.name,
                      children: n.name,
                    }),
                    secondary: d,
                    theme: "add-order-item",
                    detail: P(n, a),
                  },
                  x
                    ? void 0
                    : {
                        onMouseEnter: function () {
                          return v(a);
                        },
                        onMouseLeave: function () {
                          return v(null);
                        },
                      },
                ),
                a,
              );
            }),
            (n[20] = P),
            (n[21] = m),
            (n[22] = x),
            (n[23] = w))
          : (w = n[23]),
          (M = l.map(w)),
          (n[15] = P),
          (n[16] = l),
          (n[17] = m),
          (n[18] = x),
          (n[19] = M));
      } else M = n[19];
      var A;
      return (
        n[24] !== N || n[25] !== M
          ? ((A = c.jsxs(o("WAWebFlex.react").FlexColumn, {
              align: "stretch",
              xstyle: _.orderItemsContainer,
              children: [N, M],
            })),
            (n[24] = N),
            (n[25] = M),
            (n[26] = A))
          : (A = n[26]),
        A
      );
    }
    function h(e) {
      var t = e[0],
        n = e[1];
      return c.jsx(
        o("WAWebFlex.react").FlexRow,
        {
          children: c.jsx(o("WAWebText_DONOTUSE.react").TextSpan, {
            children: s._(/*BTDS*/ "{propertyName}: {propertyValue}", [
              s._param("propertyName", t),
              s._param("propertyValue", n),
            ]),
          }),
        },
        t + "-" + n,
      );
    }
    ((h.displayName = h.name + " [from " + i.id + "]"), (l.default = g));
  },
  226,
);
