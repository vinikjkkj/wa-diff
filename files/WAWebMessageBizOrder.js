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
    "react-compiler-runtime",
    "useWAWebConversationPanelCanCompose",
    "useWAWebMsgValues",
    "useWAWebUIM",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t = o("react-compiler-runtime").c(44),
        n = e.displayAuthor,
        a = e.msgKey,
        i = o("WAWebUserPrefsMeUser").getMaybeMePnUser(),
        l;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((l = [
            o("WAWebMsgGetters").getSender,
            o("WAWebMsgGetters").getIsNewsletterMsg,
            o("WAWebFrontendMsgGetters").getOrderStatus,
            o("WAWebMsgGetters").getMessage,
            o("WAWebFrontendMsgGetters").getRtl,
            o("WAWebFrontendMsgGetters").getDir,
          ]),
          (t[0] = l))
        : (l = t[0]);
      var c = o("useWAWebMsgValues").useMsgValues(a, l),
        d = c[0],
        m = c[1],
        p = c[2],
        _ = c[3],
        f = c[4],
        g = c[5],
        h = (d == null ? void 0 : d.equals(i)) === !0,
        y = r("useWAWebUIM")(),
        C;
      if (t[1] !== m || t[2] !== a) {
        var b = o("WAWebFrontendMsgGetters").getMaybeChatByMsgKey(a, m),
          v;
        (t[4] !== a ? ((v = a.toString()), (t[4] = a), (t[5] = v)) : (v = t[5]),
          (C = r("nullthrows")(
            b,
            "Order bubble " + v + " rendered without its chat",
          )),
          (t[1] = m),
          (t[2] = a),
          (t[3] = C));
      } else C = t[3];
      var S = C,
        R = r("useWAWebConversationPanelCanCompose")(S),
        L = R[0],
        E;
      t[6] !== L ||
      t[7] !== S ||
      t[8] !== i ||
      t[9] !== a ||
      t[10] !== p ||
      t[11] !== y ||
      t[12] !== h
        ? ((E = function (t) {
            var e;
            if ((t && t.stopPropagation(), !!L)) {
              new (o(
                "WAWebOrderDetailsActionsSmbWamEvent",
              ).OrderDetailsActionsSmbWamEvent)({
                orderDetailsCreationAction: o(
                  "WAWebWamEnumOrderDetailsCreationAction",
                ).ORDER_DETAILS_CREATION_ACTION.CLICK_VIEW_RECEIVED_CART,
                actionCategory: String(
                  r("WAWebOrderDetailsActionCategory").RECEIVED_CART,
                ),
                orderDetailEntryPoint: String(
                  r("WAWebBizEntryPoint").FROM_CART,
                ),
                hasCatalog:
                  i != null &&
                  o("WAWebBusinessProfileUtils").hasCatalog(
                    o(
                      "WAWebBusinessProfileCollection",
                    ).BusinessProfileCollection.get(i),
                  ),
              }).commit();
              var n =
                (e = o("WAWebMsgCollection").MsgCollection.get(a)) == null
                  ? void 0
                  : e.safe();
              if (!(n == null || n.type !== o("WAWebMsgType").MSG_TYPE.ORDER)) {
                var l = n.orderId,
                  s = n.sellerJid,
                  c = n.token;
                if (l != null && s != null && c != null) {
                  if (
                    o("WAWebOrderGatingUtils").isBuyerOrderRevampEnabled() &&
                    p != null &&
                    p !==
                      o("WAWebProtobufsE2E.pb").Message$OrderMessage$OrderStatus
                        .INQUIRY
                  )
                    return;
                  var d = o(
                    "WAWebProductCatalogContext",
                  ).buildProductCatalogContext(
                    new (o(
                      "WAWebProductCatalogSession",
                    ).ProductCatalogSession)(),
                    o("WAWebContactUtils").getMaybeBizPlatformForLogging(s),
                    o("WAWebWamEnumCatalogEntryPoint").CATALOG_ENTRY_POINT
                      .CATALOG_ENTRY_POINT_ORDER_MESSAGE,
                  );
                  (o("WAWebOrderLogEvents").logOrderMessageClick({
                    catalogContext: d,
                    catalogOwnerJid: s,
                  }),
                    n.orderId != null &&
                      (o("WAWebMessageLogQplEvents").qplStartOrderView(
                        !!o("WAWebOrderCollection").OrderCollection.get(l),
                      ),
                      o("WAWebDrawerManager").DrawerManager.openDrawerRight(
                        u.jsx(
                          o("WAWebProductDetailsFlowLoadable")
                            .ProductDetailsFlowLoadable,
                          {
                            chat: S,
                            orderMessage: n,
                            orderId: l,
                            token: c,
                            userIsCartOwner: h,
                            sellerJid: s,
                          },
                        ),
                        {
                          transition: "slide-left",
                          uim: y,
                          newDrawerContext: d,
                        },
                      )));
                }
              }
            }
          }),
          (t[6] = L),
          (t[7] = S),
          (t[8] = i),
          (t[9] = a),
          (t[10] = p),
          (t[11] = y),
          (t[12] = h),
          (t[13] = E))
        : (E = t[13]);
      var k = E,
        I;
      t[14] === Symbol.for("react.memo_cache_sentinel")
        ? ((I = r("WAWebL10N").isRTL()), (t[14] = I))
        : (I = t[14]);
      var T = f !== I,
        D;
      t[15] !== g || t[16] !== _ || t[17] !== T
        ? ((D = u.jsx(o("WAWebEmojiText.react").EmojiText, {
            text: _,
            dirMismatch: T,
            direction: g,
            inferLinesDirection: !0,
          })),
          (t[15] = g),
          (t[16] = _),
          (t[17] = T),
          (t[18] = D))
        : (D = t[18]);
      var x = D,
        $;
      t[19] === Symbol.for("react.memo_cache_sentinel")
        ? (($ = { className: "x10l6tqk xtijo5x x1ey2m1c" }), (t[19] = $))
        : ($ = t[19]);
      var P;
      t[20] !== a
        ? ((P = u.jsx(
            "div",
            babelHelpers.extends({}, $, {
              children: u.jsx(o("WAWebMessageMeta.react").Meta, { msgKey: a }),
            }),
          )),
          (t[20] = a),
          (t[21] = P))
        : (P = t[21]);
      var N = P,
        M;
      t[22] !== p
        ? ((M = function () {
            return o("WAWebOrderGatingUtils").isSellerOrderRevampEnabled()
              ? p == null ||
                  p ===
                    o("WAWebProtobufsE2E.pb").Message$OrderMessage$OrderStatus
                      .INQUIRY
              : !0;
          }),
          (t[22] = p),
          (t[23] = M))
        : (M = t[23]);
      var w = M,
        A;
      t[24] === Symbol.for("react.memo_cache_sentinel")
        ? ((A = o("WAWebOrderGatingUtils").isBuyerOrderRequestVariantEnabled()
            ? s._(/*BTDS*/ "View details")
            : s._(/*BTDS*/ "View sent cart")),
          (t[24] = A))
        : (A = t[24]);
      var F = A,
        O;
      t[25] === Symbol.for("react.memo_cache_sentinel")
        ? ((O = o("WAWebOrderGatingUtils").isSellerOrderRevampEnabled()
            ? s._(/*BTDS*/ "View order request")
            : s._(/*BTDS*/ "View received cart")),
          (t[25] = O))
        : (O = t[25]);
      var B = O,
        W = h ? F : B,
        q;
      t[26] !== k || t[27] !== W
        ? ((q = u.jsx(o("WAWebMessageBubbleActions.react").BubbleActions, {
            items: [{ label: W, testid: "view-cart-button", onClick: k }],
          })),
          (t[26] = k),
          (t[27] = W),
          (t[28] = q))
        : (q = t[28]);
      var U = q,
        V;
      t[29] === Symbol.for("react.memo_cache_sentinel")
        ? ((V = { className: "x1198e8h x1lxpwgx xzueoph xw01apr" }),
          (t[29] = V))
        : (V = t[29]);
      var H;
      t[30] !== a || t[31] !== k
        ? ((H = u.jsx(
            "div",
            babelHelpers.extends({}, V, {
              children: u.jsx(o("WAWebBizOrderPreview.react").OrderPreview, {
                msgKey: a,
                onClick: k,
              }),
            }),
          )),
          (t[30] = a),
          (t[31] = k),
          (t[32] = H))
        : (H = t[32]);
      var G;
      t[33] === Symbol.for("react.memo_cache_sentinel")
        ? ((G = "x1m258z3 x12nagc"), (t[33] = G))
        : (G = t[33]);
      var z;
      t[34] !== x || t[35] !== N || t[36] !== a
        ? ((z = u.jsxs(r("WAWebMessageSpacerText.react"), {
            msgKey: a,
            "data-id": a,
            className: G,
            children: [x, N],
          })),
          (t[34] = x),
          (t[35] = N),
          (t[36] = a),
          (t[37] = z))
        : (z = t[37]);
      var j = L && w() && U,
        K;
      return (
        t[38] !== n || t[39] !== a || t[40] !== H || t[41] !== z || t[42] !== j
          ? ((K = u.jsxs(r("WAWebMessageTextBubble.react"), {
              msgKey: a,
              displayAuthor: n,
              hideMeta: !0,
              children: [H, z, j],
            })),
            (t[38] = n),
            (t[39] = a),
            (t[40] = H),
            (t[41] = z),
            (t[42] = j),
            (t[43] = K))
          : (K = t[43]),
        K
      );
    }
    l.default = c;
  },
  226,
);
