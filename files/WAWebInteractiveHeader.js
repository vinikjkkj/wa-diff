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
        T = o("useWAWebMsgValues").useMsgValues(_, [
          o("WAWebFrontendMsgGetters").getMediaData,
        ]),
        D = T[0],
        x = o("WAWebFrontendMsgGetters").getChatByMsgKey(_, I),
        $ = r("useWAWebIsBizBroadcastProChat")(x.id),
        P = r("useWAWebConversationPanelCanCompose")(x),
        N = P[0],
        M = r("useWAWebIsMsgTrusted")(_),
        w = o("WAWebOrderDetails").getOrderInfoFor({
          interactivePayload: v,
          interactiveType: b,
          nativeFlowButtons: S,
          nativeFlowName: C,
          type: y,
        }),
        A = o("useWAWebOrderPaymentStatus").useOrderPaymentStatus(
          x,
          w == null ? void 0 : w.referenceId,
          o("WAWebOrderStatus").isSimplifiedOrder(w),
        ),
        F =
          (n = o("useWAWebMediaDataValues").useOptionalMediaDataValues(D, [
            o("WAWebMediaDataGetters").getFilehash,
          ])) != null
            ? n
            : [null],
        O = F[0],
        B = r("useWAWebIsBlobInMemoryCache")(O);
      if (y !== o("WAWebMsgType").MSG_TYPE.INTERACTIVE) return null;
      var W = o("WAWebInAppSignupPrompt").getInAppSignupPromptInfoFor({
          interactivePayload: v,
          interactiveType: b,
          nativeFlowName: C,
          type: y,
        }),
        q,
        U,
        V = !1,
        H = !1,
        G = !1;
      (o("WAWebOrderStatusButton").getOrderStatusButtonFor({
        interactivePayload: v,
        type: y,
      }) == null &&
        R != null &&
        R.mediaType &&
        (U = p({
          campaignId: k,
          displayType: i,
          hasLocalMediaBlob: B,
          headerRef: l,
          isBizBroadcastProChat: $,
          isLocal: E,
          isMsgVisible: s,
          mediaData: D,
          mediaType: R.mediaType,
          msgKey: _,
          trusted: M,
        })),
        C === r("WAWebInteractiveMessagesNativeFlowName").ORDER_DETAILS ||
        C === r("WAWebInteractiveMessagesNativeFlowName").PAYMENT_INFO ||
        C === r("WAWebInteractiveMessagesNativeFlowName").ORDER_STATUS ||
        C === r("WAWebInteractiveMessagesNativeFlowName").PAYMENT_STATUS ||
        C === r("WAWebInteractiveMessagesNativeFlowName").PAYMENT_METHOD
          ? ((q = u.jsx(r("WAWebInteractiveNativeFlowOrderHeader"), {
              msgKey: _,
              quotedMsg: f,
              displayType: i,
            })),
            (V =
              C === r("WAWebInteractiveMessagesNativeFlowName").ORDER_DETAILS &&
              o("WAWebOrderStatus").isPaymentRequest(x, w)))
          : m({
                interactivePayload: v,
                interactiveType: b,
                nativeFlowButtons: S,
                nativeFlowName: C,
                type: y,
              })
            ? (q = u.jsx(r("WAWebPaymentReminderHeader.react"), { msgKey: _ }))
            : C ===
                r("WAWebInteractiveMessagesNativeFlowName").BOOKING_CONFIRMATION
              ? (q = u.jsx(r("WAWebBookingConfirmationHeader.react"), {
                  msgKey: _,
                }))
              : C === r("WAWebInteractiveMessagesNativeFlowName").INAPP_SIGNUP
                ? (q = u.jsx(r("WAWebInAppSignupConfirmationHeader.react"), {
                    msgKey: _,
                  }))
                : C ===
                      r("WAWebInteractiveMessagesNativeFlowName").API_SIGNUP &&
                    W != null
                  ? ((q = u.jsx(r("WAWebInAppSignupPromptHeader.react"), {
                      info: W,
                      msgKey: _,
                    })),
                    (G = !0))
                  : C ===
                      r("WAWebInteractiveMessagesNativeFlowName")
                        .PAYMENT_REQUEST
                    ? o(
                        "WAWebBrPaymentRequest",
                      ).shouldShowPaymentRequestPayWithHeader(L) &&
                      ((q = u.jsx(r("WAWebPaymentRequestHeader.react"), {
                        msgKey: _,
                      })),
                      (H = !0))
                    : R &&
                      (R.title != null || R.subtitle != null) &&
                      (q = U
                        ? u.jsx(r("WAWebInteractiveTitleHeader"), { msgKey: _ })
                        : u.jsx("div", {
                            className: "x1k70j0n",
                            children: u.jsx(r("WAWebInteractiveTitleHeader"), {
                              msgKey: _,
                            }),
                          })));
      var z = R == null ? void 0 : R.mediaType;
      if (
        (U != null &&
          C === r("WAWebInteractiveMessagesNativeFlowName").ORDER_DETAILS &&
          w != null &&
          (z ===
            o("WAWebInteractiveMessageHeaderMediaType")
              .InteractiveMessageHeaderMediaType.DOCUMENT ||
            (z ===
              o("WAWebInteractiveMessageHeaderMediaType")
                .InteractiveMessageHeaderMediaType.IMAGE &&
              o("WAWebOrderStatus").isSimplifiedOrder(w))) &&
          (U = null),
        q)
      ) {
        var j = r("WAWebGetInteractiveHeaderAction")({
          canCompose: N,
          interactivePayload: v,
          interactiveType: b,
          msgKey: _,
          nativeFlowName: C,
          orderInfo: w,
          type: y,
          uimContext: g,
        });
        if (j) {
          var K = A == null,
            Q = K && o("WAWebOrderStatus").isSimplifiedOrder(w);
          q = u.jsx("div", {
            role: "button",
            onClick: Q ? null : j.onClick,
            children: q,
          });
        }
      }
      if (q == null && U == null) return null;
      var X;
      return (
        V
          ? (X = c.paymentRequestHeaderSpacing)
          : H
            ? (X = c.paymentRequestCtaHeaderSpacing)
            : G
              ? (X = c.signupPromptHeaderSpacing)
              : (X = c.headerSpacing),
        u.jsxs(
          "div",
          babelHelpers.extends({}, (e || (e = r("stylex"))).props(X), {
            children: [
              q && U ? u.jsx("div", { className: "xzueoph", children: U }) : U,
              q,
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
