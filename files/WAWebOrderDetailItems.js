__d(
  "WAWebOrderDetailItems",
  [
    "fbt",
    "WAWebCartDeleteIcon.react",
    "WAWebCellFrame.react",
    "WAWebCommonQuantityControls.react",
    "WAWebConfirmPopup.react",
    "WAWebFlex.react",
    "WAWebModalManager",
    "WAWebOrderAddItem",
    "WAWebOrderCatalogProductPrice",
    "WAWebOrderGatingUtils",
    "WAWebOrderIcons",
    "WAWebOrderItemGetters",
    "WAWebText_DONOTUSE.react",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = e,
      d = c.useCallback,
      m = c.useState,
      p = {
        orderItemsContainer: {
          marginTop: "x7wgvq7",
          marginInlineEnd: "x14z9mp",
          marginBottom: "xh3wvx0",
          marginInlineStart: "x1lziwak",
          $$css: !0,
        },
      };
    function _(e, t) {
      o("WAWebModalManager").ModalManager.open(
        u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
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
    function f(e) {
      var t = o("react-compiler-runtime").c(27),
        n = e.currency,
        a = e.details,
        i = e.items,
        l = e.onAddItem,
        c = e.onDeleteItem,
        d = e.onItemQuantityChange,
        f = e.onPriceChange,
        h = e.priceMap,
        y = m(null),
        C = y[0],
        b = y[1],
        v;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((v = {}), (t[0] = v))
        : (v = t[0]);
      var S = m(v),
        R = S[0],
        L = S[1],
        E;
      t[1] !== h
        ? ((E = function (t) {
            return t.price != null
              ? o("WAWebOrderCatalogProductPrice").PriceStage.Readonly
              : (h == null ? void 0 : h[t.id]) != null
                ? o("WAWebOrderCatalogProductPrice").PriceStage.EditableFilled
                : o("WAWebOrderCatalogProductPrice").PriceStage.EditableBlank;
          }),
          (t[1] = h),
          (t[2] = E))
        : (E = t[2]);
      var k = E,
        I;
      t[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((I = function (t, n) {
            L(function (e) {
              var r;
              return babelHelpers.extends({}, e, ((r = {}), (r[n.id] = t), r));
            });
          }),
          (t[3] = I))
        : (I = t[3]);
      var T = I,
        D = !!a,
        x;
      t[4] !== n ||
      t[5] !== k ||
      t[6] !== C ||
      t[7] !== c ||
      t[8] !== f ||
      t[9] !== h ||
      t[10] !== R
        ? ((x = function (t, a) {
            var e, i;
            return u.jsxs("div", {
              className: "x6s0dn4 x78zum5",
              children: [
                u.jsx(o("WAWebOrderCatalogProductPrice").CatalogProductPrice, {
                  price: (e = h == null ? void 0 : h[t.id]) != null ? e : null,
                  priceStage: (i = R[t.id]) != null ? i : k(t),
                  currency: n,
                  orderItem: t,
                  onPriceChange: function (n) {
                    return f == null ? void 0 : f(n, t.id);
                  },
                  onPriceStageChange: function (n) {
                    T(n, t);
                  },
                  onEnter: function () {
                    b(null);
                  },
                }),
                a === C &&
                  u.jsx("div", {
                    className: "xpcyujq",
                    children: u.jsx(r("WAWebCartDeleteIcon.react"), {
                      onClick: function (n) {
                        (n.stopPropagation(),
                          _(function () {
                            return c == null ? void 0 : c(a);
                          }, t.name));
                      },
                    }),
                  }),
              ],
            });
          }),
          (t[4] = n),
          (t[5] = k),
          (t[6] = C),
          (t[7] = c),
          (t[8] = f),
          (t[9] = h),
          (t[10] = R),
          (t[11] = x))
        : (x = t[11]);
      var $ = x,
        P;
      t[12] !== l || t[13] !== D
        ? ((P =
            !D &&
            (o("WAWebOrderGatingUtils").orderDetailsFromCatalogEnabled() ||
              o("WAWebOrderGatingUtils").orderDetailsCustomItemEnabled()) &&
            u.jsx(r("WAWebOrderAddItem"), {
              title: s._(/*BTDS*/ "Add items"),
              onClick: function () {
                return l == null ? void 0 : l();
              },
            })),
          (t[12] = l),
          (t[13] = D),
          (t[14] = P))
        : (P = t[14]);
      var N;
      if (t[15] !== $ || t[16] !== i || t[17] !== d || t[18] !== D) {
        var M;
        (t[20] !== $ || t[21] !== d || t[22] !== D
          ? ((M = function (t, n) {
              var e,
                a,
                i =
                  (e = (a = t.properties) == null ? void 0 : a.map(g)) != null
                    ? e
                    : [],
                l = s._(/*BTDS*/ "Quantity {item-quantity}", [
                  s._param("item-quantity", t.quantity),
                ]),
                c = u.jsxs(o("WAWebFlex.react").FlexColumn, {
                  children: [
                    D
                      ? l
                      : u.jsx(r("WAWebCommonQuantityControls.react"), {
                          quantity: t.quantity,
                          onAddOneClick: function () {
                            return d == null ? void 0 : d(n, t.quantity + 1);
                          },
                          onRemoveOneClick: function () {
                            return d == null ? void 0 : d(n, t.quantity - 1);
                          },
                        }),
                    i.length > 0 &&
                      u.jsx(o("WAWebFlex.react").FlexColumn, { children: i }),
                  ],
                });
              return u.jsx(
                r("WAWebCellFrame.react"),
                babelHelpers.extends(
                  {
                    testid: "order-item-cell",
                    className: { 0: "", 1: "x889kno" }[(n > 0) << 0],
                    disabled: !0,
                    image: u.jsx(o("WAWebOrderIcons").OrderItemIcon, {
                      mediaData: t.thumbnailUrl
                        ? o("WAWebOrderItemGetters").getMediaData(t)
                        : null,
                      useCustomIcon: t.isCustomItem,
                    }),
                    primary: u.jsx("span", {
                      className: "x14ug900 x6ikm8r x10wlt62 xlyipyv xuxw1ft",
                      title: t.name,
                      children: t.name,
                    }),
                    secondary: c,
                    theme: "add-order-item",
                    detail: $(t, n),
                  },
                  D
                    ? void 0
                    : {
                        onMouseEnter: function () {
                          return b(n);
                        },
                        onMouseLeave: function () {
                          return b(null);
                        },
                      },
                ),
                n,
              );
            }),
            (t[20] = $),
            (t[21] = d),
            (t[22] = D),
            (t[23] = M))
          : (M = t[23]),
          (N = i.map(M)),
          (t[15] = $),
          (t[16] = i),
          (t[17] = d),
          (t[18] = D),
          (t[19] = N));
      } else N = t[19];
      var w;
      return (
        t[24] !== P || t[25] !== N
          ? ((w = u.jsxs(o("WAWebFlex.react").FlexColumn, {
              align: "stretch",
              xstyle: p.orderItemsContainer,
              children: [P, N],
            })),
            (t[24] = P),
            (t[25] = N),
            (t[26] = w))
          : (w = t[26]),
        w
      );
    }
    function g(e) {
      var t = e[0],
        n = e[1];
      return u.jsx(
        o("WAWebFlex.react").FlexRow,
        {
          children: u.jsx(o("WAWebText_DONOTUSE.react").TextSpan, {
            children: s._(/*BTDS*/ "{propertyName}: {propertyValue}", [
              s._param("propertyName", t),
              s._param("propertyValue", n),
            ]),
          }),
        },
        t + "-" + n,
      );
    }
    ((g.displayName = g.name + " [from " + i.id + "]"), (l.default = f));
  },
  226,
);
