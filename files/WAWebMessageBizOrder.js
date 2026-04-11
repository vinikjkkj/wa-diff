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
    "react-compiler-runtime",
    "useWAWebConversationPanelCanCompose",
    "useWAWebUIM",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t = o("react-compiler-runtime").c(49),
        n = e.displayAuthor,
        a = e.msg,
        i,
        l;
      if (t[0] !== a) {
        var c;
        ((i = o("WAWebUserPrefsMeUser").getMaybeMePnUser()),
          (l =
            (c = o("WAWebMsgGetters").getSender(a)) == null
              ? void 0
              : c.equals(i)),
          (t[0] = a),
          (t[1] = i),
          (t[2] = l));
      } else ((i = t[1]), (l = t[2]));
      var d = l === !0,
        m = r("useWAWebUIM")(),
        p,
        _,
        f;
      t[3] !== a
        ? ((p = a.unsafe()),
          (_ = r("useWAWebConversationPanelCanCompose")),
          (f = o("WAWebFrontendMsgGetters").getChat(p)),
          (t[3] = a),
          (t[4] = p),
          (t[5] = _),
          (t[6] = f))
        : ((p = t[4]), (_ = t[5]), (f = t[6]));
      var g = _(f),
        h = g[0],
        y;
      t[7] !== h ||
      t[8] !== i ||
      t[9] !== a ||
      t[10] !== p ||
      t[11] !== m ||
      t[12] !== d
        ? ((y = function (t) {
            if ((t && t.stopPropagation(), !!h)) {
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
              var e = a.orderId,
                n = a.sellerJid,
                l = a.token;
              if (e != null && n != null && l != null) {
                if (
                  o("WAWebBizGatingUtils").isBuyerOrderRevampEnabled() &&
                  a.status !==
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
                  a.orderId != null &&
                    (o("WAWebMessageLogQplEvents").qplStartOrderView(
                      !!o("WAWebOrderCollection").OrderCollection.get(e),
                    ),
                    o("WAWebDrawerManager").DrawerManager.openDrawerRight(
                      u.jsx(
                        o("WAWebProductDetailsFlowLoadable")
                          .ProductDetailsFlowLoadable,
                        {
                          chat: o("WAWebFrontendMsgGetters").getChat(p),
                          orderMessage: a,
                          orderId: e,
                          token: l,
                          userIsCartOwner: d,
                          sellerJid: n,
                        },
                      ),
                      { transition: "slide-left", uim: m, newDrawerContext: s },
                    )));
              }
            }
          }),
          (t[7] = h),
          (t[8] = i),
          (t[9] = a),
          (t[10] = p),
          (t[11] = m),
          (t[12] = d),
          (t[13] = y))
        : (y = t[13]);
      var C = y,
        b = a.message,
        v;
      t[14] !== a
        ? ((v = o("WAWebFrontendMsgGetters").getRtl(a)),
          (t[14] = a),
          (t[15] = v))
        : (v = t[15]);
      var S;
      t[16] === Symbol.for("react.memo_cache_sentinel")
        ? ((S = r("WAWebL10N").isRTL()), (t[16] = S))
        : (S = t[16]);
      var R = v !== S,
        L;
      t[17] !== a
        ? ((L = o("WAWebFrontendMsgGetters").getDir(a)),
          (t[17] = a),
          (t[18] = L))
        : (L = t[18]);
      var E;
      t[19] !== a.message || t[20] !== R || t[21] !== L
        ? ((E = u.jsx(o("WAWebEmojiText.react").EmojiText, {
            text: b,
            dirMismatch: R,
            direction: L,
            inferLinesDirection: !0,
          })),
          (t[19] = a.message),
          (t[20] = R),
          (t[21] = L),
          (t[22] = E))
        : (E = t[22]);
      var k = E,
        I;
      t[23] === Symbol.for("react.memo_cache_sentinel")
        ? ((I = { className: "x10l6tqk xtijo5x x1ey2m1c" }), (t[23] = I))
        : (I = t[23]);
      var T;
      t[24] !== a
        ? ((T = u.jsx(
            "div",
            babelHelpers.extends({}, I, {
              children: u.jsx(o("WAWebMessageMeta.react").Meta, { msg: a }),
            }),
          )),
          (t[24] = a),
          (t[25] = T))
        : (T = t[25]);
      var D = T,
        x;
      t[26] !== a.status
        ? ((x = function () {
            return o("WAWebBizGatingUtils").isSellerOrderRevampEnabled()
              ? a.status ===
                  o("WAWebProtobufsE2E.pb").Message$OrderMessage$OrderStatus
                    .INQUIRY
              : !0;
          }),
          (t[26] = a.status),
          (t[27] = x))
        : (x = t[27]);
      var $ = x,
        P;
      t[28] === Symbol.for("react.memo_cache_sentinel")
        ? ((P = o("WAWebBizGatingUtils").isBuyerOrderRequestVariantEnabled()
            ? s._(/*BTDS*/ "View details")
            : s._(/*BTDS*/ "View sent cart")),
          (t[28] = P))
        : (P = t[28]);
      var N = P,
        M;
      t[29] === Symbol.for("react.memo_cache_sentinel")
        ? ((M = o("WAWebBizGatingUtils").isSellerOrderRevampEnabled()
            ? s._(/*BTDS*/ "View order request")
            : s._(/*BTDS*/ "View received cart")),
          (t[29] = M))
        : (M = t[29]);
      var w = M,
        A = d ? N : w,
        F;
      t[30] !== C || t[31] !== A
        ? ((F = u.jsx(o("WAWebMessageBubbleActions.react").BubbleActions, {
            items: [{ label: A, testid: "view-cart-button", onClick: C }],
          })),
          (t[30] = C),
          (t[31] = A),
          (t[32] = F))
        : (F = t[32]);
      var O = F,
        B;
      t[33] === Symbol.for("react.memo_cache_sentinel")
        ? ((B = { className: "x1198e8h x1lxpwgx xzueoph xw01apr" }),
          (t[33] = B))
        : (B = t[33]);
      var W;
      t[34] !== p || t[35] !== C
        ? ((W = u.jsx(
            "div",
            babelHelpers.extends({}, B, {
              children: u.jsx(o("WAWebBizOrderPreview.react").OrderPreview, {
                msg: p,
                onClick: C,
              }),
            }),
          )),
          (t[34] = p),
          (t[35] = C),
          (t[36] = W))
        : (W = t[36]);
      var q = a.id,
        U;
      t[37] === Symbol.for("react.memo_cache_sentinel")
        ? ((U = "x1m258z3 x12nagc"), (t[37] = U))
        : (U = t[37]);
      var V;
      t[38] !== k || t[39] !== D || t[40] !== a.id || t[41] !== p
        ? ((V = u.jsxs(r("WAWebMessageSpacerText.react"), {
            msg: p,
            "data-id": q,
            className: U,
            children: [k, D],
          })),
          (t[38] = k),
          (t[39] = D),
          (t[40] = a.id),
          (t[41] = p),
          (t[42] = V))
        : (V = t[42]);
      var H = h && $() && O,
        G;
      return (
        t[43] !== n || t[44] !== a || t[45] !== W || t[46] !== V || t[47] !== H
          ? ((G = u.jsxs(r("WAWebMessageTextBubble.react"), {
              msg: a,
              displayAuthor: n,
              hideMeta: !0,
              children: [W, V, H],
            })),
            (t[43] = n),
            (t[44] = a),
            (t[45] = W),
            (t[46] = V),
            (t[47] = H),
            (t[48] = G))
          : (G = t[48]),
        G
      );
    }
    l.default = c;
  },
  226,
);
