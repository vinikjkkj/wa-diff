__d(
  "WAWebInteractiveHeader",
  [
    "WAWebBizBroadcastProListUtils",
    "WAWebBizBroadcastProRemoteMediaHeaderLoadable",
    "WAWebBizProduct",
    "WAWebBookingConfirmationHeader.react",
    "WAWebBrPaymentRequest",
    "WAWebBroadcastMetadataGetters",
    "WAWebFrontendChatGetters",
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
    "WAWebMediaDocumentPreview",
    "WAWebMsgModelPropUtils",
    "WAWebNoop",
    "WAWebOrderDetails",
    "WAWebOrderStatus",
    "WAWebPaymentReminderHeader.react",
    "WAWebPaymentRequestHeader.react",
    "WAWebVideoPreview.react",
    "react",
    "stylex",
    "useWAWebBroadcastMetadataValues",
    "useWAWebChatValues",
    "useWAWebConversationPanelCanCompose",
    "useWAWebIsBlobInMemoryCache",
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
        p = t.msg,
        _ = t.quotedMsg,
        f = r("useWAWebUIM")(),
        g = o("WAWebFrontendMsgGetters").getChat(p.unsafe()),
        h = o("useWAWebChatValues").useChatValues(g.id, [
          o("WAWebFrontendChatGetters").getBroadcastMetadata,
        ]),
        y = h[0],
        C =
          (n = o(
            "useWAWebBroadcastMetadataValues",
          ).useOptionalBroadcastMetadataValues(y == null ? void 0 : y.id, [
            o("WAWebBroadcastMetadataGetters").getCustomAudienceFbid,
          ])) != null
            ? n
            : [null],
        b = C[0],
        v = o("WAWebBizBroadcastProListUtils").isBizBroadcastProList(b),
        S = r("useWAWebConversationPanelCanCompose")(g),
        R = S[0],
        L = o("WAWebOrderDetails").getOrderInfo(p),
        E = o("WAWebInAppSignupPrompt").getInAppSignupPromptInfo(p),
        k = o("useWAWebOrderPaymentStatus").useOrderPaymentStatus(
          g,
          L == null ? void 0 : L.referenceId,
          o("WAWebOrderStatus").isSimplifiedOrder(L),
        ),
        I = p.interactiveHeader,
        T = r("useWAWebIsBlobInMemoryCache")(
          (a = p.mediaData) == null ? void 0 : a.filehash,
        ),
        D,
        x,
        $ = !1,
        P = !1,
        N = !1;
      (!o("WAWebOrderStatus").hasOrderStatusButton(p) &&
        I != null &&
        I.mediaType &&
        (x = m(i, l, I.mediaType, T, v, s, p)),
        p.nativeFlowName ===
          r("WAWebInteractiveMessagesNativeFlowName").ORDER_DETAILS ||
        p.nativeFlowName ===
          r("WAWebInteractiveMessagesNativeFlowName").PAYMENT_INFO ||
        p.nativeFlowName ===
          r("WAWebInteractiveMessagesNativeFlowName").ORDER_STATUS ||
        p.nativeFlowName ===
          r("WAWebInteractiveMessagesNativeFlowName").PAYMENT_STATUS ||
        p.nativeFlowName ===
          r("WAWebInteractiveMessagesNativeFlowName").PAYMENT_METHOD
          ? ((D = u.jsx(r("WAWebInteractiveNativeFlowOrderHeader"), {
              msg: p,
              quotedMsg: _,
              displayType: i,
            })),
            ($ =
              p.nativeFlowName ===
                r("WAWebInteractiveMessagesNativeFlowName").ORDER_DETAILS &&
              o("WAWebOrderStatus").isPaymentRequest(g, L)))
          : p.nativeFlowName ===
              r("WAWebInteractiveMessagesNativeFlowName").PAYMENT_REMINDER
            ? (D = u.jsx(r("WAWebPaymentReminderHeader.react"), { msg: p }))
            : p.nativeFlowName ===
                r("WAWebInteractiveMessagesNativeFlowName").BOOKING_CONFIRMATION
              ? (D = u.jsx(r("WAWebBookingConfirmationHeader.react"), {
                  msg: p,
                }))
              : p.nativeFlowName ===
                  r("WAWebInteractiveMessagesNativeFlowName").INAPP_SIGNUP
                ? (D = u.jsx(r("WAWebInAppSignupConfirmationHeader.react"), {
                    msg: p,
                  }))
                : p.nativeFlowName ===
                      r("WAWebInteractiveMessagesNativeFlowName").API_SIGNUP &&
                    E != null
                  ? ((D = u.jsx(r("WAWebInAppSignupPromptHeader.react"), {
                      info: E,
                      msg: p,
                    })),
                    (N = !0))
                  : p.nativeFlowName ===
                      r("WAWebInteractiveMessagesNativeFlowName")
                        .PAYMENT_REQUEST
                    ? o(
                        "WAWebBrPaymentRequest",
                      ).shouldShowPaymentRequestPayWithHeader(
                        p.isFromTemplate,
                      ) &&
                      ((D = u.jsx(r("WAWebPaymentRequestHeader.react"), {
                        msg: p,
                      })),
                      (P = !0))
                    : I &&
                      (I.title != null || I.subtitle != null) &&
                      (D = x
                        ? u.jsx(r("WAWebInteractiveTitleHeader"), { msg: p })
                        : u.jsx("div", {
                            className: "x1k70j0n",
                            children: u.jsx(r("WAWebInteractiveTitleHeader"), {
                              msg: p,
                            }),
                          })));
      var M = I == null ? void 0 : I.mediaType;
      if (
        (x != null &&
          p.nativeFlowName ===
            r("WAWebInteractiveMessagesNativeFlowName").ORDER_DETAILS &&
          L != null &&
          (M ===
            o("WAWebInteractiveMessageHeaderMediaType")
              .InteractiveMessageHeaderMediaType.DOCUMENT ||
            (M ===
              o("WAWebInteractiveMessageHeaderMediaType")
                .InteractiveMessageHeaderMediaType.IMAGE &&
              o("WAWebOrderStatus").isSimplifiedOrder(L))) &&
          (x = null),
        D)
      ) {
        var w = r("WAWebGetInteractiveHeaderAction")({
          canCompose: R,
          msg: p,
          uimContext: f,
        });
        if (w) {
          var A = k == null,
            F = A && o("WAWebOrderStatus").isSimplifiedOrder(L);
          D = u.jsx("div", {
            role: "button",
            onClick: F ? null : w.onClick,
            children: D,
          });
        }
      }
      if (D == null && x == null) return null;
      var O;
      return (
        $
          ? (O = c.paymentRequestHeaderSpacing)
          : P
            ? (O = c.paymentRequestCtaHeaderSpacing)
            : N
              ? (O = c.signupPromptHeaderSpacing)
              : (O = c.headerSpacing),
        u.jsxs(
          "div",
          babelHelpers.extends({}, (e || (e = r("stylex"))).props(O), {
            children: [
              D && x ? u.jsx("div", { className: "xzueoph", children: x }) : x,
              D,
            ],
          }),
        )
      );
    }
    d.displayName = d.name + " [from " + i.id + "]";
    function m(e, t, n, a, i, l, s) {
      var c = s.pmCampaignId;
      return i &&
        !a &&
        s.local === !0 &&
        c != null &&
        (n ===
          o("WAWebInteractiveMessageHeaderMediaType")
            .InteractiveMessageHeaderMediaType.IMAGE ||
          n ===
            o("WAWebInteractiveMessageHeaderMediaType")
              .InteractiveMessageHeaderMediaType.VIDEO)
        ? u.jsx("div", {
            "data-testid": "bb_pro_remote_media_frame",
            className: "x1bu39yj xnjobev x19iali1 x6ikm8r x10wlt62 xh8yej3",
            children: u.jsx(
              o("WAWebBizBroadcastProRemoteMediaHeaderLoadable")
                .WAWebBizBroadcastProRemoteMediaHeaderLoadable,
              { campaignId: c, mediaType: n, msg: s },
            ),
          })
        : n ===
            o("WAWebInteractiveMessageHeaderMediaType")
              .InteractiveMessageHeaderMediaType.IMAGE
          ? u.jsx(r("WAWebInteractiveImageHeader"), {
              msg: s,
              displayType: e != null ? e : void 0,
              isMsgVisible: l,
              pictureRef: t != null ? t : r("WAWebNoop"),
            })
          : n ===
              o("WAWebInteractiveMessageHeaderMediaType")
                .InteractiveMessageHeaderMediaType.DOCUMENT
            ? u.jsx(r("WAWebMediaDocumentPreview"), { msg: s })
            : n ===
                o("WAWebInteractiveMessageHeaderMediaType")
                  .InteractiveMessageHeaderMediaType.VIDEO
              ? u.jsx(r("WAWebVideoPreview.react"), {
                  msg: s,
                  mediaData: s.mediaData,
                  displayType: e != null ? e : void 0,
                })
              : n ===
                  o("WAWebInteractiveMessageHeaderMediaType")
                    .InteractiveMessageHeaderMediaType.PRODUCT
                ? u.jsx(r("WAWebBizProduct"), {
                    displayAuthor: !1,
                    msg: s,
                    displayType: e != null ? e : void 0,
                    trusted: o("WAWebMsgModelPropUtils").isTrusted(s.unsafe()),
                    isCarouselCard: !0,
                  })
                : (function () {
                    throw Error(
                      "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                        n,
                    );
                  })();
    }
    ((m.displayName = m.name + " [from " + i.id + "]"), (l.default = d));
  },
  98,
);
