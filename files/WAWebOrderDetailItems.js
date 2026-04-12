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
      var n = t.currency,
        a = t.details,
        i = t.items,
        l = t.onAddItem,
        u = t.onDeleteItem,
        d = t.onItemQuantityChange,
        g = t.onPriceChange,
        h = t.priceMap,
        y = p(null),
        C = y[0],
        b = y[1],
        v = p({}),
        S = v[0],
        R = v[1],
        L = m(
          function (e) {
            return e.price != null
              ? o("WAWebOrderCatalogProductPrice").PriceStage.Readonly
              : (h == null ? void 0 : h[e.id]) != null
                ? o("WAWebOrderCatalogProductPrice").PriceStage.EditableFilled
                : o("WAWebOrderCatalogProductPrice").PriceStage.EditableBlank;
          },
          [h],
        ),
        E = m(function (e, t) {
          R(function (n) {
            var r;
            return babelHelpers.extends({}, n, ((r = {}), (r[t.id] = e), r));
          });
        }, []),
        k = !!a,
        I = function (a, i) {
          var t, l;
          return c.jsxs("div", {
            className: "x6s0dn4 x78zum5",
            children: [
              c.jsx(o("WAWebOrderCatalogProductPrice").CatalogProductPrice, {
                price: (t = h == null ? void 0 : h[a.id]) != null ? t : null,
                priceStage: (l = S[a.id]) != null ? l : L(a),
                currency: n,
                orderItem: a,
                onPriceChange: function (t) {
                  return g == null ? void 0 : g(t, a.id);
                },
                onPriceStageChange: function (t) {
                  E(t, a);
                },
                onEnter: function () {
                  b(null);
                },
              }),
              i === C &&
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
                              return u == null ? void 0 : u(i);
                            }, a.name));
                        },
                      }),
                    },
                  ),
                ),
            ],
          });
        };
      return c.jsxs(o("WAWebFlex.react").FlexColumn, {
        align: "stretch",
        xstyle: _.orderItemsContainer,
        children: [
          !k &&
            (o("WAWebBizGatingUtils").orderDetailsFromCatalogEnabled() ||
              o("WAWebBizGatingUtils").orderDetailsCustomItemEnabled()) &&
            c.jsx(r("WAWebOrderAddItem"), {
              title: s._(/*BTDS*/ "Add items"),
              onClick: function () {
                return l == null ? void 0 : l();
              },
            }),
          i.map(function (t, n) {
            var a,
              i,
              l =
                (a =
                  (i = t.properties) == null
                    ? void 0
                    : i.map(function (e) {
                        var t = e[0],
                          n = e[1];
                        return c.jsx(
                          o("WAWebFlex.react").FlexRow,
                          {
                            children: c.jsx(
                              o("WAWebText_DONOTUSE.react").TextSpan,
                              {
                                children: s._(
                                  /*BTDS*/ "{propertyName}: {propertyValue}",
                                  [
                                    s._param("propertyName", t),
                                    s._param("propertyValue", n),
                                  ],
                                ),
                              },
                            ),
                          },
                          t + "-" + n,
                        );
                      })) != null
                  ? a
                  : [],
              u = s._(/*BTDS*/ "Quantity {item-quantity}", [
                s._param("item-quantity", t.quantity),
              ]),
              m = c.jsxs(o("WAWebFlex.react").FlexColumn, {
                children: [
                  k
                    ? u
                    : c.jsx(r("WAWebCommonQuantityControls.react"), {
                        quantity: t.quantity,
                        onAddOneClick: function () {
                          return d == null ? void 0 : d(n, t.quantity + 1);
                        },
                        onRemoveOneClick: function () {
                          return d == null ? void 0 : d(n, t.quantity - 1);
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
                  testid: void 0,
                  className: (e || (e = r("stylex")))(
                    n > 0 && o("WAWebUISpacing").uiPadding.top10,
                  ),
                  disabled: !0,
                  image: c.jsx(o("WAWebOrderIcons").OrderItemIcon, {
                    mediaData: t.thumbnailUrl
                      ? o("WAWebOrderItemGetters").getMediaData(t)
                      : null,
                    useCustomIcon: t.isCustomItem,
                  }),
                  primary: c.jsx("span", {
                    className: "x14ug900 x6ikm8r x10wlt62 xlyipyv xuxw1ft",
                    title: t.name,
                    children: t.name,
                  }),
                  secondary: m,
                  theme: "add-order-item",
                  detail: I(t, n),
                },
                k
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
        ],
      });
    }
    ((g.displayName = g.name + " [from " + i.id + "]"), (l.default = g));
  },
  226,
);
