__d(
  "WAWebCartOrderDetailDrawer.react",
  [
    "fbt",
    "WAFilteredCatch",
    "WALogger",
    "WANullthrows",
    "WAWebBackendErrors",
    "WAWebBizEntryPoint",
    "WAWebBizGatingUtils",
    "WAWebBusinessProfileCollection",
    "WAWebBusinessProfileUtils",
    "WAWebClock",
    "WAWebCmd",
    "WAWebConfirmPopup.react",
    "WAWebCurrencyUtils",
    "WAWebDBUpdateMessageTable",
    "WAWebDrawer.react",
    "WAWebDrawerBody.react",
    "WAWebDrawerButton.react",
    "WAWebDrawerHeader.react",
    "WAWebDrawerManager",
    "WAWebDrawerSection.react",
    "WAWebFbtCommon",
    "WAWebFlatListController",
    "WAWebModalManager",
    "WAWebMsgCollection",
    "WAWebMsgModel",
    "WAWebOrderCollection",
    "WAWebOrderDetailTextComposer",
    "WAWebOrderDetailsActionCategory",
    "WAWebOrderDetailsActionsSmbWamEvent",
    "WAWebOrderGetters",
    "WAWebOrderProductList.react",
    "WAWebProductCatalogFetchStateTopBar.react",
    "WAWebProtobufsE2E.pb",
    "WAWebSendTextMsgChatAction",
    "WAWebText.react",
    "WAWebUISpacing",
    "WAWebUserPrefsMeUser",
    "WAWebUtilsLogQplEvents",
    "WAWebWamEnumOrderDetailsCreationAction",
    "WAWebWidFactory",
    "react",
    "react-compiler-runtime",
    "stylex",
    "useLazyRef",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c = ["ref"],
      d,
      m,
      p = m || (m = o("react")),
      _ = m,
      f = _.useEffect,
      g = _.useState,
      h = { defaultBg: { backgroundColor: "x1280gxy", $$css: !0 } };
    function y(e) {
      var t = o("react-compiler-runtime").c(7),
        n = e.chat,
        a = e.onChange,
        i = e.onSubmit,
        l = e.value,
        u;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((u = (d || (d = r("stylex"))).props(
            o("WAWebUISpacing").uiPadding.vert0,
            o("WAWebUISpacing").uiPadding.horiz18,
          )),
          (t[0] = u))
        : (u = t[0]);
      var c;
      t[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((c = s._(/*BTDS*/ "Add a cancellation note")), (t[1] = c))
        : (c = t[1]);
      var m;
      return (
        t[2] !== n || t[3] !== a || t[4] !== i || t[5] !== l
          ? ((m = p.jsx(
              "div",
              babelHelpers.extends({}, u, {
                children: p.jsx(r("WAWebOrderDetailTextComposer"), {
                  chat: n,
                  onChange: a,
                  onSubmit: i,
                  value: l,
                  placeholder: c,
                }),
              }),
            )),
            (t[2] = n),
            (t[3] = a),
            (t[4] = i),
            (t[5] = l),
            (t[6] = m))
          : (m = t[6]),
        m
      );
    }
    function C(e) {
      var t = o("react-compiler-runtime").c(9),
        n = e.onCreateOrderClick,
        a = e.onDeclineOrderClick,
        i = e.sellerJid,
        l = o("WAWebWidFactory").createUserWidOrThrow(i),
        u = o("WAWebUserPrefsMeUser").isMePnUser(l);
      if (!u) return null;
      var c;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((c = s._(/*BTDS*/ "Create order")), (t[0] = c))
        : (c = t[0]);
      var d;
      t[1] !== n
        ? ((d = p.jsx(r("WAWebDrawerSection.react"), {
            children: p.jsx(o("WAWebDrawerButton.react").DrawerButtonSimple, {
              testid: void 0,
              color: "dark",
              onClick: n,
              children: c,
            }),
          })),
          (t[1] = n),
          (t[2] = d))
        : (d = t[2]);
      var m;
      t[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((m = s._(/*BTDS*/ "Decline order")), (t[3] = m))
        : (m = t[3]);
      var _;
      t[4] !== a
        ? ((_ = p.jsx(r("WAWebDrawerSection.react"), {
            children: p.jsx(o("WAWebDrawerButton.react").DrawerButtonSimple, {
              testid: void 0,
              color: "dark",
              onClick: a,
              children: m,
            }),
          })),
          (t[4] = a),
          (t[5] = _))
        : (_ = t[5]);
      var f;
      return (
        t[6] !== d || t[7] !== _
          ? ((f = p.jsxs(p.Fragment, { children: [d, _] })),
            (t[6] = d),
            (t[7] = _),
            (t[8] = f))
          : (f = t[8]),
        f
      );
    }
    function b(e) {
      var t = o("react-compiler-runtime").c(51),
        n = e.cancellationMessage,
        a = e.chat,
        i = e.fetchState,
        l = e.flatListController,
        u = e.isLoading,
        c = e.onOrderCancel,
        m = e.onOrderCreate,
        _ = e.onProductDetail,
        f = e.order,
        g = e.ownerHasReviewed,
        b = e.sellerJid,
        R = e.sendCancelMessage,
        L = e.setCancellationMessage;
      if (u || f == null) {
        var E;
        return (
          t[0] !== i
            ? ((E = p.jsx(r("WAWebProductCatalogFetchStateTopBar.react"), {
                fetchState: i,
              })),
              (t[0] = i),
              (t[1] = E))
            : (E = t[1]),
          E
        );
      }
      var k;
      if (f.products.length > 0) {
        var I;
        (t[2] !== f
          ? ((I = s._(/*BTDS*/ '_j{"*":"{count} items","_1":"1 item"}', [
              s._plural(
                o("WAWebOrderGetters").getTotalItemCount(f) || 0,
                "count",
              ),
            ])),
            (t[2] = f),
            (t[3] = I))
          : (I = t[3]),
          (k = I));
      } else {
        var T;
        (t[4] === Symbol.for("react.memo_cache_sentinel")
          ? ((T = s._(/*BTDS*/ "No items")), (t[4] = T))
          : (T = t[4]),
          (k = T));
      }
      var D;
      t[5] !== k
        ? ((D = p.jsx(o("WAWebText.react").WAWebTextTitle, { children: k })),
          (t[5] = k),
          (t[6] = D))
        : (D = t[6]);
      var x = D,
        $;
      if (t[7] !== f.products) {
        var P = f.products.reduce(S, null),
          N = f.products.reduce(v, null);
        if (P != null && N != null)
          $ = s._(/*BTDS*/ "{subtotal} (estimated)", [
            s._param(
              "subtotal",
              o("WAWebCurrencyUtils").formatAmount1000(N, P),
            ),
          ]);
        else {
          var M;
          (t[9] === Symbol.for("react.memo_cache_sentinel")
            ? ((M = s._(/*BTDS*/ "No price entered")), (t[9] = M))
            : (M = t[9]),
            ($ = M));
        }
        ((t[7] = f.products), (t[8] = $));
      } else $ = t[8];
      var w;
      t[10] !== $
        ? ((w = p.jsx(o("WAWebText.react").WAWebTextSmall, {
            as: "div",
            children: $,
          })),
          (t[10] = $),
          (t[11] = w))
        : (w = t[11]);
      var A = w,
        F = null;
      if (f.createdAt != null) {
        var O;
        t[12] !== f.createdAt
          ? ((O = o("WAWebClock").Clock.timeStr(f.createdAt)),
            (t[12] = f.createdAt),
            (t[13] = O))
          : (O = t[13]);
        var B = O,
          W = "" + B,
          q;
        (t[14] !== W
          ? ((q = p.jsx(o("WAWebText.react").WAWebTextSmall, { children: W })),
            (t[14] = W),
            (t[15] = q))
          : (q = t[15]),
          (F = q));
      }
      var U;
      t[16] !== i
        ? ((U = p.jsx(r("WAWebProductCatalogFetchStateTopBar.react"), {
            fetchState: i,
          })),
          (t[16] = i),
          (t[17] = U))
        : (U = t[17]);
      var V;
      t[18] === Symbol.for("react.memo_cache_sentinel")
        ? ((V = (d || (d = r("stylex"))).props(
            h.defaultBg,
            o("WAWebUISpacing").uiPadding.all18,
          )),
          (t[18] = V))
        : (V = t[18]);
      var H;
      t[19] !== x || t[20] !== A
        ? ((H = p.jsxs(
            "div",
            babelHelpers.extends({}, V, { children: [x, A] }),
          )),
          (t[19] = x),
          (t[20] = A),
          (t[21] = H))
        : (H = t[21]);
      var G;
      t[22] !== l || t[23] !== _ || t[24] !== f || t[25] !== b
        ? ((G = p.jsx(r("WAWebOrderProductList.react"), {
            flatListController: l,
            onProductDetail: _,
            order: f,
            sellerJid: b,
          })),
          (t[22] = l),
          (t[23] = _),
          (t[24] = f),
          (t[25] = b),
          (t[26] = G))
        : (G = t[26]);
      var z;
      t[27] === Symbol.for("react.memo_cache_sentinel")
        ? ((z = (d || (d = r("stylex"))).props(
            h.defaultBg,
            o("WAWebUISpacing").uiPadding.all18,
          )),
          (t[27] = z))
        : (z = t[27]);
      var j;
      t[28] !== F
        ? ((j = p.jsx("div", babelHelpers.extends({}, z, { children: F }))),
          (t[28] = F),
          (t[29] = j))
        : (j = t[29]);
      var K;
      t[30] !== n || t[31] !== a || t[32] !== g || t[33] !== R || t[34] !== L
        ? ((K = g
            ? p.jsx(y, { chat: a, value: n, onSubmit: R, onChange: L })
            : null),
          (t[30] = n),
          (t[31] = a),
          (t[32] = g),
          (t[33] = R),
          (t[34] = L),
          (t[35] = K))
        : (K = t[35]);
      var Q;
      t[36] !== U || t[37] !== H || t[38] !== G || t[39] !== j || t[40] !== K
        ? ((Q = p.jsxs(r("WAWebDrawerSection.react"), {
            children: [U, H, G, j, K],
          })),
          (t[36] = U),
          (t[37] = H),
          (t[38] = G),
          (t[39] = j),
          (t[40] = K),
          (t[41] = Q))
        : (Q = t[41]);
      var X;
      t[42] !== c || t[43] !== m || t[44] !== f || t[45] !== g || t[46] !== b
        ? ((X =
            o("WAWebBizGatingUtils").orderDetailsFromCartEnabled() && !g
              ? p.jsx(C, {
                  sellerJid: b,
                  onCreateOrderClick: function () {
                    return m(r("WANullthrows")(f));
                  },
                  onDeclineOrderClick: c,
                })
              : null),
          (t[42] = c),
          (t[43] = m),
          (t[44] = f),
          (t[45] = g),
          (t[46] = b),
          (t[47] = X))
        : (X = t[47]);
      var Y;
      return (
        t[48] !== Q || t[49] !== X
          ? ((Y = p.jsxs(p.Fragment, { children: [Q, X] })),
            (t[48] = Q),
            (t[49] = X),
            (t[50] = Y))
          : (Y = t[50]),
        Y
      );
    }
    function v(e, t) {
      return t.currency == null ? e : t.currency;
    }
    function S(e, t) {
      return t.price == null ? e : (e || 0) + t.price * t.quantity;
    }
    function R(t) {
      var n = t.ref,
        a = babelHelpers.objectWithoutPropertiesLoose(t, c),
        i = a.chat,
        l = a.onOrderCancel,
        d = a.onOrderCreate,
        m = a.onProductDetail,
        _ = a.orderId,
        h = a.orderMessage,
        y = a.ownerHasReviewed,
        C = a.sellerJid,
        v = a.token,
        S = a.userIsCartOwner,
        R = g(!0),
        L = R[0],
        E = R[1],
        k = g("PENDING"),
        I = k[0],
        T = k[1],
        D = g(null),
        x = D[0],
        $ = D[1],
        P = g(""),
        N = P[0],
        M = P[1],
        w = r("useLazyRef")(function () {
          return new (r("WAWebFlatListController"))();
        }),
        A = function () {
          o("WAWebModalManager").ModalManager.open(
            p.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
              onOK: o("WAWebModalManager").closeModalManager,
              okText: r("WAWebFbtCommon")("OK"),
              tsNavigationData: {
                surface: "unknown",
                viewName: "cart-order-error",
              },
              children: s._(
                /*BTDS*/ "The seller has deleted your sent cart. Contact the seller for more information.",
              ),
            }),
          );
        };
      f(function () {
        o("WAWebOrderCollection")
          .OrderCollection.findOrder(_, C, v)
          .then(function (e) {
            (E(!1),
              T("SUCCESS"),
              $(e),
              o("WAWebUtilsLogQplEvents").qplAnnotateOrderView(
                (e == null ? void 0 : e.products.length) || 0,
              ),
              o("WAWebUtilsLogQplEvents").qplEndOrderView(2));
          })
          .catch(
            o("WAFilteredCatch").filteredCatch(
              o("WAWebBackendErrors").E404,
              function () {
                (A(),
                  E(!1),
                  T("ERROR"),
                  o("WAWebUtilsLogQplEvents").qplDropOrderView());
              },
            ),
          )
          .catch(function (t) {
            (E(!1),
              T("ERROR"),
              o("WALogger")
                .ERROR(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "Catalog Order Display failed",
                    ])),
                )
                .verbose()
                .sendLogs("OrderDetails: failed to display"),
              o("WAWebUtilsLogQplEvents").qplEndOrderView(3));
          });
      }, []);
      var F = function () {
          if ((o("WAWebDrawerManager").closeDrawerRight(), h != null)) {
            var e = o("WAWebUserPrefsMeUser").getMePnUserOrThrow_DO_NOT_USE(),
              t = o(
                "WAWebBusinessProfileCollection",
              ).BusinessProfileCollection.get(e),
              n = o("WAWebBusinessProfileUtils").hasCatalog(t);
            new (o(
              "WAWebOrderDetailsActionsSmbWamEvent",
            ).OrderDetailsActionsSmbWamEvent)({
              actionCategory: String(
                r("WAWebOrderDetailsActionCategory").RECEIVED_CART,
              ),
              hasCatalog: n,
              hasNote: !!N,
              orderDetailEntryPoint: String(r("WAWebBizEntryPoint").FROM_CART),
              orderDetailsCreationAction: o(
                "WAWebWamEnumOrderDetailsCreationAction",
              ).ORDER_DETAILS_CREATION_ACTION.SEND_DECLINE_CART,
            }).commit();
            var a =
              s._(/*BTDS*/ "We have canceled your order.").toString() +
              "\n" +
              N;
            if (
              (o("WALogger").LOG(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "sendCancelMessage inside WAWebCartOrderDetailDrawer",
                  ])),
              ),
              o("WAWebSendTextMsgChatAction").sendTextMsgToChat(i, a, {
                quotedMsg: new (o("WAWebMsgModel").Msg)(h),
              }),
              !o("WAWebBizGatingUtils").isSellerOrderRevampEnabled())
            )
              return;
            if (h != null) {
              var l = {
                status: o("WAWebProtobufsE2E.pb")
                  .Message$OrderMessage$OrderStatus.DECLINED,
              };
              o("WAWebDBUpdateMessageTable").updateMessageTable(h.id, l);
              var c = o("WAWebMsgCollection").MsgCollection.get(h.id);
              c && c.set(l);
            }
          }
          o("WAWebCmd").Cmd.openChatFromUnread({ chat: i });
        },
        O = o("WAWebBizGatingUtils").isBuyerOrderRequestVariantEnabled()
          ? s._(/*BTDS*/ "Your order request")
          : s._(/*BTDS*/ "Your sent cart"),
        B = o("WAWebBizGatingUtils").isSellerOrderRevampEnabled()
          ? s._(/*BTDS*/ "Order request")
          : s._(/*BTDS*/ "Received cart");
      return p.jsxs(r("WAWebDrawer.react"), {
        ref: n,
        theme: "striped",
        onDrop: o("WAWebDrawerManager").closeDrawerRight,
        tsNavigationData: { surface: "unknown", viewName: "cart-order-detail" },
        children: [
          p.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
            title: S ? O : B,
            type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
            onBack: o("WAWebDrawerManager").closeDrawerRight,
          }),
          p.jsx(r("WAWebDrawerBody.react"), {
            children: p.jsx(b, {
              cancellationMessage: N,
              chat: i,
              fetchState: I,
              flatListController: w.current,
              isLoading: L,
              onOrderCancel: l,
              onOrderCreate: d,
              onProductDetail: m,
              ownerHasReviewed: y,
              order: x,
              sellerJid: C,
              sendCancelMessage: F,
              setCancellationMessage: M,
            }),
          }),
        ],
      });
    }
    ((R.displayName = R.name + " [from " + i.id + "]"), (l.default = R));
  },
  226,
);
