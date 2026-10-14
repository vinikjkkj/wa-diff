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
      u = e || (e = o("react")),
      c = {
        messageText: { width: "x1m258z3", marginBottom: "x12nagc", $$css: !0 },
      };
    function d(e) {
      var t = o("react-compiler-runtime").c(43),
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
      var d = o("useWAWebMsgValues").useMsgValues(a, l),
        m = d[0],
        p = d[1],
        _ = d[2],
        f = d[3],
        g = d[4],
        h = d[5],
        y = (m == null ? void 0 : m.equals(i)) === !0,
        C = r("useWAWebUIM")(),
        b;
      if (t[1] !== p || t[2] !== a) {
        var v = o("WAWebFrontendMsgGetters").getMaybeChatByMsgKey(a, p),
          S;
        (t[4] !== a ? ((S = a.toString()), (t[4] = a), (t[5] = S)) : (S = t[5]),
          (b = r("nullthrows")(
            v,
            "Order bubble " + S + " rendered without its chat",
          )),
          (t[1] = p),
          (t[2] = a),
          (t[3] = b));
      } else b = t[3];
      var R = b,
        L = r("useWAWebConversationPanelCanCompose")(R),
        E = L[0],
        k;
      t[6] !== E ||
      t[7] !== R ||
      t[8] !== i ||
      t[9] !== a ||
      t[10] !== _ ||
      t[11] !== C ||
      t[12] !== y
        ? ((k = function (t) {
            var e;
            if ((t && t.stopPropagation(), !!E)) {
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
                    _ != null &&
                    _ !==
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
                            chat: R,
                            orderMessage: n,
                            orderId: l,
                            token: c,
                            userIsCartOwner: y,
                            sellerJid: s,
                          },
                        ),
                        {
                          transition: "slide-left",
                          uim: C,
                          newDrawerContext: d,
                        },
                      )));
                }
              }
            }
          }),
          (t[6] = E),
          (t[7] = R),
          (t[8] = i),
          (t[9] = a),
          (t[10] = _),
          (t[11] = C),
          (t[12] = y),
          (t[13] = k))
        : (k = t[13]);
      var I = k,
        T;
      t[14] === Symbol.for("react.memo_cache_sentinel")
        ? ((T = r("WAWebL10N").isRTL()), (t[14] = T))
        : (T = t[14]);
      var D = g !== T,
        x;
      t[15] !== h || t[16] !== f || t[17] !== D
        ? ((x = u.jsx(o("WAWebEmojiText.react").EmojiText, {
            text: f,
            dirMismatch: D,
            direction: h,
            inferLinesDirection: !0,
          })),
          (t[15] = h),
          (t[16] = f),
          (t[17] = D),
          (t[18] = x))
        : (x = t[18]);
      var $ = x,
        P;
      t[19] === Symbol.for("react.memo_cache_sentinel")
        ? ((P = { className: "x10l6tqk xtijo5x x1ey2m1c" }), (t[19] = P))
        : (P = t[19]);
      var N;
      t[20] !== a
        ? ((N = u.jsx(
            "div",
            babelHelpers.extends({}, P, {
              children: u.jsx(o("WAWebMessageMeta.react").Meta, { msgKey: a }),
            }),
          )),
          (t[20] = a),
          (t[21] = N))
        : (N = t[21]);
      var M = N,
        w;
      t[22] !== _
        ? ((w = function () {
            return o("WAWebOrderGatingUtils").isSellerOrderRevampEnabled()
              ? _ == null ||
                  _ ===
                    o("WAWebProtobufsE2E.pb").Message$OrderMessage$OrderStatus
                      .INQUIRY
              : !0;
          }),
          (t[22] = _),
          (t[23] = w))
        : (w = t[23]);
      var A = w,
        F;
      t[24] === Symbol.for("react.memo_cache_sentinel")
        ? ((F = o("WAWebOrderGatingUtils").isBuyerOrderRequestVariantEnabled()
            ? s._(/*BTDS*/ "View details")
            : s._(/*BTDS*/ "View sent cart")),
          (t[24] = F))
        : (F = t[24]);
      var O = F,
        B;
      t[25] === Symbol.for("react.memo_cache_sentinel")
        ? ((B = o("WAWebOrderGatingUtils").isSellerOrderRevampEnabled()
            ? s._(/*BTDS*/ "View order request")
            : s._(/*BTDS*/ "View received cart")),
          (t[25] = B))
        : (B = t[25]);
      var W = B,
        q = y ? O : W,
        U;
      t[26] !== I || t[27] !== q
        ? ((U = u.jsx(o("WAWebMessageBubbleActions.react").BubbleActions, {
            items: [{ label: q, testid: "view-cart-button", onClick: I }],
          })),
          (t[26] = I),
          (t[27] = q),
          (t[28] = U))
        : (U = t[28]);
      var V = U,
        H;
      t[29] === Symbol.for("react.memo_cache_sentinel")
        ? ((H = { className: "x1198e8h x1lxpwgx xzueoph xw01apr" }),
          (t[29] = H))
        : (H = t[29]);
      var G;
      t[30] !== a || t[31] !== I
        ? ((G = u.jsx(
            "div",
            babelHelpers.extends({}, H, {
              children: u.jsx(o("WAWebBizOrderPreview.react").OrderPreview, {
                msgKey: a,
                onClick: I,
              }),
            }),
          )),
          (t[30] = a),
          (t[31] = I),
          (t[32] = G))
        : (G = t[32]);
      var z;
      t[33] !== $ || t[34] !== M || t[35] !== a
        ? ((z = u.jsxs(r("WAWebMessageSpacerText.react"), {
            msgKey: a,
            "data-id": a,
            xstyle: c.messageText,
            children: [$, M],
          })),
          (t[33] = $),
          (t[34] = M),
          (t[35] = a),
          (t[36] = z))
        : (z = t[36]);
      var j = E && A() && V,
        K;
      return (
        t[37] !== n || t[38] !== a || t[39] !== G || t[40] !== z || t[41] !== j
          ? ((K = u.jsxs(r("WAWebMessageTextBubble.react"), {
              msgKey: a,
              displayAuthor: n,
              hideMeta: !0,
              children: [G, z, j],
            })),
            (t[37] = n),
            (t[38] = a),
            (t[39] = G),
            (t[40] = z),
            (t[41] = j),
            (t[42] = K))
          : (K = t[42]),
        K
      );
    }
    l.default = d;
  },
  226,
);
