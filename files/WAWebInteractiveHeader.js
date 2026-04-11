__d(
  "WAWebInteractiveHeader",
  [
    "WAWebBizProduct",
    "WAWebBookingConfirmationHeader.react",
    "WAWebBrPaymentRequest",
    "WAWebFrontendMsgGetters",
    "WAWebGetInteractiveHeaderAction",
    "WAWebInAppSignupConfirmationHeader.react",
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
    "WAWebUISpacing",
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
        h = o("useWAWebOrderPaymentStatus").useOrderPaymentStatus(
          p,
          g == null ? void 0 : g.referenceId,
        ),
        y = s.interactiveHeader,
        C,
        b,
        v = !1,
        S = !1;
      if (
        !o("WAWebOrderStatus").hasOrderStatusButton(s) &&
        y != null &&
        y.mediaType
      )
        switch (y.mediaType) {
          case o("WAWebInteractiveMessageHeaderMediaType")
            .InteractiveMessageHeaderMediaType.IMAGE:
            b = u.jsx(r("WAWebInteractiveImageHeader"), {
              msg: s,
              displayType: n,
              isMsgVisible: i,
              pictureRef: a != null ? a : r("WAWebNoop"),
            });
            break;
          case o("WAWebInteractiveMessageHeaderMediaType")
            .InteractiveMessageHeaderMediaType.DOCUMENT:
            b = u.jsx(r("WAWebMediaDocumentPreview"), { msg: s });
            break;
          case o("WAWebInteractiveMessageHeaderMediaType")
            .InteractiveMessageHeaderMediaType.VIDEO:
            b = u.jsx(r("WAWebVideoPreview.react"), {
              msg: s,
              mediaData: s.mediaData,
              displayType: n,
            });
            break;
          case o("WAWebInteractiveMessageHeaderMediaType")
            .InteractiveMessageHeaderMediaType.PRODUCT:
            b = u.jsx(r("WAWebBizProduct"), {
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
        ? ((C = u.jsx(r("WAWebInteractiveNativeFlowOrderHeader"), {
            msg: s,
            quotedMsg: d,
            displayType: n,
          })),
          (v =
            s.nativeFlowName ===
              r("WAWebInteractiveMessagesNativeFlowName").ORDER_DETAILS &&
            o("WAWebOrderStatus").isPaymentRequest(p, g)))
        : s.nativeFlowName ===
            r("WAWebInteractiveMessagesNativeFlowName").PAYMENT_REMINDER
          ? (C = u.jsx(r("WAWebPaymentReminderHeader.react"), { msg: s }))
          : s.nativeFlowName ===
              r("WAWebInteractiveMessagesNativeFlowName").BOOKING_CONFIRMATION
            ? (C = u.jsx(r("WAWebBookingConfirmationHeader.react"), { msg: s }))
            : s.nativeFlowName ===
                r("WAWebInteractiveMessagesNativeFlowName").INAPP_SIGNUP
              ? (C = u.jsx(r("WAWebInAppSignupConfirmationHeader.react"), {
                  msg: s,
                }))
              : s.nativeFlowName ===
                  r("WAWebInteractiveMessagesNativeFlowName").PAYMENT_REQUEST
                ? o(
                    "WAWebBrPaymentRequest",
                  ).shouldShowPaymentRequestPayWithHeader(s.isFromTemplate) &&
                  ((C = u.jsx(r("WAWebPaymentRequestHeader.react"), {
                    msg: s,
                  })),
                  (S = !0))
                : y &&
                  (y.title != null || y.subtitle != null) &&
                  (C = b
                    ? u.jsx(r("WAWebInteractiveTitleHeader"), { msg: s })
                    : u.jsx(
                        "div",
                        babelHelpers.extends(
                          {},
                          (e || (e = r("stylex"))).props(
                            o("WAWebUISpacing").uiMargin.top6,
                          ),
                          {
                            children: u.jsx(r("WAWebInteractiveTitleHeader"), {
                              msg: s,
                            }),
                          },
                        ),
                      ));
      var R = y == null ? void 0 : y.mediaType;
      if (
        (b != null &&
          s.nativeFlowName ===
            r("WAWebInteractiveMessagesNativeFlowName").ORDER_DETAILS &&
          g != null &&
          R ===
            o("WAWebInteractiveMessageHeaderMediaType")
              .InteractiveMessageHeaderMediaType.DOCUMENT &&
          (b = null),
        C)
      ) {
        var L = r("WAWebGetInteractiveHeaderAction")({
          canCompose: f,
          msg: s,
          uimContext: m,
        });
        if (L) {
          var E = h == null,
            k = E && o("WAWebOrderStatus").isSimplifiedOrder(g);
          C = u.jsx("div", {
            role: "button",
            onClick: k ? null : L.onClick,
            children: C,
          });
        }
      }
      if (C == null && b == null) return null;
      var I;
      return (
        v
          ? (I = c.paymentRequestHeaderSpacing)
          : S
            ? (I = c.paymentRequestCtaHeaderSpacing)
            : (I = c.headerSpacing),
        u.jsxs(
          "div",
          babelHelpers.extends({}, (e || (e = r("stylex"))).props(I), {
            children: [
              C && b
                ? u.jsx(
                    "div",
                    babelHelpers.extends(
                      {},
                      (e || (e = r("stylex"))).props(
                        o("WAWebUISpacing").uiMargin.bottom6,
                      ),
                      { children: b },
                    ),
                  )
                : b,
              C,
            ],
          }),
        )
      );
    }
    ((d.displayName = d.name + " [from " + i.id + "]"), (l.default = d));
  },
  98,
);
