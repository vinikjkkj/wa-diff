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
    "useWAWebConversationPanelCanCompose",
    "useWAWebIsBizBroadcastProChat",
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
        a = t.displayType,
        i = t.headerRef,
        l = t.isMsgVisible,
        s = t.minTextHeight,
        d = t.msg,
        p = t.quotedMsg,
        _ = r("useWAWebUIM")(),
        f = o("WAWebFrontendMsgGetters").getChat(d.unsafe()),
        g = r("useWAWebIsBizBroadcastProChat")(f),
        h = r("useWAWebConversationPanelCanCompose")(f),
        y = h[0],
        C = o("WAWebOrderDetails").getOrderInfo(d),
        b = o("WAWebInAppSignupPrompt").getInAppSignupPromptInfo(d),
        v = o("useWAWebOrderPaymentStatus").useOrderPaymentStatus(
          f,
          C == null ? void 0 : C.referenceId,
          o("WAWebOrderStatus").isSimplifiedOrder(C),
        ),
        S = d.interactiveHeader,
        R = r("useWAWebIsBlobInMemoryCache")(
          (n = d.mediaData) == null ? void 0 : n.filehash,
        ),
        L,
        E,
        k = !1,
        I = !1,
        T = !1;
      (!o("WAWebOrderStatus").hasOrderStatusButton(d) &&
        S != null &&
        S.mediaType &&
        (E = m(a, i, S.mediaType, R, g, l, d)),
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
          ? ((L = u.jsx(r("WAWebInteractiveNativeFlowOrderHeader"), {
              msg: d,
              quotedMsg: p,
              displayType: a,
            })),
            (k =
              d.nativeFlowName ===
                r("WAWebInteractiveMessagesNativeFlowName").ORDER_DETAILS &&
              o("WAWebOrderStatus").isPaymentRequest(f, C)))
          : d.nativeFlowName ===
              r("WAWebInteractiveMessagesNativeFlowName").PAYMENT_REMINDER
            ? (L = u.jsx(r("WAWebPaymentReminderHeader.react"), {
                msgKey: d.id,
              }))
            : d.nativeFlowName ===
                r("WAWebInteractiveMessagesNativeFlowName").BOOKING_CONFIRMATION
              ? (L = u.jsx(r("WAWebBookingConfirmationHeader.react"), {
                  msgKey: d.id,
                }))
              : d.nativeFlowName ===
                  r("WAWebInteractiveMessagesNativeFlowName").INAPP_SIGNUP
                ? (L = u.jsx(r("WAWebInAppSignupConfirmationHeader.react"), {
                    msgKey: d.id,
                  }))
                : d.nativeFlowName ===
                      r("WAWebInteractiveMessagesNativeFlowName").API_SIGNUP &&
                    b != null
                  ? ((L = u.jsx(r("WAWebInAppSignupPromptHeader.react"), {
                      info: b,
                      msgKey: d.id,
                    })),
                    (T = !0))
                  : d.nativeFlowName ===
                      r("WAWebInteractiveMessagesNativeFlowName")
                        .PAYMENT_REQUEST
                    ? o(
                        "WAWebBrPaymentRequest",
                      ).shouldShowPaymentRequestPayWithHeader(
                        d.isFromTemplate,
                      ) &&
                      ((L = u.jsx(r("WAWebPaymentRequestHeader.react"), {
                        msgKey: d.id,
                      })),
                      (I = !0))
                    : S &&
                      (S.title != null || S.subtitle != null) &&
                      (L = E
                        ? u.jsx(r("WAWebInteractiveTitleHeader"), {
                            msgKey: d.id,
                          })
                        : u.jsx("div", {
                            className: "x1k70j0n",
                            children: u.jsx(r("WAWebInteractiveTitleHeader"), {
                              msgKey: d.id,
                            }),
                          })));
      var D = S == null ? void 0 : S.mediaType;
      if (
        (E != null &&
          d.nativeFlowName ===
            r("WAWebInteractiveMessagesNativeFlowName").ORDER_DETAILS &&
          C != null &&
          (D ===
            o("WAWebInteractiveMessageHeaderMediaType")
              .InteractiveMessageHeaderMediaType.DOCUMENT ||
            (D ===
              o("WAWebInteractiveMessageHeaderMediaType")
                .InteractiveMessageHeaderMediaType.IMAGE &&
              o("WAWebOrderStatus").isSimplifiedOrder(C))) &&
          (E = null),
        L)
      ) {
        var x = r("WAWebGetInteractiveHeaderAction")({
          canCompose: y,
          msg: d,
          uimContext: _,
        });
        if (x) {
          var $ = v == null,
            P = $ && o("WAWebOrderStatus").isSimplifiedOrder(C);
          L = u.jsx("div", {
            role: "button",
            onClick: P ? null : x.onClick,
            children: L,
          });
        }
      }
      if (L == null && E == null) return null;
      var N;
      return (
        k
          ? (N = c.paymentRequestHeaderSpacing)
          : I
            ? (N = c.paymentRequestCtaHeaderSpacing)
            : T
              ? (N = c.signupPromptHeaderSpacing)
              : (N = c.headerSpacing),
        u.jsxs(
          "div",
          babelHelpers.extends({}, (e || (e = r("stylex"))).props(N), {
            children: [
              L && E ? u.jsx("div", { className: "xzueoph", children: E }) : E,
              L,
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
              msgKey: s.id,
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
                    msgKey: s.id,
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
