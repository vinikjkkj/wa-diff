__d(
  "WAFlowsShoppingCustomActionCallbacks",
  [
    "$InternalEnum",
    "ReactRouterDOM",
    "WAFlowsCartUtils.react",
    "WAFlowsEntryPointControllerContext.react",
    "WAFlowsEnvContext.react",
    "WAFlowsLocalization",
    "WAFlowsNativeWAMLogger",
    "WAFlowsOpenExternalURI",
    "WAFlowsShoppingCartStateUtils",
    "WAFlowsShoppingJSBridges",
    "WAFlowsShoppingNavigationUtils",
    "WAFlowsShoppingStateUtils",
    "WAFlowsSnackbarUtils",
    "WAFlowsStateProvider.react",
    "WAFlowsTypes",
    "WAFlowsWELJActionCreators",
    "getErrorSafe",
    "react",
    "useAsyncEffect",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = s.useCallback,
      c = s.useContext,
      d = s.useMemo,
      m = s.useRef,
      p = s.useState;
    function _(e, t, n, a, i, l) {
      var s,
        u,
        c,
        d = t.getScreenLayoutType(e),
        m =
          (s = (u = t.getScreenMeta(e)) == null ? void 0 : u.terminal) != null
            ? s
            : !1,
        p = (c = n.internal) == null ? void 0 : c.shopping,
        _ =
          o("WAFlowsShoppingCartStateUtils").getCartItemsNumber(p) -
          i.quantity +
          l,
        f = r("WAFlowsNativeWAMLogger")(a),
        g = f.logWAMScreenActionEvent;
      g({
        flows_current_screen: e,
        flows_current_screen_layout_type: d,
        flows_next_screen: e,
        flows_next_screen_layout_type: d,
        is_terminal_screen: m,
        click_type: "CTA",
        click_name: "cart_quantity_change",
        flow_screen_data: '{"shopping_cart_items_count": ' + _ + "}",
      });
    }
    function f(e, t, n, r, a, i, l, s, u) {
      if ((!t && !n.isDraft() && _(r, n, a, i, l, s), u)) {
        var c = {
          totalAmount: o("WAFlowsCartUtils.react").getSubtotalValue(u),
          currency: l.currency,
        };
        e(
          o("WAFlowsWELJActionCreators").createShoppingCartAmountUpdateAction(
            c,
          ),
        );
      }
    }
    var g = n("$InternalEnum")({
        GET_COUPON: "get_coupon",
        APPLY_COUPON: "apply_coupon",
        REMOVE_COUPON: "remove_coupon",
        CREATE_ORDER: "create_order",
      }),
      h = n("$InternalEnum").Mirrored(["CHECKOUT", "GO_BACK", "CONTINUE"]);
    function y(e, t) {
      t === void 0 && (t = !1);
      var n = c(o("WAFlowsStateProvider.react").FlowStateDispatchContext),
        r = o("WAFlowsStateProvider.react").useWAFlowsMeta(),
        a = o("WAFlowsStateProvider.react").useWAFlowsState(),
        i = o("ReactRouterDOM").useHistory(),
        l = o("WAFlowsEnvContext.react").useWAFlowsEnv(),
        s = l.env,
        d = o(
          "WAFlowsEntryPointControllerContext.react",
        ).useWAFlowsEntryPointController(),
        m = d.actionOverrides,
        p = d.invoke,
        h = o(
          "WAFlowsShoppingStateUtils",
        ).isShoppingIntegratedShoppingMessageFlow(a),
        y = u(
          function (e) {
            (n(
              o("WAFlowsWELJActionCreators").createShoppingUpdateCartItemAction(
                [
                  {
                    catalogItemId: h ? e.retailerId : e.catalogItemId,
                    quantity: e.quantity,
                  },
                ],
              ),
            ),
              o("WAFlowsSnackbarUtils").showSnackbar(
                { text: o("WAFlowsLocalization").getFallbackErrorMessage() },
                p,
              ));
          },
          [n, p, h],
        );
      return u(
        function (l, u, c, p, C, b, v) {
          var S = h ? l.retailerId : l.catalogItemId;
          if (
            o(
              "WAFlowsShoppingStateUtils",
            ).isShoppingIntegratedShoppingMessageFlow(a)
          ) {
            if (c) {
              if (
                (n(
                  o(
                    "WAFlowsWELJActionCreators",
                  ).createShoppingUpdateCartItemAction([
                    { catalogItemId: S, quantity: u },
                  ]),
                ),
                v === !0)
              ) {
                var R,
                  L = o(
                    "WAFlowsShoppingNavigationUtils",
                  ).getViewCartScreenIdForShoppingFlow(r),
                  E = o(
                    "WAFlowsWELJActionCreators",
                  ).createExternalDataExchangeAction(
                    L,
                    (R = r == null ? void 0 : r.getScreenExternalData(L)) !=
                      null
                      ? R
                      : [],
                  );
                n(
                  m.externalDataExchangeActionHandler(
                    E,
                    i,
                    void 0,
                    !0,
                    void 0,
                    s,
                  ),
                );
              }
            } else {
              var k,
                I = function (a) {
                  var t,
                    c,
                    d = (t = a == null ? void 0 : a.error) != null ? t : "",
                    p = (c = a == null ? void 0 : a.cart) != null ? c : "";
                  if (d === "") {
                    var _ = u === 0;
                    o(
                      "WAFlowsCartUtils.react",
                    ).syncIntegratedShoppingCartWithStateCart(
                      e,
                      n,
                      i,
                      s,
                      m,
                      r,
                      p,
                      l,
                      _,
                      !1,
                    );
                  }
                },
                T = o("WAFlowsCartUtils.react").getShoppingInCartItems(
                  a,
                  [{ catalogItemId: l.catalogItemId, quantity: u }],
                  b,
                ),
                D = o("WAFlowsCartUtils.react").getInStockItems(
                  T,
                  b != null ? b : [],
                  !0,
                ),
                x =
                  (k = a.internal.shopping) == null ||
                  (k = k.shoppingCart) == null
                    ? void 0
                    : k.coupon;
              C == null ||
                C(
                  g.APPLY_COUPON,
                  D,
                  b != null ? b : [],
                  !0,
                  x == null ? void 0 : x.title,
                  I,
                );
            }
            f(n, t, r, e, a, m, l, u, p);
            return;
          } else if (r.isDraft()) {
            (n(
              o("WAFlowsWELJActionCreators").createShoppingUpdateCartItemAction(
                [{ catalogItemId: S, quantity: u }],
              ),
            ),
              f(n, t, r, e, a, m, l, u, p));
            return;
          } else
            o("WAFlowsShoppingJSBridges")
              .setNativeShoppingCartItem(
                d.invoke,
                babelHelpers.extends({}, l, { quantity: u }),
              )
              .then(function (i) {
                ((i != null && i.success) || y(l),
                  n(
                    o(
                      "WAFlowsWELJActionCreators",
                    ).createShoppingUpdateCartItemAction([
                      { catalogItemId: S, quantity: u },
                    ]),
                  ),
                  t || _(e, r, a, m, l, u));
              })
              .catch(function () {
                return y(l);
              });
        },
        [m, n, d.invoke, s, y, i, h, t, r, e, a],
      );
    }
    function C(e, t) {
      var n = c(o("WAFlowsStateProvider.react").FlowStateDispatchContext),
        r = o("ReactRouterDOM").useHistory(),
        a = o("WAFlowsStateProvider.react").useWAFlowsMeta(),
        i = o("WAFlowsEnvContext.react").useWAFlowsEnv(),
        l = i.env,
        s = o(
          "WAFlowsEntryPointControllerContext.react",
        ).useWAFlowsEntryPointController().actionOverrides,
        d = m(t);
      return u(
        function (t, i) {
          var u = o(
            "WAFlowsShoppingNavigationUtils",
          ).getNextScreenIdForShoppingFlow(
            a,
            o("WAFlowsTypes").WA_FLOWS_LAYOUT_NAMES.CATEGORY_LIST,
          );
          if (
            (n(
              o(
                "WAFlowsWELJActionCreators",
              ).createShoppingCategoryIdUpdateAction(t, i),
            ),
            d.current)
          ) {
            var c;
            d.current.payload = babelHelpers.extends(
              {},
              (c = d.current) == null ? void 0 : c.payload,
              { category_id: t },
            );
          } else
            d.current = {
              name: "navigate",
              payload: { category_id: t },
              next: { name: u, type: "screen" },
            };
          if (d.current.name === "navigate") {
            var m,
              p,
              _,
              f = o("WAFlowsWELJActionCreators").createWELJNavigateAction(
                e,
                d.current.next.name,
                (m = (p = d.current) == null ? void 0 : p.payload) != null
                  ? m
                  : {},
                !0,
              ),
              g = o(
                "WAFlowsWELJActionCreators",
              ).createExternalDataExchangeAction(
                u,
                (_ = a == null ? void 0 : a.getScreenExternalData(u)) != null
                  ? _
                  : [],
              );
            n(
              s.externalDataExchangeActionHandler(
                g,
                r,
                void 0,
                !0,
                void 0,
                l,
                f,
              ),
            );
          } else {
            var h,
              y,
              C,
              b = o("WAFlowsWELJActionCreators").createDataExchangeAction(
                e,
                (h = (y = d.current) == null ? void 0 : y.payload) != null
                  ? h
                  : {},
              ),
              v = o(
                "WAFlowsWELJActionCreators",
              ).createExternalDataExchangeAction(
                e,
                (C = a == null ? void 0 : a.getScreenExternalData(e)) != null
                  ? C
                  : [],
              );
            n(s.externalDataExchangeActionHandler(v, r, b, void 0, void 0, l));
          }
          n(o("WAFlowsWELJActionCreators").createConfigNavbarAction({}));
        },
        [a, n, e, s, r, l],
      );
    }
    function b(e, t) {
      var n = c(o("WAFlowsStateProvider.react").FlowStateDispatchContext),
        r = o("ReactRouterDOM").useHistory(),
        a = o("WAFlowsStateProvider.react").useWAFlowsMeta(),
        i = o("WAFlowsEnvContext.react").useWAFlowsEnv(),
        l = i.env,
        s = o(
          "WAFlowsEntryPointControllerContext.react",
        ).useWAFlowsEntryPointController().actionOverrides,
        d = m(t);
      return u(
        function (t, i, u) {
          var c = o(
            "WAFlowsShoppingNavigationUtils",
          ).getNextScreenIdForShoppingFlow(
            a,
            o("WAFlowsTypes").WA_FLOWS_LAYOUT_NAMES.ITEM_LIST,
          );
          if (
            (n(
              o(
                "WAFlowsWELJActionCreators",
              ).createShoppingCatalogItemIdUpdateAction(t, i, u),
            ),
            d.current)
          ) {
            var m;
            d.current.payload = babelHelpers.extends(
              {},
              (m = d.current) == null ? void 0 : m.payload,
              { catalog_item_id: t, retailer_id: u },
            );
          } else
            d.current = {
              name: "navigate",
              payload: { catalog_item_id: t, retailer_id: u },
              next: { name: c, type: "screen" },
            };
          if (d.current.name === "navigate") {
            var p,
              _,
              f,
              g = o("WAFlowsWELJActionCreators").createWELJNavigateAction(
                e,
                d.current.next.name,
                (p = (_ = d.current) == null ? void 0 : _.payload) != null
                  ? p
                  : {},
                !0,
              ),
              h = o(
                "WAFlowsWELJActionCreators",
              ).createExternalDataExchangeAction(
                c,
                (f = a == null ? void 0 : a.getScreenExternalData(c)) != null
                  ? f
                  : [],
              );
            n(
              s.externalDataExchangeActionHandler(
                h,
                r,
                void 0,
                !0,
                void 0,
                l,
                g,
                !0,
              ),
            );
          } else {
            var y,
              C,
              b,
              v = o("WAFlowsWELJActionCreators").createDataExchangeAction(
                e,
                (y = (C = d.current) == null ? void 0 : C.payload) != null
                  ? y
                  : {},
              ),
              S = o(
                "WAFlowsWELJActionCreators",
              ).createExternalDataExchangeAction(
                e,
                (b = a == null ? void 0 : a.getScreenExternalData(e)) != null
                  ? b
                  : [],
              );
            n(
              s.externalDataExchangeActionHandler(
                S,
                r,
                v,
                void 0,
                void 0,
                l,
                void 0,
                !0,
              ),
            );
          }
        },
        [e, a, n, s, r, l],
      );
    }
    function v(e) {
      var t = c(o("WAFlowsStateProvider.react").FlowStateDispatchContext),
        n = o("ReactRouterDOM").useHistory(),
        r = o("WAFlowsStateProvider.react").useWAFlowsMeta(),
        a = o("WAFlowsStateProvider.react").useWAFlowsState(),
        i = o("WAFlowsEnvContext.react").useWAFlowsEnv(),
        l = i.env,
        s = o(
          "WAFlowsEntryPointControllerContext.react",
        ).useWAFlowsEntryPointController().actionOverrides,
        m =
          o("WAFlowsShoppingStateUtils").isShoppingOffsiteCheckoutMessageFlow(
            a,
          ) ||
          o(
            "WAFlowsShoppingStateUtils",
          ).isShoppingIntegratedShoppingMessageFlow(a)
            ? o("WAFlowsTypes").WA_FLOWS_LAYOUT_NAMES.ITEM_LIST
            : o("WAFlowsTypes").WA_FLOWS_LAYOUT_NAMES.CATEGORY_LIST,
        p = d(
          function () {
            return r.getScreenIdByLayoutType(m);
          },
          [r, m],
        ),
        _ = u(
          function () {
            var a;
            if (p != null) {
              var i = o("WAFlowsWELJActionCreators").createWELJNavigateAction(
                  e,
                  p,
                  {},
                  !0,
                  "navigate",
                ),
                u = o(
                  "WAFlowsWELJActionCreators",
                ).createExternalDataExchangeAction(
                  p,
                  (a = r == null ? void 0 : r.getScreenExternalData(p)) != null
                    ? a
                    : [],
                );
              t(
                s.externalDataExchangeActionHandler(
                  u,
                  n,
                  void 0,
                  !0,
                  void 0,
                  l,
                  i,
                ),
              );
            }
          },
          [e, p, r, t, s, n, l],
        );
      return p != null ? _ : void 0;
    }
    function S(e, t) {
      var n,
        r = c(o("WAFlowsStateProvider.react").FlowStateDispatchContext),
        a = o("ReactRouterDOM").useHistory(),
        i = o("WAFlowsStateProvider.react").useWAFlowsMeta(),
        l = o("WAFlowsStateProvider.react").useWAFlowsState(),
        s = o("WAFlowsEnvContext.react").useWAFlowsEnv(),
        d = s.env,
        p = o(
          "WAFlowsEntryPointControllerContext.react",
        ).useWAFlowsEntryPointController().actionOverrides,
        _ = T(
          (n = i.getScreenIdByLayoutType(
            o("WAFlowsTypes").WA_FLOWS_LAYOUT_NAMES.CART,
          )) != null
            ? n
            : "CART",
        ),
        f = m(t);
      return u(
        function (t, n) {
          var s = o(
            "WAFlowsShoppingNavigationUtils",
          ).getViewCartScreenIdForShoppingFlow(i);
          if (
            (f.current ||
              (f.current = {
                name: "navigate",
                payload: {},
                next: { name: s, type: "screen" },
              }),
            f.current.name === "navigate")
          ) {
            var u,
              c,
              m,
              h = o("WAFlowsWELJActionCreators").createWELJNavigateAction(
                e,
                f.current.next.name,
                (u = (c = f.current) == null ? void 0 : c.payload) != null
                  ? u
                  : {},
                !0,
              ),
              y = o(
                "WAFlowsWELJActionCreators",
              ).createExternalDataExchangeAction(
                s,
                (m = i == null ? void 0 : i.getScreenExternalData(s)) != null
                  ? m
                  : [],
              );
            if (
              (r(
                p.externalDataExchangeActionHandler(
                  y,
                  a,
                  void 0,
                  !0,
                  void 0,
                  d,
                  h,
                ),
              ),
              o(
                "WAFlowsShoppingStateUtils",
              ).isShoppingIntegratedShoppingMessageFlow(l))
            ) {
              var C,
                b,
                v = function (n) {
                  var t,
                    l,
                    s = (t = n == null ? void 0 : n.error) != null ? t : "",
                    u = (l = n == null ? void 0 : n.cart) != null ? l : "";
                  s === "" &&
                    o(
                      "WAFlowsCartUtils.react",
                    ).syncIntegratedShoppingCartWithStateCart(
                      e,
                      r,
                      a,
                      d,
                      p,
                      i,
                      u,
                      null,
                      !1,
                      !0,
                    );
                },
                S =
                  n != null
                    ? n
                    : (C = l.external.CART.external_data.meta_catalog) == null
                      ? void 0
                      : C.products,
                R = o("WAFlowsCartUtils.react").getShoppingInCartItems(
                  l,
                  t != null ? t : [],
                  S,
                ),
                L = o("WAFlowsCartUtils.react").getInStockItems(
                  R,
                  S != null ? S : [],
                  !0,
                ),
                E =
                  (b = l.internal.shopping) == null ||
                  (b = b.shoppingCart) == null
                    ? void 0
                    : b.coupon;
              _ == null ||
                _(
                  g.APPLY_COUPON,
                  L,
                  n != null ? n : [],
                  !0,
                  E == null ? void 0 : E.title,
                  v,
                );
            }
          } else {
            var k,
              I,
              T,
              D = o("WAFlowsWELJActionCreators").createDataExchangeAction(
                e,
                (k = (I = f.current) == null ? void 0 : I.payload) != null
                  ? k
                  : {},
              ),
              x = o(
                "WAFlowsWELJActionCreators",
              ).createExternalDataExchangeAction(
                e,
                (T = i == null ? void 0 : i.getScreenExternalData(e)) != null
                  ? T
                  : [],
              );
            r(
              p.externalDataExchangeActionHandler(
                x,
                a,
                D,
                void 0,
                void 0,
                d,
                void 0,
              ),
            );
          }
        },
        [i, e, r, p, a, d, l, _],
      );
    }
    function R(e) {
      var t = c(o("WAFlowsStateProvider.react").FlowStateDispatchContext),
        n = o("WAFlowsStateProvider.react").useWAFlowsMeta(),
        r = o("WAFlowsEnvContext.react").useWAFlowsEnv(),
        a = r.env,
        i = o("ReactRouterDOM").useHistory(),
        l = o(
          "WAFlowsEntryPointControllerContext.react",
        ).useWAFlowsEntryPointController().actionOverrides;
      return u(
        function (r, s, u) {
          var c;
          t(
            o(
              "WAFlowsWELJActionCreators",
            ).createShoppingCatalogItemIdUpdateAction(r, s, u),
          );
          var d = o(
            "WAFlowsWELJActionCreators",
          ).createExternalDataExchangeAction(
            e,
            (c = n == null ? void 0 : n.getScreenExternalData(e)) != null
              ? c
              : [],
          );
          t(
            l.externalDataExchangeActionHandler(
              d,
              i,
              void 0,
              !0,
              void 0,
              a,
              void 0,
              !0,
            ),
          );
        },
        [n, i, e, t, l, a],
      );
    }
    function L(e) {
      var t = o("WAFlowsEnvContext.react").useWAFlowsEnv(),
        n = t.env,
        a = o("WAFlowsStateProvider.react").useWAFlowsMeta(),
        i = o("WAFlowsStateProvider.react").useWAFlowsState(),
        l = o(
          "WAFlowsEntryPointControllerContext.react",
        ).useWAFlowsEntryPointController(),
        s = l.invoke;
      r("useAsyncEffect")(
        async function () {
          if (
            !(
              !o("WAFlowsShoppingJSBridges").isNativeCartIntegrationEnabled(
                a,
              ) ||
              o(
                "WAFlowsShoppingStateUtils",
              ).isShoppingIntegratedShoppingMessageFlow(i)
            )
          ) {
            var t = await o("WAFlowsShoppingJSBridges").getRawNativeCart(
                l.invoke,
                n.isJestTesting,
              ),
              r = await E(l.invoke, t, e);
            r &&
              o("WAFlowsSnackbarUtils").showSnackbar(
                {
                  text: o(
                    "WAFlowsLocalization",
                  ).getCartChangedSinceLastVisitFbt(),
                },
                s,
              );
          }
        },
        [e, l.invoke, n.isJestTesting],
      );
    }
    async function E(e, t, n) {
      if ((t == null ? void 0 : t.cart) == null || t.cart.length === 0)
        return n.length > 0;
      var r = n.reduce(function (e, t) {
          return e.set(t.id, t);
        }, new Map()),
        o = !1;
      for (var a of t.cart) {
        var i,
          l,
          s = r.get(a.id);
        (s == null ||
          a.title !== s.name ||
          a.max_available !== s.max_available ||
          a.price_1000 !== Math.round(s.price * 1e3) ||
          ((i = a.sale_price_1000) != null ? i : 0) !==
            Math.round(((l = s.sale_price) != null ? l : 0) * 1e3)) &&
          (await k(e, s, a), (o = !0));
      }
      return o;
    }
    async function k(e, t, n) {
      if (t == null)
        await o("WAFlowsShoppingJSBridges").setRawNativeShoppingCartItem(
          e,
          babelHelpers.extends({}, n, { quantity: 0 }),
        );
      else {
        var r;
        await o("WAFlowsShoppingJSBridges").setRawNativeShoppingCartItem(
          e,
          babelHelpers.extends({}, n, {
            title: t.name,
            max_available: t.max_available,
            price_1000: Math.round(t.price * 1e3),
            sale_price_1000: Math.round(
              ((r = t.sale_price) != null ? r : 0) * 1e3,
            ),
          }),
        );
      }
    }
    function I(e, t, n, a, i, l) {
      var s = e.invoke,
        u = p(!1),
        c = u[0],
        d = u[1],
        m = p(null),
        _ = m[0],
        f = m[1];
      async function g(u) {
        if (!c) {
          d(!0);
          try {
            if (u === h.GO_BACK)
              (d(!1),
                await o(
                  "WAFlowsShoppingJSBridges",
                ).sendShoppingFlowsMarketingDisclosureUserAction(s, {
                  action: "go_back",
                }));
            else {
              var m,
                p,
                _ = null;
              u === h.CHECKOUT
                ? (_ = await o(
                    "WAFlowsShoppingJSBridges",
                  ).getShoppingFlowsMarketingDisclosureState(
                    e.invoke,
                    a.isJestTesting,
                  ))
                : await o(
                    "WAFlowsShoppingJSBridges",
                  ).sendShoppingFlowsMarketingDisclosureUserAction(s, {
                    action: "is_accepted",
                  });
              var g =
                (m = (p = _) == null ? void 0 : p.show_disclosure) != null
                  ? m
                  : !1;
              if (!g || u === h.CONTINUE) {
                var y = await o("WAFlowsCartUtils.react").buildCheckoutUrl(
                    e,
                    t,
                    n,
                    a,
                    _,
                  ),
                  C = new URL(y);
                (await o("WAFlowsOpenExternalURI").openExternalURI(C, s),
                  o(
                    "WAFlowsShoppingStateUtils",
                  ).isShoppingIntegratedShoppingMessageFlow(t) ||
                    (await o(
                      "WAFlowsShoppingJSBridges",
                    ).clearNativeCartAndCloseFlow(s)));
                var b = e.actionOverrides,
                  v = r("WAFlowsNativeWAMLogger")(b),
                  S = v.logWAMScreenActionEvent;
                S({
                  flows_current_screen: i,
                  flows_current_screen_layout_type: n.getScreenLayoutType(i),
                  is_terminal_screen: !0,
                  click_type: "CTA",
                  click_name: "Checkout",
                });
              } else {
                var R, L;
                (await o(
                  "WAFlowsShoppingJSBridges",
                ).sendShoppingFlowsMarketingDisclosureUserAction(s, {
                  action: "shown",
                }),
                  l(
                    o(
                      "WAFlowsWELJActionCreators",
                    ).createShoppingMMDisclosureUpdateAction(_),
                  ),
                  l(
                    o(
                      "WAFlowsWELJActionCreators",
                    ).createShoppingMMDisclosureShowAction(
                      (R = (L = _) == null ? void 0 : L.show_disclosure) != null
                        ? R
                        : !1,
                    ),
                  ),
                  d(!1));
              }
            }
          } catch (e) {
            (f(r("getErrorSafe")(e)), d(!1));
          }
        }
      }
      return [g, c, _];
    }
    function T(e) {
      var t = c(o("WAFlowsStateProvider.react").FlowStateDispatchContext),
        n = o("ReactRouterDOM").useHistory(),
        r = o("WAFlowsStateProvider.react").useWAFlowsState(),
        a = o("WAFlowsEnvContext.react").useWAFlowsEnv(),
        i = a.env,
        l = o(
          "WAFlowsEntryPointControllerContext.react",
        ).useWAFlowsEntryPointController().actionOverrides;
      return u(
        function (a, s, u, c, d, m) {
          c === void 0 && (c = !0);
          var p = o("WAFlowsCartUtils.react").getIntegratedShoppingFlowCart(
              s,
              u,
              c,
              r,
              a,
            ),
            _ = { sub_action: a, cart: p };
          a === g.APPLY_COUPON &&
            (_ = babelHelpers.extends({}, _, { coupon: { code: d } }));
          var f = o("WAFlowsWELJActionCreators").createDataExchangeAction(e, _);
          t(l.dataExchangeActionHandler(f, n, void 0, i, !1, m));
        },
        [r, e, t, l, n, i],
      );
    }
    function D(e) {
      var t = c(o("WAFlowsStateProvider.react").FlowStateDispatchContext),
        n = o("ReactRouterDOM").useHistory(),
        r = o("WAFlowsStateProvider.react").useWAFlowsMeta(),
        a = o("WAFlowsEnvContext.react").useWAFlowsEnv(),
        i = a.env,
        l = o(
          "WAFlowsEntryPointControllerContext.react",
        ).useWAFlowsEntryPointController().actionOverrides;
      return u(
        function (a) {
          o("WAFlowsCartUtils.react").syncIntegratedShoppingCartWithStateCart(
            e,
            t,
            n,
            i,
            l,
            r,
            a,
            null,
            !1,
            !1,
          );
        },
        [l, t, i, n, r, e],
      );
    }
    function x(e) {
      var t = c(o("WAFlowsStateProvider.react").FlowStateDispatchContext),
        n = o("WAFlowsStateProvider.react").useWAFlowsState(),
        r = o("ReactRouterDOM").useHistory(),
        a = o("WAFlowsEnvContext.react").useWAFlowsEnv(),
        i = a.env,
        l = o(
          "WAFlowsEntryPointControllerContext.react",
        ).useWAFlowsEntryPointController().actionOverrides;
      return u(
        function (a, s, u, c) {
          u === void 0 && (u = !0);
          var d = o("WAFlowsCartUtils.react").getIntegratedShoppingFlowCart(
              a,
              s,
              u,
              n,
            ),
            m = { sub_action: g.CREATE_ORDER, cart: d },
            p = o("WAFlowsWELJActionCreators").createDataExchangeAction(e, m);
          t(l.dataExchangeActionHandler(p, r, void 0, i, !1, c));
        },
        [n, e, t, l, r, i],
      );
    }
    ((l.FLOWJIntegratedShoppingClickActionType = g),
      (l.FLOWJOffsiteCheckoutClickActionType = h),
      (l.useCartUpdateCallback = y),
      (l.useCategoryClickCallback = C),
      (l.useItemClickCallback = b),
      (l.useOnAddMoreClickCallback = v),
      (l.useViewCartCallback = S),
      (l.useLoadVariantProduct = R),
      (l.useDetectCatalogChangesAndNotifyUser = L),
      (l.useMarketingMessageCheckoutAsyncCallback = I),
      (l.useCartCouponClickCallback = T),
      (l.useSyncIntegratedShoppingCartWithState = D),
      (l.useIntegratedShoppingCartClickCallback = x));
  },
  98,
);
