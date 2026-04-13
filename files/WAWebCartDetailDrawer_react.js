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
    "react-compiler-runtime",
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
      var t = o("react-compiler-runtime").c(2),
        n = e.cart,
        r = n.itemCount;
      if (r == null || r === 0) return null;
      var a;
      return (
        t[0] !== r
          ? ((a = p.jsx(o("WAWebText.react").WAWebTextTitle, {
              children: s._(
                /*BTDS*/ '_j{"*":"{cart-number-of-items} items","_1":"1 item"}',
                [s._plural(r, "cart-number-of-items")],
              ),
            })),
            (t[0] = r),
            (t[1] = a))
          : (a = t[1]),
        a
      );
    }
    function R(e) {
      var t = o("react-compiler-runtime").c(25),
        n = e.cart,
        a = e.cartFlatListController,
        i = e.cartProductItems,
        l = e.isDarkTheme,
        s = e.isDirectConnection,
        u = e.onProductCatalog,
        c = e.onProductDetail,
        d = e.onSend,
        m = e.sellerJid,
        _;
      t[0] !== i
        ? ((_ = o(
            "WAWebBizMatchCartItemsToProductsAction",
          ).getSavingsFromCartItemsAndProducts(i)),
          (t[0] = i),
          (t[1] = _))
        : (_ = t[1]);
      var f = _,
        g;
      t[2] !== n || t[3] !== u
        ? ((g = p.jsx(E, { cart: n, onProductCatalog: u })),
          (t[2] = n),
          (t[3] = u),
          (t[4] = g))
        : (g = t[4]);
      var h;
      t[5] !== n || t[6] !== a || t[7] !== i || t[8] !== c || t[9] !== m
        ? ((h = p.jsx(r("WAWebCartProductList.react"), {
            flatListController: a,
            onProductDetail: c,
            cart: n,
            sellerJid: m,
            cartProductItems: i,
          })),
          (t[5] = n),
          (t[6] = a),
          (t[7] = i),
          (t[8] = c),
          (t[9] = m),
          (t[10] = h))
        : (h = t[10]);
      var y;
      t[11] !== l
        ? ((y = {
            0: { className: "x1280gxy x9f619 x1n2onr6 xhtitgo" },
            1: { className: "x9f619 x1n2onr6 xhtitgo x1m8r95a" },
          }[!!l << 0]),
          (t[11] = l),
          (t[12] = y))
        : (y = t[12]);
      var C;
      t[13] !== n || t[14] !== s || t[15] !== d || t[16] !== f
        ? ((C = p.jsx(r("WAWebCartDetailDrawerFooter.react"), {
            savings: f,
            cart: n,
            onSend: d,
            isDirectConnection: s,
          })),
          (t[13] = n),
          (t[14] = s),
          (t[15] = d),
          (t[16] = f),
          (t[17] = C))
        : (C = t[17]);
      var b;
      t[18] !== y || t[19] !== C
        ? ((b = p.jsx("div", babelHelpers.extends({}, y, { children: C }))),
          (t[18] = y),
          (t[19] = C),
          (t[20] = b))
        : (b = t[20]);
      var v;
      return (
        t[21] !== g || t[22] !== h || t[23] !== b
          ? ((v = p.jsxs(p.Fragment, { children: [g, h, b] })),
            (t[21] = g),
            (t[22] = h),
            (t[23] = b),
            (t[24] = v))
          : (v = t[24]),
        v
      );
    }
    function L(e) {
      var t = o("react-compiler-runtime").c(3),
        n = e.onProductCatalog,
        r;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((r = s._(/*BTDS*/ "Add more")), (t[0] = r))
        : (r = t[0]);
      var a;
      return (
        t[1] !== n
          ? ((a = p.jsx(o("WAWebButton.react").WAWebButtonSecondary, {
              testid: void 0,
              onClick: n,
              children: r,
            })),
            (t[1] = n),
            (t[2] = a))
          : (a = t[2]),
        a
      );
    }
    function E(e) {
      var t = o("react-compiler-runtime").c(8),
        n = e.cart,
        r = e.onProductCatalog,
        a;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((a = [o("WAWebUISpacing").uiPadding.all16, b.contentBackground]),
          (t[0] = a))
        : (a = t[0]);
      var i;
      t[1] !== n
        ? ((i = p.jsx(S, { cart: n })), (t[1] = n), (t[2] = i))
        : (i = t[2]);
      var l;
      t[3] !== r
        ? ((l = p.jsx(L, { onProductCatalog: r })), (t[3] = r), (t[4] = l))
        : (l = t[4]);
      var s;
      return (
        t[5] !== i || t[6] !== l
          ? ((s = p.jsxs(o("WAWebFlex.react").FlexRow, {
              justify: "all",
              align: "center",
              xstyle: a,
              children: [i, l],
            })),
            (t[5] = i),
            (t[6] = l),
            (t[7] = s))
          : (s = t[7]),
        s
      );
    }
    function k(e) {
      var t = o("react-compiler-runtime").c(10),
        n = e.businessProfile,
        r = e.onProductCatalog,
        a,
        i;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((a = {
            className:
              "x6s0dn4 x1280gxy x78zum5 xdt5ytf x5yr21d x13crsa5 xx281p9 x1rxj1xn x67w97k",
          }),
          (i = p.jsx(
            o("WAWebShoppingCartEmptyIcon.react").ShoppingCartEmptyIcon,
            {},
          )),
          (t[0] = a),
          (t[1] = i))
        : ((a = t[0]), (i = t[1]));
      var l;
      t[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((l = p.jsx(o("WAWebText.react").WAWebTextLarge, {
            xstyle: [
              o("WAWebUISpacing").uiMargin.top30,
              o("WAWebUISpacing").uiMargin.bottom15,
            ],
            children: s._(/*BTDS*/ "Add items to your cart"),
          })),
          (t[2] = l))
        : (l = t[2]);
      var u;
      t[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((u = [b.emptyCardText, o("WAWebUISpacing").uiPadding.bottom30]),
          (t[3] = u))
        : (u = t[3]);
      var c;
      t[4] === Symbol.for("react.memo_cache_sentinel")
        ? ((c = p.jsx(o("WAWebText_DONOTUSE.react").TextDiv, {
            xstyle: u,
            theme: "plain",
            children: s._(
              /*BTDS*/ "Collect all the items you're interested in here and then send them to the business. Use your cart to ask about buying, customizing, delivery, or anything you want.",
            ),
          })),
          (t[4] = c))
        : (c = t[4]);
      var d;
      t[5] !== n || t[6] !== r
        ? ((d =
            o("WAWebBusinessProfileUtils").hasCatalog(n) &&
            p.jsx(o("WAWebButton.react").WAWebButtonPrimary, {
              onClick: r,
              children: s._(/*BTDS*/ "View catalog"),
            })),
          (t[5] = n),
          (t[6] = r),
          (t[7] = d))
        : (d = t[7]);
      var m;
      return (
        t[8] !== d
          ? ((m = p.jsxs(
              "div",
              babelHelpers.extends({}, a, { children: [i, l, c, d] }),
            )),
            (t[8] = d),
            (t[9] = m))
          : (m = t[9]),
        m
      );
    }
    var I = n("$InternalEnum")({
      LOADING: "loading",
      READY_EMPTY: "readyEmpty",
      READY_CONTENT: "readyContent",
    });
    function T(e) {
      var t = o("react-compiler-runtime").c(1),
        n = e.children,
        a = e.drawerState,
        i = e.emptyContent;
      switch (a) {
        case I.READY_EMPTY:
          return i;
        case I.READY_CONTENT:
          return n;
        case I.LOADING: {
          var l;
          return (
            t[0] === Symbol.for("react.memo_cache_sentinel")
              ? ((l = p.jsx(r("WAWebFlatListLoadingSpinnerItem.react"), {})),
                (t[0] = l))
              : (l = t[0]),
            l
          );
        }
      }
    }
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
