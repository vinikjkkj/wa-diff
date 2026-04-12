__d(
  "WAWebCartDetailDrawer.react",
  [
    "fbt",
    "$InternalEnum",
    "Promise",
    "WALogger",
    "WATimeUtils",
    "WAWebBizClearCartAction",
    "WAWebBizGatingUtils",
    "WAWebBizMatchCartItemsToProductsAction",
    "WAWebBizPullCartUpdateAction",
    "WAWebBizSubmitOrderAction",
    "WAWebBizUpdateCartMessageAction",
    "WAWebBusinessProfileCollection",
    "WAWebBusinessProfileUtils",
    "WAWebButton.react",
    "WAWebCartCollection",
    "WAWebCartDetailDrawerFooter.react",
    "WAWebCartLogEvents",
    "WAWebCartProductList.react",
    "WAWebChatThreadLogging",
    "WAWebConfirmPopup.react",
    "WAWebDrawer.react",
    "WAWebDrawerBody.react",
    "WAWebDrawerContext",
    "WAWebDrawerHeader.react",
    "WAWebDrawerManager",
    "WAWebDrawerManagerContext",
    "WAWebFbtCommon",
    "WAWebFlatListController",
    "WAWebFlatListLoadingSpinnerItem.react",
    "WAWebFlex.react",
    "WAWebModalManager",
    "WAWebOrderLogEvents",
    "WAWebProductCatalogContext",
    "WAWebPromiseQueue",
    "WAWebShoppingCartEmptyIcon.react",
    "WAWebShowGenericErrorToastAction",
    "WAWebText.react",
    "WAWebText_DONOTUSE.react",
    "WAWebThemeContext",
    "WAWebUISpacing",
    "WAWebUtilsLogQplEvents",
    "asyncToGeneratorRuntime",
    "react",
    "useLazyRef",
    "useWAWebListener",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c = ["ref"],
      d,
      m,
      p = m || (m = o("react")),
      _ = m,
      f = _.useContext,
      g = _.useEffect,
      h = _.useMemo,
      y = _.useRef,
      C = _.useState,
      b = {
        contentBackground: { backgroundColor: "x1280gxy", $$css: !0 },
        emptyCardText: { textAlign: "x2b8uid", $$css: !0 },
      },
      v = { surface: "catalog-cart" };
    function S(e) {
      var t = e.cart,
        n = t.itemCount;
      return n == null || n === 0
        ? null
        : p.jsx(o("WAWebText.react").WAWebTextTitle, {
            children: s._(
              /*BTDS*/ '_j{"*":"{cart-number-of-items} items","_1":"1 item"}',
              [s._plural(n, "cart-number-of-items")],
            ),
          });
    }
    S.displayName = S.name + " [from " + i.id + "]";
    function R(e) {
      var t = e.cart,
        n = e.cartFlatListController,
        a = e.cartProductItems,
        i = e.isDarkTheme,
        l = e.isDirectConnection,
        s = e.onProductCatalog,
        u = e.onProductDetail,
        c = e.onSend,
        d = e.sellerJid,
        m = o(
          "WAWebBizMatchCartItemsToProductsAction",
        ).getSavingsFromCartItemsAndProducts(a);
      return p.jsxs(p.Fragment, {
        children: [
          p.jsx(E, { cart: t, onProductCatalog: s }),
          p.jsx(r("WAWebCartProductList.react"), {
            flatListController: n,
            onProductDetail: u,
            cart: t,
            sellerJid: d,
            cartProductItems: a,
          }),
          p.jsx(
            "div",
            babelHelpers.extends(
              {},
              {
                0: { className: "x1280gxy x9f619 x1n2onr6 xhtitgo" },
                1: { className: "x9f619 x1n2onr6 xhtitgo x1m8r95a" },
              }[!!i << 0],
              {
                children: p.jsx(r("WAWebCartDetailDrawerFooter.react"), {
                  savings: m,
                  cart: t,
                  onSend: c,
                  isDirectConnection: l,
                }),
              },
            ),
          ),
        ],
      });
    }
    R.displayName = R.name + " [from " + i.id + "]";
    function L(e) {
      var t = e.onProductCatalog;
      return p.jsx(o("WAWebButton.react").WAWebButtonSecondary, {
        testid: void 0,
        onClick: t,
        children: s._(/*BTDS*/ "Add more"),
      });
    }
    L.displayName = L.name + " [from " + i.id + "]";
    function E(e) {
      var t = e.cart,
        n = e.onProductCatalog;
      return p.jsxs(o("WAWebFlex.react").FlexRow, {
        justify: "all",
        align: "center",
        xstyle: [o("WAWebUISpacing").uiPadding.all16, b.contentBackground],
        children: [p.jsx(S, { cart: t }), p.jsx(L, { onProductCatalog: n })],
      });
    }
    E.displayName = E.name + " [from " + i.id + "]";
    function k(e) {
      var t = e.businessProfile,
        n = e.onProductCatalog;
      return p.jsxs("div", {
        className:
          "x6s0dn4 x1280gxy x78zum5 xdt5ytf x5yr21d x13crsa5 xx281p9 x1rxj1xn x67w97k",
        children: [
          p.jsx(
            o("WAWebShoppingCartEmptyIcon.react").ShoppingCartEmptyIcon,
            {},
          ),
          p.jsx(o("WAWebText.react").WAWebTextLarge, {
            xstyle: [
              o("WAWebUISpacing").uiMargin.top30,
              o("WAWebUISpacing").uiMargin.bottom15,
            ],
            children: s._(/*BTDS*/ "Add items to your cart"),
          }),
          p.jsx(o("WAWebText_DONOTUSE.react").TextDiv, {
            xstyle: [b.emptyCardText, o("WAWebUISpacing").uiPadding.bottom30],
            theme: "plain",
            children: s._(
              /*BTDS*/ "Collect all the items you're interested in here and then send them to the business. Use your cart to ask about buying, customizing, delivery, or anything you want.",
            ),
          }),
          o("WAWebBusinessProfileUtils").hasCatalog(t) &&
            p.jsx(o("WAWebButton.react").WAWebButtonPrimary, {
              onClick: n,
              children: s._(/*BTDS*/ "View catalog"),
            }),
        ],
      });
    }
    k.displayName = k.name + " [from " + i.id + "]";
    var I = n("$InternalEnum")({
      LOADING: "loading",
      READY_EMPTY: "readyEmpty",
      READY_CONTENT: "readyContent",
    });
    function T(e) {
      var t = e.children,
        n = e.drawerState,
        o = e.emptyContent;
      switch (n) {
        case I.READY_EMPTY:
          return o;
        case I.READY_CONTENT:
          return t;
        case I.LOADING:
          return p.jsx(r("WAWebFlatListLoadingSpinnerItem.react"), {});
      }
    }
    T.displayName = T.name + " [from " + i.id + "]";
    function D(t) {
      var a = t.ref,
        i = babelHelpers.objectWithoutPropertiesLoose(t, c),
        l = i.canLogQpl,
        m = l === void 0 ? !0 : l,
        _ = i.chat,
        b = i.closeDrawerRightOnSend,
        S = i.onBack,
        L = i.onProductCatalog,
        E = i.onProductDetail,
        D = i.sellerJid,
        x = f(o("WAWebDrawerContext").DrawerContext),
        $ = o("WAWebThemeContext").useIsDarkTheme(),
        P = o("WAWebDrawerManagerContext").useDrawerManagerContext("right"),
        N = h(
          function () {
            return o("WAWebCartCollection").CartCollection.findCart(D);
          },
          [D],
        ),
        M = y(null),
        w = r("useLazyRef")(function () {
          return new (o("WAWebPromiseQueue").PromiseQueue)();
        }),
        A = h(function () {
          return new (r("WAWebFlatListController"))();
        }, []),
        F = C(!0),
        O = F[0],
        B = F[1],
        W = C(void 0),
        q = W[0],
        U = W[1],
        V = C([]),
        H = V[0],
        G = V[1],
        z = C(N.message),
        j = z[0],
        K = z[1],
        Q = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
            var t = yield (d || (d = n("Promise"))).all([
                e
                  ? r("WAWebBizPullCartUpdateAction")(N, m)
                  : (d || (d = n("Promise"))).resolve(),
                o(
                  "WAWebBusinessProfileCollection",
                ).BusinessProfileCollection.find(_.id),
              ]),
              a = t[0],
              i = t[1];
            a && (M.current = a);
            var l = o(
              "WAWebBizMatchCartItemsToProductsAction",
            ).matchCartItemsToProducts(N, M.current);
            (B(!1), U(i), G(l));
          });
          return function (n) {
            return e.apply(this, arguments);
          };
        })();
      (o("useWAWebListener").useListener(
        N,
        "change:cartItemCollection",
        function () {
          w.current.enqueue(function () {
            return Q();
          });
        },
      ),
        g(function () {
          var t = !0;
          (m &&
            o("WAWebUtilsLogQplEvents").qplAnnotateCartView(
              N.id.toString() !== D,
              N.itemCount,
            ),
            Q(!0, m)
              .then(function (e) {
                ((t = !1),
                  m && o("WAWebUtilsLogQplEvents").qplEndCartView(2),
                  o("WAWebCartLogEvents").logCartListImpression(
                    N.id.toString(),
                    o("WAWebProductCatalogContext").getProductCatalogContext(x),
                  ));
              })
              .catch(function (t) {
                (o("WALogger")
                  .ERROR(
                    e ||
                      (e = babelHelpers.taggedTemplateLiteralLoose([
                        "Unable to open the cart",
                      ])),
                  )
                  .verbose()
                  .sendLogs("openCart: failed to open the cart"),
                  r("WAWebShowGenericErrorToastAction")(),
                  r("WAWebBizClearCartAction")(N));
              })
              .finally(function () {
                (t && m && o("WAWebUtilsLogQplEvents").qplEndCartView(3),
                  B(!1));
              }));
        }, []));
      var X = function () {
          var e,
            t = (e = P.existsDrawer()) != null ? e : !1;
          t && o("WAWebDrawerManager").DrawerManager.closeDrawerRight();
        },
        Y = function () {
          (B(!0),
            o("WAWebUtilsLogQplEvents").qplStartOrderCreate(H.length),
            r("WAWebBizSubmitOrderAction")(N, _, q)
              .then(function (e) {
                var t = !!N.message;
                (o("WAWebOrderLogEvents").logSendOrderMessage({
                  catalogContext: o(
                    "WAWebProductCatalogContext",
                  ).getProductCatalogContext(x),
                  catalogOwnerJid: N.id.toString(),
                  isOrderMsgAttached: t,
                  orderId: e,
                  quantity: N.itemCount,
                }),
                  o(
                    "WAWebChatThreadLogging",
                  ).handleActivitiesForChatThreadLogging([
                    {
                      activityType: "ordersSent",
                      chatId: _.id,
                      ts: o("WATimeUtils").unixTime(),
                    },
                  ]),
                  S(),
                  r("WAWebBizClearCartAction")(N),
                  (N.message = void 0),
                  b && X(),
                  o("WAWebUtilsLogQplEvents").qplEndOrderCreate(2));
              })
              .catch(function (e) {
                (o("WALogger")
                  .ERROR(
                    u ||
                      (u = babelHelpers.taggedTemplateLiteralLoose([
                        "Unable to create catalog order",
                      ])),
                  )
                  .verbose()
                  .sendLogs(
                    "submitOrder: order creation or order message send error",
                  ),
                  r("WAWebShowGenericErrorToastAction")(),
                  Q(!0),
                  o("WAWebUtilsLogQplEvents").qplEndOrderCreate(3));
              })
              .finally(function () {
                B(!1);
              }));
        },
        J = function (t) {
          (K(t), r("WAWebBizUpdateCartMessageAction")(N, t));
        },
        Z = function () {
          o("WAWebModalManager").ModalManager.open(
            p.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
              tsNavigationData: { surface: "unknown", viewName: "cart-detail" },
              title: s._(/*BTDS*/ "Message too long"),
              onOK: o("WAWebModalManager").closeModalManager,
              okText: r("WAWebFbtCommon")("OK"),
              children: s._(
                /*BTDS*/ "The message you're pasting is too long. Try shortening it or sending it as a separate message.",
              ),
            }),
          );
        },
        ee = h(
          function () {
            return O
              ? I.LOADING
              : N.itemCount
                ? I.READY_CONTENT
                : I.READY_EMPTY;
          },
          [O, N.itemCount],
        ),
        te = p.jsx(k, { onProductCatalog: L, businessProfile: q }),
        ne = o("WAWebBizGatingUtils").isBuyerOrderRequestVariantEnabled()
          ? s._(/*BTDS*/ "Your order request")
          : s._(/*BTDS*/ "Your cart");
      return p.jsxs(r("WAWebDrawer.react"), {
        ref: a,
        onDrop: S,
        theme: "striped",
        tsNavigationData: v,
        children: [
          p.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
            title: ne,
            type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
            onBack: S,
          }),
          p.jsx(r("WAWebDrawerBody.react"), {
            flatListControllers: [A],
            children: p.jsx(T, {
              drawerState: ee,
              emptyContent: te,
              children: p.jsx(R, {
                cart: N,
                chat: _,
                onSend: Y,
                onChange: J,
                onMaxPasteExceeded: Z,
                cartMessage: j,
                cartFlatListController: A,
                onProductDetail: E,
                onProductCatalog: L,
                sellerJid: D,
                cartProductItems: H,
                isDarkTheme: $,
                isDirectConnection: !!(
                  q != null && q.isBusinessDirectConnection()
                ),
              }),
            }),
          }),
        ],
      });
    }
    ((D.displayName = D.name + " [from " + i.id + "]"), (l.default = D));
  },
  226,
);
