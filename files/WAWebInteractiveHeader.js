__d(
  "WAWebInteractiveHeader",
  [
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
      var n = t.displayType,
        a = t.headerRef,
        i = t.isMsgVisible,
        l = t.minTextHeight,
        s = t.msg,
        d = t.quotedMsg,
        m = r("useWAWebUIM")(),
        p = o("WAWebFrontendMsgGetters").getChat(s.unsafe()),
        _ = r("useWAWebConversationPanelCanCompose")(p),
        f = _[0],
        g = o("WAWebOrderDetails").getOrderInfo(s),
        h = o("WAWebInAppSignupPrompt").getInAppSignupPromptInfo(s),
        y = o("useWAWebOrderPaymentStatus").useOrderPaymentStatus(
          p,
          g == null ? void 0 : g.referenceId,
          o("WAWebOrderStatus").isSimplifiedOrder(g),
        ),
        C = s.interactiveHeader,
        b,
        v,
        S = !1,
        R = !1,
        L = !1;
      if (
        !o("WAWebOrderStatus").hasOrderStatusButton(s) &&
        C != null &&
        C.mediaType
      )
        switch (C.mediaType) {
          case o("WAWebInteractiveMessageHeaderMediaType")
            .InteractiveMessageHeaderMediaType.IMAGE:
            v = u.jsx(r("WAWebInteractiveImageHeader"), {
              msg: s,
              displayType: n,
              isMsgVisible: i,
              pictureRef: a != null ? a : r("WAWebNoop"),
            });
            break;
          case o("WAWebInteractiveMessageHeaderMediaType")
            .InteractiveMessageHeaderMediaType.DOCUMENT:
            v = u.jsx(r("WAWebMediaDocumentPreview"), { msg: s });
            break;
          case o("WAWebInteractiveMessageHeaderMediaType")
            .InteractiveMessageHeaderMediaType.VIDEO:
            v = u.jsx(r("WAWebVideoPreview.react"), {
              msg: s,
              mediaData: s.mediaData,
              displayType: n,
            });
            break;
          case o("WAWebInteractiveMessageHeaderMediaType")
            .InteractiveMessageHeaderMediaType.PRODUCT:
            v = u.jsx(r("WAWebBizProduct"), {
              displayAuthor: !1,
              msg: s,
              displayType: n,
              trusted: o("WAWebMsgModelPropUtils").isTrusted(s.unsafe()),
              isCarouselCard: !0,
            });
            break;
        }
      s.nativeFlowName ===
        r("WAWebInteractiveMessagesNativeFlowName").ORDER_DETAILS ||
      s.nativeFlowName ===
        r("WAWebInteractiveMessagesNativeFlowName").PAYMENT_INFO ||
      s.nativeFlowName ===
        r("WAWebInteractiveMessagesNativeFlowName").ORDER_STATUS ||
      s.nativeFlowName ===
        r("WAWebInteractiveMessagesNativeFlowName").PAYMENT_STATUS ||
      s.nativeFlowName ===
        r("WAWebInteractiveMessagesNativeFlowName").PAYMENT_METHOD
        ? ((b = u.jsx(r("WAWebInteractiveNativeFlowOrderHeader"), {
            msg: s,
            quotedMsg: d,
            displayType: n,
          })),
          (S =
            s.nativeFlowName ===
              r("WAWebInteractiveMessagesNativeFlowName").ORDER_DETAILS &&
            o("WAWebOrderStatus").isPaymentRequest(p, g)))
        : s.nativeFlowName ===
            r("WAWebInteractiveMessagesNativeFlowName").PAYMENT_REMINDER
          ? (b = u.jsx(r("WAWebPaymentReminderHeader.react"), { msg: s }))
          : s.nativeFlowName ===
              r("WAWebInteractiveMessagesNativeFlowName").BOOKING_CONFIRMATION
            ? (b = u.jsx(r("WAWebBookingConfirmationHeader.react"), { msg: s }))
            : s.nativeFlowName ===
                r("WAWebInteractiveMessagesNativeFlowName").INAPP_SIGNUP
              ? (b = u.jsx(r("WAWebInAppSignupConfirmationHeader.react"), {
                  msg: s,
                }))
              : s.nativeFlowName ===
                    r("WAWebInteractiveMessagesNativeFlowName").API_SIGNUP &&
                  h != null
                ? ((b = u.jsx(r("WAWebInAppSignupPromptHeader.react"), {
                    info: h,
                    msg: s,
                  })),
                  (L = !0))
                : s.nativeFlowName ===
                    r("WAWebInteractiveMessagesNativeFlowName").PAYMENT_REQUEST
                  ? o(
                      "WAWebBrPaymentRequest",
                    ).shouldShowPaymentRequestPayWithHeader(s.isFromTemplate) &&
                    ((b = u.jsx(r("WAWebPaymentRequestHeader.react"), {
                      msg: s,
                    })),
                    (R = !0))
                  : C &&
                    (C.title != null || C.subtitle != null) &&
                    (b = v
                      ? u.jsx(r("WAWebInteractiveTitleHeader"), { msg: s })
                      : u.jsx("div", {
                          className: "x1k70j0n",
                          children: u.jsx(r("WAWebInteractiveTitleHeader"), {
                            msg: s,
                          }),
                        }));
      var E = C == null ? void 0 : C.mediaType;
      if (
        (v != null &&
          s.nativeFlowName ===
            r("WAWebInteractiveMessagesNativeFlowName").ORDER_DETAILS &&
          g != null &&
          (E ===
            o("WAWebInteractiveMessageHeaderMediaType")
              .InteractiveMessageHeaderMediaType.DOCUMENT ||
            (E ===
              o("WAWebInteractiveMessageHeaderMediaType")
                .InteractiveMessageHeaderMediaType.IMAGE &&
              o("WAWebOrderStatus").isSimplifiedOrder(g))) &&
          (v = null),
        b)
      ) {
        var k = r("WAWebGetInteractiveHeaderAction")({
          canCompose: f,
          msg: s,
          uimContext: m,
        });
        if (k) {
          var I = y == null,
            T = I && o("WAWebOrderStatus").isSimplifiedOrder(g);
          b = u.jsx("div", {
            role: "button",
            onClick: T ? null : k.onClick,
            children: b,
          });
        }
      }
      if (b == null && v == null) return null;
      var D;
      return (
        S
          ? (D = c.paymentRequestHeaderSpacing)
          : R
            ? (D = c.paymentRequestCtaHeaderSpacing)
            : L
              ? (D = c.signupPromptHeaderSpacing)
              : (D = c.headerSpacing),
        u.jsxs(
          "div",
          babelHelpers.extends({}, (e || (e = r("stylex"))).props(D), {
            children: [
              b && v ? u.jsx("div", { className: "xzueoph", children: v }) : v,
              b,
            ],
          }),
        )
      );
    }
    ((d.displayName = d.name + " [from " + i.id + "]"), (l.default = d));
  },
  98,
);
