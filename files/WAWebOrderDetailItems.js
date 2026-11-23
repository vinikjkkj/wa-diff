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
    "WDSText.react",
    "react",
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
          title: s._(/*BTDS*/ "", [s._param("order_item_name", t)]),
          okText: s._(/*BTDS*/ ""),
          onOK: function () {
            (e == null || e(), o("WAWebModalManager").ModalManager.close());
          },
          cancelText: s._(/*BTDS*/ ""),
          onCancel: o("WAWebModalManager").closeModalManager,
        }),
      );
    }
    function f(e) {
      var t = e.currency,
        n = e.details,
        a = e.items,
        i = e.onAddItem,
        l = e.onDeleteItem,
        c = e.onItemQuantityChange,
        f = e.onPriceChange,
        g = e.priceMap,
        h = m(null),
        y = h[0],
        C = h[1],
        b = m({}),
        v = b[0],
        S = b[1],
        R = d(
          function (e) {
            return e.price != null
              ? o("WAWebOrderCatalogProductPrice").PriceStage.Readonly
              : (g == null ? void 0 : g[e.id]) != null
                ? o("WAWebOrderCatalogProductPrice").PriceStage.EditableFilled
                : o("WAWebOrderCatalogProductPrice").PriceStage.EditableBlank;
          },
          [g],
        ),
        L = d(function (e, t) {
          S(function (n) {
            var r;
            return babelHelpers.extends({}, n, ((r = {}), (r[t.id] = e), r));
          });
        }, []),
        E = !!n,
        k = function (n, a) {
          var e, i;
          return u.jsxs("div", {
            className: "x6s0dn4 x78zum5",
            children: [
              u.jsx(o("WAWebOrderCatalogProductPrice").CatalogProductPrice, {
                price: (e = g == null ? void 0 : g[n.id]) != null ? e : null,
                priceStage: (i = v[n.id]) != null ? i : R(n),
                currency: t,
                orderItem: n,
                onPriceChange: function (t) {
                  return f == null ? void 0 : f(t, n.id);
                },
                onPriceStageChange: function (t) {
                  L(t, n);
                },
                onEnter: function () {
                  C(null);
                },
              }),
              a === y &&
                u.jsx("div", {
                  className: "xpcyujq",
                  children: u.jsx(r("WAWebCartDeleteIcon.react"), {
                    onClick: function (t) {
                      (t.stopPropagation(),
                        _(function () {
                          return l == null ? void 0 : l(a);
                        }, n.name));
                    },
                  }),
                }),
            ],
          });
        };
      return u.jsxs(o("WAWebFlex.react").FlexColumn, {
        align: "stretch",
        xstyle: p.orderItemsContainer,
        children: [
          !E &&
            (o("WAWebOrderGatingUtils").orderDetailsFromCatalogEnabled() ||
              o("WAWebOrderGatingUtils").orderDetailsCustomItemEnabled()) &&
            u.jsx(r("WAWebOrderAddItem"), {
              title: s._(/*BTDS*/ ""),
              onClick: function () {
                return i == null ? void 0 : i();
              },
            }),
          a.map(function (e, t) {
            var n,
              a,
              i =
                (n =
                  (a = e.properties) == null
                    ? void 0
                    : a.map(function (e) {
                        var t = e[0],
                          n = e[1];
                        return u.jsx(
                          o("WAWebFlex.react").FlexRow,
                          {
                            children: u.jsx(r("WDSText.react"), {
                              type: "Body2",
                              colorName: "contentDeemphasized",
                              testid: "order-detail-variant-property",
                              children: s._(/*BTDS*/ "", [
                                s._param("propertyName", t),
                                s._param("propertyValue", n),
                              ]),
                            }),
                          },
                          t + "-" + n,
                        );
                      })) != null
                  ? n
                  : [],
              l = s._(/*BTDS*/ "", [s._param("item-quantity", e.quantity)]),
              d = u.jsxs(o("WAWebFlex.react").FlexColumn, {
                children: [
                  E
                    ? l
                    : u.jsx(r("WAWebCommonQuantityControls.react"), {
                        quantity: e.quantity,
                        onAddOneClick: function () {
                          return c == null ? void 0 : c(t, e.quantity + 1);
                        },
                        onRemoveOneClick: function () {
                          return c == null ? void 0 : c(t, e.quantity - 1);
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
                  className: { 0: "", 1: "x889kno" }[(t > 0) << 0],
                  disabled: !0,
                  image: u.jsx(o("WAWebOrderIcons").OrderItemIcon, {
                    mediaData: e.thumbnailUrl
                      ? o("WAWebOrderItemGetters").getMediaData(e)
                      : null,
                    useCustomIcon: e.isCustomItem,
                  }),
                  primary: u.jsx("span", {
                    className: "x14ug900 x6ikm8r x10wlt62 xlyipyv xuxw1ft",
                    title: e.name,
                    children: e.name,
                  }),
                  secondary: d,
                  theme: "add-order-item",
                  detail: k(e, t),
                },
                E
                  ? void 0
                  : {
                      onMouseEnter: function () {
                        return C(t);
                      },
                      onMouseLeave: function () {
                        return C(null);
                      },
                    },
              ),
              t,
            );
          }),
        ],
      });
    }
    ((f.displayName = f.name + " [from " + i.id + "]"), (l.default = f));
  },
  226,
);
