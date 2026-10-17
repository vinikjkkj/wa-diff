__d(
  "WAWebInteractiveMessage",
  [
    "WAWebChatGetters",
    "WAWebFrontendMsgGetters",
    "WAWebGetInteractiveActions",
    "WAWebGetInteractiveFooterText",
    "WAWebInteractiveActionMenuDialog.react",
    "WAWebInteractiveBubble.react",
    "WAWebInteractiveHeader",
    "WAWebInteractiveMessagesNativeFlowName",
    "WAWebIsBloksOnlyMessage",
    "WAWebMsgGetters",
    "WAWebMsgType",
    "WAWebOrderDetails",
    "WAWebOrderStatus",
    "WAWebOrderStatusButton",
    "WAWebPrimaryFeaturesGetters",
    "WAWebShowMessageActionFallbackErrorAction",
    "WDSDialogBridge",
    "react",
    "useWAWebConversationPanelCanCompose",
    "useWAWebMsgValues",
    "useWAWebOrderPaymentStatus",
    "useWAWebPrimaryFeaturesValues",
    "useWAWebUIM",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t,
        n = e.displayAuthor,
        a = e.displayType,
        i = e.msgKey,
        l = e.quotedMsg,
        u = r("useWAWebUIM")(),
        d = o("useWAWebMsgValues").useMsgValues(i, [
          (t = o("WAWebMsgGetters")).getNativeFlowName,
          t.getGalaxyFlowDisabled,
          t.getInteractivePayload,
          t.getSignupCtaTapped,
          t.getType,
          t.getInteractiveType,
          t.getNativeFlowButtons,
          t.getBloksWidget,
          t.getInteractiveHeader,
          t.getFooter,
          o("WAWebFrontendMsgGetters").getText,
          t.getIsNewsletterMsg,
          t.getIsFromTemplate,
          t.getIsSentByMe,
          t.getSender,
          t.getT,
          t.getBizBotType,
        ]),
        m = d[0],
        p = d[1],
        _ = d[2],
        f = d[3],
        g = d[4],
        h = d[5],
        y = d[6],
        C = d[7],
        b = d[8],
        v = d[9],
        S = d[10],
        R = d[11],
        L = d[12],
        E = d[13],
        k = d[14],
        I = d[15],
        T = d[16];
      o("useWAWebPrimaryFeaturesValues").usePrimaryFeaturesValues([
        o("WAWebPrimaryFeaturesGetters").getCustomPaymentMethodsSyncSupport,
      ]);
      var D = o("WAWebFrontendMsgGetters").getChatByMsgKey(i, R),
        x = r("useWAWebConversationPanelCanCompose")(D),
        $ = x[0],
        P = $ || o("WAWebChatGetters").getIsBroadcast(D),
        N = o("WAWebOrderDetails").getOrderInfoFor({
          interactivePayload: _,
          interactiveType: h,
          nativeFlowButtons: y,
          nativeFlowName: m,
          type: g,
        }),
        M = o("useWAWebOrderPaymentStatus").useOrderPaymentStatus(
          D,
          N == null ? void 0 : N.referenceId,
          o("WAWebOrderStatus").isSimplifiedOrder(N),
        ),
        w =
          g !== o("WAWebMsgType").MSG_TYPE.INTERACTIVE
            ? null
            : r("WAWebGetInteractiveActions")({
                canCompose: P,
                msgKey: i,
                orderPaymentStatus: M,
                uimContext: u,
                values: {
                  chat: D,
                  galaxyFlowDisabled: p,
                  interactivePayload: _,
                  interactiveType: h,
                  isFromTemplate: L,
                  isOutgoingBizBot: i.fromMe && T != null,
                  isSentByMe: E,
                  nativeFlowName: m,
                  sender: k,
                  signupCtaTapped: f,
                  t: I,
                  type: g,
                },
              }),
        A =
          w == null
            ? void 0
            : w.map(function (e) {
                var t =
                  e.nativeFlowName ===
                    r("WAWebInteractiveMessagesNativeFlowName").CTA_FLOW &&
                  p === !0;
                return {
                  testid: e.testid,
                  label: e.label,
                  disabled: e.disabled === !0 || t === !0,
                  onClick: c(e),
                  Icon: e.Icon,
                };
              }),
        F = m === r("WAWebInteractiveMessagesNativeFlowName").ORDER_STATUS;
      return s.jsx(r("WAWebInteractiveBubble.react"), {
        msgKey: i,
        displayAuthor: n,
        displayType: a,
        displayFooter:
          !F ||
          o("WAWebOrderStatusButton").getOrderStatusButtonFor({
            interactivePayload: _,
            type: g,
          }) != null,
        header: s.jsx(r("WAWebInteractiveHeader"), {
          msgKey: i,
          quotedMsg: l,
          displayType: a,
        }),
        actions: A,
        hideMeta:
          (m === r("WAWebInteractiveMessagesNativeFlowName").ORDER_DETAILS &&
            o("WAWebOrderStatus").isPaymentRequest(D, N)) ||
          r("WAWebIsBloksOnlyMessage")({
            bloksWidget: C,
            footerText: o(
              "WAWebGetInteractiveFooterText",
            ).getInteractiveFooterTextFor({
              footer: v,
              interactivePayload: _,
              nativeFlowName: m,
              type: g,
            }),
            interactiveHeader: b,
            text: S,
          }),
      });
    }
    u.displayName = u.name + " [from " + i.id + "]";
    function c(e) {
      var t,
        n = e.menu;
      return n != null
        ? function () {
            return o("WDSDialogBridge").openWDSDialog(
              s.jsx(r("WAWebInteractiveActionMenuDialog.react"), { menu: n }),
            );
          }
        : (t = e.onClick) != null
          ? t
          : function () {
              return r("WAWebShowMessageActionFallbackErrorAction")();
            };
    }
    l.default = u;
  },
  98,
);
