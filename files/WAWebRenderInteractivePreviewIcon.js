__d(
  "WAWebRenderInteractivePreviewIcon",
  [
    "WAWebBookingConfirmationGating",
    "WAWebInteractiveMessageType",
    "WAWebInteractiveMessagesNativeFlowName",
    "WAWebMsgGetters",
    "WDSIconIcEventFilled.react",
    "WDSIconIcReceipt.react",
    "WDSIconIcShoppingBagFill.react",
    "WDSIconWdsIcUnsupportedMessage.react",
    "react",
    "useWAWebMsgValues",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = {
        container: {
          display: "x1rg5ohu",
          marginInlineEnd: "xjn30re",
          $$css: !0,
        },
        marginTop2: { marginTop: "xfl633f", $$css: !0 },
      };
    function c(e) {
      var t = e.msg,
        n = o("useWAWebMsgValues").useMsgValues(t.id, [
          o("WAWebMsgGetters").getInteractiveType,
          o("WAWebMsgGetters").getNativeFlowName,
        ]),
        a = n[0],
        i = n[1];
      return a === r("WAWebInteractiveMessageType").SHOPS_STOREFRONT
        ? s.jsx(r("WDSIconIcShoppingBagFill.react"), {
            xstyle: [u.container, u.marginTop2],
            width: 14,
            height: 14,
          })
        : a === r("WAWebInteractiveMessageType").NATIVE_FLOW
          ? i === r("WAWebInteractiveMessagesNativeFlowName").ORDER_DETAILS
            ? s.jsx(r("WDSIconIcReceipt.react"), {
                xstyle: [u.container, u.marginTop2],
                width: 13,
                height: 13,
                testid: "order_details_preview_icon",
              })
            : i ===
                r("WAWebInteractiveMessagesNativeFlowName").BOOKING_CONFIRMATION
              ? o(
                  "WAWebBookingConfirmationGating",
                ).isBookingConfirmationEnabled()
                ? s.jsx(r("WDSIconIcEventFilled.react"), {
                    iconXstyle: [u.container, u.marginTop2],
                    width: 14,
                    height: 14,
                    testid: "booking-confirmation-preview-icon",
                  })
                : s.jsx(r("WDSIconWdsIcUnsupportedMessage.react"), {
                    width: 20,
                    height: 20,
                    testid: "message-fail",
                  })
              : i === r("WAWebInteractiveMessagesNativeFlowName").PAYMENT_INFO
                ? null
                : s.jsx(r("WDSIconWdsIcUnsupportedMessage.react"), {
                    width: 20,
                    height: 20,
                    testid: "message-fail",
                  })
          : s.jsx(r("WDSIconWdsIcUnsupportedMessage.react"), {
              width: 20,
              height: 20,
              testid: "message-fail",
            });
    }
    ((c.displayName = c.name + " [from " + i.id + "]"), (l.default = c));
  },
  98,
);
