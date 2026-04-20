__d(
  "WAWebOrderCatalogFormDrawer",
  [
    "fbt",
    "WAWebBizGatingUtils",
    "WAWebCurrencyUtils",
    "WAWebDrawer.react",
    "WAWebDrawerBody.react",
    "WAWebDrawerHeader.react",
    "WAWebDrawerSection.react",
    "WAWebFlatListController",
    "WAWebModalManager",
    "WAWebOrderAddItem",
    "WAWebOrderCatalogFormProductsList",
    "WAWebOrderConfirmDiscardModal",
    "WAWebOrderExpansionDifferentCurrencyPopup.react",
    "WAWebOrderTotalPrice",
    "WAWebOrdersExpansionUtils",
    "WAWebUISpacing",
    "react",
    "stylex",
    "sumBy",
    "useWAWebForceUpdate",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c = u || (u = o("react")),
      d = u,
      m = d.useMemo,
      p = d.useState,
      _ = {
        catalogBar: {
          borderTopColor: "xx42vgk",
          borderTopStyle: "x13fuv20",
          borderTopWidth: "x972fbf",
          borderInlineEndWidth: "x10w94by",
          borderBottomWidth: "x1qhh985",
          borderInlineStartWidth: "x14e42zd",
          width: "xh8yej3",
          $$css: !0,
        },
        catalogTitleText: {
          color: "xhslqc4",
          fontSize: "x1nxh6w3",
          fontWeight: "xo1l8bm",
          lineHeight: "x1u7k74",
          $$css: !0,
        },
        drawerSection: {
          display: "x78zum5",
          flexDirection: "xdt5ytf",
          overflowX: "xw2csxc",
          overflowY: "x1odjw0f",
          $$css: !0,
        },
      };
    function f(t) {
      "use no forget";
      var n = t.currency,
        a = t.onAddCustomItem,
        i = t.onAddProducts,
        l = t.onBack,
        u = t.onProductSelectionChange,
        d = t.orderItems,
        f = t.priceMap,
        g = t.productsSelection,
        h = p(!1),
        y = h[0],
        C = h[1],
        b = o("useWAWebForceUpdate").useForceUpdateDONOTUSE(),
        v = m(function () {
          return new (r("WAWebFlatListController"))();
        }, []),
        S = function (t, a, i) {
          if (
            (i === void 0 && (i = !1),
            o("WAWebOrdersExpansionUtils").shouldPreventCatalogProductSelection(
              d,
              n,
            ))
          ) {
            o("WAWebModalManager").ModalManager.open(
              c.jsx(r("WAWebOrderExpansionDifferentCurrencyPopup.react"), {}),
            );
            return;
          }
          (u(t, a), !i && !y && C(!0), b());
        },
        R = r("sumBy")(g.getSelected(), function (e) {
          var t, n;
          return (
            ((t = (n = e.priceAmount1000) != null ? n : f[e.id.toString()]) !=
            null
              ? t
              : 0) * Number(g.getVal(e))
          );
        }),
        L = r("sumBy")(
          d.filter(function (e) {
            return e.isCustomItem;
          }),
          function (e) {
            return e.price * e.quantity;
          },
        ),
        E = R + L;
      return c.jsxs(r("WAWebDrawer.react"), {
        tsNavigationData: {
          surface: "unknown",
          viewName: "order-catalog-form",
        },
        children: [
          c.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
            title: s._(/*BTDS*/ "Add items"),
            type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
            onBack: y
              ? function () {
                  o("WAWebModalManager").ModalManager.open(
                    c.jsx(r("WAWebOrderConfirmDiscardModal"), { onOK: l }),
                  );
                }
              : l,
            focusBackOrCancel: !0,
          }),
          c.jsxs(r("WAWebDrawerBody.react"), {
            children: [
              c.jsxs(r("WAWebDrawerSection.react"), {
                theme: "expand-height",
                xstyle: _.drawerSection,
                children: [
                  o("WAWebBizGatingUtils").orderDetailsCustomItemEnabled() &&
                    c.jsxs(c.Fragment, {
                      children: [
                        c.jsx(r("WAWebOrderAddItem"), {
                          title: s._(/*BTDS*/ "Create new item"),
                          onClick: a,
                        }),
                        c.jsx(
                          "hr",
                          babelHelpers.extends(
                            {},
                            (e || (e = r("stylex"))).props(
                              _.catalogBar,
                              o("WAWebUISpacing").uiMargin.vert0,
                            ),
                          ),
                        ),
                      ],
                    }),
                  c.jsx(
                    "p",
                    babelHelpers.extends(
                      {},
                      (e || (e = r("stylex"))).props(
                        _.catalogTitleText,
                        o("WAWebUISpacing").uiPadding.start16,
                        o("WAWebUISpacing").uiPadding.vert10,
                      ),
                      { children: s._(/*BTDS*/ "Catalog items") },
                    ),
                  ),
                  c.jsx(r("WAWebOrderCatalogFormProductsList"), {
                    className: "x18xmwgd x1iyjqo2 xs83m0k xw2csxc x1odjw0f",
                    productsSelection: g,
                    orderItems: d,
                    flatListController: v,
                    onProductSelectChange: S,
                  }),
                ],
              }),
              c.jsx(r("WAWebDrawerSection.react"), {
                children: c.jsx(o("WAWebOrderTotalPrice").OrderTotalPrice, {
                  xstyle: [
                    o("WAWebUISpacing").uiPadding.all16,
                    o("WAWebUISpacing").uiMargin.top10,
                  ],
                  visible: !0,
                  disabled: !y,
                  totalPrice: o("WAWebCurrencyUtils").formatAmount1000(n, E),
                  testid: "save-products-button",
                  onConfirm: i,
                  title: s._(/*BTDS*/ "Subtotal"),
                  confirmTitle: o(
                    "WAWebBizGatingUtils",
                  ).isOrderContentOptimizationEnabled()
                    ? s._(/*BTDS*/ "Add item")
                    : s._(/*BTDS*/ "Add to order"),
                }),
              }),
            ],
          }),
        ],
      });
    }
    ((f.displayName = f.name + " [from " + i.id + "]"), (l.default = f));
  },
  226,
);
