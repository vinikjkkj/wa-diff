__d(
  "WAWebInteractiveMessage",
  [
    "WAWebChatGetters",
    "WAWebFrontendMsgGetters",
    "WAWebGetInteractiveActions",
    "WAWebInteractiveBubble.react",
    "WAWebInteractiveHeader",
    "WAWebInteractiveMessagesNativeFlowName",
    "WAWebMsgGetters",
    "WAWebOrderDetails",
    "WAWebOrderStatus",
    "WAWebShowMessageActionFallbackErrorAction",
    "react",
    "useWAWebConversationPanelCanCompose",
    "useWAWebMsgValues",
    "useWAWebOrderPaymentStatus",
    "useWAWebUIM",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = e.displayAuthor,
        n = e.displayType,
        a = e.msg,
        i = e.quotedMsg,
        l = r("useWAWebUIM")(),
        u = o("useWAWebMsgValues").useMsgValues(a.id, [
          o("WAWebMsgGetters").getNativeFlowName,
          o("WAWebMsgGetters").getGalaxyFlowDisabled,
        ]),
        c = u[0],
        d = u[1],
        m = o("WAWebFrontendMsgGetters").getChat(a.unsafe()),
        p = r("useWAWebConversationPanelCanCompose")(m),
        _ = p[0],
        f = _ || o("WAWebChatGetters").getIsBroadcast(m),
        g = o("WAWebOrderDetails").getOrderInfo(a),
        h = o("useWAWebOrderPaymentStatus").useOrderPaymentStatus(
          m,
          g == null ? void 0 : g.referenceId,
        ),
        y = r("WAWebGetInteractiveActions")({
          msg: a,
          uimContext: l,
          canCompose: f,
          orderPaymentStatus: h,
        }),
        C =
          y == null
            ? void 0
            : y.map(function (e) {
                var t,
                  n =
                    e.nativeFlowName ===
                      r("WAWebInteractiveMessagesNativeFlowName").CTA_FLOW &&
                    d === !0;
                return {
                  testid: e.testid,
                  label: e.label,
                  disabled: e.disabled === !0 || n === !0,
                  onClick:
                    (t = e.onClick) != null
                      ? t
                      : function () {
                          return r(
                            "WAWebShowMessageActionFallbackErrorAction",
                          )();
                        },
                  Icon: e.Icon,
                };
              });
      return s.jsx(r("WAWebInteractiveBubble.react"), {
        msg: a,
        displayAuthor: t,
        displayType: n,
        displayFooter:
          c !== r("WAWebInteractiveMessagesNativeFlowName").ORDER_STATUS ||
          o("WAWebOrderStatus").hasOrderStatusButton(a),
        header: s.jsx(r("WAWebInteractiveHeader"), {
          msg: a,
          quotedMsg: i,
          displayType: n,
        }),
        actions: C,
        hideMeta:
          c === r("WAWebInteractiveMessagesNativeFlowName").ORDER_DETAILS &&
          o("WAWebOrderStatus").isPaymentRequest(m, g),
      });
    }
    ((u.displayName = u.name + " [from " + i.id + "]"), (l.default = u));
  },
  98,
);
