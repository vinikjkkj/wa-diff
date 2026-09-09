__d(
  "WAWebInteractiveMessage",
  [
    "WAWebChatGetters",
    "WAWebFrontendMsgGetters",
    "WAWebGetInteractiveActions",
    "WAWebInteractiveBubble.react",
    "WAWebInteractiveHeader",
    "WAWebInteractiveMessagesNativeFlowName",
    "WAWebIsBloksOnlyMessage",
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
      var t,
        n = e.displayAuthor,
        a = e.displayType,
        i = e.msg,
        l = e.quotedMsg,
        u = r("useWAWebUIM")(),
        c = o("useWAWebMsgValues").useMsgValues(i.id, [
          (t = o("WAWebMsgGetters")).getNativeFlowName,
          t.getGalaxyFlowDisabled,
          t.getInteractivePayload,
          t.getSignupCtaTapped,
        ]),
        d = c[0],
        m = c[1],
        p = o("WAWebFrontendMsgGetters").getChat(i.unsafe()),
        _ = r("useWAWebConversationPanelCanCompose")(p),
        f = _[0],
        g = f || o("WAWebChatGetters").getIsBroadcast(p),
        h = o("WAWebOrderDetails").getOrderInfo(i),
        y = o("useWAWebOrderPaymentStatus").useOrderPaymentStatus(
          p,
          h == null ? void 0 : h.referenceId,
          o("WAWebOrderStatus").isSimplifiedOrder(h),
        ),
        C = r("WAWebGetInteractiveActions")({
          msg: i,
          uimContext: u,
          canCompose: g,
          orderPaymentStatus: y,
        }),
        b =
          C == null
            ? void 0
            : C.map(function (e) {
                var t,
                  n =
                    e.nativeFlowName ===
                      r("WAWebInteractiveMessagesNativeFlowName").CTA_FLOW &&
                    m === !0;
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
              }),
        v = d === r("WAWebInteractiveMessagesNativeFlowName").ORDER_STATUS;
      return s.jsx(r("WAWebInteractiveBubble.react"), {
        msg: i,
        displayAuthor: n,
        displayType: a,
        displayFooter: !v || o("WAWebOrderStatus").hasOrderStatusButton(i),
        header: s.jsx(r("WAWebInteractiveHeader"), {
          msg: i,
          quotedMsg: l,
          displayType: a,
        }),
        actions: b,
        hideMeta:
          (d === r("WAWebInteractiveMessagesNativeFlowName").ORDER_DETAILS &&
            o("WAWebOrderStatus").isPaymentRequest(p, h)) ||
          r("WAWebIsBloksOnlyMessage")(i),
      });
    }
    ((u.displayName = u.name + " [from " + i.id + "]"), (l.default = u));
  },
  98,
);
