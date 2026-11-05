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
    "react-compiler-runtime",
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
      var t = o("react-compiler-runtime").c(44),
        n = e.displayAuthor,
        a = e.msgKey,
        i = o("WAWebUserPrefsMeUser").getMaybeMePnUser(),
        l;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((l = [
            o("WAWebMsgGetters").getSender,
            o("WAWebMsgGetters").getIsNewsletterMsg,
            o("WAWebMsgGetters").getMessage,
            o("WAWebFrontendMsgGetters").getRtl,
            o("WAWebFrontendMsgGetters").getDir,
          ]),
          (t[0] = l))
        : (l = t[0]);
      var d = o("useWAWebMsgValues").useMsgValues(
          a,
          o("WAWebMsgCasts").castToOrderMsg,
          l,
        ),
        m = d[0],
        p = d[1],
        _ = d[2],
        f = d[3],
        g = d[4],
        h;
      t[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((h = [o("WAWebFrontendMsgGetters").getOrderStatus]), (t[1] = h))
        : (h = t[1]);
      var y = o("useWAWebMsgValues").useMsgValues(a, h),
        C = y[0],
        b = (m == null ? void 0 : m.equals(i)) === !0,
        v = r("useWAWebUIM")(),
        S;
      if (t[2] !== p || t[3] !== a) {
        var R = o("WAWebFrontendMsgGetters").getMaybeChatByMsgKey(a, p),
          L;
        (t[5] !== a ? ((L = a.toString()), (t[5] = a), (t[6] = L)) : (L = t[6]),
          (S = r("nullthrows")(
            R,
            "Order bubble " + L + " rendered without its chat",
          )),
          (t[2] = p),
          (t[3] = a),
          (t[4] = S));
      } else S = t[4];
      var E = S,
        k = r("useWAWebConversationPanelCanCompose")(E),
        I = k[0],
        T;
      t[7] !== I ||
      t[8] !== E ||
      t[9] !== i ||
      t[10] !== a ||
      t[11] !== C ||
      t[12] !== v ||
      t[13] !== b
        ? ((T = function (t) {
            var e;
            if ((t && t.stopPropagation(), !!I)) {
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
                    C != null &&
                    C !==
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
                            chat: E,
                            orderMessage: n,
                            orderId: l,
                            token: c,
                            userIsCartOwner: b,
                            sellerJid: s,
                          },
                        ),
                        {
                          transition: "slide-left",
                          uim: v,
                          newDrawerContext: d,
                        },
                      )));
                }
              }
            }
          }),
          (t[7] = I),
          (t[8] = E),
          (t[9] = i),
          (t[10] = a),
          (t[11] = C),
          (t[12] = v),
          (t[13] = b),
          (t[14] = T))
        : (T = t[14]);
      var D = T,
        x;
      t[15] === Symbol.for("react.memo_cache_sentinel")
        ? ((x = r("WAWebL10N").isRTL()), (t[15] = x))
        : (x = t[15]);
      var $ = f !== x,
        P;
      t[16] !== g || t[17] !== _ || t[18] !== $
        ? ((P = u.jsx(o("WAWebEmojiText.react").EmojiText, {
            text: _,
            dirMismatch: $,
            direction: g,
            inferLinesDirection: !0,
          })),
          (t[16] = g),
          (t[17] = _),
          (t[18] = $),
          (t[19] = P))
        : (P = t[19]);
      var N = P,
        M;
      t[20] === Symbol.for("react.memo_cache_sentinel")
        ? ((M = { className: "x10l6tqk xtijo5x x1ey2m1c" }), (t[20] = M))
        : (M = t[20]);
      var w;
      t[21] !== a
        ? ((w = u.jsx(
            "div",
            babelHelpers.extends({}, M, {
              children: u.jsx(o("WAWebMessageMeta.react").Meta, { msgKey: a }),
            }),
          )),
          (t[21] = a),
          (t[22] = w))
        : (w = t[22]);
      var A = w,
        F;
      t[23] !== C
        ? ((F = function () {
            return o("WAWebOrderGatingUtils").isSellerOrderRevampEnabled()
              ? C == null ||
                  C ===
                    o("WAWebProtobufsE2E.pb").Message$OrderMessage$OrderStatus
                      .INQUIRY
              : !0;
          }),
          (t[23] = C),
          (t[24] = F))
        : (F = t[24]);
      var O = F,
        B;
      t[25] === Symbol.for("react.memo_cache_sentinel")
        ? ((B = o("WAWebOrderGatingUtils").isBuyerOrderRequestVariantEnabled()
            ? s._(/*BTDS*/ "View details")
            : s._(/*BTDS*/ "View sent cart")),
          (t[25] = B))
        : (B = t[25]);
      var W = B,
        q;
      t[26] === Symbol.for("react.memo_cache_sentinel")
        ? ((q = o("WAWebOrderGatingUtils").isSellerOrderRevampEnabled()
            ? s._(/*BTDS*/ "View order request")
            : s._(/*BTDS*/ "View received cart")),
          (t[26] = q))
        : (q = t[26]);
      var U = q,
        V = b ? W : U,
        H;
      t[27] !== D || t[28] !== V
        ? ((H = u.jsx(o("WAWebMessageBubbleActions.react").BubbleActions, {
            items: [{ label: V, testid: "view-cart-button", onClick: D }],
          })),
          (t[27] = D),
          (t[28] = V),
          (t[29] = H))
        : (H = t[29]);
      var G = H,
        z;
      t[30] === Symbol.for("react.memo_cache_sentinel")
        ? ((z = { className: "x1198e8h x1lxpwgx xzueoph xw01apr" }),
          (t[30] = z))
        : (z = t[30]);
      var j;
      t[31] !== a || t[32] !== D
        ? ((j = u.jsx(
            "div",
            babelHelpers.extends({}, z, {
              children: u.jsx(o("WAWebBizOrderPreview.react").OrderPreview, {
                msgKey: a,
                onClick: D,
              }),
            }),
          )),
          (t[31] = a),
          (t[32] = D),
          (t[33] = j))
        : (j = t[33]);
      var K;
      t[34] !== N || t[35] !== A || t[36] !== a
        ? ((K = u.jsxs(r("WAWebMessageSpacerText.react"), {
            msgKey: a,
            "data-id": a,
            xstyle: c.messageText,
            children: [N, A],
          })),
          (t[34] = N),
          (t[35] = A),
          (t[36] = a),
          (t[37] = K))
        : (K = t[37]);
      var Q = I && O() && G,
        X;
      return (
        t[38] !== n || t[39] !== a || t[40] !== j || t[41] !== K || t[42] !== Q
          ? ((X = u.jsxs(r("WAWebMessageTextBubble.react"), {
              msgKey: a,
              displayAuthor: n,
              hideMeta: !0,
              children: [j, K, Q],
            })),
            (t[38] = n),
            (t[39] = a),
            (t[40] = j),
            (t[41] = K),
            (t[42] = Q),
            (t[43] = X))
          : (X = t[43]),
        X
      );
    }
    l.default = d;
  },
  226,
);
