__d(
  "WAWebRenderInteractivePreviewIcon",
  [
    "WAWebIcChatlistEventIcon.react",
    "WAWebInteractiveMessageType",
    "WAWebInteractiveMessagesNativeFlowName",
    "WAWebMessageFailIcon.react",
    "WAWebMsgGetters",
    "WAWebReceiptIcon.react",
    "WAWebShopFilledIcon.react",
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
        ? s.jsx(o("WAWebShopFilledIcon.react").ShopFilledIcon, {
            xstyle: [u.container, u.marginTop2],
            width: 13,
            height: 14,
          })
        : a === r("WAWebInteractiveMessageType").NATIVE_FLOW
          ? i === r("WAWebInteractiveMessagesNativeFlowName").ORDER_DETAILS
            ? s.jsx(o("WAWebReceiptIcon.react").ReceiptIcon, {
                xstyle: [u.container, u.marginTop2],
                width: 13,
                height: 14,
              })
            : i ===
                r("WAWebInteractiveMessagesNativeFlowName").BOOKING_CONFIRMATION
              ? s.jsx(o("WAWebIcChatlistEventIcon.react").IcChatlistEventIcon, {
                  iconXstyle: [u.container, u.marginTop2],
                  width: 13,
                  height: 14,
                })
              : i === r("WAWebInteractiveMessagesNativeFlowName").PAYMENT_INFO
                ? null
                : s.jsx(o("WAWebMessageFailIcon.react").MessageFailIcon, {})
          : s.jsx(o("WAWebMessageFailIcon.react").MessageFailIcon, {});
    }
    ((c.displayName = c.name + " [from " + i.id + "]"), (l.default = c));
  },
  98,
);
