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
    "WAWebMsgGetters",
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
    "react",
    "react-compiler-runtime",
    "useWAWebConversationPanelCanCompose",
    "useWAWebUIM",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t,
        n = o("react-compiler-runtime").c(32),
        a = e.displayAuthor,
        i = e.msg,
        l = o("WAWebUserPrefsMeUser").getMaybeMePnUser(),
        c = i.unsafe(),
        d =
          ((t = o("WAWebMsgGetters").getSender(c)) == null
            ? void 0
            : t.equals(l)) === !0,
        m = r("useWAWebUIM")(),
        p = r("useWAWebConversationPanelCanCompose")(
          o("WAWebFrontendMsgGetters").getChat(c),
        ),
        _ = p[0],
        f = function (t) {
          if ((t && t.stopPropagation(), !!_)) {
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
                l != null &&
                o("WAWebBusinessProfileUtils").hasCatalog(
                  o(
                    "WAWebBusinessProfileCollection",
                  ).BusinessProfileCollection.get(l),
                ),
            }).commit();
            var e = i.orderId,
              n = i.sellerJid,
              a = i.token;
            if (e != null && n != null && a != null) {
              if (
                o("WAWebOrderGatingUtils").isBuyerOrderRevampEnabled() &&
                i.status != null &&
                i.status !==
                  o("WAWebProtobufsE2E.pb").Message$OrderMessage$OrderStatus
                    .INQUIRY
              )
                return;
              var s = o(
                "WAWebProductCatalogContext",
              ).buildProductCatalogContext(
                new (o("WAWebProductCatalogSession").ProductCatalogSession)(),
                o("WAWebContactUtils").getMaybeBizPlatformForLogging(n),
                o("WAWebWamEnumCatalogEntryPoint").CATALOG_ENTRY_POINT
                  .CATALOG_ENTRY_POINT_ORDER_MESSAGE,
              );
              (o("WAWebOrderLogEvents").logOrderMessageClick({
                catalogContext: s,
                catalogOwnerJid: n,
              }),
                i.orderId != null &&
                  (o("WAWebMessageLogQplEvents").qplStartOrderView(
                    !!o("WAWebOrderCollection").OrderCollection.get(e),
                  ),
                  o("WAWebDrawerManager").DrawerManager.openDrawerRight(
                    u.jsx(
                      o("WAWebProductDetailsFlowLoadable")
                        .ProductDetailsFlowLoadable,
                      {
                        chat: o("WAWebFrontendMsgGetters").getChat(c),
                        orderMessage: i,
                        orderId: e,
                        token: a,
                        userIsCartOwner: d,
                        sellerJid: n,
                      },
                    ),
                    { transition: "slide-left", uim: m, newDrawerContext: s },
                  )));
            }
          }
        },
        g = o("WAWebEmojiText.react").EmojiText,
        h = i.message,
        y = o("WAWebFrontendMsgGetters").getRtl(c),
        C;
      n[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((C = r("WAWebL10N").isRTL()), (n[0] = C))
        : (C = n[0]);
      var b = y !== C,
        v = o("WAWebFrontendMsgGetters").getDir(c),
        S;
      n[1] !== g || n[2] !== i.message || n[3] !== b || n[4] !== v
        ? ((S = u.jsx(g, {
            text: h,
            dirMismatch: b,
            direction: v,
            inferLinesDirection: !0,
          })),
          (n[1] = g),
          (n[2] = i.message),
          (n[3] = b),
          (n[4] = v),
          (n[5] = S))
        : (S = n[5]);
      var R = S,
        L;
      n[6] === Symbol.for("react.memo_cache_sentinel")
        ? ((L = { className: "x10l6tqk xtijo5x x1ey2m1c" }), (n[6] = L))
        : (L = n[6]);
      var E;
      n[7] !== i.id
        ? ((E = u.jsx(
            "div",
            babelHelpers.extends({}, L, {
              children: u.jsx(o("WAWebMessageMeta.react").Meta, {
                msgKey: i.id,
              }),
            }),
          )),
          (n[7] = i.id),
          (n[8] = E))
        : (E = n[8]);
      var k = E,
        I;
      n[9] !== i.status
        ? ((I = function () {
            return o("WAWebOrderGatingUtils").isSellerOrderRevampEnabled()
              ? i.status == null ||
                  i.status ===
                    o("WAWebProtobufsE2E.pb").Message$OrderMessage$OrderStatus
                      .INQUIRY
              : !0;
          }),
          (n[9] = i.status),
          (n[10] = I))
        : (I = n[10]);
      var T = I,
        D;
      n[11] === Symbol.for("react.memo_cache_sentinel")
        ? ((D = o("WAWebOrderGatingUtils").isBuyerOrderRequestVariantEnabled()
            ? s._(/*BTDS*/ "View details")
            : s._(/*BTDS*/ "View sent cart")),
          (n[11] = D))
        : (D = n[11]);
      var x = D,
        $;
      n[12] === Symbol.for("react.memo_cache_sentinel")
        ? (($ = o("WAWebOrderGatingUtils").isSellerOrderRevampEnabled()
            ? s._(/*BTDS*/ "View order request")
            : s._(/*BTDS*/ "View received cart")),
          (n[12] = $))
        : ($ = n[12]);
      var P = $,
        N = d ? x : P,
        M;
      n[13] !== f || n[14] !== N
        ? ((M = u.jsx(o("WAWebMessageBubbleActions.react").BubbleActions, {
            items: [{ label: N, testid: "view-cart-button", onClick: f }],
          })),
          (n[13] = f),
          (n[14] = N),
          (n[15] = M))
        : (M = n[15]);
      var w = M,
        A;
      n[16] === Symbol.for("react.memo_cache_sentinel")
        ? ((A = { className: "x1198e8h x1lxpwgx xzueoph xw01apr" }),
          (n[16] = A))
        : (A = n[16]);
      var F;
      n[17] !== c || n[18] !== f
        ? ((F = u.jsx(
            "div",
            babelHelpers.extends({}, A, {
              children: u.jsx(o("WAWebBizOrderPreview.react").OrderPreview, {
                msg: c,
                onClick: f,
              }),
            }),
          )),
          (n[17] = c),
          (n[18] = f),
          (n[19] = F))
        : (F = n[19]);
      var O = c.id,
        B = i.id,
        W;
      n[20] === Symbol.for("react.memo_cache_sentinel")
        ? ((W = "x1m258z3 x12nagc"), (n[20] = W))
        : (W = n[20]);
      var q;
      n[21] !== R || n[22] !== k || n[23] !== i.id || n[24] !== c.id
        ? ((q = u.jsxs(r("WAWebMessageSpacerText.react"), {
            msgKey: O,
            "data-id": B,
            className: W,
            children: [R, k],
          })),
          (n[21] = R),
          (n[22] = k),
          (n[23] = i.id),
          (n[24] = c.id),
          (n[25] = q))
        : (q = n[25]);
      var U = _ && T() && w,
        V;
      return (
        n[26] !== a || n[27] !== i || n[28] !== F || n[29] !== q || n[30] !== U
          ? ((V = u.jsxs(r("WAWebMessageTextBubble.react"), {
              msg: i,
              displayAuthor: a,
              hideMeta: !0,
              children: [F, q, U],
            })),
            (n[26] = a),
            (n[27] = i),
            (n[28] = F),
            (n[29] = q),
            (n[30] = U),
            (n[31] = V))
          : (V = n[31]),
        V
      );
    }
    l.default = c;
  },
  226,
);
