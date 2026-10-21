__d(
  "WAWebInteractiveHeader",
  [
    "WAWebBizBroadcastProRemoteMediaHeaderLoadable",
    "WAWebBizProduct",
    "WAWebBookingConfirmationHeader.react",
    "WAWebBrPaymentRequest",
    "WAWebFrontendMsgGetters",
    "WAWebGetInteractiveHeaderAction",
    "WAWebInAppSignupConfirmationHeader.react",
    "WAWebInAppSignupPrompt",
    "WAWebInAppSignupPromptHeader.react",
    "WAWebInteractiveImageHeader",
    "WAWebInteractiveMessageHeaderMediaType",
    "WAWebInteractiveMessagesNativeFlowName",
    "WAWebInteractiveNativeFlowOrderHeader",
    "WAWebInteractiveTitleHeader",
    "WAWebMediaDataGetters",
    "WAWebMediaDocumentPreview",
    "WAWebMsgGetters",
    "WAWebMsgType",
    "WAWebNoop",
    "WAWebOrderDetails",
    "WAWebOrderStatus",
    "WAWebOrderStatusButton",
    "WAWebPaymentReminderHeader.react",
    "WAWebPaymentRequestHeader.react",
    "WAWebVideoPreview.react",
    "react",
    "stylex",
    "useWAWebConversationPanelCanCompose",
    "useWAWebIsBizBroadcastProChat",
    "useWAWebIsBlobInMemoryCache",
    "useWAWebIsMsgTrusted",
    "useWAWebMediaDataValues",
    "useWAWebMsgValues",
    "useWAWebOrderPaymentStatus",
    "useWAWebUIM",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = s || (s = o("react")),
      c = {
        headerSpacing: {
          marginTop: "x1198e8h",
          marginInlineEnd: "x1lxpwgx",
          marginBottom: "xzueoph",
          marginInlineStart: "xw01apr",
          $$css: !0,
        },
        paymentRequestHeaderSpacing: {
          marginTop: "x1198e8h",
          marginInlineEnd: "x1lxpwgx",
          marginBottom: "x16pr9af",
          marginInlineStart: "xw01apr",
          $$css: !0,
        },
        paymentRequestCtaHeaderSpacing: {
          marginTop: "xdj266r",
          marginInlineEnd: "x18faa90",
          marginBottom: "xzueoph",
          marginInlineStart: "x137kccz",
          $$css: !0,
        },
        signupPromptHeaderSpacing: {
          marginTop: "xdj266r",
          marginInlineEnd: "x14z9mp",
          marginBottom: "xat24cr",
          marginInlineStart: "x1lziwak",
          $$css: !0,
        },
      };
    function d(t) {
      var n,
        a,
        i = t.displayType,
        l = t.headerRef,
        s = t.isMsgVisible,
        d = t.minTextHeight,
        p = t.msgKey,
        _ = t.quotedMsg,
        f = r("useWAWebUIM")(),
        g = o("useWAWebMsgValues").useMsgValues(p, [
          (a = o("WAWebMsgGetters")).getType,
          a.getNativeFlowName,
          a.getInteractiveType,
          a.getInteractivePayload,
          a.getNativeFlowButtons,
          a.getInteractiveHeader,
          a.getIsFromTemplate,
          o("WAWebFrontendMsgGetters").getMediaData,
          a.getLocal,
          a.getPmCampaignId,
          a.getIsNewsletterMsg,
        ]),
        h = g[0],
        y = g[1],
        C = g[2],
        b = g[3],
        v = g[4],
        S = g[5],
        R = g[6],
        L = g[7],
        E = g[8],
        k = g[9],
        I = g[10],
        T = o("WAWebFrontendMsgGetters").getChatByMsgKey(p, I),
        D = r("useWAWebIsBizBroadcastProChat")(T.id),
        x = r("useWAWebConversationPanelCanCompose")(T),
        $ = x[0],
        P = r("useWAWebIsMsgTrusted")(p),
        N = o("WAWebOrderDetails").getOrderInfoFor({
          interactivePayload: b,
          interactiveType: C,
          nativeFlowButtons: v,
          nativeFlowName: y,
          type: h,
        }),
        M = o("useWAWebOrderPaymentStatus").useOrderPaymentStatus(
          T,
          N == null ? void 0 : N.referenceId,
          o("WAWebOrderStatus").isSimplifiedOrder(N),
        ),
        w =
          (n = o("useWAWebMediaDataValues").useOptionalMediaDataValues(L, [
            o("WAWebMediaDataGetters").getFilehash,
          ])) != null
            ? n
            : [null],
        A = w[0],
        F = r("useWAWebIsBlobInMemoryCache")(A);
      if (h !== o("WAWebMsgType").MSG_TYPE.INTERACTIVE) return null;
      var O = o("WAWebInAppSignupPrompt").getInAppSignupPromptInfoFor({
          interactivePayload: b,
          interactiveType: C,
          nativeFlowName: y,
          type: h,
        }),
        B,
        W,
        q = !1,
        U = !1,
        V = !1;
      (o("WAWebOrderStatusButton").getOrderStatusButtonFor({
        interactivePayload: b,
        type: h,
      }) == null &&
        S != null &&
        S.mediaType &&
        (W = m({
          campaignId: k,
          displayType: i,
          hasLocalMediaBlob: F,
          headerRef: l,
          isBizBroadcastProChat: D,
          isLocal: E,
          isMsgVisible: s,
          mediaData: L,
          mediaType: S.mediaType,
          msgKey: p,
          trusted: P,
        })),
        y === r("WAWebInteractiveMessagesNativeFlowName").ORDER_DETAILS ||
        y === r("WAWebInteractiveMessagesNativeFlowName").PAYMENT_INFO ||
        y === r("WAWebInteractiveMessagesNativeFlowName").ORDER_STATUS ||
        y === r("WAWebInteractiveMessagesNativeFlowName").PAYMENT_STATUS ||
        y === r("WAWebInteractiveMessagesNativeFlowName").PAYMENT_METHOD
          ? ((B = u.jsx(r("WAWebInteractiveNativeFlowOrderHeader"), {
              msgKey: p,
              quotedMsg: _,
              displayType: i,
            })),
            (q =
              y === r("WAWebInteractiveMessagesNativeFlowName").ORDER_DETAILS &&
              o("WAWebOrderStatus").isPaymentRequest(T, N)))
          : y === r("WAWebInteractiveMessagesNativeFlowName").PAYMENT_REMINDER
            ? (B = u.jsx(r("WAWebPaymentReminderHeader.react"), { msgKey: p }))
            : y ===
                r("WAWebInteractiveMessagesNativeFlowName").BOOKING_CONFIRMATION
              ? (B = u.jsx(r("WAWebBookingConfirmationHeader.react"), {
                  msgKey: p,
                }))
              : y === r("WAWebInteractiveMessagesNativeFlowName").INAPP_SIGNUP
                ? (B = u.jsx(r("WAWebInAppSignupConfirmationHeader.react"), {
                    msgKey: p,
                  }))
                : y ===
                      r("WAWebInteractiveMessagesNativeFlowName").API_SIGNUP &&
                    O != null
                  ? ((B = u.jsx(r("WAWebInAppSignupPromptHeader.react"), {
                      info: O,
                      msgKey: p,
                    })),
                    (V = !0))
                  : y ===
                      r("WAWebInteractiveMessagesNativeFlowName")
                        .PAYMENT_REQUEST
                    ? o(
                        "WAWebBrPaymentRequest",
                      ).shouldShowPaymentRequestPayWithHeader(R) &&
                      ((B = u.jsx(r("WAWebPaymentRequestHeader.react"), {
                        msgKey: p,
                      })),
                      (U = !0))
                    : S &&
                      (S.title != null || S.subtitle != null) &&
                      (B = W
                        ? u.jsx(r("WAWebInteractiveTitleHeader"), { msgKey: p })
                        : u.jsx("div", {
                            className: "x1k70j0n",
                            children: u.jsx(r("WAWebInteractiveTitleHeader"), {
                              msgKey: p,
                            }),
                          })));
      var H = S == null ? void 0 : S.mediaType;
      if (
        (W != null &&
          y === r("WAWebInteractiveMessagesNativeFlowName").ORDER_DETAILS &&
          N != null &&
          (H ===
            o("WAWebInteractiveMessageHeaderMediaType")
              .InteractiveMessageHeaderMediaType.DOCUMENT ||
            (H ===
              o("WAWebInteractiveMessageHeaderMediaType")
                .InteractiveMessageHeaderMediaType.IMAGE &&
              o("WAWebOrderStatus").isSimplifiedOrder(N))) &&
          (W = null),
        B)
      ) {
        var G = r("WAWebGetInteractiveHeaderAction")({
          canCompose: $,
          interactivePayload: b,
          interactiveType: C,
          msgKey: p,
          nativeFlowName: y,
          orderInfo: N,
          type: h,
          uimContext: f,
        });
        if (G) {
          var z = M == null,
            j = z && o("WAWebOrderStatus").isSimplifiedOrder(N);
          B = u.jsx("div", {
            role: "button",
            onClick: j ? null : G.onClick,
            children: B,
          });
        }
      }
      if (B == null && W == null) return null;
      var K;
      return (
        q
          ? (K = c.paymentRequestHeaderSpacing)
          : U
            ? (K = c.paymentRequestCtaHeaderSpacing)
            : V
              ? (K = c.signupPromptHeaderSpacing)
              : (K = c.headerSpacing),
        u.jsxs(
          "div",
          babelHelpers.extends({}, (e || (e = r("stylex"))).props(K), {
            children: [
              B && W ? u.jsx("div", { className: "xzueoph", children: W }) : W,
              B,
            ],
          }),
        )
      );
    }
    d.displayName = d.name + " [from " + i.id + "]";
    function m(e) {
      var t = e.campaignId,
        n = e.displayType,
        a = e.hasLocalMediaBlob,
        i = e.headerRef,
        l = e.isBizBroadcastProChat,
        s = e.isLocal,
        c = e.isMsgVisible,
        d = e.mediaData,
        m = e.mediaType,
        p = e.msgKey,
        _ = e.trusted;
      return l &&
        !a &&
        s &&
        t != null &&
        (m ===
          o("WAWebInteractiveMessageHeaderMediaType")
            .InteractiveMessageHeaderMediaType.IMAGE ||
          m ===
            o("WAWebInteractiveMessageHeaderMediaType")
              .InteractiveMessageHeaderMediaType.VIDEO)
        ? u.jsx("div", {
            "data-testid": "bb_pro_remote_media_frame",
            className: "x1bu39yj xnjobev x19iali1 x6ikm8r x10wlt62 xh8yej3",
            children: u.jsx(
              o("WAWebBizBroadcastProRemoteMediaHeaderLoadable")
                .WAWebBizBroadcastProRemoteMediaHeaderLoadable,
              { campaignId: t, mediaType: m, msgKey: p },
            ),
          })
        : m ===
            o("WAWebInteractiveMessageHeaderMediaType")
              .InteractiveMessageHeaderMediaType.IMAGE
          ? u.jsx(r("WAWebInteractiveImageHeader"), {
              msgKey: p,
              displayType: n != null ? n : void 0,
              isMsgVisible: c,
              pictureRef: i != null ? i : r("WAWebNoop"),
            })
          : m ===
              o("WAWebInteractiveMessageHeaderMediaType")
                .InteractiveMessageHeaderMediaType.DOCUMENT
            ? u.jsx(r("WAWebMediaDocumentPreview"), { msgKey: p })
            : m ===
                o("WAWebInteractiveMessageHeaderMediaType")
                  .InteractiveMessageHeaderMediaType.VIDEO
              ? d == null
                ? null
                : u.jsx(r("WAWebVideoPreview.react"), {
                    msgKey: p,
                    mediaData: d,
                    displayType: n != null ? n : void 0,
                  })
              : m ===
                  o("WAWebInteractiveMessageHeaderMediaType")
                    .InteractiveMessageHeaderMediaType.PRODUCT
                ? u.jsx(r("WAWebBizProduct"), {
                    displayAuthor: !1,
                    msgKey: p,
                    displayType: n != null ? n : void 0,
                    trusted: _,
                    isCarouselCard: !0,
                  })
                : (function () {
                    throw Error(
                      "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                        m,
                    );
                  })();
    }
    ((m.displayName = m.name + " [from " + i.id + "]"), (l.default = d));
  },
  98,
);
