__d(
  "WAWebRenderNativeFlowPreviewIcon",
  [
    "WAWebInteractiveMessagesNativeFlowName",
    "WAWebMessageFailIcon.react",
    "WAWebMsgGetters",
    "WAWebReceiptIcon.react",
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
      var t = o("react-compiler-runtime").c(3),
        n = e.msg,
        a;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((a = [o("WAWebMsgGetters").getNativeFlowName]), (t[0] = a))
        : (a = t[0]);
      var i = o("useWAWebMsgValues").useMsgValues(n.id, a),
        l = i[0];
      if (l === r("WAWebInteractiveMessagesNativeFlowName").ORDER_DETAILS) {
        var c;
        return (
          t[1] === Symbol.for("react.memo_cache_sentinel")
            ? ((c = s.jsx(o("WAWebReceiptIcon.react").ReceiptIcon, {
                xstyle: [u.container, u.marginTop2],
                width: 13,
                height: 14,
                "aria-hidden": !0,
              })),
              (t[1] = c))
            : (c = t[1]),
          c
        );
      }
      var d;
      return (
        t[2] === Symbol.for("react.memo_cache_sentinel")
          ? ((d = s.jsx(o("WAWebMessageFailIcon.react").MessageFailIcon, {})),
            (t[2] = d))
          : (d = t[2]),
        d
      );
    }
    l.default = c;
  },
  98,
);
