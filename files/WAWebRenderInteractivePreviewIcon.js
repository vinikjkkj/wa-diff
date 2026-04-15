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
    "react-compiler-runtime",
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
      var t = o("react-compiler-runtime").c(5),
        n = e.msg,
        a;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((a = [
            o("WAWebMsgGetters").getInteractiveType,
            o("WAWebMsgGetters").getNativeFlowName,
          ]),
          (t[0] = a))
        : (a = t[0]);
      var i = o("useWAWebMsgValues").useMsgValues(n.id, a),
        l = i[0],
        c = i[1];
      if (l === r("WAWebInteractiveMessageType").SHOPS_STOREFRONT) {
        var d;
        return (
          t[1] === Symbol.for("react.memo_cache_sentinel")
            ? ((d = s.jsx(o("WAWebShopFilledIcon.react").ShopFilledIcon, {
                xstyle: [u.container, u.marginTop2],
                width: 13,
                height: 14,
              })),
              (t[1] = d))
            : (d = t[1]),
          d
        );
      }
      if (l === r("WAWebInteractiveMessageType").NATIVE_FLOW) {
        var m;
        return (
          t[2] !== c
            ? ((m =
                c === r("WAWebInteractiveMessagesNativeFlowName").ORDER_DETAILS
                  ? s.jsx(o("WAWebReceiptIcon.react").ReceiptIcon, {
                      xstyle: [u.container, u.marginTop2],
                      width: 13,
                      height: 14,
                    })
                  : c ===
                      r("WAWebInteractiveMessagesNativeFlowName")
                        .BOOKING_CONFIRMATION
                    ? s.jsx(
                        o("WAWebIcChatlistEventIcon.react").IcChatlistEventIcon,
                        {
                          iconXstyle: [u.container, u.marginTop2],
                          width: 13,
                          height: 14,
                        },
                      )
                    : c ===
                        r("WAWebInteractiveMessagesNativeFlowName").PAYMENT_INFO
                      ? null
                      : s.jsx(
                          o("WAWebMessageFailIcon.react").MessageFailIcon,
                          {},
                        )),
              (t[2] = c),
              (t[3] = m))
            : (m = t[3]),
          m
        );
      }
      var p;
      return (
        t[4] === Symbol.for("react.memo_cache_sentinel")
          ? ((p = s.jsx(o("WAWebMessageFailIcon.react").MessageFailIcon, {})),
            (t[4] = p))
          : (p = t[4]),
        p
      );
    }
    l.default = c;
  },
  98,
);
