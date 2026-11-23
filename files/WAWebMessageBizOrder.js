__d(
  "WAWebMessageBizOrder",
  [
    "fbt",
    "WAWebBizEntryPoint",
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
    "WAWebMsgCasts",
    "WAWebMsgCollection",
    "WAWebMsgGetters",
    "WAWebMsgType",
    "WAWebOrderCollection",
    "WAWebOrderDetailsActionCategory",
    "WAWebOrderDetailsActionsSmbWamEvent",
    "WAWebOrderGatingUtils",
    "WAWebOrderLogEvents",
    "WAWebProductCatalogContext",
    "WAWebProductCatalogSession",
    "WAWebProductDetailsFlowLoadable",
    "WAWebProtobufsE2E.pb",
    "WAWebUserPrefsMeUser",
    "WAWebWamEnumCatalogEntryPoint",
    "WAWebWamEnumOrderDetailsCreationAction",
    "nullthrows",
    "react",
    "useWAWebConversationPanelCanCompose",
    "useWAWebMsgValues",
    "useWAWebUIM",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = {
        messageText: { width: "x1m258z3", marginBottom: "x12nagc", $$css: !0 },
      };
    function d(e) {
      var t = e.displayAuthor,
        n = e.msgKey,
        a = o("WAWebUserPrefsMeUser").getMaybeMePnUser(),
        i = o("useWAWebMsgValues").useMsgValues(
          n,
          o("WAWebMsgCasts").castToOrderMsg,
          [
            o("WAWebMsgGetters").getSender,
            o("WAWebMsgGetters").getIsNewsletterMsg,
            o("WAWebMsgGetters").getMessage,
            o("WAWebFrontendMsgGetters").getRtl,
            o("WAWebFrontendMsgGetters").getDir,
            o("WAWebFrontendMsgGetters").getOrderStatus,
          ],
        ),
        l = i[0],
        d = i[1],
        m = i[2],
        p = i[3],
        _ = i[4],
        f = i[5],
        g = (l == null ? void 0 : l.equals(a)) === !0,
        h = r("useWAWebUIM")(),
        y = r("nullthrows")(
          o("WAWebFrontendMsgGetters").getMaybeChatByMsgKey(n, d),
          "Order bubble " + n.toString() + " rendered without its chat",
        ),
        C = r("useWAWebConversationPanelCanCompose")(y),
        b = C[0],
        v = function (t) {
          var e;
          if ((t && t.stopPropagation(), !!b)) {
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
                a != null &&
                o("WAWebBusinessProfileUtils").hasCatalog(
                  o(
                    "WAWebBusinessProfileCollection",
                  ).BusinessProfileCollection.get(a),
                ),
            }).commit();
            var i =
              (e = o("WAWebMsgCollection").MsgCollection.get(n)) == null
                ? void 0
                : e.safe();
            if (!(i == null || i.type !== o("WAWebMsgType").MSG_TYPE.ORDER)) {
              var l = i.orderId,
                s = i.sellerJid,
                c = i.token;
              if (l != null && s != null && c != null) {
                if (
                  o("WAWebOrderGatingUtils").isBuyerOrderRevampEnabled() &&
                  f != null &&
                  f !==
                    o("WAWebProtobufsE2E.pb").Message$OrderMessage$OrderStatus
                      .INQUIRY
                )
                  return;
                var d = o(
                  "WAWebProductCatalogContext",
                ).buildProductCatalogContext(
                  new (o("WAWebProductCatalogSession").ProductCatalogSession)(),
                  o("WAWebContactUtils").getMaybeBizPlatformForLogging(s),
                  o("WAWebWamEnumCatalogEntryPoint").CATALOG_ENTRY_POINT
                    .CATALOG_ENTRY_POINT_ORDER_MESSAGE,
                );
                (o("WAWebOrderLogEvents").logOrderMessageClick({
                  catalogContext: d,
                  catalogOwnerJid: s,
                }),
                  i.orderId != null &&
                    (o("WAWebMessageLogQplEvents").qplStartOrderView(
                      !!o("WAWebOrderCollection").OrderCollection.get(l),
                    ),
                    o("WAWebDrawerManager").DrawerManager.openDrawerRight(
                      u.jsx(
                        o("WAWebProductDetailsFlowLoadable")
                          .ProductDetailsFlowLoadable,
                        {
                          chat: y,
                          orderMessage: i,
                          orderId: l,
                          token: c,
                          userIsCartOwner: g,
                          sellerJid: s,
                        },
                      ),
                      { transition: "slide-left", uim: h, newDrawerContext: d },
                    )));
              }
            }
          }
        },
        S = u.jsx(o("WAWebEmojiText.react").EmojiText, {
          text: m,
          dirMismatch: p !== r("WAWebL10N").isRTL(),
          direction: _,
          inferLinesDirection: !0,
        }),
        R = u.jsx("div", {
          className: "x10l6tqk xtijo5x x1ey2m1c",
          children: u.jsx(o("WAWebMessageMeta.react").Meta, { msgKey: n }),
        }),
        L = function () {
          return o("WAWebOrderGatingUtils").isSellerOrderRevampEnabled()
            ? f == null ||
                f ===
                  o("WAWebProtobufsE2E.pb").Message$OrderMessage$OrderStatus
                    .INQUIRY
            : !0;
        },
        E = o("WAWebOrderGatingUtils").isBuyerOrderRequestVariantEnabled()
          ? s._(/*BTDS*/ "")
          : s._(/*BTDS*/ ""),
        k = o("WAWebOrderGatingUtils").isSellerOrderRevampEnabled()
          ? s._(/*BTDS*/ "")
          : s._(/*BTDS*/ ""),
        I = u.jsx(o("WAWebMessageBubbleActions.react").BubbleActions, {
          items: [{ label: g ? E : k, testid: "view-cart-button", onClick: v }],
        });
      return u.jsxs(r("WAWebMessageTextBubble.react"), {
        msgKey: n,
        displayAuthor: t,
        hideMeta: !0,
        children: [
          u.jsx("div", {
            className: "x1198e8h x1lxpwgx xzueoph xw01apr",
            children: u.jsx(o("WAWebBizOrderPreview.react").OrderPreview, {
              msgKey: n,
              onClick: v,
            }),
          }),
          u.jsxs(r("WAWebMessageSpacerText.react"), {
            msgKey: n,
            "data-id": n,
            xstyle: c.messageText,
            children: [S, R],
          }),
          b && L() && I,
        ],
      });
    }
    ((d.displayName = d.name + " [from " + i.id + "]"), (l.default = d));
  },
  226,
);
