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
      var t = e.chat,
        n = e.onChange,
        a = e.onSubmit,
        i = e.value;
      return p.jsx(
        "div",
        babelHelpers.extends(
          {},
          (d || (d = r("stylex"))).props(
            o("WAWebUISpacing").uiPadding.vert0,
            o("WAWebUISpacing").uiPadding.horiz18,
          ),
          {
            children: p.jsx(r("WAWebOrderDetailTextComposer"), {
              chat: t,
              onChange: n,
              onSubmit: a,
              value: i,
              placeholder: s._(/*BTDS*/ "Add a cancellation note"),
            }),
          },
        ),
      );
    }
    y.displayName = y.name + " [from " + i.id + "]";
    function C(e) {
      var t = e.onCreateOrderClick,
        n = e.onDeclineOrderClick,
        a = e.sellerJid,
        i = o("WAWebWidFactory").createUserWidOrThrow(a),
        l = o("WAWebUserPrefsMeUser").isMePnUser(i);
      return l
        ? p.jsxs(p.Fragment, {
            children: [
              p.jsx(r("WAWebDrawerSection.react"), {
                children: p.jsx(
                  o("WAWebDrawerButton.react").DrawerButtonSimple,
                  {
                    testid: void 0,
                    color: "dark",
                    onClick: t,
                    children: s._(/*BTDS*/ "Create order"),
                  },
                ),
              }),
              p.jsx(r("WAWebDrawerSection.react"), {
                children: p.jsx(
                  o("WAWebDrawerButton.react").DrawerButtonSimple,
                  {
                    testid: void 0,
                    color: "dark",
                    onClick: n,
                    children: s._(/*BTDS*/ "Decline order"),
                  },
                ),
              }),
            ],
          })
        : null;
    }
    C.displayName = C.name + " [from " + i.id + "]";
    function b(e) {
      var t = e.cancellationMessage,
        n = e.chat,
        a = e.fetchState,
        i = e.flatListController,
        l = e.isLoading,
        u = e.onOrderCancel,
        c = e.onOrderCreate,
        m = e.onProductDetail,
        _ = e.order,
        f = e.ownerHasReviewed,
        g = e.sellerJid,
        b = e.sendCancelMessage,
        v = e.setCancellationMessage;
      if (l || _ == null)
        return p.jsx(r("WAWebProductCatalogFetchStateTopBar.react"), {
          fetchState: a,
        });
      var S = "";
      _.products.length > 0
        ? (S = s._(/*BTDS*/ '_j{"*":"{count} items","_1":"1 item"}', [
            s._plural(
              o("WAWebOrderGetters").getTotalItemCount(_) || 0,
              "count",
            ),
          ]))
        : (S = s._(/*BTDS*/ "No items"));
      var R = p.jsx(o("WAWebText.react").WAWebTextTitle, { children: S }),
        L = null,
        E = _.products.reduce(function (e, t) {
          return t.price == null ? e : (e || 0) + t.price * t.quantity;
        }, null),
        k = _.products.reduce(function (e, t) {
          return t.currency == null ? e : t.currency;
        }, null);
      E != null && k != null
        ? (L = s._(/*BTDS*/ "{subtotal} (estimated)", [
            s._param(
              "subtotal",
              o("WAWebCurrencyUtils").formatAmount1000(k, E),
            ),
          ]))
        : (L = s._(/*BTDS*/ "No price entered"));
      var I = p.jsx(o("WAWebText.react").WAWebTextSmall, {
          as: "div",
          children: L,
        }),
        T = null;
      if (_.createdAt != null) {
        var D = o("WAWebClock").Clock.timeStr(_.createdAt);
        T = p.jsx(o("WAWebText.react").WAWebTextSmall, { children: "" + D });
      }
      return p.jsxs(p.Fragment, {
        children: [
          p.jsxs(r("WAWebDrawerSection.react"), {
            children: [
              p.jsx(r("WAWebProductCatalogFetchStateTopBar.react"), {
                fetchState: a,
              }),
              p.jsxs(
                "div",
                babelHelpers.extends(
                  {},
                  (d || (d = r("stylex"))).props(
                    h.defaultBg,
                    o("WAWebUISpacing").uiPadding.all18,
                  ),
                  { children: [R, I] },
                ),
              ),
              p.jsx(r("WAWebOrderProductList.react"), {
                flatListController: i,
                onProductDetail: m,
                order: _,
                sellerJid: g,
              }),
              p.jsx(
                "div",
                babelHelpers.extends(
                  {},
                  d.props(h.defaultBg, o("WAWebUISpacing").uiPadding.all18),
                  { children: T },
                ),
              ),
              f
                ? p.jsx(y, { chat: n, value: t, onSubmit: b, onChange: v })
                : null,
            ],
          }),
          o("WAWebBizGatingUtils").orderDetailsFromCartEnabled() && !f
            ? p.jsx(C, {
                sellerJid: g,
                onCreateOrderClick: function () {
                  return c(r("WANullthrows")(_));
                },
                onDeclineOrderClick: u,
              })
            : null,
        ],
      });
    }
    b.displayName = b.name + " [from " + i.id + "]";
    function v(t) {
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
    ((v.displayName = v.name + " [from " + i.id + "]"), (l.default = v));
  },
  226,
);
