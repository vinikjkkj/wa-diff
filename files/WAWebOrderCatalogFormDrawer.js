__d(
  "WAWebOrderCatalogFormDrawer",
  [
    "fbt",
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
    "WAWebOrderGatingUtils",
    "WAWebOrderTotalPrice",
    "WAWebOrdersExpansionUtils",
    "WDSMargins.stylex",
    "WDSPaddings.stylex",
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
        marginTop10: { marginTop: "x1anpbxc", $$css: !0 },
        paddingBlock10: {
          paddingTop: "x889kno",
          paddingBottom: "x1a8lsjc",
          $$css: !0,
        },
      },
      f = {
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
    function g(t) {
      "use no forget";
      var n = t.currency,
        a = t.onAddCustomItem,
        i = t.onAddProducts,
        l = t.onBack,
        u = t.onProductSelectionChange,
        d = t.orderItems,
        g = t.priceMap,
        h = t.productsSelection,
        y = p(!1),
        C = y[0],
        b = y[1],
        v = o("useWAWebForceUpdate").useForceUpdateDONOTUSE(),
        S = m(function () {
          return new (r("WAWebFlatListController"))();
        }, []),
        R = function (t, a, i) {
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
          (u(t, a), !i && !C && b(!0), v());
        },
        L = r("sumBy")(h.getSelected(), function (e) {
          var t, n;
          return (
            ((t = (n = e.priceAmount1000) != null ? n : g[e.id.toString()]) !=
            null
              ? t
              : 0) * Number(h.getVal(e))
          );
        }),
        E = r("sumBy")(
          d.filter(function (e) {
            return e.isCustomItem;
          }),
          function (e) {
            return e.price * e.quantity;
          },
        ),
        k = L + E;
      return c.jsxs(r("WAWebDrawer.react"), {
        tsNavigationData: {
          surface: "unknown",
          viewName: "order-catalog-form",
        },
        children: [
          c.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
            title: s._(/*BTDS*/ "Add items"),
            type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
            onBack: C
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
                xstyle: f.drawerSection,
                children: [
                  o("WAWebOrderGatingUtils").orderDetailsCustomItemEnabled() &&
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
                              f.catalogBar,
                              o("WDSMargins.stylex").wdsMargins.marginVer0,
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
                        f.catalogTitleText,
                        o("WDSPaddings.stylex").wdsPaddings.paddingStart16,
                        _.paddingBlock10,
                      ),
                      { children: s._(/*BTDS*/ "Catalog items") },
                    ),
                  ),
                  c.jsx(r("WAWebOrderCatalogFormProductsList"), {
                    className: "x18xmwgd x1iyjqo2 xs83m0k xw2csxc x1odjw0f",
                    productsSelection: h,
                    orderItems: d,
                    flatListController: S,
                    onProductSelectChange: R,
                  }),
                ],
              }),
              c.jsx(r("WAWebDrawerSection.react"), {
                children: c.jsx(o("WAWebOrderTotalPrice").OrderTotalPrice, {
                  xstyle: [
                    o("WDSPaddings.stylex").wdsPaddings.padding16,
                    _.marginTop10,
                  ],
                  visible: !0,
                  disabled: !C,
                  totalPrice: o("WAWebCurrencyUtils").formatAmount1000({
                    amount1000: k,
                    currency: n,
                  }),
                  testid: "save-products-button",
                  onConfirm: i,
                  title: s._(/*BTDS*/ "Subtotal"),
                  confirmTitle: o(
                    "WAWebOrderGatingUtils",
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
    ((g.displayName = g.name + " [from " + i.id + "]"), (l.default = g));
  },
  226,
);
