__d(
  "WAWebRenderNativeFlowPreviewIcon",
  [
    "WAWebInteractiveMessagesNativeFlowName",
    "WAWebMsgGetters",
    "WDSIconIcReceipt.react",
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
          o("WAWebMsgGetters").getNativeFlowName,
        ]),
        a = n[0];
      return a === r("WAWebInteractiveMessagesNativeFlowName").ORDER_DETAILS
        ? s.jsx(r("WDSIconIcReceipt.react"), {
            xstyle: [u.container, u.marginTop2],
            width: 13,
            height: 13,
            "aria-hidden": !0,
            testid: "order_details_preview_icon",
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
