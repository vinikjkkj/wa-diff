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
        a = t.displayType,
        i = t.headerRef,
        l = t.isMsgVisible,
        s = t.minTextHeight,
        d = t.msg,
        p = t.quotedMsg,
        _ = r("useWAWebUIM")(),
        f = o("WAWebFrontendMsgGetters").getChat(d.unsafe()),
        g = o("useWAWebChatValues").useChatValues(f.id, [
          o("WAWebFrontendChatGetters").getBroadcastMetadata,
        ]),
        h = g[0],
        y =
          (n = o(
            "useWAWebBroadcastMetadataValues",
          ).useOptionalBroadcastMetadataValues(h == null ? void 0 : h.id, [
            o("WAWebBroadcastMetadataGetters").getCustomAudienceFbid,
          ])) != null
            ? n
            : [null],
        C = y[0],
        b = o("WAWebBizBroadcastProListUtils").isBizBroadcastProList(C),
        v = r("useWAWebConversationPanelCanCompose")(f),
        S = v[0],
        R = o("WAWebOrderDetails").getOrderInfo(d),
        L = o("WAWebInAppSignupPrompt").getInAppSignupPromptInfo(d),
        E = o("useWAWebOrderPaymentStatus").useOrderPaymentStatus(
          f,
          R == null ? void 0 : R.referenceId,
          o("WAWebOrderStatus").isSimplifiedOrder(R),
        ),
        k = d.interactiveHeader,
        I,
        T,
        D = !1,
        x = !1,
        $ = !1;
      (!o("WAWebOrderStatus").hasOrderStatusButton(d) &&
        k != null &&
        k.mediaType &&
        (T = m(a, i, k.mediaType, b, l, d)),
        d.nativeFlowName ===
          r("WAWebInteractiveMessagesNativeFlowName").ORDER_DETAILS ||
        d.nativeFlowName ===
          r("WAWebInteractiveMessagesNativeFlowName").PAYMENT_INFO ||
        d.nativeFlowName ===
          r("WAWebInteractiveMessagesNativeFlowName").ORDER_STATUS ||
        d.nativeFlowName ===
          r("WAWebInteractiveMessagesNativeFlowName").PAYMENT_STATUS ||
        d.nativeFlowName ===
          r("WAWebInteractiveMessagesNativeFlowName").PAYMENT_METHOD
          ? ((I = u.jsx(r("WAWebInteractiveNativeFlowOrderHeader"), {
              msg: d,
              quotedMsg: p,
              displayType: a,
            })),
            (D =
              d.nativeFlowName ===
                r("WAWebInteractiveMessagesNativeFlowName").ORDER_DETAILS &&
              o("WAWebOrderStatus").isPaymentRequest(f, R)))
          : d.nativeFlowName ===
              r("WAWebInteractiveMessagesNativeFlowName").PAYMENT_REMINDER
            ? (I = u.jsx(r("WAWebPaymentReminderHeader.react"), { msg: d }))
            : d.nativeFlowName ===
                r("WAWebInteractiveMessagesNativeFlowName").BOOKING_CONFIRMATION
              ? (I = u.jsx(r("WAWebBookingConfirmationHeader.react"), {
                  msg: d,
                }))
              : d.nativeFlowName ===
                  r("WAWebInteractiveMessagesNativeFlowName").INAPP_SIGNUP
                ? (I = u.jsx(r("WAWebInAppSignupConfirmationHeader.react"), {
                    msg: d,
                  }))
                : d.nativeFlowName ===
                      r("WAWebInteractiveMessagesNativeFlowName").API_SIGNUP &&
                    L != null
                  ? ((I = u.jsx(r("WAWebInAppSignupPromptHeader.react"), {
                      info: L,
                      msg: d,
                    })),
                    ($ = !0))
                  : d.nativeFlowName ===
                      r("WAWebInteractiveMessagesNativeFlowName")
                        .PAYMENT_REQUEST
                    ? o(
                        "WAWebBrPaymentRequest",
                      ).shouldShowPaymentRequestPayWithHeader(
                        d.isFromTemplate,
                      ) &&
                      ((I = u.jsx(r("WAWebPaymentRequestHeader.react"), {
                        msg: d,
                      })),
                      (x = !0))
                    : k &&
                      (k.title != null || k.subtitle != null) &&
                      (I = T
                        ? u.jsx(r("WAWebInteractiveTitleHeader"), { msg: d })
                        : u.jsx("div", {
                            className: "x1k70j0n",
                            children: u.jsx(r("WAWebInteractiveTitleHeader"), {
                              msg: d,
                            }),
                          })));
      var P = k == null ? void 0 : k.mediaType;
      if (
        (T != null &&
          d.nativeFlowName ===
            r("WAWebInteractiveMessagesNativeFlowName").ORDER_DETAILS &&
          R != null &&
          (P ===
            o("WAWebInteractiveMessageHeaderMediaType")
              .InteractiveMessageHeaderMediaType.DOCUMENT ||
            (P ===
              o("WAWebInteractiveMessageHeaderMediaType")
                .InteractiveMessageHeaderMediaType.IMAGE &&
              o("WAWebOrderStatus").isSimplifiedOrder(R))) &&
          (T = null),
        I)
      ) {
        var N = r("WAWebGetInteractiveHeaderAction")({
          canCompose: S,
          msg: d,
          uimContext: _,
        });
        if (N) {
          var M = E == null,
            w = M && o("WAWebOrderStatus").isSimplifiedOrder(R);
          I = u.jsx("div", {
            role: "button",
            onClick: w ? null : N.onClick,
            children: I,
          });
        }
      }
      if (I == null && T == null) return null;
      var A;
      return (
        D
          ? (A = c.paymentRequestHeaderSpacing)
          : x
            ? (A = c.paymentRequestCtaHeaderSpacing)
            : $
              ? (A = c.signupPromptHeaderSpacing)
              : (A = c.headerSpacing),
        u.jsxs(
          "div",
          babelHelpers.extends({}, (e || (e = r("stylex"))).props(A), {
            children: [
              I && T ? u.jsx("div", { className: "xzueoph", children: T }) : T,
              I,
            ],
          }),
        )
      );
    }
    d.displayName = d.name + " [from " + i.id + "]";
    function m(e, t, n, a, i, l) {
      var s = l.pmCampaignId;
      return a &&
        l.local === !0 &&
        s != null &&
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
              { campaignId: s, mediaType: n },
            ),
          })
        : n ===
            o("WAWebInteractiveMessageHeaderMediaType")
              .InteractiveMessageHeaderMediaType.IMAGE
          ? u.jsx(r("WAWebInteractiveImageHeader"), {
              msg: l,
              displayType: e != null ? e : void 0,
              isMsgVisible: i,
              pictureRef: t != null ? t : r("WAWebNoop"),
            })
          : n ===
              o("WAWebInteractiveMessageHeaderMediaType")
                .InteractiveMessageHeaderMediaType.DOCUMENT
            ? u.jsx(r("WAWebMediaDocumentPreview"), { msg: l })
            : n ===
                o("WAWebInteractiveMessageHeaderMediaType")
                  .InteractiveMessageHeaderMediaType.VIDEO
              ? u.jsx(r("WAWebVideoPreview.react"), {
                  msg: l,
                  mediaData: l.mediaData,
                  displayType: e != null ? e : void 0,
                })
              : n ===
                  o("WAWebInteractiveMessageHeaderMediaType")
                    .InteractiveMessageHeaderMediaType.PRODUCT
                ? u.jsx(r("WAWebBizProduct"), {
                    displayAuthor: !1,
                    msg: l,
                    displayType: e != null ? e : void 0,
                    trusted: o("WAWebMsgModelPropUtils").isTrusted(l.unsafe()),
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
