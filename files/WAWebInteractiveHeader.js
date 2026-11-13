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
    "WAWebMsgCasts",
    "WAWebMsgGetters",
    "WAWebMsgType",
    "WAWebNoop",
    "WAWebOrderDetails",
    "WAWebOrderStatus",
    "WAWebOrderStatusButton",
    "WAWebPaymentReminder",
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
        _ = t.msgKey,
        f = t.quotedMsg,
        g = r("useWAWebUIM")(),
        h = o("useWAWebMsgValues").useMsgValues(
          _,
          o("WAWebMsgCasts").castToInteractiveMsg,
          [
            (a = o("WAWebMsgGetters")).getType,
            a.getNativeFlowName,
            a.getInteractiveType,
            a.getInteractivePayload,
            a.getNativeFlowButtons,
            a.getInteractiveHeader,
            a.getIsFromTemplate,
            a.getLocal,
            a.getPmCampaignId,
            a.getIsNewsletterMsg,
            o("WAWebFrontendMsgGetters").getMediaData,
          ],
        ),
        y = h[0],
        C = h[1],
        b = h[2],
        v = h[3],
        S = h[4],
        R = h[5],
        L = h[6],
        E = h[7],
        k = h[8],
        I = h[9],
        T = h[10],
        D = o("WAWebFrontendMsgGetters").getChatByMsgKey(_, I),
        x = r("useWAWebIsBizBroadcastProChat")(D.id),
        $ = r("useWAWebConversationPanelCanCompose")(D),
        P = $[0],
        N = r("useWAWebIsMsgTrusted")(_),
        M = o("WAWebOrderDetails").getOrderInfoFor({
          interactivePayload: v,
          interactiveType: b,
          nativeFlowButtons: S,
          nativeFlowName: C,
          type: y,
        }),
        w = o("useWAWebOrderPaymentStatus").useOrderPaymentStatus(
          D.id,
          M == null ? void 0 : M.referenceId,
          o("WAWebOrderStatus").isSimplifiedOrder(M),
        ),
        A =
          (n = o("useWAWebMediaDataValues").useOptionalMediaDataValues(T, [
            o("WAWebMediaDataGetters").getFilehash,
          ])) != null
            ? n
            : [null],
        F = A[0],
        O = r("useWAWebIsBlobInMemoryCache")(F);
      if (y !== o("WAWebMsgType").MSG_TYPE.INTERACTIVE) return null;
      var B = o("WAWebInAppSignupPrompt").getInAppSignupPromptInfoFor({
          interactivePayload: v,
          interactiveType: b,
          nativeFlowName: C,
          type: y,
        }),
        W,
        q,
        U = !1,
        V = !1,
        H = !1;
      (o("WAWebOrderStatusButton").getOrderStatusButtonFor({
        interactivePayload: v,
        type: y,
      }) == null &&
        R != null &&
        R.mediaType &&
        (q = p({
          campaignId: k,
          displayType: i,
          hasLocalMediaBlob: O,
          headerRef: l,
          isBizBroadcastProChat: x,
          isLocal: E,
          isMsgVisible: s,
          mediaData: T,
          mediaType: R.mediaType,
          msgKey: _,
          trusted: N,
        })),
        C === r("WAWebInteractiveMessagesNativeFlowName").ORDER_DETAILS ||
        C === r("WAWebInteractiveMessagesNativeFlowName").PAYMENT_INFO ||
        C === r("WAWebInteractiveMessagesNativeFlowName").ORDER_STATUS ||
        C === r("WAWebInteractiveMessagesNativeFlowName").PAYMENT_STATUS ||
        C === r("WAWebInteractiveMessagesNativeFlowName").PAYMENT_METHOD
          ? ((W = u.jsx(r("WAWebInteractiveNativeFlowOrderHeader"), {
              msgKey: _,
              quotedMsg: f,
              displayType: i,
            })),
            (U =
              C === r("WAWebInteractiveMessagesNativeFlowName").ORDER_DETAILS &&
              o("WAWebOrderStatus").isPaymentRequest(D, M)))
          : m({
                interactivePayload: v,
                interactiveType: b,
                nativeFlowButtons: S,
                nativeFlowName: C,
                type: y,
              })
            ? (W = u.jsx(r("WAWebPaymentReminderHeader.react"), { msgKey: _ }))
            : C ===
                r("WAWebInteractiveMessagesNativeFlowName").BOOKING_CONFIRMATION
              ? (W = u.jsx(r("WAWebBookingConfirmationHeader.react"), {
                  msgKey: _,
                }))
              : C === r("WAWebInteractiveMessagesNativeFlowName").INAPP_SIGNUP
                ? (W = u.jsx(r("WAWebInAppSignupConfirmationHeader.react"), {
                    msgKey: _,
                  }))
                : C ===
                      r("WAWebInteractiveMessagesNativeFlowName").API_SIGNUP &&
                    B != null
                  ? ((W = u.jsx(r("WAWebInAppSignupPromptHeader.react"), {
                      info: B,
                      msgKey: _,
                    })),
                    (H = !0))
                  : C ===
                      r("WAWebInteractiveMessagesNativeFlowName")
                        .PAYMENT_REQUEST
                    ? o(
                        "WAWebBrPaymentRequest",
                      ).shouldShowPaymentRequestPayWithHeader(L) &&
                      ((W = u.jsx(r("WAWebPaymentRequestHeader.react"), {
                        msgKey: _,
                      })),
                      (V = !0))
                    : R &&
                      (R.title != null || R.subtitle != null) &&
                      (W = q
                        ? u.jsx(r("WAWebInteractiveTitleHeader"), { msgKey: _ })
                        : u.jsx("div", {
                            className: "x1k70j0n",
                            children: u.jsx(r("WAWebInteractiveTitleHeader"), {
                              msgKey: _,
                            }),
                          })));
      var G = R == null ? void 0 : R.mediaType;
      if (
        (q != null &&
          C === r("WAWebInteractiveMessagesNativeFlowName").ORDER_DETAILS &&
          M != null &&
          (G ===
            o("WAWebInteractiveMessageHeaderMediaType")
              .InteractiveMessageHeaderMediaType.DOCUMENT ||
            (G ===
              o("WAWebInteractiveMessageHeaderMediaType")
                .InteractiveMessageHeaderMediaType.IMAGE &&
              o("WAWebOrderStatus").isSimplifiedOrder(M))) &&
          (q = null),
        W)
      ) {
        var z = r("WAWebGetInteractiveHeaderAction")({
          canCompose: P,
          interactivePayload: v,
          interactiveType: b,
          msgKey: _,
          nativeFlowName: C,
          orderInfo: M,
          type: y,
          uimContext: g,
        });
        if (z) {
          var j = w == null,
            K = j && o("WAWebOrderStatus").isSimplifiedOrder(M);
          W = u.jsx("div", {
            role: "button",
            onClick: K ? null : z.onClick,
            children: W,
          });
        }
      }
      if (W == null && q == null) return null;
      var Q;
      return (
        U
          ? (Q = c.paymentRequestHeaderSpacing)
          : V
            ? (Q = c.paymentRequestCtaHeaderSpacing)
            : H
              ? (Q = c.signupPromptHeaderSpacing)
              : (Q = c.headerSpacing),
        u.jsxs(
          "div",
          babelHelpers.extends({}, (e || (e = r("stylex"))).props(Q), {
            children: [
              W && q ? u.jsx("div", { className: "xzueoph", children: q }) : q,
              W,
            ],
          }),
        )
      );
    }
    d.displayName = d.name + " [from " + i.id + "]";
    function m(e) {
      var t = e.interactivePayload,
        n = e.interactiveType,
        a = e.nativeFlowButtons,
        i = e.nativeFlowName,
        l = e.type;
      if (i !== r("WAWebInteractiveMessagesNativeFlowName").PAYMENT_REMINDER)
        return !1;
      var s = o("WAWebPaymentReminder").getSmartHydratedPaymentReminderInfoFor({
        interactivePayload: t,
        interactiveType: n,
        nativeFlowButtons: a,
        nativeFlowName: i,
        type: l,
      });
      return (s == null ? void 0 : s.url) == null
        ? !1
        : o("WAWebPaymentReminder").isPaymentReminderEnabled();
    }
    function p(e) {
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
    ((p.displayName = p.name + " [from " + i.id + "]"), (l.default = d));
  },
  98,
);
