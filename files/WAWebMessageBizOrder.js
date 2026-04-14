__d(
  "WAWebMessageBizOrder",
  [
    "fbt",
    "WAWebBizEntryPoint",
    "WAWebBizGatingUtils",
    "WAWebBizOrderPreview.react",
    "WAWebBusinessProfileCollection",
    "WAWebBusinessProfileUtils",
    "WAWebContactUtils",
    "WAWebDrawerManager",
    "WAWebEmojiText.react",
    "WAWebFrontendMsgGetters",
    "WAWebL10N",
    "WAWebMessageBubbleActions.react",
    "WAWebMessageLogQplEvents",
    "WAWebMessageMeta.react",
    "WAWebMessageSpacerText.react",
    "WAWebMessageTextBubble.react",
    "WAWebMsgGetters",
    "WAWebOrderCollection",
    "WAWebOrderDetailsActionCategory",
    "WAWebOrderDetailsActionsSmbWamEvent",
    "WAWebOrderLogEvents",
    "WAWebProductCatalogContext",
    "WAWebProductCatalogSession",
    "WAWebProductDetailsFlowLoadable",
    "WAWebProtobufsE2E.pb",
    "WAWebUserPrefsMeUser",
    "WAWebWamEnumCatalogEntryPoint",
    "WAWebWamEnumOrderDetailsCreationAction",
    "react",
    "useWAWebConversationPanelCanCompose",
    "useWAWebUIM",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t,
        n = e.displayAuthor,
        a = e.msg,
        i = o("WAWebUserPrefsMeUser").getMaybeMePnUser(),
        l =
          ((t = o("WAWebMsgGetters").getSender(a)) == null
            ? void 0
            : t.equals(i)) === !0,
        c = r("useWAWebUIM")(),
        d = a.unsafe(),
        m = r("useWAWebConversationPanelCanCompose")(
          o("WAWebFrontendMsgGetters").getChat(d),
        ),
        p = m[0],
        _ = function (t) {
          if ((t && t.stopPropagation(), !!p)) {
            new (o(
              "WAWebOrderDetailsActionsSmbWamEvent",
            ).OrderDetailsActionsSmbWamEvent)({
              orderDetailsCreationAction: o(
                "WAWebWamEnumOrderDetailsCreationAction",
              ).ORDER_DETAILS_CREATION_ACTION.CLICK_VIEW_RECEIVED_CART,
              actionCategory: String(
                r("WAWebOrderDetailsActionCategory").RECEIVED_CART,
              ),
              orderDetailEntryPoint: String(r("WAWebBizEntryPoint").FROM_CART),
              hasCatalog:
                i != null &&
                o("WAWebBusinessProfileUtils").hasCatalog(
                  o(
                    "WAWebBusinessProfileCollection",
                  ).BusinessProfileCollection.get(i),
                ),
            }).commit();
            var e = a.orderId,
              n = a.sellerJid,
              s = a.token;
            if (e != null && n != null && s != null) {
              if (
                o("WAWebBizGatingUtils").isBuyerOrderRevampEnabled() &&
                a.status !==
                  o("WAWebProtobufsE2E.pb").Message$OrderMessage$OrderStatus
                    .INQUIRY
              )
                return;
              var m = o(
                "WAWebProductCatalogContext",
              ).buildProductCatalogContext(
                new (o("WAWebProductCatalogSession").ProductCatalogSession)(),
                o("WAWebContactUtils").getMaybeBizPlatformForLogging(n),
                o("WAWebWamEnumCatalogEntryPoint").CATALOG_ENTRY_POINT
                  .CATALOG_ENTRY_POINT_ORDER_MESSAGE,
              );
              (o("WAWebOrderLogEvents").logOrderMessageClick({
                catalogContext: m,
                catalogOwnerJid: n,
              }),
                a.orderId != null &&
                  (o("WAWebMessageLogQplEvents").qplStartOrderView(
                    !!o("WAWebOrderCollection").OrderCollection.get(e),
                  ),
                  o("WAWebDrawerManager").DrawerManager.openDrawerRight(
                    u.jsx(
                      o("WAWebProductDetailsFlowLoadable")
                        .ProductDetailsFlowLoadable,
                      {
                        chat: o("WAWebFrontendMsgGetters").getChat(d),
                        orderMessage: a,
                        orderId: e,
                        token: s,
                        userIsCartOwner: l,
                        sellerJid: n,
                      },
                    ),
                    { transition: "slide-left", uim: c, newDrawerContext: m },
                  )));
            }
          }
        },
        f = u.jsx(o("WAWebEmojiText.react").EmojiText, {
          text: a.message,
          dirMismatch:
            o("WAWebFrontendMsgGetters").getRtl(a) !== r("WAWebL10N").isRTL(),
          direction: o("WAWebFrontendMsgGetters").getDir(a),
          inferLinesDirection: !0,
        }),
        g = u.jsx("div", {
          className: "x10l6tqk xtijo5x x1ey2m1c",
          children: u.jsx(o("WAWebMessageMeta.react").Meta, { msg: a }),
        }),
        h = function () {
          return o("WAWebBizGatingUtils").isSellerOrderRevampEnabled()
            ? a.status ===
                o("WAWebProtobufsE2E.pb").Message$OrderMessage$OrderStatus
                  .INQUIRY
            : !0;
        },
        y = o("WAWebBizGatingUtils").isBuyerOrderRequestVariantEnabled()
          ? s._(/*BTDS*/ "View details")
          : s._(/*BTDS*/ "View sent cart"),
        C = o("WAWebBizGatingUtils").isSellerOrderRevampEnabled()
          ? s._(/*BTDS*/ "View order request")
          : s._(/*BTDS*/ "View received cart"),
        b = u.jsx(o("WAWebMessageBubbleActions.react").BubbleActions, {
          items: [{ label: l ? y : C, testid: "view-cart-button", onClick: _ }],
        });
      return u.jsxs(r("WAWebMessageTextBubble.react"), {
        msg: a,
        displayAuthor: n,
        hideMeta: !0,
        children: [
          u.jsx("div", {
            className: "x1198e8h x1lxpwgx xzueoph xw01apr",
            children: u.jsx(o("WAWebBizOrderPreview.react").OrderPreview, {
              msg: d,
              onClick: _,
            }),
          }),
          u.jsxs(r("WAWebMessageSpacerText.react"), {
            msg: d,
            "data-id": a.id,
            className: "x1m258z3 x12nagc",
            children: [f, g],
          }),
          p && h() && b,
        ],
      });
    }
    ((c.displayName = c.name + " [from " + i.id + "]"), (l.default = c));
  },
  226,
);
